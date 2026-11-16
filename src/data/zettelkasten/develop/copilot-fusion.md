---
title: "Copilot Fusion"
group: "models-partners"
tags: ["fusion", "hydrafusion", "multi-model", "routing"]
aliases: ["Project HydraFusion"]
---

**Copilot Fusion** (`Project HydraFusion`, GA `2026-10-28` across [[Copilot in VS Code]], [[Copilot CLI]], [[GitHub Copilot App]], and JetBrains) is [[GitHub]] Copilot's multi-model orchestrator: you pick the effort level, and Fusion dynamically plans and routes models per request.

## Four Planning Signals & Benchmark Impact

- **Per-Prompt Evaluation**: Scores every prompt across **reasoning**, **code generation**, **debugging**, and **tool use**, respecting enterprise model policies, data residency, FedRAMP rules, and cache boundaries.
- **Measured Gains**: Achieves **60** on the Artificial Analysis Coding Agent Index (`Fusion Max`), cuts average token/API cost by **~50%** and task time by **~40%**, and reduces DeepSWE cost by up to **77%** (`Fusion High` vs single frontier model).
- **Execution & Billing**: Pairs with [[Fusion Effort & Execution Patterns]], complements cross-model [[Rubber Duck Review]], and offers a launch **30% model-cost discount** on paid plans through `2026-11-30` (normal per-model AI credit rates otherwise, no extra Fusion fee).
