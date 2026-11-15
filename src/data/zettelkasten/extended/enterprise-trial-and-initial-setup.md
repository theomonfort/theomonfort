---
title: "Enterprise Trial & Initial Setup"
group: "admin"
tags: ["trial", "setup", "emu", "onboarding", "iam"]
---

**Enterprise Trial & Initial Setup** covers provisioning a new [[GitHub Enterprise Cloud]] account via a **30-day free trial (50 licenses)** so administrators can validate identity, team sync, and governance before converting to paid [[Enterprise Procurement Channels]].

## Upfront Creation Choices (Immutable Decisions)

When starting a trial, two architectural choices are permanently bound to the enterprise slug:

1. **User Identity Type**:
   - **[[Enterprise Managed Users]]**: Provisioned at `github.com/account/enterprises/new?users_type=enterprise_managed` (IdP owns every user).
   - **Personal Accounts (non-EMU)**: Provisioned at `github.com/account/enterprises/new` (existing `github.com` handles join orgs).
2. **Data Hosting Location**:
   - **Standard `github.com`** (US storage) vs **[[GHE.com Data Residency]]** (dedicated regional `*.ghe.com` subdomain in EU, AU, US, or JP).

Changing either axis after rollout requires creating a separate enterprise and running [[EMU Type Conversion]].

## EMU Bootstrap Admin Account (`<shortcode>_admin`)

Selecting EMU automatically generates a single dedicated recovery/setup user (`<shortcode>_admin`):

1. **Password Initialization**: Open the activation email link to set the password and store recovery codes securely.
2. **Overview Setup Checklist**: Sign in as `<shortcode>_admin` -> open the **Overview** tab -> configure [[SAML & OIDC SSO]] (via [[Entra ID Enterprise App]], Okta, or PingFederate) and generate the `admin:enterprise` classic PAT for [[SCIM Provisioning]].
3. **Strict Operational Rule**: Reserve `<shortcode>_admin` exclusively for emergency IdP/SCIM configuration. All day-to-day administration and development must use IdP-provisioned `<username>_<shortcode>` accounts granted [[Enterprise Admin Roles]].
