---
title: "Actions Secrets & OIDC"
group: "actions"
tags: ["actions", "secrets", "oidc", "authentication"]
---

**Actions Secrets & OIDC** manage runtime credentials and cloud authentication inside [[GitHub Actions]] [[Workflows & Triggers]].

## Encrypted Secrets & Log Masking

- Stored at the repository, environment (with optional required reviewers and wait timers), or organization level under `Settings > Secrets and variables > Actions`.
- Injected into steps as `${{ secrets.NAME }}` and automatically masked in [[Actions Runners]] logs.

## Keyless Cloud Auth with OIDC

- **OpenID Connect (OIDC)** lets workflows exchange a short-lived job identity token directly with AWS, Azure, GCP, or HashiCorp Vault (supporting claims such as repository custom properties, branch, and environment) instead of storing long-lived static cloud keys.
