---
title: "Hooks"
group: "hooks"
tags: ["hooks", "lifecycle", "guardrails", "enforcement"]
---

**Hooks** inject custom shell/PowerShell scripts directly into [[GitHub]] Copilot sessions, capturing **six lifecycle events**: `sessionStart`, `userPromptSubmitted`, `preToolUse`, `postToolUse`, `errorOccurred`, and `sessionEnd`.

## Deterministic Enforcement vs Probabilistic Instructions

- [[Custom Instructions]] (including [[Organization Instructions]]) are natural-language requests that rely on the LLM's judgment.
- **Hooks execute outside the model and stop the runtime logic itself**, making them essential whenever security or operational policy must never be bypassed.

## Event Families & Setup

- **Blocking Execution Gate**: Only [[PreToolUse Guardrails]] (`preToolUse`) can deny or ask before a tool runs.
- **Lifecycle Telemetry & Cleanup**: The other five events operate as [[Observation & Audit Hooks]].
- **Files & Surfaces**: Declared in `.github/hooks/*.json` (or inside `com.github.copilot/` of [[Plugin Manifest & Namespace]]) with surface-specific loading and JSON keys documented in [[Hooks Configuration & Surfaces]].
