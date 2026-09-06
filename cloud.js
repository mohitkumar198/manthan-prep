/* ---- Firebase Realtime Database sync (REST, no SDK needed). ---- */
const MANTHAN_DB_URL = 'https://manthan-prep-default-rtdb.firebaseio.com';
const manthanCloud = { online: false, timers: {} };

function cloudSafeKey(id) { return String(id).replace(/[.#$/[\]]/g, '_'); }
function cloudHasFetch() { return typeof fetch === 'function'; }

async function cloudGet(path) {
  const res = await fetch(`${MANTHAN_DB_URL}${path}.json`);
  if (!res.ok) throw new Error(`cloud GET ${res.status}`);
  return res.json();
}

async function cloudSet(path, value) {
  const res = await fetch(`${MANTHAN_DB_URL}${path}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value),
  });
  if (!res.ok) throw new Error(`cloud PUT ${res.status}`);
  return true;
}

async function cloudPost(path, value) {
  const res = await fetch(`${MANTHAN_DB_URL}${path}.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value),
  });
  if (!res.ok) throw new Error(`cloud POST ${res.status}`);
  return true;
}

function queueCloud(name, fn) {
  if (!cloudHasFetch()) return;
  clearTimeout(manthanCloud.timers[name]);
  manthanCloud.timers[name] = setTimeout(async () => {
    try {
      await fn();
      manthanCloud.online = true;
    } catch (e) {
      manthanCloud.online = false;
    }
  }, 1200);
}
