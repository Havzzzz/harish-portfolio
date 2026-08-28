# Harish Prabhu · Portfolio

Single-page portfolio. Next.js 15 (App Router) + TypeScript + Tailwind v4 + Motion. Dark "flight deck at night" theme: deep blue-charcoal ground with cyan, magenta and violet instrument hues, serif display over monospace readouts.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Edit content

Everything on the page lives in one typed file: `content/site.ts` (projects, experience, skills, readout metrics, links, copy). No component edits needed for content changes.

### This site is one of three channels, not a standalone

The site, the resume PDF and LinkedIn have to tell the same story. The spine is
`jobs/_general_ai_engineering/content.json` in the `resume-modifier` repo, the public
default resume. `content/site.ts` mirrors its `role_line` and its three skills-section
headings, and `linkedin/profile_guide_2026-08-28.html` mirrors both. If the resume's
framing changes, change this file with it or the channels drift.

Non-negotiables carried over from the resume system:

- Every metric traces to a bullet id in `truth/resume_truth.json`. Nothing is invented.
- Job titles are the official titles. They do not flex on any surface.
- No em or en dashes anywhere in copy.
- The FairPrice ticket classifier is **rule-based**. It is not a deployed model, it does
  not route, and it is not real-time. Only the Zendesk automation flows route.
- The FairPrice dashboards were **Google Looker Studio** on BigQuery. Tableau and Power BI
  are working knowledge only and never attach to that work.
- The degree specialisation is **Artificial Intelligence**, never "Data Science & AI".
- No project links until the MakanOS repo's committed Neon credential is rotated.

## Assets

- `public/profile.jpg` : headshot (4:5 crop looks best; site shows a placeholder until present)
- `public/resume.pdf` : **copied from** `jobs/_general_ai_engineering/output/resume.pdf` in the
  resume-modifier repo. Re-copy it whenever that resume is re-rendered, or the site serves a
  stale PDF. It has drifted before.

## Deploy

Vercel project `portfolio`, connected to `Havzzzz/harish-portfolio` with **production branch
`master`** (this repo has no `main`). Zero config, Next.js auto-detected.

Every push to `master` builds and promotes to production. If a push does not appear under
Deployments, check Settings → Git first: the repo connection has been missing before, and
without it pushes are silently ignored while the dashboard keeps serving the last manual
upload.

On a custom domain, set `NEXT_PUBLIC_SITE_URL` in Vercel env for canonical URLs. On the
default `*.vercel.app` host it resolves automatically.
