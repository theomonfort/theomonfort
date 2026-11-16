---
title: "Agentic Autofix"
group: "scanning"
tags: ["ai", "agents", "backlog", "remediation"]
---

While [[Copilot Autofix]] handles inline pull request suggestions, **Agentic Autofix** ("Assign to Copilot") clears **default-branch backlogs** across both [[Code Scanning]] and [[Code Quality]].

## Autonomous Fix-and-Verify Loop

1. **Batch assignment**: Select **1 to 25 alerts** on the default branch (from the Security tab, Code Quality tab, or a [[Security Campaigns]] view) and click **Assign to Copilot** with optional instructions.
2. **Validated draft PR**: Copilot cloud agent spins up an isolated GitHub Actions sandbox, explores the codebase, edits files, **reruns [[CodeQL]] inside its environment to confirm the alert disappears without introducing new ones**, and opens a draft PR for human review.
3. **Copilot Memory**: Reads and records repository conventions so subsequent fix PRs follow project idioms.
4. **Metering**: Consumes Code Security / Code Quality AI Credits plus Actions minutes; in [[Code Scanning]], developers do **not** need a separate GitHub Copilot seat.
