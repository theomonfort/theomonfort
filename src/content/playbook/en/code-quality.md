---
title: Code Quality
titleEn: Code Quality
summary: A GitHub feature that analyzes code reliability and maintainability (not just vulnerabilities) with CodeQL + AI — commenting on PRs with Copilot Autofix, scoring repos on dashboards, and enforcing quality gates via rulesets. Free in public preview; paid from GA on 2026-07-20.
icon: 🩺
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 19.5
category: secure
related: ['code-scanning', 'github-advanced-security', 'copilot-code-review']
links:
  - group: 📖 Official Documentation
    label: About GitHub Code Quality
    url: https://docs.github.com/en/code-security/concepts/about-code-quality
  - group: 📖 Official Documentation
    label: Fixing code quality findings before merging your PR
    url: https://docs.github.com/en/code-security/code-quality/tutorials/fix-findings-in-prs
  - group: 📖 Official Documentation
    label: Interpreting the code quality results for your repository
    url: https://docs.github.com/en/code-security/how-tos/maintain-quality-code/interpret-results
  - group: 📖 Official Documentation
    label: Disabling GitHub Code Quality
    url: https://docs.github.com/en/code-security/how-tos/maintain-quality-code/disable-code-quality
  - group: 💰 Billing
    label: GitHub Code Quality billing
    url: https://docs.github.com/en/billing/concepts/product-billing/github-code-quality
  - group: 📰 Recent Changelog
    label: "GitHub Code Quality generally available July 20, 2026 (2026-06-16)"
    url: https://github.blog/changelog/2026-06-16-github-code-quality-generally-available-july-20-2026/
  - group: 📰 Recent Changelog
    label: "GitHub Code Quality in public preview (2025-10-28)"
    url: https://github.blog/changelog/2025-10-28-github-code-quality-in-public-preview/
---

## At a Glance

<div class="hero-quote">
  <p>
    <strong>Code Quality</strong> finds <strong>reliability</strong> and <strong>maintainability</strong> issues in your code — not vulnerabilities, but the health of the codebase.
  </p>
  <p>
    Analysis is powered by <strong>CodeQL</strong> (rule-based) plus <strong>AI</strong>. Findings are posted to PRs by <code>github-code-quality[bot]</code> with one-click <strong>Copilot Autofix</strong>, scored on <strong>dashboards</strong>, and enforced with <strong>rulesets as quality gates</strong>.
  </p>
</div>

## How it differs from Code Scanning

Same CodeQL engine, different target. **Code Scanning = security**, **Code Quality = health**.

| Aspect | 🛡️ Code Scanning | 🩺 Code Quality |
| --- | --- | --- |
| Looks for | Vulnerabilities (SQLi / XSS / SSRF…) | Reliability & maintainability issues (bug-prone code, complexity, duplication, dead code…) |
| Surfaces in | Security tab / alerts | **Code quality** pages + **scores** (reliability / maintainability) |
| On PRs | Code scanning alerts | <code>github-code-quality[bot]</code> comments + coverage summary |
| License | Public free / private needs GHAS or Code Security | **No Copilot or Code Security license needed** (free in preview → paid at GA) |
| Enforcement | Branch protection / required checks | **Rulesets** as quality gates (block PRs that miss the bar) |

> 🔑 Security holes → Code Scanning. Technical debt → Code Quality. Together you cover offense and defense.

## What it finds

- 🧱 **Reliability** — patterns likely to break at runtime: null dereferences, resource leaks, incorrect API usage, etc.
- 🧹 **Maintainability** — excessive complexity, duplicated code, dead code, hard-to-read structure — the "fix-it-now-save-later" stuff
- 🤖 **AI findings (separate)** — beyond rule-based CodeQL, **recent pushes to the default branch** are analyzed by AI; results (which can span languages beyond the supported list) appear on a separate **"AI findings"** dashboard
- 📊 **Scoring** — per-repo reliability / maintainability scores to help you prioritize remediation

## Where findings appear

- 💬 **PR comments** — on PRs against the default branch, <code>github-code-quality[bot]</code> comments, with a **Copilot Autofix** suggestion where possible
- 🌳 **Default branch** — whole-codebase scan results aggregated on the **Code quality** pages
- 🧪 **Code coverage** — upload coverage reports to see a coverage summary on PRs (vs. the default branch), surfacing untested code
- 🗂️ **Dashboards** — a **repo dashboard** for scores and hotspots, and an **org dashboard** to see code health across all repos at a glance
- 🛫 **Assign to Copilot** — with a Copilot license, hand remediation work straight to the **Copilot cloud agent**

## Rulesets as quality gates

Use **rulesets** on PRs to enforce quality standards and **block changes that miss the bar**. You can also require coverage via rulesets (e.g. "stop PRs that drop coverage on new code").

> 🚦 Don't stop at visibility — make it a **merge condition**. Block debt at the door.

## Supported languages

Rule-based CodeQL analysis covers:

- **C# / Go / Java / JavaScript / Python / Ruby / TypeScript**

> 🤖 AI findings may flag issues in languages beyond this list (scoped to recent pushes on the default branch, shown on a separate dashboard).

## Getting started

```
Org-owned repo → Settings → Code quality (or Code security)
  → Enable Code Quality
```

- Once enabled, CodeQL scans run on **new PRs**, **updated existing PRs**, and the **whole default branch**
- Fix via the Autofix suggestion on the PR; escalate larger fixes to the **Copilot cloud agent**
- Finish by setting a quality gate with a **ruleset**

📘 More: <a class="retro-link" href="https://docs.github.com/en/code-security/code-quality/tutorials/fix-findings-in-prs" target="_blank" rel="noopener noreferrer">Fixing code quality findings before merging your PR ↗</a>

## Availability & pricing

| Item | Details |
| --- | --- |
| Scope | **Organization-owned** repos on GitHub **Team** / **Enterprise Cloud**. **Not** on Enterprise Server |
| License | **No Copilot or Code Security license required** (including applying Autofix) |
| Public Preview | **Free** — but scans consume **GitHub Actions minutes** |
| GA (from 2026-07-20) | **Paid**: **$10 per active committer / month** on enabled repos + usage-based AI features (Copilot code review / AI detection / Autofix). CodeQL analysis still consumes Actions minutes |
| Avoid charges | **Disable before 2026-07-20** to avoid being billed |

> 💰 During preview it's effectively just Actions minutes. At **GA on 2026-07-20** it flips to $10/committer/month + AI usage — estimate the cost before adopting in production.

📘 More:
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/about-code-quality" target="_blank" rel="noopener noreferrer">About GitHub Code Quality ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-code-quality" target="_blank" rel="noopener noreferrer">GitHub Code Quality billing ↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2026-06-16-github-code-quality-generally-available-july-20-2026/" target="_blank" rel="noopener noreferrer">GA on July 20, 2026 (changelog) ↗</a>
