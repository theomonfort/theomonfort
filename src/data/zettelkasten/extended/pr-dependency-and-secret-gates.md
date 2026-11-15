---
title: "PR Dependency & Secret Gates"
group: "review"
tags: ["dependency-review", "secret-scanning", "licenses", "supply-chain", "pr-checks"]
aliases: ["Dependency Review Action", "Secret Scanning PR Gate"]
---

**PR Dependency & Secret Gates** stop vulnerable packages, forbidden open-source licenses, and leaked credentials on [[Pull Requests]] before they merge into `main`.

## Three Supply-Chain & Credential Blockers

| PR Gate | Mechanism & Ruleset Hook | Key Capabilities |
| --- | --- | --- |
| **Dependency Review Action** (`actions/dependency-review-action`) | GitHub Action enforced via [[Required Status Checks]] on any target branch | Diffs manifest and lockfile changes (direct + transitive) against the GitHub Advisory Database (`fail-on-severity: high`) and posts inline vulnerability/license summaries (free on public repos; Code Security on private repos) |
| **Open Source License Compliance** *(`GA 2026-10-16`)* | Branch ruleset `Require license compliance results before merging` (`Evaluate` / `Active` on GHEC + Code Security) | Enforces central enterprise license allow/deny policies with in-PR exception requests routed to an **Enterprise Open-Source License Manager** |
| **Secret Scanning Merge Gate** *(`2026-09-09` preview)* + **Push Protection** | Push-time block across 200+ partner token formats + [[PR Rulesets]] `Require secret scanning alerts are resolved` | Push protection stops known provider tokens at `git push` (with **Delegated bypass** review); the PR ruleset blocks merges on any open PR-introduced secret alert, catching generic keys (`rsa_private_key`, `postgres_connection_string`) alongside [[Code Scanning PR Merge Protection]] |

## Upstream Supply Chain & Secret Engines

- Evaluates [[Dependabot]], [[Dependency Review]], [[Open Source License Compliance]], [[Secret Protection]], and [[Push Protection]] before merge.
