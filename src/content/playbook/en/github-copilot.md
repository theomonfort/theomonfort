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


## <span class="fusion-title">Copilot Fusion</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="fusion-slide fusion-overview">
<p class="fusion-lead"><strong>You choose effort.</strong> Fusion chooses the models.</p>
<div class="fusion-value-grid">
<div class="fusion-features">
<div class="fusion-feature"><span>01</span><div><strong>Stop switching models</strong><p>Select Fusion, then Standard, High or Max.</p></div></div>
<div class="fusion-feature"><span>02</span><div><strong>A plan for each prompt</strong><p>Match the task to models, reasoning and an execution pattern.</p></div></div>
<div class="fusion-feature"><span>03</span><div><strong>One final response</strong><p>Extra review calls only when the task warrants them.</p></div></div>
</div>
<div class="fusion-metrics" aria-label="Benchmark results">
<div class="fusion-metric"><strong>60</strong><span>Coding Agent Index</span><span class="fusion-micro">Fusion Max, within 2 points of Opus 5.5 Max.</span></div>
<div class="fusion-metric"><strong>1/2</strong><span>Cost / tokens</span><span class="fusion-micro">Average API cost and token usage per task.</span></div>
<div class="fusion-metric"><strong>40%</strong><span>Less time</span><span class="fusion-micro">About 40% less time per task.</span></div>
<div class="fusion-metric"><strong>77%</strong><span>Max cost reduction</span><span class="fusion-micro">DeepSWE: Fusion High vs GPT-6 Astra (high), with higher accuracy.</span></div>
</div>
</div>
<p class="fusion-availability"><strong>GA, 2026-10-28.</strong> VS Code / Copilot CLI / Copilot App / JetBrains.</p>
<p class="fusion-source">77%: supplied original slide, not independently verified. Other three: <a href="https://artificialanalysis.ai/articles/github-copilot-fusion-orchestrates-anthropic-and-openai-models-to-balance-performance-and-cost" target="_blank" rel="noopener noreferrer">Artificial Analysis, 2026-10-28</a> (Fusion Max vs Opus 5.5 Max). Benchmark results, not guaranteed savings.</p>
</div>

## <span class="fusion-title">Fusion: choose effort</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="fusion-slide fusion-choices">
<p class="fusion-lead">Choose the trade-off, <strong>not a fixed workflow.</strong></p>
<div class="fusion-choice-grid">
<section class="fusion-choice" aria-label="Effort levels">
<p class="fusion-zone-label">YOU CHOOSE THE EFFORT</p>
<div class="fusion-choice-row"><strong>Standard</strong><p>Everyday work, one model.<small>All Copilot plans</small></p></div>
<div class="fusion-choice-row"><strong>High</strong><p>Complex bugs and multi-file changes.</p></div>
<div class="fusion-choice-row"><strong>Max</strong><p>Deepest reasoning and thorough analysis.</p></div>
<p class="fusion-micro"><b>High / Max:</b> Pro+, Max, Business, Enterprise.</p>
</section>
<section class="fusion-choice" aria-label="Execution patterns">
<p class="fusion-zone-label">FUSION CHOOSES THE PATTERN</p>
<div class="fusion-choice-row"><strong>Single</strong><p>One model solves the task directly.</p></div>
<div class="fusion-choice-row"><strong>Cascade</strong><p>Efficient draft → judge → accept or escalate.</p></div>
<div class="fusion-choice-row"><strong>Critique</strong><p>Draft → parallel critiques → combine → revise.</p></div>
<p class="fusion-micro">The next prompt can use a different pattern.</p>
</section>
</div>
<p class="fusion-availability"><strong>Effort level ≠ per-model reasoning.</strong> Model policies still apply; disabling required models can make Max unavailable.</p>
<p class="fusion-source"><b>Fast:</b> VS Code inline chat only, not selectable. Availability checked 2026-11-11.</p>
</div>

## <span class="fusion-title">Inside Fusion</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="info-fusion-runtime" class="demo-toggle" /><label class="h2-demo h2-info" for="info-fusion-runtime">&#9432; INFO</label>

<div class="demo-panel is-info fusion-help">
<label class="demo-scrim" for="info-fusion-runtime" aria-label="Close Fusion details"></label>
<div class="demo-window" role="group" aria-label="Public Fusion routing details">
<div class="demo-head"><span class="demo-tag">INFO</span><span class="demo-name">Public routing concepts</span><label class="demo-close" for="info-fusion-runtime" aria-label="Close">&#10005;</label></div>
<div class="info-body">
<p><b>Policy-aware model pool:</b> Plan, administrator, data-residency and FedRAMP restrictions still apply. The model pool can change.</p>
<p><b>Adaptive routing:</b> Fusion considers system health and availability. Routing follows natural cache boundaries and large changes in conversation complexity.</p>
<p><b>Per-step execution:</b> Each step has its own model, reasoning effort and model context limit. You can follow step/model progress; only the final response is shown.</p>
<p><b>Workspace safety:</b> Fusion does not start subagents. Discarding a draft does not undo its file edits. Review changes before committing.</p>
</div>
</div>
</div>

<div class="fusion-slide fusion-system">
<div class="fusion-system-top">
<section class="fusion-zone fusion-input">
<p class="fusion-zone-label">01 / YOUR WORKSPACE</p>
<p><strong>Prompt + effort</strong></p>
<p class="fusion-micro">Standard / High / Max</p>
<div class="fusion-constraint">Plan + model policies</div>
</section>
<span class="fusion-connector" aria-hidden="true"></span>
<section class="fusion-zone fusion-plan">
<p class="fusion-zone-label">02 / FUSION PLANNING</p>
<div class="fusion-signals"><span>Reasoning</span><span>Coding</span><span>Debugging</span><span>Tools</span></div>
<p><strong>Choose pattern, models &amp; reasoning per step.</strong></p>
<p class="fusion-micro">Respect policies, health and availability.</p>
</section>
</div>
<p class="fusion-wire">↓ Execution plan</p>
<section class="fusion-zone fusion-execution">
<div class="fusion-zone-head"><p class="fusion-zone-label">03 / EXECUTION + REVIEW</p><span class="fusion-micro">One selected path per prompt</span></div>
<div class="fusion-paths">
<div class="fusion-path"><h3>Single</h3><div class="fusion-flow"><span>Model</span><b aria-hidden="true">→</b><span>Answer</span></div><p>Direct solution, no extra review calls.</p></div>
<div class="fusion-path"><h3>Cascade</h3><div class="fusion-flow"><span>Draft</span><b aria-hidden="true">→</b><span>Judge</span></div><p><b>Accept</b> the draft, or <b>escalate</b> to a stronger model.</p></div>
<div class="fusion-path"><h3>Critique</h3><div class="fusion-flow"><span>Draft</span><b aria-hidden="true">→</b><span>Parallel critiques</span></div><p>Combine feedback → original model revises.</p></div>
</div>
</section>
<div class="fusion-output"><span>04</span><strong>One final response</strong><span>Intermediate drafts may be revised or discarded.</span></div>
<p class="fusion-safety">No subagents launched. Discarded drafts do not undo file edits.</p>
</div>

## <span class="fusion-title">Fusion: pricing</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion#billing-for-copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="fusion-slide fusion-billing">
<div class="fusion-value-grid fusion-offer-grid">
<div class="fusion-metric">
<p class="fusion-zone-label">LAUNCH OFFER</p>
<strong>30%</strong><span>off model costs</span><span class="fusion-micro">Copilot Fusion usage only</span>
</div>
<section class="fusion-zone" aria-label="Offer conditions">
<p class="fusion-zone-label">ELIGIBILITY + TIMING</p>
<div class="fusion-choice-row"><strong>Plans</strong><p>Users on <b>paid Copilot plans</b>.</p></div>
<div class="fusion-choice-row"><strong>Ends</strong><p><strong><time datetime="2026-11-30">2026-11-30</time></strong><small>Published end date</small></p></div>
</section>
</div>
<p class="fusion-availability"><strong>Model costs only.</strong> Not a discount on the subscription price.</p>
<div class="fusion-value-grid fusion-billing-notes">
<div class="fusion-feature"><span>01</span><div><strong>Normal billing</strong><p>Each model's standard rates, with no separate Fusion charge.</p></div></div>
<div class="fusion-feature"><span>02</span><div><strong>Effort affects cost</strong><p>High / Max can use more models and AI credits than Standard.</p></div></div>
</div>
<p class="fusion-source">Verified 2026-11-11. Check Docs before assuming any extension beyond the published end date.</p>
</div>

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
