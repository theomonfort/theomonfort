---
title: "Fusion Execution Patterns"
group: "fusion"
tags: ["fusion", "single", "cascade", "critique", "routing"]
---

**Fusion Execution Patterns** are the dynamic per-prompt routing topologies selected automatically by [[Copilot Fusion]] after scoring a request across `Reasoning`, `Coding`, `Debugging`, and `Tools` at the chosen [[Fusion Effort Levels]].

## Three Dynamic Routing Paths

| Pattern | Execution Topology | How It Works |
| --- | --- | --- |
| **Single** | `Model -> Answer` | One policy-approved model solves the request directly with zero extra review calls |
| **Cascade** | `Draft -> Judge` | A fast, cost-efficient model drafts first; a judge model either **accepts** the draft or **escalates** to a stronger frontier model |
| **Critique** | `Draft -> Parallel Critiques -> Revise` | An initial draft is reviewed by parallel critique models; feedback is combined and the original model produces one revised final response |

## Runtime & Workspace Safety Behavior

- **Cache-Aware & Adaptive**: Routing respects prompt-cache boundaries, system health, and shifts in conversation complexity; consecutive prompts in the same chat can use different patterns.
- **Workspace Safety**: Fusion **does not launch subagents**; users can inspect step/model progress while seeing one clean final response. Because discarding an intermediate draft **does not undo file edits** made during that step, developers review diffs in [[SDLC Stage 02 Code]] and [[SDLC Stage 03 Review]] before committing.
