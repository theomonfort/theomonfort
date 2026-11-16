---
title: "Enterprise Admin Roles"
group: "governance"
tags: ["admin-roles", "rbac", "least-privilege", "security-manager", "governance"]
---

**Enterprise Admin Roles** separate platform administration, billing, security oversight, and repository access under [[Enterprise Governance]], eliminating **Anti-Pattern #10** (granting broad `Owner` privileges where a scoped role suffices).

## Built-In & Custom Administrative Roles

| Role | Scope | Capabilities & Least-Privilege Guardrail |
| --- | --- | --- |
| **Enterprise Owner** | Enterprise | Controls SSO/SCIM, [[Enterprise Policies]], billing, and enterprise rulesets, yet holds **no access to organization settings or repository code by default** |
| **Billing Manager** | Enterprise / Org | Manages [[Enterprise Procurement Channels]], [[Cost Centers]], [[Budgets & Spending Limits]], [[Budget Threshold Alerts]], and invoices with **zero code or admin access** |
| **Organization Owner** | Single Org | Full administrative and repository control inside one org; **keep membership minimal, but never fewer than 2 owners** to prevent lockout |
| **Security Manager** | Organization | Grants `Read` across all org repositories plus full GitHub Advanced Security alert and enablement management without requiring Org Owner |
| **Guest Collaborator** | Enterprise (`EMU`) | Restricts external contractors from viewing `internal` repositories (see [[EMU Guest Collaborators]]) |
| **Custom Org / Enterprise Roles** | Enterprise / Org (`GHEC`) | Fine-grained permission bundles for single duties (for example, viewing enterprise/org audit logs or acting as a [[GitHub Enterprise Importer]] migrator) |

## Assigning Roles Safely

Assign administrative roles via [[Enterprise & Org Teams]] synced from corporate IdP security groups (`IdP -> Enterprise/Org Team -> Role`) rather than ad-hoc individual promotions, and reserve repository-level work for [[Repository Roles]].
