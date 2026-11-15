---
title: "Custom Agent Scopes"
group: "plan"
tags: ["scopes", "enterprise", "organization", "repository", "personal", "agents"]
---

**Custom Agent Scopes** let teams publish the same [[Agent Markdown Config]] (`.agent.md`) for [[Custom Agents]] at four levels of reach and governance.

## Four Publishing Scopes

| Scope | Directory Location | Reach & Management |
| --- | --- | --- |
| **Enterprise** *(Public Preview)* | Designated org's [[.github-private Repository]] -> `/agents/` | Every repository in the enterprise; members receive agents even without read access to `.github-private` |
| **Organization** *(Public Preview)* | Org's `.github` or `.github-private` -> `/agents/` | Every member of the organization; managed by org owners |
| **Repository** | `.github/agents/*.agent.md` | That repository/workspace, versioned in Git by the team |
| **Personal** | `~/.copilot/agents/*.agent.md` | All workspaces on your machine |

## Governance Gotcha

Enterprise owners can protect `/agents/` files with a repository ruleset, **but must scope that ruleset strictly to the designated source organization**; an unscoped enterprise ruleset on `/agents/` will also block organization owners from editing their own org-level agents.
