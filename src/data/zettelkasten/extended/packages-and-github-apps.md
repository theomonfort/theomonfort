---
title: "Packages & GitHub Apps"
group: "operate"
tags: ["packages", "ghcr", "github-apps", "oidc", "operate"]
aliases: ["Operational Tools", "GitHub Packages", "GitHub Apps"]
---

**Packages & GitHub Apps** provide native artifact hosting and short-lived automation identities across [[GitHub]] in [[SDLC Stage 05 Operate]].

## Integrated Registry + Keyless Bot Identities

- **GitHub Packages & GHCR (`ghcr.io`)**: Hosts npm, Maven, NuGet, RubyGems, and OCI container images using native `GITHUB_TOKEN` permissions inside [[GitHub Actions]] (protected upstream by [[Package Firewall]]), sharing storage and data-transfer budgets governed by [[Cost Centers]] and [[Budgets & Spending Limits]].
- **GitHub Apps over Static PATs**: Replace user-bound Personal Access Tokens with fine-grained, **1-hour installation tokens** enforced under [[Enterprise Governance]] and [[GitHub Well-Architected Guardrails]], and re-registered post-cutover during [[GitHub Migrations]].
