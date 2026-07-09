---
title: Pull Requests
titleEn: Pull Requests
summary: The mechanism GitHub created in 2008 that changed how developers collaborate. The propose → discuss → review → merge flow, now backed by rulesets, automated checks, and Copilot review.
icon: 🔀
color: amber
accent:
  text: text-neon-amber
  border: border-neon-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 8.8
category: review
related: ['collaboration-tools', 'copilot-code-review', 'code-scanning']
links:
  - group: 📖 Official docs
    label: About pull requests
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - group: 📖 Official docs
    label: About rulesets
    url: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
  - group: 📖 Official docs
    label: GitHub flow
    url: https://docs.github.com/en/get-started/using-github/github-flow
  - group: 📖 Official docs
    label: About PR reviews
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - group: 🎓 Tutorials
    label: Linking a PR to an issue
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue
  - group: 🧪 Examples
    label: VS Code Pull Requests
    url: https://github.com/microsoft/vscode/pulls
---

## In one line

<div class="hero-quote">
  <p>
    GitHub created the <strong>Pull Request</strong> in 2008 and changed how developers collaborate.
  </p>
  <p>
    The <strong>propose → discuss → review → merge</strong> flow is still the heart of teamwork.
  </p>
</div>

## Inside a review

A PR gathers conversation, checks, and automated analysis right on the diff. It's where quality is secured before merge.

| Element | Role |
| --- | --- |
| 🔀 Propose diff | Compare branches, request merge |
| 💬 Review | Line comments, approve/reject |
| 🔎 Auto checks | Code Scanning & code quality |
| 📦 Dependabot | Opens dependency-update PRs |

> 🔑 `Closes #123` in a PR → the Issue auto-closes on merge.

## Branching strategies

How a team organizes branches around PRs. Pick the model that matches your release cadence.

| Strategy | How it works | Best for |
| --- | --- | --- |
| 🌿 GitHub Flow | One `main` + short-lived feature branches; PR → merge → deploy from `main` | Continuous delivery, most teams |
| 🌳 Git Flow | `main` + long-lived `develop`, plus `feature` / `release` / `hotfix` branches | Scheduled, versioned releases |
| 🏭 GitLab Flow | Feature branches promoted through `staging` / `production` (environment) branches | Staged, environment-based deploys |
| 🚀 Trunk-Based | Commit to `main` via tiny branches behind feature flags | High-velocity CI/CD, large teams |

> 💡 Default to **GitHub Flow / trunk-based** for speed; reach for **Git Flow** only when you ship versioned releases.

## GitHub Flow

**One long-lived branch (`main`), short-lived feature branches.** Branch off `main`, open a PR, review, merge, and deploy — continuously. Simple and fast; ideal for web apps and small teams shipping many times a day.

<svg viewBox="0 0 920 260" role="img" aria-label="GitHub Flow branch diagram" style="width:100%;height:auto;max-width:840px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <line x1="30" y1="200" x2="890" y2="200" stroke="#ffb000" stroke-width="4"/>
  <text x="30" y="234" fill="#ffb000" font-size="20" font-weight="bold">main</text>
  <circle cx="90" cy="200" r="8" fill="#ffb000"/>
  <circle cx="445" cy="200" r="8" fill="#ffb000"/>
  <path d="M170 200 C 210 108, 320 108, 360 200" fill="none" stroke="#00f0ff" stroke-width="3"/>
  <circle cx="232" cy="130" r="7" fill="#00f0ff"/>
  <circle cx="300" cy="130" r="7" fill="#00f0ff"/>
  <text x="212" y="94" fill="#00f0ff" font-size="17">feature</text>
  <circle cx="360" cy="200" r="9" fill="#9bbc0f"/>
  <text x="300" y="250" fill="#9bbc0f" font-size="15">PR → merge</text>
  <path d="M530 200 C 570 108, 680 108, 720 200" fill="none" stroke="#00f0ff" stroke-width="3"/>
  <circle cx="592" cy="130" r="7" fill="#00f0ff"/>
  <circle cx="660" cy="130" r="7" fill="#00f0ff"/>
  <text x="572" y="94" fill="#00f0ff" font-size="17">feature</text>
  <circle cx="720" cy="200" r="9" fill="#9bbc0f"/>
  <text x="660" y="250" fill="#9bbc0f" font-size="15">PR → merge</text>
  <line x1="800" y1="200" x2="875" y2="200" stroke="#ff2e88" stroke-width="3" stroke-dasharray="4 4"/>
  <path d="M868 194 L882 200 L868 206 Z" fill="#ff2e88"/>
  <text x="792" y="176" fill="#ff2e88" font-size="15">deploy</text>
</svg>

- 🌿 Branch from `main` for each change (feature / fix)
- 🔀 Open a **PR** early — review and CI run on the branch
- ✅ Merge to `main`, then **deploy immediately**
- ♻️ `main` stays **always deployable**

> 💡 Fewer moving parts = faster feedback. The default for continuous delivery.

## Git Flow

**Two long-lived branches (`main` + `develop`) plus supporting branches.** Work integrates on `develop`; a `release` branch stabilizes a version, then merges to `main` and gets tagged. Structured for scheduled, versioned releases and larger teams.

<svg viewBox="0 0 960 340" role="img" aria-label="Git Flow branch diagram" style="width:100%;height:auto;max-width:880px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <line x1="30" y1="150" x2="930" y2="150" stroke="#00f0ff" stroke-width="4"/>
  <text x="30" y="140" fill="#00f0ff" font-size="18" font-weight="bold">develop</text>
  <line x1="30" y1="290" x2="930" y2="290" stroke="#ffb000" stroke-width="4"/>
  <text x="30" y="316" fill="#ffb000" font-size="18" font-weight="bold">main</text>
  <circle cx="90" cy="290" r="7" fill="#ffb000"/>
  <path d="M90 290 C 130 230, 140 190, 165 150" fill="none" stroke="#00f0ff" stroke-width="2.5"/>
  <circle cx="165" cy="150" r="7" fill="#00f0ff"/>
  <path d="M235 150 C 265 92, 345 92, 375 150" fill="none" stroke="#9bbc0f" stroke-width="3"/>
  <circle cx="290" cy="112" r="6" fill="#9bbc0f"/>
  <circle cx="335" cy="112" r="6" fill="#9bbc0f"/>
  <text x="262" y="82" fill="#9bbc0f" font-size="15">feature</text>
  <circle cx="375" cy="150" r="6" fill="#00f0ff"/>
  <circle cx="470" cy="150" r="7" fill="#00f0ff"/>
  <path d="M470 150 C 498 178, 498 198, 520 220" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <line x1="520" y1="220" x2="640" y2="220" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="565" cy="220" r="6" fill="#ff2e88"/>
  <text x="516" y="248" fill="#ff2e88" font-size="15">release</text>
  <path d="M640 220 C 662 244, 664 268, 688 290" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="688" cy="290" r="8" fill="#ffb000"/>
  <text x="666" y="320" fill="#ffb000" font-size="14">v1.0</text>
  <path d="M640 220 C 662 196, 664 174, 688 150" fill="none" stroke="#ff2e88" stroke-width="2.5"/>
  <circle cx="688" cy="150" r="6" fill="#00f0ff"/>
  <circle cx="780" cy="290" r="7" fill="#ffb000"/>
  <path d="M780 290 C 802 266, 802 246, 822 224" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="822" cy="224" r="6" fill="#ff2e88"/>
  <text x="800" y="252" fill="#ff2e88" font-size="15">hotfix</text>
  <path d="M822 224 C 844 246, 852 268, 872 290" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="872" cy="290" r="8" fill="#ffb000"/>
  <text x="850" y="320" fill="#ffb000" font-size="14">v1.1</text>
  <path d="M822 224 C 844 198, 852 174, 876 150" fill="none" stroke="#ff2e88" stroke-width="2.5"/>
  <circle cx="876" cy="150" r="6" fill="#00f0ff"/>
</svg>

- 🌳 `develop` = integration line · `main` = production (tagged)
- 🧩 `feature/*` branches off `develop`, merges back
- 📦 `release/*` stabilizes → merges to `main` + `develop`, **tags** the version
- 🚑 `hotfix/*` off `main` for urgent prod fixes → merges to both

> 🎯 More ceremony, more control. Reach for it when you ship **versioned releases**, not continuous deploys.

## Rulesets

Manage the repo to fit your needs. Enforce merge conditions as rules and automate the quality gate.

- ✅ Required reviews and approvers
- 🛡️ CI must pass
- 🔒 Block direct pushes to main
- 🏢 Apply across org/enterprise

> 🎯 Stop manual gatekeeping; let rulesets enforce top-down.

## ★ PRs in the AI era

With AI shipping PRs en masse, some ask "are PRs still needed?" But to keep a repo understandable and safe, this gate is necessary.

- 🤖 Copilot auto-review catches issues early
- 📈 ~90M merges/month in 2026 (~2x)
- 👀 Humans approve, AI does the prep

> 💡 Guard the PR and go faster = Rulesets × Copilot.
