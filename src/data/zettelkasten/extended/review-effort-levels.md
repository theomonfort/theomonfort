---
title: "Review Effort Levels"
group: "review"
tags: ["effort-levels", "lite", "balanced", "max", "pricing", "copilot-review"]
aliases: ["Lite Balanced Max Review", "Copilot Review Effort"]
---

**Review Effort Levels** let authors and administrators tune reasoning depth, latency, and AI credit cost per [[Copilot Code Review]] across **Copilot Pro, Pro+, Max, Business, and Enterprise** plans.

## Effort Tiers & Estimated Cost (Checked 2026-11-11)

| Effort Level | Architecture & Depth | Est. Cost / Review (USD) | Target Workload |
| --- | --- | --- | --- |
| **Lite** | Ensemble of fast, multi-perspective agents merged into one concise review | **`$0.05 to $1.00`** | Routine diffs, config updates, and rapid iteration on [[Draft Pull Requests]] |
| **Balanced** *(default)* | Higher-reasoning model inspecting cross-file logic, edge cases, and security-sensitive code via [[Agentic Review Tool-Calling]] | **`$0.25 to $5.00`** | Everyday feature and bug-fix [[Pull Requests]] |
| **Max** *(Public preview, 2026-10-28)* | Multiple independent high-reasoning agents across **different model providers** whose findings are cross-checked, reconciled, and verified | **`$1.50 to $25.00`** | High-risk auth, billing, cryptography, schema migrations, and critical infrastructure changes |

## Selection & Enterprise Effort Caps

- **Per-PR Override**: Choose `Lite`, `Balanced`, or `Max` from the **Reviewers** menu on an individual PR when permitted by policy.
- **Admin Defaults & Caps**: Enterprise, Organization, and Repository admins set the default effort tier and a **maximum effort cap** (`Max` is selectable only when allowed by the admin cap).
- **Billing Notes**: Ranges reflect prompt size and [[Review Custom Instructions]] length; GitHub Actions runner minutes under [[Review Runner & Quota Governance]] are billed separately, and `Max` is independent of [[Copilot Review Approvals]].
