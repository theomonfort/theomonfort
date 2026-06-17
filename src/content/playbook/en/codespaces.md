---
title: Codespaces
titleEn: Codespaces
summary: Customizable remote development environments hosted in the cloud. The ideal AI-driven development playground for safely sandboxing AI experiments and work.
icon: /theomonfort/github-vscode-mark.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 17
category: develop
related: ['cloud-agent', 'agentic-workflow', 'cli']
links:
  - group: GitHub Docs
    label: Codespaces (overview)
    url: https://github.com/features/codespaces
  - group: GitHub Docs
    label: Codespaces documentation
    url: https://docs.github.com/en/codespaces
  - group: GitHub Docs
    label: Choosing the machine type for your codespace
    url: https://docs.github.com/en/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace
  - group: Dev Containers
    label: devcontainer.json reference
    url: https://containers.dev/
  - group: Dev Containers
    label: Introduction to dev containers (GitHub Docs)
    url: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
  - group: 📰 Recent Changelog
    label: "Codespaces is now GA for GitHub Enterprise with data residency (2026-04-01)"
    url: https://github.blog/changelog/2026-04-01-codespaces-is-now-generally-available-for-github-enterprise-with-data-residency
  - group: 📰 Recent Changelog
    label: "Codespaces with data residency now available in Japan (2026-03-19)"
    url: https://github.blog/changelog/2026-03-19-codespaces-with-data-residency-now-available-in-japan
---

## In a nutshell

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Codespaces</strong> is a <strong>disposable development environment</strong> hosted in the cloud by GitHub.
  </p>
  <p>
    Open a browser and a <strong>full development environment with VS Code</strong> spins up in seconds. The first choice when you want to let AI try something out.
  </p>
</div>

## Features

A **Docker container** in the cloud, where 1 session = 1 codespace. Configuration is codified in `devcontainer.json` inside the repo.

**How to connect (from anywhere)**

- 🌐 **Browser** — Open directly from `github.com` with a single URL
- 💻 **VS Code Desktop** — Remote connection from local VS Code
- 🖥️ **GitHub CLI** (`gh codespace ssh`) — Connect directly from the terminal

**Container environment**

- 🐳 **Docker-based** — Declare base image + features + post-create script in `devcontainer.json`
- 📦 **Reproducible** — Open the same repo and everyone gets the same environment
- 🔌 **VS Code extensions pre-installed** — Copilot, MCP servers, linters can all be pre-configured
- ⚡ **Machine size** — Switchable on demand (up to **32 cores / 128 GB RAM / 128 GB storage**)

> When you want to run heavy builds or AI agents in parallel, choose a larger size. **You can also change the size after startup**.

## Benefits

- 🚀 **Zero setup time** — Just press "Open in Codespaces"
- 👥 **Same environment for everyone** — "It works on my machine" disappears
- 🌍 **Access from anywhere** — All you need is a browser
- 💪 **Works on low-spec machines** — Even an old PC at hand can use **up to 32 cores / 128 GB RAM** on the cloud side
- 🛡️ **Safely isolate AI** — If something breaks, throw it away and start fresh
- 🤖 **AI tools pre-installed** — Pre-equipped with Copilot CLI, MCP servers, and Skills
