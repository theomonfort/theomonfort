---
title: "Required Status Checks"
group: "pr-rulesets"
tags: ["status-checks", "ci", "github-actions", "strict-branches"]
aliases: ["Require status checks to pass", "Up-to-Date Branches"]
---

**Required Status Checks** (`Require status checks to pass before merging` in [[PR Rulesets]]) block [[Pull Requests]] from merging until designated build, test, lint, and security jobs report `success` on the head commit.

## Anti-Spoofing & Strict Branch Controls

| Option | Why It Matters |
| --- | --- |
| **Expected Check Source Pinning** | Binds each required check name (such as `build`, `unit-tests`, or `dependency-review` from [[PR Dependency & Secret Gates]]) to a specific **GitHub App** (for example `GitHub Actions`), preventing rogue tokens from posting fake green statuses |
| **Require branches to be up to date before merging** *(Strict mode)* | Forces the PR branch to incorporate the latest `main` commit before merging so two PRs with conflicting assumptions cannot silently break `main` |
| **Do not require status checks on creation** | Allows new matching release branches to be branched from `main` before CI runs on subsequent PRs |

## Scaling Strict Checks

- Combining Required Status Checks with [[Auto-Merge]] lets PRs merge unattended once CI completes; on high-throughput repositories where strict mode causes constant rebase churn, pair status checks with [[Merge Queue]] (`merge_group`) or let [[Agent Merge]] and [[PR Coding Agent Handoff]] automatically repair failing jobs.
