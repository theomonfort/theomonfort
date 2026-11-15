---
title: "PR Review States"
group: "human-review"
tags: ["review-states", "approve", "request-changes", "comment"]
aliases: ["Request Changes", "Approve PR", "Pending Review"]
---

**PR Review States** define the three formal review verdicts submitted from **Files changed -> Review changes** on [[Pull Requests]], governing merge eligibility under [[Required Pull Request Reviews]].

## The Three Verdicts

| Review State | Merge Gate Effect | When Reviewers Use It |
| --- | --- | --- |
| **Comment** | Informational; neither satisfies required approvals nor blocks merging (unless threads stay open under conversation resolution) | Non-blocking questions, architectural notes, or early feedback on [[Draft Pull Requests]] |
| **Approve** | Counts toward the `Required approvals` threshold (`1-10`) on the target branch | Sign-off after verifying code logic, tests, and [[PR Diff & File Views]] |
| **Request changes** | Actively blocks merging until that reviewer approves or a permitted maintainer dismisses the stale review | Correctness bugs, spec mismatches, or missing tests that must be fixed before merge |

## Pending Review Batching & Governance Guardrails

- **Start a Review vs Single Comment**: Clicking **Start a review** queues [[Inline Review Comments & Threads]] and [[Suggested Changes]] in a `Pending` state until **Submit review**, sending one consolidated email/notification instead of one ping per line.
- **Disable Actions Auto-Approval**: Under Enterprise / Organization Actions policies (`Settings -> Actions -> General`), set **Allow GitHub Actions to create and approve pull requests** to **Disabled** (on by default) so workflows cannot bypass human code review.
- **AI Approvals**: Separate from human verdicts, admins can optionally allow [[Copilot Review Approvals]] to count toward required approvals on low-risk PRs.
