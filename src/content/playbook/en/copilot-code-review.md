---
title: Copilot Code Review
titleEn: Copilot Code Review
summary: Copilot can be assigned as a reviewer — manually or automatically — to read code intent and return inline comments, PR summaries, and fix suggestions. Goes from pre-review noise reduction all the way to full automation.
icon: /theomonfort/icons/copilot-code-review.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
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
- 📜 **Customizable** — define review standards in `copilot-instructions.md`
- 🔧 **Fix suggestions** — apply fixes one by one or all at once
- 🖥️ **Smooth UI** — review and apply suggested changes via **diff view** in VS Code / GitHub.com
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
| **GitHub.com manual review** | Add `Copilot` to the **Reviewers** on a PR | Inline comments + PR Overview returned within minutes |
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

Define review standards in **`.github/copilot-instructions.md`** — that's all it takes.

```markdown
# Code Review Standards
## <Security>
- ...
## <Naming Conventions>
- ...
## <Library Policy>
- ...
```

## Limits and the human role

Copilot Code Review is **powerful but not omniscient**. Humans still own these areas:

- **Business logic correctness** — comparing against requirements and specs is beyond AI
- **Deep security analysis** — combine with dedicated tools like **CodeQL** for SAST / SCA
- **Design review** — architecture, module boundaries, and trade-off discussions
- **Mentoring** — explaining *why* code should be written a certain way to teammates

> 🎯 **Division of labor**: AI handles **basic feedback, style, null safety, and missing tests**, freeing humans for the high-value work of **design, requirements, and team growth**.
