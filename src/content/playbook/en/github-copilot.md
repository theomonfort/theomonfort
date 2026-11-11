---
title: GitHub Copilot
titleEn: GitHub Copilot
summary: The world's most widely used AI development tool. An orchestrator that lets you freely combine major AI models with a variety of surfaces.
icon: /theomonfort/github-copilot-white-icon.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 2
category: introduction
related: ['github', 'copilot-chat', 'copilot-app', 'cloud-agent']
links:
  - group: 📖 Official Documentation
    label: GitHub Copilot
    url: https://github.com/features/copilot
  - group: 📖 Official Documentation
    label: Copilot Trust Center
    url: https://resources.github.com/copilot-trust-center/
  - group: 📖 Official Documentation
    label: Copilot Docs
    url: https://docs.github.com/copilot
  - group: 📖 Official Documentation
    label: GitHub Copilot app
    url: https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app
  - group: 📖 Official Documentation
    label: Copilot Fusion, effort levels and billing
    url: https://docs.github.com/en/copilot/concepts/models/copilot-fusion
  - group: 📰 Recent Changelog
    label: "Copilot Fusion generally available (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion
  - group: 📊 Benchmarks
    label: "Artificial Analysis: Copilot Fusion Max (2026-10-28)"
    url: https://artificialanalysis.ai/articles/github-copilot-fusion-orchestrates-anthropic-and-openai-models-to-balance-performance-and-cost
  - group: 📰 Recent Changelog
    label: "GPT-5.5 is generally available for GitHub Copilot (2026-04-24)"
    url: https://github.blog/changelog/2026-04-24-gpt-5-5-is-generally-available-for-github-copilot
  - group: 📰 Recent Changelog
    label: "Data residency (US + EU) and FedRAMP-authorized models in Copilot (2026-04-13)"
    url: https://github.blog/changelog/2026-04-13-copilot-data-residency-in-us-eu-and-fedramp-compliance-now-available
  - group: 📰 Recent Changelog
    label: "Copilot SDK is now in public preview (2026-04-02)"
    url: https://github.blog/changelog/2026-04-02-copilot-sdk-in-public-preview
---

## At a Glance

<div class="hero-quote hero-quote-mona">
  <p>GitHub Copilot is the world's most widely adopted <strong>AI developer tool</strong>.</p>
  <p>It accelerates your <strong>flow</strong> across every surface — <strong>IDE, terminal, and GitHub.com</strong>.</p>
</div>

## The History of GitHub Copilot

<div class="copilot-history">
  <div class="ch-era" style="grid-column: 1 / 4">The "Copilot" (Co-pilot) Era</div>
  <div class="ch-era" style="grid-column: 4 / 5">Rise of Agents</div>
  <div class="ch-era" style="grid-column: 5 / 6">Beyond the IDE</div>

  <div class="ch-arrow"></div>

  <div class="ch-card" data-tone="amber">
    <div class="ch-card-title">LLM Code<br/>Completion</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="green">
    <div class="ch-card-title">Copilot Chat<br/>Ask Mode</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="green">
    <div class="ch-card-title">Copilot Chat<br/>Edit Mode</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="magenta">
    <div class="ch-card-title">GitHub Copilot<br/>Agent Mode</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="cyan">
    <div class="ch-card-title">GitHub Copilot<br/>Beyond the IDE</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>

  <div class="ch-tag" data-tone="amber" style="grid-column: 1 / 2">Code completion only</div>
  <div class="ch-tag" data-tone="green" style="grid-column: 2 / 4">Responds to what you ask</div>
  <div class="ch-tag" data-tone="magenta" style="grid-column: 4 / 5">Acts autonomously</div>
  <div class="ch-tag" data-tone="cyan" style="grid-column: 5 / 6">Usable outside the IDE</div>
</div>

## AI Models & Surfaces <a class="h2-doc" href="https://docs.github.com/en/copilot/reference/ai-models/supported-models" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Models:** GPT / Claude / Gemini / Grok / MAI / Kimi. Custom models and **BYOK** on supported clients; availability depends on plan, client and policy.

| Work from | What you can do |
| --- | --- |
| **IDE** | Code in VS Code, Visual Studio, JetBrains, Xcode, Eclipse or Neovim |
| <a class="retro-link" href="/theomonfort/en/playbook/copilot-app">Copilot App ↗</a> | Direct parallel agents, triage issues and manage PRs |
| <a class="retro-link" href="/theomonfort/en/playbook/cli">Terminal ↗</a> | Work from your shell with Copilot CLI |
| <a class="retro-link" href="/theomonfort/en/playbook/cloud-agent">Cloud Agent ↗</a> / <a class="retro-link" href="/theomonfort/en/playbook/copilot-code-review">Code Review ↗</a> | Delegate implementation / review PRs |
| <a class="retro-link" href="https://github.com/github/copilot-sdk" target="_blank" rel="noopener noreferrer">SDK ↗</a> | Embed Copilot in your own applications |
| <a class="retro-link" href="/theomonfort/en/playbook/agentic-workflow">Automation ↗</a> | Turn repository tasks into agentic workflows |
| **Web / Mobile** | Chat, steer remote sessions and launch cloud work |

## Developer Impact

The impact GitHub Copilot has on developers  
Results from a 6-month study of 450 Accenture developers (2025)

| Activity | Productivity | Efficiency | Satisfaction |
|---:|---:|---:|---:|
| <span class="big-stat">94%</span><br>reported maintaining a "flow state" at work | <span class="big-stat">90%</span><br>feel they write better code | <span class="big-stat">50%</span><br>increase in number of builds | <span class="big-stat">96%</span><br>felt successful from day one |
| <span class="big-stat">90%</span><br>spend less time searching for information | <span class="big-stat">88%</span><br>of Copilot-suggested code was accepted as-is | <span class="big-stat">84%</span><br>improvement in build success rate | <span class="big-stat">90%</span><br>improvement in job satisfaction |

## Use Codex & Claude with a Single Subscription

With a GitHub Copilot subscription, you can use the **Codex** and **Claude** **agents (harness)** — both in the **IDE** and as a **Cloud Agent**. Usage is paid directly through **Copilot AI credits**, so no extra contract is needed.

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


## Fusion: Choose Effort, Not a Model <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Select **Copilot Fusion** and an effort level. Copilot chooses the models and how they work together, returning **one final response**.

- **Automatic planning:** Uses reasoning, coding, debugging and tool-use signals to choose a pattern and per-step reasoning effort.
- **GA since 2026-10-28:** Available in VS Code, Copilot CLI, Copilot App and JetBrains.

| **60** index score | **About ½** cost and tokens | **About 40%** less time |
| --- | --- | --- |
| Within 2 points of the comparison configuration | Average API cost: **$5.59 vs $11.42** per task | Average time per task |

**Benchmark scope:** Fusion Max in Copilot CLI vs Claude Code with Opus 5.5 Max, Artificial Analysis Coding Agent Index v2.0, reported 2026-10-28. These are benchmark results, not guaranteed savings for your tasks.

## Fusion: Effort & Execution Patterns <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**You choose effort. Fusion chooses the execution pattern.**

| Effort | Best for | Plans |
| --- | --- | --- |
| **Standard** | Everyday work, one model per task | All plans |
| **High** | Complex bugs and multi-file changes | Pro+, Max, Business, Enterprise |
| **Max** | Deep reasoning and thorough analysis | Pro+, Max, Business, Enterprise |

| Pattern | How it works |
| --- | --- |
| **Single** | One model completes the task |
| **Cascade** | Efficient draft → judge → stronger model if needed |
| **Critique** | Draft → parallel model critiques → combined feedback → revision |

As of **2026-11-11**; model policies apply. **Fast:** VS Code inline chat only, not selectable. Effort level ≠ model reasoning effort.

## Fusion: From Prompt to Response <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Public conceptual flow:** Models and reasoning effort vary per step.

```mermaid
---
config:
  flowchart:
    nodeSpacing: 25
    rankSpacing: 35
---
flowchart LR
  Input["Your prompt<br/>+ effort level"] --> Route["Evaluate task<br/>and choose a pattern"]
  Policy["Plan + model policies<br/>+ model availability"] --> Route
  Route --> Single["Single<br/>One model"]
  Route --> Cascade["Cascade<br/>Draft, judge, escalate"]
  Route --> Critique["Critique<br/>Draft, critique, revise"]
  Single --> Answer["One final<br/>response"]
  Cascade --> Answer
  Critique --> Answer

  classDef input fill:#1a0b2e,stroke:#ff2e88,color:#e8f4ff,stroke-width:2px
  classDef route fill:#0a0e27,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px
  classDef result fill:#0a0e27,stroke:#9bbc0f,color:#e8f4ff,stroke-width:2px
  class Input input
  class Policy,Route,Single,Cascade,Critique route
  class Answer result
```

Fusion **does not start subagents**. Discarded drafts **do not undo file edits**: review changes before committing.

## Fusion: Billing & the Launch Offer <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion#billing-for-copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Dated offer, verified 2026-11-11.** The published promotion ends **2026-11-30**.

| <span class="big-stat">30%</span><br/>off model costs | Eligibility | End date |
| --- | --- | --- |
| **Copilot Fusion usage only** | Users on **paid Copilot plans** | **November 30, 2026** |

- **Normal billing:** Per-model standard rates, with no separate Fusion charge.
- **Model costs only:** Not a discount on the subscription price.
- **Budget:** High / Max can use more models and AI credits than Standard.

Do not assume the discount continues after this date. Check the billing docs for current terms.

## Why Enterprises Choose Copilot

- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **Orchestration**<br/>　AI that spans the entire SDLC, not just coding
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **Freedom of choice across models, agents, and surfaces**<br/>　The best model and interface for every workflow. No vendor lock-in
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **Enterprise controls**<br/>　Centralized governance, visibility, and security
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **Compliance**<br/>　Copilot Proxy, policy controls, public-code filtering, and Microsoft IP protection for eligible use
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **Best cost-performance**<br/>　Pooled usage, rich built-in entitlements, and maximum price advantage via ACD

## Secure & Compliant Architecture

**Prompts and generated code** pass through **Copilot Proxy** — designed for safe enterprise use.<br/>
🔗 See the <a href="https://resources.github.com/copilot-trust-center/" target="_blank" rel="noopener noreferrer" class="retro-link">Copilot Trust Center</a> for full details.

```mermaid
---
config:
  flowchart:
    htmlLabels: true
  themeCSS: |
    .nodeLabel { text-align: center !important; }
    .nodeLabel .llm-row { display: flex !important; flex-direction: row !important; justify-content: center !important; align-items: center !important; gap: 6px !important; margin-top: 4px !important; }
    .nodeLabel .llm-row img { width: 22px !important; height: 22px !important; object-fit: contain !important; }
    .nodeLabel .llm-row img.ms-ico { width: 17px !important; height: 17px !important; }
    .nodeLabel img.proxy-ico { width: 18px !important; height: 18px !important; display: inline-block !important; margin: 0 6px 0 0 !important; vertical-align: middle !important; }
---
flowchart LR
  Dev["👤 Developer"]
  Proxy["<img class='proxy-ico' src='/theomonfort/github-copilot-white-icon.png' alt=''/><b>Copilot Proxy</b>"]
  LLM["<b>LLM Providers</b><div class='llm-row'><img src='/theomonfort/llm-openai.png' alt=''/><img src='/theomonfort/llm-anthropic.svg' alt=''/><img src='/theomonfort/llm-gemini.png' alt=''/><img src='/theomonfort/llm-grok.png' alt=''/><img class='ms-ico' src='/theomonfort/llm-microsoft.svg' alt=''/></div>"]

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

What Copilot Proxy does:

- 🔒 Removes **PII (Personally Identifiable Information)** from context
- 🚫 Filters **inappropriate content** from context
- 🛡️ Checks context for **common security vulnerabilities**
- ⚖️ Passes suggestions through an **IP (Intellectual Property) filter**
- 🔐 All data is **encrypted in transit**
