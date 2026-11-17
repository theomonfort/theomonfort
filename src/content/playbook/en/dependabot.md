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
  hex: "#5eead4"
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

Dependabot has **3 distinct features**.

| Feature | What does it do? | Trigger | Output |
| --- | --- | --- | --- |
| 🚨 **Security alerts** | Vulnerabilities in existing dependencies; opt-in [npm malware alerts ↗](https://gh.io/dependabot-malware) | New CVE in GitHub Advisory Database | Security tab + email |
| 🔧 **Security updates** | Automatically opens a PR to a fixed version | Alert | Fix PR |
| ⏰ **Version updates** | Updates regardless of vulnerability | Configured schedule (daily / weekly) | PR (old → latest) |

> 🔑 **Alerts** = detection only; **Updates** = creates fix PRs. Security updates are layered on top of Alerts — they won't run without Alerts enabled.

## The role of the dependency graph

Dependabot starts from the **dependency graph**.

- 🗂️ Parses manifests and lock files, including `package-lock.json`, `requirements.txt`, `go.mod`, `pom.xml` and `Gemfile.lock`.
- 🔄 Resolves direct and transitive dependencies, such as `lodash` pulled in by another package.
- 📚 Matches dependencies to published CVEs in the GitHub Advisory Database.
- 🛂 Ecosystems include npm, pip, Maven, NuGet, Composer, Bundler, Go, Cargo, Gradle, Hex, Pub, Docker and GitHub Actions.

> 🌍 The Advisory Database aggregates vulnerability data from GitHub, the community, and MITRE's CVE feeds.

## Getting started (fastest path)

<div class="dependency-start">
<div>

**Step 1 — Security alerts / updates**

In `Repo → Settings → Code security`, enable the dependency graph, Dependabot alerts and security updates. **No config file needed.**

**Step 3 — Roll out**

Use **default settings** in `Org → Settings → Code security` for all repositories.

Version updates support `daily`, `weekly` or `monthly` schedules. Use `groups` to batch PRs or `ignore` to exclude packages.

</div>
<div>

**Step 2 — Version updates**

Add `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule: { interval: "weekly" }
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule: { interval: "monthly" }
```

</div>
</div>

## Companion: Dependency Review <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Dependency Review** gates PRs before bad dependencies enter, on **any base branch**.

| | Dependency Review | Dependabot alerts |
| --- | --- | --- |
| **When** | Every PR (any branch) | Continuously, as CVEs land |
| **Stops the merge?** | ✅ Yes (required check) | ❌ Informational only |
| **License check** | ✅ allow / deny lists | ❌ N/A |

- 🚨 Vulnerable packages: configure `fail-on-severity`.
- 📜 License allow / deny lists, e.g. deny `GPL-3.0` in proprietary repos.
- 📦 Dependency diff includes transitive dependencies from lockfiles.

Make [`actions/dependency-review-action`](https://github.com/actions/dependency-review-action) a **required check**; org owners can enforce it with rulesets. Pair with alerts for CVEs published **after merge**.

## Open source license compliance <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**GA since 2026-10-16.** Govern dependency licenses before merge, alongside Dependabot.

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
<p>Remove or replace the dependency, change policy, or <b>request an exception from the PR violation</b> with a justification. An annotation does not create a request.</p>
<p>An <b>Enterprise Open-Source License Manager</b> receives it in enterprise security views and by email, then approves or rejects it. Approval covers a package, license or package pattern at repository or enterprise scope. Other merge checks still apply.</p>
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

**Assign to agent** hands an alert to Copilot / Claude / Codex for on-demand triage and remediation using the advisory and repository.

- 🔍 Check reachability and contextual exploitability; propose a **draft fix PR**, including breaking changes, downgrades or refactors.
- 🏁 Race multiple agents and compare PRs.
- 🧹 Separate **auto-triage rules** dismiss / snooze low-impact alerts by severity, ecosystem or runtime / dev scope.
- 👀 Human review and tests remain required.

Public: free. Private: **Code Security** (or legacy Advanced Security).

## <span class="dependency-feature-title">Reachability analysis</span> <span class="dependency-feature-links"><a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/about-reachability-analysis-for-dependabot-alerts" target="_blank" rel="noopener noreferrer">📖 Docs</a><a class="dependency-announcement" href="https://github.blog/changelog/2026-10-28-prioritize-dependabot-alerts-with-reachability-analysis" target="_blank" rel="noopener noreferrer">Announcement ↗</a></span>

<div class="dependency-feature">
<p class="dependency-meta"><span class="dependency-preview">Public preview</span><span>Enterprise Cloud, including data residency</span><span>Free during preview</span></p>
<p class="dependency-lead">Prioritize <b>Dependabot alerts</b> using call paths to vulnerable functions.</p>
<div class="dependency-flow"><span>Your code<br>+ dependencies</span><b aria-hidden="true">→</b><b>CodeQL<br>+ advisory data</b><b aria-hidden="true">→</b><span>Verdict + call-path evidence</span></div>
<div class="dependency-panels">
<div class="dependency-panel">
<h3>Read the verdict</h3>
<dl class="dependency-facts">
<div><dt>Reachable</dt><dd>Prioritize.</dd></div>
<div><dt>Potentially reachable</dt><dd>Prioritize too.</dd></div>
<div><dt>Unreachable</dt><dd>Lower priority.</dd></div>
<div><dt>Reachability unavailable</dt><dd>No verdict.</dd></div>
</dl>
<p class="dependency-note">Reachability is not exploitability. Alerts are not automatically closed or dismissed.</p>
</div>
<div class="dependency-panel">
<h3>Enable, then prioritize</h3>
<ul class="dependency-setup">
<li><b>Scope:</b> <span>JavaScript / TypeScript with an npm, pnpm or Yarn lockfile.</span></li>
<li><b>Enable:</b> <span>Turn on alerts, then reachability (off by default).</span></li>
<li><b>Runs:</b> <span>GitHub-hosted only. Initial + daily scans, not on push.</span></li>
</ul>
<p class="dependency-note">No GHAS license or Actions charges.</p>
</div>
</div>
</div>

## <span class="dependency-feature-title">Package firewall</span> <span class="dependency-feature-links"><a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall" target="_blank" rel="noopener noreferrer">📖 Docs</a><a class="dependency-announcement" href="https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview" target="_blank" rel="noopener noreferrer">Announcement ↗</a><a class="dependency-announcement" href="https://github.com/enterprises/octodemo/settings/policies/package_firewall" target="_blank" rel="noopener noreferrer">Demo ↗</a></span>

<div class="dependency-feature">
<p class="dependency-meta"><span class="dependency-preview">Public preview</span><span>Enterprise Cloud, including data residency</span><span>Free during preview</span></p>
<p class="dependency-lead">Block risky <b>npm downloads</b> before developers, agents or CI install them.</p>
<div class="dependency-flow"><span>Developer / agent / CI</span><b aria-hidden="true">→</b><b>Package firewall<br>Allow / block requests</b><b aria-hidden="true">→</b><span>npm registry</span></div>
<div class="dependency-panels">
<div class="dependency-panel">
<h3>Enterprise policy checks</h3>
<dl class="dependency-facts dependency-policy">
<div><dt>Advisories</dt><dd>Malware + vulnerability threshold.</dd></div>
<div><dt>Cooldown</dt><dd>Minimum version age.</dd></div>
<div><dt>Supply chain</dt><dd>Lost SLSA attestations + new install scripts.</dd></div>
</dl>
<p class="dependency-note">Dependabot still monitors dependencies already in the repository.</p>
</div>
<div class="dependency-panel">
<h3>Connect, then enforce</h3>
<ul class="dependency-setup">
<li><b>Set policy:</b> <span>Enterprise admin / security manager.</span></li>
<li><b>Connect:</b> <span>npm only: firewall registry URL + enterprise-member token on each endpoint.</span></li>
<li><b>Exceptions:</b> <span>Use the block-message link to request approval.</span></li>
</ul>
<p class="dependency-note">Only routed requests are checked. Policy does not reroute clients.</p>
</div>
</div>
</div>

## <span class="dependency-feature-title">Package firewall: architecture</span> <span class="dependency-feature-links"><a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-artifactory" target="_blank" rel="noopener noreferrer">📖 Docs</a></span>

<div class="dependency-feature dependency-architecture">
<p class="dependency-lead">An artifact manager is <b>not required</b>.</p>
<div class="dependency-route-block">
<div class="dependency-route-heading"><h3>01 / Direct connection</h3></div>
<div class="dependency-route-flow" role="img" aria-label="Developer, agent or CI requests go directly through GitHub package firewall to the npm registry.">
<span class="dependency-route-node"><span>Developer<br>/ agent / CI</span></span>
<span class="dependency-route-arrow dependency-route-arrow-long" aria-hidden="true"></span>
<span class="dependency-route-node is-firewall"><strong>GitHub<br>package firewall</strong></span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node"><span>npm<br>registry</span></span>
</div>
</div>
<div class="dependency-route-block">
<div class="dependency-route-heading"><h3>02 / Optional Artifactory</h3><span class="dependency-route-status">Experimental integration</span></div>
<div class="dependency-route-flow" role="img" aria-label="Developer, agent or CI requests go through optional Artifactory, then GitHub package firewall, then the npm registry.">
<span class="dependency-route-node"><span>Developer<br>/ agent / CI</span></span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node">Artifactory</span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node is-firewall"><strong>GitHub<br>package firewall</strong></span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node"><span>npm<br>registry</span></span>
</div>
</div>
<p class="dependency-note">Both paths must route public npm requests through the firewall.</p>
</div>

## Eligibility and pricing <a class="h2-doc" href="https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Core Dependabot is **free on every plan**. Code Security premium features cost extra.

| Feature | Public | Private: Personal / Free | Private: Team / Enterprise |
| --- | :---: | :---: | :---: |
| Dependency graph | ✅ On by default | ✅ Free (opt-in) | ✅ Free |
| Dependabot alerts (incl. malware) | ✅ Free | ✅ Free | ✅ Free |
| Dependabot security updates | ✅ Free | ✅ Free | ✅ Free |
| Dependabot version updates | ✅ Free | ✅ Free | ✅ Free |
| Custom auto-triage rules | ✅ Free | ❌ | 💰 Code Security |

License compliance: **Enterprise Cloud + Code Security**, even for public repos. Assign to agent: **Code Security + Copilot** with coding agent.

Standard / self-hosted runners use **no Actions minutes**; larger runners are billed.
