---
title: Spaces
titleEn: Spaces
summary: "A shared place to organize the context you want Copilot to use: code, issues, pull requests, docs, notes, images, uploads, and instructions that ground Copilot's answers."
icon: /theomonfort/icons/github-spaces.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 17.5
category: develop
related: ['context-engineering', 'copilot-chat', 'mcp', 'codespaces']
links:
  - group: 📖 Official docs
    label: About Spaces
    url: https://docs.github.com/en/copilot/concepts/spaces
  - group: 📖 Official docs
    label: Creating Spaces
    url: https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces/create-copilot-spaces
  - group: 📖 Official docs
    label: Using Spaces
    url: https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces/use-copilot-spaces
  - group: 🎓 Use cases
    label: Speeding up development work with Spaces
    url: https://docs.github.com/en/copilot/using-github-copilot/copilot-spaces/speeding-up-development-work-with-copilot-spaces
  - group: 👥 Sharing
    label: Collaborating with your team using Spaces
    url: https://docs.github.com/en/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces
  - group: 🧪 Hands-on
    label: Scale institutional knowledge using Copilot Spaces
    url: https://github.com/skills/scale-institutional-knowledge-using-copilot-spaces
  - group: 🔌 IDE integration
    label: Remote GitHub MCP Server
    url: https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md
  - group: 📰 Recent Changelog
    label: "Copilot Spaces API is now generally available (2026-05-18)"
    url: https://github.blog/changelog/2026-05-18-copilot-spaces-api-now-generally-available
---

## In a nutshell

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Spaces</strong> gives Copilot a <strong>curated context room</strong> for a task, system, or team.
  </p>
  <p>
    Collect repos, files, issues, pull requests, notes, images, uploaded documents, and instructions, then ask Copilot questions grounded in that context.
  </p>
</div>

## What can you add?

A Space is a **shareable context artifact**, not an IDE: capture background once for the team.

| Source | Examples | Best use |
| --- | --- | --- |
| **Instructions** | Role, expected answers, what to avoid | Shape how Copilot behaves inside the Space |
| **GitHub content** | Repos / folders / files / issues / PRs | Reference current code and discussions |
| **Uploads** | Images, documents, spreadsheets | Bring in background outside GitHub |
| **Text content** | Meeting notes, design notes, FAQs | Turn tribal knowledge into searchable context |

> 💡 GitHub-based sources stay in sync as the project changes, making a Space an evergreen expert for that topic.

## Repo vs File

| Source type | How Copilot treats it | Use when |
| --- | --- | --- |
| **Repository** | Copilot does not load the whole repo into the context window. It searches and retrieves relevant content for the question. | Large codebases, architecture questions, cross-cutting discovery |
| **File / Folder** | Important files are prioritized; individual file contents are considered more consistently. | Specs, API contracts, design decisions, key implementations |
| **Uploaded file** | Copilot uses the uploaded snapshot. | External docs, images, transcripts, spreadsheets |

> ⚠️ Do not dump everything. Choose sources that answer the task. This is Context Engineering in practice.

## Sharing and permissions

Spaces can belong to a **personal account** or an **organization**. Sharing options depend on ownership.

| Owner | Sharing model | Roles |
| --- | --- | --- |
| **Organization** | Share with org members, teams, or users | Admin / Editor / Viewer / No access |
| **Individual** | Private, specific users, or anyone with the link | Public Spaces are view-only by default |

> 🔐 Viewers only see sources they already have access to. Sharing a Space does not bypass GitHub permissions.

## Use it from your IDE

Spaces also work from IDE Agent mode through the **GitHub MCP Server**. Enable the `copilot_spaces` toolset.

<div class="cloud-example-columns spaces-mcp-columns">
<div>

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "X-MCP-Toolsets": "default,copilot_spaces"
      }
    }
  }
}
```

</div>
<div>

> 🔌 In the IDE, Copilot uses `list_copilot_spaces` and `get_copilot_space` to access Space context. This requires **Agent mode**.

</div>
</div>

## ★ Killer use cases

<figure class="cloud-connected-figure spaces-context-flow">
<svg viewBox="0 0 1100 235" role="img" aria-labelledby="spaces-flow-title">
<title id="spaces-flow-title">Scattered knowledge becomes a Space, used by GitHub Chat or IDE Agent for grounded answers</title>
<defs><marker id="spaces-flow-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 10 5 0 10z" fill="#93a8ff"/></marker></defs>
<g class="cloud-flow-lines" marker-end="url(#spaces-flow-arrow)">
<path d="M310 115H350"/><path d="M550 115H580V55H620"/><path d="M550 115H580V180H620"/>
<path d="M810 55H845V95H880"/><path d="M810 180H845V135H880"/>
</g>
<g class="cloud-flow-human"><rect x="10" y="70" width="300" height="90"/><rect x="620" y="20" width="190" height="70"/><rect x="620" y="145" width="190" height="70"/></g>
<g class="cloud-flow-agent"><rect x="350" y="70" width="200" height="90"/><rect x="880" y="70" width="200" height="90"/></g>
<g class="cloud-flow-labels">
<text x="160" y="108">Scattered knowledge<tspan x="160" dy="28">docs / issues / PRs / notes</tspan></text>
<text x="450" y="123">Copilot Space</text><text x="715" y="63">GitHub.com Chat</text>
<text x="715" y="173">IDE Agent<tspan x="715" dy="27">via MCP</tspan></text>
<text x="980" y="108">Grounded<tspan x="980" dy="28">answer</tspan></text>
</g>
</svg>
</figure>

- 🚀 **Feature kickoff** — collect the spec, related code, mockups, and design notes in one place
- 🧭 **Onboarding** — make auth, billing, CI, and other high-question areas self-service
- 🔁 **Repeated tasks** — standardize telemetry, review checklists, and release flows
- 👥 **Fewer handoffs** — capture SME context once and let everyone reuse it

## Failure modes

| ❌ Common mistake | ✅ Better move |
| --- | --- |
| Add everything | Scope sources to the task, system, or team |
| Leave instructions empty | Define the Space's role, expected answers, and boundaries |
| Rely only on uploads | Use GitHub sources so context stays current |
| Share publicly by default | Choose personal vs org ownership and permissions first |
| Expect the Space to implement | A Space is context. Ask Chat / Agent / Cloud Agent to do the work |
