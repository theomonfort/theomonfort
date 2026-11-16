---
title: "Partner Agents"
group: "develop"
tags: ["partner-agents", "claude", "codex", "harnesses", "ai-credits", "models-partners"]
aliases: ["Partner Agents on One Subscription", "Third-Party Agents"]
---

**Partner Agents** let developers run third-party coding agent harnesses, specifically [[Claude Code on GitHub]] and [[OpenAI Codex on GitHub]], alongside [[GitHub Copilot]] under a single enterprise contract and unified AI credit pool.

## Two Execution Environments, Three Harnesses Each

| Environment | Available Agent Harnesses | Workflow Fit |
| --- | --- | --- |
| **IDE Agents** (Interactive) | **Copilot**, **Codex**, **Claude** | Synchronous local exploration, refactoring, and pair coding in [[Copilot in VS Code]] and across [[Copilot Surfaces]] |
| **Cloud Agents** (Async Coding) | **[[Copilot Cloud Agent]]**, **Claude Coding Agent**, **Codex Coding Agent** | Asynchronous Issue-to-PR delegation and parallel tasks in [[Agent HQ & Agent Teams]] and [[SDLC Stage 02 Code]] |

## Harness Choice, Governance & Consolidated Billing

- **Harness != Chat Mode**: Switching to a Partner Agent delegates execution to that provider's agent loop and SDK rather than Copilot's native harness, while keeping [[Cloud Agent Validation Tools]] on PR output.
- **Single Subscription & Opt-In Policy**: Disabled by default until enabled via [[Partner Agent Governance]]; all runs draw from [[Shared AI Credit Pool]] under [[Usage-Based Billing]], complementing [[Copilot Multi-Model Catalog & BYOK]].
