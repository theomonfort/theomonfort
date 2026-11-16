---
title: "Issue Templates & PR Linking"
group: "collaboration"
tags: ["templates", "pull-requests", "automation", "issues"]
aliases: ["Issue Templates"]
---

**Issue Templates & PR Linking** standardize how work enters and exits [[Issues & Sub-issues]] on GitHub.

## Structured Intake & Automatic Closure

- **Issue Templates & Forms**: Repository-defined YAML/Markdown forms (`.github/ISSUE_TEMPLATE/`) require reproduction steps, environment details, and acceptance criteria up front for teammates and Copilot Cloud Agent.
- **Automatic PR Linking (`Closes #123`)**: Referencing `Closes #123` or `Fixes #123` in a Pull Request links code changes to the originating issue, auto-closes the issue on merge, and updates item status in [[GitHub Projects]].
