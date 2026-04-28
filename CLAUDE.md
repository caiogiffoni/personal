# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Vite HMR)
npm run build    # tsc type-check + Vite production build → dist/
npm run preview  # serve the dist/ build locally
```

There are no tests or linting configured. TypeScript strict mode (`strict`, `noUnusedLocals`, `noUnusedParameters`) acts as the primary correctness check — `npm run build` will fail on type errors.

## Architecture

Single-page personal portfolio. No routing — the page is one vertical scroll of sections rendered in `src/App.tsx`:

```
Hero → StatsBanner → About → Timeline → Skills → Contact
```

(`Projects` is commented out in `App.tsx`.)

### Data layer — `src/data/`

All page content lives in plain TypeScript files, not fetched from any API:

- `timeline.ts` — career/education history as `TimelineEvent[]`. Each event has a `category` that maps to a color and icon via `categoryConfig`.
- `skills.ts` — skill groups as `SkillGroup[]`.
- `projects.ts` — project list (currently unused).

**To update content, edit the data files only.** Components consume these arrays directly.

### Config — `src/config/config.tsx`

External links (LinkedIn, GitHub, CV). Import `CONFIG` from here rather than hardcoding URLs in components.

### Theme — `src/theme/index.ts`

Chakra UI dark-mode-first theme. Semantic color tokens (`page-bg`, `section-alt`, `card-bg`, `dot-border`) handle light/dark switching. Always use these tokens instead of raw color values when adding UI.

### Motion — `src/lib/motion.ts`

Exports `MotionBox` and `MotionFlex` — Chakra `Box`/`Flex` wrapped with Framer Motion. Use these for animated elements.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`