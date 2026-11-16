---
title: "Copilot Autofix in PRs"
group: "pr-checks"
tags: ["autofix", "codeql", "remediation", "security"]
aliases: ["Copilot Autofix", "Agentic Autofix"]
---

**Copilot Autofix in PRs** generates ready-to-commit vulnerability patches directly inside [[Code Scanning PR Merge Protection]] alerts on [[Pull Requests]], cutting median remediation time from **1.5 hours manually to 28 minutes** (>3x faster).

## How PR Autofix Differs From Generic AI Fixes

- Rather than looking only at the flagged line, Copilot Autofix feeds the LLM the CodeQL query rule, surrounding files, and the full **source-to-sink taint data-flow path**, producing targeted patches (plus needed dependency edits) that authors can accept like [[Suggested Changes]] or refine via [[PR Coding Agent Handoff]].

## Classic PR Autofix vs Agentic Autofix (`GA 2026-10-15`)

| Dimension | Classic Copilot Autofix (On PRs) | Agentic Autofix (Default-Branch Backlog) |
| --- | --- | --- |
| **Trigger Surface** | Automatic inline fix suggestion on PR `CodeQL` alerts | Select **`1-25` open alerts** in `Security -> Code scanning` and click **Assign to Copilot** (not available on PR-only alerts) |
| **Validation & Output** | Proposed patch on the active PR thread | Runs build/tests on Actions runner, learns fix conventions in Copilot Memory (`2026-09-25`), and opens separate [[Draft Pull Requests]] |
| **License & Credits** | **No Copilot license required** and **zero AI credits** (included with Code Security; free on public repos, enabled by default) | Consumes **Code Security AI Credits** + GitHub Actions runner minutes |
