---
title: Agent Skills
titleEn: Agent Skills
summary: Reusable instruction packs that teach Copilot agents how to handle specialized tasks — loaded automatically when the request matches, no re-explaining required.
icon: /theomonfort/icons/agent-skills.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
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
  - group: 📖 Official Documentation
    label: Agent Plugins 1.0 — Build an Agent Plugin
    url: https://agent-plugins.org/plugin-authors/build-an-agent-plugin
  - group: 📖 Official Documentation
    label: GitHub Docs — About plugins
    url: https://docs.github.com/en/copilot/concepts/agents/about-plugins
  - group: 🌟 Community Skills
    label: github/awesome-copilot — Skills List
    url: https://github.com/github/awesome-copilot/blob/main/docs/README.skills.md
  - group: 🌟 Community Skills
    label: awesome-copilot.github.com — Browse & Search
    url: https://awesome-copilot.github.com/skills
  - group: 🌟 Community Skills
    label: skills.sh — Open Agent Skills Registry
    url: https://skills.sh/
  - group: 🌟 Community Skills
    label: GitHub Agent Finder — discover skills/MCP/agents
    url: https://github.com/agentfinder
  - group: 🛠️ Reference Implementation
    label: theomonfort skills
    url: https://theomonfort.github.io/theomonfort/skills/
  - group: 🛠️ Reference Implementation
    label: agent-plugins-example — example plugin & migration guide
    url: https://github.com/agentplugins/agent-plugins-example
  - group: 📰 Recent Changelog
    label: "Manage agent skills with the GitHub CLI (2026-04-16)"
    url: https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli
  - group: 📰 Recent Changelog
    label: "Agent Plugins 1.0 in VS Code, Copilot CLI, and the Copilot app (2026-08-12)"
    url: https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/
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

**Progressive disclosure**: read lightweight metadata first, then expand only the skill that matches the request.

| Stage | What is loaded | When | Role |
| --- | --- | --- | --- |
| 1 | `name` / `description` | At startup / candidate selection | Select a skill: **what it does + when to use it** |
| 2 | `SKILL.md` body | When description matches the request | Hand the concrete execution steps to the agent |
| 3 | scripts / references / assets | When `SKILL.md` requires them | Add only the supporting information needed for execution |

## What happens inside the harness?

**All skill metadata first**, then the full **SKILL.md** only when needed.

<figure class="skills-pipeline">
<svg viewBox="0 0 1100 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="skills-title skills-desc">
<title id="skills-title">Progressive skill loading inside the harness</title>
<desc id="skills-desc">The harness adds metadata for every skill to model context. When the model requests the API skill, the harness reads its full SKILL.md and appends the body.</desc>
<defs>
<marker id="skills-amber" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker>
<marker id="skills-cyan" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker>
<marker id="skills-magenta" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker>
</defs>
<g fill="none" stroke-width="2">
<path d="M320 70 H730" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
<path d="M170 120 V375 H522.5 V390" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
<path d="M525 255 V365 H680 V390" stroke="var(--c-neon-magenta)" stroke-dasharray="6 5" marker-end="url(#skills-magenta)"/>
<path d="M817.5 390 V360" stroke="var(--c-neon-cyan)" marker-end="url(#skills-cyan)"/>
<path d="M920 325 H1090 V215 H1080" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
<path d="M870 360 V372 H990 V390" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
</g>
<rect x="20" y="20" width="300" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="38" y="48" fill="var(--c-crt-amber)" font-size="20" font-weight="700">HARNESS</text>
<text x="38" y="78" fill="var(--c-phosphor)" font-size="19"><tspan x="38">Load metadata for all skills</tspan><tspan x="38" dy="25">into model context</tspan></text>
<rect x="730" y="20" width="350" height="240" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-cyan)" stroke-width="1.5"/>
<text x="746" y="45" fill="var(--c-neon-cyan)" font-size="18" font-weight="700">SKILL.md</text>
<text x="746" y="72" fill="var(--c-phosphor)" font-size="16">
<tspan x="746"><tspan fill="var(--c-crt-amber)">name:</tspan> api-endpoint</tspan>
<tspan x="746" dy="23"><tspan fill="var(--c-crt-amber)">description:</tspan> REST API endpoints</tspan>
<tspan x="746" dy="23">for OctoCAT Supply Chain.</tspan>
<tspan x="746" dy="23">Use for CRUD endpoints, routes,</tspan>
<tspan x="746" dy="23">and JPA repositories; follow patterns.</tspan>
<tspan x="746" dy="30" fill="var(--c-neon-cyan)" font-weight="700"># API Endpoint Development</tspan>
<tspan x="746" dy="24" fill="var(--c-neon-cyan)" font-weight="700">## Architecture Overview</tspan>
</text>
<rect x="430" y="155" width="190" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="525" y="187" text-anchor="middle" fill="var(--c-neon-magenta)" font-size="20" font-weight="700">USER</text>
<text x="525" y="222" text-anchor="middle" fill="var(--c-phosphor)" font-size="20">“Work on API”</text>
<rect x="620" y="290" width="300" height="70" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="638" y="318" fill="var(--c-crt-amber)" font-size="18" font-weight="700">HARNESS (ON DEMAND)</text>
<text x="638" y="343" fill="var(--c-phosphor)" font-size="18">Append the selected skill body</text>
<text x="10" y="414" fill="var(--c-phosphor)" font-size="17" font-weight="700"><tspan x="10">MODEL</tspan><tspan x="10" dy="24">CONTEXT</tspan></text>
<rect x="110" y="390" width="135" height="60" rx="3" fill="var(--c-gb-green)"/>
<rect x="260" y="390" width="160" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="435" y="390" width="175" height="60" rx="3" fill="var(--c-crt-amber)"/>
<rect x="625" y="390" width="110" height="60" rx="3" fill="var(--c-neon-magenta)"/>
<rect x="742.5" y="390" width="150" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="900" y="390" width="180" height="60" rx="3" fill="var(--c-crt-amber)"/>
<g fill="var(--c-shadow-ink)" text-anchor="middle" font-size="17" font-weight="700">
<text x="177.5" y="414"><tspan x="177.5">SYSTEM</tspan><tspan x="177.5" dy="23">+ TOOLS</tspan></text>
<text x="340" y="426">INSTRUCTIONS</text>
<text x="522.5" y="414"><tspan x="522.5">ALL SKILLS</tspan><tspan x="522.5" dy="23">METADATA</tspan></text>
<text x="680" y="426">PROMPT</text>
<text x="817.5" y="414"><tspan x="817.5">SKILL REQUEST</tspan><tspan x="817.5" dy="23" font-size="14">api-endpoint</tspan></text>
<text x="990" y="414"><tspan x="990">SELECTED</tspan><tspan x="990" dy="23">SKILL BODY</tspan></text>
</g>
</svg>
</figure>

## Example

Write your own skills or install community skills with `gh skill install` (GitHub CLI v2.90.0+). GitHub-hosted skills go into the current repository's skill directory, e.g. `.agents/skills/`.

<div class="setup-cards skill-examples">
<div class="setup-card">

### [github/awesome-copilot](https://awesome-copilot.github.com/skills)

GitHub's curated skill collection. Pick a skill and add it.

```bash
gh skills install github/awesome-copilot <skill-name>
```

</div>
<div class="setup-card">

### [skills.sh - Visit page](https://skills.sh/)

A cross-ecosystem open registry. Browse and add GitHub-hosted skills.

```bash
gh skills install <owner>/<repo> <skill-name>
```

</div>
<div class="setup-card">

### [GitHub Agent Finder](https://github.com/agentfinder)

Find **MCP servers, tools, skills, and agents** for a task. Install `agentfinder`, then run `/agentfinder <task>` to list matches. [SKILL.md](https://github.com/ards-project/connectors/blob/main/skills/github-copilot/SKILL.md)

```bash
gh skills install ards-project/connectors skills/github-copilot
```

</div>
</div>

## Plugins

Install skills, MCP integrations, custom agents, hooks or interactive canvases together as a single package.

- **Less setup:** install related capabilities together.
- **Share team tools and workflows** across projects.
- **Use community plugins** or package your own.

**Testing toolkit (illustrative):** test skill + review agent + test-report MCP.<br />
<a class="retro-link" href="https://github.com/github/awesome-copilot/blob/main/extensions/ai-credits-breakdown/README.md" target="_blank" rel="noopener noreferrer">AI Credits Breakdown</a>: interactive usage canvas for the Copilot app.

## Install and use a plugin <a class="h2-doc" href="https://awesome-copilot.github.com/plugins/" target="_blank" rel="noopener noreferrer">Browse plugins ↗</a>

Two marketplaces ship built in: **`copilot-plugins`** (GitHub's own) and **`awesome-copilot`** (community).

| Command | What it does |
| --- | --- |
| 🔍 `copilot plugin marketplace browse awesome-copilot` | See what's available |
| 📥 `copilot plugin install <name>@awesome-copilot` | Install from a marketplace |
| 📋 `copilot plugin list` | Show installed plugins and their state |
| 🗑️ `copilot plugin uninstall <name>` | Remove it |

> ⚠️ Installs are **user-level, not per-repo** — they land in `~/.copilot/installed-plugins/` and apply to every project.
