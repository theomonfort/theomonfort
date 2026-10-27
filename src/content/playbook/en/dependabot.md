---
title: Dependabot
titleEn: Dependabot
summary: GitHub's official bot that monitors repository dependencies for vulnerabilities and opens automated fix PRs. Built on the dependency graph, it runs in three layers — Security alerts, Security updates, and Version updates. Free for public and private repos.
icon: /theomonfort/icons/dependabot.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.7
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
    label: Open source license compliance
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance
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
    label: "Open source license compliance GA (2026-10-16)"
    url: https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available/
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

## Companion: Dependency Review <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review" target="_blank" rel="noopener noreferrer">📖 Docs</a>

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

## Open source license compliance <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**GA since 2026-10-16.** A companion to Dependabot: govern dependency licenses before merge, not just vulnerabilities.

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📜</span><span class="ctl-name">Central policy</span><span class="ctl-when">Beyond the Action</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Unlike the Dependency Review Action's allow / deny lists, define allowed licenses once in the <b>enterprise policy</b>. Apply it through branch rulesets at enterprise, organization, or repository scope.</p>
<p>In <b>Repo → Settings → License policy</b>, inherited entries are read-only. Approved exceptions can apply only to that repository; local entries can be removed without changing the enterprise policy.</p>
</div>
</details>
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">💰</span><span class="ctl-name">Access</span><span class="ctl-when">Enterprise + Code Security</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p><b>Enterprise Cloud + Code Security</b> is required, including on public repositories. The combined <b>GHAS</b> license includes Code Security; Secret Protection alone is not enough. Data residency is supported.</p>
<p><b>Dependency graph must be enabled.</b> Dependabot alerts and automatic updates are not prerequisites. Viewing dependency licenses and exporting an SBOM do not require GHAS.</p>
<p>By contrast, the Dependency Review Action is <b>free on public repositories</b>; private repositories require Code Security.</p>
</div>
</details>
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">Enforcement</span><span class="ctl-when">Evaluate / Active</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Enable <b>Require license compliance results before merging</b> in a branch ruleset. <b>Active</b> blocks the merge, not PR creation, when dependency changes violate policy.</p>
<p><b>Evaluate</b> runs checks and annotates without directly blocking, but branch protection requiring conversation resolution can still block on annotations.</p>
</div>
</details>
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">✅</span><span class="ctl-name">Resolve violations</span><span class="ctl-when">Approved exceptions</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Remove or replace the dependency, amend the policy, or <b>request an exception from the PR's license violation</b> and provide a justification. An annotation does not automatically create a request.</p>
<p>An <b>Enterprise Open-Source License Manager</b> receives the request in enterprise security views and by email, then approves or rejects it. Approval can cover a package, license, or package pattern at repository or enterprise scope. Other merge checks still apply.</p>
<p><a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-license-policies" target="_blank" rel="noopener noreferrer">Policy and exception setup ↗</a></p>
</div>
</details>
</div>
</div>

**Scope:** new or changed PR dependencies, including detected transitive dependencies. Not a copied-code or binary scanner. Existing dependencies need a separate audit.

<p><b>Demo:</b> <a class="retro-link" href="https://github.com/enterprises/octodemo/settings/advanced_security/license_policy/default" target="_blank" rel="noopener noreferrer">octodemo → Central license policy ↗</a> / <a class="retro-link" href="https://github.com/enterprises/octodemo/security/bypass-requests/license-compliance?request_status=open" target="_blank" rel="noopener noreferrer">Open exception requests ↗</a></p>

## License checks: existing vs new <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| Scope | Check | Result / limit |
| --- | --- | --- |
| **New / updated dependencies** | License-compliance ruleset | **Active** blocks noncompliant merges. |
| **Existing dependencies** | <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom" target="_blank" rel="noopener noreferrer">SBOM ↗</a> → <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/rest/dependency-graph/license-compliance#check-license-compliance-for-packages" target="_blank" rel="noopener noreferrer">Package-check API ↗</a> | Explicit audit, no automatic rescan. |
| **Copied / legacy code** | <a class="retro-link" href="https://www.blackduck.com/software-composition-analysis-tools/black-duck-sca.html" target="_blank" rel="noopener noreferrer">Black Duck: snippets ↗</a><br/><a class="retro-link" href="https://scancode-toolkit.readthedocs.io/en/stable/explanation/scancode-license-detection.html" target="_blank" rel="noopener noreferrer">ScanCode: notices ↗</a> | Scan files, **new or old**. |

<p><b>Demo:</b> <a class="retro-link" href="https://github.com/theomonfort-org/ghas-test-1/network/dependencies" target="_blank" rel="noopener noreferrer">ghas-test-1 → Export SBOM ↗</a></p>

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="license-check-methods">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">Audit existing dependencies</span><span class="ctl-when">SBOM → API</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Open <b>Repo → Insights → Dependency graph → Export SBOM</b>. In the SPDX JSON, dependency licenses appear in <code>packages[].licenseConcluded</code>, when known. <code>dataLicense</code> describes the SBOM document, not its packages.</p>
<p>Extract package URLs (PURLs) from <code>packages[].externalRefs</code> entries with <code>referenceType: "purl"</code>, then send them as <code>purls</code> to <code>POST /repos/{owner}/{repo}/license-compliance/package-checks</code>. It checks the repository's effective policy, including exceptions. Limit: <b>40 PURLs per request</b> (as of 2026-10-27). Enabling a ruleset does not automatically run this audit on existing dependencies.</p>
<p><code>NOASSERTION</code> or missing license data means <b>unknown</b>, not approved or license-free. The package API checks dependencies, not source-code snippets, and can also help agents check packages before adding them.</p>
</div>
</details>
<details class="ctl-item" name="license-check-methods">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔎</span><span class="ctl-name">Source-code coverage</span><span class="ctl-when">Dedicated scanners</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>For an existing codebase or manually copied new code, use a dedicated scanner: <b>Black Duck's snippet-scanning capability</b> identifies partial open-source matches; <b>ScanCode</b> detects license texts, notices, and copyright statements in files. These tools are separate from Code Security. Their detection methods are different, not interchangeable guarantees. Review findings and applicable obligations.</p>
</div>
</details>
</div>
</div>

## AI triage: assign alerts to an agent

Every Dependabot alert has an **"Assign to agent"** button — hand it to Copilot / Claude / Codex and the agent reads the advisory + your repo to **triage and remediate** on demand, per alert.

- 🔍 **What the agent typically does** — reachability check ("is the vulnerable function actually called from my code path?"), exploitability assessment in your context, then a **draft fix PR** that handles breaking changes, downgrades, and refactors
- 🏁 **Race multiple agents** on the same alert and compare the resulting PRs
- 🧹 **Auto-triage rules** — separately, auto-dismiss / snooze low-impact alerts by **severity, ecosystem, dependency scope (runtime vs dev)** so the agents only see alerts worth looking at
- 👀 Treat agent fixes as **first-pass**: human review + tests still required before merge

> 🎯 Alert → *Assign to agent* → reachability + fix → draft PR → human review → merge. The bottleneck shifts from patch synthesis to approval.

> 💰 Free for public repos. Private repos need **GitHub Code Security** (or the legacy Advanced Security bundle).

## Eligibility and pricing <a class="h2-doc" href="https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Core Dependabot is **free on every plan**. Only Code Security premium features cost extra.

| Feature | Public repo | Private repo (Personal / Free) | Private repo (Team / Enterprise) |
| --- | :---: | :---: | :---: |
| Dependency graph | ✅ On by default | ✅ Free (opt-in) | ✅ Free |
| Dependabot alerts (incl. malware) | ✅ Free | ✅ Free | ✅ Free |
| Dependabot security updates | ✅ Free | ✅ Free | ✅ Free |
| Dependabot version updates | ✅ Free | ✅ Free | ✅ Free |
| Custom auto-triage rules | ✅ Free | ❌ | 💰 Code Security |

**Enterprise license compliance is not part of free Dependabot**: it requires Enterprise Cloud + Code Security, including for public repositories.

> ⚙️ On standard or self-hosted runners, jobs **don't use Actions minutes**. Only larger runners are billed.  
> 🤖 Assign to agent needs **Code Security** + a **Copilot plan** with coding agent.
