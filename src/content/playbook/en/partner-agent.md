---
title: Partner agents
titleEn: Partner agents
summary: A mechanism to launch coding agents other than Copilot — such as Claude or Codex — from VS Code and GitHub with the same feel as Copilot.
icon: /theomonfort/icons/partner-agent.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 15.5
category: develop
related: ['cloud-agent', 'copilot-chat', 'github-copilot']
links:
  - group: GitHub Docs
    label: About Partner agents (third-party agents)
    url: https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents
  - group: GitHub Docs
    label: Anthropic Claude in GitHub Copilot
    url: https://docs.github.com/en/copilot/concepts/agents/anthropic-claude
  - group: GitHub Docs
    label: OpenAI Codex in GitHub Copilot
    url: https://docs.github.com/en/copilot/concepts/agents/openai-codex
  - group: Policies
    label: Manage policies (Personal / Pro+)
    url: https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-third-party-agents-in-your-repositories
  - group: Policies
    label: Manage policies (Organization)
    url: https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies
  - group: Policies
    label: Manage policies (Enterprise)
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies
  - group: VS Code Docs
    label: Partner agents
    url: https://code.visualstudio.com/docs/copilot/agents/third-party-agents
  - group: VS Code Docs
    label: Cloud agents
    url: https://code.visualstudio.com/docs/copilot/agents/cloud-agents
  - group: VS Code Docs
    label: Agent types (Local / Cloud / Partner)
    url: https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents
  - group: VS Code Docs
    label: Enterprise agent policy
    url: https://code.visualstudio.com/docs/enterprise/manage-ai-settings#_claude-and-codex-availability
  - group: OpenAI Codex
    label: OpenAI Codex VS Code extension
    url: https://marketplace.visualstudio.com/items?itemName=openai.chatgpt
  - group: OpenAI Codex
    label: OpenAI Codex official docs
    url: https://developers.openai.com/codex
  - group: Claude
    label: Claude Code — VS Code extension
    url: https://code.claude.com/docs/en/vs-code
  - group: Claude
    label: Claude Agent SDK
    url: https://code.claude.com/docs/en/agent-sdk/overview
  - group: 📰 Recent Changelog
    label: "GPT-5.3-Codex default, Business/Enterprise (2026-05-18)"
    url: https://github.blog/changelog/2026-05-17-gpt-5-3-codex-is-now-the-base-model-for-copilot-business-and-enterprise
  - group: 📰 Recent Changelog
    label: "JetBrains inline agent preview (2026-04-24)"
    url: https://github.blog/changelog/2026-04-24-inline-agent-mode-in-preview-and-more-in-github-copilot-for-jetbrains-ides
  - group: 📰 Recent Changelog
    label: "Cloud Claude/Codex model picker (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-model-selection-for-claude-and-codex-agents-on-github-com
  - group: 📰 Recent Changelog
    label: "Claude/Codex for Business & Pro (2026-02-26)"
    url: https://github.blog/changelog/2026-02-26-claude-and-codex-now-available-for-copilot-business-pro-users
---

## In a nutshell

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Partner agents</strong> is a mechanism to line up coding agents other than Copilot alongside Copilot's workflow.
  </p>
  <p>
    The primary examples are <strong>Anthropic Claude</strong> and <strong>OpenAI Codex</strong>. They can be launched from both VS Code and GitHub with the same feel as Copilot.
  </p>
</div>

## Enabling (Enterprise / Org / Personal) <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-partner-policy" class="demo-toggle" /><label class="h2-demo" for="demo-partner-policy">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-partner-policy" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Partner-agent policies</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-partner-policy" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">ENTERPRISE: OCTODEMO</p>
<p><a class="retro-link" href="https://github.com/enterprises/octodemo/ai-controls/copilot/features" target="_blank" rel="noopener noreferrer">Open Octodemo AI controls ↗</a>, then select <b>Agents</b> in the sidebar.</p>
<p>Inspect the Claude / Codex policies and which organizations may enable them. Enterprise-owner access is required.</p>
<p class="demo-out">The enterprise policy defines what organization owners can allow.</p>
</li>
<li>
<p class="demo-step-title">ORGANIZATION: THEOMONFORT-ORG</p>
<p><a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/copilot/coding_agent" target="_blank" rel="noopener noreferrer">Open theomonfort-org agent settings ↗</a>: <code class="demo-path">Settings → Copilot → Cloud → Partner agents</code>.</p>
<p>Inspect <b>Allow Claude coding agent</b> and <b>Allow Codex coding agent</b>. Organization-owner access is required.</p>
<p class="demo-out">Each partner is controlled separately, within enterprise policy.</p>
</li>
<li>
<p class="demo-step-title">PERSONAL ACCOUNT</p>
<p><a class="retro-link" href="https://github.com/settings/copilot/coding_agent" target="_blank" rel="noopener noreferrer">Open personal agent settings ↗</a>: <code class="demo-path">Settings → Copilot → Cloud agent → Partner agents</code>.</p>
<p class="demo-out">On a paid personal plan, the toggles apply to your own repositories where cloud agent is enabled.</p>
</li>
<li>
<p class="demo-step-title">COMPARE WITH VS CODE</p>
<p><b>Copilot</b> replaces the legacy <b>Local</b> harness, but can still run on your machine. Choosing a Claude model in Copilot does not switch to the Claude harness.</p>
<p>Claude / Codex harnesses have separate VS Code controls. <a class="retro-link" href="https://code.visualstudio.com/docs/enterprise/manage-ai-settings#_claude-and-codex-availability" target="_blank" rel="noopener noreferrer">Enterprise-managed settings disable these harnesses ↗</a>, even with separate provider credentials.</p>
</li>
</ol>
</div>
</div>

**GitHub-hosted partner agents are OFF by default.** Enable them at the relevant account level; organization settings cannot override enterprise policy.

| Level | Who configures | What happens |
| --- | --- | --- |
| **🏢 Enterprise** | Enterprise owner | Sets agent availability across **organizations** |
| **🏛️ Organization** | Org owner | **Individually enable/disable** Claude / Codex |
| **👤 Personal (paid plans)** | The user | Enable partners for **your own repos** |

> ⚠️ **Copilot is a harness, not a cloud location.** The policies above govern **GitHub-hosted agents**. VS Code's **Claude / Codex harnesses** have separate controls and are disabled when **Copilot enterprise-managed settings** apply.


## VS Code × OpenAI Codex

To use Codex from VS Code, install the **OpenAI Codex extension** and choose **"Sign in with Copilot"** at launch. Logging in via Copilot means no separate OpenAI account or billing is needed.

<div class="partner-setup-columns">
<div>

### Get started

- Install the **OpenAI Codex extension** from the VS Code Marketplace
- Launch the extension and click **"Sign in with Copilot"**
- Find your Codex session in the **Agent Sessions** view

</div>
<div>

### What to know

- **Extension required**, this is a dedicated VS Code integration
- **OpenAI models only**, availability follows the extension's model picker
- **Copilot billing**, all requests go through the Copilot API

</div>
</div>

## VS Code × Claude Code

In the VS Code Chat **harness picker**, select **`Claude`** instead of `Copilot`. **No extension installation required**: it's directly integrated into Copilot Chat.

<div class="partner-setup-columns">
<div>

### Get started

- Open the Chat view and click **New Chat**
- Select **`Claude`** from the **harness picker**
- Enter a prompt to run the **Claude Agent SDK** on your workspace

</div>
<div>

### What to know

- **Copilot billing**, all requests go through the Copilot API
- **Permission modes**, choose Edit automatically, Request approval, or Plan
- **Claude commands**, dedicated slash commands are available

</div>
</div>

## Cloud Agent × Codex / Claude SDK

Choose an **agent harness**, not a Copilot Chat mode. The **implementation changes**, not the GitHub workflow.

<div class="partner-setup-columns">
<div>

### Choose your harness

- **Copilot**, GitHub's default harness for Issue → PR automation
- **OpenAI Codex SDK**, Codex-focused harness for long coding tasks
- **Claude Agent SDK**, Anthropic's agentic loop for reasoning-heavy implementations

</div>
<div>

### What stays the same

- **Actions → PR**, the same execution and pull-request workflow
- **Same safety net**, CodeQL, code review, secret scanning and dependency checks
- **One Copilot subscription**, billing, rate limits and governance

</div>
</div>
