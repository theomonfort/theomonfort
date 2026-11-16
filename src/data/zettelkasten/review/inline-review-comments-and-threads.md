---
title: "Inline Review Comments & Threads"
group: "human-review"
tags: ["inline-comments", "threads", "conversation-resolution", "multiline"]
aliases: ["Review Threads", "Conversation Resolution", "Multi-Line Comments"]
---

**Inline Review Comments & Threads** anchor technical discussions directly to single lines or multi-line ranges inside [[PR Diff & File Views]] on [[Pull Requests]].

## Anchoring & Thread Lifecycle

- **Single-Line & Multi-Line Selection**: Click `+` on a diff line or drag across multiple line numbers in the gutter to attach feedback (including committable [[Suggested Changes]]) to the exact code block under discussion.
- **Outdated Diff Tracking**: When subsequent commits modify commented lines, GitHub preserves the thread with an `Outdated` badge on the **Conversation** tab while keeping a toggle to expand the original diff snapshot.
- **Resolve & Unresolve**: Authors or reviewers click **Resolve conversation** once a fix lands, collapsing the thread while retaining full audit history.

## Enforcing Thread Resolution

- Enabling **Require conversation resolution before merging** inside [[Required Pull Request Reviews]] blocks [[Auto-Merge]] and manual merges whenever any inline thread (from a human reviewer, [[Copilot Code Review]], or a ruleset check in `Evaluate` mode) remains unresolved.
- Copilot Code Review also supports **automatic thread resolution** (2026-09-11) when a newly pushed commit cleanly addresses the flagged finding, or authors can delegate open threads via [[PR Coding Agent Handoff]] and [[Agent Merge]].
