---
title: Copilot Chat
titleEn: Copilot Chat
summary: The synchronous conversation surface for Copilot. Available across IDE, GitHub.com, and Mobile, with the deepest harness on the IDE side.
icon: /theomonfort/icons/copilot-chat.png
color: cyan
order: 3.5
category: develop
related: ['mcp', 'instructions', 'cli', 'cloud-agent']
links:
  - group: Copilot Chat
    label: About GitHub Copilot Chat
    url: https://docs.github.com/copilot/github-copilot-chat/about-github-copilot-chat
  - group: Copilot Chat
    label: Copilot Chat in VS Code
    url: https://code.visualstudio.com/docs/copilot/chat/copilot-chat
  - group: VS Code agents
    label: VS Code — Agents overview
    url: https://code.visualstudio.com/docs/copilot/agents/overview
  - group: VS Code agents
    label: VS Code — Local agents
    url: https://code.visualstudio.com/docs/copilot/agents/local-agents
  - group: VS Code agents
    label: VS Code — Agent customizations
    url: https://code.visualstudio.com/docs/copilot/customization/overview
  - group: VS Code agents
    label: VS Code — Chat context
    url: https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context
  - group: VS Code agents
    label: VS Code — Agent tools
    url: https://code.visualstudio.com/docs/copilot/agents/agent-tools
  - group: 📰 Recent Changelog
    label: "Semantic issue search in Copilot Chat (2026-05-20)"
    url: https://github.blog/changelog/2026-05-20-semantic-issue-search-in-copilot-chat
  - group: 📰 Recent Changelog
    label: "Ask questions in context with Copilot on web (2026-05-18)"
    url: https://github.blog/changelog/2026-05-18-ask-questions-in-context-with-copilot-on-web
  - group: 📰 Recent Changelog
    label: "Copilot Chat improvements for pull requests (2026-04-23)"
    url: https://github.blog/changelog/2026-04-23-copilot-chat-improvements-for-pull-requests
---

## In a nutshell

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Copilot Chat</strong> is the synchronous conversation surface for Copilot.
  </p>
  <p>
    Here it refers to the experience of asking, consulting, and requesting Copilot in the IDE, GitHub.com, and Mobile.
  </p>
</div>

> Cloud Agent, which fully delegates implementation, and Copilot CLI, which runs in the terminal, are separate topics. Chat is first and foremost a "UI for conversing on the spot."

## Three Chats

Even when called "Copilot Chat," the experience varies a bit depending on where you open it.

| Chat | Where | Role |
| --- | --- | --- |
| IDE Chat | VS Code, Visual Studio, JetBrains, etc. | Converse with Ask / Plan / Agent while using the local workspace and tools |
| GitHub.com Chat | GitHub in the browser | Ask questions and make requests from issue, PR, and repo context. Also serves as an entry point for Cloud Agent |
| Mobile Chat | GitHub Mobile | Review and instruct on the go. Also an entry point for launching agent sessions from issues / PRs |

> GitHub.com / Mobile are convenient entry points. However, the same modes, built-in agents, skills, and tools as the IDE are not always available.

## Three IDE Modes

VS Code's Copilot Chat has **built-in agents** for different purposes.

| Mode | Underlying mechanism | What does it do? |
| --- | --- | --- |
| Ask | Ask built-in agent | The first mode to appear as GitHub Copilot. Provides answers to questions.<br/>Recommended for new team members getting up to speed with the codebase |
| Plan | Plan built-in agent | Create implementation-ready documentation through interactive conversation with GitHub Copilot.<br/>Use Agent mode or Coding Agent to implement based on the created documentation |
| Agent | Raw agent | Acts as a semi-autonomous pair programmer: internally analyzes requests, proposes implementation, and validates proposals.<br/>Can interact with systems outside GitHub using MCP servers |

> Even within the same Chat UI, what is "allowed" differs between Ask / Plan / Agent.

## IDE Chat Operations

VS Code's Copilot Chat has built-in skills, prompts, instructions, hooks, MCP servers, and other components visible from the start.

| Operation | Where to look | What you can do |
| --- | --- | --- |
| Check components | Cog icon at top-right of Chat → Agent Customizations | View Agents, Skills, Instructions, Prompts, Hooks, MCP Servers, and Plugins |
| Invoke agent / prompt | `/` in the Chat input | Launch Ask / Plan / Agent, built-in commands, and prompts |
| Add context | `#` or Add Context | Pass `#file`, `#codebase`, folder, symbol, terminal output, web fetch, and more |
| Check tools | Configure Tools button | Choose built-in tools, MCP tools, and extension tools available to the Agent |

> Instructions / Skills / MCP / verification policies created in the PLAN phase are passed here as context and tools to Chat / Agent.
