---
title: Copilot Chat
titleEn: Copilot Chat
summary: コードと会話する入口。VS Code の Local agent harness を中心に、Ask / Plan / Agent、customizations、CLI / Cloud / Claude / Codex へつなぐ操作面。
icon: 💬
color: cyan
order: 3
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
    label: VS Code — Chat sessions
    url: https://code.visualstudio.com/docs/copilot/chat/chat-sessions
  - group: Agent surfaces
    label: VS Code — Cloud agents
    url: https://code.visualstudio.com/docs/copilot/agents/cloud-agents
  - group: Agent surfaces
    label: VS Code — Third-party agents
    url: https://code.visualstudio.com/docs/copilot/agents/third-party-agents
  - group: Agent surfaces
    label: GitHub Docs — Third-party agents
    url: https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents
  - group: Claude / Codex
    label: GitHub Docs — OpenAI Codex in Copilot
    url: https://docs.github.com/copilot/concepts/agents/openai-codex
  - group: Claude / Codex
    label: Claude Code — VS Code extension
    url: https://code.claude.com/docs/en/vs-code
  - group: Claude / Codex
    label: Claude Agent SDK
    url: https://code.claude.com/docs/en/agent-sdk/overview
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Copilot Chat</strong> は、コードと会話するための入口。
  </p>
  <p>
    VS Code では、ただのチャットではなく、Local agent harness として Ask / Plan / Agent、tools、models、permissions、customizations を束ねる。
  </p>
</div>

> GitHub.com / Mobile でも Chat や agent 起動はできる。ただし、VS Code のようにローカル workspace、extension tools、terminal、selection、Agent Customizations を全部持つわけではない。

## VS Code の harness：3 つの built-in agents

VS Code docs では **Ask / Plan / Agent** は “custom agent” ではなく **built-in agents**。  
同じ Chat UI でも、選ぶ agent によって「何をしてよいか」が変わる。

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Ask</code>
      <span class="setup-card-tag tag-cyan">▸ 質問</span>
    </div>
    <p>コードベース、VS Code、技術概念について回答する。ファイル変更はしない前提で、理解・探索・相談に使う。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Plan</code>
      <span class="setup-card-tag tag-amber">▸ 設計</span>
    </div>
    <p>実装前に multi-step plan を作る。必要なら質問し、納得できたら implementation agent や Cloud agent に handoff する。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Agent</code>
      <span class="setup-card-tag tag-magenta">▸ 実装</span>
    </div>
    <p>高レベル要求から自律的に計画し、ファイル編集、terminal command、tool call、検証を進める。</p>
  </div>
</div>

> さらに session type、permission level、language model を選ぶことで、どこで動くか・どこまで自律させるかも harness できる。

## Agent Customizations

Agent Customizations は、Chat の裏側にある “部品棚”。  
Local / Cloud / CLI / Claude など、agent type ごとに見える部品は変わる。

| 部品 | 何を固定する？ | 例 |
| --- | --- | --- |
| Agents | persona、tools、model、handoff | Ask / Plan / Agent、Explore、チーム独自 agent |
| Skills | 専門タスクの手順・resources | create-skill、PR description、frontend design |
| Instructions | 常時効くルール | repo conventions、file-based rules |
| Prompts | くり返し使う依頼テンプレート | scaffold、review、migration |
| Hooks | lifecycle で実行する処理 | format after edit、policy check |
| MCP Servers | 外部 tool / data 接続 | GitHub、Playwright、Jira、Figma |
| Plugins | 上記を bundle として配布 | slash commands、skills、agents、MCP |

> VS Code docs では `/create-prompt`、`/create-instruction`、`/create-skill`、`/create-agent`、`/create-hook` で customizations を生成できる。

## Chat はどこまで同じ？

同じ Copilot でも、surface によって harness の深さが違う。

| Surface | 得意なこと | 注意点 |
| --- | --- | --- |
| VS Code Chat | Local agents、Ask / Plan / Agent、tools、models、permissions、customizations | 一番フル機能。ローカル context と extension tools を使える |
| GitHub.com | repo / issue / PR context、Agents tab、Cloud agent 起動 | ローカル terminal や VS Code selection は持たない |
| GitHub Mobile | 外出先で質問、issue / PR から agent session 起動 | quick control 向け。VS Code の local harness ではない |
| Copilot CLI | terminal-native agent、local files、GitHub.com 操作 | Chat UI ではなく CLI harness。VS Code から handoff できる |
| Cloud agent | GitHub Actions-powered 環境で branch / commits / PR | 非同期。remote なので VS Code runtime context には直接触れない |

> つまり、GitHub.com / Mobile の Chat は便利な入口。ただし **Plan mode を含む full local agent harness は VS Code 側** と考える。

## VS Code は agent console になる

```mermaid
flowchart TB
  UI["VS Code Chat<br/>single sessions view"]

  Local["Local agents<br/>Ask / Plan / Agent<br/>workspace + tools"]
  CLI["Copilot CLI / Background<br/>local machine<br/>async worktree"]
  Cloud["Cloud agents<br/>Copilot / Claude / Codex<br/>PR workflow"]
  Third["Third-party local agents<br/>Claude Agent SDK<br/>OpenAI Codex extension"]

  UI --> Local
  UI --> CLI
  UI --> Cloud
  UI --> Third

  Plan["Plan first<br/>then handoff"]
  Local --> Plan
  Plan --> CLI
  Plan --> Cloud

  classDef ui fill:#1a0a2e,stroke:#ff2e88,color:#ffe8f4,stroke-width:2px
  classDef local fill:#0a0e27,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px
  classDef remote fill:#0a1a14,stroke:#9bbc0f,color:#f4ffd8,stroke-width:2px
  classDef cli fill:#302500,stroke:#ffb000,color:#fff4d6,stroke-width:2px
  class UI ui
  class Local,Third local
  class Cloud remote
  class CLI,Plan cli
```

VS Code からできること：

- **Claude**：Claude Agent SDK の harness を VS Code から使う。local / cloud の選択肢がある
- **Codex**：OpenAI Codex extension / Codex coding agent を Copilot subscription で使える範囲がある
- **CLI**：local session を Copilot CLI / background agent に handoff できる
- **Cloud**：Plan や local chat の文脈を Cloud agent に渡し、PR workflow へ進められる

> Chat は「質問箱」ではなく、**どの agent harness で実行するかを選ぶ control plane** になっている。
