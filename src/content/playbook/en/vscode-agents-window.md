---
title: VS Code Agents Window
titleEn: VS Code Agents Window
summary: A dedicated, chat-first VS Code window that spans every workspace at once. Start, monitor, and review agent sessions across all your projects from a single sessions list, instead of opening one window per repository.
icon: 🪟
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 16.8
category: develop
related: ['copilot-app', 'copilot-chat', 'agentic-workflow', 'harness-engineering']
links:
  - group: 📖 Official docs
    label: Use the Agents window (Preview)
    url: https://code.visualstudio.com/docs/agents/run/agents-window
  - group: 📖 Official docs
    label: Manage agent sessions
    url: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
  - group: 📖 Official docs
    label: Choose a harness and code isolation
    url: https://code.visualstudio.com/docs/agents/run/agent-harnesses
  - group: 📖 Official docs
    label: Use the Chat view
    url: https://code.visualstudio.com/docs/agents/run/chat-view
  - group: 📖 Official docs
    label: Remote agent sessions
    url: https://code.visualstudio.com/docs/agents/run/remote-agent-sessions
  - group: 🔧 Customization
    label: Agent customizations editor
    url: https://code.visualstudio.com/docs/agent-customization/overview
  - group: 🌐 Browser
    label: Agents window on the web
    url: https://insiders.vscode.dev/agents
  - group: 📰 Announcements
    label: "VS Code 1.120 release notes"
    url: https://code.visualstudio.com/updates/v1_120
---

## In one line

<div class="hero-quote hero-quote-soon">
  <p>
    The <strong>Agents window</strong> is a dedicated VS Code window where <strong>chat is the primary interface</strong>, not the editor.
  </p>
  <p>
    It works across <strong>all your workspaces from one window</strong>, so you can assign high-level tasks and track many agents at once.
  </p>
</div>

> 🎯 The Chat view is bound to **the one folder you have open**. The Agents window is bound to **nothing** — it sees every workspace.
> ⚠️ **Preview**, shipped in VS Code **1.120**. Both surfaces share the same sessions, settings, and keybindings.

## How to open it

Four entry points, all landing on the same window alongside your main editor.

- 🖱️ The **Open in Agents** button in the VS Code title bar.
- ⌨️ **Chat: Open Agents window** from the Command Palette.
- 💻 `code --agents` from the terminal.
- 🌐 <a class="retro-link" href="https://insiders.vscode.dev/agents" target="_blank" rel="noopener noreferrer">insiders.vscode.dev/agents ↗</a> to drive sessions from any device.

```bash
code --agents          # open the Agents window directly
```

> 💡 Hid the title-bar button by accident? Right-click it and pick **Hide 'Open in Agents'** — the Command Palette and CLI still work.

## The five panels

The window is one fixed layout, and every panel follows whichever session has focus.

| Panel | What it holds |
| --- | --- |
| 📋 **Sessions list** | Every session, grouped by workspace, plus workspace-less **Chats** |
| 🔧 **Customizations** | Agents, skills, instructions, hooks, MCP servers, plugins |
| 💬 **Chat area** | The active session's conversation and prompt box |
| 🔀 **Changes** | Branch / uncommitted / all / last-turn diffs, plus Git actions |
| 📁 **Files** | The session's worktree — all files, not just the ones touched |

> 📝 **Quick chats** live in the `Chats` group and belong to no workspace, so **Files** and **Changes** disappear while one is active.

## Sessions and isolation

Each session gets an **isolated git worktree**, so parallel tasks never fight over the same files.

- 🌿 **Worktree per session**: dedicated branch, independent working tree.
- 🧩 **Harness per session**: pick Copilot, Claude, or Codex when you create it.
- 🎛️ **Configure at start**: agent, language model, permission level, and isolation mode.
- 🔭 **Active session drives everything**: Files, Changes, Terminal, Tasks, and the integrated browser all follow focus. Each session even keeps its own browser tabs and page state.

> 🔑 Sessions are **not** exclusive to this window — the same ones show up in your main VS Code window. See <a class="retro-link" href="https://code.visualstudio.com/docs/agents/run/agent-harnesses" target="_blank" rel="noopener noreferrer">harness and code isolation ↗</a>.

## Working in parallel

Starting a second agent shouldn't cost you the first one's context.

| Shortcut | Action |
| --- | --- |
| `Alt`+`Enter` | Submit and run **in the background**, staying where you are |
| `⌘N` / `Ctrl+N` | New session |
| `⌘K ⌘N` / `Ctrl+K Ctrl+N` | New quick chat |
| `⌘1`–`⌘9` / `Ctrl+1`–`Ctrl+9` | Focus a session by grid position |
| `⌘K ⌘W` / `Ctrl+K Ctrl+W` | Close all open sessions |

Open sessions side by side via **Open to the Side**, dragging one out of the list, or `Alt`-clicking. **Pin** a view so selecting another doesn't replace it.

> 💡 `Alt`+`Enter` is the real unlock. Fire off a long task, keep reading the session you were already in.

## ★ Killer use case

**Fanning out across repositories** is what this window exists for.

Group the sessions list by workspace, then use **New Session from Pull Request** to open a session that already carries a PR's diff and comments as context, on a worktree tracking that branch. Review, push more commits, and **Sync Changes** back to the same PR.

Add a per-session **Task** that runs on worktree creation, so a fresh worktree installs dependencies before you ever look at it.

> 🎯 One window, N repositories, N agents. You stop opening a VS Code window per project just to check on something.

## Where it fits

The same agent, framed differently depending on **where you direct it from**.

| Surface | Scope | Best for |
| --- | --- | --- |
| 🪟 **Agents window** | **Every workspace at once** | Parallel orchestration across projects |
| 💬 **Chat view** | The folder you have open | Staying close to the code you're editing |
| 🖥️ **Copilot App** | Its own desktop app | GitHub-native triage through to merge |
| ⌨️ **Copilot CLI** | Terminal | Scripting and CI |

> ⚠️ **Preview limitations**: no multi-root sessions, Copilot Cloud sessions need a GitHub-backed repo, the agents dropdown has no plan agent (use `/plan`), and extensions must be opted in via `extensions.supportAgentsWindow`.
> 💡 Compare with <a class="retro-link" href="/theomonfort/en/playbook/copilot-app">Copilot App ↗</a> and <a class="retro-link" href="/theomonfort/en/playbook/copilot-chat">Copilot Chat ↗</a>.
