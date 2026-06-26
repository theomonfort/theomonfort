---
title: Custom Agent
titleEn: Custom Agent
summary: A specialist profile that bundles role, tools, and behavior together for Copilot. Switch between Planner, Reviewer, and Tester personas with their own permissions.
icon: /theomonfort/icons/custom-agent.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 7
category: plan
related: ['agent-skills', 'cli']
links:
  - group: 📖 Reference (common)
    label: GitHub Docs — Custom agents configuration
    url: https://docs.github.com/en/copilot/reference/custom-agents-configuration
  - group: ☁️ Cloud Agent
    label: GitHub Docs — Creating custom agents for Copilot cloud agent
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents
  - group: 💻 Copilot CLI
    label: GitHub Docs — About Copilot CLI custom agents
    url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents
  - group: 💻 Copilot CLI
    label: GitHub Docs — Create custom agents for Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli
  - group: 🆚 VS Code
    label: VS Code Docs — Custom agents
    url: https://code.visualstudio.com/docs/copilot/customization/custom-agents
  - group: 🌟 Community examples
    label: github/awesome-copilot — Custom agents
    url: https://github.com/github/awesome-copilot/tree/main/agents
---

## In a nutshell

<div class="hero-quote">
  <p>
    A <strong>Custom Agent</strong> is a specialist profile that hands Copilot a <strong>role, tools, and behavior</strong> all at once.
  </p>
  <p>
    Even with the "same AI", you can switch between personas like Planner, Reviewer, and Tester — each with its own permissions.
  </p>
</div>

## What does it lock in?

A Custom Agent locks in not just a prompt, but the entire "working style" of an agent.

| Element | What does it define? | Example |
| --- | --- | --- |
| Identity | What persona to adopt | `Planner`, `Security Reviewer`, `Test Specialist` |
| Description | When to invoke it | "When creating a plan before implementation" |
| Tools | Which tools to use | `read`, `search`, `edit`, `github/*` |
| Model | Which model to run on | Strong model for design, fast model for exploration |
| Target | Which runtime to target | `github-copilot`, `vscode` |
| MCP | Dedicated external tools | Jira, Figma, Playwright, internal API |
| Prompt | Decision criteria & output format | Success criteria, restrictions, review focus |

## Two scopes

|  | 👥 Team shared | 👤 Personal |
| --- | --- | --- |
| 📁 Location | `.github/agents/*.agent.md` | `~/.copilot/agents/` |
| 🎯 Scope | That repository / workspace | All your workspaces |
| 🤝 Sharing | Managed in Git, shared with team | Local only |
| 💡 Use case | Team-standard Planner / Reviewer / Tester | Personal work style & preferences |

## Inside `.agent.md`

A Custom Agent is a Markdown file. The YAML frontmatter at the top is configuration; the body below is the instruction to the agent. For all configurable fields, see the <a href="https://docs.github.com/en/copilot/reference/custom-agents-configuration" target="_blank" rel="noopener noreferrer" class="retro-link">Custom agents configuration reference</a>.

```yaml
---
name: design-reviewer
description: Review UI differences between Figma and implementation
target: github-copilot
model: Claude Sonnet 4.5
tools:
  - read
  - search
  - github/pull-request-read
  - figma/*
mcp-servers:
  figma:
    type: local
    command: npx
    args: ["-y", "figma-mcp-server"]
---

# Role

You are a design reviewer for UI implementations.
Compare Figma specifications against Pull Request diffs and review only visual differences: appearance, spacing, colors, and state variations.

# Rules

- Do not edit code
- Separate blocking vs. non-blocking findings
- Always include reproduction steps and screen widths to check
- Only flag issues grounded in Figma or the diff — no guesses
```

> A good Custom Agent is defined not by "who" it is, but by **which decisions to delegate** to it.

## Built-in agent examples

Copilot Chat and CLI come with purpose-built agents out of the box.  
Custom Agents are the mechanism for **extending this to your own team**.

| Surface | Agent | What does it do? |
| --- | --- | --- |
| Copilot Chat / VS Code | Ask | Answers questions without making changes |
| Copilot Chat / VS Code | Explore | Fast read-only codebase exploration and Q&A subagent |
| Copilot Chat / VS Code | Plan | Researches and outlines multi-step plans |
| Copilot CLI | Explore | Quick codebase analysis. Ask questions about the code without adding to the main context |
| Copilot CLI | Task | Runs commands such as tests and builds, returning a brief summary on success and full output on failure |
| Copilot CLI | General-purpose | Handles complex multi-step tasks requiring the full toolset and high-quality reasoning in a separate context |
| Copilot CLI | Rubber-duck | Gives high-signal feedback on plans and implementations, catching bugs, logic errors, and design flaws (never edits code) |
| Copilot CLI | Code-review | Reviews changes and surfaces only genuinely important issues with low noise |
| Copilot CLI | Research | A subagent that runs thorough searches: digs through GitHub repos, fetches files, and reports findings with citations |
| Copilot CLI | Security-review | Reviews changes for high-confidence security vulnerabilities (11 categories) with severity and confidence scores |

> Display names may appear shortened depending on the UI preview, but the official CLI names are `General-purpose` and `Code-review`. For how to create custom agents in the CLI, see <a href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents" target="_blank" rel="noopener noreferrer" class="retro-link">About Copilot CLI custom agents</a> and <a href="https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli" target="_blank" rel="noopener noreferrer" class="retro-link">Create custom agents for CLI</a>.

## What happens inside the harness?

When a user invokes a Custom Agent, the harness fetches its `.agent.md`, narrows the available tools, injects the agent definition, and appends the prompt. The model ends up with a four-layer context: **SYSTEM & TOOLS / INSTRUCTIONS / CUSTOM AGENT / PROMPT**.

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 470" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'DotGothic16','Courier New',monospace;">
  <text x="20" y="50" fill="#e8f4ff" font-size="13" font-weight="bold">USER</text>
  <rect x="110" y="25" width="340" height="50" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="280" y="56" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">"/TDD-RED ADD API ENDPOINT"</text>
  <path d="M 450 50 L 510 50" fill="none" stroke="#ff2e88" stroke-width="2"/>
  <rect x="510" y="25" width="150" height="50" rx="12" fill="#ffb000"/>
  <text x="585" y="56" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">CUSTOM AGENT</text>
  <rect x="665" y="25" width="110" height="50" rx="12" fill="#ff2e88"/>
  <text x="720" y="56" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <path d="M 585 75 L 585 115" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="585" cy="115" r="4" fill="#ffb000"/>
  <rect x="380" y="115" width="400" height="65" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="580" y="139" fill="#ffb000" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="580" y="162" fill="#e8f4ff" font-size="13" font-weight="bold" text-anchor="middle">RETRIEVES .agent.md FILE</text>
  <path d="M 580 180 L 580 215 L 245 215 L 245 245" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 580 215 L 580 245" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 580 215 L 815 215 L 815 245" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="245" cy="245" r="4" fill="#9bbc0f"/>
  <circle cx="580" cy="245" r="4" fill="#ffb000"/>
  <circle cx="815" cy="245" r="4" fill="#ff2e88"/>
  <rect x="155" y="245" width="180" height="80" rx="12" fill="#0a0e27" stroke="#9bbc0f" stroke-width="2"/>
  <text x="245" y="268" fill="#9bbc0f" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="245" y="290" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">ADJUSTS</text>
  <text x="245" y="308" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">AVAILABLE TOOLS</text>
  <rect x="490" y="245" width="180" height="80" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="580" y="268" fill="#ffb000" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="580" y="290" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">INJECTS AGENT</text>
  <text x="580" y="308" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">DEFINITION</text>
  <rect x="725" y="245" width="180" height="80" rx="12" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="815" y="268" fill="#ff2e88" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">HARNESS</text>
  <text x="815" y="290" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">APPENDS</text>
  <text x="815" y="308" fill="#e8f4ff" font-size="12" font-weight="bold" text-anchor="middle">PROMPT</text>
  <path d="M 245 325 L 245 395" fill="none" stroke="#9bbc0f" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 580 325 L 580 395 L 620 395" fill="none" stroke="#ffb000" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 815 325 L 815 395" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="20" y="417" fill="#e8f4ff" font-size="13" font-weight="bold">MODEL</text>
  <text x="20" y="435" fill="#e8f4ff" font-size="13" font-weight="bold">CONTEXT</text>
  <rect x="155" y="395" width="180" height="55" rx="12" fill="#9bbc0f"/>
  <text x="245" y="420" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="245" y="436" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="345" y="395" width="170" height="55" rx="12" fill="#00f0ff"/>
  <text x="430" y="428" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="525" y="395" width="190" height="55" rx="12" fill="#ffb000"/>
  <text x="620" y="428" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">CUSTOM AGENT</text>
  <rect x="725" y="395" width="180" height="55" rx="12" fill="#ff2e88"/>
  <text x="815" y="428" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
</svg>
</figure>

> 💡 INSTRUCTIONS is already there for every run. A Custom Agent only adds the three layers above it: **tool narrowing, agent definition, and prompt**.

## Subagents — offloading task-specific context

When you need a deep dive, have the harness spin up a **subagent**. It does the heavy reading in its own context window and returns **only a summary** to the main session.

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 460" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'DotGothic16','Courier New',monospace;">
  <rect x="385" y="15" width="240" height="48" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="505" y="45" fill="#e8f4ff" font-size="14" font-weight="bold" text-anchor="middle">"FIND MY FEATURE"</text>
  <path d="M 505 63 L 505 93" fill="none" stroke="#ff2e88" stroke-width="2"/>
  <circle cx="505" cy="93" r="4" fill="#ff2e88"/>
  <text x="20" y="122" fill="#e8f4ff" font-size="14" font-weight="bold">MAIN</text>
  <text x="20" y="142" fill="#e8f4ff" font-size="14" font-weight="bold">SESSION</text>
  <rect x="160" y="98" width="135" height="55" rx="12" fill="#9bbc0f"/>
  <text x="227" y="121" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="227" y="141" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="300" y="98" width="135" height="55" rx="12" fill="#00f0ff"/>
  <text x="367" y="132" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="440" y="98" width="130" height="55" rx="12" fill="#ff2e88"/>
  <text x="505" y="132" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="575" y="98" width="135" height="55" rx="12" fill="#6b7280"/>
  <text x="642" y="132" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">SUMMARY</text>
  <path d="M 505 153 L 505 183" fill="none" stroke="#ff2e88" stroke-width="2"/>
  <circle cx="505" cy="183" r="4" fill="#ff2e88"/>
  <rect x="305" y="183" width="400" height="60" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="505" y="205" fill="#ffb000" font-size="13" font-weight="bold" text-anchor="middle" letter-spacing="1">LLM → HARNESS</text>
  <text x="505" y="229" fill="#e8f4ff" font-size="14" font-weight="bold" text-anchor="middle">"CREATE SUBAGENT"</text>
  <path d="M 505 243 L 505 273" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="505" cy="273" r="4" fill="#ffb000"/>
  <text x="20" y="312" fill="#e8f4ff" font-size="14" font-weight="bold">SUBAGENT</text>
  <rect x="160" y="278" width="115" height="55" rx="12" fill="#9bbc0f"/>
  <text x="217" y="301" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="217" y="321" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="280" y="278" width="125" height="55" rx="12" fill="#00f0ff"/>
  <text x="342" y="312" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="410" y="278" width="100" height="55" rx="12" fill="#ff2e88"/>
  <text x="460" y="312" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="515" y="278" width="85" height="55" rx="12" fill="#ffb000"/>
  <text x="557" y="312" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">FILE 1</text>
  <rect x="605" y="278" width="85" height="55" rx="12" fill="#ffb000"/>
  <text x="647" y="312" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">FILE 2</text>
  <rect x="695" y="278" width="85" height="55" rx="12" fill="#ffb000"/>
  <text x="737" y="312" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">FILE 3</text>
  <rect x="785" y="278" width="115" height="55" rx="12" fill="#6b7280"/>
  <text x="842" y="312" fill="#05060f" font-size="13" font-weight="bold" text-anchor="middle">SUMMARY</text>
  <path d="M 900 305 L 985 305 L 985 125 L 720 125" fill="none" stroke="#6b7280" stroke-width="2.5"/>
  <polygon points="710,125 720,120 720,130" fill="#6b7280"/>
  <text x="1060" y="198" fill="#9ca3af" font-size="13" font-weight="bold" text-anchor="end" letter-spacing="1">HARNESS</text>
  <text x="1060" y="218" fill="#e8f4ff" font-size="13" font-weight="bold" text-anchor="end">PUTS SUMMARY</text>
  <text x="1060" y="236" fill="#e8f4ff" font-size="13" font-weight="bold" text-anchor="end">BACK INTO MAIN</text>
</svg>
</figure>
