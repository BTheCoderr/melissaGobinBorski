# Melissa Gobin Borski — Next.js on Netlify

## Requirements

- Node.js 20+ (matches Next.js / ESLint expectations)
- npm 10+

## Install

```bash
cd melissaGobinBorski
npm install
```

## Develop locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Netlify deployment

1. Connect this repository in the [Netlify](https://app.netlify.com) dashboard.
2. **Build command:** `npm run build`
3. **Publish directory:** leave empty — `@netlify/plugin-nextjs` (see `netlify.toml`) handles Next.js output.
4. **Environment variables:** set `NEXT_PUBLIC_SITE_URL` to your live URL (e.g. `https://www.your-domain.com`) for accurate Open Graph URLs and JSON-LD.
5. In Netlify: **Forms** → enable **form detection** if prompted, then redeploy. After deploy, confirm the **`contact`** form appears (registered from `public/__forms.html`; submissions POST there per [OpenNext Forms](https://opennext.js.org/netlify/forms)).
6. Optional: **Site configuration** → **Notifications** → **Form submission notifications** to email new submissions to the practice inbox.
7. Replace or add images in `public/` as needed; current assets include headshots, office photos, and Roscoe images referenced by the home and about pages.

## Project layout (App Router)

- `app/` — routes, `layout.tsx`, `globals.css`
- `components/` — UI and layout pieces
- `lib/` — `site.ts`, `featured.ts`, `ui.ts`, `seo-json-ld.tsx`
- `public/` — static assets and Netlify form helper
- `tailwind.config.ts` — content globs (theme tokens live in `app/globals.css`)
