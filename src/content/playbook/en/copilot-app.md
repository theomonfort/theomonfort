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
