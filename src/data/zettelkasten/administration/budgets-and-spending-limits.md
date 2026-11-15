---
title: "Budgets & Spending Limits"
group: "billing"
tags: ["budgets", "spending-limits", "overage", "finops", "billing"]
---

**Budgets & Spending Limits** monitor monthly USD consumption across [[GitHub]] metered services and enforce hard spending stops where configured, preventing **Governance Anti-Pattern #05** (leaving invoiced accounts on their default unlimited metered spend).

## Four Budget Categories (`Billing and licensing -> Budgets and alerts`)

| Budget Type | What It Measures | Supported Target Scopes |
| --- | --- | --- |
| **1. Product / SKU** | Whole product (`Actions`, `Codespaces`) or single SKU (`Codespaces storage`, `Code Security AI Credits`) | Enterprise, Organization, Repository, or [[Cost Centers]] (org owners can budget their own org/repos) |
| **2. Bundled AI Credits** | Paid **overage** across Copilot, cloud agent, Spark, and GHAS AI SKUs under [[Usage-Based Billing]] | Enterprise, Organization, Cost Center, or Users (paid usage policy must be enabled; excludes license fees & included pool) |
| **3. Copilot Per-User** | Combined **included pool + paid overage** AI credits per person | Universal, Cost Center per-user, or Individual (see [[User-Level Budgets]]) |
| **4. Metered Licenses** | Metered seat spend / count thresholds (unavailable on prepaid volume licenses) | Enterprise or Cost Center (for metered GHE seats; see [[GHE & Copilot Licenses]]) |

## Alert-Only vs Hard Stop Behavior at `100%`

| Control Surface | Enforcement Behavior When Limit Is Reached |
| --- | --- |
| **Alert-only budget** | Sends [[Budget Threshold Alerts]]; usage and charges **continue** uninterrupted |
| **Metered usage (`Stop usage when budget limit is reached`)** | **Hard stop**: blocks additional Actions jobs, Codespaces, or AI overage (evaluate carefully so broad caps do not halt critical CI/security workflows) |
| **Copilot [[User-Level Budgets]]** | **Always hard**: `$0` or exhausted cap blocks that user immediately, even while [[Shared AI Credit Pool]] balance remains |
| **Copilot & GHE metered licenses** | **Alerts only**: notifies admins without blocking new seat assignments |
| **GHAS metered licenses (hard)** | Blocks enabling `Code Security` / `Secret Protection` on **new repositories**, while keeping existing repos protected |

## Non-Additive Ceiling & First-Cycle Rules

Hard budgets **do not add together**; runtime evaluation follows [[Budget Hierarchy]] where any single exhausted ceiling stops usage. Newly created budgets count **only usage incurred after creation** during their first partial billing month, then reset on the 1st of each billing cycle.
