---
title: "Copilot Proxy"
group: "intro"
tags: ["copilot-proxy", "security", "pii", "ip-filter", "compliance", "trust-arch"]
---

**Copilot Proxy** is the enterprise security and compliance gateway on [[GitHub]] through which prompts (`Context`) and generated outputs (`Suggestions`) pass between [[GitHub Copilot]] clients ([[Copilot in VS Code]], [[Copilot CLI]], [[GitHub Copilot App]], and custom apps built with the [[Copilot SDK]]) and upstream LLM providers in [[Copilot Multi-Model Catalog & BYOK]] (`OpenAI`, `Anthropic`, `Google Gemini`, `xAI Grok`, `Microsoft MAI`).

## Five Active Gateway Protections

1. **PII Removal**: Strips Personally Identifiable Information from outbound prompt context.
2. **Inappropriate Content Filtering**: Blocks harmful or policy-violating prompt and response content.
3. **Common Vulnerability Checks**: Screens generated code patterns against common security flaws alongside [[Trust Pillar]] scanning and [[Code Scanning]].
4. **IP (Intellectual Property) Filter**: Passes suggestions through public-code matching filters to uphold [[Copilot Trust & IP Protection]] and Microsoft IP indemnity eligibility.
5. **Encryption in Transit & Regional Enforcement**: Encrypts every request and response leg end to end, enforcing US/EU and FedRAMP routing rules from [[Copilot Data Residency & FedRAMP]] and [[Copilot with Data Residency]] alongside [[Copilot Fusion]].
