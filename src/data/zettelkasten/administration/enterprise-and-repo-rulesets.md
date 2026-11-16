---
title: "Enterprise & Repo Rulesets"
group: "governance"
tags: ["rulesets", "branch-protection", "custom-properties", "evaluate-mode", "governance"]
aliases: ["Rulesets", "Repository Rulesets"]
---

**Enterprise & Repo Rulesets** are [[GitHub]]'s layered, stackable successor to legacy branch protection under [[Enterprise Governance]], enforcing what code changes must pass across **branches, tags, and push paths** at Enterprise, Organization, and Repository scopes.

## Layered Inheritance & Strictest-Wins Stacking

- **Three Enforcement Scopes (`ENT / ORG / REPO`)**: Rulesets defined at the enterprise or organization level apply automatically to matching child repositories without per-repo manual setup.
- **Additive Stacking**: When multiple rulesets match the same branch or tag, **all rules stack and the strictest requirement wins** (child organizations or repo admins can add stricter checks, never weaken an inherited rule).
- **Core Rule Controls**: Require pull requests before merging, required approval count, dismiss stale approvals on new commits, require conversation resolution, required status checks, required commit signing, block force pushes, and restrict branch deletions.

## Dynamic Targeting with Custom Properties

Instead of maintaining brittle repository name lists, pair one organization ruleset with org-controlled **Custom Properties** (`Organization settings -> Repository -> Custom properties`):

1. Create a single-select property such as `business_criticality` (`critical`, `standard`, `experimental`) with **`Allow repository actors to set this property = OFF`** so repo admins cannot opt out.
2. Target the org branch ruleset (`Default branch`) using the filter `props.business_criticality:critical`.
3. Promoting a repository from `experimental` to `critical` immediately enforces PR reviews and force-push blocks: **change the repo's classification, never the ruleset**.

## Evaluate Mode & Zero-Bypass Discipline

- **Evaluate Mode**: Deploy new rulesets in `Evaluate` enforcement status first to audit real push/merge violations in Rule Insights before flipping to `Active`.
- **Empty Bypass List (Guardrail #15)**: Keep the **Bypass list empty** in production (see [[GitHub Well-Architected Guardrails]]: *"a ruleset with a bypass list is a request, not a rule"*). Only add temporary `Repository migrations -> Exempt` bypasses during frozen [[GitHub Enterprise Importer]] cutovers.
