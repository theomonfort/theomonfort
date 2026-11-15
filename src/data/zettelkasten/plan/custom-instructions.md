---
title: "Custom Instructions"
group: "instructions"
tags: ["instructions", "rules", "scopes", "precedence", "copilot"]
aliases: ["Instructions", "Copilot Instructions"]
---

**Custom Instructions** on [[GitHub]] are standing Markdown files and settings that give Copilot persistent coding guidelines without repeating conventions in every prompt.

## 3 Scopes & Precedence Order

**Priority order**: [[Personal Instructions]] -> [[Repository Instructions]] (plus [[Path Instructions]]) -> [[Organization Instructions]].

- **Personal overrides Repository, which overrides Organization**: User-level preferences take highest priority over organization custom instructions.
- Repositories can also express global and subtree rules via [[AGENTS.md]].

## Guidance vs Hard Enforcement

- Unlike [[Copilot Memory]] (which stores opportunistic facts and cannot guarantee compliance), Custom Instructions load deterministically per scope.
- Because Custom Instructions remain natural-language guidance interpreted by the model, non-bypassable execution policy must use [[Hooks]] or [[Copilot Managed Settings]].
