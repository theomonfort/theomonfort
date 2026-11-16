---
title: "Workflows & Triggers"
group: "secure"
tags: ["actions", "workflows", "yaml", "ci"]
aliases: ["Actions Workflows"]
---

**Workflows & Triggers** define what [[GitHub Actions]] runs and when, stored as one or more YAML files under `.github/workflows/*.yml`.

## Event-Driven Execution

- **Triggers (`on:`)**: Responds to `push`, `pull_request`, `schedule` (cron), `workflow_dispatch` (manual), `issues`, `release`, and 35+ repository events across the SDLC.
- **Jobs & Matrix Parallelism**: Each job starts on a fresh VM from [[Actions Runners]] (up to 6 hours per job and 35 days per workflow), with matrix strategies testing multiple OS or runtime versions in parallel.
- **Least-Privilege Permissions**: Scoped `permissions:` blocks (such as `contents: read`) restrict the automatic `GITHUB_TOKEN` per workflow or job.

## Test & Secure Integration

- Runs unit and Playwright E2E test suites on every PR, feeding required status checks into [[Rulesets & Merge Protection]] and coverage reports into [[Quality Score & Coverage]].
- Powers custom `.github/workflows/codeql.yml` pipelines in [[Default vs Advanced Setup]] for [[Code Scanning]], composed from [[Marketplace Actions]].
