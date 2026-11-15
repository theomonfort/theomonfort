---
title: "Ruleset Bypass & Evaluate Mode"
group: "pr-rulesets"
tags: ["evaluate-mode", "bypass-list", "rule-insights", "audit-log"]
aliases: ["Evaluate Mode", "Ruleset Bypass List", "Rule Insights"]
---

**Ruleset Bypass & Evaluate Mode** let administrators dry-run new [[PR Rulesets]] against live [[Pull Requests]] without blocking developers, and audit every exception when emergency bypass actors exist.

## Enforcement Modes

| Enforcement Status | Runtime Effect on Pull Requests |
| --- | --- |
| **Active** | Blocks non-compliant pushes and PR merges immediately |
| **Evaluate** *(GitHub Enterprise)* | Simulates the ruleset on every push and PR **without blocking**, logging pass/fail outcomes in **Rule Insights** (`Settings -> Rules -> Rule Insights`) so teams fix missing checks or [[CODEOWNERS]] gaps before flipping to `Active` |
| **Disabled** | Retains the ruleset definition without evaluating or enforcing rules |

## Bypass List Governance & Auditability

- **Zero-Bypass Default**: GitHub governance best practice is an **empty bypass list**, because a ruleset with broad admin bypasses degrades from a hard control into a suggestion.
- **Scoped Emergency Actors**: When a break-glass exception is strictly required (such as a release bot App or incident commander role), scope the entry to **Pull requests only** or require a bypass prompt rather than `Always allow`.
- **Tamper-Evident Audit Trail**: Every ruleset edit and bypass merge is recorded in **Rule Insights** and exported via **Enterprise Audit Log Streaming** to SIEM storage alongside [[Commit Signing & Branch Restrictions]].
