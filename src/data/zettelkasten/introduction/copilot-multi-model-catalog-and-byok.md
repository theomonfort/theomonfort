---
title: "Copilot Multi-Model Catalog & BYOK"
group: "copilot"
tags: ["models", "gpt", "claude", "gemini", "grok", "mai", "kimi", "byok"]
---

**Copilot Multi-Model Catalog & BYOK** gives [[GitHub Copilot]] users access to frontier model families without separate vendor contracts, while supporting custom endpoints where needed.

## Supported Model Families & Custom Keys

- **First-Class Model Families**: **OpenAI GPT** (including `GPT-5.5` GA `2026-04-24`), **Anthropic Claude**, **Google Gemini**, **xAI Grok**, **Microsoft MAI**, and **Kimi**.
- **Custom Models & BYOK**: Bring Your Own Key (`BYOK`) and custom model deployments on supported [[Copilot Surfaces]], governed by plan tier, client support, and administrator policies.

## Policy-Aware Model Pool

- Administrator allowlists, [[Copilot Data Residency & FedRAMP]] boundaries, and subscription entitlements determine which models are active in a user's workspace.
- Prompts to hosted models traverse [[Copilot Proxy]], and [[Copilot Fusion]] dynamically selects from the active policy-approved model pool per step (complementing [[Partner Agents on One Subscription]]).
