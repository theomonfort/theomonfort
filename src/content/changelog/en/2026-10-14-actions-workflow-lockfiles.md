---
title: "Lock Actions workflow dependencies with a lockfile"
date: "2026-10-14"
summary: "Workflows can now pin the actions they use to the commits recorded in .github/workflows/actions.lock. Even if a tag or branch moves later, only the code you reviewed runs."
category: actions
status: "Public preview"
source: "https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/"
demoLinks:
  - label: "This site's actions.lock"
    url: "https://github.com/theomonfort/theomonfort/blob/main/.github/workflows/actions.lock"
  - label: "theomonfort-org → New Actions policy"
    url: "https://github.com/organizations/theomonfort-org/settings/actions/rules/new"
demo:
  - "Open this site's actions.lock and show its two sections: workflows (the actions deploy.yml uses) and dependencies (the commit SHA each tag resolves to, plus owner_id / repo_id). Point out the transitive upload-artifact dependency recorded under upload-pages-artifact."
  - "In deploy.yml, actions/checkout@v4 was rewritten to a full version such as @v4.4.0. In a terminal, run gh actions-lock --verify .github/workflows/deploy.yml to confirm the lockfile is up to date."
  - "In theomonfort-org, open Settings → Actions → Policies → New policy and turn on Require lockfile. Start in Evaluate mode scoped to specific repositories and workflows, check blocked runs in Policy insights, then switch to Active."
---

### What changes

- **The problem**: tags and branches such as the `v4` in `actions/checkout@v4` can be moved to a different commit later. If an action is compromised, your next run executes different code even though nothing changed in your repository.
- **Lockfile**: `.github/workflows/actions.lock` records the commit behind each action, including transitive dependencies and reusable workflows. Your workflow keeps references like `@v4`, but the recorded commit is what runs. `owner_id` and `repo_id` also confirm the repository behind the name is still the one you locked.
- **`gh actions-lock` extension**: generates and updates the lockfile, with `--verify` for CI and `--verify-local` for offline pre-commit checks. You can onboard workflows one at a time.
- **Require lockfile policy**: enterprise, organization, and repository Actions policies can block runs of workflows that are not covered by the lockfile.
- **Dependabot**: when it bumps an action in an onboarded workflow, it regenerates the lockfile entry in the same pull request. It does not onboard new workflows for you.

### Watch out

**Locking only guarantees the same code runs every time; it does not tell you whether that code is safe.** Review dependencies before you lock them. On first run, `@v4` is rewritten to something like `@v4.4.0`, so review the diff too. If you only allow specified actions, the allowlist is checked against locked SHAs, so entries pinned to a tag stop matching. Public preview on GitHub Enterprise Cloud (including data residency), Team, and Free.

[Workflow dependency lockfiles (official documentation)](https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles) / [Locking action dependencies](https://docs.github.com/en/actions/how-tos/secure-your-work/lock-workflow-dependencies) / [Enforcing lockfiles](https://docs.github.com/en/actions/how-tos/administer/enforce-workflow-lockfiles) / [gh-actions-lock](https://github.com/github/gh-actions-lock)
