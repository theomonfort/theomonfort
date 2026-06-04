---
title: Secret Scanning
titleEn: Secret Scanning
summary: GitHub's secret detection feature that automatically finds API keys and tokens mixed into commits, issues, PRs, and history. Push protection can block commits before they land. Free for public repos; push protection is also free for private repos on a per-user opt-in basis.
icon: /theomonfort/icons/secret-scanning.png
color: amber
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

Secret Scanning operates in **two modes**. You should enable both.

| Feature | When does it run? | What does it do? | Scope |
| --- | --- | --- | --- |
| 🔍 **Secret scanning alerts** | After commit (including history, continuously) | Notifies you of detected secrets in the Security tab | Commit history, Issues, PRs, descriptions, Wikis |
| 🛡️ **Push protection** | Right before `git push` | Rejects pushes containing secrets (bypass is possible) | Incoming changes only |
| ✅ **Validity checks** | When an alert fires | Asks the provider API whether the secret is still active | Select supported providers (AWS, GitHub, Slack, and others) |

> 🔑 **Alerts** = find secrets already in the repo; **Push protection** = prevent them from getting in at all. Push protection is the most effective measure (no history rewriting needed).

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning" target="_blank" rel="noopener noreferrer">About secret scanning ↗</a> · <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection" target="_blank" rel="noopener noreferrer">About push protection ↗</a>

## What gets detected

- 🏷️ **Provider patterns** — Regex patterns registered by 200+ partners including AWS, Azure, GCP, Stripe, Slack, OpenAI, and GitHub PATs. Extremely low false-positive rate
- 🧪 Generic / non-provider patterns — `password = "..."`, HTTP basic auth, generic API key-like strings. AI-based detection (Copilot Secret Scanning) can also be enabled
- 🛠️ **Custom patterns** — Define your own regex for proprietary token formats (requires GHAS)
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

Public repos have this **on by default and completely free**. Repo-level push protection for private repos requires Secret Protection / GHAS — but individual user opt-in is free on all plans (`User → Settings → Code security and analysis`).

**Step 2 — Scan for existing leaks**

Once enabled, past commit history is automatically scanned. Alerts will appear in the Security tab — work through them from the top, rotating each secret.

**Step 3 — Add custom patterns**

```
Repo or Org → Settings → Code security → Secret scanning → Custom patterns
```

Register your own token format with a regex. Free for public repos; private repos require GHAS / Secret Protection. Use the dry-run feature to check for false positives before going live.

**Step 4 — Enable org-wide / enterprise-wide**

Use **default settings** in `Org → Settings → Code security` to apply to new and existing repositories at once.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository" target="_blank" rel="noopener noreferrer">Enabling secret scanning for your repo ↗</a>

## Eligibility and pricing

| Feature | Public repo | Private repo (No GHAS / Secret Protection) | Private repo (With GHAS / Secret Protection) |
| --- | :---: | :---: | :---: |
| Push protection (user personal opt-in) | ✅ Free | ✅ Free (since 2024) | ✅ |
| Push protection (repo / org level) | ✅ Free | ❌ | ✅ |
| Secret scanning alerts | ✅ Free | ❌ | ✅ |
| Partner secret invalidation | ✅ Automatic | ❌ | ✅ Automatic |
| Validity checks | ✅ Free | ❌ | ✅ |
| Custom patterns | ✅ Free | ❌ | ✅ |
| AI detection (generic) | ✅ Free | ❌ | ✅ |

> 💰 In 2025, **GHAS was split** — if you only need secret scanning, **Secret Protection** ($19/month/active committer) is enough (no full GHAS contract required). Combine with GitHub Code Security if you also want CodeQL.  
> 🆓 Individuals can enable **user push protection** via `Settings → Code security` — this warns even on private repos without any license. Recommending this to all employees is the fastest way to prevent accidents.  
> 🛡️ Push protection at the repo/org level is completely free and on by default for public repos. A Secret Protection / GHAS license is only needed when you want to enforce it org-wide on private / internal repos. See <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection" target="_blank" rel="noopener noreferrer">About push protection ↗</a>.

📘 Details:
- <a class="retro-link" href="https://github.blog/news-insights/product-news/push-protection-is-generally-available-and-free-for-all-public-repositories/" target="_blank" rel="noopener noreferrer">Push protection is GA & free for all public repos (GitHub Blog) ↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2024-02-29-push-protection-is-enabled-for-free-users-on-github/" target="_blank" rel="noopener noreferrer">Push protection enabled for free users (2024 Feb) ↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security (2025 Mar) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/get-started/learning-about-github/githubs-plans" target="_blank" rel="noopener noreferrer">GitHub plans pricing ↗</a>

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
