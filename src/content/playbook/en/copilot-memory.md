---
title: Copilot Memory
titleEn: Copilot Memory
summary: A mechanism for Copilot to remember and reuse knowledge learned while working in a repository, passing it on to future selves and the whole team. Gets smarter the more you use it.
icon: /theomonfort/icons/copilot-memory.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 19
category: operate
related: ['cloud-agent', 'copilot-code-review', 'cli', 'instructions']
links:
  - label: Blog — Building an agentic memory system
    url: https://github.blog/ai-and-ml/github-copilot/building-an-agentic-memory-system-for-github-copilot/
  - label: Docs — Copilot Memory
    url: https://docs.github.com/en/copilot/concepts/agents/copilot-memory
  - group: 📰 Recent Changelog
    label: "User preferences for Pro / Pro+ (2026-05-15)"
    url: https://github.blog/changelog/2026-05-15-copilot-memory-supports-user-preferences-for-pro-pro-users
  - group: 📰 Recent Changelog
    label: "On by default for Pro / Pro+ (public preview) (2026-03-04)"
    url: https://github.blog/changelog/2026-03-04-copilot-memory-now-on-by-default-for-pro-and-pro-users-in-public-preview
---

## In a nutshell

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Copilot Memory</strong> is a mechanism for <strong>Code Review / Cloud Agent / CLI</strong> to <strong>remember and reuse</strong> knowledge learned in a repository.
  </p>
  <p>
    No more repeating the same preamble every time — <strong>the more you use it, the smarter Copilot becomes</strong>.
  </p>
</div>

## Scope and mechanics

### Scope

- 📦 **Per repository** — memories tied to a repo, **shared across users** who have access
- 👤 **Per user** (Pro / Pro+, early access) — personal preferences that follow **you** across all repos and Copilot agents, **without affecting others**. Examples: preferred commit style, PR structure, tone. Manage them in your <a href="https://github.com/settings/copilot/memory" target="_blank" rel="noopener noreferrer">personal Copilot Memory settings ↗</a>
- 🔀 **Cross-feature** — knowledge learned by Cloud Agent is available to Code Review, CLI, and vice versa

### How it works

- 🔍 Each memory carries **code citations** that are **verified against the current codebase** when the memory is used
- ⏳ **Auto-deleted after 28 days** — refreshed and extended whenever the memory is used

### Why it matters

No more repeating the same explanation in every prompt — **the more you use it, the deeper Copilot's understanding of the repository grows**.

## Where to configure it

| Scope | Settings path | What you can do |
| --- | --- | --- |
| **Repository** | Repo → **Settings** → *Code and automation* → **Copilot** → **Memory** | **View the list** of saved memories and **delete individual entries** |
| **Organization** | Org → **Settings** → *Code, planning, and automation* → **Copilot** → **Policies** → *Copilot Memory* | **Enable / Disable** for the entire org |
| **Enterprise** | Enterprise → **AI controls** → **Copilot** → *Copilot Memory* | **Enabled / Disabled / Let orgs decide** for all orgs |

> 📘 Official guide: [Managing and curating Copilot Memory](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory)
