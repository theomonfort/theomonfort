---
title: "Budget Hierarchy"
group: "billing"
tags: ["budget-hierarchy", "ai-credits", "overage", "cost-centers", "billing"]
---

**Budget Hierarchy** defines the strict runtime order in which [[Budgets & Spending Limits]] evaluate consumption across [[Usage-Based Billing]], following one golden rule: **hard budgets never sum together; if any applicable budget hits `$0` (or `100%` of its hard cap), usage stops immediately**.

## Two-Phase Evaluation for Copilot & Bundled AI Credits

| Runtime Phase | Enterprise Pool State | Budgets Checked Before Allowing Request |
| --- | --- | --- |
| **Phase 1: Included Pool Active** | [[Shared AI Credit Pool]] `> 0` credits | **[[User-Level Budgets]] (`ULB`)** (plus any [[Cost Centers]] AI credit pool cap set to block). Org and Enterprise overage budgets are **not** checked yet |
| **Phase 2: Pool Exhausted (Overage)** | Shared AI credit pool `= 0` credits | **All 4 scopes checked in parallel**: `User-Level Budget` AND `Organization Budget` AND `Cost Center Budget` AND `Enterprise Budget` -> if **any** hits `$0`, request is blocked |

## Metered Compute Scope Ladder (`Actions`, `Codespaces`, `Packages`)

For repository-driven compute products, GitHub checks every active hard budget along the resource chain (`Enterprise -> Organization -> Repository -> Cost Center`, at both whole-Product and specific-SKU granularity). The **lowest remaining ceiling wins**: a repository with `$50` left on its repo budget still stops if its parent organization or cost center hits `$0`.

## Cost Center Exclusion from Enterprise Overage Budget

By default, [[Cost Centers]] overage spend rolls up into and is gated by the **Enterprise-level budget**:

- **Explicit Cost Center Exclusion Policy**: Administrators can mark specific cost centers as **excluded from the enterprise budget**.
- **Operational Effect**: Excluded departments continue running on their own dedicated cost center overage budget even when the enterprise-wide overage budget hits `$0` (individual [[User-Level Budgets]] still apply).
