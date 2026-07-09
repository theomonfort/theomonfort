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

<svg viewBox="0 0 700 380" role="img" aria-label="GitHub Flow: main branch with several short-lived change branches merging in" style="width:100%;height:auto;max-width:760px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="ghf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="49" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="71" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="135" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="157" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="223" width="118" height="34" rx="7" fill="#17d8e0"/><text x="75" y="245" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="309" width="118" height="34" rx="7" fill="#ff5b6b"/><text x="75" y="331" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">change</text>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="249" y1="152" x2="336" y2="152" marker-end="url(#ghf-arrow)"/>
    <line x1="374" y1="152" x2="471" y2="152" marker-end="url(#ghf-arrow)"/>
    <line x1="509" y1="152" x2="596" y2="152" marker-end="url(#ghf-arrow)"/>
    <line x1="241" y1="166" x2="286" y2="225" marker-end="url(#ghf-arrow)"/>
    <line x1="315" y1="225" x2="343" y2="167" marker-end="url(#ghf-arrow)"/>
    <line x1="367" y1="138" x2="414" y2="82" marker-end="url(#ghf-arrow)"/>
    <line x1="449" y1="66" x2="526" y2="66" marker-end="url(#ghf-arrow)"/>
    <line x1="561" y1="80" x2="604" y2="138" marker-end="url(#ghf-arrow)"/>
    <line x1="367" y1="166" x2="426" y2="312" marker-end="url(#ghf-arrow)"/>
    <line x1="455" y1="312" x2="481" y2="168" marker-end="url(#ghf-arrow)"/>
  </g>
  <circle cx="230" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="355" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="490" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="615" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="430" cy="66" r="19" fill="#2fbf76"/>
  <circle cx="545" cy="66" r="19" fill="#2fbf76"/>
  <circle cx="300" cy="240" r="19" fill="#17d8e0"/>
  <circle cx="440" cy="326" r="19" fill="#ff5b6b"/>
</svg>

- 🌿 Branch from `main` for each change (feature / fix)
- 🔀 Open a **PR** early — review and CI run on the branch
- ✅ Merge to `main`, then **deploy immediately**
- ♻️ `main` stays **always deployable**

> 💡 Fewer moving parts = faster feedback. The default for continuous delivery.

## Git Flow

**Two long-lived branches (`main` + `develop`) plus supporting branches.** Work integrates on `develop`; a `release` branch stabilizes a version, then merges to `main` and gets tagged. Structured for scheduled, versioned releases and larger teams.

<svg viewBox="0 0 740 400" role="img" aria-label="Git Flow branch model: main, hotfix, release, develop, and two feature lanes" style="width:100%;height:auto;max-width:820px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="gf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="93" width="118" height="34" rx="7" fill="#ff7a2f"/><text x="75" y="115" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">hotfix</text>
  <rect x="16" y="155" width="118" height="34" rx="7" fill="#17c2b8"/><text x="75" y="177" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">release</text>
  <rect x="16" y="217" width="118" height="34" rx="7" fill="#a56cff"/><text x="75" y="239" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">develop</text>
  <rect x="16" y="279" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="301" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feature</text>
  <rect x="16" y="341" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="363" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feature</text>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="214" y1="48" x2="344" y2="48" marker-end="url(#gf-arrow)"/>
    <line x1="396" y1="48" x2="639" y2="48" marker-end="url(#gf-arrow)"/>
    <line x1="190" y1="64" x2="219" y2="215" marker-end="url(#gf-arrow)"/>
    <line x1="207" y1="59" x2="274" y2="100" marker-end="url(#gf-arrow)"/>
    <line x1="305" y1="100" x2="351" y2="60" marker-end="url(#gf-arrow)"/>
    <path d="M291 127 C 302 165, 332 190, 366 214" marker-end="url(#gf-arrow)"/>
    <line x1="237" y1="234" x2="283" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="317" y1="234" x2="353" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="387" y1="234" x2="458" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="492" y1="234" x2="638" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="308" y1="249" x2="362" y2="281" marker-end="url(#gf-arrow)"/>
    <line x1="388" y1="296" x2="417" y2="296" marker-end="url(#gf-arrow)"/>
    <line x1="450" y1="289" x2="470" y2="250" marker-end="url(#gf-arrow)"/>
    <line x1="229" y1="249" x2="272" y2="341" marker-end="url(#gf-arrow)"/>
    <line x1="297" y1="358" x2="328" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="362" y1="358" x2="393" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="427" y1="358" x2="458" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="477" y1="342" x2="476" y2="252" marker-end="url(#gf-arrow)"/>
    <line x1="488" y1="221" x2="531" y2="181" marker-end="url(#gf-arrow)"/>
    <line x1="562" y1="172" x2="593" y2="172" marker-end="url(#gf-arrow)"/>
    <line x1="622" y1="159" x2="652" y2="61" marker-end="url(#gf-arrow)"/>
    <line x1="621" y1="184" x2="641" y2="218" marker-end="url(#gf-arrow)"/>
  </g>
  <ellipse cx="190" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="190" y="52" text-anchor="middle" fill="#05060f" font-size="12" font-weight="bold">v0.1</text>
  <ellipse cx="370" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="370" y="52" text-anchor="middle" fill="#05060f" font-size="12" font-weight="bold">v0.2</text>
  <ellipse cx="665" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="665" y="52" text-anchor="middle" fill="#05060f" font-size="12" font-weight="bold">v1.0</text>
  <circle cx="290" cy="110" r="17" fill="#ff7a2f"/>
  <circle cx="545" cy="172" r="17" fill="#17c2b8"/>
  <circle cx="610" cy="172" r="17" fill="#17c2b8"/>
  <circle cx="220" cy="234" r="17" fill="#a56cff"/>
  <circle cx="300" cy="234" r="17" fill="#a56cff"/>
  <circle cx="370" cy="234" r="17" fill="#a56cff"/>
  <circle cx="475" cy="234" r="17" fill="#a56cff"/>
  <circle cx="655" cy="234" r="17" fill="#a56cff"/>
  <circle cx="370" cy="296" r="16" fill="#2fbf76"/>
  <circle cx="435" cy="296" r="16" fill="#2fbf76"/>
  <circle cx="280" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="345" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="410" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="475" cy="358" r="16" fill="#2fbf76"/>
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
