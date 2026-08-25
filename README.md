# Harish Prabhu · Portfolio

Single-page portfolio. Next.js 15 (App Router) + TypeScript + Tailwind v4 + Motion. Dark "flight deck at night" theme: deep blue-charcoal, instrument amber, serif display over monospace readouts.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Edit content

Everything on the page lives in one typed file: `content/site.ts` (projects, experience, skills, readout metrics, links, copy). No component edits needed for content changes.

Rules carried over from the resume system: every metric must trace to real, verifiable work, and no em or en dashes anywhere in copy.

## Assets to drop in

- `public/profile.jpg` : LinkedIn headshot (4:5 crop looks best; site shows a placeholder until present)
- `public/resume.pdf` : general resume rendered from the resume-modifier system (data-analytics framing)
- GitHub URL: replace the placeholder in `content/site.ts` under `personal.github`

## Deploy

Push to GitHub, then Vercel → New Project → import → Deploy (zero config, Next.js auto-detected). After adding a custom domain, set `NEXT_PUBLIC_SITE_URL` in Vercel env for canonical URLs; on the default `*.vercel.app` domain this is handled automatically.
