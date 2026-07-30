---
title: Secret Scanning
titleEn: Secret Scanning
summary: GitHub's secret detection feature that automatically finds API keys and tokens in commits, issues, PRs, and history. Core coverage is free for public repositories; private and internal repositories require Secret Protection.
icon: /theomonfort/icons/secret-scanning.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.6
category: secure
related: ['dependabot', 'github-advanced-security']
links:
  - group: 📖 Official Documentation
    label: About secret scanning
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning
  - group: 📖 Official Documentation
    label: About push protection
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection
  - group: 📖 Official Documentation
    label: Supported secrets (provider patterns)
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns
  - group: 📖 Official Documentation
    label: Defining custom patterns
    url: https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning
  - group: 📖 Official Documentation
    label: Enabling secret scanning for your repo
    url: https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository
  - group: 📖 Official Documentation
    label: Public monitoring
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring
  - group: 📖 Official Documentation
    label: About GitHub Advanced Security products
    url: https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security
  - group: 📰 Recent Changelog
    label: "Secret scanning public monitoring for enterprises (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises/
  - group: 📰 Recent Changelog
    label: "Secret scanning with GitHub MCP Server is now GA (2026-05-05)"
    url: https://github.blog/changelog/2026-05-05-secret-scanning-with-github-mcp-server-is-now-generally-available
  - group: 📰 Recent Changelog
    label: "Secret scanning pattern updates and product improvements (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-secret-scanning-pattern-updates-and-product-improvements
  - group: 📰 Recent Changelog
    label: "Secret scanning in AI coding agents via the GitHub MCP Server (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-secret-scanning-in-ai-coding-agents-via-the-github-mcp-server
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Secret Scanning</strong> is GitHub's detection feature that automatically finds API keys, tokens, and connection strings lurking in your repository.
  </p>
  <p>
    Secrets already committed get an <strong>alert</strong>; secrets about to be committed are blocked at `git push` time by <strong>Push protection</strong>. Stopping leaks before they happen is the core strategy.
  </p>
</div>

## Detection vs Push protection — what's the difference?

Secret Scanning has two core controls: **detection** and **Push protection**. Validity checks help prioritize detected leaks.

| Feature | When does it run? | What does it do? | Scope |
| --- | --- | --- | --- |
| 🔍 **Secret scanning alerts** | After commit (including history, continuously) | Notifies you of detected secrets in the Security tab | Commit history, Issues, PRs, descriptions, Wikis |
| 🛡️ **Push protection** | Right before `git push` | Rejects pushes containing secrets (bypass is possible) | Incoming changes only |
| ✅ **Validity checks** | When an alert fires | Asks the provider API whether the secret is still active | Select supported providers (AWS, GitHub, Slack, and others) |

> 🔑 **Alerts** = find secrets already in the repo; **Push protection** = prevent them from getting in at all. Push protection is the most effective measure (no history rewriting needed).

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning" target="_blank" rel="noopener noreferrer">About secret scanning ↗</a> · <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection" target="_blank" rel="noopener noreferrer">About push protection ↗</a>

## What gets detected

- 🏷️ **Provider patterns** — Regex patterns registered by 200+ partners including AWS, Azure, GCP, Stripe, Slack, OpenAI, and GitHub PATs. Extremely low false-positive rate
- 🧪 **Generic patterns** — Private keys, connection strings, HTTP basic auth, and other generic formats. Requires Secret Protection / GHAS
- 🤖 **AI-detected secrets** — Uses AI to detect unstructured secrets such as passwords. Requires Secret Protection / GHAS
- 🛠️ **Custom patterns** — Define regexes for proprietary token formats. Requires Secret Protection / GHAS, including for public repositories
- 📚 Scope — Not just code: Issues, PRs, commit messages, descriptions, Wikis, and Gists are all scanned

> 🤖 Generic secrets and AI detection tend to produce more false positives. Pairing them with **Push protection** means things get stopped at the moment someone tries to commit them — much easier to operate.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns" target="_blank" rel="noopener noreferrer">Supported secrets (provider patterns) ↗</a> · <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning" target="_blank" rel="noopener noreferrer">Defining custom patterns ↗</a>

## Response flow when a secret is exposed

When a secret is found, **remediation matters more than detection**.

1. 🚨 **Rotate / revoke immediately** — removing it from the repository is not enough (it remains in history and in other people's clones)
2. 📣 GitHub notifies you — providers enrolled in the partner program may automatically invalidate the secret (AWS, GitHub PATs, and others)
3. 🧹 Close the alert — mark it as `Revoked`, `False positive`, or `Used in tests`
4. 🛡️ Enable Push protection to prevent recurrence

## Getting started (fastest path)

**Step 1 — Enable Push protection (highest priority first)**

```
Repo → Settings → Code security
  ✅ Secret scanning
  ✅ Push protection
```

Repo-level push protection is **on by default and free for public repositories**. Private and internal repositories require Secret Protection / GHAS. User-level push protection is also free, but it only protects pushes to public repositories.

**Step 2 — Scan for existing leaks**

Once enabled, past commit history is automatically scanned. Alerts will appear in the Security tab — work through them from the top, rotating each secret.

**Step 3 — Add custom patterns**

```
Repo or Org → Settings → Code security → Secret scanning → Custom patterns
```

Register your own token format with a regex. Custom patterns require Secret Protection / GHAS for both public and private repositories. Use the dry-run feature to check for false positives before going live.

**Step 4 — Enable org-wide / enterprise-wide**

Use **default settings** in `Org → Settings → Code security` to apply to new and existing repositories at once.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository" target="_blank" rel="noopener noreferrer">Enabling secret scanning for your repo ↗</a>

## Availability by product

<table class="availability-table">
<thead>
<tr>
<th>Feature</th>
<th>Public repo</th>
<th>Private / internal<br>without product</th>
<th>Secret Protection / GHAS</th>
</tr>
</thead>
<tbody>
<tr><td>Secret scanning alerts</td><td>✅ Free</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Push protection (repo / org)</td><td>✅ Free</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Validity checks</td><td>❌</td><td>❌</td><td>✅ Supported providers</td></tr>
<tr><td>Generic patterns</td><td>❌</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Custom patterns</td><td>❌</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>AI-detected secrets</td><td>❌</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Public monitoring</td><td>❌</td><td>❌</td><td>✅ GHEC Enterprise</td></tr>
</tbody>
</table>

> 🆓 **User push protection** is free and enabled by default on all plans, but only covers pushes to public repositories. **Partner alerts** also notify providers only about leaks in public repositories and public npm packages.
>
> 💰 Generic, custom, and AI detection, validity checks, and private / internal repository coverage require **Secret Protection or a legacy GHAS license**. **Public monitoring** is an enterprise-wide feature for GHEC Enterprise.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">Advanced Security products ↗</a> / <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Public monitoring ↗</a>

## Public monitoring (NEW)

GitHub **monitors the entire public surface of github.com in real time** and attributes leaked secrets back to your enterprise. It catches secrets leaked *outside* your own repos — personal forks, open source projects, tokens pasted into public issues / PRs / discussions.

- 🌐 Scans **public content only** (git, PR comments, issues, discussions); it **never scans private repos**
- ⚡ Real-time monitoring, with native platform metadata for accurate attribution
- 🧩 Works out of the box — enable it to see recent existing findings and future leaks

**Two attribution methods:**

| Method | What it checks | Catches |
| --- | --- | --- |
| 👤 Member-based | Committer's account is an enterprise member | Leaks from managed accounts & known members |
| 🌐 Verified domain match | Committer's email is on a verified domain | Leaks from personal accounts using a work email (even if unlinked / email private) |

> ⚙️ Enable: enterprise owners / security managers from the **Security tab**. GHEC with Secret Protection or Advanced Security (public preview, no extra cost; data residency coming soon). <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Public monitoring ↗</a>

## Secret Risk Assessment (free inventory scan)

<div class="hero-quote">
  <p>
    <strong>Secret Risk Assessment</strong> performs a one-time scan of every repository in your org (public, private, internal, and archived) to make visible "what secrets are hiding and where."
  </p>
  <p>
    <strong>No GHAS / Secret Protection required — completely free</strong> (since 2025), available to all Team and Enterprise orgs. Perfect for a pre-purchase inventory or an executive security report.
  </p>
</div>

- 🔎 Scope — all repos in the org (any visibility), including archived repos
- 📊 Output — aggregated report showing secret type, count, and how many are in each repo (individual secret values are not exposed)
- 🕒 Frequency — **a single point-in-time scan**; not continuous monitoring (buy Secret Protection for ongoing coverage)
- 🔐 Privacy — detected secret values are not stored by GitHub. Only statistics are visible to org admins
- 🚀 How to run — `Org → Settings → Code security → Secret risk assessment → Run assessment`

> 📊 Use this first when you want to "just know how many secrets are leaking across the org" or "need numbers for a budget proposal." Review the results to decide whether to adopt **Secret Protection**.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
