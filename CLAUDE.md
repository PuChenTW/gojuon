# CLAUDE.md — Gojuon PWA

This file provides context for AI assistants working in this repository.

## Project Overview

**Gojuon (ごじゅうおん)** is a mobile-first Progressive Web App (PWA) for learning the 46 Japanese hiragana characters via spaced repetition. It runs entirely in the browser with no backend—all data is persisted in IndexedDB.

Core features:
- Flashcard mode with 3D flip animation
- Quiz mode (alternating multiple-choice and type-answer questions)
- Visual progress grid with 5 mastery tiers
- Offline-first via Workbox service worker
- SM-2 spaced repetition algorithm

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Language | TypeScript 5.9 (strict mode) |
| Build Tool | Vite 7 |
| Styling | CSS Modules + CSS custom properties |
| Storage | Native IndexedDB API |
| PWA | vite-plugin-pwa + Workbox |
| Package Manager | pnpm |
| Linting | ESLint 9 + typescript-eslint |

## Repository Structure

```
gojuon/
├── src/
│   ├── App.tsx                     # Root component; state machine for page navigation
│   ├── main.tsx                    # React entry point
│   ├── types/index.ts              # Shared TypeScript types (KanaCard, ProgressRecord, etc.)
│   ├── data/
│   │   └── hiragana.ts             # Static dataset: 46 characters with romaji & example words
│   ├── srs/
│   │   └── sm2.ts                  # Pure SM-2 algorithm functions
│   ├── db/
│   │   ├── client.ts               # IndexedDB init, schema, connection
│   │   └── repositories/
│   │       ├── cards.repo.ts       # CRUD for kana cards
│   │       ├── progress.repo.ts    # CRUD for per-card SRS progress
│   │       └── sessions.repo.ts    # CRUD for study sessions
│   ├── hooks/
│   │   ├── useDB.ts                # Initialize DB and seed data on first load
│   │   ├── useDueCards.ts          # Load cards due for review
│   │   └── useProgress.ts          # Submit review answers and update SRS state
│   ├── pages/
│   │   ├── Home.tsx / .module.css  # Dashboard: stats + navigation buttons
│   │   ├── Learn.tsx / .module.css # Flashcard study mode
│   │   ├── Quiz.tsx / .module.css  # Multiple-choice + typing quiz mode
│   │   └── Progress.tsx / .module.css  # Visual mastery grid
│   ├── components/
│   │   ├── card/                   # FlipCard, CardFront, CardBack
│   │   ├── layout/                 # PageShell, BottomNav
│   │   ├── quiz/                   # MultipleChoice, TypeAnswer
│   │   └── progress/               # KanaGrid, KanaCell
│   └── styles/
│       ├── globals.css             # Design tokens (CSS vars), resets
│       └── flip.css                # 3D flip animation keyframes
├── public/                         # Favicon and PWA icons
├── docs/
│   └── plan.md                     # Architecture decision record (Chinese Traditional)
├── index.html                      # Vite HTML entry
├── vite.config.ts                  # Vite + PWA plugin config
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── eslint.config.js
└── package.json
```

## Development Commands

```bash
pnpm dev        # Start dev server at http://localhost:5173 (hot reload)
pnpm build      # TypeScript type check + Vite production build
pnpm lint       # Run ESLint across all source files
pnpm preview    # Serve the production build locally
```

There is no test runner configured. Type checking is done by `tsc -b` as part of `pnpm build`.

## Architecture Decisions

### No React Router
Navigation is managed by a single `AppPage` union type (`'home' | 'learn' | 'quiz' | 'progress'`) held in `App.tsx` state. Use `setPage` callbacks passed as props—do not add React Router.

### No IndexedDB Library
The `db/` layer uses the native IndexedDB API directly (no Dexie, idb, etc.). All database access must go through `db/repositories/`.

### No Global State Library
State flows top-down from `App.tsx` via props and is encapsulated in custom hooks. Do not introduce Redux, Zustand, or React Context without strong justification.

### CSS Modules Only
Every component has a co-located `.module.css` file. Global styles live in `src/styles/`. Do not use inline styles or utility-class frameworks (e.g., Tailwind).

## Key Conventions

### TypeScript
- Strict mode is enabled (`strict: true`, `noUnusedLocals`, `noUnusedParameters`).
- All types live in `src/types/index.ts` unless they are tightly scoped to one file.
- Prefer explicit return types on public functions and hook signatures.

### Naming
- Components: `PascalCase` (e.g., `FlipCard`, `KanaCell`)
- Hooks: `camelCase` prefixed with `use` (e.g., `useDB`, `useDueCards`)
- CSS module class names: `camelCase` (accessed as `styles.cardFront`)
- Utility/data files: `camelCase` with descriptive suffix (e.g., `sm2.ts`, `hiragana.ts`)
- Repositories: `camelCase` with `.repo.ts` suffix

### Component Structure
Each component should follow this order:
1. Imports
2. Type definitions (props interface)
3. Component function
4. Helper functions (if file-scoped)
5. Export

### Data Flow
```
App.tsx (page state, dueCards)
  └── useDB (DB init + seeding)
  └── useDueCards (cards due for today)
  └── page props → Learn / Quiz / Progress
        └── useProgress (submit review → SM-2 recalculation → IndexedDB write)
```

### SM-2 Algorithm (`src/srs/sm2.ts`)
Key functions:
- `defaultProgress(cardId)` — create an initial progress record
- `calculateNextReview(progress, quality)` — returns updated progress with new `nextReview` date
- `answerToQuality(isCorrect, responseTime?)` — maps a boolean answer to an SM-2 quality score (0–5)

Do not modify SM-2 logic without understanding the algorithm. Quality < 3 resets repetitions.

### IndexedDB Schema (`src/db/client.ts`)
Three object stores:
- `cards` — static kana data, keyed by `id` (string), indexed by `group`
- `progress` — SRS state per card, keyed by `cardId`, indexed by `nextReview`
- `sessions` — study session records, keyed by auto-increment `id`

### Mastery Tiers
Progress cells in the grid are coloured by `reps` count:

| Reps | Label | Color token |
|------|-------|-------------|
| 0 | Not started | `--color-tier-0` |
| 1–2 | Learning | `--color-tier-1` |
| 3–4 | Familiar | `--color-tier-2` |
| 5–6 | Proficient | `--color-tier-3` |
| 7+ | Mastered | `--color-tier-4` |

## PWA Configuration

`vite.config.ts` uses `vite-plugin-pwa` with Workbox:
- Strategy: `generateSW` (auto-update on new build)
- Precaches all JS, CSS, HTML, images, fonts
- Runtime caches Google Fonts for 365 days
- Manifest: `display: standalone`, `theme_color: #e63946`

When adding new static assets, ensure they match the glob patterns in `vite.config.ts`; otherwise they won't be precached.

## Accessibility Requirements
- All interactive elements must have `aria-label` when the label is not visible text.
- Navigation items use `aria-current="page"` for the active route.
- Flashcards support keyboard activation (Space / Enter).
- Maintain semantic HTML (`button`, `nav`, `main`, `section`).

## What Does Not Exist Yet
- **Tests** — no test runner is configured (Vitest would be the natural fit given Vite).
- **CI/CD** — no GitHub Actions workflows.
- **Katakana / Kanji** — only hiragana is currently in `data/hiragana.ts`.
- **User accounts / sync** — fully local, no backend.

## Working on This Repository

1. Run `pnpm dev` and verify the app loads at `http://localhost:5173`.
2. After making changes, run `pnpm build` to confirm TypeScript passes and the bundle builds cleanly.
3. Run `pnpm lint` before committing—ESLint will catch unused variables and hooks rule violations.
4. Keep PRs focused; the codebase is intentionally lean and dependency-light.
