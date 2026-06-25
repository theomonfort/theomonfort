---
name: prototyper
description: Generate a single self-contained HTML file with 10 distinct design propositions for one UI component, all grounded in this repo's retro-JRPG universe but deliberately pushed in different directions to open the design vision. Use when the user wants to explore, prototype, brainstorm, or compare design options / variations / mockups for a UI component (e.g. a TOC sidebar, progress bar, tab switcher, card grid, button, badge, modal) before committing to one. Trigger phrases include "prototype", "design options", "10 variations", "explore designs", "mockups", "like we did for the TOC", "/prototyper". Always writes the result into `.github/Prototypes/`. Do NOT use to ship a final component into `src/` — this only produces a throwaway comparison artifact to pick from.
license: MIT
---

# prototyper

Produce **one self-contained HTML file** containing **10 visually distinct design
propositions** for a single UI component. Every proposition must feel native to
this repo's universe, yet the set as a whole should **spread across the
possibility space** — a few safe/on-brand, several that re-imagine the layout
metaphor, and a couple of wildcards — so the human reviewer's vision is opened
rather than narrowed. The reviewer opens the file in a browser, compares the 10
side by side, picks one (or a mix), and then asks for it to be ported into the
real component.

This skill mirrors the workflow used to create `.github/Prototypes/toc-prototypes.html`.

## Output location (non-negotiable)

- The file **always** goes in `.github/Prototypes/` — never in `public/`, never
  in `src/`. These are internal, non-deployed reference artifacts (Astro only
  serves `public/`, so `.github/Prototypes/` is excluded from the build on
  purpose).
- Name it `.github/Prototypes/<component>-prototypes.html` (kebab-case component
  slug, e.g. `progress-bar-prototypes.html`, `equipment-tab-prototypes.html`).
- The `create` tool works in `.github/Prototypes/`. If a protected-path hook ever
  blocks writing there, fall back to writing the file with a bash heredoc.

## Workflow

### 1. Ground in the repo's universe (REQUIRED reading)

1. Read `.github/instructions/frontend.instructions.md` — the retro JRPG design
   tokens (colors, fonts, effects, prohibitions). These are law.
2. Read an existing prototype as the **exact format template**, e.g.
   `.github/Prototypes/toc-prototypes.html`. Match its shape: a single page that
   loads the same Google Fonts via CDN, the same dark radial background, then 10
   clearly-labeled variation panels (each titled like `V1 — Quest Log`), a shared
   base CSS block plus per-variant CSS overrides, and a small JS data array +
   builder that renders the component markup inside each panel.

### 2. Study the REAL component (so the winner is portable)

- Find and read the real component's markup, CSS, and the data it maps over
  (class names, sample values, states). Use the **real class names and realistic
  sample data** in every variation so the chosen design can be ported back with
  minimal rework.
- Identify the component's **functional elements** that every variation must
  preserve (e.g. for a TOC: section grouping + accent color, item number, title,
  badge, current-item highlight). List them before designing.

### 3. Generate 10 propositions — fit the universe, but diverge

Hold two forces in tension on every proposition: **belonging** (it looks like it
was always part of this retro-JRPG world) and **divergence** (it explores a
direction the others don't). Use a "divergence ladder" so the set doesn't
converge:

- **V1–V2 — Anchor**: the most refined, obviously-on-brand take. The safe pick.
- **V3–V6 — Re-frame**: keep the theme, change the *metaphor* — e.g. quest log,
  stage-select map, HP/EXP gauge, inventory slots, terminal/CLI, stepper with a
  progress line, ticket/receipt, folder tabs.
- **V7–V8 — Re-shape**: change orientation, density, or composition — vertical vs
  horizontal, dense vs airy, nodes vs rows, asymmetry, overlap.
- **V9–V10 — Wildcard**: a genuinely surprising direction that still respects the
  hard rules — push texture, motion, or an unexpected JRPG/arcade trope.

Generation rules:
- No two variations may share the same core idea. If two feel similar, replace one.
- Within any single variation keep accent colors **solid and uniform** (per the
  tokens) — no timid pastel gradients.
- Give each a short, evocative name in its panel label.

### 4. Honor the hard rules (from the tokens file)

- NO white/light backgrounds. NO pill shapes or `border-radius` > 4px. NO gray
  soft drop-shadows — use **neon glow** only (`0 0 8px <color>, 0 0 24px <rgba>`).
- Borders are `1px dashed` or `2px solid` neon. High contrast.
- Fonts: `'Press Start 2P'` only for big brand labels (no lowercase glyphs);
  `'DotGothic16'` for prose / labels / titles; `'VT323'` for presentation
  decorations (counters, badges); `'IBM Plex Mono'` for code-like text.
- Background: deep-purple → midnight → shadow-ink radial. Optional CRT scanlines.

### 5. Deliver

- Ensure the HTML is well-formed and renders **standalone** (sanity-check by
  grepping for the 10 variant labels and confirming the JS builder is present).
- Do **not** modify any `src/` file and do **not** commit/push unless the user
  asks — the artifact is for review first.
- Offer a preview: since `.github/Prototypes/` isn't served by the dev server,
  start a throwaway static server in that folder
  (`python3 -m http.server <port> --bind 127.0.0.1`) and hand back
  `http://localhost:<port>/<file>` links.
- Report the file path and a numbered one-line description of each of the 10
  propositions, grouped by the divergence ladder (Anchor / Re-frame / Re-shape /
  Wildcard).

## Scaling

For several components at once, run one pass per component (each its own
`<component>-prototypes.html`), and parallelize with background agents — give each
agent this same skill's instructions plus the one component to cover.
