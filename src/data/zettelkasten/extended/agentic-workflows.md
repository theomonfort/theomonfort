---
title: "Agentic Workflows"
group: "operate"
tags: ["agentic-workflows", "automation", "safe-outputs", "actions", "operate"]
aliases: ["Agentic Workflow"]
---

**Agentic Workflows** (`Describe -> Run -> Constrain`, GA in the [[Scale Pillar]]) let teams author continuous repository automations in plain Markdown (`.github/workflows/NAME.md`) and compile them via `gh aw compile` into deterministic [[Workflow Lockfiles]] (`.github/workflows/NAME.lock.yml`) running on [[GitHub Actions]] in [[SDLC Stage 05 Operate]].

## Constrained Autonomy (`safe-outputs`)

- **Read-Only by Default**: Runs [[GitHub Copilot]] with scoped [[MCP Servers]] under read-only `GITHUB_TOKEN` permissions for issue triage in [[Issues & Sub-issues]], CI failure root-cause analysis, and living documentation sync.
- **Validated `safe-outputs`**: All repository mutations pass through schema-validated output handlers (opening [[Draft Pull Requests]], posting comments, or updating labels) governed by [[Enterprise & Repo Rulesets]] and [[PR Rulesets]].
- **Keyless Billing**: Uses native `copilot-requests: write` workflow permissions with zero long-lived PATs, metered against organizational AI credits under [[Usage-Based Billing]] and [[Shared AI Credit Pool]].
