---
title: "AGENTS.md"
group: "instructions"
tags: ["agents-md", "open-standard", "instructions", "portable"]
---

**AGENTS.md** is the open Markdown instruction file natively read by GitHub Copilot (Cloud Agent, CLI, and VS Code) alongside [[Custom Instructions]].

## Root vs Nested Placement

- **Root `AGENTS.md`**: Acts as repository-wide guidance alongside `.github/copilot-instructions.md` in [[Repository Instructions]].
- **Nested `AGENTS.md`**: Placed inside subdirectories (for example `packages/api/AGENTS.md`) to scope rules to that directory tree, playing the same selective role as `applyTo` globs in [[Path Instructions]].
