---
title: "リポジトリの基本権限"
---

**リポジトリの基本権限**（`Organization settings -> Access -> Member privileges -> Base permissions`）は、Organization の全プライベート / インターナルリポジトリで、すべてのメンバーに自動付与する [[Repository Roles]] の既定の最低権限を定めます。

## 設定の選択肢とアンチパターン #03

管理者は、Organization 全体の既定値を 4 つ（`No permission`、`Read`、`Write`、`Admin`）から選びます。このドロップダウンを変更すると、**全メンバーへ即座に一斉適用**されます。

- **`Admin` を選ばない（ガバナンスのアンチパターン #03）**: 基本権限を `Admin` にすると、全開発者が Organization 全体で破壊的な操作（リポジトリの削除、アクセス権の変更、可視性の変更、シークレットの編集）を行えます。常に基本権限を低く設定し、必要な [[Enterprise & Org Teams]] の権限を個別に引き上げます。

## Organization 構成に合わせた基本権限

| 基本設定 | 対応する [[Organization Topology Models]] | コラボレーションとセキュリティのトレードオフ |
| --- | --- | --- |
| **`No permission`（`None`）** | **単一 Organization** と機密性の高い **Red Org** | 最も厳格な最小権限の境界です。メンバーはチームに許可されたリポジトリのみ閲覧できます。単一 Organization では、機密性のないリポジトリに `all-members` チーム（`Read`）を割り当て、InnerSource の停滞を防ぎます |
| **`Read`** | 標準的な InnerSource 向けの複数 Organization / **Portfolio** 部門 | 全メンバーがリポジトリを発見、クローンし、PR を作成できます。一方、直接のブランチ作成やマージはチームへの明示的な `Write` 付与で制御します |
| **`Write`** | 信頼度の高い **Green Org**（リポジトリの約 90%）と **Sandbox Org** | 初日から円滑に InnerSource のプッシュが可能です。デフォルト / リリースブランチへの直接プッシュと強制プッシュを禁止する Organization レベルの [[Enterprise & Repo Rulesets]] との併用が**必須**です |

[[Outside Collaborators]] と [[EMU Guest Collaborators]] は Organization の基本権限の対象外です（`Guest Collaborators` は `internal` リポジトリを読むこともできません）。
