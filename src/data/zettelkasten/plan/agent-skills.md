---
title: "Agent Skills"
group: "skills"
tags: ["skills", "skill-md", "workflows", "agentskills"]
aliases: ["Skills"]
---

**Agent Skills** (`agentskills.io` open specification) are reusable instruction and asset packs on [[GitHub]] Copilot that teach specialized workflows and load automatically only when a user request matches their description.

## Two Scopes

| Attribute | Team Shared | Personal |
| --- | --- | --- |
| **Directory** | `.github/skills/<name>/SKILL.md` (or `.agents/skills/`) | `~/.copilot/skills/<name>/SKILL.md` (or `~/.agents/skills/`) |
| **Reach** | That repository only, versioned in Git for every teammate | All sessions for that user on their machine |

## 3-Stage On-Demand Loading

1. **Stage 1 (`name` + `description`)**: Loaded at session startup as a lightweight skill catalog.
2. **Stage 2 (Full `SKILL.md` body)**: Injected only when the user prompt matches `description`.
3. **Stage 3 (`scripts/`, `references/`, `assets/`)**: Read just in time only if `SKILL.md` requests them.

## Ecosystem & Packaging

- Structured via [[SKILL.md Anatomy]], installed from community catalogs via [[Skill Registries & CLI]] or [[GitHub Agent Finder]], bundled with MCP via [[Agent Plugins]], and refined in repo PRs by [[Copilot Dreaming]].
