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
  hex: "#9bbc0f"
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

<div class="hero-quote hero-quote-green">
  <p>
    GitHub introduced <strong>Issues</strong> in 2009, putting work tracking right next to the code.
  </p>
  <p>
    This chapter tours the <strong>collaboration</strong> tools around your code: <strong>Issues, Discussions, Projects</strong>.
  </p>
</div>

## Issues & Sub-issues

Issues are the unit for tracking bugs, tasks, and requests one at a time. Sub-issues break a big effort apart and make parent/child progress visible.

| Feature | What it does | Why it's good |
| --- | --- | --- |
| 🐛 Issue | Track one task | Labels, assignee, due date |
| 🧩 Sub-issue | Split a parent | Progress bar shows % done |
| 📝 Templates | Structured intake via forms | Nothing gets missed |
| 🔗 Linking | `Closes #123` in a PR | Issue auto-closes on merge |
| 🤖 Assign Copilot | Hand an Issue to the agent | Opens a PR for you |

> 💡 Real examples: <a class="retro-link" href="https://github.com/microsoft/vscode/issues" target="_blank" rel="noopener noreferrer">VS Code ↗</a> · <a class="retro-link" href="https://github.com/rust-lang/rust/issues" target="_blank" rel="noopener noreferrer">Rust ↗</a> · <a class="retro-link" href="https://github.com/vercel/next.js/issues" target="_blank" rel="noopener noreferrer">Next.js ↗</a> · <a class="retro-link" href="https://github.com/github/docs/issues" target="_blank" rel="noopener noreferrer">GitHub Docs ↗</a>

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

> 💡 Real example: <a class="retro-link" href="https://github.com/orgs/github/projects/4247" target="_blank" rel="noopener noreferrer">GitHub Public Roadmap ↗</a> — a public Project running the roadmap.

## ★ Killer use case

The continuum from conversation to plan to implementation is the real strength.

| Stage | Tool |
| --- | --- |
| 💬 Discuss | Discussions |
| 🧩 Decompose | Issue + Sub-issues |
| 📋 Plan | Projects |
| 🚀 Build | PR (auto-linked to Issue) |

> 🎯 Everything inside GitHub = zero tool round-trips. That's the core of team velocity.
