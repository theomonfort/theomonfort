---
title: "Org Transfer & Migration Limits"
group: "migrations"
tags: ["migration-limits", "org-transfer", "emu", "ghe-com", "ghes", "migrations"]
---

**Org Transfer & Migration Limits** explain why several seemingly simple administrative shortcuts fail across [[GitHub Enterprise Cloud]], [[Enterprise Managed Users]], [[GHE.com Data Residency]], and [[GitHub Enterprise Server]], and which [[GitHub Migrations]] path is required instead.

## Six Unsupported Shortcuts & Supported Alternatives

| Unsupported Shortcut | Why It Fails Architecturally | Supported Alternative |
| --- | --- | --- |
| **1. Toggle an enterprise between EMU and non-EMU in place** | Account ownership (`github.com` global users vs enterprise-scoped SCIM `<user>_<shortcode>` accounts) is permanently fixed during [[Enterprise Trial & Initial Setup]] | Provision a new target enterprise and execute [[EMU Type Conversion]] via [[GitHub Enterprise Importer]] |
| **2. Use "Transfer organization" into or out of an EMU / `GHE.com` enterprise** | In-place org transfer works **only** between two personal-account `GHEC` enterprises on `github.com` (e.g., M&A in Portfolio [[Organization Topology Models]]) | Run `gh gei migrate-org` into a newly created target org |
| **3. Use `ghe-migrator` to migrate into `GHEC` or `GHE.com`** | `ghe-migrator` is engineered strictly for `GHES -> GHES` appliance moves | Use [[GitHub Enterprise Importer]] or [[Enterprise Live Migrator]] |
| **4. Use `ELM` (`gh elm`) to migrate to `github.com` (non-residency)** | [[Enterprise Live Migrator]] exclusively targets regional `*.ghe.com` enterprises | Use `gh gei migrate-repo` |
| **5. Self-serve migrate from `GHE.com` back to `github.com`** | No official self-service CLI path moves data out of a regional `*.ghe.com` tenant to `github.com` | Engage **GitHub Expert Services** |
| **6. Run repos exceeding `40 GiB` Git / `40 GiB` metadata / `400 MiB` file through `GEI` unchanged** | Exceeds `GEI` cloud archive limits | Push Git history directly, use `ELM` (from `GHES 3.17+` to `GHE.com`), or engage **GitHub Expert Services** |
