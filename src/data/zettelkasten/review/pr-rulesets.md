---
title: "PR Rulesets"
group: "pr-rulesets"
tags: ["rulesets", "branch-protection", "governance", "enterprise"]
aliases: ["Branch Rulesets", "Repository Rulesets"]
---

**PR Rulesets** on [[GitHub]] replace legacy single-branch protection rules with composable, layered branch policies across **Enterprise**, **Organization**, and **Repository** scopes, governing what must happen on [[Pull Requests]] before code reaches `main`.

## Three-Tier Layering ("Strictest Rule Wins")

| Scope | Settings Path | Targeting & Inheritance |
| --- | --- | --- |
| **Enterprise** | `Enterprise -> Policies -> Rulesets` | Enforces non-negotiable baseline gates across every organization |
| **Organization** | `Org -> Settings -> Repository -> Rulesets` | Targets repos dynamically via naming globs or **Repository Custom Properties** (such as `props.business_criticality:critical`) |
| **Repository** | `Repo -> Settings -> Rules -> Rulesets` | Adds project-specific checks on `Default branch` (`main`) or `release/*` |

- **Additive Enforcement**: Multiple active rulesets targeting the same branch evaluate together, and **the strictest rule always wins**; repository admins can tighten org/enterprise rulesets, never weaken them.

## Core Pull Request Ruleset Controls

1. **Require a pull request before merging**: Enforces [[Required Pull Request Reviews]], [[CODEOWNERS]], and thread resolution.
2. **Require status checks to pass**: Mandates green CI and supply-chain jobs in [[Required Status Checks]] (plus [[Merge Queue]] on busy branches).
3. **Require code scanning / quality / secret results**: Blocks merges via [[Code Scanning PR Merge Protection]], [[Code Quality PR Findings]], and [[PR Dependency & Secret Gates]].
4. **Git Integrity Restrictions**: Enforces [[Commit Signing & Branch Restrictions]] (`Block force pushes`, signed commits, linear history).
5. **Automated AI Review & Rollout**: Triggers [[Automatic Copilot Review]] and tests new rules safely via [[Ruleset Bypass & Evaluate Mode]].
