---
title: "Copilot Proxy"
group: "trust-arch"
tags: ["copilot-proxy", "security", "pii", "ip-filter", "compliance"]
---

**Copilot Proxy** is the enterprise security and compliance gateway on [[GitHub]] through which prompts (`Context`) and generated outputs (`Suggestions`) pass between [[GitHub Copilot]] clients (including [[Copilot SDK]]) and upstream LLM providers in [[Copilot Multi-Model Catalog & BYOK]] (`OpenAI`, `Anthropic`, `Google Gemini`, `xAI Grok`, `Microsoft MAI`).

## Five Active Gateway Protections

1. **PII Removal**: Strips Personally Identifiable Information from outbound prompt context.
2. **Inappropriate Content Filtering**: Blocks harmful or policy-violating prompt and response content.
3. **Common Vulnerability Checks**: Screens generated code patterns against common security flaws alongside [[Trust Pillar]] scanning.
4. **IP (Intellectual Property) Filter**: Passes suggestions through public-code matching filters to support [[Copilot Trust & IP Protection]].
5. **Encryption in Transit**: Encrypts every request and response leg end to end, enforcing regional routing rules from [[Copilot Data Residency & FedRAMP]].
