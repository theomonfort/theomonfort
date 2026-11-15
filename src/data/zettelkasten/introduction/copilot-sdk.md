---
title: "Copilot SDK"
group: "copilot"
tags: ["sdk", "extensibility", "embed", "platform"]
---

**Copilot SDK** (`github/copilot-sdk`, Public Preview `2026-04-02`) lets engineering teams embed [[GitHub Copilot]] capabilities directly inside their own internal developer portals, CLIs, and custom applications.

## Role Across Copilot Surfaces

- Listed as one of the seven core [[Copilot Surfaces]], complementing interactive IDEs, the Copilot App, Copilot CLI, and Cloud Agent.
- Reuses enterprise authentication, [[Copilot Multi-Model Catalog & BYOK]] policies, and [[Copilot Proxy]] compliance guardrails rather than requiring teams to maintain bespoke LLM gateways.
- Connects naturally with GitHub's REST/GraphQL APIs and webhooks in [[SDLC Stage 05 Operate]] to build custom company-specific workflows.
