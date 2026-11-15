---
title: ".github-private & Source Org"
group: "admin"
tags: ["github-private", "source-org", "managed-settings", "enterprise-teams", "agents", "governance"]
aliases: [".github-private Repository", ".github-private"]
---

**.github-private & Source Org** is the designated enterprise control repository on [[GitHub]] (configured under **Enterprise -> AI controls -> Agents**) that distributes enterprise [[Custom Agent Scopes]] ([[Custom Agents]]) and server-managed [[Copilot Managed Settings]] across every user on [[GHE & Copilot Licenses]].

## Fixed Repository Layout

Administrators choose which organization acts as the **source org**, while the `.github-private` repository name and internal directory paths are fixed:

```text
.github-private/
├── agents/                    # published enterprise-wide custom agents
├── .github/agents/            # staging area to test agents before publishing
└── copilot/
    ├── managed-settings.json  # enterprise baseline settings
    ├── team-mappings.json     # maps override files to enterprise teams
    └── teams/*.json           # per-team overrides on OVERRIDABLE keys
```

## Per-Team Specialization (`2026-08-03` GA)

- **Overridable Wrapper**: In `copilot/managed-settings.json`, wrap any `OVERRIDABLE` baseline value (`model`, `autoTier`, `permissions.*`, `sandbox`, marketplace lists, `allowedMcpServers` / `deniedMcpServers`) inside `{ "overridable": ... }`, then define replacement values in `copilot/teams/<team>.json` linked via `team-mappings.json` to [[Enterprise & Org Teams]].
- **Merge & Conflict Rules**: Omitted keys inherit the baseline; `sandbox` and marketplace arrays are **replaced whole**; if a user belongs to multiple mapped teams, the **least restrictive** value wins (`LOCKED` keys cannot be overridden).

## Hardening & In-Product Validation

- **Universal Reach**: Policies in `copilot/` and agents in `agents/` apply to **everyone** licensed in the enterprise regardless of repository read access.
- **Protection Guardrails**: Keep `.github-private` **internal**, protect `copilot/**` and `agents/**` with [[CODEOWNERS]] and [[Enterprise & Repo Rulesets]] (scoped strictly to the source org), and inspect **Copilot settings validation** (GA `2026-09-25`) for schema or mapping errors.
