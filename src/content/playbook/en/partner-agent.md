---
title: Partner agents
titleEn: Partner agents
summary: A mechanism to launch coding agents other than Copilot — such as Claude or Codex — from VS Code and GitHub with the same feel as Copilot.
icon: /theomonfort/icons/partner-agent.png
color: magenta
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
    label: Partner agents in Visual Studio Code
    url: https://code.visualstudio.com/docs/copilot/agents/third-party-agents
  - group: VS Code Docs
    label: Cloud agents in Visual Studio Code
    url: https://code.visualstudio.com/docs/copilot/agents/cloud-agents
  - group: VS Code Docs
    label: VS Code agent types (Local / Cloud / Partner)
    url: https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents
  - group: VS Code Docs
    label: Enterprise — enable/disable agents in VS Code
    url: https://code.visualstudio.com/docs/enterprise/ai-settings#_enable-or-disable-the-use-of-agents
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
    label: "GPT-5.3-Codex is now the base model for Business/Enterprise (2026-05-18)"
    url: https://github.blog/changelog/2026-05-17-gpt-5-3-codex-is-now-the-base-model-for-copilot-business-and-enterprise
  - group: 📰 Recent Changelog
    label: "JetBrains inline agent mode (preview) (2026-04-24)"
    url: https://github.blog/changelog/2026-04-24-inline-agent-mode-in-preview-and-more-in-github-copilot-for-jetbrains-ides
  - group: 📰 Recent Changelog
    label: "Model selection for Claude and Codex agents on github.com (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-model-selection-for-claude-and-codex-agents-on-github-com
  - group: 📰 Recent Changelog
    label: "Claude and Codex now available for Business & Pro (2026-02-26)"
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

> The important thing is that this is **not a mode of Copilot Chat**. This is about **which provider / harness to hand a task to**. Billing, rate limits, and governance are all **consolidated on the Copilot subscription side**.

## Enabling (Enterprise / Org / Personal)

Partner agents are **OFF by default**. Before using them, an admin at the appropriate contract level must permit them via **policy**. Controlled through a **3-tier governance hierarchy**.

| Level | Who configures | Where | What happens |
| --- | --- | --- | --- |
| **🏢 Enterprise** | Enterprise owner | Enterprise → Policies → Copilot | Sets an upper bound for **all orgs** underneath (Allow / Block / No policy) |
| **🏛️ Organization** | Org owner | Organization → Settings → Copilot → Coding agent | **Individually enable/disable** Claude / Codex for org members |
| **👤 Personal (Pro / Pro+)** | The user | [Settings → Copilot → Cloud agent → Partner agents](https://github.com/settings/copilot/coding_agent) | Enable via **toggle** for your own repos |

> ⚠️ VS Code **local agents** (Claude / Codex sessions running within chat) are **outside the scope of this policy**. Local control is handled through VS Code settings (e.g., `github.copilot.chat.claudeAgent.enabled`).


## VS Code × OpenAI Codex

To use Codex from VS Code, install the **OpenAI Codex extension** and choose **"Sign in with Copilot"** at launch. Logging in via Copilot means no separate OpenAI account or billing is needed.

**Steps**

1. Install the **OpenAI Codex extension** from the VS Code Marketplace
2. Launch the extension and click **"Sign in with Copilot"**
3. A Codex session appears in the Agent Sessions view


**Key points**

- 🧩 **Extension installation required** (OpenAI Codex extension from the Marketplace)
- 🤖 Available models are **OpenAI series only**: `Auto` / `GPT-5.2-Codex` / `GPT-5.3-Codex` / `GPT-5.4` / `GPT-5.4 nano`
- 🌐 All requests go **via the Copilot API** — GitHub billing applies


## VS Code × Claude Code

In the VS Code Chat **Session Type picker**, just select **`Claude`** instead of `Local`. **No extension installation required** — it's directly integrated into Copilot Chat.

**Steps**

1. Open the Chat view and click **New Chat (`+`)**
2. Select **`Claude`** from the **Session Type dropdown**
3. Enter a prompt → Claude Agent SDK runs directly on the workspace

**Key points**

- 🧩 **No extension needed** — Natively integrated into Copilot Chat (unlike Codex, nothing to install from the Marketplace)
- 🤖 Available models: `Auto` / `Claude Opus 4.5` / `Claude Opus 4.6` / `Claude Opus 4.7` / `Claude Sonnet 4.5` / `Claude Sonnet 4.6`
- 🌐 All requests go **via the Copilot API** — GitHub billing applies
- 🛡️ **Permission mode** is selectable: Edit automatically / Request approval / Plan
- ⚙️ Claude-specific slash commands are available


## Cloud Agent × Codex / Claude SDK

When delegating a task to GitHub's **Cloud Agent**, you can choose **Copilot / OpenAI Codex SDK / Claude Agent SDK** as the harness. The Cloud Agent framework (runs on GitHub Actions, returns a PR) stays the same — only **the underlying agent implementation is swapped out**.

**Choosing the right option**

| Harness | Strengths | Best for |
| --- | --- | --- |
| **Copilot** | Standard harness optimized for GitHub | Default choice, Issue → PR automation |
| **OpenAI Codex SDK** | Optimized for the Codex model family | Long coding-focused tasks |
| **Claude Agent SDK** | Anthropic's agentic loop | Implementations requiring extensive reasoning |

**Shared benefits**

- ☁️ Execution environment is the same as Cloud Agent (GitHub Actions runner)
- 🔐 Security and validation tools (CodeQL / Code Review / Secret Scanning / Dependency checks) **apply the same safety net**
- 💰 Billing is **consolidated on the Copilot side**
