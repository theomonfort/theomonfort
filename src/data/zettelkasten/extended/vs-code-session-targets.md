---
title: "VS Code Session Targets"
group: "develop"
tags: ["vscode", "sessions", "harnesses", "cloud"]
---

**VS Code Session Targets** separate **model**, **agent harness**, and **execution location** when launching work from [[Copilot in VS Code]] or the [[VS Code Agents Window]].

## Available Session Targets

| Target | How to Launch | Where It Runs |
| --- | --- | --- |
| **Copilot (Local)** | Default Chat session | Shared Copilot harness on your local workspace |
| **Copilot CLI** | `Chat: New Copilot CLI Session` or `copilot` | Local terminal runtime via [[Copilot CLI]] |
| **Claude / Codex** | `Session Target` -> partner harness | [[Partner Agents]] (`Claude` native or `Codex` extension) |
| **Cloud** | `Session Target -> Cloud` | Managed sandbox via [[Connected Cloud Continuity]] or [[Copilot Cloud Agent]] |

## Core Distinction

- Selecting a Claude model inside Copilot does **not** switch the harness to [[Claude Code on GitHub]].
- Attaching to an existing machine via [[Remote Agent Control]] connects to that host rather than moving the session into [[Local & Cloud Sandboxes]].
