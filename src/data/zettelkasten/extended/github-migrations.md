---
title: "GitHub Migrations"
group: "admin"
tags: ["migrations", "gei", "elm", "ghes", "emu", "ghe-com"]
---

**GitHub Migrations** move organizations, Git repositories, and collaboration history into [[GitHub]] cloud deployments ([[GitHub Enterprise Cloud]], [[Enterprise Managed Users]], and [[GHE.com Data Residency]]) from GitHub.com, [[GitHub Enterprise Server]], Azure DevOps, Bitbucket Server, or GitLab.

## Enterprise Migration Paths Matrix

| Dimension | Non-EMU <-> EMU (`github.com` / `GHE.com`) | `GHES` -> `GHE.com` (Live) | `GHES` -> `github.com` or `GHE.com` (Batch) |
| --- | --- | --- | --- |
| **Primary tool** | [[GitHub Enterprise Importer]] (`gh gei`) | [[Enterprise Live Migrator]] (`gh elm`, GA `2026-09-01`) | [[GitHub Enterprise Importer]] (`gh gei`) |
| **CLI unit & scope** | Whole org (`migrate-org`, up to `5,000` repos) or single repo (`migrate-repo`) | Single repo (`gh elm`, up to `10` concurrent/GHES, `20`/target) | **Repo by repo only** (`migrate-repo`; no org migration from GHES) |
| **Teams migrated?** | Org migration moves team shells & repo grants (not members) | Not migrated (recreate via [[IdP Group & Team Sync]]) | Not migrated (recreate on target) |
| **Work freeze / downtime** | Full freeze during run (no delta sync) | **Minutes at final cutover**; source stays writable | Freeze each repo during its run |
| **Source requirements** | Org owner / migrator + classic PAT (SSO-authorized) | `GHES 3.17+`, site admin, HTTPS, outbound access | `GHES 3.4.1+`, blob storage (`3.8+`), org owner |
| **Git LFS & archive caps** | `40 GiB` Git + `40 GiB` metadata, `400 MiB`/file; LFS excluded | Built for large monorepos; `2 GB` release assets; **LFS migrated** | `40 GiB` on `GHES 3.13+`; LFS excluded |

## Choosing the Right Path

- **Account Model Conversions**: Switching between personal-account GHEC and EMU (or migrating from `github.com` to `GHE.com`) cannot be done via org transfer (see [[Org Transfer & Migration Limits]]) and follows the 6-step runbook in [[EMU Type Conversion]].
- **Hybrid `GHES -> GHE.com` Programs**: Enterprises routinely combine **ELM** for mission-critical monorepos that cannot tolerate multi-hour freezes and **GEI** for standard repositories in the same cutover wave.
