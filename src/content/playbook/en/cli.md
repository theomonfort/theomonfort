---
title: Copilot CLI
titleEn: Copilot CLI
summary: Copilot living in the terminal. An IDE-agnostic "colleague in the terminal" that lets you move between planning → implementation → review with just Shift+Tab.
icon: /theomonfort/icons/cli.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
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
  - group: 🖥️ TUI
    label: Browsing issues, pull requests, and gists from Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/browse-issues-prs-gists
  - group: 🖥️ TUI
    label: CLI command reference (/experimental, /theme)
    url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
  - group: 🛡️ Sandbox
    label: About local sandboxing
    url: https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes
  - group: 🛡️ Sandbox
    label: About cloud sandboxes
    url: https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes
  - group: 🛡️ Sandbox
    label: Using local sandboxing
    url: https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing
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
    label: "Cloud sandboxes: generally available (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience
  - group: 📰 Recent Changelog
    label: "Local sandboxing: generally available (2026-10-07)"
    url: https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available
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

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🖥️</span><span class="ctl-name">UI</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">Very lightweight. Terminal-centric, so there's a learning curve for commands and a minimal editor UI. On the other hand, since the CLI opens instantly, it's easy to work with local computer resources like folders, PowerPoint, and Excel files.</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">Easier to handle options, settings, file navigation, inline diffs, and the debugger on screen.</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧪</span><span class="ctl-name">Speed of new features</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">New experiments like <code>/limits</code>, <code>/fleet</code>, <code>/share</code>, and Rubber Duck tend to land here first.</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">More stability-oriented. Often adopts good ideas that matured in the CLI.</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤖</span><span class="ctl-name">Sub-agents</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">Has many built-in agents — Explore, Task, Rubber Duck, Code Review — and can launch them natively.</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">Currently limited, but gradually catching up.</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧭</span><span class="ctl-name">Session management</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">Fine-grained session control with <code>/context</code>, <code>/compact</code>, <code>/session</code>, etc.</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">Improving, but not as granular as the CLI right now.</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔀</span><span class="ctl-name">Partner agents</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">Copilot CLI runs within Copilot's harness. Codex / Claude harnesses are not available — you can use their <strong>models</strong>, but not their native harnesses.</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">Inside VS Code, it's easy to switch between Copilot, Codex, Claude, and other agents / extensions.</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔎</span><span class="ctl-name">Code search</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">CLI / app</span><span class="ctl-v">Local text search and semantic search of indexed GitHub repositories. <a class="retro-link" href="https://github.com/github/copilot-cli/blob/main/changelog.md" target="_blank" rel="noopener noreferrer">CLI release notes ↗</a></span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">Workspace text/semantic search, plus editor context and symbol navigation. <a class="retro-link" href="https://code.visualstudio.com/docs/agents/reference/workspace-context" target="_blank" rel="noopener noreferrer">Docs ↗</a></span></p>
<p class="ctl-row"><span class="ctl-k">Blackbird</span><span class="ctl-v">GitHub-hosted code search, not an editor-only index. <a class="retro-link" href="https://github.blog/engineering/architecture-optimization/the-technology-behind-githubs-new-code-search/" target="_blank" rel="noopener noreferrer">Architecture ↗</a></span></p>
</div>
</details>
</div>
</div>

## Powerful Built-in Agents <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents#built-in-agents" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-cli-agent-definitions" class="demo-toggle" /><label class="h2-demo" for="demo-cli-agent-definitions">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-cli-agent-definitions" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Agent definitions</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-cli-agent-definitions" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">CHECK THE INSTALLED VERSION</p>
<code class="demo-cmd">copilot --version</code>
<p class="demo-out">Note the installed CLI version.</p>
</li>
<li>
<p class="demo-step-title">OPEN THE DEFINITIONS FOLDER</p>
<p>Find <code class="demo-path">definitions/</code> in your local CLI installation. Example for macOS on Apple silicon:</p>
<p><code class="demo-path">~/.copilot/pkg/darwin-arm64/&lt;version&gt;/definitions/</code></p>
<p>Replace <code class="demo-path">&lt;version&gt;</code> with your installed version. The location depends on the platform and installation method.</p>
</li>
<li>
<p class="demo-step-title">READ AN AGENT DEFINITION</p>
<p>Open <code class="demo-path">explore.agent.yaml</code> or another <code class="demo-path">*.agent.yaml</code> in an editor.</p>
<p class="demo-out">Inspect the built-in agent's definition without modifying the installed files.</p>
</li>
</ol>
</div>
</div>

Copilot CLI includes built-in agents for common tasks. Check them and configure their models with **`/subagents`**.

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔎</span><span class="ctl-name">Explore</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Quickly analyzes the codebase and lets you ask questions about it, without adding it to the main context.</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛠️</span><span class="ctl-name">Task</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Runs commands like tests and builds, returning a short summary on success or the full output on failure.</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧠</span><span class="ctl-name">General purpose</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Handles complex multi-step tasks that require all tools and advanced reasoning, in a separate context from the main conversation.</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📝</span><span class="ctl-name">Code review</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Reviews code changes focusing solely on issues that genuinely matter, minimizing noise.</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📚</span><span class="ctl-name">Research</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Conducts deep research across the codebase, related repositories, and the web, producing detailed reports with citations.</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🦆</span><span class="ctl-name">Rubber duck</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Returns constructive critical feedback for complex tasks. Used automatically by Copilot CLI.</span></p></div>
</details>
</div>
</div>

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
| `/fleet [PROMPT]` | Split a plan across parallel subagents. <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet" target="_blank" rel="noopener noreferrer">Docs ↗</a> |
| `/limits set max-ai-credits N` | Set a soft cap on the session's AI Credits. <a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/set-session-limit" target="_blank" rel="noopener noreferrer">Docs ↗</a> |
| `/ask` | Consult Copilot as a question before proceeding. |
| `/env` | Check the environment information visible to the CLI. |

> 💰 **The agent knows its budget**: used, remaining, and max credits reach the model as `<session_limits_status>`, so it skips optional exploration. On its final call it uses no tools, summarizes progress and what remains, then stops. `/fleet` subagents share the same limit. Non-interactive: `--max-ai-credits N`.

## 🖥️ TUI (Terminal UI)

Run `/experimental on` to try the redesigned terminal UI with theme-aware semantic colors — check them with `/theme`. Inside a GitHub repository, use `Tab` to move between the menus in the table below.

| Tab | What's in it |
|---|---|
| **Session** | The normal interactive session (default) |
| **Issues** | Browse the repository's issues |
| **Pull requests** | Browse pull requests |
| **Gists** | Browse your personal gists |

> 📝 Screen-reader support and many other UI improvements landed too — see the <a class="retro-link" href="https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/" target="_blank" rel="noopener noreferrer">changelog ↗</a>.

## 🛡️ Sandboxes <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Both are **generally available** (as of 2026-11-06).

| | 🖥️ Local sandbox | ☁️ Cloud sandbox |
|---|---|---|
| **GA** | 2026-10-07 | 2026-10-28 |
| **Enable** | `/sandbox enable` | `copilot --cloud` (interactive only) |
| **Runs on** | macOS / Linux / updated Windows 11 | GitHub-hosted Linux, resumable |

Local is **off by default**; file-tool policy checks are best-effort, remote MCP is excluded. Cloud requires a **paid Copilot plan**.

## Non-interactive Mode ★ <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Run one prompt and exit. Automate routine work from **scripts, cron, batch files, or GitHub Actions**.

<div class="det-widget">
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cli-programmatic" open>
<summary class="det-btn"><span class="det-icon" aria-hidden="true">▶️</span><span class="det-name">Run &amp; output</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Run &amp; output</span></p>
<p class="det-why"><code>copilot -p 'Summarize README.md' -s</code><br><br><code>-p</code> / <code>--prompt</code>: run one turn and exit.<br><code>-s</code>: response text only, ready to pipe.<br><code>--no-ask-user</code>: skip clarifying questions.</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛡️</span><span class="det-name">Permissions</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Permissions</span></p>
<p class="det-why">Allow only the tools your task needs:<br><code>--allow-tool='shell(npm:*), write'</code><br><br>Never use <code>--allow-all</code> outside a sandbox. <code>--no-ask-user</code> does not grant tool permissions.</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-name">Authentication</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Authentication</span></p>
<p class="det-why">Priority: <code>COPILOT_GITHUB_TOKEN</code> → <code>GH_TOKEN</code> → <code>GITHUB_TOKEN</code><br><br><b>Fine-grained PAT</b> with <b>Copilot Requests</b> permission; no classic <code>ghp_</code> tokens.</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎯</span><span class="det-name">Repeatability</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Repeatability</span></p>
<p class="det-why"><code>--model MODEL</code>: pin the model.<br><code>--share='./session.md'</code>: save the transcript.<br>Fix the output format (e.g. <b>YES/NO</b>). Test interactively, then automate with <code>-p</code>.</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚙️</span><span class="det-name">Use cases</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Use cases</span></p>
<p class="det-why">Commit messages and release notes.<br>Lint fixes and test generation.<br>PR reviews with <code>/review</code> and dependency audits.<br>README, JSDoc, and translations.</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>
