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

<div class="hero-quote hero-quote-mona">
  <p>
    The project you'll build is <strong>a simplified version of this very playbook site</strong>. You'll rebuild the site you're reading right now — <strong>from scratch, together with Copilot</strong>.
  </p>
  <p>
    Open the repo in <strong>Codespaces</strong> and you're coding in the browser, no local setup.
  </p>
</div>

## What You'll Build

The goal isn't a contrived demo app — it's **this very site you're looking at** (a simplified version of it).

<img src="/theomonfort/handson/img/intro-context-window.png" alt="Preview of the Copilot Playbook site you'll build today (Context Engineering page)" class="build-preview" />

> 🎯 The finished product is already right in front of you, so at every step you can see *exactly which part you're about to build next*.

## Workshop Flow

You build a **simplified version of this playbook site** through 5 phases that exercise the core features end-to-end.

<div class="workshop-flow-vertical">

```mermaid
flowchart TB
  Plan["1️⃣ <b>PLAN</b><br/>Put a harness on the AI<br/>Wire it to data with MCP,<br/>add rules with Instructions, patterns with Skills"]
  Code["2️⃣ <b>CODE</b><br/>Design with Copilot Chat<br/>Use Plan mode to think,<br/>then Agent mode to ship the code"]
  Review["3️⃣ <b>REVIEW</b><br/>Copilot Code Review scans every PR first<br/>so humans only see<br/>what really matters"]
  Improve["4️⃣ <b>IMPROVE</b><br/>Hand issues to Cloud Agent<br/>and watch improvement PRs<br/>pile up while you sleep"]
  Operate["5️⃣ <b>OPERATE</b><br/>Schedule Copilot via GitHub Actions<br/>with Agentic Workflows<br/>so the repo runs itself"]

  Plan --> Code --> Review --> Improve --> Operate

  classDef prep fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef dev  fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef rev  fill:#1a1408,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef ops  fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  class Plan prep
  class Code,Improve dev
  class Review rev
  class Operate ops
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
