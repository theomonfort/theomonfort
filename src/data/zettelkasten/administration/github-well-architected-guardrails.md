---
title: "GitHub Well-Architected Guardrails"
group: "governance"
tags: ["well-architected", "guardrails", "security", "actions", "copilot", "governance"]
aliases: ["21 Guardrails", "Well-Architected Guardrails"]
---

**GitHub Well-Architected Guardrails** codify 21 concrete settings across [[Enterprise Policies]], [[Enterprise & Repo Rulesets]], repository webhooks, and [[Copilot Managed Settings]] under [[Enterprise Governance]]. If short on time, prioritize **#03** (read-only `GITHUB_TOKEN`), **#15** (no ruleset bypass), and **#18** (audit log streaming).

## Guardrails #01-#11: Actions, Repositories, Access & Webhooks

| # | Guardrail | Scope | Recommended Setting & Rationale |
| --- | --- | --- | --- |
| **01** | Actions execution scope | `ORG` | Restrict Actions to **specific repositories**, not all repos blindly |
| **02** | Allowed actions | `ENT` | Allow **GitHub-created and Verified Creator** actions only (plus SHA-pinned internal list) |
| **03** | Default workflow token | `ENT / ORG` | Set `GITHUB_TOKEN` to **`read-only`** (ships read/write, exposing write paths on token leak) |
| **04** | PR auto-approval | `ENT / ORG` | **Disabled** (on by default; prevents workflows from bypassing human review) |
| **05** | Repository forking | `ENT / ORG` | **Off** unless a repository explicitly requires fork workflows |
| **06** | Visibility changes | `ENT / ORG` | Restrict **who** can flip repository visibility |
| **07** | Fine-grained PATs | `ENT / ORG` | Require an **admin approval flow** to audit target repos and scopes |
| **08** | [[Outside Collaborators]] | `ENT` | **`Owners only`** (ships as `No policy`, letting members invite externals) |
| **09** | Public repositories | `ENT` | **Blocked**, unless open source is isolated in a separately governed org |
| **10** | Webhook secret | `ORG / REPO` | **Always set** so receivers verify HMAC payload signatures |
| **11** | Webhook transport | `ORG / REPO` | Enforce **SSL / HTTPS** on every webhook endpoint |

## Guardrails #12-#21: Code Integrity, Runners, Logs & Copilot Agents

| # | Guardrail | Scope | Recommended Setting & Rationale |
| --- | --- | --- | --- |
| **12** | Repository rulesets | `ENT / ORG / REPO` | Enforce reviews, status checks, and branch protection via [[Enterprise & Repo Rulesets]] |
| **13** | `CODEOWNERS` | `REPO` | Define `.github/CODEOWNERS` with explicit org-team ownership per critical path |
| **14** | Commit signing | `REPO` | **Required** to block commit spoofing (Copilot cloud agent commits are signed automatically) |
| **15** | Ruleset bypass | `REPO` | **Not allowed** (empty bypass list; bypass turns a rule into a suggestion) |
| **16** | Runner groups | `ENT / ORG` | Scope each self-hosted runner group to a **limited set of repositories** |
| **17** | Push protection bypass | `ORG` | Restrict secret-scanning bypass to **named roles and teams** (default allows anyone with `Write`) |
| **18** | Audit log streaming | `ENT` | **Configured** to SIEM or cloud object storage for durable incident forensics |
| **19** | Copilot agent permissions | `ENT` | Block allow-all YOLO mode via `disableBypassPermissionsMode` |
| **20** | Copilot local sandbox | `ENT` | Enforce `sandbox` (`enabled: true`, `allowBypass: false`) to isolate `~/.ssh` and OS Keychain |
| **21** | MCP server allowlist | `ENT` | Populate `allowedMcpServers` with **vetted servers only** so unapproved MCP tools cannot read code/tokens |
