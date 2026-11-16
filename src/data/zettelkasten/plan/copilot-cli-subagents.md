---
title: "Copilot CLI Subagents"
group: "agents"
tags: ["copilot-cli", "subagents", "rubber-duck", "code-review"]
aliases: ["Rubber-duck"]
---

**Copilot CLI Subagents** are the seven built-in [[Subagents]] in GitHub Copilot CLI, combinable with `.agent.md` [[Custom Agents]] and individually routable to specific models via `/subagents` ([[Copilot Model Selection]]).

## The 7 Built-in CLI Subagents

| Subagent | Primary Role |
| --- | --- |
| **Explore** | Fast, read-only codebase search and navigation |
| **Task** | Executing tests, builds, lints, and verbose shell commands |
| **General-purpose** | Complex multi-step implementation with the full CLI toolset |
| **Rubber-duck** | Independent critique of plans and code; assign a **different model family** via `/subagents` for cross-model review |
| **Code-review** | High-confidence bug and logic review of staged or branch diffs |
| **Research** | Thorough GitHub and web investigation with source citations |
| **Security-review** | High-confidence vulnerability analysis |
