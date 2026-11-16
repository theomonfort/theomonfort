---
title: "Local & Cloud Sandboxes"
group: "develop"
tags: ["sandbox", "security", "cloud-sandbox", "cli"]
aliases: ["Cloud Sandboxes", "Local Sandboxing"]
---

**Local & Cloud Sandboxes** isolate file writes and network/command execution across [[Copilot CLI]], [[Copilot in VS Code]], and the [[GitHub Copilot App]].

## Local vs Cloud Sandbox Comparison

| Attribute | Local Sandbox | Cloud Sandbox |
| --- | --- | --- |
| **Availability** | GA `2026-10-07` | GA `2026-10-28` (paid Copilot plans) |
| **Enablement** | `/sandbox enable` (off by default) | `copilot --cloud` or `Session Target -> Cloud` |
| **Host OS** | macOS, Linux, updated Windows 11 | GitHub-hosted Linux VM with snapshot resume |
| **Notes** | Best-effort file policy checks; excludes remote MCP | Resumable across clients via [[Connected Cloud Continuity]] |

## Boundary Distinction

- Unlike [[Git Worktree Isolation]] (which isolates Git branches) or [[GitHub Codespaces]] (full cloud IDE containers), sandboxes enforce runtime tool and OS execution boundaries.
