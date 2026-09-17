---
title: "AI Scan for PR の有効化を API で管理"
date: "2026-09-10"
summary: "Organization とリポジトリの AI Scan 設定を REST API で取得、更新できるように。対象リポジトリへの段階的な展開を自動化できます。"
category: security
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview/"
demo:
  - "デモは要検証。まず Enterprise の許可、必要なライセンス、code scanning と AI Scan の設定を確認する。"
  - "Organization とリポジトリの設定を API で取得し、Organization 側が無効ならリポジトリ側だけでは有効化できない点を確認する。"
  - "検証環境で段階的な有効化と無効化を試す。利用量と PR 上の検出結果も確認する。"
---

### 覚えておきたいこと

- **今回の追加は設定管理 API。** `/orgs/{org}/code-scanning/ai-scan` と `/repos/{owner}/{repo}/code-scanning/ai-scan` で、有効化状態を取得、更新できます。スキャンの即時実行や結果取得の API という意味ではありません。
- **上位の設定を回避できない。** Organization 側が無効なら、リポジトリ設定で上書きしてスキャンを実行することはできません。
- **github.com 向け。** このリリースは GitHub Advanced Security の利用者向けで、GitHub Enterprise Server は対象外です。

### AI Scan 自体は何をする？

CodeQL がカバーしていない言語やフレームワークの PR を AI で調べ、検出範囲を補完します。例は PHP、Shell/Bash、Terraform、Dockerfile など。現行ドキュメントでは、プレビューの利用に **GHAS と Copilot のライセンス** が必要で、AI クレジットを消費します。

**検出結果は助言であり、マージをブロックしません。** リポジトリ全体のスキャンや Security 画面のバックログアラートではなく、PR 上に表示されます。Fork 由来の PR と Dependabot の PR も対象外です。シークレットの Merge protection とは別の機能です。

[AI Scan の条件と制約（公式ドキュメント）](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections)
