---
title: Agent Skills
titleEn: Agent Skills
summary: Reusable instruction packs that teach Copilot agents how to handle specialized tasks — loaded automatically when the request matches, no re-explaining required.
icon: /theomonfort/icons/agent-skills.png
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

Agent Skills are loaded via **progressive disclosure**.  
Rather than putting every skill's full content in context from the start, only lightweight **metadata** is read first; the content is expanded only for the skill that matches the user's request.


| Stage | What is loaded | When | Role |
| --- | --- | --- | --- |
| 1 | `name` / `description` | At startup / candidate selection | Determine which skill is likely to apply<br/>※ Clearly state **what the skill does** + **when to use it** |
| 2 | `SKILL.md` body | When description matches the request | Hand the concrete execution steps to the agent |
| 3 | scripts / references / assets | When `SKILL.md` requires them | Add only the supporting information needed for execution |

## What happens inside the harness?

When a user makes a request, the harness first loads only the **metadata for every skill** into context. When the LLM decides it needs a specific skill, the harness **expands the full body (SKILL.md)** and adds it to the context.

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 490" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'DotGothic16','Courier New',monospace;">
  <defs>
    <marker id="arrow-orange" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffb000"/>
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
    </marker>
    <marker id="arrow-pink" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff2e88"/>
    </marker>
  </defs>
  <path d="M 260 50 L 720 50" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 140 85 L 140 400 L 400 400 L 400 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 410 290 L 410 400 L 515 400 L 515 420" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-pink)"/>
  <path d="M 620 420 L 620 376" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <path d="M 660 375 L 750 375 L 750 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 660 340 L 690 340 L 690 200 L 720 200" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <rect x="20" y="15" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="35" y="36" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="35" y="58" fill="#e8f4ff" font-size="12" font-weight="bold">PUT ALL SKILLS DESCRIPTIONS</text>
  <text x="35" y="74" fill="#e8f4ff" font-size="12" font-weight="bold">IN CONTEXT</text>
  <rect x="720" y="15" width="340" height="215" rx="6" fill="#0a0e27" stroke="#1e2a4a" stroke-width="1"/>
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
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold">## Architecture Overview</tspan>
  </text>
  <rect x="370" y="230" width="80" height="60" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="410" y="252" fill="#ff2e88" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">USER</text>
  <text x="410" y="271" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">"WORK ON</text>
  <text x="410" y="284" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">API"</text>
  <rect x="420" y="305" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="435" y="326" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="435" y="348" fill="#e8f4ff" font-size="12" font-weight="bold">LOADS FULL SKILL INTO</text>
  <text x="435" y="364" fill="#e8f4ff" font-size="12" font-weight="bold">CONTEXT</text>
  <text x="635" y="389" fill="#3b82f6" font-size="10" font-weight="bold">need the</text>
  <text x="635" y="402" fill="#3b82f6" font-size="10" font-weight="bold">API skill</text>
  <text x="20" y="445" fill="#e8f4ff" font-size="11" font-weight="bold">MODEL</text>
  <text x="20" y="461" fill="#e8f4ff" font-size="11" font-weight="bold">CONTEXT</text>
  <rect x="95" y="420" width="110" height="55" rx="10" fill="#9bbc0f"/>
  <text x="150" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="150" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="215" y="420" width="110" height="55" rx="10" fill="#00f0ff"/>
  <text x="270" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="335" y="420" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="400" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILLS</text>
  <text x="400" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DESCRIPTION</text>
  <rect x="475" y="420" width="80" height="55" rx="10" fill="#ff2e88"/>
  <text x="515" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="565" y="420" width="110" height="55" rx="10" fill="#00f0ff"/>
  <text x="620" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="620" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">REQUEST</text>
  <rect x="685" y="420" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="750" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="750" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DOCUMENT</text>
</svg>
</figure>

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
