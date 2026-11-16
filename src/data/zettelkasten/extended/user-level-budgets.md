---
title: "User-Level Budgets"
group: "admin"
tags: ["user-level-budget", "ulb", "copilot", "ai-credits", "billing"]
aliases: ["ULB", "Copilot Per-User Budget"]
---

**User-Level Budgets** (`ULB`, configured under `Bundled AI credits -> Users` in [[Budgets & Spending Limits]]) cap the **total monthly GitHub AI credits** a single licensed user can consume across **both** the [[Shared AI Credit Pool]] and paid [[Usage-Based Billing]] overage.

## Three Specificity Tiers (`Most Specific Wins`)

GitHub resolves each user's monthly ceiling using strict specificity precedence (`Individual -> Cost Center Per-User -> Universal`):

| Precedence | ULB Tier | Behavior & Operational Use Case |
| --- | --- | --- |
| **1 (Highest)** | **Individual user-level budget** | Per-person override for heavy agentic power users (or `$0` freeze); supports an **expiration date**, automatically falling back to tier 2 or 3 once expired |
| **2** | **Cost center per-user default** | Default per-person cap applied individually to every member of a [[Cost Centers]] unit (each person gets that ceiling, not a shared pot) |
| **3 (Baseline)** | **Universal user-level budget** | Enterprise-wide default applied automatically to every Copilot seat holder, preventing newly onboarded users from accidentally draining the pool |

## Enforcement Characteristics

- **Always a Hard Stop**: Unlike organization or license budgets, a User-Level Budget cannot be set to alert-only. Hitting the limit (or assigning a **`$0` ULB**) blocks AI credit-consuming features for that user immediately during **Phase 1** of [[Budget Hierarchy]], even when millions of credits remain in the enterprise shared pool.
- **Completions Unaffected**: Code completions and Next Edit suggestions remain active because they consume `0` AI credits.
- **Monitoring**: Because individual user-level threshold emails are not always emitted, pair ULBs with cost center and enterprise [[Budget Threshold Alerts]].
