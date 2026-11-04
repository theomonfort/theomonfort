---
title: "どこで作業しても、同じ Copilot クラウドセッション"
date: "2026-10-28"
summary: "スマートフォンで始め、Web で続け、エディターや CLI で仕上げる。クライアント間でつながるクラウドセッションと再開可能なサンドボックスが、有料 Copilot プランで GA になりました。"
category: copilot
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience"
---

### 同じセッションを引き継ぐ

- **クライアント間の継続**：github.com、Mobile、CLI、Copilot app、VS Code でクラウドセッションを共有。Slack や Teams で始めた作業も引き継げます。
- **再開可能なサンドボックス**：GitHub 管理の分離環境が終了時にスナップショットを保存。従来の合計実行時間 1 時間という制限なしに、後から再開できます。
- **ツールとコンテキスト**：権限や Enterprise ポリシーに従って Bash、GitHub CLI、スキル、スラッシュコマンド、コネクタ、カスタム MCP サーバーを使えます。

### コンピュートとアクセス

Actions に含まれるコンピュート枠が**金額ベースの共有枠**になります。標準のホステッドランナーとクラウドサンドボックスに加え、Team と Enterprise Cloud では larger hosted runners も対象です。各製品の単価はそれぞれ適用されます。発表ではサンドボックスの課金開始を **2026 年 11 月**としています。

新しい体験は **Copilot in the cloud** ポリシーの下、有料 Copilot プランに順次提供。Copilot Free は従来の Web と Mobile のチャットを継続できます。

**既存設定の注意点**：Actions ベースのセルフホステッドランナーや `copilot-setup-steps.yml` を使う場合は、引き続き Actions 環境が必要です。クラウドサンドボックスに自動で置き換わるわけではありません。
