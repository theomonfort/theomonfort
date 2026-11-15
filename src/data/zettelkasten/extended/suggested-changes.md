---
title: "Suggested Changes"
group: "review"
tags: ["suggested-changes", "batch-commit", "diff", "fixes", "human-review"]
aliases: ["Commit Suggestion", "Batch Suggestions"]
---

**Suggested Changes** allow human reviewers, [[Copilot Code Review]], and [[Copilot Autofix in PRs]] to embed exact single-line or multi-line code replacements inside [[Inline Review Comments & Threads]] on [[Pull Requests]].

## Syntax & Authoring

Clicking the **Add a suggestion** (`+-`) icon in the comment toolbar inserts a fenced `suggestion` block prefilled with the selected diff lines:

````markdown
```suggestion
const user = await findUserById(userId);
if (!user) return res.status(404).json({ error: "User not found" });
```
````

## Single vs Batch Commit Workflow

| Action | Where | Commit & CI Behavior |
| --- | --- | --- |
| **Commit suggestion** | **Conversation** or **Files changed** tab (or VS Code PR diff view) | Immediately commits that single patch to the PR head branch and triggers a CI run |
| **Add suggestion to batch** -> **Commit suggestions** | **Files changed** tab across multiple human and AI suggestions | Combines N accepted suggestions into **one atomic commit** with co-author trailers, running [[Required Status Checks]] once instead of N times |

- When a reviewer concern requires cross-file refactoring beyond a single hunk replacement, authors can escalate the comment to [[PR Coding Agent Handoff]] instead of applying a local hunk patch.
