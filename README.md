# Growus Auto website (growusauto.com)

React + Vite + Tailwind CSS site. Content comes from Supabase (`site_settings` table, row id 1),
merged over the defaults in `src/config/defaultConfig.js`. Form submissions go to the `leads` table.

This source was rebuilt on 2026-11-23 from the live production bundle (the original source was lost).
Every page was checked against the live site and renders the same.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).

## Layout

- `src/App.jsx`: page switching (home, about, services, service detail, gallery, culture, open positions, contact, admin)
- `src/pages/`: one file per page
- `src/components/`: shared parts (Navbar, Footer, modals, IndiaMap) and per-page sections in subfolders
- `src/admin/`: admin panel (login, leads inbox, content editors that save to `site_settings`)
- `src/context/SiteConfigContext.jsx`: loads and saves the site config
- `src/lib/supabase.js`: Supabase client
