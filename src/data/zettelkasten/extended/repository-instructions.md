---
title: "Repository Instructions"
group: "plan"
tags: ["repository", "copilot-instructions", "always-on", "team", "instructions"]
aliases: ["copilot-instructions.md"]
---

**Repository Instructions** (`.github/copilot-instructions.md`) define always-on team rules inside [[Custom Instructions]] that take effect for every contributor the moment they run `git clone`.

## Runtime Behavior & Purpose

- **Always Active**: Loaded automatically at the start of every Copilot session in that repository.
- **What Belongs Here**: Tech stack (TypeScript, `pnpm`), naming standards, libraries to prefer or avoid, build/test commands, and code review expectations.
- **Keep It Lean**: Move framework-, directory-, or test-specific rules out of the global file and into [[Path Instructions]] so unrelated prompts stay focused.
- **Alternatives & Maintenance**: Works alongside root [[AGENTS.md]], and can receive automated update Pull Requests from repository-scoped [[Copilot Dreaming]].
