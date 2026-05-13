---
title: GitHub Copilot
titleEn: GitHub Copilot
summary: The world's most widely used AI development tool. An orchestrator offering the broadest choice of AI models and surfaces among its competitors.
icon: /theomonfort/github-copilot-white-icon.png
color: cyan
order: 2
category: introduction
related: ['github', 'copilot-chat', 'cloud-agent']
links:
  - label: GitHub Copilot
    url: https://github.com/features/copilot
  - label: Copilot Trust Center
    url: https://resources.github.com/copilot-trust-center/
  - label: Copilot Docs
    url: https://docs.github.com/copilot
---

## At a Glance

GitHub Copilot is the world's most widely used AI development tool. It is the orchestrator that offers **the broadest choice of AI models and surfaces** among its competitors.

Available AI models: OpenAI / Anthropic / Google Gemini / xAI Grok, plus support for custom models.

Available surfaces:

- **IDE**: VS Code / Visual Studio / JetBrains / Xcode / Eclipse / Neovim
- **Terminal**: Interact from the shell with Copilot CLI
- **SDK**: Embed Copilot directly into your own applications
- **Cloud**: Autonomous execution from the browser via Cloud Agent · Automatic PR review with Copilot Code Review
- **Automation**: Codify workflows with Agentic Workflow
- **Web / Mobile**: Chat from GitHub.com and GitHub Mobile · Remote CLI control · Launch Cloud Agents

## Developer Impact

The impact GitHub Copilot has on developers  
Results from a 6-month study of 450 Accenture developers

| Activity | Productivity | Efficiency | Satisfaction |
|---:|---:|---:|---:|
| <span class="big-stat">94%</span><br>reported maintaining a "flow state" at work | <span class="big-stat">90%</span><br>feel they write better code | <span class="big-stat">50%</span><br>increase in number of builds | <span class="big-stat">96%</span><br>felt successful from day one |
| <span class="big-stat">90%</span><br>spend less time searching for information | <span class="big-stat">88%</span><br>of Copilot-suggested code was accepted as-is | <span class="big-stat">84%</span><br>improvement in build success rate | <span class="big-stat">90%</span><br>improvement in job satisfaction |

## Use Codex & Claude with a Single Subscription

A GitHub Copilot subscription includes the **harness** (IDE extension + Cloud agent foundation) needed to run Codex and Claude. You don't get every feature of Codex / Claude, but within Copilot's **premium request quota** you can switch between them in the IDE or in the cloud — no extra contract needed.

<div class="copilot-flow-small">

```mermaid
flowchart LR
  Sub["💎 GitHub Copilot<br/>One Subscription"]

  subgraph IDE["💻 IDE Agents"]
    direction TB
    VSC["Copilot"]
    JB["Codex"]
    CL["Claude"]
  end

  subgraph Cloud["☁️ Cloud Agents (Async Coding)"]
    direction TB
    CA["Copilot Cloud Agent"]
    GH["Claude Coding Agent"]
    GO["Codex Coding Agent"]
  end

  Sub --> IDE
  Sub --> Cloud

  classDef sub fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef ide fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef cloud fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  class Sub sub
  class VSC,JB,CL ide
  class CA,GH,GO cloud
```

</div>


## Why Enterprises Choose Copilot

- ✅ **Orchestration**<br/>　AI that spans the entire SDLC, not just coding
- ✅ **Freedom of choice across models, agents, and surfaces**<br/>　The best model and interface for every workflow. No vendor lock-in
- ✅ **Enterprise controls**<br/>　Centralized governance, visibility, and security
- ✅ **Best cost-performance**<br/>　Pooled usage, rich built-in entitlements, and maximum price advantage via ACD

## Secure & Compliant Architecture

All code input passes through **Copilot Proxy (CAPI)** — designed for safe enterprise use.

```mermaid
---
config:
  flowchart:
    htmlLabels: true
  themeCSS: |
    .nodeLabel { text-align: center !important; }
    .nodeLabel .llm-row { display: flex !important; flex-direction: row !important; justify-content: center !important; align-items: center !important; gap: 6px !important; margin-top: 4px !important; }
    .nodeLabel .llm-row img { width: 22px !important; height: 22px !important; object-fit: contain !important; }
    .nodeLabel img.proxy-ico { width: 18px !important; height: 18px !important; display: inline-block !important; margin: 0 6px 0 0 !important; vertical-align: middle !important; }
---
flowchart LR
  Dev["👤 Developer"]
  Proxy["<img class='proxy-ico' src='/theomonfort/github-copilot-white-icon.png'/><b>CAPI</b>"]
  LLM["<b>LLM Providers</b><div class='llm-row'><img src='/theomonfort/llm-openai.png'/><img src='/theomonfort/llm-anthropic.svg'/><img src='/theomonfort/llm-gemini.png'/><img src='/theomonfort/llm-grok.png'/></div>"]

  Dev -->|"Context"| Proxy
  Proxy -->|"Suggestions"| Dev
  Proxy <-->|" "| LLM

  classDef llm fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef proxy fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef dev fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  class LLM llm
  class Proxy proxy
  class Dev dev
```

**What Copilot Proxy does:**

- 🔒 Removes **PII (Personally Identifiable Information)** from context
- 🚫 Filters **inappropriate content** from context
- 🛡️ Checks context for **common security vulnerabilities**
- ⚖️ Passes suggestions through an **IP (Intellectual Property) filter**
- 🔐 All data is **encrypted in transit**

> 🔗 See <a href="https://resources.github.com/ja/copilot-trust-center/" target="_blank" rel="noopener noreferrer" class="retro-link">Copilot Trust Center</a> for details.
