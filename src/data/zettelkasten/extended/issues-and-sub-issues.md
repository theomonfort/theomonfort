---
title: "Issues & Sub-issues"
group: "plan"
tags: ["issues", "sub-issues", "tracking", "copilot", "collaboration"]
aliases: ["Issues", "Sub-issues"]
---

Introduced by [[GitHub]] in 2009, **Issues & Sub-issues** track bug reports, tasks, and feature requests directly beside the codebase and promote settled ideas from [[GitHub Discussions]].

## Feature Breakdown

| Capability | What it does | Why it matters |
| --- | --- | --- |
| **Issue** | Tracks one discrete bug, task, or request | Labels, assignees, milestones, and due dates |
| **Sub-issue** | Splits a large epic into child issues | Parent issue displays an automatic `% done` progress bar |
| **Templates & Linking** | Handled via [[Issue Templates & PR Linking]] | Structured form intake and `Closes #123` auto-close on merge |
| **Typed Metadata** | Enriched by org-wide [[Issue Fields]] | Consistent priority, effort, and target dates across repos |
| **Assign to Copilot** | Delegates an issue to the Copilot Cloud Agent | Researches the repo with [[Custom Instructions]] and [[Custom Agents]], then opens a draft Pull Request |

## Reference Trackers & Tooling

- Major open-source trackers at scale: `microsoft/vscode`, `rust-lang/rust`, `vercel/next.js`, and `github/docs`.
- Scheduled visually in [[GitHub Projects]] and operated programmatically by agents via [[GitHub MCP Server]].
