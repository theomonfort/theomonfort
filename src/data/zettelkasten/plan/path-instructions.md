---
title: "Path Instructions"
group: "instructions"
tags: ["path-instructions", "applyto", "glob", "file-based"]
aliases: ["File-Based Instructions", "applyTo"]
---

**Path Instructions** (`.github/instructions/*.instructions.md`, also called **file-based instructions** in VS Code) scope [[Custom Instructions]] to specific file globs via YAML `applyTo` frontmatter.

## Example Configuration

```yaml
---
applyTo: "server/tests/test_*.py"
---
This file uses pytest functional tests.
- Load fixtures from `conftest.py`
- One assert per function
- Always mock LLM calls
```

## Dynamic Loading

1. At session start, Copilot loads [[Repository Instructions]] without injecting unrelated path files.
2. When a prompt or tool call touches a matching file (such as `edit src/db/users.ts` matching `applyTo: src/db/**` in `db.instructions.md`), Copilot dynamically appends that instruction file.
3. Scoped loading keeps irrelevant rules out of context, playing the same role as nested [[AGENTS.md]] files in subdirectories.
