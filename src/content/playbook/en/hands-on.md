---
title: Hands-on
titleEn: Hands-on
summary: A workshop where you can get hands-on with the concepts in this playbook by opening a repo in Codespaces. Built for next week's special workshop — a single simplified project that walks through everything end-to-end.
icon: 🎮
color: cyan
order: 3
category: introduction
related: ['github-copilot', 'codespaces', 'mcp']
links:
  - group: 🎮 Workshop
    label: 2026 GitHub Copilot Workshop (repo)
    url: https://github.com/theomonfort/Github-copilot-workshop
  - group: 🎮 Workshop
    label: Open the workshop Codelabs
    url: https://theomonfort.github.io/2026-Github-Copilot-Workshop/github-copilot-workshop/custom/handson/
  - group: 📖 Related
    label: GitHub Codespaces
    url: https://github.com/features/codespaces
  - group: 📖 Related
    label: Google Codelabs (claat)
    url: https://github.com/googlecodelabs/tools
---

## At a Glance

<div class="hero-quote hero-quote-chat">
  <p>
    Get hands-on with the concepts in this playbook through a <strong>workshop repo</strong> you can open in <strong>Codespaces</strong>.
  </p>
  <p>
    No local setup — just click and start coding through the Codelabs flow.
  </p>
</div>

> 🎮 **2026 GitHub Copilot Workshop** — a single simplified project that walks through MCP / Instructions / Agent Skills / Plan mode / Cloud Agent / Code Review / Agentic Workflow end-to-end.
> 🚀 Built for next week's special workshop. Codelabs format — one step at a time.

📘 Repo & Codelabs:
- <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
- <a class="retro-link" href="https://theomonfort.github.io/2026-Github-Copilot-Workshop/github-copilot-workshop/custom/handson/" target="_blank" rel="noopener noreferrer">Open the workshop Codelabs ↗</a>

## Workshop Flow

A **simplified end-to-end scenario** built around the core of this playbook, covered in 5 phases.

```mermaid
flowchart LR
  Prep["🛠️ <b>Repo prep</b><br/>MCP / Instructions / Skill"]
  Plan["📋 <b>Copilot</b><br/>Plan / Implement mode"]
  Review["🔍 <b>Copilot</b><br/>Code Review"]
  Improve["🤖 <b>Cloud Agent</b><br/>improvement tasks"]
  Maint["🔁 <b>Agentic Workflow</b><br/>repo maintenance"]

  Prep --> Plan --> Review --> Improve --> Maint

  classDef prep fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef dev  fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef rev  fill:#1a1408,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef ops  fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  class Prep prep
  class Plan,Improve dev
  class Review rev
  class Maint ops
```

| Phase | What you do | Related entry |
| --- | --- | --- |
| 🛠️ **Prep** | Add MCP servers, write instructions files, define agent skills | <a class="retro-link" href="/theomonfort/playbook/mcp">MCP ↗</a> · <a class="retro-link" href="/theomonfort/playbook/instructions">Instructions ↗</a> · <a class="retro-link" href="/theomonfort/playbook/agent-skills">Agent Skills ↗</a> |
| 📋 **Plan → Implement** | Design with Plan mode, then ship with Implement mode | <a class="retro-link" href="/theomonfort/playbook/copilot-chat">Copilot Chat ↗</a> |
| 🔍 **Review** | Auto-review the PR with Copilot Code Review | <a class="retro-link" href="/theomonfort/playbook/copilot-code-review">Code Review ↗</a> |
| 🤖 **Improve** | Delegate improvement tasks to Cloud Agent in parallel | <a class="retro-link" href="/theomonfort/playbook/cloud-agent">Cloud Agent ↗</a> |
| 🔁 **Operate** | Automate daily / weekly maintenance with Agentic Workflow | <a class="retro-link" href="/theomonfort/playbook/agentic-workflow">Agentic Workflow ↗</a> |

> 📝 This is a **simplified workshop flow** — real SDLC phases overlap and loop. The goal is to build intuition for *which feature fits which moment*.

## Getting Started

Fastest route — browser only:

1. 🌐 Open the repo: <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
2. 🟢 Click the green **Code** button → **Codespaces** tab → **Create codespace on main**
3. 📖 Open the Codelabs: <a class="retro-link" href="https://theomonfort.github.io/2026-Github-Copilot-Workshop/github-copilot-workshop/custom/handson/" target="_blank" rel="noopener noreferrer">Open the workshop ↗</a>
4. ⌨️ Step through one task at a time, talking to Copilot as you go

> 💡 No local setup needed — Codespaces ships with all extensions and dependencies preinstalled.
> 🤖 If you get stuck, ask Copilot Chat right there in the IDE — that's part of the learning.
