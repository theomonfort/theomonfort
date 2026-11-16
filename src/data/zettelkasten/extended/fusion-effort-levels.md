---
title: "Fusion Effort Levels"
group: "intro"
tags: ["fusion", "effort", "standard", "high", "max"]
aliases: ["Fusion Effort & Execution Patterns"]
---

**Fusion Effort Levels** are the developer-facing control knob in [[Copilot Fusion]], letting you pick the cost-versus-depth trade-off per task instead of manually switching models across [[Copilot Surfaces]].

## Three Effort Tiers

| Effort Level | Plan Eligibility | Target Workload |
| --- | --- | --- |
| **Standard** | All Copilot plans | Everyday coding, quick questions, and single-model tasks |
| **High** | Pro+, Max, Business, Enterprise | Complex bugs, debugging traces, and multi-file changes |
| **Max** | Pro+, Max, Business, Enterprise | Deepest architectural reasoning and thorough multi-model critique |

## Governance & Policy Rules

- **Effort != Per-Model Reasoning**: Effort controls the entire routing plan (including [[Fusion Execution Patterns]]), whereas each internal step sets its own model, context window, and reasoning budget.
- **Policy-Bound Availability**: Administrator model policies in [[Copilot Multi-Model Catalog & BYOK]] and [[Copilot Data Residency & FedRAMP]] still apply; disabling required frontier models can make `Max` unavailable, and higher effort tiers affect token spend in [[Fusion Billing & Launch Pricing]].

## Custom & Local Model Escape Hatch

- Custom provider API keys and local Ollama or on-device runtimes operate outside Fusion routing via [[BYOK & On-Device Models]] and manual [[Copilot Model Selection]].
