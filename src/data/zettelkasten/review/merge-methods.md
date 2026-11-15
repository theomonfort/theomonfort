---
title: "Merge Methods"
group: "pr-workflow"
tags: ["merge-commit", "squash", "rebase", "git-history"]
aliases: ["Squash and Merge", "Rebase and Merge", "Merge Commit"]
---

**Merge Methods** control how commits from [[Pull Requests]] and [[Stacked Pull Requests]] are recorded on `main`, configured in `Settings -> General -> Pull Requests` and enforceable per branch via [[PR Rulesets]].

## Comparing the Three Merge Strategies

| Merge Method | How It Lands on `main` | Commit History Tradeoff |
| --- | --- | --- |
| **Create a merge commit** | Preserves every branch commit as-is and joins them to `main` through a merge commit (or 1 merge commit for an entire stack) | Fullest audit trail of intermediate commits; creates non-linear merge topology |
| **Squash and merge** | Collapses all commits in a PR into **one single commit** on `main` | Cleanest `main` log (`1 PR = 1 commit`); individual work-in-progress branch commits are discarded |
| **Rebase and merge** | Replays each branch commit sequentially onto `main` without a merge commit | Strictly linear history keeping granular commits; original branch commit SHAs are rewritten |

## Repository Hygiene Controls

- **Allowed Methods**: Admins can enable one or more strategies in repository settings or restrict specific protected branches in [[Required Pull Request Reviews]] and `Require linear history` ([[Commit Signing & Branch Restrictions]]).
- **Default Commit Messages**: Customize squash and merge commit titles/bodies (for example `PR title (#number)` + PR body).
- **Branch Cleanup**: Enable `Automatically delete head branches` so merged feature branches under [[GitHub Flow]] are pruned immediately, pairing cleanly with [[Auto-Merge]] and [[Merge Queue]].
