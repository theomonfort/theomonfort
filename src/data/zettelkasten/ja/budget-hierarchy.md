---
title: "予算の階層"
---

**予算の階層**は、[[Budgets & Spending Limits]] が [[Usage-Based Billing]] 全体の消費量を評価する厳密な実行時の順序を定めます。基本原則は 1 つです。**ハード予算は合算されず、適用されるいずれかの予算が `$0`（またはハード上限の `100%`）に達すると、即座に利用が停止します**。

## Copilot とバンドル AI クレジットの 2 段階評価

| 実行時の段階 | Enterprise プールの状態 | リクエスト許可前に確認する予算 |
| --- | --- | --- |
| **段階 1: 含まれるプールを利用中** | [[Shared AI Credit Pool]] のクレジットが `> 0` | **[[User-Level Budgets]]（`ULB`）**（加えて、ブロック設定がある [[Cost Centers]] の AI クレジットプール上限）。Organization と Enterprise の超過利用予算は**まだ確認しません** |
| **段階 2: プールを使い切った後（超過利用）** | 共有 AI クレジットプールが `= 0` | **4 つのスコープすべてを並列確認**: `User-Level Budget` AND `Organization Budget` AND `Cost Center Budget` AND `Enterprise Budget`。**いずれか**が `$0` に達すれば、リクエストをブロックします |

## 従量課金コンピューティングのスコープ階層（`Actions`、`Codespaces`、`Packages`）

リポジトリを基点とするコンピューティング製品では、GitHub はリソースの連鎖（`Enterprise -> Organization -> Repository -> Cost Center`）に沿って、有効なハード予算をすべて確認します。製品全体と個別 SKU の両方が対象です。**残額が最も少ない上限が優先**されるため、リポジトリ予算に `$50` 残っていても、親 Organization またはコストセンターが `$0` に達すると停止します。

## Enterprise の超過利用予算からのコストセンター除外

既定では、[[Cost Centers]] の超過利用額は **Enterprise レベルの予算**に集約され、その制限を受けます。

- **明示的なコストセンター除外ポリシー**: 管理者は、特定のコストセンターを **Enterprise 予算から除外**できます。
- **運用上の効果**: 除外された部門は、Enterprise 全体の超過利用予算が `$0` に達しても、専用のコストセンター超過利用予算で稼働を継続できます（個別の [[User-Level Budgets]] は引き続き適用されます）。
