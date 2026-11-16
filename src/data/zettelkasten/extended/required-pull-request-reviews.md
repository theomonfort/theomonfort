---
title: "Required Pull Request Reviews"
group: "review"
tags: ["required-reviews", "approvals", "stale-reviews", "codeowners", "pr-rulesets"]
aliases: ["Require a pull request before merging", "Dismiss Stale Approvals"]
---

**Required Pull Request Reviews** (`Require a pull request before merging` inside [[PR Rulesets]]) block direct pushes to protected branches and specify exact human and AI sign-off criteria on [[Pull Requests]].

## Sub-Rules & Security Impact

| Sub-Setting | Enforcement Behavior |
| --- | --- |
| **Required approvals (`1-10`)** | Minimum count of `Approve` verdicts in [[PR Review States]] (typically `1` for standard repos, `2+` for critical production repos) |
| **Dismiss stale pull request approvals when new commits are pushed** | Invalidates earlier approvals if post-review commits alter the branch, preventing unreviewed code from riding a prior sign-off |
| **Require review from Code Owners** | Blocks merge until a designated owner in [[CODEOWNERS]] approves every matched file path |
| **Require approval of the most recent reviewable push** | Prevents the person who pushed the latest commit from approving their own push, closing the two-author self-approval loophole |
| **Require conversation resolution before merging** | Requires every thread in [[Inline Review Comments & Threads]] to be marked `Resolved` before merge or [[Auto-Merge]] |
| **Allowed merge methods** | Restricts the branch to specific [[Merge Methods]] (`Merge commit`, `Squash`, or `Rebase`) |

- Organizations can optionally let clean [[Copilot Review Approvals]] count toward approval thresholds on lower-risk repositories while keeping human Code Owner sign-off mandatory on critical paths.
