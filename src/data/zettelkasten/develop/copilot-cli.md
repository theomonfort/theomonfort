---
title: "Copilot CLI"
group: "cli"
tags: ["cli", "terminal", "copilot", "tui"]
aliases: ["GitHub Copilot CLI"]
---

**Copilot CLI** (`copilot`, GA `2026-02-25`) brings full repository-wide coding, shell execution, planning (`Shift+Tab`), skills, and MCP tools directly into any terminal on [[GitHub]].

## Copilot CLI vs VS Code Chat

| Dimension | Copilot CLI | VS Code Chat |
| --- | --- | --- |
| **Interface** | Instant lightweight terminal UI (`vim`, SSH, local files) | Visual editor diffs, file tree, and debugger in [[Copilot in VS Code]] |
| **Feature Velocity** | Experimental capabilities (`/fleet`, `/limits`, [[Rubber Duck Review]]) land here first | Adopts matured workflows with editor polish |
| **Subagents & Search** | Native [[CLI Built-in Subagents]] + GitHub Blackbird semantic search | Catching up via shared Copilot harness |
| **Partner Harnesses** | Uses Claude/OpenAI models inside Copilot's harness (no native partner harness) | Switches native [[Partner Agents]] directly |

## Core Capabilities

- Interactive [[CLI Terminal UI]], [[CLI Slash Commands & Fleet]], [[CLI Session Credit Limits]], [[Local & Cloud Sandboxes]], [[Remote Agent Control]], and CI-ready [[CLI Programmatic Mode]].
