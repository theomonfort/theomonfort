---
title: "GitHub Enterprise Server"
group: "admin"
tags: ["ghes", "self-hosted", "deployment", "appliance", "hybrid"]
aliases: ["GHES"]
---

**GitHub Enterprise Server** (`GHES`) is [[GitHub]]'s self-hosted virtual appliance deployed on-premises or in a customer-managed cloud VPC, giving administrators full control over infrastructure, network isolation, and upgrade maintenance windows.

## Identity & Release Cadence vs Cloud

- **Instance-Local Accounts**: `GHES` does not support [[Enterprise Managed Users]]; accounts live on the appliance and authenticate via built-in passwords, **LDAP**, **CAS**, or **SAML**.
- **Admin-Run Upgrades**: Features ship on [[GitHub Enterprise Cloud]] first and arrive later in periodic `GHES` feature releases (such as `3.13+` or `3.17+`) that administrators test and apply manually.
- **Hybrid Licensing**: Linking `GHES` to an enterprise cloud account via **GitHub Connect** enables [[Multi-Org Seat Deduplication]] and cloud-assigned Copilot licenses.

## Feature Gaps Compared with GHEC and GHE.com

| Area | Status on `GHES` | Operational Details |
| --- | --- | --- |
| **GitHub Actions** | Self-hosted runners only | No GitHub-hosted runners; referencing `github.com` actions requires **GitHub Connect** |
| **GitHub Copilot** | IDE & CLI only | No web Chat, cloud agent, Copilot code review, or Spaces; license assigned in cloud; offline CLI in preview |
| **GitHub Packages** | Supported (incl. Maven/Gradle) | Unlike [[GHE.com Data Residency]], `GHES` supports Maven/Gradle when Packages is enabled by site admin |
| **Dependabot** | Conditional | Requires **GitHub Connect** plus self-hosted Actions runners |
| **Secret Scanning** | Partial | No AI-powered generic secret detection |
| **Codespaces & Sponsors** | Unavailable | Cloud-hosted Codespaces and GitHub Sponsors are not available on `GHES` |
| **Repository Visibility** | Instance-scoped | "Public" repositories on `GHES` are visible only to users with network/account access to the appliance |

## Cloud Migration Paths from GHES

Enterprises retiring self-hosted infrastructure move repositories to cloud via [[GitHub Migrations]]: use [[Enterprise Live Migrator]] (`GHES 3.17+` -> `GHE.com`) for near-zero-downtime monorepo cutovers including Git LFS, or [[GitHub Enterprise Importer]] (`GHES 3.4.1+` -> `github.com` or `GHE.com`) for standard frozen repository migrations.
