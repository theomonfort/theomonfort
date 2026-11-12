---
title: Copilot Memory
titleEn: Copilot Memory
summary: Repository facts, personal preferences, and Copilot Dreaming.
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
  - group: 📖 Official documentation
    label: Copilot Memory
    url: https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory
  - group: 📖 Official documentation
    label: Creating memories
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories
  - group: 📖 Official documentation
    label: Copilot Dreaming
    url: https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming
  - group: 🛠️ Settings and management
    label: Personal Memory / Dreaming
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself
  - group: 🛠️ Settings and management
    label: Repository and organization controls / Dreaming results
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator
---

## In a nutshell <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="hero-quote">
  <p>
    <strong>Memory</strong> remembers repo facts and your preferences. <strong>Dreaming</strong> maintains them in the background.
  </p>
</div>

## Repository / Personal <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#types-of-memories" target="_blank" rel="noopener noreferrer">📖 Docs</a>

These are **Copilot Memory** scopes, not the app's **Project Memory** or local memory files.

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head"><strong>📦 Repository</strong><span class="setup-card-tag tag-cyan">Shared</span></div>
    <p>Architecture, conventions, commands.<br />Example: “Validate with <code>pnpm build</code>.”</p>
    <ul class="setup-card-paths">
      <li><strong>Scope:</strong> this repository only</li>
      <li><strong>Evidence:</strong> code citations</li>
    </ul>
  </div>
  <div class="setup-card">
    <div class="setup-card-head"><strong>👤 Personal</strong><span class="setup-card-tag tag-magenta">For you</span></div>
    <p>Stated, non-sensitive preferences.<br />Example: “Keep explanations brief.”</p>
    <ul class="setup-card-paths">
      <li><strong>Scope:</strong> only you, across repos</li>
      <li><strong>Evidence:</strong> your own statements</li>
    </ul>
  </div>
</div>

Business / Enterprise: personal memories stay **with their billing entity**; admins can view, export, and delete them.

**Code review / Agentic Autofix use repo facts only.**

## Remember → check → refine <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#how-memories-are-created" target="_blank" rel="noopener noreferrer">📖 Docs</a>

You can ask Copilot to “**remember this**.” It decides what to store.

| Step | What Copilot does |
| --- | --- |
| **① Store** | Select durable facts or preferences |
| **② Reuse** | Check relevant repo facts against the current branch |
| **③ Refine** | Upvote useful memories; downvote outdated or incorrect ones |

Default: **90 days**. **Upvotes reset expiry; reads do not.** Repo retention: 7–180 days by admins (as of 2026-11-11).

> ⚠️ Memory cannot guarantee compliance. Use **custom instructions** for consistent guidance.

## Copilot Dreaming (NEW) <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming#how-changes-are-applied" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Dreaming adds, updates, or deletes memories **automatically**.

| Scope | What it updates | How changes are applied |
| --- | --- | --- |
| **📦 Repo** | Repository memories | Proposes instruction and skill edits in a **PR** |
| **👤 Personal** | Personal memories | **Does not change** personal instruction or skill files |
| **🔍 Code review** | Internal guidance from merged PR feedback and current code | Updates guidance **without creating a PR** |

File edits need a **merged PR**. No-change runs still **use AI credits**.

## Memory ≠ Dreaming <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head"><strong>🧠 Memory</strong><span class="setup-card-tag tag-cyan">During everyday work</span></div>
    <p>Save facts and preferences from conversations and code.<br />Reuse them in later tasks.<br /><strong>Works with Dreaming OFF.</strong></p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head"><strong>🌙 Dreaming</strong><span class="setup-card-tag tag-magenta">In the background</span></div>
    <p>Analyze eligible sessions and PR feedback.<br />Refine duplicate or outdated context.</p>
  </div>
</div>

No need to leave a chat open. It updates **context**, not the underlying model.

## Configure each scope separately <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming#availability-and-prerequisites" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Memory: paid plans. Dreaming: **public preview** on eligible plans, separately enabled and **OFF** by default (as of 2026-11-11).

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">👤</span><span class="ctl-name">Personal</span><span class="ctl-when">Your memories only</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Settings</span><span class="ctl-v"><strong>GitHub.com → Settings → Copilot → Features:</strong> Memory and Dreaming. Managed plans also need policy permission.</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Turning off personal Dreaming does not stop organization repo runs.</span></p>
</div>
</details>
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">Repository</span><span class="ctl-when">Repo knowledge and guidance</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Organization</span><span class="ctl-v"><strong>Settings → Copilot → Policies:</strong> Repository access and Dreaming. Enterprise restrictions apply.</span></p>
<p class="ctl-row"><span class="ctl-k">Personal repo</span><span class="ctl-v">Eligible individual-only subscription: <strong>Repo → Settings → Copilot → Memory / Dreaming</strong>. Separate from personal memories.</span></p>
</div>
</details>
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔑</span><span class="ctl-name">Dreaming eligibility</span><span class="ctl-when">Public preview</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Required</span><span class="ctl-v">Eligible paid plan (<strong>not Pro</strong>), GPT-6.1 Sol allowed, Memory and Dreaming enabled for the scope. No GHEC with data residency.</span></p>
<p class="ctl-row"><span class="ctl-k">Activation</span><span class="ctl-v">If prerequisites are completed later, turn that scope's Dreaming OFF, then ON again.</span></p>
</div>
</details>
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">☁️</span><span class="ctl-name">Session sync</span><span class="ctl-when">Depends on capability</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Repo / Personal</span><span class="ctl-v">Sync required. Managed CLI policy <strong>Store local sessions in the Cloud</strong> must allow at least <strong>View from cloud</strong>.</span></p>
<p class="ctl-row"><span class="ctl-k">Code review</span><span class="ctl-v">No sync required. Enable code review and its preview features.</span></p>
</div>
</details>
</div>
</div>
