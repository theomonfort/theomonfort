---
title: Hands-on
titleEn: Hands-on
summary: A workshop where you get hands-on with the concepts in this playbook by rebuilding a simplified version of this very playbook site from scratch — together with Copilot. Touches MCP / Instructions / Agent Skills / Plan mode / Cloud Agent / Code Review / Agentic Workflow end-to-end.
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
    label: Open the hands-on workshop
    url: https://theomonfort.github.io/theomonfort/en/handson/
  - group: 📖 Related
    label: GitHub Codespaces
    url: https://github.com/features/codespaces
  - group: 📖 Related
    label: Google Codelabs (claat)
    url: https://github.com/googlecodelabs/tools
---

## At a Glance

<div class="hero-quote hero-quote-theo">
  <p>
    The project you'll build is <strong>a simplified version of this very playbook site</strong>. You'll rebuild the site you're reading right now — <strong>from scratch, together with Copilot</strong>.
  </p>
  <p>
    Open the repo in <strong>Codespaces</strong> and you're coding in the browser, no local setup.
  </p>
</div>

> 🪞 **What you build = this site (simplified)**. The end-goal is concrete, so you immediately see *which feature shines at which moment*.
> 🎮 **Features you'll use** — MCP / Instructions / Agent Skills / Plan mode / Cloud Agent / Code Review / Agentic Workflow, all in one flow.
> 🚀 Built for next week's special workshop. Codelabs format — one step at a time.

📘 Repo & hands-on:
- <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
- <a class="retro-link" href="/theomonfort/en/handson/">Open the hands-on →</a>

## Workshop Flow

You build a **simplified version of this playbook site** through 5 phases that exercise the core features end-to-end.

<div class="workshop-flow-vertical">

```mermaid
flowchart TB
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

</div>

> 📝 This is a **simplified workshop flow** — real SDLC phases overlap and loop. The goal is to build intuition for *which feature fits which moment*.

## Getting Started

Fastest route — browser only:

1. 🌐 Open the repo: <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
2. 🟢 Click the green **Code** button → **Codespaces** tab → **Create codespace on main**
3. 📖 Open the hands-on: <a class="retro-link" href="/theomonfort/en/handson/">Open the hands-on →</a>
4. ⌨️ Step through one task at a time, talking to Copilot as you go

> 💡 No local setup needed — Codespaces ships with all extensions and dependencies preinstalled.
> 🤖 If you get stuck, ask Copilot Chat right there in the IDE — that's part of the learning.
