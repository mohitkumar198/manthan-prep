# Manthan Prep — UPSC Study Companion (Website)

Responsive web app reconstructed from `manthan_prep_source_code (1).pdf` (92-page source export).

## Files

| File | Purpose |
|---|---|
| `index.html` | Web entry point |
| `app.js` | Full application (13+ screens: Home, Subjects, Practice, Two-Deck Quiz, Paheli, Timetable, Tests, Groups, Revision, Answer Writing, PYQ, Syllabus, Profile/Login) |
| `styles.css` | Complete design system (dark sidebar, cards, quiz engine styles) |
| `profile_repository.js` | Optional Supabase/Firestore profile sync (gracefully falls back to localStorage) |
| `profile_config.example.js` | Example backend config (placeholders only) |
| `data/*.json` | Structured content: bilingual quiz DB, paheli (riddles) dataset, daily timetable, users schema |

## Run

```bash
cd manthan-web
python3 -m http.server 8080      # or any static server / Nginx / Vercel / Netlify
```

Open `http://localhost:8080` — no build step, no dependencies.

## Reconstruction notes (important)

The PDF's text layer **lost all non-ASCII characters** (Devanagari, curly quotes/apostrophes, dashes, emojis).
Recovery method:

1. ASCII code was extracted 1:1 from the text layer (line counts match the PDF headers exactly, verified by `node --check` + JSON parse + a jsdom smoke test that clicks through Home → Paheli → Timetable → Quiz (Hindi)).
2. All Hindi content (quiz questions/options/explanations, paheli riddles/options/hints, screen titles, greetings, toasts, share text) was **transcribed by visually reading high-res renders** of PDF pages 12–22 & 77–81, then normalised (single spaces, standard punctuation).
3. Lost typography restored: `'` → `’`, `--` gaps → `–`/`—` (e.g. "Tomorrow’s Plan", "Manthan Prep – UPSC study companion", "05:00 AM – 06:00 AM").
4. **Emojis were unrecoverable** (they render as tofu boxes in the PDF). Sensible substitutes were used: greetings ☀️ 🌤️ 🌇 🌙, paheli feedback 🎉 / 📚. Swap freely in `app.js` (`homeGreetingText`, paheli feedback/toast lines).

## Sign in / Create account

- First visit opens the **Create account** tab: Full name + User ID + password (+ confirm).
- Accounts are stored on the device (`localStorage: manthanUsers`) with **salted password hashes** — never plaintext.
- Only the correct User ID + password opens the account; wrong password / unknown ID show inline errors.
- The session persists across reloads (`manthanSession`); **Sign out** (Profile screen) returns to the sign-in page.
- Note: this is client-side auth for a static demo. For real multi-device accounts, connect the same form to the Supabase backend described below (`data/users_schema.json`).

## Server attach (next step)

The app is fully static; the only optional backend is profile sync:

- `profile_repository.js` reads `window.MANTHAN_PROFILE_CONFIG` (see `profile_config.example.js`).
- For real sync: deploy a tiny endpoint `/api/profile/ensure-schema` (runs the SQL in `data/users_schema.json` once) + set Supabase URL/anon key, then include a `profile_config.js` before `profile_repository.js` in `index.html`.
- Without any backend, everything works on localStorage — safe to host on Nginx/VPS, Vercel, Netlify, or GitHub Pages as-is.
