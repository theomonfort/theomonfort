# GitHub Copilot CLI

📖 **Official docs**: [Install Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli)

## Quick Start

```bash
# Install (macOS/Linux)
brew install copilot-cli

# Launch in your project directory
cd your-project && copilot

# First time: authenticate
/login
```

## What Is Copilot CLI

Copilot CLI is an **autonomous AI agent running in your terminal**. It plans, executes, observes results, and iterates — all from the command line.

- **Native MCP server** — ships with a built-in GitHub MCP server, giving it direct access to REST and GraphQL APIs. Query issues, read PR diffs, check CI logs, search code across repos — all through natural language.
- **Full shell access** — the agent can run any terminal command: install packages, execute scripts, chain complex workflows, and fix errors in a loop. Combined with API access, it enables end-to-end automation that goes from querying data to acting on it.
- **Fleet mode** — spawn multiple sub-agents that work in parallel on independent tasks. Dramatically faster for multi-file operations.
- **Memory & context control** — persist facts across sessions, monitor your context window usage, and manage it actively. The CLI gives you visibility and control over your AI's working memory.
- **Works anywhere a terminal runs** — over SSH, on remote servers, in containers, on headless machines. No IDE required. Lightweight, instant startup, entirely keyboard-driven.
- **Image paste support** — paste screenshots directly into the terminal input for visual context.
- **Session sharing** — `/share` exports your session as a GitHub gist or markdown for easy collaboration.

## Setting It Up Right

### User-Level Configuration (`~/.copilot/`)

This is your **personal** setup — it applies to all projects on your machine:

```
~/.copilot/
├── copilot-instructions.md    # User-level instructions loaded for every project
├── lsp-config.json            # Language server configuration
└── session-state/             # Session data (managed automatically)
```

- **`copilot-instructions.md`** — global instructions that apply everywhere (your personal preferences, coding style, etc.).
- **`lsp-config.json`** — configure language servers for enhanced code intelligence across all projects.

> 💡 **Theo's Tip**: The `~/.copilot/` folder is hidden by default. On macOS Finder, press **`Cmd+Shift+.`** to toggle hidden files. In terminal, just use `ls -a`.

> 💡 **Theo's Tip**: The CLI loads agents and skills from two locations — but **only if they have YAML frontmatter** (`---` delimiters) at the top. Skills in `~/.copilot/skills/` are available in any project. Skills in `.github/skills/` are only available while working in that repo. Same applies to agents. If they don't show up in `/agent` or `/skills`, check the frontmatter.

## Fleet Mode

`/fleet` spawns **multiple sub-agents that work in parallel** on independent tasks. Instead of one agent handling everything sequentially, fleet mode distributes the work — dramatically speeding up operations that span multiple files or folders.

### Example

```
/fleet 各トップレベルフォルダにSUMMARY.mdを作成して。中身はファイル数、行数、サブフォルダ一覧、内容の要約
```

This single prompt spawns one sub-agent per top-level folder. Each agent independently counts files, lines, lists subfolders, and summarizes the contents — all running at the same time.

### Observing Fleet Progress

Use `/task` to see the status of each sub-agent in real time: which ones are running, which have completed, and what they produced.

> ⚠️ **Theo's Tip**: Don't keep the `/task` window focused for too long. Sub-agents may request your validation (e.g., to approve a file change), and if you're stuck watching `/task`, you'll miss the prompt and the fleet will hang waiting for your input.

## Memory & Session Management

### Context Window Control

The CLI gives you **full visibility and control** over your context window — something VS Code Chat does not expose:

| Command | What It Does |
|---------|-------------|
| `/context` | Shows exactly how much of your context window is used (% and tokens) |
| `/compact` | Summarizes the conversation to reclaim context space |

When your context usage goes above ~60%, the agent starts losing track of earlier details. At that point:
1. Ask the CLI to **save important facts to memory** (`store_memory` persists knowledge across sessions)
2. Start a **fresh session** — it loads your stored memories automatically

> 💡 **Theo's Tip**: Running `/compact` at the very beginning of a session won't free up much space. The system prompt, tool definitions, and loaded instructions take a fixed amount of context regardless — that baseline is incompressible.

### Session Management

| Command | What It Does |
|---------|-------------|
| `/session` | View your current session's checkpoints and history |
| `/resume` | Switch to or resume a previous session |
| `/rename` | Rename the current session for easier identification later |

Sessions are automatically checkpointed as you work. Use `/resume` to jump back to any previous session — useful when switching between tasks or picking up where you left off.

## GitHub API

The CLI's built-in GitHub MCP server lets you query and act on GitHub through natural language. Try these:

```
Show me the open issues in this repo
```
```
What changed in the most recent commit?
```
```
Did the last CI run pass? If not, show me the error logs.
```
```
Create an issue titled "Update documentation for v2 release"
```

No `gh` commands, no API calls, no tokens to manage. Just ask.

## Other Tips & Tricks

### `/help` — Your Cheat Sheet

Run `/help` at any time to see all available commands and keyboard shortcuts. It's the fastest way to discover what the CLI can do.

### `/share` — Export Your Session

Exports your current conversation as a **GitHub Gist** or markdown file. Great for:
- Sharing a debugging session with colleagues
- Documenting a workflow step-by-step
- Creating training material from a real session

### `/mcp` — Extend with External Services

Lists connected MCP (Model Context Protocol) servers and lets you add new ones. The CLI ships with a **built-in GitHub MCP server** — that's what powers all the API queries. You can add more:
- **Slack** — read/search messages, post to channels
- **Databases** — query Postgres, MySQL, SQLite in natural language
- **Jira/Linear** — interact with project management tools
- Any MCP-compatible server

Each server you add gives the agent new tools it can use — and they compose naturally in the same conversation.

### `/init` — Bootstrap a New Repo

Creates a `.github/copilot-instructions.md` file in your repository with a starter template. Run this once when setting up Copilot on a new project — it gives the agent the context it needs to understand your codebase.

### Any File Format — Excel, PowerPoint, PDF...

Because the CLI has full shell access, it can **install libraries on the fly** and work with any file format. Need to edit a spreadsheet? It will `pip install openpyxl`. Need to build a slide deck? `pip install python-pptx`. No pre-configuration needed.

Try it:
```
Create a simple 3-slide PowerPoint about our team's Q1 goals
```
```
Read the Excel file data.xlsx and summarize the contents
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Shift+Tab` | Cycle modes: interactive → plan → autopilot (experimental) |
| `@` | Mention files to include their contents in context |
| `Ctrl+S` | Run command while preserving your input |
| `Ctrl+T` | Toggle model reasoning display |
| `Ctrl+U` | Clear everything typed on the current line |
| `Ctrl+W` | Delete the previous word |
| `Ctrl+K` | Delete from cursor to end of line |
| `Ctrl+A` / `Ctrl+E` | Jump to beginning / end of line |
| `Ctrl+O` | Expand recent timeline (when input is empty) |
| `Ctrl+E` | Expand all timeline (when input is empty) |
| `!` | Execute a shell command directly, bypassing Copilot |
| `↑` / `↓` | Navigate command history |
| `Esc` | Cancel the current operation |

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))

This document can be found here: [`copilot-cli-jp.md`](https://github.com/theomonfort/cockpit/blob/main/40-presentations/41-Copilot/41.01-github-cli/copilot-cli-jp.md)
