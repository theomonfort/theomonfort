---
title: Copilot Licence
titleEn: Copilot Licence
summary: How GitHub Copilot is billed at the Enterprise level, assigned at the Enterprise or Org level, and how policies / billing behave when a user belongs to multiple organizations — including outside collaborators and EMU guest collaborators.
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
    GitHub Copilot is <strong>billed at the Enterprise level</strong> and <strong>assigned at the Enterprise or Organization level</strong>.
  </p>
  <p>
    One <strong>enterprise</strong> = one invoice. Seats can be <strong>centrally assigned at the enterprise</strong> or assigned by each <strong>org</strong> after it picks <strong>Business or Enterprise</strong>.
  </p>
</div>

## GitHub License & Service Procurement

<div style="font-size:0.56em;line-height:1.25;--proc-row:8.45rem;--proc-gap:0.6rem;--proc-label:5.4rem;--proc-navy:#ff2e88;--proc-gray:#9bbc0f;--proc-blue:#00f0ff;--proc-copilot:#ffb000;--proc-panel:rgba(10,14,39,0.86);--proc-card:rgba(5,6,15,0.92);--proc-card-border:rgba(0,240,255,0.46);--proc-copilot-border:rgba(255,176,0,0.85);--proc-head:#ff2e88;--proc-accent:#00f0ff;--proc-dark:#05060f;--proc-ink:#e8f4ff;">

Overview of how GitHub services are licensed and billed.

<div style="display:grid;grid-template-columns:minmax(0,1fr) 16.5rem;gap:1.05rem;align-items:start;margin-top:0.9rem;max-width:72rem;">
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;border-bottom:0.6rem solid rgba(5,6,15,0.95);">User<br/>License</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.3rem 0.7rem 0.55rem;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.38rem;">Licenses for GitHub Enterprise usage</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">Visual Studio subscriptions</div>
<div style="padding:0.45rem 0.55rem;font-weight:600;">・For users who need a Visual Studio subscription</div>
</div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">GitHub Enterprise</div>
<div style="padding:0.45rem 0.55rem;font-weight:600;">・Users who do not need a Visual Studio subscription<br/>・Developers / Infra / DevOps / Designers<br/>・Project managers / Stakeholders</div>
</div>
</div>
</div>
</div>
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;border-top:0.6rem solid rgba(5,6,15,0.95);">Committer<br/>License</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.3rem 0.7rem 0.55rem;display:grid;grid-template-rows:auto 1fr;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.55rem;">License for DevSecOps on GitHub</div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">GitHub Advanced Security</div>
<div style="padding:0.62rem 0.7rem;font-weight:600;">・Users who commit or merge code</div>
</div>
</div>
</div>
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;">Metered<br/>Billing</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.35rem 0.55rem 0.55rem;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.45rem;">Usage-based add-on services</div>
<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0.45rem;">
<div style="background:var(--proc-card);border:2px solid var(--proc-copilot-border);height:100%;display:grid;grid-template-rows:auto 1fr;box-shadow:0 0 12px rgba(255,176,0,0.28);"><div style="background:var(--proc-copilot);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.18rem 0.25rem;font-size:1.03em;">Copilot<br/>Business/Enterprise</div><div style="padding:0.45rem 0.35rem;font-weight:700;color:var(--proc-copilot);">・AI-powered code suggestion service</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Actions</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・CI/CD<br/>・Workflow automation</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Codespaces</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・Cloud development machines</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Packages</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・Package management</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">LFS</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・Currently free during migration</div></div>
</div>
</div>
</div>
</div>
<div style="position:relative;">
<div style="position:absolute;top:-3.12rem;left:0;right:0;">
<div style="background:var(--proc-navy);color:var(--proc-dark);text-align:center;font-weight:700;font-size:1.15em;padding:0.28rem 0.4rem;">Procurement methods</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.65rem;align-items:center;margin-top:0.14rem;">
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">1</div>
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">2</div>
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">3</div>
</div>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.65rem;align-items:stretch;">
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Subscription<br/>license</div>
<div style="grid-row:2;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Subscription<br/>license</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Metered<br/>billing model</div>
</div>
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Subscription<br/>license</div>
<div style="grid-row:2;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Metered<br/>billing model</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Metered<br/>billing model</div>
</div>
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Metered<br/>billing model</div>
<div style="grid-row:2;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Metered<br/>billing model</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.05em;line-height:1.1;writing-mode:vertical-rl;">Metered<br/>billing model</div>
</div>
</div>
</div>

</div>
</div>

## Billing at the Enterprise level

- 💳 **The Enterprise account is the billing entity** — a single invoice aggregates seats across all organizations in the enterprise.
- 📈 Seats are counted **per active user, per month**, regardless of how many orgs the user belongs to (see *Multi-org & one bill* below).
- 🧾 **Two plans** for organizations: **Copilot Business** and **Copilot Enterprise**. Enterprise adds Chat in GitHub.com with repo-indexed knowledge, fine-tuned models, and audit logs on top of Business.
- 🏢 **Standalone organizations** (no enterprise) are billed directly to the org and can only use **Business**.

> 📘 Plan comparison: <a href="https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot" target="_blank" rel="noopener noreferrer" class="retro-link">GitHub Copilot plans</a>

## License assignment at the Enterprise / Org level

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
