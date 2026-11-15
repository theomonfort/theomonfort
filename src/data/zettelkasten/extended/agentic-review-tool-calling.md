---
title: "Agentic Review Tool-Calling"
group: "review"
tags: ["agentic", "tool-calling", "static-analysis", "context", "copilot-review"]
aliases: ["Agentic Code Review", "Full-Project Context Review"]
---

**Agentic Review Tool-Calling** (launched **2026-03-05**) upgrades [[Copilot Code Review]] from a diff-only reader into a multi-step tool-calling agent executing inside an ephemeral GitHub Actions environment.

## How Agentic Context Gathering Works

| Capability | What Copilot Inspects Beyond the Raw Diff |
| --- | --- |
| **Full-Repository Exploration** | Calls read and search tools to open untouched files, trace callers and callees across packages, and inspect directory conventions |
| **Deterministic Linter & SAST Signals** | Combines LLM reasoning with deterministic static analysis (such as ESLint, compiler/type checks, and CodeQL signals from [[Code Scanning PR Merge Protection]]) to cut false positives |
| **Custom Rule Alignment** | Loads repository and path-scoped rules from [[Review Custom Instructions]] and specialist personas from [[Custom Agents in Code Review]] |
| **Auditability** | Exposes tool invocations and reasoning steps in GitHub Actions workflow logs and agent session transcripts |

## Execution Environment & Fallback

- **Runner Governance**: Runs on standard, larger, or self-hosted runners configured under [[Review Runner & Quota Governance]] (including custom pre-installed toolchains in `copilot-setup-steps.yml`).
- **Actions-Disabled Fallback**: If GitHub Actions is disabled or unavailable on a repository, [[Copilot Code Review]] gracefully falls back to diff-scoped review without full-project tool-calling.
