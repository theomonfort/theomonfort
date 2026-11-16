---
title: "Code Scanning"
group: "secure"
tags: ["sast", "codeql", "remediation", "product"]
---

**Code Scanning** is the [[Code Security]] feature on [[GitHub]] that finds security vulnerabilities through static analysis (**SAST**) without executing your code.

Code Scanning is the platform surface, not a single scanner: findings from [[CodeQL]], [[AI Scan]], and [[Third-Party SARIF]] all land in the same Security tab, pull request diff annotations, and [[Security Overview]].

## Engines, Setup & Remediation

- [[CodeQL]]: Semantic analysis engine that compiles code into a queryable database to trace taint paths from untrusted sources to dangerous sinks.
- [[AI Scan]]: AI-powered vulnerability detection covering languages outside CodeQL on PRs, on-demand repository scans, and indirect prompt injection in AI apps.
- [[Third-Party SARIF]]: Ingests results from Semgrep, Snyk, Checkmarx, or DAST tools into the unified alert view.
- [[Default vs Advanced Setup]]: One-click workflowless rollout across an org, or custom `.github/workflows/codeql.yml` builds and coding standard packs.
- [[Rulesets & Merge Protection]]: Hold pull requests until required scans finish with zero high-severity alerts.
- [[Copilot Autofix]]: Inline patch suggestions on pull requests using CodeQL data-flow context.
- [[Agentic Autofix]]: Assign 1 to 25 default-branch backlog alerts to Copilot to validate fixes and open a draft PR.
- [[Security Campaigns]]: Time-boxed remediation batches shared with engineering teams.
