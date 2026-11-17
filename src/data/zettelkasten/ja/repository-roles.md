---
title: "リポジトリのロール"
---

**リポジトリのロール**は、[[Enterprise Governance|Enterprise のガバナンス]]のもとでチームやコラボレーターが個々のリポジトリでできることを管理します。Organization の [[Base Repository Permissions|基本リポジトリ権限]]に権限を累積的に追加します。

## 権限が累積する5つの組み込みリポジトリロール

各階層は、表内で自分より上にある階層の全権限を継承します。

| 階層 | ロール | 下位の権限に追加される機能 |
| --- | --- | --- |
| **1** | **Read** | コードの閲覧、clone / pull、検索、および Issue、ディスカッション、フォークからのプルリクエストの作成 |
| **2** | **Triage** | **コードのプッシュ権限なし**で Issue とプルリクエストを管理（ラベル付与、ユーザー割り当て、レビュー依頼、クローズ / 再オープン） |
| **3** | **Write** | ブランチのプッシュ、プルリクエストの作成 / マージ（[[Enterprise & Repo Rulesets|Enterprise とリポジトリのルールセット]]に従う）、GitHub Actions ワークフローの起動 |
| **4** | **Maintain** | 破壊的操作やアクセス権付与を行わず、非破壊的なリポジトリ設定を構成（ラベル、環境、Pages の管理、ルールセットの閲覧） |
| **5** | **Admin** | リポジトリの完全な制御：チーム / [[Outside Collaborators|外部コラボレーター]]のアクセス、シークレット、Webhook、公開範囲（[[Enterprise Policies|Enterprise ポリシー]]で許可されている場合）、リポジトリ削除を管理 |

## カスタムリポジトリロール（`GHEC`）

`Write` では狭すぎ、`Admin` では危険すぎる場合、[[GitHub Enterprise Cloud]] の Organization オーナーは**カスタムリポジトリロール**を定義できます（Organization の上限まで）。基本ロール（`Read`、`Triage`、`Write`、`Maintain`）を選び、Webhook の管理、Issue コメントの削除、シークレットスキャンのプッシュ保護のバイパスなど、細かな権限を切り替えます（[[GitHub Well-Architected Guardrails|GitHub Well-Architected のガードレール]]のガードレール #17 を参照）。
