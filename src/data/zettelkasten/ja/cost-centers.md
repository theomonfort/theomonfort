---
title: "コストセンター"
---

**コストセンター**は、Organization の追加やリポジトリアクセスの変更なしで、[[GitHub]] の従量課金支出と従量課金の [[GHE & Copilot Licenses]] を、部門、事業単位、取り組みごとにまとめます。必要に応じて、部門ごとの **Azure サブスクリプション**へ直接請求できます。

## 割り当て可能なリソースと計上する支出

前払いのボリュームサブスクリプションは対象外です（[[Enterprise Procurement Channels]] を参照）。リソースの再割り当ては**将来の利用のみに影響**し、過去の料金は変更しません。

| 割り当てるリソース | コストセンターへ計上する従量課金コスト |
| --- | --- |
| **ユーザー** | 従量課金の GHE / GHAS / Copilot ライセンス料金 + Copilot AI クレジット利用 |
| **Enterprise チーム**（`2026-06-25` に GA） | ユーザーと同じ。[[Enterprise & Org Teams]] のチームメンバー変更に自動追従 |
| **リポジトリ** | GitHub Actions、Codespaces、Packages、Git LFS（**誰が実行を開始したかに関係なく**、リポジトリのコストセンターへ請求） |
| **Organization** | 全リポジトリのコンピューティング + Organization に請求される GHE / GHAS / Copilot シート + Organization が付与した Copilot シートの AI 利用 |

共有 Organization では、リポジトリを部門の CI コストセンター（`Engineering CI`）に、[[Enterprise & Org Teams]] を AI コストセンター（`Engineering AI`）に割り当て、Organization 自体は未割り当てにするのがベストプラクティスです。

## 単一割り当てルールと 4 段階の計上優先順位

各リソースを**直接割り当てられるコストセンターは 1 つだけ**です（2 つ目に追加すると移動します）。複数のチームや Organization に所属しても、1 件の料金は分割されません。ライセンスと Copilot AI のコストでは、**最初に一致する優先順位**が適用されます。

| 優先順位 | 適用されるコストセンター | 同順位の場合のルール |
| --- | --- | --- |
| **1** | ユーザーに**直接割り当てた**コストセンター | ユーザーへの直接割り当ては、常にチームと Organization より優先 |
| **2** | **Enterprise チーム**のコストセンター | 複数の割り当て済み Enterprise チームに所属する場合、**最初に作成されたチーム**が優先 |
| **3** | **請求先 Organization** のコストセンター | 複数 Organization の場合、GHE / GHAS は**最も古い Organization**、Copilot は**選択された 1 つのライセンス付与 Organization** |
| **4** | 未割り当て時のフォールバック（`Enterprise Only`） | `Enterprise Only` として詳細 CSV 利用レポート（`username` + `sku` + `cost_center_name`）に表示 |

コストセンターは、[[Budgets & Spending Limits]] の超過利用上限、[[Shared AI Credit Pool]] のプール消費上限、[[Budget Hierarchy]] の任意の Enterprise 超過利用予算の適用除外と組み合わせます。
