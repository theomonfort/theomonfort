---
title: "Merge Queue"
group: "review"
tags: ["merge-queue", "ci", "merge-group", "ruleset", "stacking"]
aliases: ["Require merge queue", "merge_group"]
---

**Merge Queue** (`Require merge queue` inside [[PR Rulesets]]) protects busy `main` branches on [[GitHub]] from semantic merge skew by validating approved [[Pull Requests]] sequentially or in batches on temporary merge branches before fast-forwarding `main`.

## Why High-Velocity Repos Need a Merge Queue

- With [[Required Status Checks]] strict mode alone, every merge into `main` invalidates all other open PRs, forcing authors (or [[Auto-Merge]]) into an `O(N^2)` rebase race; without strict mode, two individually green PRs can break `main` when combined.
- Clicking **Merge when ready** hands an approved PR to the queue, which builds speculative `gh-readonly-queue/main/...` branches combining `main` + all PRs ahead in line + the candidate PR.

## Workflow Trigger & Queue Settings

CI workflows must subscribe to the `merge_group` event so checks execute on temporary queue branches:

```yaml
on:
  pull_request:
    branches: [main]
  merge_group:
    types: [checks_requested]
```

| Ruleset Setting | Effect |
| --- | --- |
| **Build concurrency & group size** | Group multiple queued PRs (`Min` / `Max` batch size) to save GitHub Actions minutes while bisecting and evicting only offending PRs when a batch fails |
| **Merge method** | Enforces Merge commit, Squash, or Rebase ([[Merge Methods]]) consistently across queued entries |
| **Status check timeout** | Evicts hung queue entries automatically so one stalled CI run never freezes `main` |
