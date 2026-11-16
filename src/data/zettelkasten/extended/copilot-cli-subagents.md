---
title: "Copilot CLI Subagents"
group: "plan"
tags: ["copilot-cli", "subagents", "explore", "task", "rubber-duck", "code-review", "agents", "cli"]
aliases: ["CLI Built-in Subagents", "Built-in Agents", "Rubber-duck"]
---

**Copilot CLI Subagents** are the built-in [[Subagents]] inside [[Copilot CLI]] that run specialized work in isolated context windows so exploration, test logs, and critiques never bloat the main conversation. They combine seamlessly with `.agent.md` [[Custom Agents]].

## Built-in CLI Subagents

| Subagent | Primary Role |
| --- | --- |
| **Explore** | Fast, read-only codebase search and Q&A without polluting parent context |
| **Task** | Executes builds, tests, and lints, returning a concise pass summary or full failure output |
| **General-purpose** | Multi-step reasoning and editing with the full CLI toolset |
| **Rubber-duck** | Independent plan and code critic used in [[Rubber Duck Review]] (assign a different model family for cross-model critique) |
| **Code-review** | High-signal diff review focused on genuine bugs and logic errors |
| **Research** | Multi-repo GitHub and web investigation with verified source citations |
| **Security-review** | High-confidence vulnerability analysis |

## Inspection & Per-Subagent Model Routing

- Run `/subagents` in [[CLI Slash Commands & Fleet]] to inspect active subagents and override per-subagent models via [[Copilot Model Selection]], or inspect local `*.agent.yaml` definitions under `~/.copilot/pkg/<platform>/<version>/definitions/`.
