---
title: Copilot Code Review
titleEn: Copilot Code Review
summary: Copilot can be assigned as a reviewer — manually or automatically — to read code intent and return inline comments, PR summaries, and fix suggestions. Goes from pre-review noise reduction all the way to full automation.
icon: /theomonfort/icons/copilot-code-review.png
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 9
category: review
related: ['cloud-agent', 'instructions', 'agentic-workflow']
links:
  - label: Overview — Code review (Docs)
    url: https://docs.github.com/en/copilot/concepts/code-review
  - label: How to — Use Copilot code review
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review
  - label: Automatic review setup
    url: https://docs.github.com/en/copilot/how-tos/agents/copilot-code-review/automatic-code-review
  - label: Excluded files
    url: https://docs.github.com/en/copilot/reference/review-excluded-files
  - label: Custom instructions
    url: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
  - label: Optimize — Optimize code reviews
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/tutorials/optimize-code-reviews
  - label: Blog — 60M Copilot code reviews
    url: https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/
  - group: 📰 Recent Changelog
    label: "AGENTS.md support and UI improvements (2026-06-18)"
    url: https://github.blog/changelog/2026-06-18-copilot-code-review-agents-md-support-and-ui-improvements
  - group: 📰 Recent Changelog
    label: "New configurations and controls (2026-06-12)"
    url: https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls
  - group: 📰 Recent Changelog
    label: "Apply review feedback via Cloud Agent (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-easily-apply-copilot-code-review-feedback-with-copilot-cloud-agent
  - group: 📰 Recent Changelog
    label: "Comment experience improvements (2026-05-12)"
    url: https://github.blog/changelog/2026-05-12-copilot-code-review-comment-experience-improvements
  - group: 📰 Recent Changelog
    label: "Code review will consume Actions minutes from 2026-06-01 (2026-04-27)"
    url: https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026
  - group: 📰 Recent Changelog
    label: "Code review now runs on an agentic architecture (2026-03-05)"
    url: https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture
  - group: 📰 Recent Changelog
    label: "Auto-resolution and analysis updates (2026-09-11)"
    url: https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review/
  - group: 📰 Recent Changelog
    label: "Max public preview and approvals GA (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-copilot-code-review-merge-with-confidence-with-max-and-approvals
  - group: 💰 Billing
    label: "Estimated code review consumption"
    url: https://docs.github.com/en/copilot/concepts/agents/code-review#estimated-consumption
---

## In a nutshell

<div class="hero-quote hero-quote-stars">
  <p>
    <strong>Copilot Code Review</strong> is a feature that lets you <strong>assign Copilot as a reviewer — manually or automatically</strong>.
  </p>
  <p>
    Once assigned, Copilot reads the code's intent and returns inline comments, a PR summary, and fix suggestions.
  </p>
</div>

> 💡 **Analogy**: A **junior reviewer on call 24/7**. Hand off all the basic feedback — style, null safety, test coverage — so humans can focus on **design, business logic, and mentoring**.

## Strengths of Copilot Code Review

- 🧠 **Understands context** — grasps code intent and returns inline comments, **PR summaries**, and fix suggestions
- ⚙️ **Automation** — can run automatically at the Repo / Org / Enterprise level
- 📜 **Customizable** — define review standards in `copilot-instructions.md` / `AGENTS.md`
- 🔧 **Fix suggestions** — apply fixes one by one or all at once
- 🖥️ **Smooth UI** — review and apply suggested changes via **diff view** in VS Code / GitHub.com
- 🛡️ **Respects content exclusion** — honors Repo / Org / Enterprise Copilot content-exclusion paths, keeping sensitive or irrelevant files out of review context
- 🔎 **Transparency** — everything is traceable via Actions logs and agent sessions

## Impact data

A leading **automotive and manufacturing** customer in Japan (Sep 2025 – Feb 2026, median PR open duration).

<div class="bar-chart">
  <div class="bar-chart-title">PR Open Duration (days)</div>
  <div class="bar-chart-legend">
    <span><span class="dot dot-pink"></span> Without Copilot Code Review</span>
    <span><span class="dot dot-purple"></span> With Copilot Code Review</span>
  </div>
  <div class="bar-groups">
    <div class="bar-group">
      <div class="bars">
        <div class="bar bar-pink" style="height: 88.75%"><span class="bar-value">14.2 days</span></div>
        <div class="bar bar-purple" style="height: 72.5%"><span class="bar-value">11.6 days</span></div>
      </div>
      <div class="bar-label">Automotive customer</div>
    </div>
    <div class="bar-group">
      <div class="bars">
        <div class="bar bar-pink" style="height: 85%"><span class="bar-value">13.6 days</span></div>
        <div class="bar bar-purple" style="height: 69.4%"><span class="bar-value">11.1 days</span></div>
      </div>
      <div class="bar-label">Manufacturing customer</div>
    </div>
  </div>
</div>

> 💰 **Business value**: Shorter time from PR approval to merge — **development lead time** shrinks, time-to-market improves. Exceptionally high ROI.

## How to use it

| Where | Trigger | What happens |
| --- | --- | --- |
| **GitHub.com manual review** | Add `Copilot` to the **Reviewers** on a PR | Inline comments + PR Overview returned within minutes (on **draft PRs**, request it instantly via the **Request** button next to Copilot) |
| **GitHub.com automatic review** | Enable "auto-review on PR creation" in Repo / Org / Enterprise settings | All new PRs are reviewed automatically (deploy org-wide in 3 steps) |
| **VS Code** | Run `Copilot: Review uncommitted changes` from the Source Control panel | Instant review of uncommitted changes → self-check before push |
| **GitHub CLI** | Run `/review` in the terminal | Review the current working tree / branch diff inline — no editor needed |
| **GitHub CLI (rubber duck)** | Discuss design or implementation approach → bounce ideas off the `rubber-duck` agent | Catch blind spots, logic gaps, and alternatives before implementing → prevent rework |

## Setting up automatic review

Enable "auto-review on PR creation" via a **Ruleset**. Choose scope at Repo / Org / Enterprise level.

| Scope | Settings path | Key options |
| --- | --- | --- |
| **Repository** | Repo → **Settings** → *Code and automation* → **Rules** → **Rulesets** → *New branch ruleset* | ✅ Automatically request Copilot code review<br/>✅ Review new pushes<br/>✅ Review draft pull requests |
| **Organization** | Org → **Settings** → *Repository* → **Rulesets** → *New branch ruleset* | Target repositories by pattern (e.g. `*-feature`) |
| **Enterprise** | Enterprise → **Policies** → **Rulesets** | Force-apply to all Orgs — centralized governance |

> 📘 Official guide: <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review" target="_blank" rel="noopener noreferrer" class="retro-link">Configure automatic code review</a> — with screenshots

## Customization

Define review standards by **just adding files to your repo** — Copilot code review reads them automatically.

| Source | Location | Use |
| --- | --- | --- |
| **`copilot-instructions.md`** | `.github/copilot-instructions.md` | Repo-wide review standards (**the 4000-character limit has been removed** — long, detailed instructions are honored in full) |
| **`NAME.instructions.md`** | under `.github/instructions/` | Extra instructions scoped via `applyTo` to specific paths or languages |
| **`AGENTS.md`** | repository **root** | If an `AGENTS.md` already exists, it's used as context automatically — share the same conventions across Cloud Agent / CLI |

> 💡 **Key point**: If you already run on `AGENTS.md`, the same conventions apply to reviews with zero extra setup. <a class="retro-link" href="/theomonfort/en/playbook/harness-engineering/?present=1&amp;slide=6">What is AGENTS.md? ↗</a>
>
> 📘 Official guide: <a href="https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions" target="_blank" rel="noopener noreferrer" class="retro-link">Adding repository custom instructions for GitHub Copilot</a> — covers all three file types and which features support them

## Governance & runner controls

Copilot code review runs on an **agentic architecture**, executing on **GitHub Actions runners** (consuming Actions minutes since 2026-06-01). Org admins can govern the execution environment centrally.

| Control | Settings path | What you can do |
| --- | --- | --- |
| **Runner type (Org)** | Org → **Copilot** → **Runner type** → *Runner type configuration* | Set a default runner (standard / large / self-hosted) across all repos. **Lock** it to override per-repo settings. Applies to both code review and Cloud Agent |
| **Content exclusion** | Repo / Org / Enterprise settings (path-based rules) | Exclude sensitive or irrelevant files/directories from review context |

> 🔧 **Shaping the runner environment**: Control runner size / self-hosted / Windows switching via `copilot-setup-steps.yml`. See <a class="retro-link" href="/theomonfort/playbook/cloud-agent/">Cloud Agent ↗</a> (same mechanism as Code Review).

## Review depth, cost, and agents <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review#review-effort-level" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="det-widget">
<p class="det-hint">▸ SELECT A LEVEL / ESTIMATED USD PER REVIEW (2026-11-11)</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="review-effort">
<summary class="det-btn"><span class="det-name"><b>Lite</b> / $0.05 to $1</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Lite</span></p>
<p class="det-why">Fast, cost-efficient feedback for <b>routine changes</b>. An ensemble of agents reviews from different perspectives and combines the findings into one review.</p>
</div>
</details>
<details class="det-pick" name="review-effort">
<summary class="det-btn"><span class="det-name"><b>Balanced</b> / $0.25 to $5</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Balanced (default)</span></p>
<p class="det-why">A <b>higher-reasoning model</b> analyzes complex logic, security-sensitive code, and cross-service changes. Deeper analysis uses more AI credits than Lite.</p>
</div>
</details>
<details class="det-pick" name="review-effort" open>
<summary class="det-btn"><span class="det-name"><b>Max</b> / $1.50 to $25</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Max / Public preview</span></p>
<p class="det-why"><b>High-risk PRs:</b> independent high-reasoning agents across providers, with findings reconciled and verified. Deepest analysis, more time and AI credits.</p>
</div>
</details>
<details class="det-pick" name="review-effort">
<summary class="det-btn"><span class="det-name">Access &amp; controls</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Access &amp; controls</span></p>
<p class="det-why"><b>Plans:</b> Pro / Pro+ / Max / Business / Enterprise. Enable code review.<br /><b>Select:</b> PR <b>Reviewers</b> or a default in settings.<br /><b>Admins:</b> enterprise / org / repo defaults and effort caps. The cap must allow Max.</p>
</div>
</details>
<details class="det-pick" name="review-effort">
<summary class="det-btn"><span class="det-name">Cost &amp; agent context</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Estimates, not caps</span></p>
<p class="det-why">AI credits vary with PR size and instructions; costs can exceed estimates. <b>Actions minutes are extra.</b><br />Without Actions, reviews continue without agentic features such as full-project context gathering.</p>
</div>
</details>
<details class="det-pick" name="review-effort">
<summary class="det-btn"><span class="det-name">Approvals / GA</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Approvals / GA</span></p>
<p class="det-why"><b>Separate from Max and off by default.</b> When enabled, Copilot approvals count toward required approvals. New commits dismiss the approval; request another review for a fresh assessment.</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A LEVEL ▸</p></div>
</div>
</div>

## Limits and the human role

Copilot Code Review is **powerful but not omniscient**. Humans still own these areas:

- **Business logic correctness** — comparing against requirements and specs is beyond AI
- **Deep security analysis** — combine with dedicated tools like **CodeQL** for SAST / SCA
- **Design review** — architecture, module boundaries, and trade-off discussions
- **Mentoring** — explaining *why* code should be written a certain way to teammates

> 🎯 **Division of labor**: AI handles **basic feedback, style, null safety, and missing tests**, freeing humans for the high-value work of **design, requirements, and team growth**.
