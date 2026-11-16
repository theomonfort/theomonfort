---
title: "Copilot Autofix"
group: "secure"
tags: ["ai", "remediation", "pull-requests", "scanning"]
---

**Copilot Autofix** turns [[Code Scanning]] and [[Code Quality]] from problem-finders into patch-generators right inside pull requests on [[GitHub]].

## How Classic Inline Autofix Works

- Combines the [[CodeQL]] alert, the full source-to-sink data-flow path, and surrounding code context to propose a **concrete multi-file diff** plus a plain-English explanation.
- Developers review the suggestion in the PR conversation and click **Commit suggestion** (editing first if needed), fixing ~7x faster than manual remediation.
- **Licensing**: Free on public repositories and **included with [[Code Security]]** on private repositories (requires **no GitHub Copilot license** and consumes **zero AI Credits** for inline PR security autofixes).
- For existing backlog alerts on the default branch rather than active PRs, pair with [[Agentic Autofix]].
