---
title: "Code Scanning PR Merge Protection"
group: "pr-checks"
tags: ["code-scanning", "codeql", "ai-scan", "sarif", "ghas"]
aliases: ["Require code scanning results", "CodeQL PR Alerts", "AI Scan"]
---

**Code Scanning PR Merge Protection** posts inline vulnerability alerts from `github-advanced-security[bot]` directly onto [[PR Diff & File Views]] in [[Pull Requests]] on [[GitHub]] and blocks vulnerable merges via [[PR Rulesets]].

## Three Detection Engines in One PR Gate

| Engine | Language & Threat Coverage | Licensing & Billing |
| --- | --- | --- |
| **CodeQL** | Semantic data-flow analysis across C/C++, C#, Go, Java/Kotlin, JS/TS, Python, Ruby, Rust, Swift, and GitHub Actions `.yml` workflows | Free on public repos; **GitHub Code Security** (`$30 / active committer / month`) on private repos |
| **AI Scan** *(for PRs)* | **GA** for languages outside CodeQL; **Preview** for indirect prompt injection and insecure tool-use in AI apps and agents | Code Security + **Code Security AI Credits** |
| **Third-Party SARIF** | Uploads SAST/container/IaC results via `github/codeql-action/upload-sarif@v3` into the unified alert view | Same unified ruleset threshold per tool |

## Enforcing the Merge Gate

- **Ruleset Requirement**: Code scanning **never blocks a PR merge on its own**; admins must enable **Require code scanning results** inside [[PR Rulesets]] (typically set to `Security alerts: High or higher` and `Alerts: Errors`).
- **Why Block at PR Time**: Industry data shows only **`10%` of post-merge security debt** ever gets remediated, whereas PR-time alerts paired with [[Copilot Autofix in PRs]] and [[PR Dependency & Secret Gates]] stop vulnerabilities before they reach `main`.
