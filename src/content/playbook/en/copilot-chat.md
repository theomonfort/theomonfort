---
title: Copilot in VS Code
titleEn: Copilot in VS Code
summary: Work with Copilot in VS Code through the Chat view and Agents window, with a shared harness and sessions connected to other Copilot surfaces.
icon: /theomonfort/icons/copilot-chat.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 3.5
category: develop
related: ['mcp', 'instructions', 'cli', 'cloud-agent', 'partner-agent', 'copilot-app']
links:
  - group: 📖 Official documentation
    label: GitHub Copilot on GitHub.com and GitHub Mobile
    url: https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github
  - group: 📖 Official documentation
    label: VS Code Chat view and CLI sessions
    url: https://code.visualstudio.com/docs/agents/run/chat-view
  - group: 📖 Official documentation
    label: Move from the Local to the Copilot harness
    url: https://code.visualstudio.com/docs/agents/run/move-to-copilot
  - group: 📖 Official documentation
    label: Chat controls and shortcuts
    url: https://code.visualstudio.com/docs/chat/chat-overview
  - group: 📖 Official documentation
    label: Choose an agent harness
    url: https://code.visualstudio.com/docs/agents/run/agent-harnesses
  - group: 📰 Recent Changelog
    label: "Connected Copilot cloud experience (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/
  - group: 📰 Recent Changelog
    label: "VS Code: Copilot harness by default (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/
  - group: 🤖 Models
    label: Supported AI models in GitHub Copilot
    url: https://docs.github.com/copilot/reference/ai-models/supported-models
  - group: 🤖 Models
    label: GitHub Copilot Fusion
    url: https://docs.github.com/en/copilot/concepts/models/copilot-fusion
---

## In a nutshell

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>GitHub Copilot</strong> is available in <strong>VS Code</strong>, on <strong>GitHub.com</strong>, in <strong>GitHub Mobile</strong>, through <strong>Copilot CLI</strong>, and in the <strong>GitHub Copilot app</strong>.
  </p>
  <p>
    Here we focus on <strong>VS Code</strong>: the <strong>Chat view</strong> beside your code and the <strong>Agents window</strong> across projects.
  </p>
</div>

## Copilot across interfaces <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Copilot in the cloud** connects the same cloud sandbox session across these surfaces (since **2026-10-28**). <a class="retro-link" href="https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/" target="_blank" rel="noopener noreferrer">Changelog ↗</a>

<table class="compact-table">
<thead><tr><th>Surface</th><th>Entry point</th></tr></thead>
<tbody>
<tr><td><strong>VS Code</strong></td><td><strong>Chat view</strong> / <strong>Agents window</strong></td></tr>
<tr><td><strong>GitHub.com</strong></td><td><strong>Copilot</strong> / repository <strong>Agents</strong> tab</td></tr>
<tr><td><strong>GitHub Mobile</strong></td><td><strong>Copilot</strong> tab</td></tr>
<tr><td><strong>Copilot CLI</strong></td><td><code>copilot</code> in your terminal</td></tr>
<tr><td><strong>GitHub Copilot app</strong></td><td>Desktop app for parallel agent tasks</td></tr>
</tbody>
</table>

**Paid plans** and policies apply; local remote access needs an online host.

## Copilot: the default harness <a class="h2-doc" href="https://code.visualstudio.com/docs/agents/run/move-to-copilot" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Since **2026-10-28**: **Copilot** is the default, sharing the CLI / app runtime. **Local** is the legacy editor harness.

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">Sandbox &amp; assisted permissions</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agents/run/move-to-copilot#_why-move-to-the-copilot-harness" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">Run safely</span><span class="ctl-v">Build / test within configured file and network boundaries. Assisted permissions approve routine calls; others need confirmation.</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤖</span><span class="ctl-name">Copilot Fusion</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agent-customization/language-models#_use-copilot-fusion" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">Models</span><span class="ctl-v">Let Copilot choose models and coordinate drafting and review.</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔄</span><span class="ctl-name">Agents window &amp; cloud sessions</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agents/run/move-to-copilot#_continue-between-interfaces" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">Continue</span><span class="ctl-v">Manage projects in Agents window; continue in the editor. Cloud sandboxes keep working with your laptop closed.</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔌</span><span class="ctl-name">Copilot connectors</span><span class="ctl-when">Preview</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agent-customization/copilot-connectors" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">Context</span><span class="ctl-v">Connect team services without configuring MCP servers yourself.</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🎨</span><span class="ctl-name">Canvases</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agents/run/canvases" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">Interact</span><span class="ctl-v">Use task boards and interactive diagrams together. Enable <code>chat.canvases.enabled</code> before starting a session.</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🏢</span><span class="ctl-name">Organization governance</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/enterprise/manage-ai-settings" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">Enforce</span><span class="ctl-v">Runtime file, network, and permission restrictions. Model / effort defaults; approved skills, tools, and hooks via managed plugins.</span></p></div>
</details>
</div>
</div>

## VS Code shortcuts <a class="h2-doc" href="https://code.visualstudio.com/docs/chat/chat-overview" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Open Chat: **Mac `⌃⌘I`** / **Windows & Linux `Ctrl+Alt+I`** (as of **2026-11-06**).

| Shortcut / control | What you can do |
| --- | --- |
| **`/`**, e.g. **`/plan`** | Try these too! `/chronicle` `/env` `/compact` `/rename` `/vscode-pet` `/yolo` `/create-canvas` |
| **`#`** / **Add Context (+)** | Attach files, symbols, images, issues, or PRs |
| <img src="/theomonfort/icons/vscode-extensions.svg" alt="" width="24" height="24" style="display:inline-block;width:1em;height:1em;vertical-align:-0.15em" title="Extensions icon by Microsoft (Codicons), CC BY 4.0" /> **Chat: Open Customizations** | Manage skills, agents, instructions, hooks, MCP, and plugins |

In the Copilot harness, **`@` chat participants are deprecated and unsupported**. Ask directly and attach context.

## Other sessions from VS Code <a class="h2-doc" href="https://code.visualstudio.com/docs/agents/run/agent-harnesses" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| Session | How to start |
| --- | --- |
| <a class="retro-link" href="/theomonfort/en/playbook/cli/">Copilot CLI ↗</a> | **Chat: New Copilot CLI Session**, or `copilot` in the terminal |
| **Claude / Codex**<br/><a class="retro-link" href="/theomonfort/en/playbook/partner-agent/">Partner agents ↗</a> | **Session Target** → available partner harness; setup and policies apply |
| **Cloud**<br/><a class="retro-link" href="/theomonfort/en/playbook/cloud-agent/">Cloud Agent ↗</a> | **Session Target → Cloud**: managed sandbox, reconnect later. <a class="retro-link" href="https://code.visualstudio.com/docs/agents/run/cloud-sandbox-sessions" target="_blank" rel="noopener noreferrer">Docs ↗</a> |

**Model ≠ harness ≠ execution location**. A Claude model does not switch the Copilot harness; **Cloud** selects where it runs.

## Choosing models <a class="h2-doc" href="https://code.visualstudio.com/docs/agent-customization/language-models" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Recommended: Copilot Fusion.** It picks models and coordinates their work. Options vary by plan, harness, and policy. <a class="retro-link" href="https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/" target="_blank" rel="noopener noreferrer">Blog ↗</a> / <a class="retro-link" href="https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/" target="_blank" rel="noopener noreferrer">Universe 2026 ↗</a>

| Option | Examples / setup |
| --- | --- |
| **Model families** | **GPT / Codex**, **Claude**, **Gemini**, **MAI** |
| **BYOK** | Bring Your Own Key: connect your provider. <a class="retro-link" href="https://code.visualstudio.com/docs/agent-customization/language-models#_bring-your-own-language-model-key" target="_blank" rel="noopener noreferrer">Setup ↗</a> |
| **Local models** | Copilot <a class="retro-link" href="https://code.visualstudio.com/docs/agent-customization/language-models#_use-on-device-models" target="_blank" rel="noopener noreferrer">on-device models ↗</a> on supported hardware, or **Ollama via BYOK** |
