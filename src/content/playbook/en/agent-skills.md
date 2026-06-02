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

## What happens inside the harness?

When a user makes a request, the harness first loads only the **metadata for every skill** into context. When the LLM decides it needs a specific skill, the harness **expands the full body (SKILL.md)** and adds it to the context.

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 540" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'JetBrains Mono','Courier New',monospace;">
  <path d="M 260 50 L 720 50" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="720" cy="50" r="4" fill="#ffb000"/>
  <path d="M 140 85 L 140 450 L 365 450 L 365 470" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 410 290 L 410 445 L 480 445 L 480 470" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="5 4"/>
  <path d="M 580 290 L 580 445 L 585 445 L 585 470" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5 4"/>
  <path d="M 535 290 L 535 340 L 540 340 L 540 355" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M 540 425 L 540 450 L 715 450 L 715 470" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 660 390 L 690 390 L 690 200 L 720 200" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="720" cy="200" r="4" fill="#ffb000"/>
  <rect x="20" y="15" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="35" y="36" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="35" y="58" fill="#e8f4ff" font-size="12" font-weight="bold">PUT ALL SKILLS DESCRIPTIONS</text>
  <text x="35" y="74" fill="#e8f4ff" font-size="12" font-weight="bold">IN CONTEXT</text>
  <rect x="720" y="15" width="340" height="320" rx="6" fill="#0a0e27" stroke="#1e2a4a" stroke-width="1"/>
  <text x="735" y="40" font-size="10" fill="#cfe9ff">
    <tspan x="735" dy="0" fill="#555">---</tspan>
    <tspan x="735" dy="14"><tspan fill="#ffb000">name:</tspan> api-endpoint</tspan>
    <tspan x="735" dy="14"><tspan fill="#ffb000">description:</tspan> Generate REST API</tspan>
    <tspan x="735" dy="14">  endpoints for the OctoCAT Supply</tspan>
    <tspan x="735" dy="14">  Chain application following</tspan>
    <tspan x="735" dy="14">  established patterns. Use this</tspan>
    <tspan x="735" dy="14">  skill when creating new CRUD</tspan>
    <tspan x="735" dy="14">  endpoints, adding routes,</tspan>
    <tspan x="735" dy="14">  implementing JPA repositories.</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold"># API Endpoint Development</tspan>
    <tspan x="735" dy="22">This skill guides the creation</tspan>
    <tspan x="735" dy="14">of REST API endpoints following</tspan>
    <tspan x="735" dy="14">the OctoCAT Supply Chain</tspan>
    <tspan x="735" dy="14">application's established patterns.</tspan>
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold">## Architecture Overview</tspan>
    <tspan x="735" dy="22">The API follows a layered</tspan>
    <tspan x="735" dy="14">architecture: Controllers →</tspan>
    <tspan x="735" dy="14">Repository → SQLite Database.</tspan>
  </text>
  <rect x="370" y="230" width="80" height="60" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="410" y="252" fill="#ff2e88" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">USER</text>
  <text x="410" y="271" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">"WORK ON</text>
  <text x="410" y="284" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">API"</text>
  <rect x="465" y="230" width="140" height="60" rx="10" fill="#0a0e27" stroke="#3b82f6" stroke-width="2"/>
  <text x="535" y="252" fill="#3b82f6" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">LLM TO HARNESS</text>
  <text x="535" y="271" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">I NEED THE</text>
  <text x="535" y="284" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">API SKILL</text>
  <rect x="420" y="355" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="435" y="376" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="435" y="398" fill="#e8f4ff" font-size="12" font-weight="bold">LOADS FULL SKILL INTO</text>
  <text x="435" y="414" fill="#e8f4ff" font-size="12" font-weight="bold">CONTEXT</text>
  <text x="20" y="495" fill="#e8f4ff" font-size="11" font-weight="bold">MODEL</text>
  <text x="20" y="511" fill="#e8f4ff" font-size="11" font-weight="bold">CONTEXT</text>
  <rect x="60" y="470" width="110" height="55" rx="10" fill="#9bbc0f"/>
  <text x="115" y="494" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="115" y="510" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="180" y="470" width="110" height="55" rx="10" fill="#3b82f6"/>
  <text x="235" y="503" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="300" y="470" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="365" y="494" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILLS</text>
  <text x="365" y="510" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DESCRIPTION</text>
  <rect x="440" y="470" width="80" height="55" rx="10" fill="#ff2e88"/>
  <text x="480" y="503" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="530" y="470" width="110" height="55" rx="10" fill="#3b82f6"/>
  <text x="585" y="494" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="585" y="510" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">REQUEST</text>
  <rect x="650" y="470" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="715" y="494" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="715" y="510" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DOCUMENT</text>
</svg>
</figure>

> 💡 Thanks to **progressive disclosure**, startup cost stays at metadata size even with hundreds of skills installed — only the one actually used gets fully loaded.

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
