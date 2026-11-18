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
  hex: "#fcd34d"
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
  - group: 📖 Official docs
    label: About stacked pull requests
    url: https://docs.github.com/en/pull-requests/get-started/about-stacked-prs
  - group: 📖 Official docs
    label: Agent merge in the Copilot app
    url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests
  - group: 🎓 Tutorials
    label: Linking a PR to an issue
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue
  - group: 📰 Announcements
    label: Stacked pull requests are now in public preview
    url: https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview
  - group: 🧪 Examples
    label: VS Code Pull Requests
    url: https://github.com/microsoft/vscode/pulls
---

## In one line

<div class="hero-quote">
  <p>
    When you write code, there are several ways to <strong>branch and merge</strong>. This chapter tours the main ones.
  </p>
  <p>
    Whichever you pick, everyone goes through a <strong>Pull Request</strong> to merge. We'll break down what a PR contains, and how all of this can be enforced with <strong>Rulesets</strong>.
  </p>
</div>

## Branching strategies

How a team organizes branches around PRs. Pick the model that matches your release cadence.

| Strategy | How it works | Best for |
| --- | --- | --- |
| 🌿 GitHub Flow | One `main` + short-lived feature branches; PR → merge → deploy from `main` | Continuous delivery, most teams |
| 🌳 Git Flow | `main` + long-lived `develop`, plus `feature` / `release` / `hotfix` branches | Scheduled, versioned releases |

> 💡 Default to **GitHub Flow** for speed; reach for **Git Flow** only when you ship versioned releases.

## GitHub Flow

<div class="split-image pr-compact pr-flow">
<div class="split-figure">
<svg viewBox="0 0 700 380" role="img" aria-label="GitHub Flow: main branch with several short-lived change branches merging in">
  <defs>
    <marker id="ghf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="49" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="71" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="135" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="157" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="223" width="118" height="34" rx="7" fill="#17d8e0"/><text x="75" y="245" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="309" width="118" height="34" rx="7" fill="#ff5b6b"/><text x="75" y="331" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">change</text>
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

</div>
<div class="split-text">

**One long-lived `main`, short-lived feature branches.** Fast feedback for web apps and teams shipping continuously.

- 🌿 Branch from `main` for each feature or fix
- 🔀 Open a **PR early** for review and CI
- ✅ Merge, then **deploy immediately**
- ♻️ Keep `main` **always deployable**

</div>
</div>

## Git Flow

<div class="split-image pr-compact pr-flow">
<div class="split-figure">
<svg viewBox="0 0 740 400" role="img" aria-label="Git Flow branch model: main, hotfix, release, develop, and two feature lanes">
  <defs>
    <marker id="gf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="53" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="93" width="118" height="34" rx="7" fill="#ff7a2f"/><text x="75" y="115" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">hotfix</text>
  <rect x="16" y="155" width="118" height="34" rx="7" fill="#17c2b8"/><text x="75" y="177" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">release</text>
  <rect x="16" y="217" width="118" height="34" rx="7" fill="#a56cff"/><text x="75" y="239" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">develop</text>
  <rect x="16" y="279" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="301" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">feature</text>
  <rect x="16" y="341" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="363" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">feature</text>
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
    <line x1="492" y1="234" x2="543" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="577" y1="234" x2="638" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="308" y1="249" x2="362" y2="281" marker-end="url(#gf-arrow)"/>
    <line x1="388" y1="296" x2="417" y2="296" marker-end="url(#gf-arrow)"/>
    <line x1="450" y1="289" x2="470" y2="250" marker-end="url(#gf-arrow)"/>
    <line x1="229" y1="249" x2="272" y2="341" marker-end="url(#gf-arrow)"/>
    <line x1="297" y1="358" x2="328" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="362" y1="358" x2="393" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="427" y1="358" x2="458" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="484" y1="345" x2="550" y2="248" marker-end="url(#gf-arrow)"/>
    <line x1="488" y1="221" x2="531" y2="181" marker-end="url(#gf-arrow)"/>
    <line x1="562" y1="172" x2="593" y2="172" marker-end="url(#gf-arrow)"/>
    <line x1="622" y1="159" x2="652" y2="61" marker-end="url(#gf-arrow)"/>
    <line x1="621" y1="184" x2="641" y2="218" marker-end="url(#gf-arrow)"/>
  </g>
  <ellipse cx="190" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="190" y="52" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="12" font-weight="bold">v0.1</text>
  <ellipse cx="370" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="370" y="52" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="12" font-weight="bold">v0.2</text>
  <ellipse cx="665" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="665" y="52" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="12" font-weight="bold">v1.0</text>
  <circle cx="290" cy="110" r="17" fill="#ff7a2f"/>
  <circle cx="545" cy="172" r="17" fill="#17c2b8"/>
  <circle cx="610" cy="172" r="17" fill="#17c2b8"/>
  <circle cx="220" cy="234" r="17" fill="#a56cff"/>
  <circle cx="300" cy="234" r="17" fill="#a56cff"/>
  <circle cx="370" cy="234" r="17" fill="#a56cff"/>
  <circle cx="475" cy="234" r="17" fill="#a56cff"/>
  <circle cx="560" cy="234" r="17" fill="#a56cff"/>
  <circle cx="655" cy="234" r="17" fill="#a56cff"/>
  <circle cx="370" cy="296" r="16" fill="#2fbf76"/>
  <circle cx="435" cy="296" r="16" fill="#2fbf76"/>
  <circle cx="280" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="345" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="410" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="475" cy="358" r="16" fill="#2fbf76"/>
</svg>

</div>
<div class="split-text">

**Two long-lived branches: `main` + `develop`.** More control for scheduled, versioned releases.

- 🌳 `develop` integrates; `main` is tagged production
- 🧩 `feature/*`: branch from and return to `develop`
- 📦 `release/*`: stabilize, merge to both, **tag the version**
- 🚑 `hotfix/*`: urgent fix from `main`, merge to both

</div>
</div>

## Inside a review

<div class="pr-compact pr-review">

Opened by a **human**, **cloud agent**, **Dependabot**, or **agentic workflow**, a PR brings review, checks, and analysis together before merge.

| Element | Role |
| --- | --- |
| 🔀 Propose diff | Compare branches, request merge |
| 💬 Review | Line comments, approve/reject |
| 🤖 Copilot code review | AI auto-reviews every PR |
| ✅ Tests / CI | Required status checks must pass |
| 🛡️ Code Scanning (GHAS · Code Security) | CodeQL finds security vulnerabilities |
| 📊 Code Quality (standalone product) | Maintainability & reliability analysis (billed separately) |

> 🔑 `Closes #123` in a PR → the Issue auto-closes on merge.

</div>

## Rulesets

<div class="pr-compact pr-rules">

Enforce **merge conditions** at the **organization or repository** level, across repos. Start with these five rules:

| Rule | Setting | Why |
| --- | --- | --- |
| 🔀 Require a pull request before merging | ON + **1 required approval** | No direct pushes; every change reviewed |
| 🛡️ Require status checks to pass | **Tests** + **up-to-date branches** | Green CI against the latest `main` |
| 🔍 Require code scanning results | CodeQL, block by severity | Block unresolved security alerts |
| 🔒 Block force pushes | ON | Prevent destructive history rewrites |
| 🤖 Automatically request Copilot code review | ON | Automatic Copilot pre-review |

</div>

## Stacked pull requests (NEW) <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/pull-requests/reference/stacked-pull-requests" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="pr-compact pr-stack">

Each PR targets the branch below it for **small reviewable layers** instead of a giant diff (public preview: **2026-07-30**).

<div class="split-image">
<div class="figtabs">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-1" checked>
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-2">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-3">
<div class="figtabs-bar">
<label class="figtabs-tab" for="smm-1">Merge commit</label>
<label class="figtabs-tab" for="smm-2">Squash and merge</label>
<label class="figtabs-tab" for="smm-3">Rebase and merge</label>
</div>
<div class="figtabs-panel" data-idx="1">
<svg viewBox="0 0 860 302" role="img" aria-label="Merge commit: all 6 branch commits remain in Git history, joined onto main by a single 2-parent merge commit M with no new code">
  <defs>
    <marker id="stk-mc" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#8fa6bc"/>
    </marker>
    <marker id="stk-mc-blue" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#4ec3ff"/>
    </marker>
    <marker id="stk-mc-amber" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="var(--c-crt-amber)"/>
    </marker>
  </defs>
  <rect x="6" y="27" width="152" height="36" rx="3" fill="#a56cff"/><text x="82" y="51" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #3 · feat-c</text>
  <rect x="164" y="29" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#a56cff" stroke-width="1.8"/><text x="216" y="51" text-anchor="middle" fill="#a56cff" font-size="16" font-weight="700">→ feat-b</text>
  <rect x="6" y="97" width="152" height="36" rx="3" fill="#17d8e0"/><text x="82" y="121" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #2 · feat-b</text>
  <rect x="164" y="99" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#17d8e0" stroke-width="1.8"/><text x="216" y="121" text-anchor="middle" fill="#17d8e0" font-size="16" font-weight="700">→ feat-a</text>
  <rect x="6" y="167" width="152" height="36" rx="3" fill="#2fbf76"/><text x="82" y="191" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #1 · feat-a</text>
  <rect x="164" y="169" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.8"/><text x="216" y="191" text-anchor="middle" fill="#2fbf76" font-size="16" font-weight="700">→ main</text>
  <rect x="6" y="239" width="152" height="36" rx="3" fill="#4ec3ff"/><text x="82" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">main</text>
  <g stroke="#8fa6bc" stroke-width="2.6" fill="none">
    <line x1="305" y1="244" x2="334" y2="199" marker-end="url(#stk-mc)"/>
    <line x1="362" y1="185" x2="380" y2="185" marker-end="url(#stk-mc)"/>
    <line x1="408" y1="172" x2="434" y2="129" marker-end="url(#stk-mc)"/>
    <line x1="460" y1="115" x2="478" y2="115" marker-end="url(#stk-mc)"/>
    <line x1="506" y1="102" x2="532" y2="59" marker-end="url(#stk-mc)"/>
    <line x1="558" y1="45" x2="576" y2="45" marker-end="url(#stk-mc)"/>
  </g>
  <line x1="311" y1="257" x2="592" y2="257" stroke="#4ec3ff" stroke-width="3" marker-end="url(#stk-mc-blue)"/>
  <line x1="597" y1="61" x2="613" y2="233" stroke="var(--c-crt-amber)" stroke-width="3" marker-end="url(#stk-mc-amber)"/>
  <circle cx="294" cy="257" r="17" fill="#4ec3ff"/><text x="294" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">m0</text>
  <circle cx="346" cy="185" r="16" fill="#2fbf76"/><text x="346" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">a1</text>
  <circle cx="398" cy="185" r="16" fill="#2fbf76"/><text x="398" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">a2</text>
  <circle cx="444" cy="115" r="16" fill="#17d8e0"/><text x="444" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">b1</text>
  <circle cx="496" cy="115" r="16" fill="#17d8e0"/><text x="496" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">b2</text>
  <circle cx="542" cy="45" r="16" fill="#a56cff"/><text x="542" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">c1</text>
  <circle cx="594" cy="45" r="16" fill="#a56cff"/><text x="594" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">c2</text>
  <circle cx="616" cy="257" r="20" fill="#4ec3ff" stroke="var(--c-crt-amber)" stroke-width="3"/><text x="616" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="18" font-weight="800">M</text>
  <rect x="622" y="22" width="232" height="44" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.6"/>
  <text x="738" y="50" text-anchor="middle" fill="#2fbf76" font-size="16" font-weight="700">✓ 6 commits (a1..c2) kept</text>
  <line x1="636" y1="250" x2="648" y2="240" stroke="var(--c-crt-amber)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <rect x="648" y="164" width="206" height="120" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="1.8"/>
  <text x="660" y="191" fill="var(--c-crt-amber)" font-size="16.5" font-weight="700">M = 1 merge commit</text>
  <text x="660" y="218" fill="var(--c-phosphor)" font-size="15.5" font-weight="600">2 parents: main + c2</text>
  <text x="660" y="245" fill="var(--c-fg-body)" font-size="15">Diff = PR #1–3 combined</text>
  <text x="660" y="270" fill="var(--c-fg-muted)" font-size="15">0 new code added</text>
</svg>
<div class="pr-method-card">
  <p class="pr-method-summary">Keeps all 6 branch commits intact; <b><code>M</code> is a 2-parent bridge</b> joining <code>main</code> and <code>c2</code>.</p>
  <p class="pr-method-pro">✅ <b>Pro:</b> Preserves 100% of micro-commits, original SHAs, and exact <code>git blame</code>.</p>
  <p class="pr-method-con">⚠️ <b>Con:</b> <code>wip</code> / <code>fix typo</code> commits stay in <code>git log</code>, creating loop-heavy history.</p>
</div>
</div>
<div class="figtabs-panel" data-idx="2">
<svg viewBox="0 0 860 302" role="img" aria-label="Squash and merge: each pull request collapses into 1 commit on a linear main branch, while draft branch commits are dropped">
  <defs>
    <marker id="stk-sq-line" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#4ec3ff"/>
    </marker>
    <marker id="stk-sq-g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#2fbf76"/>
    </marker>
    <marker id="stk-sq-c" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#17d8e0"/>
    </marker>
    <marker id="stk-sq-p" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#a56cff"/>
    </marker>
  </defs>
  <rect x="6" y="27" width="152" height="36" rx="3" fill="#a56cff"/><text x="82" y="51" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #3 · feat-c</text>
  <rect x="164" y="29" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#a56cff" stroke-width="1.8"/><text x="216" y="51" text-anchor="middle" fill="#a56cff" font-size="16" font-weight="700">→ feat-b</text>
  <rect x="6" y="97" width="152" height="36" rx="3" fill="#17d8e0"/><text x="82" y="121" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #2 · feat-b</text>
  <rect x="164" y="99" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#17d8e0" stroke-width="1.8"/><text x="216" y="121" text-anchor="middle" fill="#17d8e0" font-size="16" font-weight="700">→ feat-a</text>
  <rect x="6" y="167" width="152" height="36" rx="3" fill="#2fbf76"/><text x="82" y="191" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #1 · feat-a</text>
  <rect x="164" y="169" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.8"/><text x="216" y="191" text-anchor="middle" fill="#2fbf76" font-size="16" font-weight="700">→ main</text>
  <rect x="6" y="239" width="152" height="36" rx="3" fill="#4ec3ff"/><text x="82" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">main</text>
  <g stroke="#8fa6bc" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity=".28">
    <line x1="306" y1="246" x2="389" y2="193"/>
    <line x1="418" y1="185" x2="442" y2="185"/>
    <line x1="471" y1="177" x2="565" y2="123"/>
    <line x1="594" y1="115" x2="618" y2="115"/>
    <line x1="647" y1="107" x2="741" y2="53"/>
    <line x1="770" y1="45" x2="794" y2="45"/>
  </g>
  <g opacity=".36">
    <circle cx="403" cy="185" r="15" fill="#2fbf76"/><text x="403" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a1</text>
    <circle cx="457" cy="185" r="15" fill="#2fbf76"/><text x="457" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a2</text>
    <circle cx="579" cy="115" r="15" fill="#17d8e0"/><text x="579" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b1</text>
    <circle cx="633" cy="115" r="15" fill="#17d8e0"/><text x="633" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b2</text>
    <circle cx="755" cy="45" r="15" fill="#a56cff"/><text x="755" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c1</text>
    <circle cx="809" cy="45" r="15" fill="#a56cff"/><text x="809" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c2</text>
  </g>
  <line x1="430" y1="202" x2="430" y2="233" stroke="#2fbf76" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-sq-g)"/>
  <line x1="606" y1="132" x2="606" y2="233" stroke="#17d8e0" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-sq-c)"/>
  <line x1="782" y1="62" x2="782" y2="233" stroke="#a56cff" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-sq-p)"/>
  <g stroke="#4ec3ff" stroke-width="3" fill="none">
    <line x1="311" y1="257" x2="384" y2="257" marker-end="url(#stk-sq-line)"/>
    <line x1="472" y1="257" x2="560" y2="257" marker-end="url(#stk-sq-line)"/>
    <line x1="648" y1="257" x2="736" y2="257" marker-end="url(#stk-sq-line)"/>
  </g>
  <circle cx="294" cy="257" r="17" fill="#4ec3ff"/><text x="294" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">m0</text>
  <rect x="388" y="238" width="84" height="38" rx="3" fill="#2fbf76"/><text x="430" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="800">PR #1</text>
  <rect x="564" y="238" width="84" height="38" rx="3" fill="#17d8e0"/><text x="606" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="800">PR #2</text>
  <rect x="740" y="238" width="84" height="38" rx="3" fill="#a56cff"/><text x="782" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="800">PR #3</text>
  <rect x="284" y="22" width="352" height="66" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="1.6"/>
  <text x="298" y="49" fill="var(--c-crt-amber)" font-size="17" font-weight="700">Linear main: 1 commit per PR</text>
  <text x="298" y="75" fill="var(--c-fg-body)" font-size="15.5">Draft commits (a1..c2) dropped</text>
</svg>
<div class="pr-method-card">
  <p class="pr-method-summary">Collapses <b>each PR into 1 commit</b> on <code>main</code> (3 commits total, not 1 for the stack).</p>
  <p class="pr-method-pro">✅ <b>Pro:</b> Cleanest linear <code>main</code> (<b>1 PR = 1 commit</b>), 1-step <code>git revert</code>, zero WIP noise.</p>
  <p class="pr-method-con">⚠️ <b>Con:</b> Micro-commits drop from <code>main</code> (<code>git blame</code> shows PR level; PR page keeps them).</p>
</div>
</div>
<div class="figtabs-panel" data-idx="3">
<svg viewBox="0 0 860 302" role="img" aria-label="Rebase and merge: all 6 branch commits are replayed linearly onto main with new SHAs and no merge commit">
  <defs>
    <marker id="stk-rb-line" markerWidth="8" markerHeight="8" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#8fa6bc"/>
    </marker>
    <marker id="stk-rb-g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#2fbf76"/>
    </marker>
    <marker id="stk-rb-c" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#17d8e0"/>
    </marker>
    <marker id="stk-rb-p" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#a56cff"/>
    </marker>
  </defs>
  <rect x="6" y="27" width="152" height="36" rx="3" fill="#a56cff"/><text x="82" y="51" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #3 · feat-c</text>
  <rect x="164" y="29" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#a56cff" stroke-width="1.8"/><text x="216" y="51" text-anchor="middle" fill="#a56cff" font-size="16" font-weight="700">→ feat-b</text>
  <rect x="6" y="97" width="152" height="36" rx="3" fill="#17d8e0"/><text x="82" y="121" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #2 · feat-b</text>
  <rect x="164" y="99" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#17d8e0" stroke-width="1.8"/><text x="216" y="121" text-anchor="middle" fill="#17d8e0" font-size="16" font-weight="700">→ feat-a</text>
  <rect x="6" y="167" width="152" height="36" rx="3" fill="#2fbf76"/><text x="82" y="191" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #1 · feat-a</text>
  <rect x="164" y="169" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.8"/><text x="216" y="191" text-anchor="middle" fill="#2fbf76" font-size="16" font-weight="700">→ main</text>
  <rect x="6" y="239" width="152" height="36" rx="3" fill="#4ec3ff"/><text x="82" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">main</text>
  <g stroke="#8fa6bc" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity=".28">
    <line x1="306" y1="246" x2="389" y2="193"/>
    <line x1="418" y1="185" x2="442" y2="185"/>
    <line x1="471" y1="177" x2="565" y2="123"/>
    <line x1="594" y1="115" x2="618" y2="115"/>
    <line x1="647" y1="107" x2="741" y2="53"/>
    <line x1="770" y1="45" x2="794" y2="45"/>
  </g>
  <g opacity=".34">
    <circle cx="403" cy="185" r="15" fill="#2fbf76"/><text x="403" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a1</text>
    <circle cx="457" cy="185" r="15" fill="#2fbf76"/><text x="457" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a2</text>
    <circle cx="579" cy="115" r="15" fill="#17d8e0"/><text x="579" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b1</text>
    <circle cx="633" cy="115" r="15" fill="#17d8e0"/><text x="633" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b2</text>
    <circle cx="755" cy="45" r="15" fill="#a56cff"/><text x="755" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c1</text>
    <circle cx="809" cy="45" r="15" fill="#a56cff"/><text x="809" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c2</text>
  </g>
  <line x1="430" y1="202" x2="430" y2="236" stroke="#2fbf76" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-rb-g)"/>
  <line x1="606" y1="132" x2="606" y2="236" stroke="#17d8e0" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-rb-c)"/>
  <line x1="782" y1="62" x2="782" y2="236" stroke="#a56cff" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-rb-p)"/>
  <g stroke="#8fa6bc" stroke-width="2.6" fill="none">
    <line x1="311" y1="257" x2="381" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="417" y1="257" x2="439" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="475" y1="257" x2="557" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="593" y1="257" x2="615" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="651" y1="257" x2="733" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="769" y1="257" x2="791" y2="257" marker-end="url(#stk-rb-line)"/>
  </g>
  <circle cx="294" cy="257" r="17" fill="#4ec3ff"/><text x="294" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">m0</text>
  <circle cx="401" cy="257" r="15.5" fill="#2fbf76"/><text x="401" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">a1'</text>
  <circle cx="459" cy="257" r="15.5" fill="#2fbf76"/><text x="459" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">a2'</text>
  <circle cx="577" cy="257" r="15.5" fill="#17d8e0"/><text x="577" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">b1'</text>
  <circle cx="635" cy="257" r="15.5" fill="#17d8e0"/><text x="635" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">b2'</text>
  <circle cx="753" cy="257" r="15.5" fill="#a56cff"/><text x="753" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">c1'</text>
  <circle cx="811" cy="257" r="15.5" fill="#a56cff"/><text x="811" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">c2'</text>
  <text x="430" y="293" text-anchor="middle" fill="#2fbf76" font-size="15" font-weight="700">PR #1</text>
  <text x="606" y="293" text-anchor="middle" fill="#17d8e0" font-size="15" font-weight="700">PR #2</text>
  <text x="782" y="293" text-anchor="middle" fill="#a56cff" font-size="15" font-weight="700">PR #3</text>
  <rect x="284" y="22" width="352" height="66" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="1.6"/>
  <text x="298" y="49" fill="var(--c-crt-amber)" font-size="17" font-weight="700">Linear main: 6 commits replayed</text>
  <text x="298" y="75" fill="var(--c-fg-body)" font-size="15.5">New SHAs (a1'..c2'), 0 merge commit</text>
</svg>
<div class="pr-method-card">
  <p class="pr-method-summary">Replays all 6 commits onto <code>main</code> in order (<code>a1'</code>..<code>c2'</code>) with <b>new SHAs and 0 merge commit</b>.</p>
  <p class="pr-method-pro">✅ <b>Pro:</b> Linear <code>main</code> graph while keeping individual step-by-step commits.</p>
  <p class="pr-method-con">⚠️ <b>Con:</b> Rewrites original SHAs, and noisy <code>wip</code> commits still land on <code>main</code>.</p>
</div>
</div>
</div>

<div class="split-text">

**How the stack merges**

- ☝️ **One, some, or all**: merge bottom-up; merging `PR #3` lands the **whole stack atomically**
- 🔄 **Auto-rebase & retarget**: merging `PR #1` updates `PR #2` to target `main`
- 🛡️ **Gates per layer**: Rulesets, reviews, and CI check **every PR**
- 🧹 **Safe branch cleanup**: delete `feat-a/b/c` after merge in **any mode** (history stays on `main`)
- 🛠️ **Surfaces**: github.com, Mobile, APIs / webhooks, `gh extension install github/gh-stack`

</div>
</div>

</div>

## Agent merge (NEW)

In the **GitHub Copilot app**, hand a pull request's last mile to the agent: it clears what is blocking the merge, then merges as soon as GitHub allows.

- 🔀 **Toggle it at the top of a PR** — the workspace's Copilot session picks it up
- 🩹 **Fixes what blocks it**: review comments, failing checks, conflicts
- 🌙 **Runs in the background** and survives app restarts
- ✅ **Turns itself off** once the PR is merged

> ⚠️ It doesn't bypass your gates — required approvals and required checks still decide what reaches `main`.

## ★ PRs in the AI era

With AI shipping PRs en masse, some ask "are PRs still needed?" But to keep a repo understandable and safe, this gate is necessary.

- 🤖 Copilot auto-review catches issues early
- 📈 ~90M merges/month in 2026 (~2x)
- 👀 Humans approve, AI does the prep

> 💡 Guard the PR and go faster = Rulesets × Copilot.
