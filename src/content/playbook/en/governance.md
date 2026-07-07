---
title: Governance
titleEn: Governance
summary: The layer that controls "who can do what" at the Enterprise and Organization level. Covers per-repository permission roles, the repo → org → enterprise policy hierarchy, and enterprise-managed settings (managed-settings.json) that centrally govern Copilot agents and clients.
icon: ⚖️
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 30.8
category: administration
related: ['enterprise-setup', 'license-management', 'custom-agent', 'harness-engineering']
links:
  - group: 📖 Official docs
    label: Repository roles
    url: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization
  - group: 📖 Official docs
    label: Organization policies
    url: https://docs.github.com/en/organizations/managing-organization-settings
  - group: 📖 Official docs
    label: Enterprise policies
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies
  - group: 📖 Official docs
    label: Configuring enterprise managed settings
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings
  - group: 📖 Official docs
    label: About Copilot auto model selection
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/auto-model-selection
  - group: 📰 Announcement
    label: "Enterprises can default to auto model selection (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection/
---


## In one line

<div class="hero-quote">
  <p>
    Governance is about controlling <strong>"who can do what"</strong> in layers.
  </p>
  <p>
    Cover repository <strong>permission roles</strong>, the repo → org → enterprise <strong>policy</strong> hierarchy, and <strong>managed settings</strong> that centrally govern Copilot.
  </p>
</div>

## Permissions

Assign roles per repository to control who can do what.

| Role | Main rights |
| --- | --- |
| 👀 Read | View, clone |
| 🔺 Triage | Manage Issues/PRs |
| ✍️ Write | Push, merge |
| 🛠️ Maintain | Some settings |
| 👑 Admin | Full control |

> 💡 Grant roles to teams and swap members in/out for easy upkeep. <a class="retro-link" href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization" target="_blank" rel="noopener noreferrer">Repository roles ↗</a>

## Policies

Apply governance across the repo → org → enterprise hierarchy; the higher the level, the wider the reach.

- 🗂️ **Repo**: branch protection, required reviews
- 🏢 **Org**: creation limits, visibility, mandatory 2FA
- 🏛️ **Enterprise**: rules across all orgs
- 🔁 Higher settings inherit down

> 🎯 Don't tweak repos one by one. Top-down policy is the winning ops play. <a class="retro-link" href="https://docs.github.com/en/organizations/managing-organization-settings" target="_blank" rel="noopener noreferrer">Organization policies ↗</a> · <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies" target="_blank" rel="noopener noreferrer">Enterprise policies ↗</a>

## Copilot managed settings (NEW)

How an enterprise **centrally controls** Copilot clients (CLI / VS Code). A `copilot/managed-settings.json` file in the source organization's `.github-private` repository is distributed automatically to every user on the enterprise's Copilot plan.

**What you can enforce:**

- 🧠 **Default model** — start new conversations with a chosen default (e.g. Auto model selection); users can still switch per-conversation
- 🚫 **Block bypass mode** — turn off YOLO / auto-approve so a human reviews each agent action
- 🏪 **Plugin marketplaces** — add extra marketplaces, or restrict users to only enterprise-approved ones
- 🧩 **Default plugins** — auto-install a set of plugins for everyone

> ⚙️ Resolution: there is **one source organization per enterprise** (set under AI controls › Agents). Whichever org grants your license, you get this single source's settings. managed-settings **overrides users' own client config** and clients pull it **once per hour**. <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings" target="_blank" rel="noopener noreferrer">Configuring enterprise managed settings ↗</a>

## ★ Where it fits

Governance is about controlling "who does what" **in layers**.

| Layer | Scope | Examples |
| --- | --- | --- |
| 👤 Permission roles | Repository | Read / Write / Admin |
| 🏢 Policies | repo → org → enterprise | Mandatory 2FA, visibility, branch protection |
| 🤖 Managed settings | Copilot clients | Default model, bypass lock, plugins |

> 🎯 Don't wear yourself out per-repo. Enforcing top-down is the winning play.
