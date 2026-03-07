---
title: Dependabot
layout: default
parent: GHAS
nav_order: 3
---

# Dependabot

📖 **Official docs**: [About Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)

## What Dependabot Does

Dependabot is GitHub's **automated dependency management** system. It handles three distinct functions:

- **Dependabot alerts** — notifies you when a dependency has a known vulnerability
- **Dependabot security updates** — automatically opens PRs to fix vulnerable dependencies
- **Dependabot version updates** — keeps all dependencies up to date, not just vulnerable ones

Together, these three features give you continuous visibility and automated remediation for your supply chain.

## Dependabot Alerts

When the GitHub Advisory Database adds a new vulnerability, Dependabot checks your **dependency graph** and creates an alert if you're affected.

### How Alerts Are Triggered

1. A new CVE or GHSA is published
2. GitHub matches the affected package and version range against your lockfile
3. An alert is created with severity, advisory details, and affected files

### Severity Levels

| Severity | CVSS Score | Action |
|----------|-----------|--------|
| **Critical** | 9.0 – 10.0 | Immediate remediation |
| **High** | 7.0 – 8.9 | Remediate within days |
| **Medium** | 4.0 – 6.9 | Plan for upcoming sprint |
| **Low** | 0.1 – 3.9 | Address at convenience |

### Auto-Dismissal

Dependabot can **automatically dismiss** alerts that don't apply to your codebase — for example, when a vulnerable function is never called in your code, or when the dependency is only used in development. This reduces alert fatigue significantly.

## Dependabot Security Updates

When a Dependabot alert has a **patched version available**, Dependabot automatically opens a pull request to bump the dependency to the safe version.

- The PR includes a **changelog**, **release notes**, **commit diff**, and **compatibility score**
- If your CI passes, the fix is ready to merge
- Security updates target the **minimum safe version** — the smallest bump that resolves the vulnerability

Enable in **Settings → Code security → Dependabot security updates**.

## Dependabot Version Updates

Version updates go beyond security — they keep **all dependencies fresh** by regularly checking for new releases and opening PRs.

### Configuration — `dependabot.yml`

Create `.github/dependabot.yml` in your repository:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "09:00"
      timezone: "Asia/Tokyo"
    open-pull-requests-limit: 10
    reviewers: ["theomonfort"]
    labels: ["dependencies", "automated"]

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      actions-minor:
        update-types: ["minor", "patch"]

  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
```

### Scheduling Strategies

| Interval | Best For |
|----------|----------|
| **Daily** | Security-critical applications, actively developed projects |
| **Weekly** | Most repositories — good balance of freshness and noise |
| **Monthly** | Stable projects with infrequent releases |

### Grouped Version Updates

Grouping reduces PR noise by **bundling related updates** into a single pull request:

```yaml
groups:
  production-dependencies:
    dependency-type: "production"
    update-types: ["minor", "patch"]
  dev-dependencies:
    dependency-type: "development"
    update-types: ["minor", "patch"]
  aws-sdk:
    patterns: ["@aws-sdk/*"]
```

Instead of 20 individual PRs, you might get 3 grouped PRs — much easier to review and merge.

> 💡 **Theo's Tip**: Group aggressively for development dependencies. A single PR that bumps all your dev deps (linters, test frameworks, build tools) is easier to review than ten separate ones. If CI passes, merge it.

## Supported Ecosystems

| Ecosystem | Manifest File | Lockfile |
|-----------|--------------|----------|
| **npm** | `package.json` | `package-lock.json`, `yarn.lock` |
| **pip** | `requirements.txt`, `setup.py` | `Pipfile.lock` |
| **Maven** | `pom.xml` | — |
| **Gradle** | `build.gradle` | — |
| **NuGet** | `.csproj`, `packages.config` | `packages.lock.json` |
| **Go** | `go.mod` | `go.sum` |
| **Cargo** | `Cargo.toml` | `Cargo.lock` |
| **Composer** | `composer.json` | `composer.lock` |
| **RubyGems** | `Gemfile` | `Gemfile.lock` |
| **GitHub Actions** | `.yml` workflows | — |
| **Docker** | `Dockerfile` | — |
| **Terraform** | `*.tf` | `.terraform.lock.hcl` |

## Dependency Graph

The dependency graph is the **foundation** of all Dependabot features. It maps every direct and transitive dependency in your repository.

- Automatically generated from manifest and lockfiles
- Includes **transitive dependencies** — vulnerabilities deep in the tree are surfaced
- Viewable under **Insights → Dependency graph**
- Supports SBOM export in SPDX format for compliance

## Dependency Review Action

Block vulnerable or unwanted dependencies **before they're merged** by adding the dependency review action to your CI:

```yaml
name: Dependency Review
on: pull_request
permissions:
  contents: read
jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/dependency-review-action@v4
        with:
          fail-on-severity: high
          deny-licenses: GPL-3.0, AGPL-3.0
          comment-summary-in-pr: always
```

This checks every PR for new dependencies with known vulnerabilities and denied licenses, adding a summary comment with findings.

> 💡 **Theo's Tip**: The `deny-licenses` option is underrated. Add it early — discovering a GPL dependency deep in your dependency tree right before a release is painful. Catch it at PR time.

## Dependabot Alert Assignees

Assign Dependabot alerts to **specific team members** automatically based on `CODEOWNERS` or custom rules. This ensures alerts don't sit unowned in the backlog.

Configure in **Settings → Code security → Dependabot** to automatically assign alerts to the team or individuals responsible for the affected code.

## Auto-Merge for Dependabot PRs

Automate the merge of low-risk Dependabot PRs with GitHub's auto-merge feature and branch protection:

```yaml
name: Auto-merge Dependabot PRs
on: pull_request
permissions:
  contents: write
  pull-requests: write
jobs:
  auto-merge:
    runs-on: ubuntu-latest
    if: github.actor == 'dependabot[bot]'
    steps:
      - id: metadata
        uses: dependabot/fetch-metadata@v2
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - if: steps.metadata.outputs.update-type == 'version-update:semver-patch'
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This workflow auto-merges **patch-level** updates after CI passes. For minor or major bumps, manual review is still required.

> 💡 **Theo's Tip**: Start by auto-merging only patch updates for development dependencies. Once you're confident in your test suite, expand to minor updates and production dependencies. The key is having CI you trust.

## Private Registry Support

Dependabot can authenticate with private registries for internal packages. Add a `registries` block to your `dependabot.yml` and reference it in the ecosystem entry:

```yaml
registries:
  npm-private:
    type: npm-registry
    url: https://npm.myorg.com
    token: ${{ secrets.NPM_PRIVATE_TOKEN }}

updates:
  - package-ecosystem: "npm"
    directory: "/"
    registries: ["npm-private"]
    schedule:
      interval: "weekly"
```

Supported private registry types: **npm**, **Maven**, **PyPI**, **NuGet**, **Docker**, **RubyGems**, **Hex**, **Composer**.

## Managing Dependency Update Fatigue — Theo's Tips

| Strategy | How |
|----------|-----|
| **Group updates** | Bundle related PRs to reduce count |
| **Auto-merge patches** | Let CI gate patch-level bumps |
| **Set `open-pull-requests-limit`** | Cap concurrent Dependabot PRs (default: 5) |
| **Ignore major versions** | Pin major versions you're not ready to upgrade |
| **Use `ignore` rules** | Skip packages you maintain manually |
| **Review weekly, not daily** | Batch your Dependabot PR review into a weekly routine |

```yaml
- package-ecosystem: "npm"
  directory: "/"
  schedule:
    interval: "weekly"
  open-pull-requests-limit: 5
  ignore:
    - dependency-name: "react"
      update-types: ["version-update:semver-major"]
```

> 💡 **Theo's Tip**: Treat Dependabot PRs like a weekly chore, not a daily interrupt. Set updates to weekly, group aggressively, auto-merge patches, and review everything else in a dedicated 30-minute block. This turns dependency management from a constant distraction into a manageable routine.

> 💡 **Theo's Tip**: Always keep `github-actions` as a separate ecosystem entry in your `dependabot.yml`. Action version updates are almost always safe and fast to review — and outdated actions are a real supply chain risk. Group minor and patch updates, and auto-merge them.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
