---
title: MCP Server (Model Context Protocol)
titleEn: MCP Server
summary: MCP is a method for providing additional context to AI models.
icon: /theomonfort/mcp.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 4
category: plan
related: ['agent-skills']
links:
  - label: MCP official (modelcontextprotocol.io)
    url: https://modelcontextprotocol.io/introduction
  - label: GitHub Docs — MCP
    url: https://docs.github.com/en/copilot/concepts/context/mcp
  - label: VS Code — MCP servers
    url: https://code.visualstudio.com/docs/copilot/customization/mcp-servers
  - label: GitHub official MCP server
    url: https://github.com/github/github-mcp-server
  - label: GitHub Docs — Configure MCP server access (org/enterprise)
    url: https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-server-access
  - label: GitHub Docs — MCP server usage in your company
    url: https://docs.github.com/en/copilot/concepts/mcp-management
  - label: GitHub Docs — MCP and the cloud agent
    url: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
  - group: 🗂️ MCP Registry
    label: MCP Registry (registry.modelcontextprotocol.io)
    url: https://registry.modelcontextprotocol.io/
  - group: 🗂️ MCP Registry
    label: MCP Registry repo
    url: https://github.com/modelcontextprotocol/registry
  - group: 🗂️ MCP Registry
    label: GitHub MCP Registry (github.com/mcp)
    url: https://github.com/mcp
  - group: 🗂️ MCP Registry
    label: GitHub Docs — Configure MCP registry (org/enterprise)
    url: https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry
  - group: 🗂️ MCP Registry
    label: GitHub Docs — MCP allowlist enforcement
    url: https://docs.github.com/en/copilot/reference/mcp-allowlist-enforcement
  - group: 🗂️ MCP Registry
    label: GitHub Blog — Find, install, manage MCP servers via the GitHub MCP Registry
    url: https://github.blog/ai-and-ml/generative-ai/how-to-find-install-and-manage-mcp-servers-with-the-github-mcp-registry/
  - group: 🗂️ MCP Registry
    label: Azure API Center — Register & discover MCP servers
    url: https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server
  - group: 📰 Recent Changelog
    label: "Secret scanning with GitHub MCP Server is now GA (2026-05-05)"
    url: https://github.blog/changelog/2026-05-05-secret-scanning-with-github-mcp-server-is-now-generally-available
  - group: 📰 Recent Changelog
    label: "Dependency scanning with GitHub MCP Server (public preview) (2026-05-05)"
    url: https://github.blog/changelog/2026-05-05-dependency-scanning-with-github-mcp-server-is-in-public-preview
  - group: 📰 Recent Changelog
    label: "Custom registry-based MCP allowlists for Copilot CLI (2026-04-16)"
    url: https://github.blog/changelog/2026-04-16-copilot-cli-supports-custom-registry-based-mcp-allowlists
---

## In a nutshell

<div class="hero-quote">

MCP stands for "Model Context Protocol" — a protocol for providing additional context and capabilities to AI models.

</div>

## How it works

```mermaid
flowchart LR
  subgraph Host["🤖 AI Host (VS Code / Copilot CLI, etc.)"]
    APP[Copilot]
    CL1[MCP Client]
    CL2[MCP Client]
    CL3[MCP Client]
    CL4[MCP Client]
    CL5[MCP Client]
  end
  subgraph MCP["🔌 MCP Layer (1 Client ⇄ 1 Server)"]
    SLs[Work IQ MCP Server]
    JRs[GitHub MCP Server]
    FSs[Playwright MCP Server]
    PWs[Context7 MCP Server]
    APIs[Salesforce MCP Server]
  end
  subgraph Tools["🛠️ External Tools"]
    SL[Work IQ]
    JR[GitHub]
    FS[Playwright]
    PW[Context7]
    API[Salesforce]
  end
  APP --- CL1
  APP --- CL2
  APP --- CL3
  APP --- CL4
  APP --- CL5
  CL1 <-->|stdio| SLs
  CL2 <-->|HTTP| JRs
  CL3 <-->|stdio| FSs
  CL4 <-->|stdio| PWs
  CL5 <-->|stdio| APIs
  SLs <-->|API| SL
  JRs <-->|API| JR
  FSs <-->|API| FS
  PWs <-->|API| PW
  APIs <-->|API| API

  classDef host fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef proto fill:#1a0a2e,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef tool fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  class APP,CL1,CL2,CL3,CL4,CL5 host
  class SLs,JRs,FSs,PWs,APIs proto
  class SL,JR,FS,PW,API tool
```

## Why does it matter?

Three values MCP brings:

- **🧩 Extensibility**: Make Copilot a **single entry point** for operating any external tool.
  - Read and write requirements (**Jira**)
  - Create designs (**Figma**)
  - Generate and print 3D designs (**Blender** + 3D printer)
  - Check and edit email and calendar (**Work IQ**)
  - Connect to internal databases for analysis
- **🔗 Workflow integration**: No more custom glue code between individual tools — Copilot acts as a **hub spanning multiple systems**.
- **🌐 Broad ecosystem support**: MCP is an **open protocol** that is rapidly becoming the **de facto standard**. AI assistants, development tools like **Visual Studio**, and many other applications already support MCP — **build once, connect anywhere**. Perfectly suited for coding integrations.

## Where does it run?

<div class="split-image">
  <div class="split-text">

There are **two ways** to run an MCP server.

1. With the **stdio method**, VS Code launches the MCP server as a **child process on your local machine**.
2. With the **HTTP method (SSE / streamable-http)**, the MCP server runs **in the cloud or on a remote server**, and VS Code simply **connects as a client**.

Choose based on your use case and security requirements.

  </div>
  <div class="split-figure">
    <img src="/theomonfort/mcp-activity-monitor.png" alt="Activity Monitor showing local MCP server processes" />
    <figcaption>In Activity Monitor, you can see local MCP servers running as <strong>child processes</strong> of <code>npm exec</code></figcaption>
  </div>
</div>

## Configuration in VS Code

When **installing an MCP server from the Marketplace** in VS Code, you can choose between two scopes:

- **`Install`** → Added to your **personal settings** file (User Settings)
- **`Install Workspace`** → Added to the **repository settings** file (`.vscode/mcp.json`)

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.vscode/mcp.json</code>
      <span class="setup-card-tag tag-cyan">▸ Shared with repo</span>
    </div>
    <p>Included in Git, so <strong>the whole team</strong> shares the same MCP setup. When a member clones the repo, VS Code asks <strong>"Would you like to enable it?"</strong>.</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>User Settings</code>
      <span class="setup-card-tag tag-magenta">▸ Your machine only</span>
    </div>
    <p>For <strong>personal</strong> use or when you want the same setup across all projects. Not included in Git.</p>
    <ul class="setup-card-paths">
      <li>📁 <strong>Mac</strong>：<code>~/.config/Code/User/settings.json</code></li>
      <li>🪟 <strong>Windows</strong>：<code>%APPDATA%\Code\User\settings.json</code></li>
    </ul>
  </div>
</div>

## Getting started with Copilot CLI

```bash
# Add an MCP server
copilot mcp add <server-name>

# List existing servers
copilot mcp list
```

The GitHub official MCP server is connected out of the box. AI can operate Issues, PRs, Actions, and Code search just like running `gh` commands.

`modelcontextprotocol/registry` hosts many official and community-built servers (filesystem / postgres / slack / puppeteer / playwright / Figma…).

## What is the MCP Registry

The **MCP Registry** is an **open registry** that lists MCP servers from across the ecosystem — and you can stand up **your own** registry too.

| Aspect | 🌐 MCP Registry | 🐙 GitHub MCP Registry |
| --- | --- | --- |
| Maintainer | **MCP Working Group** | **GitHub** |
| Contents | **All** official + community servers (~13,238 as of 2026-06-23) | A **curated list** (~100) |
| Default in | — | <a class="retro-link" href="https://code.visualstudio.com/docs/enterprise/ai-settings#_configure-a-custom-mcp-registry" target="_blank" rel="noopener noreferrer">VS Code ↗</a> & more |
| URL | <a class="retro-link" href="https://registry.modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">registry.modelcontextprotocol.io ↗</a> | <a class="retro-link" href="https://github.com/mcp" target="_blank" rel="noopener noreferrer">github.com/mcp ↗</a> |

> 🛠️ Build **your own registry** to **extend** or **narrow** the list of allowed servers.
> 🛡️ Enforce it at the **organization / enterprise** level (allowlist enforcement).

## Build your own MCP Registry

Two hosting options — both can be consumed and enforced from VS Code / Org / Enterprise (⚠️ note: enforcement applies only to the user's **active (currently used) license**).

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Self-hosted</code>
      <span class="setup-card-tag tag-cyan">▸ Full control</span>
    </div>
    <p>Deploy the OSS <a class="retro-link" href="https://github.com/modelcontextprotocol/registry" target="_blank" rel="noopener noreferrer">modelcontextprotocol/registry ↗</a> (a Go service) on your own infra. Officially maintained by the MCP Working Group.</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Azure API Center</code>
      <span class="setup-card-tag tag-magenta">▸ Managed</span>
    </div>
    <p>Register & publish MCP servers in Azure <a class="retro-link" href="https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server" target="_blank" rel="noopener noreferrer">API Center ↗</a> — no infra to manage.</p>
  </div>
</div>

### Point clients at it

- **GitHub Org / Enterprise**: <a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry" target="_blank" rel="noopener noreferrer">configure the registry ↗</a> and <a class="retro-link" href="https://docs.github.com/en/copilot/reference/mcp-allowlist-enforcement" target="_blank" rel="noopener noreferrer">enforce via allowlist ↗</a>

> 🔒 **Visibility ≠ access:** anything listed in Azure API Center is **visible to anyone** who can reach the catalog — but the catalog only exposes **metadata**. The actual **download / connection is gated separately**: for an internal server, publish a stdio server to a **private package registry** (GitHub Packages, GHCR, Azure Artifacts…) or keep an HTTP server **inside your network / VPN**, so only authenticated employees can pull or connect.

## Trying an MCP Registry locally

> 🧪 **These are personal notes, not a manual.** An AI summary of the flow that actually worked for me — just to give a rough idea. Your mileage will vary.

The flow to stand up a registry locally, expose it over HTTPS, connect it to my Org, and seed it from the GitHub MCP Registry.

1. **Fork & clone** — `gh repo fork modelcontextprotocol/registry --clone`
2. **Run in Docker** — `docker compose up` → API on `localhost:8080` (initial DB has only the demo seed)
3. **HTTPS tunnel** — `cloudflared tunnel --url http://localhost:8080` → `https://<random>.trycloudflare.com`
4. **Connect** — set the tunnel URL as **MCP Registry URL** (no `/v0.1/servers` suffix — Copilot appends it). **Org**: Settings → Copilot → **Policies** → MCP; **Enterprise**: **AI controls** → MCP
5. **Reload VS Code & verify** — Developer: Reload Window → `@mcp` shows only the servers from my registry. Open `Cmd + ,` (Settings) and confirm the MCP settings carry a **“managed by your organization”** badge (= the Org policy is applied)
6. **Seed from the GitHub Registry** — `go run scripts/mirror_data/fetch_production_data.go` + `load_production_data.go` (source: `https://api.mcp.github.com/v0.1/servers`)

> ⚠️ Make sure VS Code uses **this Org's Copilot license** (a different account / personal plan won't get the Org policy). The `mirror_data` scripts are as-is — filter them down to the servers you actually want to allow.
