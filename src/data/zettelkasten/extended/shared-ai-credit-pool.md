---
title: "Shared AI Credit Pool"
group: "admin"
tags: ["ai-credits", "pool", "copilot", "cost-centers", "ubb", "billing"]
aliases: ["AI Credit Pool", "AI Credit Pool Cap"]
---

**Shared AI Credit Pool** aggregates the monthly AI credits included with every seat under [[GHE & Copilot Licenses]] into a single enterprise-wide balance at the billing-entity level under [[Usage-Based Billing]].

## License-Included Credit Contributions

| Plan Tier | Monthly Seat Price | Standard Included Pool Contribution | Promotional Period (`Jun 1 - Sep 1, 2026`) |
| --- | --- | --- | --- |
| **Copilot Business** | `$19` / user | **`1,900` AI credits** (`$19` value) | **`3,000` AI credits** (existing customers) |
| **Copilot Enterprise** | `$39` / user | **`3,900` AI credits** (`$39` value) | **`7,000` AI credits** (existing customers) |

## Global Pooling Mechanics

- **Shared Drawdown**: Credits belong to the enterprise billing entity rather than individual seats. Light, medium, and heavy users all draw from the same pool first, allowing light users' unused credits to offset heavy agentic users before any paid overage begins (contrast with [[Premium Request Model]]).
- **Phase 1 Gate**: While the enterprise pool still holds credits, only [[User-Level Budgets]] (and optional cost center pool caps) can restrict an individual user; org and enterprise overage budgets do not fire until the shared pool hits `0` (see [[Budget Hierarchy]]).

## Cost Center AI Credit Pool Cap (GA `2026-07-20`)

Configured in **Billing and licensing -> Cost centers** or via the REST API, the **AI credit pool cap** prevents one department from draining the entire enterprise's included pool:

- **Auto-Calculated Ceiling**: Caps a [[Cost Centers]] unit's draw from the shared *included* pool to the exact credits funded by its members' Copilot licenses (no manual dollar entry).
- **Eligible Cost Center Scope**: Supported **only** on cost centers containing **users or enterprise teams** (cost centers containing organizations or repositories are not supported).
- **Action at Cap**: Separate from the overage budget; when reached, admins choose to **block usage** or **continue as paid overage** (if paid usage is permitted). Neither overrides an exhausted [[User-Level Budgets]] limit.
