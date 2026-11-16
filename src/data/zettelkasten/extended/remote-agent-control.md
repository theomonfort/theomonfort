---
title: "Remote Agent Control"
group: "develop"
tags: ["remote-control", "sessions", "cli", "vscode"]
---

**Remote Agent Control** (GA `2026-05-18`) lets you steer a running local [[Copilot CLI]] or [[Copilot in VS Code]] host from GitHub Mobile, the web (`insiders.vscode.dev/agents`), or the [[VS Code Agents Window]].

## Host Lifecycle Rules

- **Host Must Stay Online**: Remote control connects to the machine running your workspace and agent process. Unlike [[Connected Cloud Continuity]] or [[Copilot Cloud Agent]], sleeping the laptop or losing network pauses remote access.
- **Offline != Expired**: Sleep or a dropped connection makes the remote host temporarily unreachable without deleting the session; a synced transcript is not a live process backup.
- **CLI Reconnection**: If the CLI process stopped on the host machine, run `copilot --continue` or `copilot --resume` in that workspace to restore the session and automatically re-enable remote control alongside [[VS Code Session Targets]].
