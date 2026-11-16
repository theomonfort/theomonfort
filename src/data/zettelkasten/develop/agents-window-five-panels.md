---
title: "Agents Window Five Panels"
group: "vscode"
tags: ["vscode", "agents-window", "ui", "diffs"]
---

**Agents Window Five Panels** form the fixed layout of the [[VS Code Agents Window]], where every panel dynamically tracks whichever session currently holds focus.

## The Five Panels

| Panel | Contents |
| --- | --- |
| **Sessions list** | Every active and past session grouped by workspace, plus workspace-less `Chats` |
| **Customizations** | Unified inspector for agents, skills, instructions, hooks, MCP servers, and plugins |
| **Chat area** | Active session conversation, prompt composer, and [[VS Code Chat Shortcuts & Commands]] |
| **Changes** | Branch, uncommitted, all, or last-turn diffs with built-in Git actions |
| **Files** | Full file tree of the session's [[Git Worktree Isolation]] checkout, not only modified files |

## Workspace-less Quick Chats

- Quick chats (`⌘K ⌘N` / `Ctrl+K Ctrl+N`) live in the `Chats` group without a repository binding, automatically hiding the **Files** and **Changes** panels while focused.
