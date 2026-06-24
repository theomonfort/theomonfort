---
title: Copilot CLI
titleEn: Copilot CLI
summary: Copilot living in the terminal. An IDE-agnostic "colleague in the terminal" that lets you move between planning → implementation → review with just Shift+Tab.
icon: /theomonfort/icons/cli.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 14
category: develop
related: ['agent-skills', 'mcp', 'custom-agent', 'cloud-agent']
links:
  - label: GitHub Copilot CLI — Docs
    url: https://docs.github.com/copilot/github-copilot-in-the-cli
  - label: GitHub Copilot CLI — Overview
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview
  - label: Rubber Duck — cross-model second opinion
    url: https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/
  - label: Remote control CLI sessions (now GA)
    url: https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code
  - label: BYOK & Local models support
    url: https://github.blog/changelog/2026-04-07-copilot-cli-now-supports-byok-and-local-models/
  - group: 🤖 Non-interactive mode
    label: Running Copilot CLI programmatically
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically
  - group: 🤖 Non-interactive mode
    label: Programmatic reference (full flag list)
    url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-programmatic-reference
  - group: 🤖 Non-interactive mode
    label: Automating tasks with Copilot CLI and GitHub Actions
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions
  - group: 📰 Recent Changelog
    label: "Cloud & local sandboxes — public preview (2026-06-02)"
    url: https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/
  - group: 📰 Recent Changelog
    label: "Improved UI, Rubber Duck, scheduling & voice input (2026-06-02)"
    url: https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/
  - group: 📰 Recent Changelog
    label: "Remote control of CLI sessions — GA (mobile/web/VS Code) (2026-05-18)"
    url: https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code
  - group: 📰 Recent Changelog
    label: "Custom registry-based MCP allowlists (2026-04-16)"
    url: https://github.blog/changelog/2026-04-16-copilot-cli-supports-custom-registry-based-mcp-allowlists
  - group: 📰 Recent Changelog
    label: "GitHub Copilot CLI is now generally available (2026-02-25)"
    url: https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available
---

## In a nutshell

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Copilot CLI</strong> is Copilot living inside the terminal.
  </p>
  <p>
    It helps you ask, plan, edit, and execute — just like Copilot in VS Code. But it has CLI-specific features and harness, so let's explore those together.
  </p>
</div>

## Key Features

A full-stack AI environment packed into a single terminal.

- **Multi-file context awareness**: Treats the entire repository as a single workspace.
- **Code generation & editing**: Make edits from the terminal, review diffs, and approve.
- **Command execution**: Run builds, tests, lint, and more — read the results and proceed.
- **IDE-agnostic**: Works anywhere there's a terminal: VS Code, Vim, over SSH, etc.
- **Skills / MCP support**: Add the capabilities and external tools you need.
- **Non-interactive execution**: Run via CI, cron, or scripts with `copilot -p "..."`.

## CLI vs VS Code Chat

| | Copilot CLI | VS Code Chat |
|---|---|---|
| **UI** | Very lightweight. Terminal-centric, so there's a learning curve for commands and a minimal editor UI. On the other hand, since the CLI opens instantly, it's easy to work with local computer resources like folders, PowerPoint, and Excel files. | Easier to handle options, settings, file navigation, inline diffs, and the debugger on screen. |
| **Speed of new features** | New experiments like `/chronicle`, `/fleet`, `/share`, and Rubber Duck tend to land here first. | More stability-oriented. Often adopts good ideas that matured in the CLI. |
| **Sub-agents** | Has many built-in agents — Explore, Task, Rubber Duck, Code Review — and can launch them natively. | Currently limited, but gradually catching up. |
| **Session management** | Fine-grained session control with `/context`, `/compact`, `/session`, etc. | Improving, but not as granular as the CLI right now. |
| **Partner agents** | Copilot CLI runs within Copilot's harness. Codex / Claude harnesses are not available — you can use their **models**, but not their native harnesses. | Inside VS Code, it's easy to switch between Copilot, Codex, Claude, and other agents / extensions. |
| **Index** | Primarily uses terminal/search tools like `grep`, `rg`, and workspace commands. | Can use richer editor-side indexes like Blackbird. |

## Powerful Built-in Agents

Copilot CLI includes standard agents for common tasks.

| Agent | Description |
|---|---|
| **Explore** | Quickly analyzes the codebase and lets you ask questions about it, without adding it to the main context. |
| **Task** | Runs commands like tests and builds, returning a short summary on success or the full output on failure. |
| **General purpose** | Handles complex multi-step tasks that require all tools and advanced reasoning, in a separate context from the main conversation. |
| **Code review** | Reviews code changes focusing solely on issues that genuinely matter, minimizing noise. |
| **Research** | Conducts deep research across the codebase, related repositories, and the web, producing detailed reports with citations. |
| **Rubber duck** | Returns constructive critical feedback for complex tasks. Used automatically by Copilot CLI. |

> 💡 You can inspect these built-in agents' definitions in your local CLI install at `definitions/*.agent.yaml` (e.g. `~/.copilot/pkg/darwin-arm64/<version>/definitions/*.agent.yaml`).

## Rubber Duck — Cross-model Review

> 🦆 **Experimental**: A **different model family** from the main model provides a "second opinion" as a constructive critic, independently reviewing each phase of planning, implementation, and testing.

```mermaid
flowchart LR
  User([👤 Developer])
  Main["🧠 Main Model<br/>e.g. Claude"]
  Out["📝 Plan / Implementation / Test"]
  Duck["🦆 Rubber Duck<br/>e.g. GPT-5.4"]
  Final([✅ Verified output])
  User --> Main
  Main --> Out
  Out -->|"Independent review"| Duck
  Duck -->|"Blind spots / wrong assumptions"| Main
  Main --> Final

  classDef user fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef main fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef duck fill:#1a1500,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef out fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  class User,Final user
  class Main main
  class Duck duck
  class Out out
```

**Why does it work?** ── When the same model checks its own output, it gets caught by the **same assumptions and the same blind spots**. A model from a different family has different training data and different values, so it can catch **logic errors that were invisible** to the first model.

## Other Useful Commands

The CLI lets you instantly check models, sharing, experimental features, and environment info via slash commands.

| Command | When to use |
|---|---|
| `/help` | Check available commands and shortcuts. |
| `/model` | Check or switch the model in use. |
| `/ide` | Connect to an IDE such as VS Code. |
| `/share` | Share the current session. |
| `/experimental` | Check and enable experimental features. |
| `/chronicle` | Review the session history and work log. |
| `/task` | Check agents and tasks running in the background. |
| `/ask` | Consult Copilot as a question before proceeding. |
| `/env` | Check the environment information visible to the CLI. |

## 🖥️ TUI (Terminal UI)

Run `/experimental on` to try the redesigned terminal UI with theme-aware semantic colors — check them with `/theme`. Inside a GitHub repository, use `Tab` to move between the menus in the table below.

| Tab | What's in it |
|---|---|
| **Session** | The normal interactive session (default) |
| **Issues** | Browse the repository's issues |
| **Pull requests** | Browse pull requests |
| **Gists** | Browse your personal gists |

> 📝 Screen-reader support and many other UI improvements landed too — see the <a class="retro-link" href="https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/" target="_blank" rel="noopener noreferrer">changelog ↗</a>.

## 🛡️ Sandbox — Safe Execution Environment

Copilot runs the shell commands it executes inside an **isolated environment**, restricting access to your filesystem, network, and system — so you can hand off agentic work with confidence. (Public preview)

| | 🖥️ Local sandbox | ☁️ Cloud sandbox |
|---|---|---|
| **Enable** | `/sandbox enable` in a session | `copilot --cloud` |
| **Runs on** | Your machine (isolated) | GitHub-hosted ephemeral Linux |
| **Built on** | Microsoft MXC | Azure Container Apps Sandboxes |
| **Support** | macOS / Linux (Windows on Insiders) | Any device |
| **Policy** | Centrally managed via Intune / MDM | Inherits Cloud Agent policies |

- 🔒 **What's isolated**: filesystem / network / system capabilities for Copilot-initiated shell execution.
- 🔁 **Cloud keeps state**: Active → Stopped (snapshot) → Deleted. Resume from another device and run heavy tasks in parallel.
- 🧩 **Same auth**: uses your Copilot CLI sign-in — no separate cloud setup required.

## Non-interactive Mode (Programmatic Execution) ★

Copilot CLI can be run with a single command using `copilot -p "..."`. It executes one turn and exits without opening an interactive session, so it can be called from shell scripts, cron, **batch files**, and **GitHub Actions**. Delegate routine work — PR auto-review, lint fixes, release notes — to Copilot whenever a human doesn't need to be in the loop.

### Key flags

- `-p "..."` / `--prompt "..."` — Pass a prompt and exit after one turn
- `-s` (silent) — Output response text only to stdout (ideal for variable assignment or piping)
- `--no-ask-user` — Skip clarifying questions; make decisions autonomously
- `--allow-tool='shell(npm:*), write'` — Allow only the necessary tools (`--allow-all` is for sandboxes only)
- `--model gpt-5.5` — Pin the model to reduce variance
- `--share='./session.md'` — Save the entire session as Markdown

### Common use cases

- 📝 Commit message generation / 📰 Release note drafting
- 🐛 Bulk lint error fixes / 🧪 Tests for untested modules
- 🔍 AI PR review (script `/review`) / 🔐 Dependency vulnerability audit
- 📚 Bulk README & JSDoc generation / 🌏 Document translation

### Operational tips

- 🔑 Pass auth via env vars: `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN`
- 🧾 Use **fine-grained PAT (v2)** with the "Copilot Requests" permission (old `ghp_` format isn't supported)
- 🛡️ `--allow-tool` with a whitelist is the rule. Never use `--allow-all` outside a sandbox
- 🎯 Be specific in prompts — pinning the output format ("Number only.", "YES/NO") makes parsing easy
- 📊 Save sessions with `--share` so you can trace the reasoning behind results later
- 🧩 Iterate the prompt in interactive mode first, then port it to `-p` once it's solid

📘 Details:
- <a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically" target="_blank" rel="noopener noreferrer">Running GitHub Copilot CLI programmatically ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-programmatic-reference" target="_blank" rel="noopener noreferrer">Programmatic reference (full flag list) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions" target="_blank" rel="noopener noreferrer">Automating tasks with Copilot CLI and GitHub Actions ↗</a>
