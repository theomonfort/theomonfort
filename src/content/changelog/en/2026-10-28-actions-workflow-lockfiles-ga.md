---
title: "Actions workflow dependency lockfiles are generally available"
date: "2026-10-28"
summary: "Keep readable tags in workflows while running the exact commits you reviewed. Dependency lockfiles move from public preview to GA on GitHub Free, Team, and Enterprise Cloud, including data residency."
category: actions
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available"
---

### From preview to general availability

- **Lock dependencies**: `gh actions-lock` generates `.github/workflows/actions.lock` for actions and transitive dependencies. Moving a tag does not change the recorded commit that runs.
- **Adopt gradually**: onboard workflows individually. Every dependency of an onboarded workflow must be recorded.
- **Dependabot integration**: action version updates regenerate the matching lockfile entry in the same PR.
- **Enforce and verify**: enterprise, organization, and repository administrators can require lockfiles. Check for stale lockfiles without modifying files, including in CI.

**A lockfile guarantees the chosen version, not its safety.** Review dependencies before locking, then commit the generated lockfile and workflow changes.

[Earlier preview and demo](#2026-10-14-actions-workflow-lockfiles) / [Official documentation](https://docs.github.com/actions/concepts/security/workflow-dependency-lockfiles) / [gh-actions-lock](https://github.com/github/gh-actions-lock)
