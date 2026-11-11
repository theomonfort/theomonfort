---
title: Agentic Workflow
titleEn: Agentic Workflow
summary: A new kind of automation that runs AI agents on top of GitHub Actions. Write what you want done in natural language Markdown and get workflows that can reason and act.
icon: /theomonfort/icons/agentic-workflow.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 16
category: operate
related: ['cloud-agent', 'mcp', 'agent-skills', 'instructions']
links:
  - label: gh-aw CLI (GitHub)
    url: https://github.com/github/gh-aw
  - label: Official documentation (gh-aw)
    url: https://github.github.io/gh-aw/introduction/overview/
  - label: Quickstart and authentication
    url: https://github.github.com/gh-aw/setup/quick-start/
  - label: Peli's Agent Factory (Blog)
    url: https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/
  - label: githubnext/agentics (sample collection)
    url: https://github.com/githubnext/agentics
  - label: gh-aw Wizard (workflow generator)
    url: https://githubnext.github.io/gh-aw-wizard/
  - group: 📰 Recent Changelog
    label: "GitHub Agentic Workflows generally available (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available
  - group: 📰 Recent Changelog
    label: "Agentic workflows no longer need a personal access token (2026-06-11)"
    url: https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/
  - group: 📰 Recent Changelog
    label: "View Agentic Workflow configs in the Actions run summary (2026-03-26)"
    url: https://github.blog/changelog/2026-03-26-view-agentic-workflow-configs-in-the-actions-run-summary
---

## In a nutshell

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Agentic Workflow</strong> is a mechanism where <strong>AI agents automate work on top of GitHub Actions</strong>.
  </p>
  <p>
    Triggered by cron, issue, or PR events, agents <strong>read context, make decisions, and take action</strong>.
  </p>
</div>

## How it works, now GA <a class="h2-doc" href="https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Generally available since 2026-10-28** on GitHub.com: Free, Team and Enterprise. The default Copilot engine requires a **Copilot license**.

| Layer | What you configure |
| --- | --- |
| Describe | Markdown instructions + Actions triggers |
| Run | Copilot or another agent, with MCP / tools |
| Constrain | Read-only by default; validated `safe-outputs` for writes |

Existing **runner groups and Actions policies** still apply.

> **PAT-free Copilot in an organization:** enable “Allow use of Copilot CLI billed to the organization” and grant `copilot-requests: write`. Other engines need their own authentication.

## What can it do?

| Use case | What it does |
| --- | --- |
| 🏷️ **Issue Triage** | Reads new issues and automates **labeling, priority assessment, and assignee suggestions**. Requests clarification if ambiguous |
| 📚 **Wiki Generator** | Periodically scans the codebase and **auto-generates / updates Wiki / README** |
| 🔍 **CI Failure Analyst** | Analyzes failed CI runs, **identifies root causes, and comments on the PR** |
| 📝 **Docs Maintainer** | Detects stale links, examples, and API descriptions, then **opens a fix PR aligned with the latest implementation** |

> 🧪 The sample collection <a href="https://github.com/githubnext/agentics" target="_blank" rel="noopener noreferrer" class="retro-link">githubnext/agentics</a> has ready-to-run templates. Copy-paste to get started.<br />📝 Reading the developer blog <a href="https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/" target="_blank" rel="noopener noreferrer" class="retro-link">Peli's Agent Factory</a> first gives you a good feel for how it all works.

## Getting started (4 steps) <a class="h2-doc" href="https://github.github.com/gh-aw/setup/quick-start/" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="code-agentic-workflow" class="demo-toggle" /><label class="h2-demo h2-info" for="code-agentic-workflow">&lt;/&gt; CODE</label>

<div class="demo-panel is-info">
<label class="demo-scrim" for="code-agentic-workflow" aria-label="Close workflow example"></label>
<div class="demo-window" role="group" aria-label="Issue clarifier workflow example">
<div class="demo-head"><span class="demo-tag">CODE</span><span class="demo-name">Issue clarifier</span><label class="demo-close" for="code-agentic-workflow" aria-label="Close">&#10005;</label></div>
<div class="info-body">
<p>Save as <code>.github/workflows/issue-clarifier.md</code>. This example uses Copilot organization billing; enable the policy described on slide 2 first.</p>

```yaml
---
on:
  issues:
    types: [opened]
permissions:
  contents: read
  issues: read
  copilot-requests: write
safe-outputs:
  add-comment:
---

Read newly opened issues. If the requirements are ambiguous,
ask for the actual behavior, reproduction steps and expected behavior.
Otherwise, do not comment.
```

<p>Run <code>gh aw compile</code>, review the generated YAML, and commit both files. <code>NAME.lock.yml</code> is the executable workflow, not an Actions dependency <code>actions.lock</code>.</p>
</div>
</div>
</div>

1. **Install:** `gh extension install github/gh-aw`
2. **Describe:** add triggers and instructions to <code>.github/<wbr>workflows/<wbr>NAME.md</code>.
3. **Compile:** `gh aw compile` generates `NAME.lock.yml`.
4. **Review and push both files**, then inspect the run in Actions.

**Before running:** enable Actions and configure the chosen engine's authentication. The **CODE** button contains a complete example.
