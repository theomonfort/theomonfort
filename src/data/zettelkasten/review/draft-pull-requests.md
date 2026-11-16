---
title: "Draft Pull Requests"
group: "pr-workflow"
tags: ["draft-pr", "wip", "early-feedback", "cli"]
aliases: ["Draft PR", "Draft PRs", "Ready for review"]
---

**Draft Pull Requests** let authors open [[Pull Requests]] early under [[GitHub Flow]] to run CI pipelines and gather feedback while blocking premature merges and suppressing noisy reviewer pings.

## Lifecycle & Notification Behavior

| State / Action | GitHub UI & `gh` CLI | Reviewer & Merge Behavior |
| --- | --- | --- |
| **Open as Draft** | **Create draft pull request** or `gh pr create --draft` | Merge button is locked; [[CODEOWNERS]] and [[Team Review Assignment]] requests are held back |
| **Request Copilot Early** | Click **Request** next to Copilot or enable `Review draft pull requests` in [[Automatic Copilot Review]] | Runs [[Copilot Code Review]] before human reviewers are notified |
| **Mark Ready** | Click **Ready for review** or run `gh pr ready` | Unlocks merge eligibility and dispatches [[CODEOWNERS]] and team review notifications |
| **Convert Back to Draft** | Sidebar **Convert to draft** (`gh pr ready --undo`) | Pauses merge eligibility when scope changes mid-review |

## Agentic Default Output

- Asynchronous coding workflows, including [[PR Coding Agent Handoff]] (Copilot Cloud Agent) and backlog remediation in [[Copilot Autofix in PRs]] (Agentic Autofix), open **Draft PRs** by default so developers inspect session logs and CI checks before requesting team approval.
