---
title: サードパーティエージェント
titleEn: Third-party agents
summary: Claude や Codex など、Copilot 以外の coding agent を GitHub / VS Code の agent workflow に接続する仕組み。
icon: 🧬
color: magenta
order: 15.5
category: develop
related: ['cloud-agent', 'copilot-chat', 'github-copilot']
links:
  - group: GitHub Docs
    label: About third-party agents
    url: https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents
  - group: VS Code Docs
    label: Third-party agents in Visual Studio Code
    url: https://code.visualstudio.com/docs/copilot/agents/third-party-agents
  - group: VS Code Docs
    label: Cloud agents in Visual Studio Code
    url: https://code.visualstudio.com/docs/copilot/agents/cloud-agents
  - group: OpenAI Codex
    label: OpenAI Codex in GitHub Copilot
    url: https://docs.github.com/copilot/concepts/agents/openai-codex
  - group: Claude
    label: Claude Code — VS Code extension
    url: https://code.claude.com/docs/en/vs-code
  - group: Claude
    label: Claude Agent SDK
    url: https://code.claude.com/docs/en/agent-sdk/overview
---

## 一言で

**Third-party agents** は、Copilot 以外の coding agent を GitHub / VS Code の workflow に並べる仕組み。

代表例は **Anthropic Claude** と **OpenAI Codex**。GitHub Docs では、Copilot cloud agent と並んで使える coding agents として扱われる。

## どこで使う？

```mermaid
flowchart LR
  User["Developer"]

  subgraph VSCode["VS Code"]
    Local["Local session<br/>Claude / Codex"]
    CloudUI["Cloud session<br/>partner agent picker"]
  end

  subgraph GitHub["GitHub"]
    Agents["Agents tab / Issue / PR"]
    PR["Draft PR<br/>review + iterate"]
  end

  User --> VSCode
  User --> GitHub
  Local --> User
  CloudUI --> PR
  Agents --> PR

  classDef user fill:#1a0a2e,stroke:#ff2e88,color:#ffe8f4,stroke-width:2px
  classDef local fill:#0a0e27,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px
  classDef cloud fill:#0a1a14,stroke:#9bbc0f,color:#f4ffd8,stroke-width:2px
  class User user
  class Local local
  class CloudUI,Agents,PR cloud
```

> VS Code では local / cloud の選択肢があり、GitHub.com では Agents tab、Issue、PR comment から task を渡せる。

## Copilot との関係

| Agent | 何が違う？ | Copilot との接点 |
| --- | --- | --- |
| Copilot cloud agent | GitHub の標準 cloud agent | GitHub Actions-powered 環境で branch / PR を作る |
| Claude | Anthropic の agent harness / SDK | VS Code や GitHub cloud agent workflow で利用 |
| Codex | OpenAI の Codex SDK / coding agent | VS Code extension や GitHub cloud agent workflow で利用 |

> これは Copilot Chat のモードではない。**どの agent provider / harness に task を渡すか** の話。
