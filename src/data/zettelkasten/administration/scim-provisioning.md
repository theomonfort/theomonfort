---
title: "SCIM Provisioning"
group: "iam"
tags: ["scim", "provisioning", "deprovisioning", "iam", "emu"]
aliases: ["SCIM"]
---

**SCIM Provisioning** (System for Cross-domain Identity Management) automates user account creation, profile synchronization, and offboarding between an Identity Provider (`IdP`) and [[Enterprise Managed Users]] (or organization membership on SAML-enabled [[GitHub Enterprise Cloud]]).

## Entra ID SCIM Endpoint & Token Setup

After configuring [[SAML & OIDC SSO]] in [[Entra ID Enterprise App]], open **Enterprise Application -> Manage -> Provisioning**:

- **Tenant URL**:
  - Standard EMU: `https://api.github.com/scim/v2/enterprises/<enterprise-slug>`
  - [[GHE.com Data Residency]]: `https://api.<subdomain>.ghe.com/scim/v2/enterprises/<enterprise-slug>`
- **Secret Token**: A classic **Personal Access Token (`PAT`)** generated while signed in as the EMU setup user (`<shortcode>_admin`) under `Settings -> Developer settings -> Personal access tokens` with the `admin:enterprise` scope.
- **Sync Cadence**: Assign users or security groups under **Users and groups**; Entra ID runs incremental provisioning syncs automatically **every ~40 minutes** (plus on-demand provisioning for urgent changes).

## Eliminating Manual Provisioning & Offboarding Drift

- **Default Unaffiliated State**: Newly provisioned EMU accounts land in the enterprise as **Unaffiliated** (consuming **0** GHE seats) until connected to organizations via [[IdP Group & Team Sync]].
- **Instant Deprovisioning Guardrail**: Relying on manual invites is a critical governance anti-pattern because leavers retain repository access and seats; disabling or unassigning a user in the IdP triggers SCIM suspension, revoking sessions, invalidating tokens/SSH keys, and freeing seats for [[License Audit & Seat Reclamation]].
