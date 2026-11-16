---
title: Collaboration Tools
titleEn: Collaboration Tools
summary: GitHub's toolbox for working together. Starting from the Pull Request GitHub invented, a quick tour of Issues & Sub-issues, Discussions, and Projects, with the "why it's good" for each and the official links to dig deeper.
icon: /theomonfort/hi5-pixel-hand.png
color: green
accent:
  text: text-gameboy-green
  border: border-gameboy-green
  glow: hover:shadow-gameboy-green
  shadow: shadow-gameboy-green
  hex: "#86efac"
order: 3.4
category: plan
related: ['github', 'pull-requests', 'enterprise-setup']
links:
  - group: 📖 Official docs
    label: About issues
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues
  - group: 📖 Official docs
    label: About sub-issues
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues
  - group: 📖 Official docs
    label: Managing issue fields in an organization
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-your-organization
  - group: 📰 Announcement
    label: "Issue fields are now generally available (2026-07-02)"
    url: https://github.blog/changelog/2026-07-02-issue-fields-are-now-generally-available/
  - group: 📖 Official docs
    label: GitHub Discussions
    url: https://docs.github.com/en/discussions
  - group: 📖 Official docs
    label: About Projects
    url: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects
  - group: 🎓 Tutorials
    label: Quickstart for Projects
    url: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects
  - group: 🎓 Tutorials
    label: Quickstart for Discussions
    url: https://docs.github.com/en/discussions/quickstart
---

## In one line

<div class="hero-quote">
  <p>
    GitHub introduced <strong>Issues</strong> in 2009, putting work tracking right next to the code.
  </p>
  <p>
    This chapter tours the <strong>collaboration</strong> tools around your code: <strong>Issues, Discussions, Projects</strong>.
  </p>
</div>

## <span class="slide-heading-text">Issues & Sub-issues</span> <span class="slide-heading-links" aria-label="Real examples"><a class="h2-doc" href="https://github.com/microsoft/vscode/issues" target="_blank" rel="noopener noreferrer">VS Code ↗</a><a class="h2-doc" href="https://github.com/rust-lang/rust/issues" target="_blank" rel="noopener noreferrer">Rust ↗</a><a class="h2-doc" href="https://github.com/vercel/next.js/issues" target="_blank" rel="noopener noreferrer">Next.js ↗</a><a class="h2-doc" href="https://github.com/github/docs/issues" target="_blank" rel="noopener noreferrer">GitHub Docs ↗</a></span>

Issues are the unit for tracking bugs, tasks, and requests one at a time. Sub-issues break a big effort apart and make parent/child progress visible.

| Feature | What it does | Why it's good |
| --- | --- | --- |
| 🐛 Issue | Track one task | Labels, assignee, due date |
| 🧩 Sub-issue | Split a parent | Progress bar shows % done |
| 📝 Templates | Structured intake via forms | Nothing gets missed |
| 🔗 Linking | `Closes #123` in a PR | Issue auto-closes on merge |
| 🤖 Assign Copilot | Hand an Issue to the agent | Opens a PR for you |

## Issue Fields (NEW) <a class="h2-doc" href="https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-issue-fields" class="demo-toggle" /><label class="h2-demo" for="demo-issue-fields">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-issue-fields" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Issue fields</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-issue-fields" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li><p class="demo-step-title">OPEN ORGANIZATION SETTINGS</p><p>As an org admin, open <a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/issue-fields" target="_blank" rel="noopener noreferrer">theomonfort-org Issue fields ↗</a>. The location is <code class="demo-path">Settings › Planning › Issue fields</code>.</p></li>
<li><p class="demo-step-title">INSPECT A FIELD</p><p>Open an existing field such as <code class="demo-path">Priority</code> and inspect its name, type, and options. This is where admins add and customize fields.</p></li>
<li><p class="demo-step-title">CHECK VISIBILITY BY ISSUE TYPE</p><p>Inspect <code class="demo-path">Pin to types</code> to see which issue types display the field.</p><p class="demo-out">Issues of the matching type use shared fields for priority, effort, and dates.</p></li>
</ol>
</div>
</div>

Structured, **typed metadata** on issues. **Generally available** as of 2026-07-02. Every organization gets four default fields out of the box (`Priority`, `Effort`, `Start date`, `Target date`), so priority, effort, and dates stay **searchable, reportable, and consistent** across every repository.

| Field | Type | Default on | Use |
| --- | --- | --- | --- |
| 🔺 Priority | Single select | All types | Shared priority vocabulary |
| ⏱️ Effort | Number / select | Bug / Task / Feature | Estimates & effort |
| 📅 Start / Target date | Date | Feature only | Start & deadline |
| 🛠️ Custom | Any | — | Org-specific values |

## Discussions

A space for "no single right answer" conversations: questions, ideas, announcements. If Issues track tasks, Discussions are where you talk.

- 💬 Q&A format lets you mark a **best answer**
- 📣 Ideal for release and direction **announcements**
- 🗳️ Polls gather team opinion fast
- 🔄 Promote a settled thread into an Issue

> 💡 Real example: <a class="retro-link" href="https://github.com/orgs/community/discussions" target="_blank" rel="noopener noreferrer">GitHub Community ↗</a> — GitHub itself runs on Discussions.

## Project Planning

Projects is a planning tool: spreadsheet, board, and roadmap views over Issues and PRs.

- 📋 Table / Board / Roadmap views
- 🏷️ Custom fields (priority, estimate, due date)
- 🤖 Workflows auto-update status
- 📊 Insights chart your progress

> 💡 Real example: <a class="retro-link" href="https://github.com/orgs/vitejs/projects/1" target="_blank" rel="noopener noreferrer">Vite Team Board ↗</a> (an OSS project managing work in a public Project).

## ★ Killer use case

The continuum from conversation to plan to implementation is the real strength.

| Stage | Tool |
| --- | --- |
| 💬 Discuss | Discussions |
| 🧩 Decompose | Issue + Sub-issues |
| 📋 Plan | Projects |
| 🚀 Build | PR (auto-linked to Issue) |

> 🎯 Everything inside GitHub = zero tool round-trips. That's the core of team velocity.
