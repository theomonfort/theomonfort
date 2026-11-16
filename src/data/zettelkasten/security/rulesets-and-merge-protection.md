---
title: "Rulesets & Merge Protection"
group: "bridge"
tags: ["governance", "pull-requests", "rulesets"]
aliases: ["Merge Protection"]
---

**Rulesets & Merge Protection** are [[GitHub]]'s unified policy gates at the repository, organization, and enterprise levels. Rather than relying on tribal discipline, rulesets enforce security and health checks directly on pull requests before code lands on protected branches.

## Cross-Product Gates

- [[GitHub Actions]]: `Require status checks to pass` blocks merges when automated unit or Playwright E2E test suites in [[Workflows & Triggers]] fail, while Actions Policies enforce [[Workflow Lockfiles]].
- [[Secret Protection]]: `Require secret scanning results` blocks PR merges when unresolved [[Secret Scanning Alerts]] (including noisy [[Provider & Generic Patterns]]) appear in the branch, complementing commit-time [[Push Protection]].
- [[Code Scanning]]: `Require code scanning results` blocks merges when [[CodeQL]], [[AI Scan]], or [[Third-Party SARIF]] detects `High` or `Critical` vulnerabilities.
- [[Dependabot]]: Enforces [[Dependency Review]] checks and enterprise [[Open Source License Compliance]] policies (with **Evaluate mode** to test impact safely before switching to **Active** blocking).
- [[Code Quality]]: Enforces reliability, maintainability, and [[Quality Score & Coverage]] thresholds on pull requests, also supporting evaluate-first rollout.
