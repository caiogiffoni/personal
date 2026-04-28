# caiogiffoni.com.br

Personal portfolio site built with React, TypeScript, and Vite. Deployed to AWS S3 + CloudFront via GitHub Actions.

## Stack

- **React 18** + **TypeScript**
- **Vite** — build tooling
- **Chakra UI** — component library, dark mode by default
- **Framer Motion** — animations

## Getting started

```bash
npm install
npm run dev
```

## Commands

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start dev server with HMR               |
| `npm run build`   | Type-check + production build → `dist/` |
| `npm run preview` | Serve the production build locally      |

## Content

All page content is in `src/data/` — plain TypeScript files, no CMS or API:

- `timeline.ts` — career and education history
- `skills.ts` — skill groups
- `projects.ts` — projects (currently not rendered)

External links (LinkedIn, GitHub, CV) are in `src/config/config.ts`.

## Backlog

- [ ] Portuguese (PT-BR) language toggle

## Deployment

Pushing to `main` triggers the GitHub Actions pipeline (`.github/workflows/deploy.yml`), which:

1. Builds the project
2. Syncs `dist/` to S3
3. Invalidates both CloudFront distributions
