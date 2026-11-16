---
title: "Auto-Merge"
group: "review"
tags: ["auto-merge", "automation", "ci", "merge", "pr-workflow"]
aliases: ["Enable auto-merge", "gh pr merge --auto"]
---

**Auto-Merge** lets authors and maintainers arm [[Pull Requests]] to integrate automatically the moment all required checks and approvals pass, eliminating manual polling on long CI runs.

## Configuration & Usage

- **Repository Toggle**: Enable `Allow auto-merge` under `Repo -> Settings -> General -> Pull Requests`.
- **Web & CLI Activation**: Click **Enable auto-merge** on an open PR (selecting one of the allowed [[Merge Methods]]) or run:

```bash
gh pr merge --auto --squash
```

## Gate Interaction & Safety

- **Respects Every Rule**: Auto-Merge never bypasses [[PR Rulesets]]. It waits until [[Required Pull Request Reviews]], conversation resolution in [[Inline Review Comments & Threads]], [[Required Status Checks]], and [[Code Scanning PR Merge Protection]] are all satisfied.
- **Invalidation on Push**: If new commits are pushed while `Dismiss stale pull request approvals` is active, Auto-Merge pauses until fresh approvals and green checks arrive.
- **Comparison with Autonomous Tools**: On high-traffic `main` branches using [[Merge Queue]], enabling auto-merge automatically enqueues the PR once approved; when checks fail or review comments arrive, [[Agent Merge]] goes a step further by actively fixing the blockers before landing.
