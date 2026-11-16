---
title: "Copilot Proxy"
group: "models-partners"
tags: ["proxy", "security", "compliance", "copilot-sdk"]
aliases: ["Copilot SDK"]
---

**Copilot Proxy** is the secure enterprise gateway on [[GitHub]] through which prompts and model responses travel between developer clients (or custom apps built with the **Copilot SDK**, public preview `2026-04-02`) and upstream LLM providers.

## Five Built-in Compliance Protections

- **PII Scrubbing**: Strips Personally Identifiable Information from prompt context.
- **Content Filtering**: Blocks harmful or inappropriate prompt/output content.
- **Vulnerability Screening**: Checks generated suggestions against common security vulnerability patterns.
- **IP & Public-Code Filter**: Enforces public-code matching controls and Microsoft IP indemnity eligibility.
- **Encrypted Transit & Regional Controls**: Encrypts all traffic in transit and enforces US/EU data residency and FedRAMP model boundaries alongside [[Copilot Fusion]] and [[Copilot in VS Code]].
