---
title: "CLI Built-in Subagents"
group: "cli"
tags: ["cli", "subagents", "explore", "task"]
aliases: ["Built-in Agents"]
---

**CLI Built-in Subagents** run specialized tasks inside isolated context windows in [[Copilot CLI]] so codebase exploration, test output, and deep reviews never bloat the main session.

## Six Built-in Agents

| Agent | Role |
| --- | --- |
| **Explore** | Fast read-only codebase analysis and Q&A without polluting parent context |
| **Task** | Executes builds/tests, returning a concise summary on pass or full logs on failure |
| **General purpose** | Full-capability reasoning and editing for complex multi-step subtasks |
| **Code review** | High-signal diff review focused on genuine bugs rather than style noise |
| **Research** | Multi-repo and web investigation with verified citations |
| **Rubber duck** | Cross-model critic used by [[Rubber Duck Review]] |

## Inspection & Model Overrides

- Run `/subagents` in [[CLI Slash Commands & Fleet]] to inspect built-in agents and override per-agent models, or read local `*.agent.yaml` definitions under `~/.copilot/pkg/<platform>/<version>/definitions/`.
