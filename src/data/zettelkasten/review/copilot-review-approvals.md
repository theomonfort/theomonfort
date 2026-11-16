---
title: "Copilot Review Approvals"
group: "copilot-review"
tags: ["approvals", "copilot-review", "governance", "rulesets"]
aliases: ["AI PR Approval", "Copilot Approve Verdict"]
---

**Copilot Review Approvals** (generally available since **2026-10-28**) allow [[Copilot Code Review]] to submit formal `Approve` verdicts in [[PR Review States]] when no blocking issues are detected, rather than always posting `Comment`-only reviews.

## Policy Controls & Safety Semantics

| Aspect | Behavior |
| --- | --- |
| **Opt-In Governance** | **Disabled by default** and configured **separately** from `Max` in [[Review Effort Levels]] by repository, organization, or enterprise administrators |
| **Counting Toward Gate** | When enabled, a clean Copilot `Approve` review counts toward `Required approvals` in [[Required Pull Request Reviews]] on low-risk repos or paired with [[CODEOWNERS]] |
| **Automatic Stale Dismissal** | Pushing any new commit to the PR branch **automatically dismisses** Copilot's prior approval; re-request review (or enable `Review new pushes` in [[Automatic Copilot Review]]) for a fresh verdict |
| **Auto-Resolved Threads** | Paired with automatic comment resolution (`2026-09-11`), Copilot resolves its own [[Inline Review Comments & Threads]] when a follow-up push fixes the underlying defect |

## Recommended Enterprise Pattern

- Keep human [[CODEOWNERS]] review mandatory on high-criticality repositories inside [[PR Rulesets]], while enabling Copilot Review Approvals on internal tooling, docs, or single-maintainer repositories where a second human reviewer would stall delivery.
