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

## IDE の 3 モード

VS Code の Copilot Chat には、用途別の **built-in agents** がある。

| Mode | いつ使う？ | 何をする？ |
| --- | --- | --- |
| Ask | 理解・調査・相談 | コードベースや技術概念に答える。基本はファイル変更しない |
| Plan | 実装前の設計 | 要件を分解し、実装ステップを作る。納得してから実装に渡す |
| Agent | 実装 | ファイル編集、terminal command、tool call、検証まで進める |

> 同じ Chat UI でも、Ask / Plan / Agent で「許される動き」が変わる。

## PLAN の harness が効く

Copilot Chat は単体で強いのではなく、**PLAN パートで作った harness を実行時に使う場所**。

たとえば、Instructions、Skills、MCP、権限、検証方針を先に整えておくと、Chat の回答や Agent の実装はそのレールに乗る。

> つまり、Plan で設計した「AI の足場」を、Chat で呼び出して使う。

## 3 つの Chat

「Copilot Chat」と言っても、どこで開くかで体験は少し違う。

| Chat | 使う場所 | 役割 |
| --- | --- | --- |
| IDE Chat | VS Code、Visual Studio、JetBrains など | Ask / Plan / Agent で、ローカル workspace と tools を使いながら会話 |
| GitHub.com Chat | ブラウザ上の GitHub | issue、PR、repo context から質問・依頼。Cloud Agent の入口にもなる |
| Mobile Chat | GitHub Mobile | 移動中に確認・指示。issue / PR から agent session を起動する入口にもなる |

> GitHub.com / Mobile は便利な入口。ただし、IDE と同じ mode、built-in agent、skills、tools が常にそろうわけではない。
