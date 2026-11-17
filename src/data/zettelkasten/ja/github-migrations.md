---
title: "GitHub 移行"
---

**GitHub 移行**は、組織、Git リポジトリ、共同作業の履歴を [[GitHub]] のクラウド環境（[[GitHub Enterprise Cloud]]、[[Enterprise Managed Users]]、[[GHE.com Data Residency|GHE.com のデータレジデンシー]]）へ移します。移行元は GitHub.com、[[GitHub Enterprise Server]]、Azure DevOps、Bitbucket Server、GitLab です。

## エンタープライズ移行経路の比較

| 観点 | 非 EMU ↔ EMU（`github.com` / `GHE.com`） | `GHES` → `GHE.com`（ライブ） | `GHES` → `github.com` または `GHE.com`（バッチ） |
| --- | --- | --- | --- |
| **主なツール** | [[GitHub Enterprise Importer]]（`gh gei`） | [[Enterprise Live Migrator]]（`gh elm`、GA `2026-09-01`） | [[GitHub Enterprise Importer]]（`gh gei`） |
| **CLI の実行単位と範囲** | 組織全体（`migrate-org`、最大 `5,000` リポジトリ）または単一リポジトリ（`migrate-repo`） | 単一リポジトリ（`gh elm`、同時実行は GHES ごとに最大 `10`、移行先ごとに `20`） | **リポジトリ単位のみ**（`migrate-repo`。GHES からの組織移行は不可） |
| **チームの移行** | 組織移行でチームの枠組みとリポジトリ権限を移行（メンバーは除く） | 対象外（[[IdP Group & Team Sync|IdP グループとチームの同期]]で再作成） | 対象外（移行先で再作成） |
| **作業凍結 / 停止時間** | 実行中は完全凍結（差分同期なし） | **最終切り替え時の数分間**。移行元は書き込み可能なまま | 各リポジトリの実行中に凍結 |
| **移行元の要件** | 組織オーナー / 移行担当者 + classic PAT（SSO 承認済み） | `GHES 3.17+`、サイト管理者、HTTPS、外向き通信 | `GHES 3.4.1+`、Blob ストレージ（`3.8+`）、組織オーナー |
| **Git LFS とアーカイブ上限** | Git `40 GiB` + メタデータ `40 GiB`、1ファイル `400 MiB`。LFS は対象外 | 大規模モノレポ向け。リリースアセットは `2 GB`。**LFS も移行** | `40 GiB`（`GHES 3.13+`）。LFS は対象外 |

## 適切な経路の選択

- **アカウントモデルの変換**: 個人アカウント型 GHEC と EMU 間の切り替え（または `github.com` から `GHE.com` への移行）は、組織移管では行えません（[[Org Transfer & Migration Limits|組織移管と移行の制限]]を参照）。[[EMU Type Conversion|EMU タイプの変換]]の6段階の手順に従います。
- **`GHES -> GHE.com` のハイブリッド移行計画**: 数時間の凍結が許されないミッションクリティカルなモノレポには **ELM**、通常のリポジトリには **GEI** を使い、同じ切り替え単位で併用するのが一般的です。
