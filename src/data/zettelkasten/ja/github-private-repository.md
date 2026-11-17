---
title: ".github-private リポジトリ"
---

**.github-private リポジトリ**は、GitHub の組織 / エンタープライズの制御用に指定するリポジトリです（`Enterprise -> AI controls -> Agents` で選択）。エンタープライズの [[Custom Agent Scopes|カスタムエージェントのスコープ]]と、サーバー管理の [[Copilot Managed Settings|Copilot の管理設定]]を配布します。

## 固定のディレクトリ構成

```text
.github-private/
├── agents/                    # published enterprise-wide custom agents
├── .github/agents/            # staging area to test agents before publishing
└── copilot/
    ├── managed-settings.json  # enterprise baseline settings
    ├── team-mappings.json     # maps override files to enterprise teams
    └── teams/*.json           # per-team overrides on OVERRIDABLE keys
```

## チーム別の上書きと運用ガードレール

- **チーム単位のカスタマイズ**: 基準となる既定値を `{ "overridable": ... }` で囲んで `managed-settings.json` に記述し、`teams/*.json` にチームの値を設定します。`sandbox` と Marketplace 配列は全体を置き換え、複数チームに属するユーザーでは**最も制限の緩い**値が優先されます。
- **全員への適用と保護の強化**: 設定と `/agents/` は、リポジトリへのアクセスに関係なく、プランの全メンバーに適用されます。`.github-private` は**内部**に保ち、`copilot/**` を `CODEOWNERS` で保護します。`/agents/` のルールセットはソース組織に厳密に限定し、**Copilot settings validation**（`2026-09-25`）で設定エラーを確認します。
