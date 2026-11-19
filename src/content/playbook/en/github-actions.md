---
title: GitHub Actions
titleEn: GitHub Actions
summary: GitHub's native CI/CD and automation platform. Steps written in .github/workflows/*.yml run automatically on push / PR / schedule. Public repos are free; private repos get a free tier plus pay-as-you-go. Cloud Agent and Copilot Code Review also run on top of this.
icon: /theomonfort/icons/github-actions.svg
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#5eead4"
order: 19.2
category: secure
related: ['cloud-agent', 'copilot-code-review', 'agentic-workflow', 'dependabot']
links:
  - group: 📖 Official Documentation
    label: GitHub Actions documentation
    url: https://docs.github.com/actions
  - group: 📖 Official Documentation
    label: Workflow syntax
    url: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
  - group: 📖 Official Documentation
    label: About billing for GitHub Actions
    url: https://docs.github.com/en/billing/concepts/product-billing/github-actions
  - group: 📖 Official Documentation
    label: Actions runner pricing
    url: https://docs.github.com/en/billing/reference/actions-runner-pricing
  - group: 💰 Billing
    label: Set up budgets and alerts
    url: https://docs.github.com/en/billing/how-tos/set-up-budgets
  - group: 💰 Billing
    label: Using soft budgets to monitor without blocking
    url: https://docs.github.com/en/billing/tutorials/soft-budgets
  - group: 💰 Billing
    label: Actions usage metrics
    url: https://docs.github.com/en/actions/concepts/metrics
  - group: 🛒 Marketplace
    label: GitHub Marketplace · Actions
    url: https://github.com/marketplace?type=actions
  - group: 📰 Recent Changelog
    label: "Actions workflow lockfiles are generally available (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available
  - group: 📰 Recent Changelog
    label: "GitHub Actions: Upcoming image migrations (2026-05-14)"
    url: https://github.blog/changelog/2026-05-14-github-actions-upcoming-image-migrations
  - group: 📰 Recent Changelog
    label: "Actions workflows are limited to 50 reruns (2026-04-10)"
    url: https://github.blog/changelog/2026-04-10-actions-workflows-are-limited-to-50-reruns
  - group: 📰 Recent Changelog
    label: "Actions OIDC tokens now support repository custom properties (2026-03-12)"
    url: https://github.blog/changelog/2026-03-12-actions-oidc-tokens-now-support-repository-custom-properties
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>GitHub Actions</strong> is a continuous integration and continuous delivery (CI/CD) platform.
  </p>
  <p>
    But it <strong>goes beyond just DevOps</strong>: run workflows when <strong>any event happens in your repository</strong> — push, PR, issue, label, schedule, and more. It's automation for <strong>almost anything</strong>.
  </p>
</div>

## What workflow does it automate?

Beyond CI/CD, GitHub Actions can automate **every stage of the SDLC**, all triggered by events.

<div class="actions-sdlc">
<img src="/theomonfort/github-actions-sdlc.svg" alt="GitHub Actions across the whole SDLC (Plan, Code, Build, Test, Release, Deploy, Operate, Monitor)" width="919" height="610" />
</div>

## The metrics it improves (DORA)

The point of automation (CI/CD, tests, reviews) is to raise both **speed and stability**. The yardstick is the four <a class="retro-link" href="https://dora.dev/" target="_blank" rel="noopener noreferrer">DORA metrics ↗</a> — push them toward Elite.

<div class="tbl-fit">

| DORA metric | 🟢 Elite | 🟣 High | 🟠 Medium | 🔴 Low |
| --- | --- | --- | --- | --- |
| 🚀 Deployment frequency | Multiple per day | Daily–weekly | Weekly–monthly | Every 1–6 months |
| ⏱️ Lead time for changes | < 1 day | 1 day–1 week | 1 week–1 month | 1–6 months |
| ❌ Change failure rate | 0–15% | 0–15% | 0–15% | 46–60% |
| 🔧 Mean time to recovery | < 1 hour | < 1 day | < 1 day | 1 week–1 month |

</div>

## Architecture: clone → run → destroy

Your GitHub repo is cloned onto a **disposable cloud VM**; steps (like tests) run there, results are sent back, and the **VM is destroyed**.

<div class="actions-architecture">
<svg viewBox="0 0 1100 210" role="img" aria-label="An event starts a runner, the repository is cloned and steps run, results return to GitHub, and the runner is destroyed">
<defs><marker id="actions-flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10 Z" /></marker></defs>
<g class="actions-sdlc-links" marker-end="url(#actions-flow-arrow)">
<path d="M225 125 H300" /><path d="M495 125 H570" /><path d="M765 125 H840" /><path d="M670 80 V35 H130 V75" />
</g>
<g class="actions-sdlc-nodes">
<rect x="35" y="80" width="190" height="90" /><rect x="305" y="80" width="190" height="90" /><rect x="575" y="80" width="190" height="90" /><rect x="845" y="80" width="190" height="90" />
</g>
<g class="actions-flow-text">
<text x="130" y="112"><tspan class="actions-sdlc-title">GitHub</tspan><tspan x="130" dy="27">Repository</tspan></text>
<text x="400" y="112"><tspan class="actions-sdlc-title">Runner VM</tspan><tspan x="400" dy="27">Fresh, disposable</tspan></text>
<text x="670" y="112"><tspan class="actions-sdlc-title">Run steps</tspan><tspan x="670" dy="27">Test, build</tspan></text>
<text x="940" y="112"><tspan class="actions-sdlc-title">Job ends</tspan><tspan x="940" dy="27">VM destroyed</tspan></text>
<text x="265" y="112">① Event</text><text x="535" y="112">② Clone</text><text x="805" y="112">④ Done</text><text x="400" y="24">③ Results and logs</text>
</g>
</svg>
</div>

> 🔁 Results return as checks, logs, and artifacts; the VM is discarded every run.

## How it works (core concepts)

An event starts a clean VM, checks out the repo, and runs the steps in order.

<div class="actions-concepts">
<p>📁 <strong>Workflows:</strong> <code>.github/workflows/*.yml</code>; multiple files supported.</p>
<p>⚡ <strong>Events:</strong> <code>push</code>, <code>pull_request</code>, cron <code>schedule</code>, manual <code>workflow_dispatch</code>, <code>issues</code>, <code>release</code> and 35+ events.</p>
<p>🖥️ <strong>Runner:</strong> fresh GitHub-hosted Linux / Windows / macOS VM per job.</p>
<p>📦 <strong>Checkout:</strong> <code>actions/checkout</code> clones to <code>$GITHUB_WORKSPACE</code>; jobs do not share state.</p>
<p>⏱️ <strong>Limits:</strong> 6 hours per job, 35 days per workflow; matrix jobs can run in parallel.</p>
<p>🔐 <strong>Secrets:</strong> <code>Settings → Secrets</code>, accessed as <code>${{ secrets.NAME }}</code> and masked in logs.</p>
<p>Persist state with <code>actions/cache</code>, artifacts, or deployed infrastructure.</p>
</div>

## Choose your runners <a class="h2-doc" href="https://docs.github.com/en/actions/concepts/runners/github-hosted-runners" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<p class="actions-compact-lead"><strong>GitHub-hosted for managed CI. Self-hosted for your own infrastructure.</strong></p>

<table class="compact-table actions-runners">
<thead><tr><th></th><th>GitHub-hosted</th><th>Self-hosted</th></tr></thead>
<tbody>
<tr><td>Maintenance</td><td>Managed by GitHub</td><td>You patch and secure it</td></tr>
<tr><td>Capacity</td><td>On demand, within plan limits</td><td>Your machines; ARC on Kubernetes</td></tr>
<tr><td>Network</td><td>Public or configured private access</td><td>Your network and hardware</td></tr>
<tr><td>Compute cost</td><td>Standard public runners free; otherwise metered</td><td>Infrastructure cost; no Actions compute charge</td></tr>
</tbody>
</table>

Need more power without managing machines? Use **larger runners** on Team or Enterprise Cloud.

## Reuse Marketplace actions <a class="h2-doc" href="https://docs.github.com/en/actions/reference/security/secure-use" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Compose existing <a class="retro-link" href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">Marketplace actions ↗</a> instead of writing every step.

<table class="compact-table">
<thead><tr><th>Task</th><th>Reusable action</th></tr></thead>
<tbody>
<tr><td>Check out code</td><td><code>actions/checkout</code></td></tr>
<tr><td>Install Node.js</td><td><code>actions/setup-node</code></td></tr>
<tr><td>Build a container</td><td><code>docker/build-push-action</code></td></tr>
</tbody>
</table>

<ul class="actions-compact-list">
<li><strong>Review source</strong>, including verified creators.</li>
<li><strong>Use lockfiles or full commit SHAs</strong>; tags can move.</li>
<li><strong>Set an org allowlist</strong> in Settings → Actions → General.</li>
</ul>

## Start with one workflow <a class="h2-doc" href="https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Add <code>.github/<wbr>workflows/<wbr>ci.yml</code> to a Node.js project:

<div class="pre-compact">

```yaml
name: CI
on: { push: { branches: [main] }, pull_request: {} }
permissions: { contents: read }
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - { uses: actions/setup-node@v7, with: { node-version: 24 } }
      - run: npm ci && npm test
```

</div>

Push → **Actions logs + PR checks**. Lock dependencies or pin full SHAs.

## Compute and pricing <a class="h2-doc" href="https://docs.github.com/en/billing/concepts/product-billing/github-actions" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="info-actions-pricing" class="demo-toggle" /><label class="h2-demo h2-info" for="info-actions-pricing">&#9432; INFO</label>

<div class="demo-panel is-info">
<label class="demo-scrim" for="info-actions-pricing" aria-label="Close pricing details"></label>
<div class="demo-window" role="group" aria-label="Compute and storage pricing">
<div class="demo-head"><span class="demo-tag">INFO</span><span class="demo-name">Compute and storage</span><label class="demo-close" for="info-actions-pricing" aria-label="Close">&#10005;</label></div>
<div class="info-body">
<p>USD, as of 2026-11-11. Compute is a monthly monetary allowance, not a fixed minute quota. Eligible runner usage and cloud sandbox compute/memory draw from the same allowance.</p>
<ul class="info-list">
<li><b>Standard rates:</b> Linux x64 2-core $0.006/min, Windows x64 2-core $0.010/min, macOS 3/4-core $0.062/min. See <a class="retro-link" href="https://docs.github.com/en/billing/reference/actions-runner-pricing" target="_blank" rel="noopener noreferrer">all runner sizes and rates ↗</a>.</li>
<li><b>Larger runners:</b> paid even for public repositories. Eligible usage can draw from Team / Enterprise Cloud included compute.</li>
<li><b>Artifact storage:</b> Free 500 MB, Pro 1 GB, Team 2 GB, Enterprise Cloud 50 GB, shared with Packages. Overage: $0.25/GB-month.</li>
<li><b>Cache storage:</b> separate 10 GB per repository; configured extra capacity costs $0.07/GB-month. Custom image storage has a separate allowance and the same overage rate.</li>
<li><b>Billing:</b> the repository owner pays. Storage accrues hourly; deleting an artifact stops future charges, not past usage.</li>
</ul>
</div>
</div>
</div>

<p class="actions-compact-lead"><strong>Standard public runners and self-hosted compute are free.</strong> Other eligible usage draws from a shared allowance.</p>

| Plan | Included compute / month |
| --- | ---: |
| Free | $12 |
| Pro / Team | $18 |
| Enterprise Cloud | $300 |

<p class="actions-pricing-note">USD, <strong>as of 2026-11-11</strong>. Example: $300 covers <strong>50,000 Linux 2-core minutes</strong> at $0.006/min. Additional usage is billed; storage is separate.</p>

## Budget beyond your CI <a class="h2-doc" href="https://docs.github.com/en/billing/how-tos/set-up-budgets" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<p class="actions-compact-lead"><strong>Automation shares compute; AI credits are a separate meter.</strong></p>

<table class="compact-table">
<thead><tr><th>Consumer</th><th>Compute usage</th></tr></thead>
<tbody>
<tr><td>CI, <a class="retro-link" href="/theomonfort/en/playbook/code-scanning/">CodeQL</a>, <a class="retro-link" href="/theomonfort/en/playbook/code-quality/">Code Quality</a></td><td>Hosted workflow / scan runs</td></tr>
<tr><td><a class="retro-link" href="/theomonfort/en/playbook/copilot-code-review/">Copilot Code Review</a></td><td>Agentic context gathering and tools</td></tr>
<tr><td><a class="retro-link" href="/theomonfort/en/playbook/cloud-agent/">Copilot cloud tasks</a></td><td>Actions or cloud sandbox compute</td></tr>
</tbody>
</table>

<div class="actions-budget-notes">
<p><strong>Monitor:</strong> soft budgets alert at <strong>75 / 90 / 100%</strong>; inspect usage metrics.</p>
<p><strong>Cap carefully:</strong> “Stop usage when budget limit is reached” blocks billed usage <strong>within that budget's scope</strong>.</p>
<p>Code review still runs without Actions-powered agentic capabilities; an Actions budget does <strong>not</strong> stop all Copilot features.</p>
</div>

## Workflow lockfiles (GA) <a class="h2-doc" href="https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-actions-lockfiles" class="demo-toggle" /><label class="h2-demo" for="demo-actions-lockfiles">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-actions-lockfiles" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Lock this site's workflow</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-actions-lockfiles" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">COMPARE A TAG AND A COMMIT</p>
<p>Open <a class="retro-link" href="https://github.com/actions/checkout/tree/v4" target="_blank" rel="noopener noreferrer">checkout@v4 ↗</a>, then <a class="retro-link" href="https://github.com/actions/checkout/commit/11d5960a326750d5838078e36cf38b85af677262" target="_blank" rel="noopener noreferrer">the locked commit ↗</a>.</p>
<p class="demo-out">A tag can move; a full SHA identifies one revision. Even <code>v4.4.0</code> is a tag.</p>
</li>
<li>
<p class="demo-step-title">OPEN THE EXISTING LOCKFILE</p>
<p>Open <a class="retro-link" href="https://github.com/theomonfort/theomonfort/blob/main/.github/workflows/actions.lock" target="_blank" rel="noopener noreferrer">this site's actions.lock ↗</a>. Show <code class="demo-path">workflows</code>, then <code class="demo-path">dependencies</code>.</p>
<p class="demo-out">Compare checkout's recorded SHA with the commit page. Show <code>owner_id</code>, <code>repo_id</code> and the transitive <code>upload-artifact</code> dependency.</p>
</li>
<li>
<p class="demo-step-title">VERIFY WITHOUT MODIFYING FILES</p>
<p>In an up-to-date checkout of this site, with <code>gh-actions-lock</code> installed:</p>
<code class="demo-cmd">gh actions-lock --verify .github/workflows/deploy.yml</code>
<p class="demo-out">Verification succeeds when the workflow and lockfile agree. The current <code>v4</code> tag need not match the recorded <code>v4.4.0</code> commit.</p>
</li>
<li>
<p class="demo-step-title">REQUIRE LOCKFILES GRADUALLY</p>
<p>As an authorized administrator, open <a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/actions/rules" target="_blank" rel="noopener noreferrer">theomonfort-org → Actions Policies ↗</a>.</p>
<p>Path: organization <code class="demo-path">Settings → Actions → Policies → New policy → New policy</code> (in the dropdown). Name the policy, scope the demo repositories/workflows, enable <code class="demo-path">Require lockfile</code>, then save.</p>
<p class="demo-out">On Enterprise Cloud, start in <code>Evaluate</code> and inspect <code>Policy insights</code>. Switch to <code>Active</code> only after targeted workflows are onboarded.</p>
</li>
</ol>
</div>
</div>

**Why it matters:** an action tag like `v4` can be moved to different code. Your next build could run an unreviewed change, or malicious code, without any change to your workflow.

**What it does:** a lockfile records the exact commit of each action, including actions it depends on. GitHub Actions runs those recorded commits instead of following a moving tag.

- **Review updates:** Dependabot proposes <a class="retro-link" href="https://github.com/theomonfort/theomonfort/blob/main/.github/dependabot.yml" target="_blank" rel="noopener noreferrer">action updates ↗</a> and the matching lockfile changes together in a pull request.
- **Require adoption:** administrators can <a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/actions/rules" target="_blank" rel="noopener noreferrer">block selected workflows ↗</a> until they use a lockfile.
