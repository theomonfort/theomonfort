---
title: "Cost Centers"
group: "admin"
tags: ["cost-centers", "chargeback", "azure", "finops", "billing"]
---

**Cost Centers** group metered [[GitHub]] spending and metered [[GHE & Copilot Licenses]] by department, business unit, or initiative without creating extra organizations or altering repository access, with optional direct billing to per-department **Azure subscriptions**.

## Assignable Resources & Attributed Spend

Prepaid volume subscriptions are excluded (see [[Enterprise Procurement Channels]]). Reassigning a resource affects **future usage only**, never historical charges.

| Assigned Resource | Metered Costs Counted in the Cost Center |
| --- | --- |
| **User** | Metered GHE / GHAS / Copilot license fees + Copilot AI credit usage |
| **Enterprise Team** (GA `2026-06-25`) | Same as User, automatically tracking team membership changes in [[Enterprise & Org Teams]] |
| **Repository** | GitHub Actions, Codespaces, Packages, and Git LFS (billed to the repo's cost center **regardless of who triggers the run**) |
| **Organization** | All repo compute + org-billed GHE/GHAS/Copilot seats + AI usage from org-granted Copilot seats |

In a shared organization, best practice is to assign repositories to department CI cost centers (`Engineering CI`), assign [[Enterprise & Org Teams]] to AI cost centers (`Engineering AI`), and leave the organization itself unassigned.

## Single-Assignment Rule & 4-Tier Attribution Priority

Each resource can have **only one direct cost center assignment** (adding it to a second cost center moves it). Membership in multiple teams or orgs never splits a single charge; for license and Copilot AI costs, the **first matching priority** wins:

| Priority | Winning Cost Center Destination | Tie-Breaker Rule |
| --- | --- | --- |
| **1** | User's **directly assigned** cost center | Direct user assignment always overrides team and org |
| **2** | **Enterprise team's** cost center | If the user is in multiple mapped enterprise teams, the **team created first** wins |
| **3** | **Billed organization's** cost center | Multiple orgs: **oldest org** for GHE/GHAS; **one selected licensing org** for Copilot |
| **4** | Unassigned fallback (`Enterprise Only`) | Appears as `Enterprise Only` in detailed CSV usage reports (`username` + `sku` + `cost_center_name`) |

Cost centers pair with overage caps in [[Budgets & Spending Limits]], pool drawdown caps in [[Shared AI Credit Pool]], and optional enterprise overage exemptions in [[Budget Hierarchy]].
