---
title: "Premium Request Model"
group: "billing"
tags: ["pru", "premium-requests", "ai-credits", "ubb", "billing"]
aliases: ["PRU", "PRU Model"]
---

**Premium Request Model** (`PRU`) was GitHub Copilot's per-seat request-multiplier billing scheme prior to **June 1, 2026**, when [[Usage-Based Billing]] transitioned organizations and enterprises to token-metered **GitHub AI credits** and the [[Shared AI Credit Pool]].

## PRU Model vs Shared AI Credit Model

| Dimension | Legacy PRU Model (Pre-June 2026) | AI Credit Model (`UBB`, June 2026+) |
| --- | --- | --- |
| **Billing unit** | Per-prompt request count x fixed model multiplier | Actual tokens processed (`input + output + cached`) in AI credits (`$0.01`) |
| **Included allowance scope** | Siloed per individual seat (`300` CB / `1,000` CE PRUs) | Pooled enterprise-wide in the [[Shared AI Credit Pool]] (`1,900` CB / `3,900` CE credits) |
| **Context size sensitivity** | Flat cost whether a prompt read 10 lines or 100 files | Scales directly with prompt size, response length, and cached context |
| **Primary advantage (`Pro`)** | One heavy user could never consume another user's included allowance | **Minimal waste**: light users' surplus automatically funds power users before overage starts |
| **Primary trade-off (`Con`)** | Enterprises paid overage for power users while light users' unused PRUs expired | Heavy agentic users can skew pool drawdown if left uncapped |

## Mitigating Pool Skew After PRU Retirement

To preserve per-person fairness inside the shared pool without reintroducing wasted per-seat silos, administrators combine a baseline universal cap (plus power-user overrides) in [[User-Level Budgets]] with department-level pool caps on [[Cost Centers]].
