---
title: Dependabot
titleEn: Dependabot
summary: GitHub's official bot that monitors repository dependencies for vulnerabilities and opens automated fix PRs. Built on the dependency graph, it runs in three layers — Security alerts, Security updates, and Version updates. Free for public and private repos.
icon: /theomonfort/icons/dependabot.png
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
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
  - group: 📖 Official Documentation
    label: About Dependabot auto-triage rules
    url: https://docs.github.com/en/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules
  - group: 📖 Official Documentation
    label: Malware alerts for Dependabot
    url: https://gh.io/dependabot-malware
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
| 🚨 **Security alerts** | Notifies you of vulnerabilities in existing dependencies (incl. opt-in [npm malware alerts ↗](https://gh.io/dependabot-malware)) | When a new CVE is added to the GitHub Advisory Database | Security tab + email |
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

**Dependency Review** is the **PR-time** counterpart to Dependabot — it blocks merges before bad dependencies get in. Runs on every PR, **on any base branch** (not just `main`).

| | Dependency Review | Dependabot alerts |
| --- | --- | --- |
| **When** | Every PR (any branch) | Continuously, as CVEs land |
| **Stops the merge?** | ✅ Yes (required check) | ❌ Informational only |
| **License check** | ✅ allow / deny lists | ❌ N/A |

- 🚨 **Vulnerable packages** added or upgraded by the PR — configurable `fail-on-severity`
- 📜 **License compliance** — allow / deny lists (e.g. deny `GPL-3.0` in a proprietary repo)
- 📦 **Full dep diff** incl. transitive deps resolved from lockfiles

Drop in [`actions/dependency-review-action`](https://github.com/actions/dependency-review-action) and make it a **required status check**; org owners can enforce it across all repos via repository rulesets.

> ⚠️ **PR-time gate — not a continuous watcher.** Always pair it with **Dependabot alerts**, which catch CVEs published *after* merge.

## AI triage: assign alerts to an agent

Every Dependabot alert has an **"Assign to agent"** button — hand it to Copilot / Claude / Codex and the agent reads the advisory + your repo to **triage and remediate** on demand, per alert.

- 🔍 **What the agent typically does** — reachability check ("is the vulnerable function actually called from my code path?"), exploitability assessment in your context, then a **draft fix PR** that handles breaking changes, downgrades, and refactors
- 🏁 **Race multiple agents** on the same alert and compare the resulting PRs
- 🧹 **Auto-triage rules** — separately, auto-dismiss / snooze low-impact alerts by **severity, ecosystem, dependency scope (runtime vs dev)** so the agents only see alerts worth looking at
- 👀 Treat agent fixes as **first-pass**: human review + tests still required before merge

> 🎯 Alert → *Assign to agent* → reachability + fix → draft PR → human review → merge. The bottleneck shifts from patch synthesis to approval.

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
