---
title: "GitHub Enterprise Importer"
group: "admin"
tags: ["gei", "migrations", "mannequins", "cli", "ghec", "ghes"]
aliases: ["GEI", "gh gei"]
---

**GitHub Enterprise Importer** (`GEI`, invoked via the `gh gei` CLI extension) is the cloud-orchestrated migration engine under [[GitHub Migrations]] for moving whole organizations (`gh gei migrate-org`) or individual repositories (`gh gei migrate-repo`) into [[GitHub Enterprise Cloud]], [[Enterprise Managed Users]], or [[GHE.com Data Residency]].

## What Transfers vs What Must Be Reconfigured

| Migrated by `gh gei` | Excluded (Must Be Recreated or Pushed Separately) |
| --- | --- |
| Git commit history, branches, tags, releases | Team memberships, direct user grants, user PATs & SSH keys |
| Pull requests, issues, review comments, timelines | Actions secrets, variables, environments, self-hosted runners, run history |
| Workflow `.github/workflows/*.yml` files in Git | GitHub Apps, Packages, GitHub Projects, security alerts, user-owned repos |
| Team definitions & team repo roles (`migrate-org` from `github.com` only) | **Git LFS objects**, [[Enterprise & Repo Rulesets]], custom properties, partial branch protection bypasses |

All migrated repositories arrive **private** on the target (mandatory under [[EMU Account Restrictions]]).

## Size Limits, Ruleset Bypasses & No-Delta Rule

- **Archive Ceilings**: Up to **`40 GiB` Git archive + `40 GiB` metadata** per repo (`GHES 3.13+`; requires external blob storage on `GHES 3.8+`, minimum `GHES 3.4.1+`), **`400 MiB`** max single file, and **`5,000` repos** per `migrate-org` run. For larger monorepos on `GHES 3.17+` moving to `GHE.com`, use [[Enterprise Live Migrator]].
- **Strict Write Freeze**: `GEI` performs **no delta sync**; pushes or PR edits made after migration starts are not copied. Exempt blocking target rulesets via **`Repository migrations -> Exempt`**, verify IP allowlists do not block GEI ranges, and authorize classic PATs for [[SAML & OIDC SSO]].

## Mannequin Reclamation (`gh gei reclaim-mannequin`)

Migrated PRs, issues, and comments initially attribute authorship to placeholder **mannequins**. After provisioning target users via [[SCIM Provisioning]], an org owner runs `gh gei generate-mannequin-csv`, maps mannequins to existing target org members, and executes `gh gei reclaim-mannequin` (see [[EMU Type Conversion]]). Reclaiming mannequins restores UI attribution only: it **grants zero repository access** and leaves raw Git commit author emails unchanged.
