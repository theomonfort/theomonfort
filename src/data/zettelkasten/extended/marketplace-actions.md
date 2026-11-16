---
title: "Marketplace Actions"
group: "secure"
tags: ["actions", "marketplace", "supply-chain"]
---

**Marketplace Actions** are reusable workflow building blocks in [[GitHub Actions]] (`uses: actions/checkout@v7`, `actions/setup-node@v7`, `docker/build-push-action`, `github/codeql-action/upload-sarif` for [[Third-Party SARIF]]) that let teams compose [[Workflows & Triggers]] without scripting boilerplate from scratch.

## Supply-Chain Hardening

Because third-party actions execute inside [[Actions Runners]] with access to workspace code, treat every external action as a dependency:

- **Review source code**, even when published by verified creators.
- **Pin full commit SHAs or use [[Workflow Lockfiles]]** (`actions.lock`) because version tags like `@v4` or `@v4.4.0` are mutable pointers that can be moved to unreviewed code.
- **Organization allowlists**: Restrict allowed actions in `Settings > Actions > General` (for example, GitHub-authored actions, verified creators, or an explicit allowlist).
- **Automated updates**: [[Dependency Graph]] inventories `.github/workflows/*.yml` references so [[Dependabot]] (via [[Dependabot Alerts & Updates]]) opens pull requests whenever an action releases a security fix or new version.
