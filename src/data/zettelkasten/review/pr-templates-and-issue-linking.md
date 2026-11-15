---
title: "PR Templates & Issue Linking"
group: "pr-workflow"
tags: ["templates", "closes", "issues", "automation"]
aliases: ["PULL_REQUEST_TEMPLATE.md", "Issue Linking", "Closes #123"]
---

**PR Templates & Issue Linking** standardize author context on [[Pull Requests]] and automate issue closure when changes merge into the default branch.

## Pull Request Templates

| File Location | Scope & Selection |
| --- | --- |
| `.github/PULL_REQUEST_TEMPLATE.md` (or repo root / `docs/`) | Pre-populates the description box on every new PR with summary prompts, test plans, rollout notes, and checklists |
| `.github/PULL_REQUEST_TEMPLATE/*.md` | Multiple named templates selectable via URL query parameter (`?template=release.md`, `?template=hotfix.md`) |
| Organization `.github` repository | Provides a fallback default PR template across repositories in the organization that do not define a local one |

## Automatic Issue Linking Keywords

- Including `Closes #123`, `Fixes #123`, or `Resolves #123` (or cross-repo `Closes owner/repo#123`) in the PR description or commit message links the PR under the **Development** sidebar.
- Merging the PR into the repository's default branch via any of the [[Merge Methods]] automatically closes the linked issue and triggers status transitions in GitHub Projects.
- Structured PR descriptions also improve [[Copilot Code Review]], giving the reviewer explicit intent to compare against code changes in [[PR Diff & File Views]].
