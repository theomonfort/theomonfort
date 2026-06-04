---
title: License Management
titleEn: License Management
summary: How GitHub Copilot is billed at the Enterprise level, assigned at the Org level, and how policies / billing behave when a user belongs to multiple organizations — including outside collaborators and EMU guest collaborators.
icon: /theomonfort/icons/pb-license-management.png
color: magenta
order: 30
category: administration
related: ['github-copilot', 'copilot-metrics']
links:
  - label: Docs — GitHub Copilot plans
    url: https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot
  - label: Docs — Policy conflicts (multi-org precedence)
    url: https://docs.github.com/en/copilot/reference/policy-conflicts
  - label: Docs — Adding outside collaborators
    url: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization
  - label: Docs — Enabling guest collaborators (EMU)
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators
  - group: 📰 Recent Changelog
    label: "Managing Copilot Business in enterprise is now GA (2025-10-28)"
    url: https://github.blog/changelog/2025-10-28-managing-copilot-business-in-enterprise-is-now-generally-available/
---

## In a nutshell

<div class="hero-quote hero-quote-team">
  <p>
    GitHub Copilot is <strong>billed at the Enterprise level</strong> and <strong>assigned at the Organization level</strong>.
  </p>
  <p>
    One <strong>enterprise</strong> = one invoice. Each <strong>org</strong> picks <strong>Business or Enterprise</strong>, and members of that org get a seat of that tier.
  </p>
</div>

## Billing at the Enterprise level

- 💳 **The Enterprise account is the billing entity** — a single invoice aggregates seats across all organizations in the enterprise.
- 📈 Seats are counted **per active user, per month**, regardless of how many orgs the user belongs to (see *Multi-org & one bill* below).
- 🧾 **Two plans** for organizations: **Copilot Business** and **Copilot Enterprise**. Enterprise adds Chat in GitHub.com with repo-indexed knowledge, fine-tuned models, and audit logs on top of Business.
- 🏢 **Standalone organizations** (no enterprise) are billed directly to the org and can only use **Business**.

> 📘 Plan comparison: <a href="https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot" target="_blank" rel="noopener noreferrer" class="retro-link">GitHub Copilot plans</a>

## License assignment at the Org level

- 🏷️ **An org has exactly one Copilot plan** — Business **or** Enterprise. You can't mix tiers inside the same organization.
- 👥 **Members of that org** are eligible for a seat of that tier. Owners assign seats from **Org Settings → Copilot → Access**.
- 🆕 **Enterprise-level assignment (Business only, GA 2025‑10‑28)** — admins can now assign **Copilot Business** seats directly from the Enterprise settings. The license then **follows the user across every org in the enterprise**.
- 🚫 **Copilot Enterprise seats are still assigned at the org level** — the enterprise-level shortcut is Business only.

| Where you assign | Plan available | Who gets the seat |
| --- | --- | --- |
| **Org → Copilot → Access** | Business **or** Enterprise (matches the org's plan) | Members of that org |
| **Enterprise → Copilot → Access** | **Business only** | The user, across every org in the enterprise |

> 📰 Changelog: <a href="https://github.blog/changelog/2025-10-28-managing-copilot-business-in-enterprise-is-now-generally-available/" target="_blank" rel="noopener noreferrer" class="retro-link">Managing Copilot Business in enterprise is now GA</a>

## Multi-org policy & one bill

When the same user belongs to **multiple orgs in the same enterprise**, two things matter:

- 💰 **Only one license is billed** for that user per cycle, even if several orgs assigned them a seat.
- ⚖️ **Policies can conflict** (e.g. one org disables Copilot Chat in the IDE, another enables it). GitHub resolves conflicts with a documented precedence:
  - **Least restrictive wins** for most features (Chat in IDE, agent mode, code review, cloud agent, web search…). If **any** org enables it, the user gets it everywhere.
  - **Most restrictive wins** for sensitive features — notably the **Copilot Metrics API** and **suggestions matching public code**. If **any** org disables it, the user is blocked everywhere.

> 📘 Full precedence matrix: <a href="https://docs.github.com/en/copilot/reference/policy-conflicts" target="_blank" rel="noopener noreferrer" class="retro-link">Feature availability when GitHub Copilot policies conflict</a>

## Outside & guest collaborators

You can extend Copilot to people who aren't members of your org — useful for vendors, contractors, and short-term partners.

### Standard orgs — Outside collaborators

- 🔐 **Enable at the org level first** — *Org Settings → Copilot → Access → Allow outside collaborators*.
- 📦 **Invite per repository** — outside collaborators don't see the rest of the org; they only get the repos you grant them.
- 💵 **Each seated outside collaborator counts as 1 license** on the enterprise invoice.

### EMU enterprises — Guest collaborators

- 🪪 In **Enterprise Managed Users (EMU)**, the equivalent role is **Guest collaborator** — provisioned by your IdP (Entra ID / Okta) just like regular EMU accounts.
- 🚧 Guest collaborators **cannot access internal repositories** by default; they only see the repos / orgs they are explicitly added to.
- 💵 A Guest collaborator with a Copilot seat is also billed as **1 license**.

> 📘 Setup guides: <a href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization" target="_blank" rel="noopener noreferrer" class="retro-link">Adding outside collaborators</a> · <a href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators" target="_blank" rel="noopener noreferrer" class="retro-link">Enabling guest collaborators (EMU)</a>
