---
title: "Enterprise Live Migrator"
group: "migrations"
tags: ["elm", "live-migrations", "ghes", "ghe-com", "lfs", "monorepo", "migrations"]
aliases: ["ELM", "gh elm", "Enterprise Live Migrations"]
---

**Enterprise Live Migrator** (`ELM`, Enterprise Live Migrations via `gh elm`, GA `2026-09-01`) streams active repositories from [[GitHub Enterprise Server]] into [[GHE.com Data Residency]] with continuous background replication so developer writes only pause for **minutes** at final cutover.

## ELM vs GEI for `GHES -> GHE.com` Migrations

Enterprises can mix both tools inside the same [[GitHub Migrations]] wave, selecting per repository:

| Dimension | **Enterprise Live Migrator (`ELM`)** | [[GitHub Enterprise Importer]] (`GEI`) |
| --- | --- | --- |
| **Developer downtime** | **Cutover window only (minutes)**; source repo stays live during sync | Repo frozen throughout export, upload, and import |
| **Ideal workload** | Large monorepos & tier-0 repos that cannot stop | Standard repos tolerant of a scheduled freeze |
| **Concurrency limits** | **`10`** concurrent per `GHES` instance; **`20`** per target enterprise | Higher parallel batch throughput |
| **Git LFS objects** | **Migrated automatically** | Excluded (must be pushed manually post-migration) |
| **Minimum `GHES` version** | Supported **`GHES 3.17+`** patch releases (HTTPS + outbound access) | `GHES 3.4.1+` (`3.13+` for `40 GiB` limit) |
| **External staging storage** | **Not required** | External blob storage required (`GHES 3.8+`) |
| **Supported cloud target** | **`GHE.com` (EMU) only** | Both `github.com` and `GHE.com` |

## Prerequisites, Exclusions & Cutover Guardrails

- **Operators & Limits**: Requires a `GHES` site admin + `GHE.com` enterprise owner with classic PATs; migrates **one repository per run** with release assets up to **`2 GB`** each (see [[Org Transfer & Migration Limits]]).
- **Excluded Metadata**: Organization settings, teams, GitHub Projects, org webhooks, [[Enterprise & Repo Rulesets]], PRs from forks, pending PR reviews, and branch protection bypass actors are not migrated (recreate teams via [[IdP Group & Team Sync]] and reclaim mannequins to [[Enterprise Managed Users]] post-cutover).
- **No Force Pushes or Public Repos**: Block force pushes during live replication (`ELM` cannot reconcile rewritten Git history), and convert any instance-public `GHES` repos to private or internal before starting since `GHE.com` forbids public repositories.
