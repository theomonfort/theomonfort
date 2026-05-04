---
title: Copilot Chat
titleEn: Copilot Chat
summary: Copilot と同期的に会話する入口。IDE、GitHub.com、Mobile で使えるが、最も深い harness は IDE 側にある。
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
    label: VS Code — Chat context
    url: https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context
  - group: VS Code agents
    label: VS Code — Agent tools
    url: https://code.visualstudio.com/docs/copilot/agents/agent-tools
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Copilot Chat</strong> は、Copilot と同期的に会話する入口。
  </p>
  <p>
    ここでは、IDE、GitHub.com、Mobile で Copilot に質問・相談・依頼する体験を指す。
  </p>
</div>

> 実装を完全に任せる Cloud Agent や、ターミナルで動く Copilot CLI とは別の話。Chat はまず「その場で会話する UI」。

## 3 つの Chat

「Copilot Chat」と言っても、どこで開くかで体験は少し違う。

| Chat | 使う場所 | 役割 |
| --- | --- | --- |
| IDE Chat | VS Code、Visual Studio、JetBrains など | Ask / Plan / Agent で、ローカル workspace と tools を使いながら会話 |
| GitHub.com Chat | ブラウザ上の GitHub | issue、PR、repo context から質問・依頼。Cloud Agent の入口にもなる |
| Mobile Chat | GitHub Mobile | 移動中に確認・指示。issue / PR から agent session を起動する入口にもなる |

> GitHub.com / Mobile は便利な入口。ただし、IDE と同じ mode、built-in agent、skills、tools が常にそろうわけではない。

## IDE の 3 モード

VS Code の Copilot Chat には、用途別の **built-in agents** がある。

| Mode | 裏の仕組み | 何をする？ |
| --- | --- | --- |
| Ask | Ask built-in agent | GitHub Copilot として一番最初に登場したモード。質問に対して回答を行う。<br/>新しくプロジェクトに参入したメンバーがコードベースを理解する時などにオススメ |
| Plan | Plan built-in agent | GitHub Copilot とやりとりをしながら実装可能なレベルのドキュメントを作成。<br/>Agent モードや Coding Agent を使って、作成されたドキュメントを元に実装 |
| Agent | Raw agent | 半自立型のペアプログラマーとして要求内容に対して内部分析、実装内容提案、そして提案内容に対する検証まで実施。<br/>MCP サーバーを活用して GitHub 外のシステムとのやりとりが可能 |

> 同じ Chat UI でも、Ask / Plan / Agent で「許される動き」が変わる。

## IDE Chat の操作

VS Code の Copilot Chat には、built-in skills、prompts、instructions、hooks、MCP servers などの部品が最初から見える。

| 操作 | どこを見る？ | 何ができる？ |
| --- | --- | --- |
| 部品を確認 | Chat 右上の cog icon → Agent Customizations | Agents、Skills、Instructions、Prompts、Hooks、MCP Servers、Plugins を確認 |
| agent / prompt を呼ぶ | Chat input で `/` | Ask / Plan / Agent や built-in command、prompt を起動 |
| context を追加 | `#` または Add Context | `#file`、`#codebase`、folder、symbol、terminal output、web fetch などを渡す |
| tools を確認 | Configure Tools button | Agent が使える built-in tools、MCP tools、extension tools を選ぶ |

> PLAN パートで作った Instructions / Skills / MCP / 検証方針は、ここで context や tools として Chat / Agent に渡して使う。
