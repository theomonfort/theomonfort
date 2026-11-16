---
title: "Agent Merge"
group: "review"
tags: ["agent-merge", "copilot-app", "autonomous", "last-mile", "stacking"]
aliases: ["Agent merge in Copilot app"]
---

**Agent Merge** is an autonomous last-mile feature in the **GitHub Copilot app** on [[GitHub]] that takes over an open PR, clears every technical blocker holding up integration, and merges the PR as soon as branch protections allow.

## How Agent Merge Operates

| Step / Property | Runtime Behavior |
| --- | --- |
| **Top-of-PR Toggle** | Flip **Agent merge** on at the top of [[Pull Requests]] in the Copilot app; the workspace's Copilot session claims lifecycle check-ins |
| **Blocker Resolution** | Reads new [[Inline Review Comments & Threads]] (human or [[Copilot Code Review]]), diagnoses failing [[Required Status Checks]], resolves Git merge conflicts, and pushes tested commits |
| **Durable Background Loop** | Runs asynchronously in the background across periodic check-in ticks and **survives Copilot app restarts** |
| **Automatic Shutoff** | Turns itself **off automatically** the instant the PR merges (via direct merge, [[Auto-Merge]], or [[Merge Queue]]) |

## Governance Boundary

- **Never Bypasses Rulesets**: Agent Merge operates strictly within the user's and repository's [[PR Rulesets]] boundaries. Human sign-offs required by [[Required Pull Request Reviews]], [[CODEOWNERS]] approvals, and mandatory CI/security checks still decide what reaches `main`.
