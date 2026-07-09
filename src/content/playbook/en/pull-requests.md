---
title: Pull Requests
titleEn: Pull Requests
summary: The mechanism GitHub created in 2008 that changed how developers collaborate. The propose → discuss → review → merge flow, now backed by rulesets, automated checks, and Copilot review.
icon: 🔀
color: amber
accent:
  text: text-neon-amber
  border: border-neon-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 8.8
category: review
related: ['collaboration-tools', 'copilot-code-review', 'code-scanning']
links:
  - group: 📖 Official docs
    label: About pull requests
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - group: 📖 Official docs
    label: About rulesets
    url: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
  - group: 📖 Official docs
    label: GitHub flow
    url: https://docs.github.com/en/get-started/using-github/github-flow
  - group: 📖 Official docs
    label: About PR reviews
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - group: 🎓 Tutorials
    label: Linking a PR to an issue
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue
  - group: 🧪 Examples
    label: VS Code Pull Requests
    url: https://github.com/microsoft/vscode/pulls
---

## In one line

<div class="hero-quote">
  <p>
    GitHub created the <strong>Pull Request</strong> in 2008 and changed how developers collaborate.
  </p>
  <p>
    The <strong>propose → discuss → review → merge</strong> flow is still the heart of teamwork.
  </p>
</div>

## Inside a review

A PR gathers conversation, checks, and automated analysis right on the diff. It's where quality is secured before merge.

| Element | Role |
| --- | --- |
| 🔀 Propose diff | Compare branches, request merge |
| 💬 Review | Line comments, approve/reject |
| 🔎 Auto checks | Code Scanning & code quality |
| 📦 Dependabot | Opens dependency-update PRs |

> 🔑 `Closes #123` in a PR → the Issue auto-closes on merge.

## Branching strategies

How a team organizes branches around PRs. Pick the model that matches your release cadence.

| Strategy | How it works | Best for |
| --- | --- | --- |
| 🌿 GitHub Flow | One `main` + short-lived feature branches; PR → merge → deploy from `main` | Continuous delivery, most teams |
| 🌳 Git Flow | `main` + long-lived `develop`, plus `feature` / `release` / `hotfix` branches | Scheduled, versioned releases |
| 🚀 Trunk-Based | Commit to `main` via tiny branches behind feature flags | High-velocity CI/CD, large teams |

> 💡 Default to **GitHub Flow / trunk-based** for speed; reach for **Git Flow** only when you ship versioned releases.

## Rulesets

Manage the repo to fit your needs. Enforce merge conditions as rules and automate the quality gate.

- ✅ Required reviews and approvers
- 🛡️ CI must pass
- 🔒 Block direct pushes to main
- 🏢 Apply across org/enterprise

> 🎯 Stop manual gatekeeping; let rulesets enforce top-down.

## ★ PRs in the AI era

With AI shipping PRs en masse, some ask "are PRs still needed?" But to keep a repo understandable and safe, this gate is necessary.

- 🤖 Copilot auto-review catches issues early
- 📈 ~90M merges/month in 2026 (~2x)
- 👀 Humans approve, AI does the prep

> 💡 Guard the PR and go faster = Rulesets × Copilot.
