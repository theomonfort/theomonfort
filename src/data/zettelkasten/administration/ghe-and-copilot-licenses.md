---
title: "GHE & Copilot Licenses"
group: "licensing"
tags: ["licensing", "copilot", "ghe", "seats", "ghas"]
aliases: ["Copilot Licenses", "GHE Licenses"]
---

**GHE & Copilot Licenses** structure how [[GitHub]] enterprises purchase and assign core platform seats, committer security licenses, and AI developer plans under a single enterprise invoice.

## Three-Tier Enterprise License & Service Model

| Billing Category | Product / SKU | Who Consumes It |
| --- | --- | --- |
| **User License** | **GitHub Enterprise** or **Visual Studio Subscription** bundle | Any user joining an org or accessing private/internal repos (see [[Enterprise Procurement Channels]]) |
| **Committer License** | **GitHub Advanced Security** (`Code Security` / `Secret Protection`) | Active committers who push or merge commits on protected private/internal repos |
| **Metered Add-Ons** | **Copilot Business / Enterprise**, **Actions**, **Codespaces**, **Packages**, **Git LFS** | Seat holders + token/compute consumption under [[Usage-Based Billing]] (`LFS` currently free during migration) |

## Copilot Business vs Copilot Enterprise

- **Enterprise Billing Entity**: Copilot seats are billed from the moment of assignment (with mid-cycle proration) even if unused, and deduplicated per user via [[Multi-Org Seat Deduplication]].
- **Two Enterprise Tiers**:
  - **Copilot Business (`$19` / user / month)**: Includes `1,900` AI credits (`$19` value) in the [[Shared AI Credit Pool]]; also available to standalone non-enterprise organizations.
  - **Copilot Enterprise (`$39` / user / month)**: Includes `3,900` AI credits (`$39` value) plus `github.com` web Chat with repo-indexed knowledge, fine-tuned models, and enterprise audit logs (requires [[GitHub Enterprise Cloud]]).

## Organization vs Direct Enterprise Seat Assignment

Each organization selects **one** Copilot tier (Business **or** Enterprise; tiers cannot mix inside a single org). Since `2025-10-28` (GA), admins can also assign **Copilot Business** directly at the enterprise level:

| Assignment Surface | Available Tiers | Coverage & Policy Behavior |
| --- | --- | --- |
| **Org -> Copilot -> Access** | Business **or** Enterprise (matches org plan) | Covers members (and [[Outside Collaborators]] / [[EMU Guest Collaborators]]) of that org |
| **Enterprise -> Copilot -> Access** | **Business only** (GA `2025-10-28`) | Follows the user across every org, or licenses **Unaffiliated users** without consuming a GHE seat (see [[License Audit & Seat Reclamation]]) |

Users licensed directly at the enterprise without org membership skip "Let organizations decide" and follow **Policies for enterprise-assigned users** in [[Enterprise Policies]].
