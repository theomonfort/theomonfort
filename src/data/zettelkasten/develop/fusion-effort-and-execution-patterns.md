---
title: "Fusion Effort & Execution Patterns"
group: "models-partners"
tags: ["fusion", "effort", "cascade", "critique"]
---

**Fusion Effort & Execution Patterns** separate what the developer chooses (**Effort**) from how [[Copilot Fusion]] orchestrates models (**Pattern**) on each turn.

## Effort Tiers vs Orchestration Patterns

| Developer Effort Choice | Availability | Fusion Execution Pattern | Mechanics |
| --- | --- | --- | --- |
| **Standard** | All Copilot plans | **Single** | One selected model answers directly with no extra review calls |
| **High** | Pro+, Max, Business, Enterprise | **Cascade** | Efficient model drafts -> judge evaluates -> accepts or escalates |
| **Max** | Pro+, Max, Business, Enterprise | **Critique** | Model drafts -> parallel critiques -> combined feedback -> revised final output |

## Workspace & Policy Nuances

- **Effort != Per-Model Reasoning**: Disabling required frontier models in policy can make `Max` unavailable; custom keys and local runtimes live separately in [[BYOK & On-Device Models]].
- **File Edit Safety**: Fusion does not spawn subagents, and discarding an intermediate draft does not revert file edits made during tool execution, so review workspace diffs before committing.
