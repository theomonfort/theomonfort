---
title: "Copilot Memory"
group: "context"
tags: ["memory", "repository-facts", "copilot", "github"]
---

**Copilot Memory** persists verified facts across sessions on [[GitHub]] (`Store -> Reuse -> Refine`) so coding agents, Copilot Code Review, and Copilot Autofix start with institutional knowledge instead of rediscovering it.

## Repository vs Personal Memory

| Scope | What It Stores | Visibility & Guardrails |
| --- | --- | --- |
| **Repository** | Code-cited architecture facts and build/test commands (`Validate with pnpm build`) | Shared across repo tasks, Code Review, and Autofix |
| **Personal** | User-stated, non-sensitive workflow preferences across repos | Scoped to the user within the Business/Enterprise billing entity |

## Retention & Compliance Boundary

- **Expiry**: Memories expire after **90 days** by default (configurable **7-180 days** by admins); **upvotes reset expiry, reads do not**.
- **Guidance vs Rules**: Memory is opportunistic and cannot guarantee compliance; put mandatory conventions in [[Custom Instructions]] and maintained updates in [[Copilot Dreaming]].
