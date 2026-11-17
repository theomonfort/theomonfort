---
title: ".github-private とソース組織"
---

**.github-private とソース組織**は、**Enterprise → AI controls → Agents** で指定する単一のエンタープライズ制御用リポジトリです。エンタープライズのカスタムエージェントとサーバー管理の [[Copilot Managed Settings|Copilot の管理設定]]を、[[GHE & Copilot Licenses|GHE と Copilot のライセンス]]を持つ全ユーザーへ配布します。

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

- **上書き可能なラッパー**: `copilot/managed-settings.json` で、`OVERRIDABLE` な基準値（`model`、`autoTier`、`permissions.*`、`sandbox`、Marketplace リスト、`allowedMcpServers` / `deniedMcpServers`）を `{ "overridable": ... }` で囲みます。次に、`copilot/teams/<team>.json` にラッパーなしの置き換え値を定義し、`team-mappings.json` を通じて [[Enterprise & Org Teams|エンタープライズチームと組織チーム]]へリンクします。
- **マージと競合のルール**: チームファイルで省略されたキーは基準値を継承します。`sandbox` と Marketplace 配列は要素ごとにマージせず、**全体を置き換え**ます。ユーザーが複数のマッピング済みエンタープライズチームに属する場合は、**最も制限の緩い**値が優先されます（`LOCKED` キーは上書き不可）。

## 保護の強化と製品内の検証

- **全員に適用**: `copilot/` のポリシーと `agents/` のエージェントは、`.github-private` の読み取り権限の有無に関係なく、エンタープライズ内でライセンスを持つ**全員**に適用されます。
- **保護のガードレール**: `.github-private` は**内部**に保ち、`copilot/**` と `agents/**` を `.github/CODEOWNERS` と [[Enterprise & Repo Rulesets|エンタープライズとリポジトリのルールセット]]で保護します。クライアントへの展開前に **Copilot settings validation**（GA `2026-09-25`）で JSON スキーマやマッピングのエラーを検出します。
