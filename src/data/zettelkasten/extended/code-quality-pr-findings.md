---
title: "Code Quality PR Findings"
group: "review"
tags: ["code-quality", "maintainability", "reliability", "coverage", "pr-checks"]
aliases: ["Cobertura PR Coverage"]
---

**Code Quality PR Findings** (**GitHub Code Quality**, generally available since **2026-07-20** on [[GitHub]]) posts inline maintainability, reliability, and test-coverage findings with Autofix patches on [[Pull Requests]], priced standalone at **`$10 / active committer / month`** on GitHub Team and Enterprise Cloud (enabled top-down via `Enterprise -> Org -> Repo` settings).

## PR Language Matrix & Query Coverage

Standard PR analysis runs **383 deterministic CodeQL quality queries** graded `Error / Warning / Note` across 6 primary languages (plus Rust):

| Language | Query Count | What PR Reviews Catch |
| --- | --- | --- |
| **Python** | `101` | Reliability bugs (duplicate `if`, unreachable code, uninitialized variables, missing error checks) & maintainability debt (DB query in loop, dead assignments) |
| **JavaScript / TypeScript** | `98` | Async error drops, off-by-one loops, no-effect expressions |
| **Java / Kotlin** | `89` | Null dereferences, resource leaks, complex cyclomatic paths |
| **C#** | `69` | Disposal patterns, dead stores, exception handling |
| **Go** & **Ruby** *(+ Rust)* | `22` Go, `3` Ruby, `1` Rust | Error-check omissions and idiomatic pitfalls (C/C++ and Swift rely on [[Copilot Code Review]] on PRs plus post-merge AI findings) |

## Test Coverage Deltas & Ruleset Enforcement

- Uploading **Cobertura XML** coverage reports in Actions renders line-by-line PR coverage deltas and enforces quality/coverage thresholds via [[PR Rulesets]] alongside [[Code Scanning PR Merge Protection]].
- At GitHub internally, **`67.3%` of Code Quality findings are fixed before merge** via inline Autofix and [[Suggested Changes]] (critical because unhealthy code carries `30%+` higher AI defect risk and `~45%` higher agent token read cost).

## Upstream Quality Engines

- Surfaces maintainability and reliability checks from [[Code Quality]], [[AI Quality Findings]], and [[Quality Score & Coverage]].
