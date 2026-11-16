---
title: "Budget Threshold Alerts"
group: "admin"
tags: ["alerts", "budgets", "notifications", "finops", "billing"]
---

**Budget Threshold Alerts** send automated email notifications when monthly spend in [[Budgets & Spending Limits]] crosses **`75%`**, **`90%`**, and **`100%`** of a configured USD or license-count ceiling.

## Threshold Progression & Recipients

- **Built-In Milestones**: Enabling alerts on any product, SKU, bundled AI credit, or metered license budget triggers emails sequentially at **`75%`**, **`90%`**, and **`100%`** (`Limit hit`).
- **Default & Custom Recipients**: Notifications deliver automatically to **Enterprise Owners** / **Organization Owners** and **Billing Managers** (see [[Enterprise Admin Roles]]), plus any additional finance or engineering lead email addresses added on the budget.

## Behavior at `100%` by Product Type

| Budgeted Surface | Action at `75%` & `90%` | Action at `100%` (`Limit Hit`) |
| --- | --- | --- |
| **Metered compute & AI credits** (`Actions`, `Codespaces`, [[Usage-Based Billing]] overage) | Email notification | Email notification + **optional hard stop** (`Stop usage when budget limit is reached`) evaluated via [[Budget Hierarchy]] |
| **Metered seats** ([[GHE & Copilot Licenses]]) | Email notification | **Alert email only**; new org members and Copilot assignments are never blocked |
| **Metered `GHAS` seats** (`Code Security` / `Secret Protection`) | Email notification | Email notification + optional block on **new repository enablement** (existing repos stay protected) |

## Operational Nuances

- **First-Cycle Partial Accounting**: During the billing cycle in which a budget is first created, GitHub tracks **only usage generated after the creation timestamp**; total monthly invoice spend for that first cycle can therefore exceed the budget amount before clean monthly resets begin on cycle day 1.
- **Per-User Coverage**: Monitor [[Cost Centers]] and enterprise alerts alongside [[User-Level Budgets]], as per-user caps enforce silently without guaranteed individual alert emails.
