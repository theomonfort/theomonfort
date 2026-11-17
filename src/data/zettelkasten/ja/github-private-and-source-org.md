---
title: ".github-private とソース組織"
---

**.github-private とソース組織**は、[[GitHub]] の指定されたエンタープライズ制御用リポジトリです。**Enterprise → AI controls → Agents** で設定し、エンタープライズの [[Custom Agent Scopes|カスタムエージェントのスコープ]]（[[Custom Agents|カスタムエージェント]]）と、サーバー管理の [[Copilot Managed Settings|Copilot の管理設定]]を、[[GHE & Copilot Licenses|GHE と Copilot のライセンス]]を持つ全ユーザーへ配布します。

## 固定されたリポジトリ構成

管理者は**ソース組織**にする組織を選びますが、`.github-private` というリポジトリ名と内部のディレクトリパスは固定です。

```text
.github-private/
├── agents/                    # published enterprise-wide custom agents
├── .github/agents/            # staging area to test agents before publishing
└── copilot/
    ├── managed-settings.json  # enterprise baseline settings
    ├── team-mappings.json     # maps override files to enterprise teams
    └── teams/*.json           # per-team overrides on OVERRIDABLE keys
```

## チーム単位のカスタマイズ（`2026-08-03` GA）

- **上書き可能なラッパー**: `copilot/managed-settings.json` で、`OVERRIDABLE` な基準値（`model`、`autoTier`、`permissions.*`、`sandbox`、Marketplace リスト、`allowedMcpServers` / `deniedMcpServers`）を `{ "overridable": ... }` で囲みます。次に、`copilot/teams/<team>.json` に置き換え値を定義し、`team-mappings.json` を通じて [[Enterprise & Org Teams|エンタープライズチームと組織チーム]]へリンクします。
- **マージと競合のルール**: 省略されたキーは基準値を継承し、`sandbox` と Marketplace 配列は**全体を置き換え**ます。ユーザーが複数のマッピング済みチームに属する場合は、**最も制限の緩い**値が優先されます（`LOCKED` キーは上書き不可）。

## 保護の強化と製品内の検証

- **全員に適用**: `copilot/` のポリシーと `agents/` のエージェントは、リポジトリの読み取り権限に関係なく、エンタープライズ内でライセンスを持つ**全員**に適用されます。
- **保護のガードレール**: `.github-private` は**内部**に保ち、`copilot/**` と `agents/**` を [[CODEOWNERS]] と [[Enterprise & Repo Rulesets|エンタープライズとリポジトリのルールセット]]で保護します（範囲はソース組織に厳密に限定）。**Copilot settings validation**（GA `2026-09-25`）でスキーマやマッピングのエラーを確認します。
