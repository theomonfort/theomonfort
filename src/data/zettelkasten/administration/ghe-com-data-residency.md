---
title: "GHE.com Data Residency"
group: "deployment"
tags: ["data-residency", "ghe-com", "emu", "japan", "eu", "compliance"]
aliases: ["Data Residency", "GHE.com"]
---

**GHE.com Data Residency** hosts a [[GitHub]] enterprise on a dedicated regional subdomain (`https://<subdomain>.ghe.com`, such as `octocorp.ghe.com`) inside [[GitHub Enterprise Cloud]], storing customer code and repository metadata at rest in a chosen geographic region.

## Regions & Identity Isolation

- **Available Regions**: **EU**, **Australia**, **US**, and **Japan** (Japan GA `2025-12-18`).
- **Mandatory EMU**: Every `GHE.com` enterprise requires [[Enterprise Managed Users]] ([[SAML & OIDC SSO]] + [[SCIM Provisioning]]) and inherits [[EMU Account Restrictions]], fully isolated from the public `github.com` namespace.
- **Zero Upgrade Maintenance**: Unlike self-hosted [[GitHub Enterprise Server]], `GHE.com` receives continuous cloud updates with no admin-run upgrade downtime.

## Regional Storage Boundary

| Stored In-Region | May Leave the Region |
| --- | --- |
| Git repositories, source code, branches, commits | Pseudonymous telemetry identifiers |
| Pull requests, issues, comments, releases | Billing, license, and support ticket metadata |
| GitHub Actions workflow data, logs, and BCDR backups | Secret scanning partner validity checks |
| User profile metadata (email, username, display name, IP) | Copilot prompts/inference by default (see [[Copilot with Data Residency]]) |

## Subdomain Endpoints & Feature Differences vs `github.com`

| Service | Standard `github.com` | `GHE.com` Data Residency |
| --- | --- | --- |
| **REST / GraphQL API** | `api.github.com` | `api.<subdomain>.ghe.com` |
| **Container Registry** | `ghcr.io` | `containers.<subdomain>.ghe.com` |
| **SSH Git Clone** | `git@github.com:` | `<subdomain>@<subdomain>.ghe.com:` |

- **Network & Firewall Allowlists**: IP ranges and SSH host key fingerprints differ from `github.com`; update corporate firewalls, IdP redirect URIs, and cloud storage rules accordingly.
- **Unavailable / Conditional Features**:
  - **Actions & Marketplace**: No **macOS** GitHub-hosted runners; no **GitHub Marketplace** (reference actions and apps directly from source repositories).
  - **Packages & Supply Chain**: No **Maven / Gradle** registry yet; no org/enterprise **dependency insights**; no license metadata in **SBOM** exports (AI-powered generic secret detection has **no gap**).
  - **Admin & Tooling**: Codespaces requires explicit VS Code endpoint configuration; no legacy GitHub Importer (use [[GitHub Enterprise Importer]] or [[Enterprise Live Migrator]]); no audit log streaming to Amazon S3 via OIDC; some public preview features wait until GA.
