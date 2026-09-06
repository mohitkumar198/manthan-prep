/* Manthan Prep  isolated profile repository.
 * The UI can use a real authenticated backend when configured and falls back
 * silently to a local user record when running offline or in the preview.
 */
(function attachProfileRepository(global) {
  const SCHEMA = {
    id: 'string, authenticated user id',
    name: 'string',
    email: 'string',
    phone: 'string',
    profile_picture_url: 'string',
    updated_at: 'ISO-8601 timestamp',
  };

  const DEFAULT_USER = {
    id: 'local-user',
    name: '',
    email: '',
    phone: '',
    profile_picture_url: '',
    updated_at: new Date().toISOString(),
  };

  class ProfileRepository {
    constructor() {
      this.config = global.MANTHAN_PROFILE_CONFIG || {};
      this.storageKey = 'manthanActiveUserProfile';
      this.schema = SCHEMA;
    }

    _localRecord() {
      try {
        const stored = JSON.parse(global.localStorage.getItem(this.storageKey) || 'null');
        // Migrate away the old hard-coded demo identity: the signed-in account name now wins.
        if (stored && stored.id === 'demo-user-arjun') {
          global.localStorage.removeItem(this.storageKey);
          return { ...DEFAULT_USER };
        }
        return stored && typeof stored === 'object' ? { ...DEFAULT_USER, ...stored } : { ...DEFAULT_USER };
      } catch (error) {
        return { ...DEFAULT_USER };
      }
    }

    _saveLocal(record) {
      try { global.localStorage.setItem(this.storageKey, JSON.stringify(record)); } catch (error) { /* offline storage is optional */ }
      return record;
    }

    _cleanRecord(record, id) {
      const value = record || {};
      return {
        id: String(id || value.id || DEFAULT_USER.id),
        name: String(value.name || '').trim(),
        email: String(value.email || '').trim(),
        phone: String(value.phone || '').trim(),
        profile_picture_url: String(value.profile_picture_url || '').trim(),
        updated_at: value.updated_at || new Date().toISOString(),
      };
    }

    async _authenticatedUserId() {
      if (this.config.authUserId) return String(this.config.authUserId);
      if (global.MANTHAN_AUTH_USER?.id) return String(global.MANTHAN_AUTH_USER.id);
      if (global.firebaseAuth?.currentUser?.uid) return String(global.firebaseAuth.currentUser.uid);
      if (global.supabaseClient?.auth?.getUser) {
        try {
          const result = await global.supabaseClient.auth.getUser();
          if (result?.data?.user?.id) return String(result.data.user.id);
        } catch (error) { console.debug('[Profile] Supabase auth lookup unavailable'); }
      }
      const accessToken = this.config.accessToken || global.MANTHAN_AUTH_ACCESS_TOKEN;
      if (this.config.supabaseUrl && accessToken) {
        try {
          const response = await fetch(`${this.config.supabaseUrl.replace(/\/$/, '')}/auth/v1/user`, {
            headers: { apikey: this.config.supabaseAnonKey || '', Authorization: `Bearer ${accessToken}` },
          });
          if (response.ok) {
            const user = await response.json();
            if (user?.id) return String(user.id);
          }
        } catch (error) { console.debug('[Profile] Supabase REST auth lookup unavailable'); }
      }
      return this._localRecord().id || DEFAULT_USER.id;
    }

    _supabaseConfigured() {
      return Boolean((global.supabaseClient?.from) || (this.config.supabaseUrl && this.config.supabaseAnonKey));
    }

    _supabaseHeaders() {
      const token = this.config.accessToken || global.MANTHAN_AUTH_ACCESS_TOKEN || this.config.supabaseAnonKey;
      return { apikey: this.config.supabaseAnonKey || '', Authorization: `Bearer ${token || ''}`, 'Content-Type': 'application/json' };
    }

    async _supabaseLoad(id) {
      if (global.supabaseClient?.from) {
        const result = await global.supabaseClient.from('users').select('*').eq('id', id).maybeSingle();
        if (result?.error) throw result.error;
        return result?.data || null;
      }
      const url = `${this.config.supabaseUrl.replace(/\/$/, '')}/rest/v1/users?id=eq.${encodeURIComponent(id)}&select=*`;
      const response = await fetch(url, { headers: this._supabaseHeaders() });
      if (!response.ok) throw new Error(`users_load_${response.status}`);
      const rows = await response.json();
      return Array.isArray(rows) ? rows[0] || null : rows || null;
    }

    async _supabaseSave(record) {
      if (global.supabaseClient?.from) {
        const result = await global.supabaseClient.from('users').upsert(record, { onConflict: 'id' }).select().maybeSingle();
        if (result?.error) throw result.error;
        return result?.data || record;
      }
      const url = `${this.config.supabaseUrl.replace(/\/$/, '')}/rest/v1/users?on_conflict=id`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { ...this._supabaseHeaders(), Prefer: 'resolution=merge-duplicates,return=representation' },
        body: JSON.stringify(record),
      });
      if (!response.ok) throw new Error(`users_save_${response.status}`);
      const rows = await response.json();
      return Array.isArray(rows) ? rows[0] || record : rows || record;
    }

    async _firebaseLoad(id) {
      const db = global.firebaseDb || (global.firebase?.firestore ? global.firebase.firestore() : null);
      if (!db) throw new Error('firebase_not_configured');
      const ref = db.collection('users').doc(id);
      const snapshot = await ref.get();
      return snapshot.exists ? snapshot.data() : null;
    }

    async _firebaseSave(record) {
      const db = global.firebaseDb || (global.firebase?.firestore ? global.firebase.firestore() : null);
      if (!db) throw new Error('firebase_not_configured');
      await db.collection('users').doc(record.id).set(record, { merge: true });
      return record;
    }

    async ensureSchema() {
      // Document/collection backends create this record shape on first write.
      // A SQL table must be created by a trusted migration/edge endpoint; a
      // browser must never receive a service-role key. If configured, invoke
      // that secure endpoint without surfacing offline warnings to the user.
      if (this.config.schemaEndpoint) {
        try {
          await fetch(this.config.schemaEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...(this.config.accessToken ? { Authorization: `Bearer ${this.config.accessToken}` } : {}) },
            body: JSON.stringify({ table: 'users', columns: this.schema }),
          });
        } catch (error) { console.debug('[Profile] schema endpoint unavailable; using existing schema/local record'); }
      }
      return this.schema;
    }

    async load() {
      const id = await this._authenticatedUserId();
      const fallback = this._localRecord();
      const provider = String(this.config.provider || '').toLowerCase();
      try {
        await this.ensureSchema();
        let remote = null;
        if ((provider === 'supabase' || !provider) && this._supabaseConfigured()) remote = await this._supabaseLoad(id);
        else if (provider === 'firebase') remote = await this._firebaseLoad(id);
        if (remote) return this._saveLocal(this._cleanRecord(remote, id));
      } catch (error) {
        console.debug('[Profile] remote load unavailable; using local profile record');
      }
      return this._saveLocal(this._cleanRecord(fallback, id));
    }

    async save(patch) {
      const id = await this._authenticatedUserId();
      const current = this._localRecord();
      const record = this._cleanRecord({ ...current, ...patch, id, updated_at: new Date().toISOString() }, id);
      const provider = String(this.config.provider || '').toLowerCase();
      try {
        await this.ensureSchema();
        let remote = null;
        if ((provider === 'supabase' || !provider) && this._supabaseConfigured()) remote = await this._supabaseSave(record);
        else if (provider === 'firebase') remote = await this._firebaseSave(record);
        if (remote) return this._saveLocal(this._cleanRecord(remote, id));
      } catch (error) {
        console.debug('[Profile] remote save unavailable; saving local profile record');
      }
      return this._saveLocal(record);
    }
  }

  global.ManthanProfileSchema = SCHEMA;
  global.ManthanProfileRepository = new ProfileRepository();
})(window);
