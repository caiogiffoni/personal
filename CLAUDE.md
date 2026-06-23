# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Vite HMR)
npm run build    # tsc type-check + Vite production build → dist/
npm run preview  # serve the dist/ build locally
```

There are no tests or linting configured. TypeScript strict mode (`strict`, `noUnusedLocals`, `noUnusedParameters`) acts as the primary correctness check - `npm run build` will fail on type errors.

## Architecture

Single-page personal portfolio. No routing - the page is one vertical scroll of sections rendered in `src/App.tsx`:

```
Navbar → Hero → StatsBanner → About → Timeline → Projects → Skills → Recommendations → Contact → Footer
```

Additional UI components:

- `Navbar` - top navigation bar with language toggle (EN/PT)
- `Footer` - page footer
- `ScrollToTop` - floating button to scroll back to top
- `SectionHeader` - reusable section heading
- `TimelineItem` - individual timeline entry
- `Recommendations` - testimonials/recommendations section
- `Projects` - project cards with problem/solution/impact layout

### Internationalisation - `src/i18n/` and `src/context/`

- `translations.ts` - all UI strings in `en` and `pt` keyed by section
- `LanguageContext.tsx` - React context exposing `lang` and `setLang`; wrap the app in `<LanguageProvider>`

All user-facing text must be added to both `en` and `pt` in `translations.ts`. Key conventions:
- Timeline event text is keyed by the event's `id` field under `timeline.eventTexts`
- Project card text (title, problem, solution, impact) lives in `projects.items[]` — order must match `src/data/projects.ts`
- Static project data (tech stack, URLs, type) stays in `src/data/projects.ts`; the component merges both by index

### Data layer - `src/data/`

All page content lives in plain TypeScript files, not fetched from any API:

- `timeline.ts` - career/education history as `TimelineEvent[]`. Each event has a `category` that maps to a color and icon via `categoryConfig`.
- `skills.ts` - skill groups as `SkillGroup[]`.
- `projects.ts` - project list rendered in the Projects section.

**To update content, edit the data files only.** Components consume these arrays directly.

### Config - `src/config/config.ts`

External links (LinkedIn, GitHub, CV). Import `CONFIG` from here rather than hardcoding URLs in components.

### Theme - `src/theme/index.ts`

Chakra UI dark-mode-first theme. Semantic color tokens (`page-bg`, `section-alt`, `card-bg`, `dot-border`) handle light/dark switching. Always use these tokens instead of raw color values when adding UI.

### Motion - `src/lib/motion.ts`

Exports `MotionBox` and `MotionFlex` - Chakra `Box`/`Flex` wrapped with Framer Motion. Use these for animated elements.

## Content sync

The `temp/` folder holds the source-of-truth documents for keeping the portfolio, resume, and LinkedIn in sync:

- `temp/resume.yaml` - canonical resume; all content in the codebase must match this
- `temp/Profile.pdf` - LinkedIn export (must be manually refreshed before each sync check)
- `temp/sync-report.md` - output of the last `/sync-check` run; do not edit by hand

Run `/sync-check` to compare all three sources and write a fresh `sync-report.md`. The skill will ask you to confirm both files are up to date before proceeding.

When updating portfolio content to match `resume.yaml`, the files to touch are:
- `src/data/timeline.ts` - job dates, roles, tech arrays per role
- `src/data/projects.ts` - project tech arrays
- `src/data/skills.ts` - skill groups and items
- `src/i18n/translations.ts` - job descriptions, highlights, metrics (both `en` and `pt`)

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`
