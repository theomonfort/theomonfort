---
title: "AI Quality Findings"
group: "secure"
tags: ["quality", "ai", "maintainability"]
---

Alongside deterministic [[CodeQL]] quality queries, [[Code Quality]] runs **AI Quality Findings** across **all programming languages** without requiring language-specific rule packs.

## Post-Merge Reliability Lens

- Evaluates **recently changed files on the default branch** after pull requests merge, avoiding noisy speculative comments on every draft commit while keeping remediation focused on active code.
- Spots logic smells, brittle error handling, readability traps, and maintainability debt that static AST patterns miss.
- Findings feed into [[Quality Score & Coverage]] and can be remediated in batches with [[Agentic Autofix]].
