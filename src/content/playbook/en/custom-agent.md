---
title: Custom Agent
titleEn: Custom Agent
summary: A specialist profile that bundles role, tools, and behavior together for Copilot. Switch between Planner, Reviewer, and Tester personas with their own permissions.
icon: 🥷
color: green
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
| Copilot Chat / VS Code | Agent | Autonomously plans, edits, executes commands, and calls tools for complex coding tasks |
| Copilot Chat / VS Code | Plan | Creates a structured step-by-step implementation plan before writing code |
| Copilot Chat / VS Code | Ask | Answers questions about the codebase, coding concepts, and VS Code without modifying files |
| Copilot CLI | Explore | Quick codebase analysis. Ask questions about the code without adding to the main context |
| Copilot CLI | Task | Runs commands such as tests and builds, returning a brief summary on success and full output on failure |
| Copilot CLI | General-purpose | Handles complex multi-step tasks requiring the full toolset and high-quality reasoning in a separate context |
| Copilot CLI | Code-review | Reviews changes and surfaces only genuinely important issues with low noise |

> Display names may appear shortened depending on the UI preview, but the official CLI names are `General-purpose` and `Code-review`. For how to create custom agents in the CLI, see <a href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents" target="_blank" rel="noopener noreferrer" class="retro-link">About Copilot CLI custom agents</a> and <a href="https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli" target="_blank" rel="noopener noreferrer" class="retro-link">Create custom agents for CLI</a>.
