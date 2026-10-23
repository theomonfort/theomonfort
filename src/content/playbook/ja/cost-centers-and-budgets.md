---
title: コストセンターと予算
titleEn: Cost centers & budgets
summary: コストセンターで従量課金の費用をまとめ、予算、通知、利用上限、付属 AI クレジットのプールを管理する。
icon: 💰
color: magenta
order: 30.9
category: administration
related: ['governance', 'license-management', 'usage-based-billing']
links:
  - group: 📖 公式ドキュメント
    label: Cost centers
    url: https://docs.github.com/en/billing/concepts/cost-centers
  - group: 📖 公式ドキュメント
    label: Using cost centers
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/products/use-cost-centers
  - group: 📖 公式ドキュメント
    label: Cost center allocation
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/reference/cost-center-allocation
  - group: 📖 公式ドキュメント
    label: Budgets and alerts
    url: https://docs.github.com/en/billing/concepts/budgets-and-alerts
  - group: 📖 公式ドキュメント
    label: Setting up budgets
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets
  - group: 📖 公式ドキュメント
    label: Copilot budgets and included usage controls
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets
  - group: 📖 公式ドキュメント
    label: Controlling and tracking costs at scale
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/tutorials/control-costs-at-scale
  - group: 📰 発表
    label: "Cost centers now support enterprise teams (2026-06-25)"
    url: https://github.blog/changelog/2026-06-25-assign-enterprise-teams-to-cost-centers/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>コストセンター</strong>は従量課金の利用と費用をまとめる単位。必要に応じて、特定の Azure サブスクリプションに請求できる。
  </p>
  <p>
    <strong>予算</strong>は支出を監視して通知する仕組み。対応する製品と設定では、追加の利用を停止できる。
  </p>
</div>

## コストセンターに何を割り当てる？ <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/reference/cost-center-allocation" target="_blank" rel="noopener noreferrer">📖 Docs</a>

org を増やしたりアクセス権を変えたりせず、部門やプロジェクト別に支出をまとめる。

<div class="tbl-compact">

| 追加するリソース | コストセンターに計上される費用 |
| --- | --- |
| 👤 ユーザー | GHE/GHAS/Copilot ライセンス + AI 利用 |
| 👥 Enterprise team | ユーザーと同じ。メンバーの加入と脱退に合わせて自動更新 |
| 📦 リポジトリ | Actions、Codespaces、Packages、Git LFS |
| 🏢 Organization | repo の利用 + org に請求される GHE/GHAS/Copilot ライセンス + org が付与した Copilot ライセンスによる AI 利用 |

</div>

ライセンスと AI の費用は **ユーザー → Enterprise team → Org** の順（最初に該当するコストセンター）。<br />
**GHE/GHAS ライセンス**の org 単位の配賦では、**最も古い org** を使う。

1 つのセンターに複数種類のリソースを混在させ、複数 org から集められる。**Org team は割り当て不可**。Enterprise team を使う。

**Enterprise の課金機能**で、従量課金ライセンスを含む従量料金が対象。前払いのボリューム契約やサブスクリプション課金は対象外。Azure 課金なら別の Azure サブスクリプションも指定できる。

## 複数のコストセンターに所属できる？ <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/reference/cost-center-allocation" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**直接割り当ては 1 リソースにつき 1 つ。** 別のセンターに追加すると**移動**する。複数の team / org に所属しても、同じ料金を分割配賦しない。

**ユーザー単位のライセンスと Copilot の費用**は、最初に該当する配賦先が優先される。

<div class="tbl-compact">

| 優先順 | 配賦先 |
| --- | --- |
| 1 | ユーザーを**直接割り当てた**コストセンター |
| 2 | Enterprise team のセンター。複数なら**最も早く作成された team** |
| 3 | **ライセンスが課金される org** のセンター。所属する全 org ではない |
| 4 | Enterprise。表示は **Enterprise Only** |

</div>

**例：** Alice はセンター A に直接割り当てられ、B の team にも所属。Copilot の費用は **A**。B に割り当てた repo で実行する Actions の費用は **B**。Actions は人ではなく repo にひも付く。

再割り当ては**今後の利用**に反映され、過去の料金は変更しない。

## どんな予算を設定できる？ <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**何を計測するか**と**誰の利用を集計するか**を選ぶ。予算は月次で、支出金額は USD。以下は **2026-10-20 時点**。

<div class="det-widget det-compact">
<p class="det-hint">▸ 予算の種類を選択</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📦</span><span class="det-name">製品 / SKU</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📦</span><span class="det-title">Product / SKU</span></p>
<p class="det-why"><b>Product-level：</b>Actions や Codespaces など製品全体。<br /><b>SKU-level：</b>Codespaces storage や Code Security AI Credits など 1 つの課金項目。<br /><b>従量課金製品の範囲：</b>enterprise、org、repo、コストセンター。Org owner は自分の org と配下の repo に設定できる。</p>
</div>
</details>
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI クレジット全体</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">Bundled AI credits</span></p>
<p class="det-why"><b>有料利用を 1 つの予算で管理：</b>Copilot、cloud agent、Spark、Advanced Security の AI SKU。<br /><b>範囲：</b>enterprise、org、コストセンター、Users。<br />Copilot の支出予算は<b>追加利用</b>を制御する。付属プールやライセンス料金は対象外。有料利用ポリシーの許可も必要。</p>
</div>
</details>
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">👤</span><span class="det-name">Copilot ユーザー単位</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">👤</span><span class="det-title">User-level budget</span></p>
<p class="det-why"><b>Bundled AI credits → Users：</b>1 人の<b>付属分 + 有料分</b>の消費を制御。<br /><b>個別 → センターのユーザー別既定値 → 全員共通</b>の順に優先。<br />センターの既定値は<b>1 人あたり</b>で、共有枠ではない。個別設定には有効期限を設け、失効後は既定値に戻せる。</p>
</div>
</details>
<details class="det-pick" name="gov-budget-options">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎫</span><span class="det-name">従量課金ライセンス</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🎫</span><span class="det-title">License budgets</span></p>
<p class="det-why">従量課金ライセンスの支出を追跡し、対応する項目ではライセンス数をしきい値にできる。<b>従量課金 GHE ライセンスの範囲：</b>enterprise またはコストセンター。<br /><b>前払いボリュームライセンス</b>は予算の対象外。ライセンス予算と AI クレジット予算は別物で、多くのライセンス予算は<b>通知のみ、利用は停止しない</b>。</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A BUDGET ▸</p></div>
</div>
</div>

## 通知だけ？ それとも利用停止？ <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/budgets-and-alerts" target="_blank" rel="noopener noreferrer">📖 Docs</a>

予算アラートは **75 / 90 / 100%** で通知（**2026-10-20 時点**）。Owner、Billing manager、追加した受信者に届く。

<div class="tbl-compact">

| 制御 | 上限到達時 |
| --- | --- |
| 通知のみ | 利用も課金も**継続** |
| 従量利用（ハード） | **Stop usage when budget limit is reached** を有効化 |
| Copilot ユーザー別 | **常に停止**。$0 ならプール残量があっても利用不可 |
| Copilot / GHE ライセンス | 通知のみ。ライセンス購入上限には**ならない** |
| GHAS ライセンス（ハード） | Code Security / Secret Protection：**新しい repo への有効化**を阻止。既存の保護は維持 |

</div>

**ハード予算は足し算にならない。** 適用される上限を 1 つでも使い切れば停止しうる。Actions / AI 全体の上限は CI やセキュリティの処理も止める可能性がある。

> ⚠️ 新しい予算は**作成後の利用だけ**を集計。ユーザー別アラートは常に利用できるわけではないため、センターや enterprise でも監視する。

## 部門での設定：費用、予算、プール <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/billing/tutorials/control-costs-at-scale" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**金額は例であり、推奨値ではない。** 開発部門の Copilot と CI を分けて管理する。Enterprise owner または Billing manager が **Billing and licensing** から設定する。

<div class="det-widget det-compact">
<p class="det-hint">▸ 設定の流れを選択</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-name">1. 費用を配賦</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-title">Allocate costs</span></p>
<p class="det-why"><b>Cost centers → New cost center：</b>Enterprise team を入れた <b>Engineering AI</b> と、repo を入れた <b>Engineering CI</b> を作成。<br />共有 org では repo ごとに担当部門へ割り当て、org 自体は未割り当てにする。team ごとに共有予算を分けたいならセンターも分ける。同じセンター内の team 別には設定できない。</p>
</div>
</details>
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💰</span><span class="det-name">2. 予算を設定</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💰</span><span class="det-title">Set monthly budgets</span></p>
<p class="det-why"><b>Budgets and alerts → New budget：</b>Engineering AI に <b>Bundled AI $200</b> の有料利用予算、Engineering CI に <b>Actions $300</b> の予算を設定。停止か通知のみかを意図して選ぶ。<br />Engineering AI に <b>1 人あたり $20</b> の Copilot 予算も設定。こちらは<b>付属分 + 有料分</b>を集計する。ライセンス料金は別。</p>
</div>
</details>
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏊</span><span class="det-name">3. 付属プール</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🏊</span><span class="det-title">Included AI credits</span></p>
<p class="det-why">Engineering AI の編集 → <b>AI credit pool</b>。GitHub がメンバーの Copilot ライセンスから上限を計算し、<b>金額は入力しない</b>。<br />上限で<b>停止</b>するか、ポリシーで許可された<b>有料利用</b>に進むかを選ぶ。$200 の予算とは別の制御。どちらも使い切ったユーザー別上限を上書きしない。</p>
</div>
</details>
<details class="det-pick" name="gov-budget-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔎</span><span class="det-name">4. 配賦を確認</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔎</span><span class="det-title">Verify attribution</span></p>
<p class="det-why"><b>Usage</b> をセンター別に集計し、詳細レポートの <code>cost_center_name</code> と <b>Enterprise Only</b> を確認。<br />既定ではセンターの利用も enterprise 予算に含まれる。明示的な <b>cost center exclusion</b> で有料利用を独立させても、ユーザー別上限は残る。予算の消費量は課金サイクルごとにリセット。</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A STEP ▸</p></div>
</div>
</div>
