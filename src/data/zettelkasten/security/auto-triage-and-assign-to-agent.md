---
title: "Auto-Triage & Assign to Agent"
group: "dependabot"
tags: ["sca", "triage", "agents"]
---

Large dependency trees can generate hundreds of [[Dependabot Alerts & Updates]]. **Auto-Triage Rules** and **Assign to Agent** keep [[Dependabot]] actionable inside [[Code Security]]:

## 1. Auto-Triage Rules

- GitHub's preset handles known false positives automatically.
- Custom repository or organization rules auto-dismiss or snooze low-impact alerts (such as `devDependencies`-only test packages, low EPSS scores, or `Unreachable` findings from [[Reachability Analysis]]) and auto-reopen them if scope changes.

## 2. Assign to Agent

- When a version bump introduces breaking API changes that standard Dependabot PRs cannot compile, click **Assign to agent** on the alert.
- Coding agents (Copilot, Claude, or Codex) inspect call-site reachability, refactor affected imports and callers across the repo, run tests, and open a reviewable draft PR, complementing [[Agentic Autofix]] on first-party code.
