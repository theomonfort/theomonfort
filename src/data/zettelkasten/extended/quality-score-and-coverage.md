---
title: "Quality Score & Coverage"
group: "secure"
tags: ["quality", "metrics", "coverage"]
---

**Quality Score & Coverage** is the measurement layer of [[Code Quality]] on [[GitHub]], giving engineering leaders and contributors an objective view of repository health alongside [[Security Overview]].

## Health Grades & PR Coverage

- **Severity model**: Deterministic [[CodeQL]] rules and [[AI Quality Findings]] report as **`Error`**, **`Warning`**, or **`Note`** (separate from security `Critical/High/Medium/Low` severities).
- **Repository & org scores**: Aggregates reliability and maintainability grades across repositories so teams spot hotspots before velocity drops.
- **Test coverage on PRs**: Ingests **Cobertura XML** coverage reports produced by [[GitHub Actions]] ([[Workflows & Triggers]] and [[Actions Cache & Artifacts]]) to annotate uncovered diff lines directly on pull requests and enforce minimum coverage gates through [[Rulesets & Merge Protection]].
