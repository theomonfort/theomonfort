---
title: "Pull Requests"
group: "review"
tags: ["pull-requests", "collaboration", "review", "merge", "pr-workflow"]
aliases: ["Pull Request", "PR", "PRs"]
---

**Pull Requests** (introduced by [[GitHub]] in 2008) are the core propose -> discuss -> review -> merge mechanism where code changes from humans, Copilot Cloud Agent, Dependabot, and agentic workflows are verified before reaching `main`.

## Anatomy of a Pull Request Review

| Element | Role Before Merge |
| --- | --- |
| **Propose Diff** | Compare head and base branches in [[PR Diff & File Views]], starting early via [[Draft Pull Requests]] or [[PR Templates & Issue Linking]] |
| **Human Review** | Verdicts in [[PR Review States]], line discussions in [[Inline Review Comments & Threads]], committable [[Suggested Changes]], and [[CODEOWNERS]] routing |
| **AI Review** | Automated or on-demand [[Copilot Code Review]] returning PR summaries, inline comments, and fix patches |
| **CI & Status Gates** | Build, test, and supply-chain checks enforced by [[PR Rulesets]] and [[Required Status Checks]] |
| **Security & Quality** | Vulnerability gates via [[Code Scanning PR Merge Protection]], [[Copilot Autofix in PRs]], and maintainability checks in [[Code Quality PR Findings]] |
| **Landing** | Controlled integration through [[Merge Methods]], [[Auto-Merge]], [[Stacked Pull Requests]], [[Merge Queue]], or [[Agent Merge]] |

## Pull Requests in the AI Era

- **Scale**: GitHub processes roughly **90 million PR merges per month** in 2026 (~2x historical volume) as coding agents open and iterate on branches alongside developers.
- **Division of Responsibility**: Automated checks and [[Copilot Code Review]] catch syntax, null-safety, style, and security regressions up front, keeping human reviewers focused on architecture, domain logic, and merge approval.
