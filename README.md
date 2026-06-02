# caiogiffoni.com.br

Personal portfolio site built with React, TypeScript, and Vite. Deployed to AWS S3 + CloudFront via GitHub Actions.

## Stack

- **React 18** + **TypeScript**
- **Vite** - build tooling
- **Chakra UI** - component library, dark mode by default
- **Framer Motion** - animations

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

All page content is in `src/data/` - plain TypeScript files, no CMS or API:

- `timeline.ts` - career and education history (categories: `engineering`, `education`, `software`, `ai`, `teaching`, `certification`)
- `skills.ts` - skill groups
- `projects.ts` - projects rendered in the Projects section

External links (LinkedIn, GitHub, CV) are in `src/config/config.ts`.

## Sections

```
Navbar → Hero → StatsBanner → About → Timeline → Projects → Skills → Recommendations → Contact → Footer
```

- `ScrollToTop` renders as a floating button outside the main flow

## Internationalisation

EN/PT toggle in the Navbar. All strings live in `src/i18n/translations.ts` keyed by section and timeline event id. Language state is managed via `src/context/LanguageContext.tsx`.

## Backlog

- [ ] When i hover over a button, it should increase the size
- [ ] Add a anchor to linkedin in the recommedations section
- [x] Portuguese (PT-BR) language toggle
- [x] Add project section
- [x] [MOBILE] When the Hamb menu is open, if i click outside of it, it should close

## Deployment

Pushing to `main` triggers the GitHub Actions pipeline (`.github/workflows/deploy.yml`), which:

1. Builds the project
2. Syncs `dist/` to S3
3. Invalidates both CloudFront distributions
