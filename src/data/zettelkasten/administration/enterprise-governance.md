---
title: "Enterprise Governance"
group: "governance"
tags: ["governance", "policies", "roles", "rulesets", "enterprise"]
---

**Enterprise Governance** defines **who can do what** across [[GitHub]] organizations, repositories, CI/CD pipelines, and Copilot clients by enforcing controls top-down rather than repository by repository.

## Five Top-Down Governance Layers

| Layer | Enforcement Scope | Primary Controls & Examples |
| --- | --- | --- |
| **1. Policies** | Organization -> Enterprise | 2FA, repo visibility, Actions allowlists, Copilot model access in [[Enterprise Policies]] |
| **2. Admin Roles** | Organization -> Enterprise | Enterprise Owner, Org Owner, Security Manager, Billing Manager, custom roles in [[Enterprise Admin Roles]] |
| **3. Permission Roles** | Organization -> Repository | [[Base Repository Permissions]] floor + cumulative `Read`..`Admin` tiers in [[Repository Roles]] |
| **4. Rulesets** | Enterprise / Org / Repo | Branch, tag, and push enforcement with custom property filters in [[Enterprise & Repo Rulesets]] |
| **5. Client Settings** | Copilot CLI / IDE / App | MDM, `managed-settings.json`, sandbox, and MCP allowlists in [[Copilot Managed Settings]] |

## Core Architectural Principles

- **Group-Driven Access Only**: Structure organizations via [[Organization Topology Models]] and route every grant through `IdP -> Teams -> Repositories` using [[IdP Group & Team Sync]] and [[Enterprise & Org Teams]], never direct individual user grants.
- **Downward Tightening Only**: Repositories hold no policies of their own; organizations inherit [[Enterprise Policies]] and can tighten restrictions, never loosen an enterprise-enforced rule.
- **Platform Operational Hygiene**:
  - Install enterprise-wide **GitHub Apps** once at the **enterprise level** rather than org by org (preventing approval scatter and config drift).
  - Use **event-driven webhooks** (hardened with secrets and SSL) rather than polling REST/GraphQL APIs and burning rate limits.
  - Configure **audit log streaming** to an external SIEM or object store so compliance evidence survives short default retention windows, alongside all 21 recommendations in [[GitHub Well-Architected Guardrails]].
