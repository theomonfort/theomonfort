---
title: "Git Worktree Isolation"
group: "vscode"
tags: ["git", "worktree", "parallel", "isolation"]
aliases: ["Worktree Isolation"]
---

**Git Worktree Isolation** gives each parallel agent session its own dedicated Git branch and working directory in the [[VS Code Agents Window]] and [[GitHub Copilot App]], preventing concurrent agents from overwriting one another's edits.

## Parallel Session Controls

| Shortcut / Action | Behavior |
| --- | --- |
| **`Alt+Enter`** | Submits a prompt in the background while keeping focus on your current session |
| **`⌘N` / `Ctrl+N`** | Starts a new isolated session |
| **`⌘1`-`⌘9` / `Ctrl+1`-`Ctrl+9`** | Jumps directly to a session by grid position |
| **`Open to the Side` / `Pin`** | Displays multiple sessions side by side without replacing pinned views |

## Pull Request & Task Automation

- **New Session from Pull Request** checks out a worktree tracking an open PR with its diff and comments preloaded, syncing new commits straight back to the PR.
- Configure a per-session startup **Task** so new worktrees automatically install dependencies on creation.
- **Worktree != sandbox**: Worktrees isolate Git branches, whereas [[Local & Cloud Sandboxes]] restrict filesystem and network execution. Also visible inside [[Agents Window Five Panels]].
