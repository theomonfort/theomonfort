---
title: ".github-private Repository"
group: "governance"
tags: ["github-private", "enterprise", "teams", "agents", "managed-settings"]
aliases: [".github-private"]
---

The **.github-private Repository** is the designated organization/enterprise control repository on GitHub (selected under `Enterprise -> AI controls -> Agents`) that distributes enterprise [[Custom Agent Scopes]] and server-managed [[Copilot Managed Settings]].

## Fixed Directory Structure

```text
.github-private/
├── agents/                    # published enterprise-wide custom agents
├── .github/agents/            # staging area to test agents before publishing
└── copilot/
    ├── managed-settings.json  # enterprise baseline settings
    ├── team-mappings.json     # maps override files to enterprise teams
    └── teams/*.json           # per-team overrides on OVERRIDABLE keys
```

## Team Overrides & Operational Guardrails

- **Per-Team Specialization**: Wrap baseline defaults in `{ "overridable": ... }` inside `managed-settings.json`, then set team values in `teams/*.json` (`sandbox` and marketplace arrays replace whole; if a user belongs to multiple teams, the **least restrictive** value wins).
- **Universal Reach & Hardening**: Settings and `/agents/` apply to every plan member regardless of repo access. Keep `.github-private` **internal**, protect `copilot/**` with `CODEOWNERS`, scope `/agents/` rulesets strictly to the source org, and check **Copilot settings validation** (`2026-09-25`) for config errors.
