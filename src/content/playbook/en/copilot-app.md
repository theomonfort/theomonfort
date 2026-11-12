---
title: Copilot App
titleEn: Copilot App
summary: Give Copilot a goal, connect your context, and review the results. Coordinate agents across repositories, create files, and continue cloud sessions across devices.
icon: /theomonfort/github-copilot-white-icon.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 16.7
category: develop
related: ['cloud-agent', 'cli', 'partner-agent', 'agentic-workflow']
links:
  - group: 📖 Official docs
    label: About the GitHub Copilot app
    url: https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app
  - group: 📖 Official docs
    label: Projects and shared context
    url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects
  - group: 📖 Official docs
    label: Connectors and access policies
    url: https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors
  - group: 📖 Official docs
    label: Image generation and editing
    url: https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation
  - group: 📖 Official docs
    label: Cloud sandboxes and session continuity
    url: https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes
  - group: 📰 Recent Changelog
    label: "Copilot app at Universe (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases
  - group: 📰 Recent Changelog
    label: "Native Office canvases: app v1.1.35"
    url: https://github.com/github/app/releases/tag/v1.1.35
  - group: 🎬 Universe
    label: Universe 2026 announcements and demos
    url: https://github.com/events/universe/recap
  - group: ⬇️ Download
    label: GitHub Copilot app download
    url: https://gh.io/app
---

## In one line

<div class="hero-quote">
  <p><strong>Give Copilot a goal, not just a coding task.</strong></p>
  <p>Bring together repositories, designs, and tools. Direct parallel agents, then review their <strong>files, changes, and pull requests</strong> in one app.</p>
</div>

## Six ways to work beyond code <a class="h2-doc" href="https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Universe '26 capabilities, status checked **2026-11-11**.

<div class="setup-cards">
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/computer-use" target="_blank" rel="noopener noreferrer">Computer use ↗</a></strong><span class="setup-card-tag tag-magenta">Public preview</span></div>
<p>Use desktop apps without an API.</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors" target="_blank" rel="noopener noreferrer">Connectors ↗</a></strong><span class="setup-card-tag tag-magenta">Public preview</span></div>
<p>Use Slack, Figma, and Work IQ.</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation" target="_blank" rel="noopener noreferrer">Image creation ↗</a></strong><span class="setup-card-tag tag-magenta">Public preview</span></div>
<p>Generate and edit images in chat.</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://github.com/github/app/releases/tag/v1.1.35" target="_blank" rel="noopener noreferrer">Office files ↗</a></strong><span class="setup-card-tag tag-cyan">App feature</span></div>
<p>Edit documents, sheets, and slides.</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes" target="_blank" rel="noopener noreferrer">Cloud sandboxes ↗</a></strong><span class="setup-card-tag tag-cyan">GA</span></div>
<p>Run agents with your laptop closed.</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience" target="_blank" rel="noopener noreferrer">Session continuity ↗</a></strong><span class="setup-card-tag tag-cyan">GA</span></div>
<p>Resume cloud work on another device.</p>
</div>
</div>

## Projects: give Copilot a goal <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-copilot-app-project" class="demo-toggle" /><label class="h2-demo" for="demo-copilot-app-project">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-copilot-app-project" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">From a brief to a project</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-copilot-app-project" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li><p class="demo-step-title">CREATE A PROJECT</p><p>Click <b>+</b> beside <b>Projects</b>. Use a demo repository you already own, or start without a repository.</p></li>
<li><p class="demo-step-title">ADD THE BRIEF</p><p>Open <b>Library → Add → Add file…</b> and choose a non-sensitive sample specification.</p></li>
<li><p class="demo-step-title">GIVE A BOUNDED GOAL</p><p><code class="demo-path">Read the specification in Library. Propose three implementation tasks and acceptance criteria. Do not edit code or create a pull request.</code></p></li>
<li><p class="demo-step-title">REVIEW THE RESULT</p><p>Open <b>Overview</b> for progress and <b>Needs input</b>; inspect the result in the conversation or <b>Library</b>.</p><p class="demo-out">One project keeps the brief, decisions, and results together.</p></li>
</ol>
</div>
</div>

**Public preview.** One ongoing goal, across **one, several, or no repositories**.

| You provide | Copilot coordinates | You review |
| --- | --- | --- |
| Goal + constraints | Parallel agent sessions | Progress in **Overview** |
| Specs + designs in **Library** | Shared context and artifacts | Decisions in **Needs input** |
| A recurring task + schedule | Project automations | Results and the next run |

For one focused repository task, start a **session** directly. Use a **project** to coordinate a broader outcome.

## Connect the context outside your repo <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Connectors = GitHub-verified MCP servers.** Sign in once, then use the connection across supported Copilot surfaces.

| Context | What you can ask |
| --- | --- |
| **Slack** | Find the discussion behind an API decision. |
| **Figma** | Use the design as context for implementation. |
| **Work IQ** | Find requirements in Teams and SharePoint. |

**26 services at launch (2026-10-28).** App / CLI / VS Code / web; Mobile through cloud sessions. Start in **Customize → MCP → GitHub verified**.

> ⚠️ Public preview: preview and MCP policies, allowlists, and service permissions must permit access. Connectors work locally and in cloud sandboxes, **not in Actions-hosted sessions**.

## Create files, not just replies <a class="h2-doc" href="https://github.com/github/app/releases/tag/v1.1.35" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Create and refine **images in chat**, and **Office files in native canvases**.

| Output | Example task |
| --- | --- |
| **Image** | Create an icon, then change its background. |
| **Word** | Turn a brief into a specification. |
| **Excel** | Organize a table and add a chart. |
| **PowerPoint** | Create a presentation, then edit a slide. |

Office editing is native, not computer use (**v1.1.35, 2026-11-04**). Review formatting and formulas before sharing.

> ⚠️ <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation" target="_blank" rel="noopener noreferrer">Image generation ↗</a> is in public preview, excludes Free / Student, and uses separately billed AI credits. The image model must be allowed by policy.

## Computer use: work in desktop apps <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/computer-use" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-copilot-app-computer" class="demo-toggle" /><label class="h2-demo" for="demo-copilot-app-computer">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-copilot-app-computer" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Read a desktop app safely</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-copilot-app-computer" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li><p class="demo-step-title">ENABLE LOCALLY</p><p>In a local macOS or Windows session, open <b>Settings → Computer Use → Enable Computer Use</b>. On macOS, grant <b>Accessibility</b> and <b>Screen Recording</b>; use <b>Check again</b> if needed.</p></li>
<li><p class="demo-step-title">KEEP APPROVAL MANUAL</p><p>Choose <b>Tool permissions → Ask every time</b>. Open an installed app with non-sensitive sample content.</p></li>
<li><p class="demo-step-title">ASK FOR READ-ONLY WORK</p><p><code class="demo-path">Read the main window of APP_NAME and summarize it. Do not change values or submit anything.</code> Replace <b>APP_NAME</b> with that app's name and approve only the intended access.</p></li>
<li><p class="demo-step-title">CHECK AND STOP</p><p>Compare the summary with the app. Use <b>Stop</b> or <b>Esc</b> to interrupt an active operation.</p><p class="demo-out">Copilot reads a real desktop app without needing an API.</p></li>
</ol>
</div>
</div>

**Public preview, local sessions on macOS and Windows.** Useful when an app has no API, CLI, or MCP integration.

- **Read and act:** inspect app content, click controls, enter text, and navigate a workflow.
- **Describe boundaries:** name the app, the result, and what must not change.
- **Control access:** enable Computer Use, follow **Tool Permissions**, and stop with **Esc**. Admins can disable it.

On macOS, **Accessibility + Screen Recording** permissions are required. This is separate from native Office canvases and does not run inside a cloud sandbox.

## One cloud session, across your day <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**App → Mobile → web → VS Code / CLI.** Same conversation, files, and progress.

| Capability | What changes for you |
| --- | --- |
| **Run** | Isolated Linux hosted by GitHub; your laptop can disconnect. |
| **Resume** | Snapshots preserve stopped sessions. No one-hour total runtime cap. |
| **Continue** | Start in Slack / Teams too; DM sessions continue in other clients. |

**GA, paid Copilot plans** (<a class="retro-link" href="https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience" target="_blank" rel="noopener noreferrer">2026-10-28 ↗</a>). Cloud policy applies.

> ⚠️ Select Cloud at session start; local sessions do not migrate. Compute and storage are metered: **no one-hour cap ≠ unlimited free use**.

## Direct the work, keep control <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Choose **how to collaborate**, separately from what tools may do.

| Mode | Your role |
| --- | --- |
| **Interactive** | Steer the work step by step. |
| **Plan** | Review and approve the approach before execution. |
| **Autopilot** | Delegate a defined task; review the result. |

- Choose a **model or Fusion** and add instructions / skills. Review the diff and PR.
- **Worktree ≠ sandbox:** isolate edits with a branch; restrict local tools with local sandboxing.

App: **macOS / Windows / Linux**, all Copilot plans (**2026-11-11**). Business / Enterprise requires the app policy; feature-specific limits still apply.

## <span class="app-demo-title">Demo scenario: fraud scoring</span>

<div class="app-demo-scenario">
<style>
.prose-akq .app-demo-scenario,.prose-akq .playbook-demo-video{font:clamp(16px,1.3vw,20px)/1.4 var(--font-prose),sans-serif;color:#e8f4ff}
.prose-akq .app-demo-scenario p,.prose-akq .playbook-demo-video p{margin:0}
.prose-akq .app-demo-scenario .app-demo-lead{font-size:1.1em;margin-bottom:14px}
.prose-akq .app-demo-context{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 16px}
.prose-akq .app-demo-context span{padding:4px 10px;border:1px solid #ff2e8880;background:#0a0e27cc}
.prose-akq .app-demo-stages{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.prose-akq .app-demo-stage{padding:14px;border-top:2px solid #ff2e88;background:#0a0e27cc}
.prose-akq .app-demo-scenario .app-demo-stage h3{margin:0 0 10px;font-size:1.1em;line-height:1.3;color:#ff2e88}
.prose-akq .app-demo-scenario .app-demo-control{margin-top:16px;padding-left:12px;border-left:3px solid #ffb000}
.prose-akq > h2:has(.app-demo-title){margin-bottom:14px}
.prose-akq .playbook-demo-video video{display:block;width:100%;aspect-ratio:16/9;object-fit:contain;background:#05060f}
.prose-akq .playbook-demo-video video:fullscreen{width:100vw;height:100dvh;max-height:none;aspect-ratio:auto;border:0;background:#000}
.prose-akq .playbook-demo-video video::backdrop{background:#000}
.prose-akq .playbook-demo-video video:focus-visible{outline:2px solid #00f0ff;outline-offset:3px}
.prose-akq .playbook-video-actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px 18px;margin-top:12px}
.prose-akq .playbook-video-actions button{padding:8px 14px;border:2px solid #ff2e88;background:#0a0e27;color:#e8f4ff;font:600 1em var(--font-prose),sans-serif;cursor:pointer}
.prose-akq .playbook-video-actions button:hover,.prose-akq .playbook-video-actions button:focus-visible{background:#ff2e8822;outline:2px solid #ff2e88;outline-offset:3px}
.prose-akq .playbook-video-actions button:disabled{opacity:.6;cursor:wait}
.prose-akq .playbook-demo-video .playbook-video-help{margin-top:8px;font-size:14px;color:#a8bed2}
.prose-akq .playbook-demo-video [data-video-status]{margin-top:8px;color:#ffb000}
.prose-akq .playbook-demo-video [data-video-status][hidden]{display:none}
body.present-mode .playbook-detail:has(.app-demo-scenario.akq-slide-active,.playbook-demo-video.akq-slide-active){padding-top:88px;padding-bottom:72px}
body.present-mode .prose-akq > h2:has(.app-demo-title){margin:0 0 12px;font-size:clamp(28px,2.2vw,36px);line-height:1.2;letter-spacing:0}
body.present-mode .prose-akq > h2:has(.app-demo-title)::before{top:.35em}
body.present-mode .prose-akq .playbook-demo-video video:not(:fullscreen){max-height:calc(100dvh - 330px)}
body.present-mode .prose-akq .playbook-demo-video:has([data-video-status]:not([hidden])) video:not(:fullscreen){max-height:calc(100dvh - 390px)}
@media(max-width:767px){body.present-mode .playbook-detail:has(.app-demo-scenario.akq-slide-active,.playbook-demo-video.akq-slide-active){padding-left:20px;padding-right:20px}}
@media(max-width:520px){.prose-akq .app-demo-stages{grid-template-columns:1fr}}
</style>
<p class="app-demo-lead">A <b>fictional insurer</b> needs a fraud-scoring feature, from policy rules to a working claims workflow.</p>
<p><b>Starting context:</b> an Excel specification + a policy document in Projects / Library.</p>
<div class="app-demo-context" aria-label="Four repositories"><span>contracts</span><span>API</span><span>web UI</span><span>docs</span></div>
<div class="app-demo-stages">
<div class="app-demo-stage"><h3>01 / Understand</h3><p>Fusion checks gaps against the spec. Agree on the rules and preserve decisions in Memory.</p></div>
<div class="app-demo-stage"><h3>02 / Implement</h3><p>Delegate with <code>/goal</code>. Coordinate PR changes across repos, run CI and address code review.</p></div>
<div class="app-demo-stage"><h3>03 / Operate</h3><p>Continue across devices, use a legacy desktop app, and monitor progress with Automations.</p></div>
</div>
<p class="app-demo-control"><b>You supply context, decide rules and approve consequential actions.</b> In this demo, PRs remain unmerged; registration in the legacy app needs approval.</p>
</div>

## <span class="app-demo-title">Demo: from specification to delivery</span>

<div class="playbook-demo-video" data-playbook-video data-fullscreen-error="Fullscreen is unavailable. Use the normal player controls below." data-playback-error="Playback could not start. Try the player controls or open the MP4." data-media-error="The video could not be loaded. Reload the page or open the MP4.">
<video id="copilot-app-demo-video" controls playsinline preload="metadata" tabindex="0" data-src="/theomonfort/media/copilot-app-fraud-scoring.mp4" poster="/theomonfort/media/copilot-app-fraud-scoring.jpg" aria-label="Fraud scoring demo with Japanese on-screen text" aria-describedby="copilot-app-video-help">
Your browser does not support this video. <a href="/theomonfort/media/copilot-app-fraud-scoring.mp4">Open the MP4</a>.
</video>
<div class="playbook-video-actions"><button type="button" data-video-fullscreen aria-controls="copilot-app-demo-video">▶ Play fullscreen</button><a class="retro-link" href="/theomonfort/media/copilot-app-fraud-scoring.mp4" target="_blank" rel="noopener noreferrer">Open MP4 ↗</a></div>
<p id="copilot-app-video-help" class="playbook-video-help">6:43 / Japanese on-screen text. Native playback, seek and volume controls. Esc exits fullscreen.</p>
<p data-video-status role="status" aria-live="polite" hidden></p>
<noscript><p>JavaScript is required for this player. Use the Open MP4 link above.</p></noscript>
</div>
