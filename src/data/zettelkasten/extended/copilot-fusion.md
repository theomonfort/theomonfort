---
title: "Copilot Fusion"
group: "intro"
tags: ["fusion", "hydrafusion", "multi-model", "routing", "benchmarks", "models-partners"]
aliases: ["Project HydraFusion"]
---

**Copilot Fusion** (`Project HydraFusion`, **GA `2026-10-28`** across [[Copilot in VS Code]], [[Copilot CLI]], [[GitHub Copilot App]], and JetBrains) is [[GitHub]]'s multi-model orchestration engine inside [[GitHub Copilot]]: **you choose the effort level, and Fusion chooses the models**.

## Four-Dimension Planning Per Request

For every prompt, Fusion evaluates **four task dimensions** (`Reasoning`, `Code Generation`, `Debugging`, and `Tool Use`) against [[Copilot Multi-Model Catalog & BYOK]] policies, [[Copilot Data Residency & FedRAMP]] rules, cache boundaries, and live provider health, pairing [[Fusion Effort Levels]] with [[Fusion Execution Patterns]] (and complementing explicit cross-model [[Rubber Duck Review]]) to deliver **one unified final response**.

## Published Benchmark Results (Artificial Analysis & DeepSWE)

| Metric | Measured Result | Benchmark Detail |
| --- | --- | --- |
| **Coding Agent Index** | **60** | `Fusion Max` scores within 2 points of `Opus 5.5 Max` |
| **API Cost & Tokens** | **1/2** (`50%` lower) | Average API cost and token usage per task |
| **Wall-Clock Speed** | **~40% less time** | Faster average completion per task |
| **Peak Cost Savings** | **Up to 77% lower cost** | `DeepSWE`: `Fusion High` vs `GPT-6 Astra (high)`, while achieving higher accuracy |

Shipped as a flagship GA capability of the [[Innovate Pillar]] with transparent per-model token metering under [[Fusion Billing & Launch Pricing]] and [[Usage-Based Billing]].
