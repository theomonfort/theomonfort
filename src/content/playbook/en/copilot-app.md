---
title: Copilot App
titleEn: Copilot App
summary: A purpose-built desktop app for agent-driven development. Run multiple agents in parallel and handle issue triage, implementation, review, and merge in one place—without bouncing between IDE, terminal, and browser.
icon: /theomonfort/github-copilot-white-icon.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 16.7
category: develop
related: ['cloud-agent', 'cli', 'partner-agent', 'agentic-workflow']
links:
  - group: 📖 Official docs
    label: About the GitHub Copilot app
    url: https://docs.github.com/en/copilot/concepts/agents/github-copilot-app
  - group: 📖 Official docs
    label: Getting started with the Copilot app
    url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started
  - group: 📖 Official docs
    label: Cloud and local sandboxes
    url: https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes
  - group: 🎓 Efficiency
    label: Optimizing your AI usage
    url: https://docs.github.com/en/copilot/tutorials/optimize-ai-usage
  - group: ⬇️ Download
    label: GitHub Copilot app download
    url: https://gh.io/app
  - group: 📰 Announcements
    label: "GitHub Copilot app generally available (2026-06-17)"
    url: https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/
  - group: 📰 Announcements
    label: "The agent-native desktop experience"
    url: https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/
---

## In one line

<div class="hero-quote hero-quote-stars">
  <p>
    <strong>Copilot App</strong> is a <strong>purpose-built desktop app</strong> for agent-driven development.
  </p>
  <p>
    Direct multiple agents in parallel, with native ties to GitHub issues, PRs, and CI. You move from <strong>writing</strong> to <strong>directing</strong>.
  </p>
</div>

> 🎯 **Generally available (GA)** since 2026-06-17. Supports macOS / Windows / Linux.
> 🆓 Available on **all paid Copilot plans** (Pro / Pro+ / Business / Enterprise).

## What it can do

Built on Copilot CLI, so repositories, branches, issues, and PRs work **with no extra setup**.

- **Parallel workspaces**: Run multiple agent sessions at once, each with a dedicated git worktree and branch.
- **GitHub integration**: Browse issues, start sessions, create / review / merge PRs, and check CI results—all inside the app.
- **Model selection**: Pick the LLM per session and adjust reasoning effort. **BYOK** (Bring Your Own Key) lets you use your own provider's models.
- **Canvases**: Custom interfaces where people and agents collaborate on the same surface (plan / PR / terminal / browser).
- **Automations**: Save recurring agent tasks and run them on a schedule or on demand.
- **Quick chats**: Brainstorm in a conversation mode without creating a branch or workspace.

## Session modes

Dial in **how much autonomy** you hand the agent, in three steps.

| Mode | Behaviour | When to use |
| --- | --- | --- |
| 🤝 **Interactive** | Collaborate and confirm step by step | Fuzzy specs / you want tight steering |
| 📝 **Plan** | Agent plans, you approve | Lock down scope and approach first |
| 🚀 **Autopilot** | Fully autonomous through to code | The task is already well defined |

> 💡 For early exploration, use a **Quick chat** to scope before opening a full session—it cuts rework and AI-credit spend.

## Parallel workspaces & sandboxes

Each session runs in an **isolated git worktree**, so files and context never conflict across tasks.

- 🌿 **Worktree isolation**: A dedicated branch per session. Move to the next task without waiting for one to finish.
- ☁️ **Cloud sandboxes** (public preview): Run in GitHub-hosted environments—no need to keep your machine awake.
- 🖥️ **Local sandboxes**: Isolated execution on your own machine.

> 📝 See <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes" target="_blank" rel="noopener noreferrer">Cloud and local sandboxes ↗</a> for details.

## Automations & customization

Repeatable work can be **saved and re-run**, and you can inject your org's context into agents.

- 🤖 **Automations**: Run routine agent tasks on a schedule or on demand.
- 🔧 **Customization**: Configure global instructions, MCP servers, and agent skills.
- 🕰️ **Session history**: Use `/chronicle` to pull insights from past sessions. `/chronicle cost tips` surfaces expensive patterns.

```text
/chronicle cost tips   # find wasteful patterns across past sessions
```

> 🔑 BYOK, MCP, and skills share the same extension mechanisms as <a class="retro-link" href="/theomonfort/en/playbook/mcp">MCP ↗</a> and <a class="retro-link" href="/theomonfort/en/playbook/agent-skills">Agent Skills ↗</a>.

## ★ Killer use case

**Directing many agents at once** is where Copilot App shines.

Before you leave, spin up five issues, each in its own workspace. Hand the well-defined ones to Autopilot, approve the judgment calls in Plan mode, then review and merge PRs in the order their CI turns green.

Humans decide **what to build / which to land**; machines handle **writing / fixing / verifying**. Splitting the boundary lets review-ready PRs flow like a pipeline.

> 🎯 The IDE is a tool for **focusing on one task**. Copilot App is the command center for **handling many tasks in parallel**.

## Where it fits among the tools

Same Copilot agent, different role depending on **where you direct it from**.

| Tool | Home | Strength |
| --- | --- | --- |
| 🖥️ **Copilot App** | Desktop app | **Parallel multi-agent direction** · native GitHub integration |
| ⌨️ **Copilot CLI** | Terminal | Single agent, easy to embed in scripts / CI |
| ☁️ **Cloud Agent** | GitHub.com | Async execution—just assign an issue |
| 🧩 **Partner Agent** | Various SDKs / harnesses | Delegate to other harnesses like Claude / Codex |

> 💡 Copilot App is built on Copilot CLI. Use <a class="retro-link" href="/theomonfort/en/playbook/cli">Copilot CLI ↗</a> for terminal automation and <a class="retro-link" href="/theomonfort/en/playbook/cloud-agent">Cloud Agent ↗</a> for async runs on GitHub.
