---
title: "PR の依存関係とシークレットのゲート"
---

**PR の依存関係とシークレットのゲート**は、[[Pull Requests|プルリクエスト]]内の脆弱なパッケージ、禁止されたオープンソースライセンス、漏えいした認証情報が `main` にマージされるのを防ぎます。

## サプライチェーンと認証情報を守る3つのブロック機能

| PR ゲート | 仕組みとルールセットとの連携 | 主な機能 |
| --- | --- | --- |
| **Dependency Review Action**（`actions/dependency-review-action`） | 任意の対象ブランチで [[Required Status Checks|必須ステータスチェック]]を通じて強制する GitHub Action | マニフェストとロックファイルの変更（直接および推移的依存関係）を GitHub Advisory Database と照合（`fail-on-severity: high`）し、脆弱性とライセンスの概要をインラインで投稿（パブリックリポジトリは無料、プライベートリポジトリは Code Security） |
| **オープンソースライセンスのコンプライアンス** *（`GA 2026-10-16`）* | ブランチルールセットの `Require license compliance results before merging`（GHEC + Code Security で `Evaluate` / `Active`） | エンタープライズ共通のライセンス許可 / 拒否ポリシーを適用し、PR 内の例外申請を **Enterprise Open-Source License Manager** に送付 |
| **シークレットスキャンのマージゲート** *（`2026-09-09` プレビュー）* + **プッシュ保護** | 200種類以上のパートナートークン形式をプッシュ時にブロック + [[PR Rulesets|PR ルールセット]]の `Require secret scanning alerts are resolved` | プッシュ保護が `git push` 時に既知のプロバイダートークンを阻止（**委任されたバイパス**のレビューに対応）。PR ルールセットは PR で持ち込まれた未解決のシークレットアラートがあればマージをブロックし、[[Code Scanning PR Merge Protection|コードスキャンによる PR マージ保護]]とともに汎用キー（`rsa_private_key`、`postgres_connection_string`）も検出 |
