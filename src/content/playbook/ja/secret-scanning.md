---
title: Secret Scanning
titleEn: Secret Scanning
summary: コミット・Issue・PR・履歴に紛れ込んだ API キーやトークンを自動検出する GitHub のシークレット検知機能。Public repo の基本機能は無料、private / internal repo は Secret Protection が必要。
icon: /theomonfort/icons/secret-scanning.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.6
category: secure
related: ['dependabot', 'github-advanced-security']
links:
  - group: 📖 公式ドキュメント
    label: About secret scanning
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning
  - group: 📖 公式ドキュメント
    label: About push protection
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection
  - group: 📖 公式ドキュメント
    label: Supported secrets (provider patterns)
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns
  - group: 📖 公式ドキュメント
    label: Defining custom patterns
    url: https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning
  - group: 📖 公式ドキュメント
    label: Enabling secret scanning for your repo
    url: https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository
  - group: 📖 公式ドキュメント
    label: Public monitoring
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring
  - group: 📖 公式ドキュメント
    label: About GitHub Advanced Security products
    url: https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security
  - group: 📰 Recent Changelog
    label: "Secret scanning public monitoring for enterprises (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises/
  - group: 📰 Recent Changelog
    label: "Secret scanning with GitHub MCP Server is now GA (2026-05-05)"
    url: https://github.blog/changelog/2026-05-05-secret-scanning-with-github-mcp-server-is-now-generally-available
  - group: 📰 Recent Changelog
    label: "Secret scanning pattern updates and product improvements (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-secret-scanning-pattern-updates-and-product-improvements
  - group: 📰 Recent Changelog
    label: "Secret scanning in AI coding agents via the GitHub MCP Server (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-secret-scanning-in-ai-coding-agents-via-the-github-mcp-server
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Secret Scanning</strong> は、リポジトリに紛れ込んだ API キー・トークン・接続文字列を自動で見つけてくれる GitHub の検知機能。
  </p>
  <p>
    既にコミット済みのものは <strong>アラート</strong>、これからコミットされるものは <strong>Push protection</strong> で git push の時点でブロック。漏洩前に止めるのが基本戦略。
  </p>
</div>

## なぜ private repo でも secret はダメなのか

**「Private」はセキュリティ対策ではなく、可視性の設定にすぎない。**private repo でも secret を平文で置いてはいけない理由は 8 つある。

| # | リスク | なぜ危険か |
| :---: | --- | --- |
| 1 | 🌐 **アクセス範囲は想像以上に広い** | 読み取り権限を持つ Org メンバー全員（数十〜数百人、協力会社や無関係なチーム含む）が閲覧可能。内部フォーク・GitHub App・OAuth App・CI/CD・ランナーが権限を継承。誰が読んだかのログは残らない |
| 2 | 🔓 **ワンクリックで public 化** | 操作ミス・リポ移管・Org 設定ミス・ポリシー変更で公開に。攻撃者の自動スキャンは新規 public repo を数秒で検知、漏洩トークンが 60 秒以内に悪用された例も |
| 3 | ♾️ **Git 履歴は永久に残る** | 後続コミットで削除しても消えない。履歴・全 clone・フォーク・バックアップ・CI キャッシュに残存。唯一の対処は **rotate** でありファイル削除ではない |
| 4 | 💻 **開発端末が弱点になる** | `git clone` のたびに未管理のラップトップへコピー。マルウェア 1 件・盗難 1 台・アカウント侵害 1 件で十分。被害はサーバー 1 台でなく開発者 N 人分 |
| 5 | 🎣 **アカウント侵害 = 即アクセス** | 開発者 1 人のフィッシングで、その人が読める全リポの全 secret が流出。secret 自体に MFA・保存時暗号化・有効期限などの追加保護はない |
| 6 | 🔗 **ソフトウェアサプライチェーン** | 現在の攻撃ベクトル第 1 位。private repo の secret から本番・レジストリ・クラウドへラテラルムーブメント。Uber・CircleCI・Codecov・Internet Archive が該当例 |
| 7 | 📋 **コンプライアンスと監査** | ISO 27001・SOC 2・PCI-DSS・ISMAP は集中管理・rotate・アクセス追跡を要求。Git に平文の secret は 3 点すべて不適合で監査指摘は確実 |
| 8 | 💸 **インシデントの実コスト** | 緊急 rotate・本番停止・フォレンジック調査・顧客通知。シークレットマネージャー設定に必要な 30 分と比べてほしい |

> 🔐 **結論** — secret はコードに置かず、環境変数 / シークレットマネージャーで管理し、**Push protection** で入口を塞ぐ。「private だから大丈夫」は成り立たない。

## Detection と Push protection の違い

Secret Scanning の中核は **検知** と **Push protection**。Validity checks は検知後の優先順位付けを支援する。

| 機能 | いつ動く？ | 何をする？ | 対象範囲 |
| --- | --- | --- | --- |
| 🔍 **Secret scanning alerts** | コミット後(履歴も含めて常時) | 検出された secret を Security タブに通知 | コミット履歴・Issue・PR・description・Wiki |
| 🛡️ **Push protection** | `git push` の直前 | secret を含む push を拒否(bypass 可) | これから入る変更のみ |
| ✅ **Validity checks** | アラート発生時 | secret がまだ有効かをプロバイダー API に問い合わせ | 一部対応プロバイダー(AWS、GitHub、Slack ほか) |

> 🔑 **Alerts** = 既に入った secret を見つける、**Push protection** = そもそも入れない。Push protection が一番効く(履歴改変が要らない)。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning" target="_blank" rel="noopener noreferrer">About secret scanning ↗</a> ・ <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection" target="_blank" rel="noopener noreferrer">About push protection ↗</a>

## 何を検出するのか

- 🏷️ **Provider patterns** — AWS、Azure、GCP、Stripe、Slack、OpenAI、GitHub PAT など 200+ パートナーが登録した正規表現で検知。誤検知が極めて少ない
- 🧪 **Generic patterns** — private key、接続文字列、HTTP basic auth などの汎用パターン。Secret Protection / GHAS が必要
- 🤖 **AI-detected secrets** — パスワードなどの非構造化 secret を AI で検出。Secret Protection / GHAS が必要
- 🛠️ **Custom patterns** — 自社独自トークン用に正規表現を定義。Public repo を含め Secret Protection / GHAS が必要
- 📚 対象 — コードだけでなく Issue・PR・コミットメッセージ・description・Wiki・gist まで

> 🤖 Generic secrets と AI detection は誤検知が増えがち。**Push protection** とセットで使うと "通そうとした瞬間に止まる" ので運用しやすい。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns" target="_blank" rel="noopener noreferrer">Supported secrets (provider patterns) ↗</a> ・ <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning" target="_blank" rel="noopener noreferrer">Defining custom patterns ↗</a>

## 漏洩した時の対応フロー

Secret が見つかった時にやることは **検知より修復が大事**。

1. 🚨 **即座に rotate / revoke** — リポジトリから消すだけでは不十分(履歴と他人の clone に残る)
2. 📣 GitHub から通知される — パートナープログラムに参加しているプロバイダーは secret を自動で無効化する場合あり(AWS、GitHub PAT など)
3. 🧹 アラートを close — `Revoked` / `False positive` / `Used in tests` のいずれかでクローズ
4. 🛡️ Push protection を ON にして再発防止

## 始め方（最短ルート）

**Step 1 — Push protection を ON(これが最優先)**

```
Repo → Settings → Code security
  ✅ Secret scanning
  ✅ Push protection
```

Public repo のリポレベル push protection は **デフォルト ON** で無料。Private / internal repo では Secret Protection / GHAS が必要。ユーザー個人の push protection も無料だが、保護対象は public repo への push のみ。

**Step 2 — 既存の漏洩をスキャン**

ON にすると過去のコミット履歴も自動でスキャンされる。Security タブにアラートが並ぶので、上から rotate していく。

**Step 3 — Custom pattern を追加**

```
Repo or Org → Settings → Code security → Secret scanning → Custom patterns
```

正規表現で自社独自のトークン形式を登録。Custom patterns は public / private を問わず Secret Protection / GHAS が必要。Dry run で誤検知をチェックしてから本番投入する。

**Step 4 — Org / Enterprise で一括 ON**

`Org → Settings → Code security` の **default settings** から、新規 / 既存リポジトリにまとめて適用できる。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository" target="_blank" rel="noopener noreferrer">Enabling secret scanning for your repo ↗</a>

## 利用条件と製品

<table class="availability-table">
<thead>
<tr>
<th>機能</th>
<th>Public repo</th>
<th>Private / internal<br>製品なし</th>
<th>Secret Protection / GHAS</th>
</tr>
</thead>
<tbody>
<tr><td>Secret scanning alerts</td><td>✅ 無料</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Push protection（リポ / 組織）</td><td>✅ 無料</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Validity checks</td><td>❌</td><td>❌</td><td>✅ 対応 provider</td></tr>
<tr><td>Generic patterns</td><td>❌</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Custom patterns</td><td>❌</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>AI-detected secrets</td><td>❌</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Public monitoring</td><td>❌</td><td>❌</td><td>✅ GHEC Enterprise</td></tr>
</tbody>
</table>

> 🆓 **ユーザー push protection** は全プランで無料・デフォルト ON だが、public repo への push のみが対象。**Partner alerts** も public repo / public npm package の漏洩だけを provider に通知する。
>
> 💰 Generic / Custom / AI detection、Validity checks、private / internal repo の保護には **Secret Protection または従来の GHAS** が必要。**Public monitoring** は GHEC Enterprise 向けの enterprise-wide 機能。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">Advanced Security products ↗</a> / <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Public monitoring ↗</a>

## Public monitoring（NEW）

GitHub が **github.com の公開領域全体をリアルタイム監視** し、漏洩した secret を「あなたのエンタープライズ」に帰属させる仕組み。自分の repo の外 — 個人フォーク・OSS・公開 issue / PR / discussion に貼られたトークン — で漏れた secret も検出する。

- 🌐 対象は **公開コンテンツのみ**（git・PR コメント・issue・discussion）。**private repo は絶対にスキャンしない**
- ⚡ リアルタイム監視。プラットフォーム metadata を使って正確に帰属
- 🧩 追加設定不要（out of the box）。有効化すると直近の既存 finding と今後の漏洩を表示

**帰属（attribution）の 2 方式:**

| 方式 | 判定 | 捕捉できる漏洩 |
| --- | --- | --- |
| 👤 メンバー帰属 | committer の GitHub アカウントがエンタープライズのメンバー | 管理アカウント・既知メンバーからの漏洩 |
| 🌐 検証済みドメイン照合 | committer の email が検証済みドメイン | 仕事用 email を使う個人アカウント（未リンク・email 非公開でも） |

> ⚙️ 有効化: Enterprise owner / security manager が **Security タブ** から。GHEC の Secret Protection / Advanced Security 対象（Public preview・追加費用なし、data residency は近日）。<a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Public monitoring ↗</a>

## Secret Risk Assessment(無料の棚卸しスキャン)

**Secret Risk Assessment** は、Org 内のすべてのリポジトリ(public・private・internal・archived)を 1 回だけスキャンして「どこにどんな secret が眠っているか」を可視化する機能。**GHAS / Secret Protection 不要・完全無料**(2025〜)で、Team・Enterprise の全 Org が使える。購入前の棚卸しや経営報告にちょうどいい。

- 🔎 対象 — Org に属するすべてのリポ(visibility 問わず)。アーカイブ済みも含む
- 📊 出力 — secret の種類・件数・どの repo に何件あるか、を集計レポートで表示(個別 secret の中身は出さない)
- 🕒 頻度 — **point-in-time の一回スキャン**。継続的な監視ではない(継続したいなら Secret Protection を購入)
- 🔐 プライバシー — 検出された secret の値は GitHub に保存されない。統計データのみが Org 管理者に見える
- 🚀 動かし方 — `Org → Settings → Code security → Secret risk assessment → Run assessment`

> 📊 「とりあえず社内に何件 secret が漏れてるか知りたい」「予算稟議のために数字が欲しい」というケースで真っ先に使う。結果を見て **Secret Protection 導入の是非** を判断すれば良い。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
