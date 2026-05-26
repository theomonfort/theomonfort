---
title: Dependabot
titleEn: Dependabot
summary: GitHub's official bot that monitors repository dependencies for vulnerabilities and opens automated fix PRs. Built on the dependency graph, it runs in three layers — Security alerts, Security updates, and Version updates. Free for public and private repos.
icon: 🤖
color: amber
order: 19.3
category: secure
related: ['github-advanced-security', 'github-actions']
links:
  - group: 📖 Official Documentation
    label: About Dependabot
    url: https://docs.github.com/en/code-security/dependabot
  - group: 📖 Official Documentation
    label: About the dependency graph
    url: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph
  - group: 📖 Official Documentation
    label: Supported package ecosystems
    url: https://docs.github.com/en/code-security/dependabot/ecosystems-supported-by-dependabot/supported-ecosystems-and-repositories
  - group: 📖 Official Documentation
    label: dependabot.yml configuration reference
    url: https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference
  - group: 📖 Official Documentation
    label: Configuring Dependabot security updates
    url: https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates
  - group: 📖 Official Documentation
    label: About dependency review
    url: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review
  - group: 📖 Official Documentation
    label: Configuring the dependency review action
    url: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action
  - group: 📖 Official Documentation
    label: actions/dependency-review-action (GitHub)
    url: https://github.com/actions/dependency-review-action
  - group: 📰 Recent Changelog
    label: "Expanded OIDC support for Dependabot and code scanning (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-expanded-oidc-support-for-dependabot-and-code-scanning
  - group: 📰 Recent Changelog
    label: "Cross-org Dependabot access for internal repositories (2026-05-11)"
    url: https://github.blog/changelog/2026-05-11-cross-org-dependabot-access-for-internal-repositories
  - group: 📰 Recent Changelog
    label: "Dependabot alerts are now assignable to AI agents for remediation (2026-04-07)"
    url: https://github.blog/changelog/2026-04-07-dependabot-alerts-are-now-assignable-to-ai-agents-for-remediation
  - group: 📰 Recent Changelog
    label: "Dependabot now detects malware in npm dependencies (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-dependabot-now-detects-malware-in-npm-dependencies
  - group: 📰 Recent Changelog
    label: "Dependabot alert assignees are now generally available (2026-03-03)"
    url: https://github.blog/changelog/2026-03-03-dependabot-alert-assignees-are-now-generally-available
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Dependabot</strong> is GitHub's official bot that monitors your repository's dependencies.
  </p>
  <p>
    When a vulnerability is found, it raises an <strong>alert</strong> and, when possible, <strong>automatically opens a fix PR</strong>. It also keeps stale dependencies regularly updated to newer versions.
  </p>
</div>

## Alerts vs Updates — what's the difference?

Dependabot has **3 distinct features**. They're often confused, but they serve different purposes.

| Feature | What does it do? | Trigger | Output |
| --- | --- | --- | --- |
| 🚨 **Security alerts** | Notifies you of vulnerabilities in existing dependencies | When a new CVE is added to the GitHub Advisory Database | Security tab + email |
| 🔧 **Security updates** | Automatically opens a PR to fix the vulnerability | When an alert fires (automatically) | PR (bumps vulnerable dep to fixed version) |
| ⏰ **Version updates** | Opens PRs to keep up with new versions regardless of vulnerability | Schedule defined in config file (daily / weekly) | PR (old → latest) |

> 🔑 **Alerts** = detection only; **Updates** = creates fix PRs. Security updates are layered on top of Alerts — they won't run without Alerts enabled.

## The role of the dependency graph

All of Dependabot's decisions start from the **dependency graph**.

- 🗂️ Parses manifests and lock files — reads dependency definitions from `package-lock.json`, `requirements.txt`, `go.mod`, `pom.xml`, `Gemfile.lock`, and more
- 🔄 Resolves both direct and transitive dependencies — even if you don't directly depend on `lodash`, it's tracked if a dependency pulls it in
- 📚 Cross-references the GitHub Advisory Database — matches detected dependencies against published CVEs to identify vulnerabilities
- 🛂 Supported ecosystems — npm, pip, Maven, NuGet, Composer, Bundler, Go modules, Cargo, Gradle, Hex, Pub, Docker, GitHub Actions, and more

> 🌍 The Advisory Database aggregates vulnerability data from GitHub, the community, and MITRE's CVE feeds.

## Getting started (fastest path)

**Step 1 — Enable security alerts / updates**

```
Repo → Settings → Code security
  ✅ Dependency graph
  ✅ Dependabot alerts
  ✅ Dependabot security updates
```

Just check three boxes. **No config file needed** — it starts working immediately.

**Step 2 — Add `.github/dependabot.yml` if you want version updates**

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "monthly"
```

- 📦 Specify the ecosystem with `package-ecosystem`
- 📅 `interval`: `daily` / `weekly` / `monthly`
- 🏷️ Use `groups` to batch multiple packages into a single PR, or `ignore` to exclude specific packages

**Step 3 — Enable for the whole Org / Enterprise**

From `Org → Settings → Code security`, use **default settings** to apply to all repositories at once.

## Companion: Dependency Review

**Dependency Review** is the **PR-time** companion to Dependabot. While Dependabot continuously watches your default branch for newly-published CVEs, Dependency Review shows a **rich diff of dependency changes on every pull request — on any base branch** — so a vulnerable or non-compliant dependency never gets merged in the first place.

| | Dependency Review | Dependabot alerts |
| --- | --- | --- |
| **When it runs** | On every PR (any base branch) | Continuously, as new CVEs land |
| **What it checks** | The dependency diff of the PR | Current state of the default branch |
| **Stops the merge?** | ✅ Yes (when set as a required check) | ❌ No (informational only) |
| **License compliance** | ✅ Allow / deny lists | ❌ N/A |

### What it catches

- 🚨 **Vulnerable packages** introduced or upgraded in the PR — configurable severity threshold (`fail-on-severity`)
- 📜 **License compliance** — allow / deny lists (e.g. block GPL-3.0 in a proprietary repo)
- 📦 **What changed** — added, removed, updated dependencies, including transitive ones resolved from lockfiles
- 🕰️ **Package age** and how many projects depend on it

### How to enable it

**Step 1 — Surface the PR diff** — Dependency Review activates automatically once the dependency graph is on (which Dependabot already requires). Open any PR that touches a manifest / lockfile → **Files changed** tab → expand the dependency diff.

**Step 2 — Enforce it via `actions/dependency-review-action`**

```yaml
# .github/workflows/dependency-review.yml
name: Dependency Review
on: [pull_request]
permissions:
  contents: read
  pull-requests: write
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/dependency-review-action@v4
        with:
          fail-on-severity: high
          deny-licenses: GPL-3.0, AGPL-3.0
          comment-summary-in-pr: always
```

Make it a **required status check** on protected branches so the PR can't merge until it passes. Org owners can enforce it across all repos via repository rulesets.

> ⚠️ **It's a PR-time gate, not a continuous watcher.** A dependency that was clean when it was merged can have a CVE published the next day — that's why you still need **Dependabot alerts + security updates** running underneath. Dependency Review prevents new problems from entering; Dependabot fixes the ones that emerge later.

> 💰 Free for public repos. Private repos need **GitHub Code Security** (or the legacy Advanced Security bundle).

## Eligibility and pricing

| Feature | Public repo | Private repo (Personal / Free) | Private repo (Team / Enterprise) |
| --- | :---: | :---: | :---: |
| Dependency graph | ✅ On by default | ✅ Free (opt-in) | ✅ Free |
| Dependabot alerts | ✅ Free | ✅ Free | ✅ Free |
| Dependabot security updates | ✅ Free | ✅ Free | ✅ Free |
| Dependabot version updates | ✅ Free | ✅ Free | ✅ Free |

> 💰 Dependabot itself is **completely free on every plan**. No GitHub Advanced Security license required.  
> ⚙️ Version update Dependabot jobs run on GitHub-hosted runners — free for public repos; private repos consume the standard Actions free tier (pay-as-you-go when exceeded).
