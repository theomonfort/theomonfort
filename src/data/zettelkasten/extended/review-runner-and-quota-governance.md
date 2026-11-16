---
title: "Review Runner & Quota Governance"
group: "review"
tags: ["runners", "actions-minutes", "content-exclusion", "governance", "copilot-review"]
aliases: ["Copilot Review Runners"]
---

**Review Runner & Quota Governance** controls compute execution, runner locking, sensitive-file exclusions, and spend caps for [[Copilot Code Review]] across organizations and enterprises.

## Actions Compute & Central Runner Locking

Since **2026-06-01**, [[Agentic Review Tool-Calling]] runs inside GitHub Actions runners and consumes **GitHub Actions minutes** in addition to Copilot AI credits / Premium Requests:

| Governance Control | Where Configured | Operational Effect |
| --- | --- | --- |
| **Org Runner Type & Lock** | `Org -> Copilot -> Runner type -> Runner type configuration` | Sets default runner (`GitHub-hosted standard`, `larger`, or `self-hosted`) across all repos and **Locks** it to block repo-level overrides (shared with Cloud Agent) |
| **Custom Setup Environment** | `.github/workflows/copilot-setup-steps.yml` | Customizes `runs-on` labels and pre-installs compilers, linters, or private registries for agentic review |
| **Self-Hosted Cost Control** | Self-hosted Actions runner groups | Incurs **zero GitHub Actions minute charges** while keeping proprietary build caches inside private networks |
| **Effort & Budget Caps** | Copilot billing & [[Review Effort Levels]] policies | Caps maximum effort tier (`Lite` / `Balanced` / `Max`) and enforces monthly AI credit SKU budgets |

## Content Exclusion Rules

- Path-based **Copilot content exclusion** (`Repo -> Settings -> Copilot -> Content exclusion`, plus Organization and Enterprise policies) strips matching secret configs, vendor trees, or regulated files before review context is assembled, alongside built-in exclusions for binaries and lockfiles.

## Shared Runner & Billing Controls

- Shares Actions runner setup patterns with [[copilot-setup-steps.yml]] and [[Actions Runners]], while metering monthly review usage under [[Usage-Based Billing]] and [[Premium Request Model]].
