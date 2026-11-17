---
title: Codespaces
titleEn: Codespaces
summary: Customizable remote development environments hosted in the cloud. The ideal AI-driven development playground for safely sandboxing AI experiments and work.
icon: /theomonfort/github-vscode-mark.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
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
    <strong>Codespaces</strong> is a <strong>ready-to-use, configurable VS Code development environment</strong> hosted in the cloud by GitHub.
  </p>
  <p>
    Open a browser and a <strong>full development environment</strong> spins up in seconds. Ideal for giving <strong>everyone the exact same environment</strong> on repos with many collaborators, or as a <strong>sandbox</strong> to try AI safely.
  </p>
</div>

## Features <a class="h2-doc" href="https://docs.github.com/en/codespaces/about-codespaces/deep-dive" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Connect your way. Your code and tools run in the **same cloud workspace**.

<figure class="codespaces-workspace" aria-label="Three ways to connect to your codespace">
<div class="codespaces-diagram">
<ul class="codespaces-access" aria-label="Connect via">
<li>
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="18" rx="1"/><path d="M2 8H22M6 5.5H6.1M9 5.5H9.1"/></svg>
<div><strong>Browser</strong><span>Open on github.com</span></div>
</li>
<li>
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21H16M12 17V21M9 8L6 10L9 12M15 8L18 10L15 12"/></svg>
<div><strong>VS Code Desktop</strong><span>Connect remotely</span></div>
</li>
<li>
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="18" rx="1"/><path d="M6 8L10 12L6 16M13 16H18"/></svg>
<div><strong>GitHub CLI</strong><code>gh codespace ssh</code></div>
</li>
</ul>
<svg class="codespaces-connectors" viewBox="0 0 80 292" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<defs><marker id="codespaces-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0L10 5L0 10Z"/></marker></defs>
<path class="codespaces-branches" d="M0 42H32V250H0M0 146H78" marker-end="url(#codespaces-arrow)"/>
</svg>
<span class="codespaces-stacked-arrow" aria-hidden="true">↓</span>
<div class="codespaces-container">
<div class="codespaces-container-head"><h3>Your codespace</h3><span>Docker dev container</span></div>
<div class="codespaces-config"><code>devcontainer.json</code><p>Base image + features + post-create scripts</p></div>
<p class="codespaces-tools"><strong>Preconfigure:</strong> Copilot / MCP servers / extensions / linters</p>
<p class="codespaces-repeatable">Same configuration for every collaborator.</p>
</div>
</div>
<figcaption class="codespaces-compute">
<p><span>Scale up to</span><strong>32 <span>cores</span></strong><strong>128 <span>GB RAM</span></strong><strong>128 <span>GB storage</span></strong></p>
<p>Resize after startup for heavy builds and parallel agents. <span>Subject to availability and policy, as of 2026-11-16.</span></p>
</figcaption>
</figure>

## Benefits

- 🚀 **Zero setup time** — Just press "Open in Codespaces"
- 👥 **Same environment for everyone** — "It works on my machine" disappears
- 🌍 **Access from anywhere** — All you need is a browser
- 💪 **Works on low-spec machines** — Even an old PC at hand can use **up to 32 cores / 128 GB RAM** on the cloud side
- 🛡️ **Safely isolate AI** — If something breaks, throw it away and start fresh
- 🤖 **AI tools pre-installed** — Pre-equipped with Copilot CLI, MCP servers, and Skills
