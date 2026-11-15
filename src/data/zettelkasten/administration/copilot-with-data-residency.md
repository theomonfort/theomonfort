---
title: "Copilot with Data Residency"
group: "deployment"
tags: ["copilot", "data-residency", "ghe-com", "ai-credits", "compliance"]
---

**Copilot with Data Residency** governs how GitHub Copilot processes prompts, context, and model inference for enterprises hosted on [[GHE.com Data Residency]].

## Plan Eligibility & Default Cross-Region Routing

- **Eligible SKUs**: Only **Copilot Business** and **Copilot Enterprise** seats under [[GHE & Copilot Licenses]] are supported on `*.ghe.com` (Copilot Free and Copilot Pro do not exist on `GHE.com`).
- **Default Behavior**: Out of the box, Copilot inference, prompts, and operational logs **may leave the enterprise's hosting region** so users can access the full catalog of AI models at standard token rates.

## In-Region Model Enforcement Policy

Enterprise owners can enable **Restrict Copilot to data residency compliant models** (disabled by default) under [[Enterprise Policies]] to keep Copilot processing inside the residency boundary where supported:

| Dimension | Default (`Policy Disabled`) | Strict In-Region (`Policy Enabled`) |
| --- | --- | --- |
| **Inference, prompts, and logs** | May cross regional boundaries | **Guaranteed to stay in-region** |
| **Available AI models** | All generally available & preview models | **Region-certified compliant models only** |
| **[[Usage-Based Billing]] cost** | Standard model token rates | **+10% AI credit consumption** |
| **Supported `GHE.com` regions** | EU, Australia, US, Japan | **US and EU only** |

## Regional Caveat for Japan & Australia

- **Japan (`JP`) and Australia (`AU`)**: In-region Copilot model inference is currently supported in the **US** and **EU** regions only. Enterprises hosted on `GHE.com` in Japan (GA `2025-12-18`) or Australia still have Copilot prompts and inference processed outside their home region.
