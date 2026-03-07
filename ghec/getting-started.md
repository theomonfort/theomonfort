---
title: Getting Started
layout: default
parent: GHEC
nav_order: 1
---

# Getting Started with GitHub Enterprise Cloud

📖 **Official docs**: [GHEC Documentation](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)

## What Is GHEC

GitHub Enterprise Cloud is GitHub's **fully managed, cloud-hosted enterprise tier**. It builds on top of GitHub Team with capabilities designed for organizations that need centralized governance, compliance controls, and scale.

### What GHEC Adds Over GitHub Team

| Capability | GitHub Team | GHEC |
|-----------|-------------|------|
| SAML SSO | ❌ | ✅ |
| SCIM provisioning | ❌ | ✅ |
| Enterprise Managed Users (EMU) | ❌ | ✅ |
| Enterprise account (multi-org) | ❌ | ✅ |
| IP allow lists | ❌ | ✅ |
| Audit log streaming | ❌ | ✅ |
| Repository rulesets (enterprise-wide) | ❌ | ✅ |
| 50,000 GitHub Actions minutes/month | ❌ | ✅ |
| Advanced Security (GHAS) included | ❌ | ✅ |
| 99.9% SLA | ❌ | ✅ |

> 💡 **Theo's Tip**: GHEC's real value isn't any single feature — it's the **enterprise account layer** that lets you manage policies, billing, and identity across dozens of organizations from one place. If you're only running a single org, you might not need GHEC yet.

## Enterprise Account Structure

GHEC introduces a hierarchy that doesn't exist on lower tiers:

```
Enterprise Account
├── Organization A
│   ├── Team: Frontend
│   │   ├── repo: webapp
│   │   └── repo: design-system
│   └── Team: Backend
│       ├── repo: api-service
│       └── repo: auth-service
├── Organization B
│   └── Team: Data
│       ├── repo: pipeline
│       └── repo: ml-models
└── Enterprise Policies (apply to ALL orgs)
```

- **Enterprise account** — the top-level container. Owns billing, policies, and identity.
- **Organizations** — logical groupings (by team, business unit, product line).
- **Teams** — groups of users within an org. Control repo access.
- **Repositories** — where the code lives.

Enterprise owners can enforce policies that cascade down to every org — no exceptions.

## Enterprise Managed Users vs Personal Accounts

This is the **most important architectural decision** you'll make when setting up GHEC.

| Aspect | EMU | Personal Accounts + SAML |
|--------|-----|--------------------------|
| Account ownership | Enterprise owns the account | User owns their account |
| Identity source | IdP only (Azure AD, Okta, etc.) | User signs up, IdP links via SAML |
| Can contribute to public repos | ❌ | ✅ |
| Can join other enterprises | ❌ | ✅ |
| Username format | `shorthandle_enterprise` | User chooses |
| Offboarding | Deprovisioned via SCIM — instant | SAML session revoked, account persists |
| Open source participation | Not possible | Full access |
| Best for | Regulated industries, strict IP control | Developer-friendly orgs, open source |

> 💡 **Theo's Tip**: EMU is a **one-way door** — you cannot convert an existing GHEC enterprise to EMU or vice versa without starting over. Choose carefully. If your developers contribute to open source or need personal GitHub accounts, go with SAML SSO on personal accounts. If you need absolute control over every identity and zero data leakage risk, choose EMU.

## Setting Up SSO with SAML

SAML SSO lets you enforce authentication through your identity provider. Users still have GitHub accounts but must authenticate through your IdP to access enterprise resources.

### Azure AD / Entra ID

```
1. In Entra ID → Enterprise Applications → New Application
2. Search "GitHub Enterprise Cloud" → Add
3. Single sign-on → SAML → Configure:
   - Identifier (Entity ID): https://github.com/orgs/YOUR_ORG
   - Reply URL: https://github.com/orgs/YOUR_ORG/saml/consume
4. Download the Federation Metadata XML
5. In GitHub → Org Settings → Authentication security → Enable SAML
6. Paste the Sign-on URL, Issuer, and Public Certificate from Entra ID
7. Test the configuration before enforcing
```

### Okta

```
1. In Okta Admin → Applications → Browse App Catalog
2. Search "GitHub Enterprise Cloud - Organization" → Add
3. Configure SAML 2.0:
   - Single sign-on URL: https://github.com/orgs/YOUR_ORG/saml/consume
   - Audience URI: https://github.com/orgs/YOUR_ORG
4. In GitHub → Org Settings → Authentication security → Enable SAML
5. Enter IdP metadata from Okta
6. Test → Enforce
```

> 💡 **Theo's Tip**: **Always test SAML before enforcing.** Once enforced, users who haven't linked their IdP identity will be locked out. Test with a small group first, verify the login flow, then enforce org-wide.

## SCIM Provisioning

SCIM (System for Cross-domain Identity Management) automates user lifecycle management. When someone joins your company, they automatically get a GitHub seat. When they leave, they're automatically deprovisioned.

```
IdP (Okta / Entra ID)
    │
    ├── User created  →  GitHub seat provisioned + added to teams
    ├── User updated  →  Team membership synced
    └── User deleted  →  GitHub seat removed, access revoked
```

### Enabling SCIM

1. **Prerequisite**: SAML SSO must be configured and enforced first
2. In your IdP, enable provisioning for the GitHub Enterprise Cloud app
3. Generate a **SCIM token** in GitHub: Org Settings → Authentication security → SCIM
4. Enter the SCIM token and base URL in your IdP
5. Configure attribute mappings (username, email, display name)
6. Assign groups in your IdP — they map to GitHub teams

> 💡 **Theo's Tip**: SCIM group-to-team mapping is powerful but fragile. Document your mappings in a runbook. When team structures change in the IdP, the GitHub side changes automatically — and surprises are not fun when someone suddenly loses access to a critical repo at 2 AM.

## IP Allow Lists

Restrict access to your enterprise resources by IP address — only traffic from approved networks can reach your repos, APIs, and web UI.

```bash
# Configure via API
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /orgs/YOUR_ORG/ip-allow-list \
  -f name="Office VPN" \
  -f value="203.0.113.0/24" \
  -F is_active=true
```

| Setting | Description |
|---------|-------------|
| `name` | Human-readable label for the IP range |
| `value` | CIDR notation (e.g., `10.0.0.0/8`) |
| `is_active` | Enable/disable without deleting |

> 💡 **Theo's Tip**: Before enabling IP allow lists, add your CI/CD runner IPs (GitHub-hosted runner ranges or your self-hosted runner IPs). Forgetting this will break every pipeline in your enterprise instantly.

## Audit Log & Streaming

GHEC provides a **90-day audit log** at the enterprise level. For longer retention, stream logs to an external SIEM.

```bash
# Query the enterprise audit log via API
gh api \
  --method GET \
  /enterprises/YOUR_ENTERPRISE/audit-log \
  --jq '.[] | "\(.created_at) \(.action) \(.actor)"' \
  | head -20
```

### Supported Streaming Destinations

| Destination | Configuration |
|------------|---------------|
| Splunk | HEC endpoint + token |
| Datadog | API key + site |
| Azure Event Hubs | Connection string |
| Amazon S3 | Bucket + IAM role |
| Google Cloud Storage | Bucket + service account |

Set up streaming in: Enterprise Settings → Audit log → Log streaming → New stream.

## Initial Setup Checklist

| Step | Action | Owner |
|------|--------|-------|
| 1 | Create enterprise account | GitHub Sales / Admin |
| 2 | Decide: EMU vs personal accounts | Architecture team |
| 3 | Configure SAML SSO | Identity / Security team |
| 4 | Enable and test SCIM provisioning | Identity team |
| 5 | Create organization structure | Enterprise owner |
| 6 | Define team hierarchy and repo access | Org admins |
| 7 | Set enterprise policies (2FA, base permissions) | Enterprise owner |
| 8 | Configure IP allow lists | Security team |
| 9 | Set up audit log streaming | Security / Compliance |
| 10 | Enable GitHub Advanced Security | Security team |
| 11 | Configure Actions policies (allowed actions, runners) | Platform team |
| 12 | Onboard first pilot group | All |

> 💡 **Theo's Tip**: Don't try to configure everything at once. Start with steps 1–6, onboard a pilot team, gather feedback, then layer on security controls. A phased rollout catches misconfigurations early — before they affect hundreds of developers.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
