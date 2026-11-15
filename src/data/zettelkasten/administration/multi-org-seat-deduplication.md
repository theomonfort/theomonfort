---
title: "Multi-Org Seat Deduplication"
group: "licensing"
tags: ["licensing", "multi-org", "copilot", "policies", "deduplication"]
---

**Multi-Org Seat Deduplication** ensures that a single human user belonging to multiple organizations (and linked [[GitHub Enterprise Server]] instances via GitHub Connect) within the same enterprise is billed only **once** per cycle under [[GHE & Copilot Licenses]].

## Single-Invoice Seat Consolidation

- **One GHE Seat Across N Orgs**: Joining 1 organization or 50 organizations inside the same [[GitHub Enterprise Cloud]] account consumes **1** GitHub Enterprise license.
- **One Copilot Charge Across N Orgs**: Even if several organizations assign a Copilot seat to the same user, the enterprise invoice bills **1** Copilot seat per billing cycle (if mixed across a Business org and an Enterprise org, the higher Copilot Enterprise tier governs billing and credit contribution to the [[Shared AI Credit Pool]]).
- **Cost Center Attribution**: Multi-org charges are never split fractionally; attribution follows the 4-level priority ladder in [[Cost Centers]].

## Multi-Org Copilot Policy Conflict Precedence

When a user belongs to multiple organizations whose [[Enterprise Policies]] leave Copilot settings to "Let organizations decide", conflicting org configurations resolve deterministically:

| Precedence Rule | Copilot Features Governed | Effective Outcome Across Orgs |
| --- | --- | --- |
| **Least restrictive wins** | Copilot Chat in IDE, agent mode, Copilot code review, cloud agent, web search, CLI | If **any** member org enables the feature, the user receives it everywhere |
| **Most restrictive wins** | **Copilot Metrics API** inclusion and **Suggestions matching public code** | If **any** member org disables/blocks the setting, it is blocked for that user everywhere |
