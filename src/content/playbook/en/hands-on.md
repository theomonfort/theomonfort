---
title: Hands-on
titleEn: Hands-on
summary: A workshop where you get hands-on with the concepts in this playbook by rebuilding a simplified version of this very playbook site from scratch — together with Copilot. Touches MCP / Instructions / Agent Skills / Plan mode / Cloud Agent / Code Review / Agentic Workflow end-to-end.
icon: /theomonfort/icons/handson.png
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
    label: Codespaces
    url: https://github.com/features/codespaces
  - group: 📖 Related
    label: Google Codelabs (claat)
    url: https://github.com/googlecodelabs/tools
---

## At a Glance

<div class="hero-quote hero-quote-mona">
  <p>
    The project you'll build is <strong>a simplified version of this very playbook site</strong>. You'll rebuild the site you're reading — <strong>from scratch, together with Copilot</strong>.
  </p>
  <p>
    Open the repo in <strong>Codespaces</strong> and you're coding in the browser, no local setup.
  </p>
</div>

## What You'll Build

The goal isn't a contrived demo app — it's **this very site** (a simplified version of it).

Once you've learned the **why** in the Playbook, the hands-on workshop lets you **apply that knowledge** — by rebuilding this Playbook itself, using the very features you just read about.

<img src="/theomonfort/handson/img/intro-context-window.png" alt="Preview of the Copilot Playbook site you'll build today (Context Engineering page)" class="build-preview" />

## Workshop Flow

<div class="workshop-flow-vertical">

```mermaid
flowchart TB
  Plan["<div style='min-width:560px;text-align:center'>1️⃣ <b>PLAN</b> : Harness the AI with MCP, Instructions, and Skills</div>"]
  Code["<div style='min-width:560px;text-align:center'>2️⃣ <b>CODE</b> : Design in Plan mode, then ship in Agent mode</div>"]
  Review["<div style='min-width:560px;text-align:center'>3️⃣ <b>REVIEW</b> : Copilot Code Review checks every PR before humans do</div>"]
  Improve["<div style='min-width:560px;text-align:center'>4️⃣ <b>IMPROVE</b> : Cloud Agent turns issues into PRs while you sleep</div>"]
  Operate["<div style='min-width:560px;text-align:center'>5️⃣ <b>OPERATE</b> : Agentic Workflows let the repo run itself</div>"]

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

## Getting Started

Fastest route — browser only:

1. 🌐 Open the repo: <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
2. 🟢 Click the green **Code** button → **Codespaces** tab → **Create codespace on main**
3. 📖 Open the hands-on: <a class="retro-link" href="/theomonfort/en/handson/">Open the hands-on →</a>
4. ⌨️ Step through one task at a time, talking to Copilot as you go

> 💡 No local setup needed — Codespaces ships with all extensions and dependencies preinstalled.
> 🤖 If you get stuck, ask Copilot Chat right there in the IDE — that's part of the learning.
