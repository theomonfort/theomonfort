---
title: "予算と支出上限"
---

**予算と支出上限**は、[[GitHub]] の従量課金サービス全体で月間の米ドル消費額を監視し、設定された範囲で支出を強制停止します。これにより、**ガバナンスのアンチパターン #05**（請求書払いのアカウントを、既定の従量課金支出が無制限のまま放置すること）を防ぎます。

## 4 種類の予算（`Billing and licensing -> Budgets and alerts`）

| 予算の種類 | 計測対象 | 対応する対象スコープ |
| --- | --- | --- |
| **1. 製品 / SKU** | 製品全体（`Actions`、`Codespaces`）または単一 SKU（`Codespaces storage`、`Code Security AI Credits`） | Enterprise、Organization、リポジトリ、[[Cost Centers]]（Organization Owner は自分の Organization / リポジトリに予算を設定可能） |
| **2. バンドル AI クレジット** | [[Usage-Based Billing]] に基づく Copilot、cloud agent、Spark、GHAS AI SKU 全体の有料**超過利用** | Enterprise、Organization、コストセンター、ユーザー（有料利用ポリシーの有効化が必要。ライセンス料金と含まれるプールは対象外） |
| **3. Copilot ユーザー単位** | 1 人あたりの **含まれるプール + 有料超過利用**の合計 AI クレジット | 全員共通、コストセンター内のユーザー単位、個別（[[User-Level Budgets]] を参照） |
| **4. 従量課金ライセンス** | 従量課金シートの支出 / 数のしきい値（前払いのボリュームライセンスでは利用不可） | Enterprise またはコストセンター（従量課金 GHE シートが対象。[[GHE & Copilot Licenses]] を参照） |

## `100%` 到達時のアラートのみとハード停止の動作

| 制御対象 | 上限到達時の適用動作 |
| --- | --- |
| **アラートのみの予算** | [[Budget Threshold Alerts]] を送信。利用と課金は中断せず**継続** |
| **従量課金の利用（`Stop usage when budget limit is reached`）** | **ハード停止**: 追加の Actions ジョブ、Codespaces、AI の超過利用をブロック（広範な上限で重要な CI / セキュリティワークフローを止めないよう慎重に評価） |
| **Copilot の [[User-Level Budgets]]** | **常にハード上限**: `$0` または上限の消費で、そのユーザーを即座にブロック。[[Shared AI Credit Pool]] に残高があっても適用 |
| **Copilot と GHE の従量課金ライセンス** | **アラートのみ**: 新しいシート割り当てをブロックせず管理者へ通知 |
| **GHAS の従量課金ライセンス（ハード）** | **新しいリポジトリ**での `Code Security` / `Secret Protection` の有効化をブロックし、既存リポジトリの保護は維持 |

## 合算されない上限と初回サイクルのルール

ハード予算は**合算されません**。実行時には [[Budget Hierarchy]] に従って評価され、いずれか 1 つの上限を使い切ると利用が停止します。新規予算は、最初の部分的な請求月では**作成後に発生した利用のみ**を計上し、その後は各請求サイクルの初日にリセットされます。
