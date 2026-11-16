---
title: "CODEOWNERS"
group: "review"
tags: ["codeowners", "ownership", "governance", "review-routing", "human-review"]
aliases: [".github/CODEOWNERS", "Code Owners"]
---

**CODEOWNERS** (`.github/CODEOWNERS`, root `CODEOWNERS`, or `docs/CODEOWNERS`) maps repository file paths on [[GitHub]] to responsible `@username` or `@org/team` stewards and automatically requests their review on non-draft [[Pull Requests]].

## Pattern Precedence & Example

Rules use `.gitignore`-style patterns evaluated top-to-bottom where the **last matching pattern wins**:

```text
# Default fallback owner for the entire repository
*                       @octo-org/core-eng

# Frontend and database domain owners
/src/ui/**              @octo-org/frontend
/src/db/**              @octo-org/data-platform

# High-sensitivity CI workflows and enterprise Copilot settings
/.github/workflows/**   @octo-org/security-eng
/copilot/**             @octo-org/ai-governance
```

## Critical Governance & Team Rules

| Rule / Constraint | Details |
| --- | --- |
| **Write Access Required** | Listed users and teams must hold explicit **Write** (or higher) repository permission, otherwise review requests and owner enforcement cannot apply |
| **Org Teams vs Enterprise Teams** | Organization teams (`@org/team`) work in `CODEOWNERS` and feed [[Team Review Assignment]]; **Enterprise teams (`@/ent:team`) are not supported in `CODEOWNERS`** (as of 2026-10-14) |
| **Draft Suppression** | [[Draft Pull Requests]] wait to ping code owners until the author clicks **Ready for review** |
| **Mandatory Gate** | Turning on **Require review from Code Owners** in [[Required Pull Request Reviews]] inside [[PR Rulesets]] blocks merges until an owner for every touched path approves |
| **Critical Asset Protection** | Guard `.github/CODEOWNERS` itself, `.github/workflows/**`, and `.github-private` `copilot/**` managed settings with dedicated admin/security teams |
