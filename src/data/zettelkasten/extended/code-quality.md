---
title: "Code Quality"
group: "secure"
tags: ["quality", "maintainability", "reliability", "product"]
aliases: ["GitHub Code Quality"]
---

**Code Quality** is a standalone product on [[GitHub]] ($10 / month per active committer, sitting alongside [[GHAS]] rather than bundled inside it). While [[Code Scanning]] targets exploitable security flaws, Code Quality stops reliability and maintainability issues from turning into technical debt.

Healthy codebases also matter for AI: unhealthy code increases defect risk during agent edits and consumes significantly more context tokens.

## Capabilities & Shared Engines

- [[CodeQL]]: Runs 383 deterministic quality rules across C#, Go, Java/Kotlin, JS/TS, Python, and Ruby to flag unreachable code, off-by-one bugs, missing error checks, or queries inside loops.
- [[AI Quality Findings]]: Rule-free AI analysis on recently merged files on the default branch across all languages.
- [[Quality Score & Coverage]]: Grades findings (`Error` / `Warning` / `Note`) into repository and org health dashboards, and renders Cobertura XML test coverage on pull requests.
- [[Rulesets & Merge Protection]]: Enforces quality and test coverage thresholds on every PR, with an evaluate mode before hard blocking.
- [[Copilot Autofix]] & [[Agentic Autofix]]: Suggests inline fixes in PRs or delegates batches of 1 to 25 default-branch quality findings to Copilot for a validated fix PR.
