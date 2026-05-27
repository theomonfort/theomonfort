---
title: Agent Skills
titleEn: Agent Skills
summary: Reusable instruction packs that teach Copilot agents how to handle specialized tasks — loaded automatically when the request matches, no re-explaining required.
icon: 🎴
color: magenta
order: 6
category: plan
related: ['mcp', 'instructions', 'custom-agent', 'cli']
links:
  - group: 📖 Official Documentation
    label: GitHub Docs — Create skills for Copilot
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills
  - group: 📖 Official Documentation
    label: Agent Skills Spec (Open Standard)
    url: https://agentskills.io/specification
  - group: 🌟 Community Skills
    label: github/awesome-copilot — Skills List
    url: https://github.com/github/awesome-copilot/blob/main/docs/README.skills.md
  - group: 🌟 Community Skills
    label: awesome-copilot.github.com — Browse & Search
    url: https://awesome-copilot.github.com/skills
  - group: 🌟 Community Skills
    label: skills.sh — Open Agent Skills Registry
    url: https://skills.sh/
  - group: 🛠️ Reference Implementation
    label: theomonfort skills
    url: https://theomonfort.github.io/theomonfort/skills/
  - group: 📰 Recent Changelog
    label: "Manage agent skills with the GitHub CLI (2026-04-16)"
    url: https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli
---

## At a Glance

<div class="hero-quote">
  <p>
    <strong>Agent Skills</strong> are reusable instruction sets that teach Copilot <strong>how to handle specialized tasks</strong>.
  </p>
  <p>
    They are only loaded when the request matches the <strong>description</strong>, so specialist knowledge is applied without re-explaining every time.
  </p>
</div>

## 2 Scopes

|  | 👥 Team Shared | 👤 Personal |
| --- | --- | --- |
| 📁 **Location** | `.github/skills/` inside the repository | User home `~/.copilot/skills/` |
| 🎯 **Scope** | That repository only | All sessions for that user |
| 🤝 **Sharing** | Included in the repo — available to every teammate | Local only, not shared with other members |
| 💡 **Purpose** | Project-specific workflows (deploy, test generation, etc.) | Personal productivity |

## How It Works

Agent Skills are loaded via **Progressive Disclosure**.  
Rather than putting every skill's full content in context from the start, only lightweight **metadata** is read first; the content is expanded only for the skill that matches the user's request.


| Stage | What is loaded | When | Role |
| --- | --- | --- | --- |
| 1 | `name` / `description` | At startup / candidate selection | Determine which skill is likely to apply |
| 2 | `SKILL.md` body | When description matches the request | Hand the concrete execution steps to the agent |
| 3 | scripts / references / assets | When `SKILL.md` requires them | Add only the supporting information needed for execution |

> 💡 **The description is everything**: if it's vague, the skill won't match — or the wrong skill gets called.  
> Write **"what this skill does" + "when to use it"** clearly.

## Example

You can write skills yourself or install community-built ones as-is.  
GitHub-hosted skills are added to the current repository's skill directory (e.g. `.agents/skills/`) via `gh skill install` (GitHub CLI v2.90.0+).

### [github/awesome-copilot](https://awesome-copilot.github.com/skills)

GitHub's official curated skill collection. Pick the skill you want and add it.


```bash
gh skills install github/awesome-copilot <skill-name>
```

### [skills.sh - Visit page](https://skills.sh/)

A cross-ecosystem open registry. Browse and add GitHub-hosted skills.

```bash
gh skills install <owner>/<repo> <skill-name>
```
