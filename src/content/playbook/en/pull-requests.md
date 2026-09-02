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
  <circle cx="560" cy="234" r="17" fill="#a56cff"/>
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

## Inside a review

Today a PR can be opened by a **human**, a **cloud agent**, **Dependabot**, or an **agentic workflow**. On the diff, conversation, checks, and automated analysis converge: the place where quality is secured before merge.

| Element | Role |
| --- | --- |
| 🔀 Propose diff | Compare branches, request merge |
| 💬 Review | Line comments, approve/reject |
| 🤖 Copilot code review | AI auto-reviews every PR |
| ✅ Tests / CI | Required status checks must pass |
| 🛡️ Code Scanning (GHAS · Code Security) | CodeQL finds security vulnerabilities |
| 📊 Code Quality (standalone product) | Maintainability & reliability analysis (billed separately) |

> 🔑 `Closes #123` in a PR → the Issue auto-closes on merge.

## Rulesets

Rulesets enforce **merge conditions as rules**, a quality gate on your branches. Configure them at the **organization** or **repository** level, and apply them top-down across many repos.

**Minimal recommended setup:**

| Rule | Recommended setting | Why |
| --- | --- | --- |
| 🔀 Require a pull request before merging | ON + **Required approvals: 1** | Block direct pushes; every change gets at least one review |
| 🛡️ Require status checks to pass | Require **tests** + **Require branches to be up to date before merging** | Merge only when CI is green and validated against the latest main |
| 🔍 Require code scanning results | Require CodeQL results (block by severity) | Stop merges while unresolved security alerts remain |
| 🔒 Block force pushes | ON | Prevent destructive history rewrites |
| 🤖 Automatically request Copilot code review | ON | Copilot pre-reviews every PR automatically |

> 🎯 Stop manual gatekeeping; let rulesets enforce top-down.

## Stacked pull requests (NEW) <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/pull-requests/reference/stacked-pull-requests" target="_blank" rel="noopener noreferrer">📖 Docs</a>

An ordered chain where each PR targets the branch of the one below it, so reviewers get one small layer at a time instead of a giant diff. Public preview since **2026-07-30**.

Merging a stack is **one atomic operation**. What lands on `main` depends on the merge method:

<div class="figtabs">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-1" checked>
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-2">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-3">
<div class="figtabs-bar">
<label class="figtabs-tab" for="smm-1">Create a merge commit</label>
<label class="figtabs-tab" for="smm-2">Squash and merge</label>
<label class="figtabs-tab" for="smm-3">Rebase and merge</label>
</div>
<div class="figtabs-panel" data-idx="1">
<svg viewBox="0 0 900 372" role="img" aria-label="Create a merge commit: every branch keeps its own commits, and the whole stack lands on main through a single merge commit" style="width:100%;height:auto;max-width:820px;display:block;margin:1.2em auto 0;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="stk-mc" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="4" fill="#a56cff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-c</text>
  <rect x="16" y="121" width="118" height="34" rx="4" fill="#17d8e0"/><text x="75" y="143" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-b</text>
  <rect x="16" y="211" width="118" height="34" rx="4" fill="#2fbf76"/><text x="75" y="233" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-a</text>
  <rect x="16" y="301" width="118" height="34" rx="4" fill="#4ec3ff"/><text x="75" y="323" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <rect x="144" y="33" width="124" height="30" rx="4" fill="#131a2b" stroke="#a56cff" stroke-width="2"/><text x="206" y="53" fill="#a56cff">base: feat-b</text>
    <rect x="144" y="123" width="124" height="30" rx="4" fill="#131a2b" stroke="#17d8e0" stroke-width="2"/><text x="206" y="143" fill="#17d8e0">base: feat-a</text>
    <rect x="144" y="213" width="124" height="30" rx="4" fill="#131a2b" stroke="#2fbf76" stroke-width="2"/><text x="206" y="233" fill="#2fbf76">base: main</text>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="217" y1="318" x2="752" y2="318" marker-end="url(#stk-mc)"/>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="313" y1="228" x2="326" y2="228" marker-end="url(#stk-mc)"/>
    <line x1="413" y1="138" x2="426" y2="138" marker-end="url(#stk-mc)"/>
    <line x1="513" y1="48" x2="526" y2="48" marker-end="url(#stk-mc)"/>
    <line x1="213" y1="304" x2="287" y2="240" marker-end="url(#stk-mc)"/>
    <line x1="357" y1="217" x2="390" y2="150" marker-end="url(#stk-mc)"/>
    <line x1="457" y1="127" x2="490" y2="60" marker-end="url(#stk-mc)"/>
  </g>
  <circle cx="300" cy="228" r="13" fill="#2fbf76"/>
  <circle cx="346" cy="228" r="13" fill="#2fbf76"/>
  <circle cx="400" cy="138" r="13" fill="#17d8e0"/>
  <circle cx="446" cy="138" r="13" fill="#17d8e0"/>
  <circle cx="500" cy="48" r="13" fill="#a56cff"/>
  <circle cx="546" cy="48" r="13" fill="#a56cff"/>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="557" y1="57" x2="761" y2="303" marker-end="url(#stk-mc)"/>
  </g>
  <circle cx="200" cy="318" r="17" fill="#4ec3ff"/>
  <circle cx="780" cy="318" r="17" fill="#4ec3ff"/>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <text x="780" y="362" fill="#4ec3ff">1 merge commit (PR #1-3)</text>
  </g>
</svg>
<p class="figtabs-cap">Branch commits are kept as-is and the <b>whole stack lands through one merge commit</b>. Fullest history.</p>
</div>
<div class="figtabs-panel" data-idx="2">
<svg viewBox="0 0 900 372" role="img" aria-label="Squash and merge: each pull request collapses into a single commit on main" style="width:100%;height:auto;max-width:820px;display:block;margin:1.2em auto 0;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="stk-sq" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="4" fill="#a56cff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-c</text>
  <rect x="16" y="121" width="118" height="34" rx="4" fill="#17d8e0"/><text x="75" y="143" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-b</text>
  <rect x="16" y="211" width="118" height="34" rx="4" fill="#2fbf76"/><text x="75" y="233" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-a</text>
  <rect x="16" y="301" width="118" height="34" rx="4" fill="#4ec3ff"/><text x="75" y="323" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <rect x="144" y="33" width="124" height="30" rx="4" fill="#131a2b" stroke="#a56cff" stroke-width="2"/><text x="206" y="53" fill="#a56cff">base: feat-b</text>
    <rect x="144" y="123" width="124" height="30" rx="4" fill="#131a2b" stroke="#17d8e0" stroke-width="2"/><text x="206" y="143" fill="#17d8e0">base: feat-a</text>
    <rect x="144" y="213" width="124" height="30" rx="4" fill="#131a2b" stroke="#2fbf76" stroke-width="2"/><text x="206" y="233" fill="#2fbf76">base: main</text>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="217" y1="318" x2="625" y2="318" marker-end="url(#stk-sq)"/>
    <line x1="675" y1="318" x2="737" y2="318" marker-end="url(#stk-sq)"/>
    <line x1="787" y1="318" x2="849" y2="318" marker-end="url(#stk-sq)"/>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="313" y1="228" x2="326" y2="228" marker-end="url(#stk-sq)" opacity=".32"/>
    <line x1="413" y1="138" x2="426" y2="138" marker-end="url(#stk-sq)" opacity=".32"/>
    <line x1="513" y1="48" x2="526" y2="48" marker-end="url(#stk-sq)" opacity=".32"/>
    <line x1="213" y1="304" x2="287" y2="240" marker-end="url(#stk-sq)"/>
    <line x1="357" y1="217" x2="390" y2="150" marker-end="url(#stk-sq)"/>
    <line x1="457" y1="127" x2="490" y2="60" marker-end="url(#stk-sq)"/>
  </g>
  <circle cx="300" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="346" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="400" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="446" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="500" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <circle cx="546" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="359" y1="232" x2="627" y2="311" marker-end="url(#stk-sq)"/>
    <line x1="458" y1="145" x2="741" y2="306" marker-end="url(#stk-sq)"/>
    <line x1="557" y1="57" x2="855" y2="303" marker-end="url(#stk-sq)"/>
  </g>
  <circle cx="200" cy="318" r="17" fill="#4ec3ff"/>
  <rect x="633" y="301" width="34" height="34" rx="4" fill="#2fbf76"/>
  <rect x="745" y="301" width="34" height="34" rx="4" fill="#17d8e0"/>
  <rect x="857" y="301" width="34" height="34" rx="4" fill="#a56cff"/>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <text x="650" y="362" fill="#2fbf76">PR #1</text>
    <text x="762" y="362" fill="#17d8e0">PR #2</text>
    <text x="874" y="362" fill="#a56cff">PR #3</text>
  </g>
</svg>
<p class="figtabs-cap">Each PR collapses into <b>a single commit</b> on <code>main</code>. Cleanest log, but the individual commits (faded) are lost.</p>
</div>
<div class="figtabs-panel" data-idx="3">
<svg viewBox="0 0 900 372" role="img" aria-label="Rebase and merge: every branch commit is replayed onto main in order, with no merge commit" style="width:100%;height:auto;max-width:820px;display:block;margin:1.2em auto 0;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="stk-rb" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="4" fill="#a56cff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-c</text>
  <rect x="16" y="121" width="118" height="34" rx="4" fill="#17d8e0"/><text x="75" y="143" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-b</text>
  <rect x="16" y="211" width="118" height="34" rx="4" fill="#2fbf76"/><text x="75" y="233" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-a</text>
  <rect x="16" y="301" width="118" height="34" rx="4" fill="#4ec3ff"/><text x="75" y="323" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <rect x="144" y="33" width="124" height="30" rx="4" fill="#131a2b" stroke="#a56cff" stroke-width="2"/><text x="206" y="53" fill="#a56cff">base: feat-b</text>
    <rect x="144" y="123" width="124" height="30" rx="4" fill="#131a2b" stroke="#17d8e0" stroke-width="2"/><text x="206" y="143" fill="#17d8e0">base: feat-a</text>
    <rect x="144" y="213" width="124" height="30" rx="4" fill="#131a2b" stroke="#2fbf76" stroke-width="2"/><text x="206" y="233" fill="#2fbf76">base: main</text>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="217" y1="318" x2="596" y2="318" marker-end="url(#stk-rb)"/>
    <line x1="663" y1="318" x2="708" y2="318" marker-end="url(#stk-rb)"/>
    <line x1="775" y1="318" x2="820" y2="318" marker-end="url(#stk-rb)"/>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="313" y1="228" x2="326" y2="228" marker-end="url(#stk-rb)" opacity=".32"/>
    <line x1="413" y1="138" x2="426" y2="138" marker-end="url(#stk-rb)" opacity=".32"/>
    <line x1="513" y1="48" x2="526" y2="48" marker-end="url(#stk-rb)" opacity=".32"/>
    <line x1="213" y1="304" x2="287" y2="240" marker-end="url(#stk-rb)"/>
    <line x1="357" y1="217" x2="390" y2="150" marker-end="url(#stk-rb)"/>
    <line x1="457" y1="127" x2="490" y2="60" marker-end="url(#stk-rb)"/>
  </g>
  <circle cx="300" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="346" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="400" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="446" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="500" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <circle cx="546" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="359" y1="232" x2="593" y2="310" marker-end="url(#stk-rb)"/>
    <line x1="458" y1="146" x2="708" y2="305" marker-end="url(#stk-rb)"/>
    <line x1="556" y1="57" x2="822" y2="302" marker-end="url(#stk-rb)"/>
  </g>
  <circle cx="200" cy="318" r="17" fill="#4ec3ff"/>
  <g stroke="#7d8595" stroke-width="2.6">
    <line x1="629" y1="318" x2="637" y2="318"/>
    <line x1="741" y1="318" x2="749" y2="318"/>
    <line x1="853" y1="318" x2="861" y2="318"/>
  </g>
  <circle cx="616" cy="318" r="13" fill="#2fbf76"/>
  <circle cx="650" cy="318" r="13" fill="#2fbf76"/>
  <circle cx="728" cy="318" r="13" fill="#17d8e0"/>
  <circle cx="762" cy="318" r="13" fill="#17d8e0"/>
  <circle cx="840" cy="318" r="13" fill="#a56cff"/>
  <circle cx="874" cy="318" r="13" fill="#a56cff"/>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <text x="633" y="362" fill="#2fbf76">PR #1</text>
    <text x="745" y="362" fill="#17d8e0">PR #2</text>
    <text x="857" y="362" fill="#a56cff">PR #3</text>
  </g>
</svg>
<p class="figtabs-cap">Every commit is replayed onto <code>main</code> in order. <b>Linear history, no merge commit.</b> The originals (faded) are rewritten.</p>
</div>
</div>

- 🧱 Branch protections and CI run on **every layer**, not just the bottom one
- 🔄 GitHub **rebases for you** — merge a lower layer and the ones above retarget automatically
- ☝️ **Merge one, some, or all**: merging the top PR lands the whole stack, always bottom-up
- 🛠️ github.com, Mobile, REST / GraphQL / webhooks, and `gh extension install github/gh-stack`

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
