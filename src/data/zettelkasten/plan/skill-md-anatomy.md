---
title: "SKILL.md Anatomy"
group: "skills"
tags: ["skill-md", "frontmatter", "yaml", "authoring"]
aliases: ["SKILL.md"]
---

**SKILL.md Anatomy** defines the YAML frontmatter, Markdown body, and optional supporting folders of each skill in [[Agent Skills]] (portable inside `skills/` of [[Plugin Manifest & Namespace]]).

## Frontmatter & Routing Example

```yaml
---
name: api-endpoint
description: >
  Generate REST API endpoints for the OctoCAT Supply Chain application
  following established patterns. Use this skill when creating new CRUD
  endpoints, adding routes, or implementing JPA repositories.
---

# API Endpoint Development
## Architecture Overview
```

## Authoring Rules

- **`description` Drives Stage 1 Routing**: Must state **what** the skill produces and **when** to trigger it so [[Agent Skills]] selects it accurately before loading the full file.
- **Structured Body**: Specify role, objective, deliverable, architecture invariants, and verification commands.
- **Supporting Folders**: Place helper scripts under `scripts/`, detailed docs under `references/`, and templates under `assets/` so Stage 3 loads them only on demand.
