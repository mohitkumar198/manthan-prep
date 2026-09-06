/* Optional production configuration. Define this before profile_repository.js. */
window.MANTHAN_PROFILE_CONFIG = {
  provider: 'supabase',
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
  supabaseAnonKey: 'YOUR_PUBLIC_ANON_KEY',
  accessToken: 'AUTHENTICATED_USER_ACCESS_TOKEN',
  // Use a trusted server/edge-function endpoint for first-time SQL schema setup.
  schemaEndpoint: '/api/profile/ensure-schema',
};

/* For Firestore instead, set provider: 'firebase' and expose:
   window.firebaseDb = firebase.firestore();
   window.firebaseAuth = firebase.auth();
*/
