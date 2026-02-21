# GitHub Copilot CLI

## Quick Start

```bash
# Install (macOS/Linux)
brew install copilot-cli

# Launch in your project directory
cd your-project && copilot

# First time: authenticate
/login
```

## Why CLI Is So Powerful

- **Same agentic harness as the Copilot coding agent** — the CLI operates as an autonomous agent that can execute shell commands, edit files, chain multi-step workflows, and iterate on errors automatically. It plans, acts, observes, and retries — all from your terminal.
- **Native access to GitHub APIs** — the CLI ships with a built-in GitHub MCP server, giving it direct access to REST and GraphQL APIs. This means it can query issues, read PR diffs, check Actions logs, search code across repos, create branches, and manage workflows — all through natural language without you ever writing an API call.
- **Better results through a richer feedback loop** — while no official benchmark exists comparing CLI and Chat head-to-head, there are strong practical reasons why CLI workflows tend to produce better outcomes:
  1. **Full execution context** — the CLI can run your code, see the errors, and fix them in a loop. Chat suggests code but can't verify it actually works.
  2. **Broader project awareness** — the CLI reads your filesystem, git history, and can grep across your entire codebase. Chat is limited to open files and what you manually provide.
  3. **Less context pollution** — the CLI's context window is dedicated entirely to your task. In VS Code, the chat context can be diluted by IDE state, open tabs, and UI metadata.
- **Works anywhere a terminal runs** — over SSH, on remote servers, in containers, on headless machines. No IDE required. Lightweight, instant startup, entirely keyboard-driven.
- **Image paste support** — paste screenshots directly into the terminal input. Copilot analyzes them for context — remarkable for a terminal tool.
- **Session sharing** — `/share` exports your session as a GitHub gist or markdown, making it easy to share debugging sessions or walkthroughs with colleagues.

## Setting It Up Right

### Repository-Level Configuration (`.github/`)

This is your **project-specific** setup — it travels with the repo and applies to everyone who uses Copilot on it:

```
.github/
├── copilot-instructions.md    # Always loaded — project structure, conventions, preferences
├── instructions/               # Scoped instruction files (*.instructions.md)
├── agents/                     # Custom agent definitions
│   └── my-agent.md
└── skills/                     # Reusable skills for agents
    └── my-skill/
        └── SKILL.md
```

- **`copilot-instructions.md`** — always loaded. Put your project structure, naming conventions, and workflow rules here. This is what makes Copilot understand *your* project.
- **`agents/`** — define specialized agents (e.g., `meeting-summarizer`, `code-reviewer`) that Copilot can invoke with `@agent-name`.
- **`skills/`** — reusable capabilities that agents can call. Each skill has a `SKILL.md` describing its behavior.

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

> 💡 **Tip**: The `~/.copilot/` folder is hidden by default. On macOS Finder, press **`Cmd+Shift+.`** to toggle hidden files. In VS Code Explorer, adjust `files.exclude` settings. In terminal, just use `ls -a`.

## Discovery

### VS Code Agents vs CLI Agents — Different Formats

Custom agents defined in `.github/agents/` can use two different formats, and they are **not interchangeable**:

- **VS Code Copilot Chat agents** use a ` ```chatagent ` fenced code block with YAML frontmatter inside. They reference VS Code-specific tools like `vscode`, `edit`, `search`, and IDE extensions. These agents appear in VS Code's Copilot Chat via `@agent-name` but are **not recognized by the CLI**.
- **Copilot CLI agents** use plain markdown with standard YAML frontmatter (no code fence wrapper). They appear when running `/agent` in the CLI.

If you created your agents from VS Code, they likely use the `chatagent` format. You will need to convert them to the CLI-compatible format for them to show up in the terminal.

### VS Code Extensions Can Add Powerful Agents

VS Code extensions can provide additional specialized agents that appear in your Copilot agent list. These are particularly useful for domain-specific workflows.

**Example**: The **Azure GitHub Copilot** extension (`ms-azuretools.vscode-azure-github-copilot`) adds agents like:
- **AzureCostOptimizeAgent** — Analyzes subscriptions for cost savings opportunities
- **Azure IaC Generator** — Generates Infrastructure as Code (Bicep, ARM, Terraform, Pulumi)
- **Azure IaC Exporter** — Exports existing Azure resources to IaC format
- **MCP AppService Builder** — Builds and deploys Azure App Service applications

To discover extensions with agents:
1. Open Extensions in VS Code (`Cmd+Shift+X`)
2. Search for extensions relevant to your work (e.g., "Azure", "AWS", "Docker")
3. Check if they provide Copilot agents or skills in their description

These extension-based agents integrate seamlessly with your custom agents and appear in the same agent picker (`@` in chat or `/agent` in CLI).

### VS Code Skills vs CLI Skills — Same Difference

The same format split applies to skills in `.github/skills/`. Each skill folder contains a `SKILL.md` file, but the format differs:

- **VS Code Copilot skills** use a ` ```copilot-skill ` fenced code block with YAML metadata inside. They integrate with VS Code's Copilot Chat and are **not recognized by the CLI**.
- **Copilot CLI skills** use plain markdown with standard YAML frontmatter (`---` delimiters) at the top of `SKILL.md`. The frontmatter must include at minimum `name` and `description` fields. They appear when running `/skills` in the CLI.

Example of CLI-compatible skill frontmatter:

```yaml
---
name: my-skill
description: Short description of what the skill does.
compatibility: Designed for GitHub Copilot CLI
---
```

If your skill's `SKILL.md` is missing this frontmatter, the CLI will **not** discover it — it simply won't appear in the available skills list. Adding the frontmatter is all that's needed to register it.

### The CLI Agent Experience Is Remarkable

Watching a custom agent work inside the CLI is genuinely impressive. You see every step in real time — the agent reads files, runs commands, edits code, and iterates on errors — all streamed directly in your terminal. It feels like pair-programming with someone who can type at machine speed.

### Terminal Access Makes the CLI Incredibly Powerful

Because the CLI agent has full access to terminal commands, it can do things that VS Code Chat simply cannot:

- **Install libraries on the fly** — need to edit a PowerPoint? The agent will `pip install python-pptx`, write a script, and modify your `.pptx` file — all without you pre-configuring anything.
- **Work with any file format** — Excel, PDF, images, CSV — if there's a Python or Node library for it, the CLI can install it and use it in the same session.
- **Connect to APIs and web services** — `curl`, `wget`, `gh`, or any CLI tool can be called. The agent can fetch data from websites, interact with REST APIs, post to services — no plugins or extensions needed.
- **Chain complex workflows** — download data from an API, transform it with a script, generate a report, and commit the result — all in one conversation.

This is a fundamentally different power level compared to IDE-based chat, which is sandboxed to code suggestions and cannot execute arbitrary commands. The CLI removes that ceiling entirely.

### Context Window Management — The 60% Rule

Use `/context` regularly to check how full your context window is. Once it goes **above ~60%**, the agent starts losing track of earlier conversation details, and response quality can degrade. When you hit that threshold:

1. Ask the CLI to **save important facts to memory** (the agent has a `store_memory` tool that persists knowledge across sessions).
2. Close the session and **start a fresh one** — the new session will automatically load your stored memories, giving you a clean context window with all the important context retained.

This simple habit keeps the agent sharp and avoids the slow drift in quality that happens when you push a single session too far.

## Essential Commands

| Command | What It Does |
|---------|-------------|
| `/help` | Show all available commands and keyboard shortcuts |
| `/plan` | Enter plan mode — create a structured implementation plan before coding |
| `/fleet` | Enable parallel sub-agents for faster multi-task execution |
| `/skills` | List and manage available skills |
| `/agent` | Browse and select from custom agents defined in your repo |
| `/model` | Switch between available models (Claude Sonnet, GPT-5, etc.) |
| `/review` | Run code review agent on your current changes |
| `/diff` | Review all changes made in the current session |
| `/resume` | Switch to or resume a previous session |
| `/compact` | Summarize conversation to free up context window |
| `/share` | Export session as markdown or GitHub gist |
| `/context` | Show context window token usage |
| `/mcp` | Manage MCP server connections |
| `/init` | Initialize Copilot instructions for a new repository |

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

## VS Code Chat vs Copilot CLI — When to Use Each

### VS Code Chat Excels At

- **Code Editing & Refactoring** — directly edit files with visual diffs and inline previews
- **Real-time Code Context** — sees your current file, selection, and open editors
- **Visual Feedback** — syntax highlighting, preview changes before accepting
- **Debugging Integration** — works with breakpoints, watch expressions, and debugger
- **IntelliSense & Language Services** — smarter suggestions based on project structure
- **Workspace Navigation** — leverages file explorer for browsing and understanding
- **Error Diagnostics** — sees linting errors, type checking, and IDE diagnostics

### Copilot CLI Excels At

- **Automation & Scripting** — runs headless, no IDE required, entirely keyboard-driven
- **Shell Command Execution** — can run commands, see errors, and iterate automatically
- **API Access** — native GitHub APIs, can query issues, PRs, workflows, search code
- **File Format Handling** — installs libraries on-the-fly (Python, Node, etc.) for any file type
- **Remote Work** — SSH, remote servers, containers, headless machines
- **Workflow Chaining** — complex multi-step operations in one conversation
- **Session Sharing** — export as gist or markdown for team collaboration
- **Image Analysis** — paste screenshots directly for context

### Simple Decision Rule

- **Writing/refactoring code locally?** Use VS Code Chat
- **Automating tasks, debugging, scripting, or working remotely?** Use Copilot CLI
- **Best of both worlds?** Use them together — CLI for automation, Chat for interactive coding
