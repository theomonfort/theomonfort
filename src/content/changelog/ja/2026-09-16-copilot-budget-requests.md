---
title: "Copilot の予算増額リクエストが一般提供"
date: "2026-09-16"
summary: "Copilot の AI credits を使い切ったメンバーが予算増額を申請可能に。管理者は設定画面から承認、金額の調整、却下ができます。"
category: administration
status: "一般提供"
source: "https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available/"
---

### 覚えておきたいこと

- **対象**：従量課金の Copilot Business / Enterprise。**Enterprise Managed Users（EMU）は対象外です。**
- **承認者**：Organization owner、Enterprise owner、billing manager。申請先は予算の支払元アカウントで、常に Enterprise に届くわけではありません。

### 設定方法

1. **申請を確認**：支払元の Organization または Enterprise で `Settings → Requests from members` を開きます。
2. **承認または金額を調整**：**変更後の予算総額**を入力し、対象の申請を選んで `Approve and increase` をクリック。入力額は従来の上限を置き換える金額で、追加分ではありません。変更は即時反映されます。却下も可能です。
3. **予算自体の設定は別画面**：`Billing & Licensing → Budgets and alerts` を開きます。ユーザー単位の予算を作る場合は `New budget → Bundled AI credits budget` を選び、`Budget scope` を `Users` にします。

**支出の制御**：ユーザー単位の予算は上限に達すると必ず利用を停止。それ以外の対応する予算では、`Stop usage when budget limit is reached` をオンにすると利用を停止し、オフでは停止しません。ユーザーの予算を増やしても、他の予算上限による停止は解除されません。

[増額リクエストの管理](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-budget-requests) / [予算の設定](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets)
