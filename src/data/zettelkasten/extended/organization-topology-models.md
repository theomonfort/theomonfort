---
title: "Organization Topology Models"
group: "admin"
tags: ["organizations", "topology", "innersource", "governance", "m-and-a"]
---

**Organization Topology Models** determine how an enterprise partitions repositories across organizations under [[Enterprise Governance]], directly shaping default code discoverability, InnerSource collaboration, and reorganization resilience.

## Three Recommended Enterprise Org Topologies

| Model | Organization Layout | Default [[Base Repository Permissions]] & InnerSource Pattern |
| --- | --- | --- |
| **1. Single Organization** | All repositories live in **1** shared org; [[Enterprise & Org Teams]], custom properties, and repo roles draw internal boundaries | `Base permission = No permission` (`None`), paired with an **all-members team** granted `Read` (or `Write`) on shared repos so teams do not silo |
| **2. Red / Green / Sandbox** | **3** purpose-built orgs separated by confidentiality and experimentation | **Green** (~90% of repos, InnerSource home): `Write` (or `Read`) from day one.<br>**Red** (confidential / regulated, invite-only): `No permission`.<br>**Sandbox** (experiments & replacement for blocked personal repos): `Write` |
| **3. Portfolio Company** | **1** org per **top-level business division** (one level below the CEO), plus an optional governed open-source org | Internal reorganizations happen *inside* a division without moving repos; whole orgs can move cleanly across personal-account enterprises during M&A (subject to [[Org Transfer & Migration Limits]]) |

## Structural Anti-Patterns to Avoid (`#01` & `#02`)

Hardest governance mistakes to unwind later:

1. **Anti-Pattern #01 (One Org per Team or Project)**: Spawning dozens or hundreds of micro-organizations fragments search, breaks InnerSource reuse, and multiplies admin overhead; use teams and [[Enterprise & Repo Rulesets]] custom property filters inside a shared org instead.
2. **Anti-Pattern #02 (Mapping Orgs to the Management Org Chart)**: Every corporate reorg forces painful repository transfers and broken URLs/CI integrations; map orgs only to static top-level divisions or keep a single org.
