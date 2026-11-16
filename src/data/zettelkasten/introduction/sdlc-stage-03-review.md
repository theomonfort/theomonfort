---
title: "SDLC Stage 03 Review"
group: "sdlc"
tags: ["sdlc", "review", "pull-requests", "code-review", "playwright", "rubber-duck"]
---

**SDLC Stage 03 Review** is the verification gateway of the [[AI Developer Platform]], addressing the core bottleneck identified in [[Octoverse & Agent Era Metrics]] as agent-authored code volume scales.

## Native & AI Review Capabilities

| Capability | Category | Verification Role |
| --- | --- | --- |
| **Pull Requests** | Native Platform | Diff inspection, inline review threads, CODEOWNERS routing, and merge queues (220M merged/month) |
| **Copilot Code Review** | Copilot | Automated first-pass PR review, including **Code Review Max** (Preview) and **Copilot Approvals** (GA) in the [[Innovate Pillar]] |
| **Playwright** | Copilot | Headless browser rendering and UI interaction checks executed by coding agents before human review |
| **Rubber Duck** | Copilot | Cross-model critique agent that reviews plans and diffs with a different model family to catch blind spots |

Reviewed pull requests proceed directly into automated CI and security gates in [[SDLC Stage 04 Test & Secure]] after implementation in [[SDLC Stage 02 Code]].
