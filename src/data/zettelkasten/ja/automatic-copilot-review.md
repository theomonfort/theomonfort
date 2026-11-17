---
title: "Copilot レビューの自動実行"
---

**Copilot レビューの自動実行**は、[[Copilot Code Review]] を [[Pull Requests]] で自動的に開始します。リポジトリ、Organization、Enterprise 単位の [[PR Rulesets]] を使用し、作成者が手動で Copilot を割り当てる必要はありません。

## 3 つのスコープでのルールセット設定

| 管理スコープ | 設定パス | 対象の指定方法 |
| --- | --- | --- |
| **リポジトリ** | `Repo -> Settings -> Code and automation -> Rules -> Rulesets -> New branch ruleset` | デフォルトブランチ（`main`）またはブランチ名パターン（`release/*`） |
| **Organization** | `Org -> Settings -> Repository -> Rulesets -> New branch ruleset` | 全リポジトリ、名前の glob（`*-service`）、またはリポジトリのカスタムプロパティ |
| **Enterprise** | `Enterprise -> Policies -> Rulesets` | Enterprise 内の全 Organization に、基本となるレビュー範囲を適用 |

## `Automatically request Copilot code review` の追加オプション

- **PR 作成時のレビュー**: 条件に合う PR が作成されたとき、またはドラフトから通常の PR に変更されたときに、即座に Copilot へレビューを依頼します。
- **新しいプッシュのレビュー**: 新しくプッシュされたコミットごとに差分ベースの [[Copilot Code Review]] を再実行し、レビュー修正中に生じたリグレッションを自動検出します（対応済みのスレッドは自動解決されます）。
- **ドラフト PR のレビュー**: [[Draft Pull Requests]] にも自動レビューを適用し、[[CODEOWNERS]] に依頼する前に AI のフィードバックを得られます。
- **個人向け Pro / Pro+ の設定**: Copilot Pro または Pro+ の開発者は、自分が PR を作成するリポジトリ全体で個人の自動レビューを有効にできます。[[Review Effort Levels]] と [[Review Runner & Quota Governance]] によって管理されます。
