---
title: "Actions workflow dependency lockfiles are generally available"
date: "2026-10-28"
summary: "Keep readable tags in workflows while running the exact commits you reviewed. Dependency lockfiles move from public preview to GA on GitHub Free, Team, and Enterprise Cloud, including data residency."
category: actions
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available"
demoLinks:
  - label: "actions/checkout@v4 (movable tag)"
    url: "https://github.com/actions/checkout/tree/v4"
  - label: "checkout commit recorded in our lockfile (11d5960)"
    url: "https://github.com/actions/checkout/commit/11d5960a326750d5838078e36cf38b85af677262"
  - label: "This site's actions.lock"
    url: "https://github.com/theomonfort/theomonfort/blob/main/.github/workflows/actions.lock"
  - label: "theomonfort-org → New Actions policy"
    url: "https://github.com/organizations/theomonfort-org/settings/actions/rules/new"
demo:
  - "Open the actions/checkout@v4 link and point to /tree/v4 in the URL: v4 is a tag, a name that can be moved to another commit. Then open the locked commit link: the full SHA identifies one exact revision. Even a full version such as @v4.4.0 is still a tag, not an immutable commit."
  - "Open this site's actions.lock and show its two sections: workflows (the actions deploy.yml uses) and dependencies (the commit SHA each tag resolves to, plus owner_id / repo_id). Point out the transitive upload-artifact dependency recorded under upload-pages-artifact."
  - "For this demo, deploy.yml uses actions/checkout@v4.4.0 and actions.lock records commit 11d5960a326750d5838078e36cf38b85af677262. Compare that SHA with the commit page, rather than assuming the current v4 tag points to it. In a terminal, run gh actions-lock --verify .github/workflows/deploy.yml to confirm the lockfile is up to date."
  - "In theomonfort-org, open Settings → Actions → Policies → New policy and turn on Require lockfile. Start in Evaluate mode scoped to specific repositories and workflows, check blocked runs in Policy insights, then switch to Active."
---

### From preview to general availability

- **Lock dependencies**: `gh actions-lock` generates `.github/workflows/actions.lock` for actions and transitive dependencies. Moving a tag does not change the recorded commit that runs.
- **Adopt gradually**: onboard workflows individually. Every dependency of an onboarded workflow must be recorded.
- **Dependabot integration**: action version updates regenerate the matching lockfile entry in the same PR.
- **Enforce and verify**: enterprise, organization, and repository administrators can require lockfiles. Check for stale lockfiles without modifying files, including in CI.

**A lockfile guarantees the chosen version, not its safety.** Review dependencies before locking, then commit the generated lockfile and workflow changes.

[Earlier preview announcement](#2026-10-14-actions-workflow-lockfiles) / [Official documentation](https://docs.github.com/actions/concepts/security/workflow-dependency-lockfiles) / [gh-actions-lock](https://github.com/github/gh-actions-lock)
