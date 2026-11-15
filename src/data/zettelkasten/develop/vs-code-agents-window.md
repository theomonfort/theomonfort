---
title: "VS Code Agents Window"
group: "vscode"
tags: ["vscode", "agents-window", "multi-repo", "orchestration"]
aliases: ["Agents Window"]
---

The **VS Code Agents Window** (shipped in VS Code `1.120`, Preview) is a dedicated, chat-first window on [[GitHub]] that spans every workspace at once rather than binding to a single open folder like [[Copilot in VS Code]].

## Four Ways to Open It

1. Click **Open in Agents** in the VS Code title bar.
2. Run **Chat: Open Agents window** from the Command Palette.
3. Run `code --agents` from your terminal.
4. Open `insiders.vscode.dev/agents` in the browser from any device via [[Remote Agent Control]].

## Architecture & Constraints

- Coordinates [[Agents Window Five Panels]], [[Git Worktree Isolation]], and [[VS Code Session Targets]] from a single command center, comparable to the desktop [[GitHub Copilot App]].
- **Preview limits**: No multi-root sessions, Cloud sessions require a GitHub-backed repository, `/plan` replaces a standalone plan dropdown item, and VS Code extensions opt in via `extensions.supportAgentsWindow`.
