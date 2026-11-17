---
title: "PR ルールセット"
---

[[GitHub]] の **PR ルールセット**は、従来の単一ブランチ保護ルールを、**Enterprise**、**Organization**、**Repository** の各範囲に重ねて組み合わせられるブランチポリシーに置き換えます。コードが `main` に入る前に [[Pull Requests|プルリクエスト]]で満たすべき要件を管理します。

## 3階層の重ね合わせ（最も厳しいルールを適用）

| 範囲 | 設定パス | 対象指定と継承 |
| --- | --- | --- |
| **Enterprise** | `Enterprise -> Policies -> Rulesets` | すべての Organization に、緩和できない基本ゲートを適用 |
| **Organization** | `Org -> Settings -> Repository -> Rulesets` | 名前の glob または**リポジトリのカスタムプロパティ**（`props.business_criticality:critical` など）で対象リポジトリを動的に指定 |
| **Repository** | `Repo -> Settings -> Rules -> Rulesets` | `Default branch`（`main`）や `release/*` にプロジェクト固有のチェックを追加 |

- **加算的な適用**：同じブランチを対象とする複数の有効なルールセットをまとめて評価し、**常に最も厳しいルールが適用されます**。リポジトリ管理者は Organization / Enterprise のルールセットを厳しくできますが、緩めることはできません。

## プルリクエストルールセットの主な制御

1. **マージ前にプルリクエストを必須にする**：[[Required Pull Request Reviews|必須のプルリクエストレビュー]]、[[CODEOWNERS]]、スレッドの解決を強制します。
2. **ステータスチェックの成功を必須にする**：[[Required Status Checks|必須ステータスチェック]]で CI とサプライチェーンジョブの成功を要求します（更新の多いブランチでは [[Merge Queue|マージキュー]]も利用）。
3. **コードスキャン / 品質 / シークレットの結果を必須にする**：[[Code Scanning PR Merge Protection|コードスキャンによる PR マージ保護]]、[[Code Quality PR Findings|Code Quality の PR 指摘]]、[[PR Dependency & Secret Gates|PR の依存関係とシークレットのゲート]]でマージをブロックします。
4. **Git の整合性に関する制限**：[[Commit Signing & Branch Restrictions|コミット署名とブランチ制限]]（`Block force pushes`、署名付きコミット、線形履歴）を強制します。
5. **AI レビューの自動化と展開**：[[Automatic Copilot Review|Copilot の自動レビュー]]を起動し、[[Ruleset Bypass & Evaluate Mode|ルールセットのバイパスと評価モード]]で新しいルールを安全にテストします。
