---
title: Cloud Agent
titleEn: Cloud Agent
summary: A "doppelganger" that works through the night even when you leave the IDE. Assign an Issue and it implements, verifies, and returns with a PR from a GitHub Actions runner.
icon: /theomonfort/icons/cloud-agent.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 15
category: develop
related: ['partner-agent', 'copilot-code-review', 'instructions', 'mcp']
links:
  - label: Customize the agent environment
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment
  - label: Extend Cloud Agent with MCP
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/extend-cloud-agent-with-mcp
  - label: Validation tools — docs
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings#enabling-or-disabling-built-in-code-quality-and-security-validation-tools
  - label: Claude & Codex on Cloud Agent (changelog)
    url: https://github.blog/changelog/2026-02-04-claude-and-codex-are-now-available-in-public-preview-on-github/
  - label: Validation tools 20% faster (changelog)
    url: https://github.blog/changelog/2026-04-10-copilot-cloud-agents-validation-tools-are-now-20-faster/
  - group: 📰 Recent Changelog
    label: "Apply Copilot code review feedback via Cloud Agent (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-easily-apply-copilot-code-review-feedback-with-copilot-cloud-agent
  - group: 📰 Recent Changelog
    label: "One-click fixes for failing Actions via Cloud Agent (2026-05-18)"
    url: https://github.blog/changelog/2026-05-18-one-click-fixes-for-failing-actions-with-copilot-cloud-agent
  - group: 📰 Recent Changelog
    label: "Start Cloud Agent tasks via the REST API (2026-05-13)"
    url: https://github.blog/changelog/2026-05-13-start-copilot-cloud-agent-tasks-via-the-rest-api
  - group: 📰 Recent Changelog
    label: "Fix merge conflicts in three clicks (2026-04-13)"
    url: https://github.blog/changelog/2026-04-13-fix-merge-conflicts-in-three-clicks-with-copilot-cloud-agent
  - group: 📰 Recent Changelog
    label: "Research, plan, and code with Cloud Agent (2026-04-01)"
    url: https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent
---

## In a nutshell

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Cloud Agent</strong> is Copilot running asynchronously on GitHub.
  </p>
  <p>
    Give it an Issue or task and it reads the code in the cloud, implements, verifies, and returns it as a PR.
  </p>
</div>

## What it can do

- **Background execution**: Processing continues in the cloud even after the IDE is closed.
- **Runs on Actions**: Sessions run on GitHub Actions runners, so execution logs are fully traceable.
- **Team visibility**: Cloud Agent sessions are visible to the entire team, making it easy to share progress.
- **Full repo context**: Can make edits with awareness of dependency and module structure.
- **Runs verification**: Executes tests, builds, static analysis, and reflects the results in the PR.
- **Multiple harness support**: The Anthropic Claude SDK and OpenAI Codex SDK are also available. (Partner agents)

## How to launch

- **From VS Code**: Switch from `Local` to `Cloud` in the Chat session type picker.
- **From GitHub.com**: Launch from the **Agents panel** on the repository page. Just specify the prompt and the starting branch.
- **From an Issue**: Simply **assign the Issue to Copilot**. The title and body become the task specification.
- **From the CLI**: Use `/delegate` to hand off work to Copilot Cloud Agent. You cannot delegate to other SDKs / harnesses this way.

## Environment Customization <span class="slide-heading-links"><input type="checkbox" id="demo-cloud-setup" class="demo-toggle" /><label class="h2-demo" for="demo-cloud-setup">Code</label></span>

<div class="demo-panel cloud-code-panel">
<label class="demo-scrim" for="demo-cloud-setup" aria-label="Close code example"></label>
<div class="demo-window" role="group" aria-label="Cloud Agent setup code">
<div class="demo-head"><span class="demo-tag">CODE</span><span class="demo-name">copilot-setup-steps.yml</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-cloud-setup" aria-label="Close">&#10005;</label></div>
<div class="cloud-code-example">

```yaml
name: "Copilot Setup Steps"
on: workflow_dispatch
jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: {lfs: true}
      - uses: actions/setup-node@v4
        with: {node-version: "20"}
      - run: npm ci
      - run: pip install -r requirements.txt
    env:
      MY_API_BASE: https://api.example.com
```

</div>
</div>
</div>

Optionally place `.github/workflows/copilot-setup-steps.yml` in your repository to **fully control the Cloud Agent's GitHub Actions environment**. Without this file, the agent runs on a default Ubuntu environment and auto-infers dependencies.

**What you can customize:**

- 🛠️ **Pre-install** tools and dependencies (npm / pip / apt …)
- 💪 **Scale up** GitHub-hosted runner size
- 🏠 Run on a **self-hosted runner**
- 🪟 Switch to a **Windows** development environment (default is Ubuntu Linux)
- 📦 Enable **Git LFS**
- 🔑 Set **environment variables**
- 🔥 Disable or customize the agent **firewall**

## Adding External Tools with MCP Servers <span class="slide-heading-links"><a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/extend-cloud-agent-with-mcp" target="_blank" rel="noopener noreferrer">📖 Docs</a><a class="h2-demo" href="https://github.com/theomonfort-org/.github-private/settings/copilot/mcp" target="_blank" rel="noopener noreferrer">&#9658; DEMO</a></span>

**GitHub MCP and Playwright MCP are enabled by default.** Additional servers use **dedicated cloud settings**, separate from local MCP configuration.

Configure servers in the repository's `Settings → Copilot → MCP servers`. This shared repository configuration connects the servers to its Cloud Agent sessions.

## Validation Tools (ON by default)

Cloud Agent automatically runs **4 validations** on generated code before creating the PR. **If a problem is detected, it attempts to fix it on its own** before opening the PR.

- **CodeQL Code scanning**
- **Copilot Code Review**
- **Secret Scanning**
- **Dependency Vulnerability checks**

> 💰 **Free to use** — GitHub Advanced Security license is **not required**. Toggle at `Settings → Copilot → Cloud agent → Validation tools`.

## How Teams Use It

**Before leaving work** ── Assign 3 remaining Issues to Cloud Agent and head home.

**Overnight** ── Cloud Agent quietly implements and self-validates on the runner. Only code that passes both CodeQL and Code Review becomes a PR.

**Next morning** ── PRs are waiting for review. Your job is not to **write** but to **decide**. Humans focus on decisions, machines focus on iteration — this is the minimal unit of AI-driven development in a team.

## Full Workflow Diagram

Humans only **refine Issues, review, and merge**. The loop of implementation and fixes is driven by Cloud Agent.

<figure class="cloud-swimlane-figure" role="group" aria-labelledby="cloud-workflow-caption">
<div class="cloud-swimlane">
<div class="cloud-lane cloud-lane-agent"><strong>☁️ Cloud Agent</strong></div>
<div class="cloud-lane cloud-lane-human"><strong>👤 Human (Developer)</strong></div>
<svg class="cloud-lane-connectors" viewBox="0 0 1100 360" aria-hidden="true">
<defs><marker id="cloud-lane-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 10 5 0 10z" fill="#93a8ff"/></marker></defs>
<g marker-end="url(#cloud-lane-arrow)">
<path d="M170 252H190V245H210"/><path d="M285 205V170H360V122"/><path d="M435 89H490"/>
<path d="M560 122V180H550V205"/><path d="M630 245H685V175H795V122"/><path d="M860 122V170H835V190"/>
<path d="M890 245H920V252H945"/><path d="M835 300V316H550V285"/>
<path class="cloud-next-connector" d="M1010 285V347H100V285"/>
</g>
</svg>
<div class="cloud-lane-node cloud-node-artifacts">Create<br />artifacts</div>
<div class="cloud-lane-node cloud-node-pr">Create PR</div>
<div class="cloud-lane-node cloud-node-fix">Fix<br />instructions</div>
<div class="cloud-lane-node cloud-node-issue">Refine<br />Issue</div>
<div class="cloud-lane-node cloud-node-assign">Assign to<br />Copilot</div>
<div class="cloud-lane-node cloud-node-review">Review<br />comments</div>
<div class="cloud-lane-node cloud-node-decision"><span>Fixed?</span></div>
<div class="cloud-lane-node cloud-node-merge">Merge</div>
<span class="cloud-edge-label cloud-label-ok">OK</span>
<span class="cloud-edge-label cloud-label-feedback">Not fixed / more feedback</span>
<span class="cloud-edge-label cloud-label-next">Next Issue</span>
</div>
<figcaption id="cloud-workflow-caption" hidden>Humans refine and assign an Issue. Cloud Agent creates artifacts and a PR. Human review sends fix instructions to Cloud Agent; humans check the result, request further fixes as needed, and merge when complete. The next Issue restarts the loop.</figcaption>
</figure>
