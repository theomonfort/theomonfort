<!-- github-knowledge-base-start -->
## Knowledge Base

### Purpose

This repository uses the Knowledge Base at [https://github.com/theomonfort/theomonfort](https://github.com/theomonfort/theomonfort) on branch `main`.

### Required behavior

1. Before changing code, read `docs/index.md` from that branch.
2. Use the index to open only the knowledge files relevant to the task.
3. If the index is unavailable, stop and report that the Knowledge Base could not be loaded.

### Source of truth

Generated knowledge tracks the code. When the knowledge and code disagree, trust the code.
<!-- github-knowledge-base-end -->

## Presentation layout

- The primary presentation setup is a 15-inch Mac, Chrome at 125% browser zoom, with the TOC hidden.
- Use `/theomonfort/playbook/hooks/?present=1&slide=5` as the visual reference for readable text and content height. Prefer reducing whitespace and unnecessary diagram minimum heights before reducing prose size; enlarge sparse slides to keep typography consistent.
- Validate both locales and both themes with the TOC hidden. As screenshot-derived regression checks, use 1360 x 740 and 1280 x 720 CSS-pixel viewports, not a docked-DevTools measurement. These are test sizes, not a confirmed screen resolution.
- Require the complete slide to fit without vertical scrolling or clipped text/diagrams, leaving room for the presentation controls. Keep slide order and deep links stable.
