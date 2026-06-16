---
title: License Management
titleEn: License Management
summary: How GitHub Copilot is billed at the Enterprise level, assigned at the Org level, and how policies / billing behave when a user belongs to multiple organizations — including outside collaborators and EMU guest collaborators.
icon: /theomonfort/icons/license-crown.png
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

<div class="hero-quote hero-quote-admin">
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

## GitHub License & Service Procurement

<div style="font-size:0.85em;">

Overview of how GitHub services are licensed and billed.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem;">
<div style="flex:3;">

<table style="width:100%;border-collapse:collapse;font-size:0.9em;">
<thead>
<tr style="background:var(--entry-accent,#1f6feb);color:#fff;">
<th style="padding:6px 10px;text-align:left;width:120px;"></th>
<th colspan="2" style="padding:6px 10px;text-align:center;">Licenses for GitHub Enterprise usage</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;font-weight:bold;border:1px solid #444;">User<br/>License</td>
<td style="padding:8px 10px;border:1px solid #444;"><strong>Visual Studio with GitHub</strong><br/>・For users who need Visual Studio with MSDN</td>
<td style="padding:8px 10px;border:1px solid #444;"><strong>GitHub Enterprise</strong><br/>・Users who don't need VS with MSDN<br/>・Developers / Infra / DevOps / Designers<br/>・Project managers / Stakeholders</td>
</tr>
</tbody>
</table>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:0.5rem;">
<thead>
<tr style="background:var(--entry-accent,#1f6feb);color:#fff;">
<th style="padding:6px 10px;width:120px;"></th>
<th style="padding:6px 10px;text-align:center;">License for DevSecOps on GitHub</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;font-weight:bold;border:1px solid #444;">Committer<br/>License</td>
<td style="padding:8px 10px;border:1px solid #444;"><strong>GitHub Advanced Security</strong><br/>・Users who commit/merge code</td>
</tr>
</tbody>
</table>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:0.5rem;">
<thead>
<tr style="background:var(--entry-accent,#1f6feb);color:#fff;">
<th style="padding:6px 10px;width:120px;"></th>
<th colspan="5" style="padding:6px 10px;text-align:center;">Usage-based add-on services</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;font-weight:bold;border:1px solid #444;">Metered</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Copilot</strong><br/>AI-powered code<br/>suggestions</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Actions</strong><br/>CI/CD workflow<br/>automation</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Codespaces</strong><br/>Cloud dev<br/>environments</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Packages</strong><br/>Package<br/>registry</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>LFS</strong><br/>Large file<br/>storage</td>
</tr>
</tbody>
</table>

</div>

<div style="flex:1;text-align:center;">
<div style="font-weight:bold;margin-bottom:0.5rem;">Procurement</div>
<div style="display:flex;gap:4px;justify-content:center;align-items:flex-end;height:160px;">
<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
<span style="font-size:0.7em;font-weight:bold;">❶</span>
<div style="writing-mode:vertical-rl;background:#1f3d73;color:#fff;padding:8px 6px;border-radius:4px;height:140px;display:flex;align-items:center;justify-content:center;font-size:0.75em;font-weight:bold;">Subscription<br/>License</div>
</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
<span style="font-size:0.7em;font-weight:bold;">❷</span>
<div style="writing-mode:vertical-rl;background:#2a5298;color:#fff;padding:8px 6px;border-radius:4px;height:110px;display:flex;align-items:center;justify-content:center;font-size:0.75em;font-weight:bold;">Subscription<br/>+ Metered</div>
</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
<span style="font-size:0.7em;font-weight:bold;">❸</span>
<div style="writing-mode:vertical-rl;background:#3a6cc9;color:#fff;padding:8px 6px;border-radius:4px;height:80px;display:flex;align-items:center;justify-content:center;font-size:0.75em;font-weight:bold;">Metered<br/>Only</div>
</div>
</div>
</div>

</div>
</div>
