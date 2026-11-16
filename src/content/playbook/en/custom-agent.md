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
  hex: "#86efac"
order: 7
category: plan
related: ['agent-skills', 'cli']
links:
  - group: 📖 Reference (common)
    label: GitHub Docs — Custom agents configuration
    url: https://docs.github.com/en/copilot/reference/custom-agents-configuration
  - group: 🏛️ Organization / Enterprise
    label: GitHub Docs — Preparing to use custom agents in your organization
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents
  - group: 🏛️ Organization / Enterprise
    label: GitHub Docs — Preparing to use custom agents in your enterprise
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents
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
    url: https://code.visualstudio.com/docs/agent-customization/custom-agents
  - group: 🆚 VS Code
    label: VS Code Docs — Subagents
    url: https://code.visualstudio.com/docs/agents/subagents
  - group: 📰 Announcement
    label: "Built-in Explore subagent (VS Code 1.110)"
    url: https://github.blog/changelog/2026-03-06-github-copilot-in-visual-studio-code-v1-110-february-release
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
| Tools | Which tools to use | `read`, `search`, `edit`, `agent`, `github/*` |
| Agents | Allowed subagents (`agent` tool required) | `Research`, `Reviewer`, `*` |
| Model | Which model to run on | Strong model for design, fast model for exploration |
| Target | Which runtime to target | `github-copilot`, `vscode` |
| MCP | Dedicated external tools | Jira, Figma, Playwright, internal API |
| Prompt | Decision criteria & output format | Success criteria, restrictions, review focus |

## Four scopes

Publish the same `.agent.md` at four levels. Wider reach needs stronger governance.

|  | 🏢 Enterprise | 🏛️ Organization | 👥 Repository | 👤 Personal |
| --- | --- | --- | --- | --- |
| 📁 Location | Designated org's `.github-private` → `/agents/` | Org's `.github` or `.github-private` → `/agents/` | `.github/agents/` | `~/.copilot/agents/` |
| 🎯 Scope | Every repository in the enterprise | Every member of the organization | That repository / workspace | All your workspaces |
| 🤝 Managed by | Enterprise owners / AI managers | Organization owners | The repo's team, via Git | You only |
| 💡 Use case | Company-wide standards & compliance | Division-standard Planner / Reviewer | Project-specific Tester / Reviewer | Personal work style & preferences |

> 🆕 **Public preview**: members receive org / enterprise agents without source-repo access. Enterprise owners can protect agent files with rulesets; limit these to the designated org so org owners can still edit their own agents.

## Inside `.agent.md` <a class="h2-doc" href="https://docs.github.com/en/copilot/reference/custom-agents-configuration" target="_blank" rel="noopener noreferrer">DOCS ↗</a>

One Markdown file: **YAML configuration** first, then the **agent's instructions**.

<div class="example-columns">
<div>

### Configuration

```yaml
---
name: design-reviewer
description: Review UI differences between Figma and implementation
target: github-copilot
model: Claude Sonnet 4.5
tools: [read, search, github/pull-request-read, figma/*]
mcp-servers:
  figma:
    type: local
    command: npx
    args: ["-y", "figma-mcp-server"]
---
```

</div>
<div>

### Instructions

```markdown
# Role

Review UI implementations against Figma and Pull Request diffs.
Check only appearance, spacing, colors, and state variations.

# Rules

- Do not edit code
- Separate blocking vs. non-blocking findings
- Always include reproduction steps and screen widths to check
- Only flag issues grounded in Figma or the diff — no guesses
```

</div>
</div>

> A good Custom Agent is defined not by "who" it is, but by **which decisions to delegate** to it.

## Agents vs. internal subagents

VS Code exposes **Agent, Plan, and Ask** to users. Internal helpers such as `searchSubagent` are tools invoked by another agent, not selectable `.agent.md` profiles.

| Surface | Agent / tool | What does it do? |
| --- | --- | --- |
| Copilot Chat / VS Code | Agent | Implements complex tasks with editing and tool access |
| Copilot Chat / VS Code | Ask | Answers questions and researches without making changes |
| Copilot Chat / VS Code | Plan | Researches and outlines multi-step plans |
| VS Code internal | `searchSubagent` | Runs isolated, parallel codebase research and returns a summary |

> 🔑 VS Code's former Explore behavior now appears through `searchSubagent`. Its prompt and tool are implemented in TypeScript/TSX, so there is no editable Explore `.agent.md`.

## Copilot CLI built-in subagents

| Agent | Best for |
| --- | --- |
| Explore | Fast, read-only codebase research |
| Task | Running tests, builds, and verbose commands |
| General-purpose | Complex multi-step work with the full toolset |
| Rubber-duck | Independently reviews plans and implementations. Assign it a different model with `/subagents` to test work from a perspective other than the model that created it |
| Code-review | High-confidence review of a diff |
| Research | Thorough GitHub and web research with citations |
| Security-review | High-confidence vulnerability review |

> 🦆 Rubber-duck's strength is **cross-model review**. Instead of asking a model to evaluate its own work, use another model to critique the plan or implementation and expose blind spots or reasoning biases.

## What happens inside the harness?

Load `.agent.md`, narrow tools, add agent + prompt. Existing instructions stay.

<figure class="agent-pipeline">
<svg viewBox="0 0 1100 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="agent-harness-title agent-harness-desc">
<title id="agent-harness-title">Loading a custom agent</title>
<desc id="agent-harness-desc">The harness retrieves agent.md, narrows tools, and adds the agent definition and prompt. Existing instructions remain in context.</desc>
<defs><marker id="agent-harness-green" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-gb-green)"/></marker><marker id="agent-harness-cyan" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker><marker id="agent-harness-amber" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker><marker id="agent-harness-magenta" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker></defs>
<path d="M550 57 H610" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" marker-end="url(#agent-harness-magenta)"/>
<path d="M730 85 V105 H590 V125" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M590 195 V220 H270 V245" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M590 195 V245" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M590 220 H910 V245" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M270 330 V370 H255 V390" fill="none" stroke="var(--c-gb-green)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#agent-harness-green)"/>
<path d="M590 330 V365 H705 V390" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#agent-harness-amber)"/>
<path d="M910 330 V365 H937.5 V390" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#agent-harness-magenta)"/>
<text x="20" y="60" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">USER</tspan></text>
<rect x="110" y="30" width="440" height="55" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="330" y="64" font-size="19" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="330">“/TDD-RED Add an API endpoint”</tspan></text>
<rect x="610" y="30" width="240" height="55" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="730" y="64" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="730">CUSTOM AGENT</tspan></text>
<rect x="865" y="30" width="185" height="55" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="957.5" y="64" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="957.5">PROMPT</tspan></text>
<rect x="395" y="125" width="390" height="70" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="590" y="152" font-size="18" font-weight="700" fill="var(--c-crt-amber)" text-anchor="middle"><tspan x="590">HARNESS</tspan></text>
<text x="590" y="179" font-size="20" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="590">Retrieve the .agent.md file</tspan></text>
<rect x="145" y="245" width="250" height="85" rx="3" fill="var(--c-midnight)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="270" y="275" font-size="17" font-weight="700" fill="var(--c-gb-green)" text-anchor="middle"><tspan x="270">HARNESS</tspan></text>
<text x="270" y="306" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="270">Narrow tool access</tspan></text>
<rect x="465" y="245" width="250" height="85" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="590" y="275" font-size="17" font-weight="700" fill="var(--c-crt-amber)" text-anchor="middle"><tspan x="590">HARNESS</tspan></text>
<text x="590" y="306" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="590">Load agent definition</tspan></text>
<rect x="785" y="245" width="250" height="85" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="910" y="275" font-size="17" font-weight="700" fill="var(--c-neon-magenta)" text-anchor="middle"><tspan x="910">HARNESS</tspan></text>
<text x="910" y="306" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="910">Append the prompt</tspan></text>
<text x="20" y="415" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">MODEL</tspan><tspan x="20" dy="23">CONTEXT</tspan></text>
<rect x="145" y="390" width="220" height="60" rx="3" fill="var(--c-gb-green)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="255" y="414" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="255">SYSTEM</tspan><tspan x="255" dy="23">+ TOOLS</tspan></text>
<rect x="380" y="390" width="190" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="475" y="426" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="475">INSTRUCTIONS</tspan></text>
<rect x="585" y="390" width="240" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="705" y="426" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="705">CUSTOM AGENT</tspan></text>
<rect x="840" y="390" width="195" height="60" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="937.5" y="426" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="937.5">PROMPT</tspan></text>
</svg>
</figure>

## Subagents — offloading task-specific context

Subagents read files in their own context window and return **only a summary** to the main session.

<figure class="agent-pipeline">
<svg viewBox="0 0 1100 390" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="subagent-flow-title subagent-flow-desc">
<title id="subagent-flow-title">Research in isolated context, return only the summary</title>
<desc id="subagent-flow-desc">The subagent reads files in its own context. The harness returns only its summary to the main session.</desc>
<defs><marker id="subagent-flow-green" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-gb-green)"/></marker><marker id="subagent-flow-cyan" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker><marker id="subagent-flow-amber" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker><marker id="subagent-flow-magenta" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker></defs>
<path d="M600 75 V105" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" marker-end="url(#subagent-flow-magenta)"/>
<path d="M600 165 V195" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" marker-end="url(#subagent-flow-magenta)"/>
<path d="M600 260 V280 H572.5 V295" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#subagent-flow-amber)"/>
<path d="M1065 325 H1090 V135 H875" fill="none" stroke="var(--c-neon-cyan)" stroke-width="2" marker-end="url(#subagent-flow-cyan)"/>
<rect x="400" y="25" width="400" height="50" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="600" y="57" font-size="20" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="600">“Find this feature in the code”</tspan></text>
<text x="20" y="130" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">MAIN</tspan><tspan x="20" dy="23">SESSION</tspan></text>
<rect x="145" y="105" width="165" height="60" rx="3" fill="var(--c-gb-green)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="227.5" y="129" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="227.5">SYSTEM</tspan><tspan x="227.5" dy="23">+ TOOLS</tspan></text>
<rect x="325" y="105" width="190" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="420" y="141" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="420">INSTRUCTIONS</tspan></text>
<rect x="530" y="105" width="140" height="60" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="600" y="141" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="600">PROMPT</tspan></text>
<rect x="685" y="105" width="190" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="780" y="141" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="780">SUMMARY</tspan></text>
<rect x="395" y="195" width="410" height="65" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="600" y="222" font-size="18" font-weight="700" fill="var(--c-crt-amber)" text-anchor="middle"><tspan x="600">LLM → HARNESS</tspan></text>
<text x="600" y="248" font-size="20" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="600">Create a subagent</tspan></text>
<text x="1070" y="212" font-size="17" font-weight="700" fill="var(--c-neon-cyan)" text-anchor="end"><tspan x="1070">HARNESS</tspan></text>
<text x="1070" y="239" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="end"><tspan x="1070">Return only</tspan><tspan x="1070" dy="23">the summary</tspan></text>
<text x="20" y="322" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">SUBAGENT</tspan><tspan x="20" dy="23">CONTEXT</tspan></text>
<rect x="145" y="295" width="160" height="60" rx="3" fill="var(--c-gb-green)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="225" y="319" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="225">SYSTEM</tspan><tspan x="225" dy="23">+ TOOLS</tspan></text>
<rect x="315" y="295" width="180" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="405" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="405">INSTRUCTIONS</tspan></text>
<rect x="505" y="295" width="135" height="60" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="572.5" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="572.5">PROMPT</tspan></text>
<rect x="650" y="295" width="80" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="690" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="690">FILE 1</tspan></text>
<rect x="740" y="295" width="80" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="780" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="780">FILE 2</tspan></text>
<rect x="830" y="295" width="80" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="870" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="870">FILE 3</tspan></text>
<rect x="920" y="295" width="145" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="992.5" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="992.5">SUMMARY</tspan></text>
</svg>
</figure>

## Use the Right LLM for Each Job with Custom Agents

AI models are trained on different data with different architectures. **No single model is best at everything.**

<div class="agent-model-benefits">
<div class="agent-model-benefit" style="--benefit-color:var(--c-gb-green)"><strong>📚 Different Training Data</strong><p>Models trained on different corpora have different knowledge gaps and strengths.</p></div>
<div class="agent-model-benefit" style="--benefit-color:var(--c-neon-cyan)"><strong>⚙️ Different Architectures</strong><p>Reasoning vs speed vs context window; each model excels at different task types.</p></div>
<div class="agent-model-benefit" style="--benefit-color:var(--c-neon-magenta)"><strong>✅ Cross-Validation</strong><p>Running multiple models on the same task catches bugs one model alone would miss.</p></div>
<div class="agent-model-benefit" style="--benefit-color:var(--c-crt-amber)"><strong>🎯 Cost Optimization</strong><p>The right model per task won't just be about quality, it'll be about budget.</p></div>
</div>

> Only Copilot lets enterprises run Claude + Gemini + Codex + Microsoft in one governed, auditable platform.

## What Is the Best Model? ❌

❌ Best model? → ✅ Best model **for this task**?

<table class="compact-table agent-model-table">
<thead><tr><th>Dev Task</th><th>Best Model Cost/Performance (Example)</th></tr></thead>
<tbody>
<tr><td>Writing Requirements</td><td><span style="color:var(--c-crt-amber)">Claude Opus 4.8</span></td></tr>
<tr><td>Architecture &amp; Design</td><td><span style="color:var(--c-neon-magenta)">Gemini 3.1 Pro</span></td></tr>
<tr><td>Code Planning</td><td><span style="color:var(--c-crt-amber)">Claude Opus 4.8</span></td></tr>
<tr><td>Code Generation</td><td><span style="color:var(--c-crt-amber)">Claude Sonnet 4.6</span></td></tr>
<tr><td>Test Creation</td><td><span style="color:var(--c-crt-amber)">Claude Sonnet 4.6</span></td></tr>
<tr><td>Code Review</td><td><span style="color:var(--c-neon-cyan)">GPT-5.5 Codex</span></td></tr>
<tr><td>CI/CD &amp; Automation</td><td><span style="color:var(--c-neon-cyan)">GPT-5.4 Codex</span></td></tr>
<tr><td>Documentation</td><td><span style="color:var(--c-neon-magenta)">Gemini 3.1 Pro</span></td></tr>
<tr><td>High Volume &amp; Cost</td><td><span style="color:var(--c-gb-green)">MAI-Code-1-Flash</span></td></tr>
</tbody>
</table>

<div style="font-size:0.85em;margin-top:0.6em;letter-spacing:0.05em;">
<span style="color:var(--c-crt-amber);font-weight:bold;">● Anthropic</span>&nbsp;&nbsp;<span style="color:var(--c-neon-cyan);font-weight:bold;">● OpenAI</span>&nbsp;&nbsp;<span style="color:var(--c-neon-magenta);font-weight:bold;">● Google</span>&nbsp;&nbsp;<span style="color:var(--c-gb-green);font-weight:bold;">● Microsoft</span>
</div>

> Sources (benchmarks): <a href="https://www.swebench.com/" target="_blank" rel="noopener noreferrer" class="retro-link">SWE-bench Verified ↗</a> · <a href="https://www.tbench.ai/" target="_blank" rel="noopener noreferrer" class="retro-link">Terminal-Bench ↗</a> · <a href="https://aider.chat/docs/leaderboards/" target="_blank" rel="noopener noreferrer" class="retro-link">Aider Polyglot ↗</a> · <a href="https://lmarena.ai/" target="_blank" rel="noopener noreferrer" class="retro-link">LMArena ↗</a>. Models are examples only and vary by task and preference.
