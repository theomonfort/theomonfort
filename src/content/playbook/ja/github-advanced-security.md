---
title: GitHub Advanced Security
titleEn: GHAS
summary: GitHub のセキュリティ製品スイート。Secret Protection ($19) がクレデンシャルの漏洩を防ぎ、Code Security ($30) がコード自体の脆弱性を検出する 2 製品構成。active committer 単位の課金で、public repo は無料。
icon: /theomonfort/icons/ghas.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.8
category: secure
related: ['secret-scanning', 'code-scanning', 'dependabot']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Advanced Security ホーム
    url: https://github.com/security/advanced-security
  - group: 📖 公式ドキュメント
    label: About GitHub Advanced Security
    url: https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security
  - group: 📖 公式ドキュメント
    label: GitHub plans pricing
    url: https://docs.github.com/en/get-started/learning-about-github/githubs-plans
  - group: 📖 公式ドキュメント
    label: GHAS トライアルの計画 (Planning a trial of GHAS)
    url: https://docs.github.com/ja/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas
  - group: 📰 発表
    label: Introducing Secret Protection & Code Security (2025/03)
    url: https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/
  - group: 💰 課金の仕組み
    label: About billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Secret Risk Assessment (Docs)
    url: https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Code Security Risk Assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Code Security Risk Assessment GA (2026/04)
    url: https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/
  - group: 🏢 全社展開 (Rollout)
    label: Creating a custom security configuration for your enterprise
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration
  - group: 🏢 全社展開 (Rollout)
    label: Applying a custom security configuration to your enterprise
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration
  - group: 🏢 全社展開 (Rollout)
    label: Code scanning merge protection
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection
  - group: 📊 可視化 (Security overview)
    label: Security overview
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/security-overview
  - group: 📊 可視化 (Security overview)
    label: Assessing adoption of security features (Coverage)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/assessing-adoption-code-security
  - group: 📊 可視化 (Security overview)
    label: Exporting data from security overview (CSV)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data
  - group: 📊 可視化 (Security overview)
    label: Public monitoring for secret scanning
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring
  - group: 📰 Recent Changelog
    label: "Secret scanning public monitoring for enterprises (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises
  - group: 📰 Recent Changelog
    label: "Start a GitHub Advanced Security trial from a risk assessment (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-start-a-github-advanced-security-trial-from-a-risk-assessment
  - group: 📰 Recent Changelog
    label: "GitHub Advanced Security setup made simple (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-github-advanced-security-setup-made-simple
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>GitHub Advanced Security (GHAS)</strong> は GitHub のセキュリティ製品スイート。開発者がうっかり混入させてしまう 2 つのもの、<strong>クレデンシャル</strong> と <strong>脆弱なコード</strong> をリポジトリからスキャンして検出する。
  </p>
  <p>
    製品は <strong>Secret Protection</strong> と <strong>Code Security</strong> の 2 つで、それぞれ単体で購入できる。
  </p>
</div>

> 🌐 Public repo はすべて無料。ライセンスが必要になるのは **private / internal repo** で機能を有効化する場合だけ。
> 🤖 **Dependabot** (alerts / security updates / version updates / dependency graph) は <strong>どのプランでも無料</strong>・GHAS 不要。詳細は <a class="retro-link" href="/theomonfort/playbook/dependabot">Dependabot ↗</a>。

## 何のためにあるのか

スキャンツールは通常プラットフォームの外にある。専用のコンソール、専用のバックログ、そしてコードを書いてから数日後にようやく開発者へ届く検出結果。GHAS はこの 4 ステップを、コードが既に置かれている場所の中で完結させる。

- 🔎 **見つける** — default branch に既に眠っている secret や脆弱性を、どのチームにも作業を依頼せずに全リポジトリ横断で洗い出す
- 🚧 **防ぐ** — push protection が secret を commit になる前にブロック。ruleset を使えば code scanning がクリーンになるまで PR をマージさせないこともできる
- 🔧 **直す** — アラートは PR 上の注釈として届き、Copilot Autofix がチケットではなく実際の差分を提案する
- 📊 **示す** — Enterprise 全体で 1 つの設定、1 つのダッシュボードで「どのリポジトリが保護されていて、どれが漏れているか」が分かる

> 🎯 価値は「スキャナーがもう 1 つ増えること」ではない。検出・防止・修正・レポートがコードと同じプラットフォーム上にあるので、エクスポートも突き合わせも催促も要らなくなること。

## 何が入っている?

**🔑 Secret Protection** はクレデンシャルをリポジトリの外に締め出す。**🔍 Code Security** はコード自体に書き込まれた脆弱性を見つける。それぞれの中身は次のとおり。

<div class="det-widget">
<p class="det-hint">▸ クリックして詳細を表示</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-name">Secret scanning</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-title">Secret scanning</span></p>
<p class="det-why"><b>git 履歴全体</b>と新規 push を、<b>200 以上のプロバイダー</b>が登録したパターンで照合する。汎用フォーマットや、非構造な secret を拾う AI 検知も含む。検出結果はファイル・commit・作者付きのアラートになる。</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛡️</span><span class="det-name">Push protection</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🛡️</span><span class="det-title">Push protection</span></p>
<p class="det-why">secret を含む push 自体を拒否するので、リモートに到達せず、ローテーションも不要になる。開発者は自分のターミナル上でそれを知る。<b>Org 全体</b>で強制でき、バイパスを特定のユーザーだけに絞ることもできる。</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">✅</span><span class="det-name">Validity & custom patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">✅</span><span class="det-title">Validity &amp; custom patterns</span></p>
<p class="det-why"><b>Validity check</b> は漏洩したトークンがまだ有効かどうかをプロバイダーに問い合わせる。本当に悪用可能なものから対処できる。<b>Custom pattern</b> はパートナーが登録しない独自形式 (社内サービス、レガシー認証情報) をカバーする。</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔍</span><span class="det-name">Code scanning (CodeQL)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔍</span><span class="det-title">Code scanning (CodeQL)</span></p>
<p class="det-why">コードベースを<b>クエリ可能なデータベース</b>に変換し、信頼できない入力から危険な処理までのデータフローを追跡する (injection、path traversal、deserialization など)。push・PR・週次スケジュールで実行され、結果は PR の注釈として出る。</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">Copilot Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">Copilot Autofix</span></p>
<p class="det-why">アラートを、PR 上の<b>説明付き修正差分</b>に変える。開発者は脆弱性クラスを調べるところから始めるのではなく、レビューして commit するだけで済む。修正率の数字が実際に動くのはここ。</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📣</span><span class="det-name">Security campaigns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📣</span><span class="det-title">Security campaigns</span></p>
<p class="det-why">既存のアラートのバックログを、担当者と期限が付いた<b>終わらせられるリスト</b>に切り出し、コードを持つチームと直接進める。加えて PR での <b>dependency review</b> と <b>Security overview</b> のダッシュボードも含まれる。</p>
</div>
</details>
</div>
<div class="det-screen det-has-case"><div class="det-case">
<p class="det-case-k">📚 詳細エントリー</p>
<p class="det-case-v"><a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Scanning ↗</a> — 検出・push protection・トリアージの詳細。<br /><a class="retro-link" href="/theomonfort/playbook/code-scanning">Code Scanning ↗</a> — CodeQL の設定・Autofix・campaigns の詳細。</p>
</div></div>
</div>
</div>

## 料金

| 製品 | 価格 | 課金単位 |
| --- | :---: | --- |
| 🔑 **GitHub Secret Protection** | **$19** / 月 | active committer |
| 🔍 **GitHub Code Security** | **$30** / 月 | active committer |
| 📦 両方セット | $49 / 月 | active committer |

- 👥 **active committer** = 過去 90 日間に、機能が ON になっているリポジトリへ push したユニークなコミッター。同じ人は何リポジトリに push しても 1 人とカウント
- 💳 **従量課金 (metered)** モデル。月初にライセンス本数を予約する必要はなく、実際に push した人数だけ請求される
- 🏷️ **GitHub Team** と **GitHub Enterprise** で購入可能
- 🆓 **Public repo は完全無料**。Open source プロジェクトはライセンス不要

> 💡 2 製品は独立して購入できる。Secret scanning だけ欲しいなら **Secret Protection 単体 ($19)** で OK。CodeQL も使いたくなったら **Code Security ($30)** を追加すればいい。

## ライセンスを考えるときの順番

1. 🌐 **Public repo だけなら何もしなくていい** — すべて無料で使える
2. 🆓 **Private repo でもまず無料機能を ON** — Dependabot (alerts / updates) ・ ユーザーレベルの push protection ・ Secret Risk Assessment (1 回限りの棚卸し)
3. 🔑 **シークレット漏洩を組織レベルで強制したい** → **Secret Protection** を購入
4. 🔍 **コード脆弱性 (CodeQL) や Autofix まで欲しい** → **Code Security** を追加

> 🎯 まずは Risk Assessment (下記) で「うちの組織にどれだけ secret や脆弱性が眠っているか」を可視化してから、Secret Protection / Code Security の費用対効果を判断するのが定石。

## 購入前の棚卸し — Risk Assessments

GitHub には **ライセンス不要・完全無料** で組織のセキュリティ姿勢を可視化できる 2 つの **Risk Assessment** が用意されている。どちらも **Org → Security → Assessments** から 1 クリックで実行でき、結果を見てから Secret Protection / Code Security の購入を判断できる。

| 棚卸し | 何を見る? | 対象 | 頻度 | 詳細 |
| --- | --- | --- | :---: | --- |
| 🔑 **Secret Risk Assessment** | Org 内のリポに眠る secret の種類・件数 | **すべての repo**(public / private / internal / archived) | 1 回限り | <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Secret Risk Assessment ↗</a> |
| 🔍 **Code Security Risk Assessment** | コード脆弱性を CodeQL で検出 (severity / 言語 / Autofix 可能件数) | **最もアクティブな最大 20 repo** | 90 日に 1 回 | <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/risk-assessment" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment ↗</a> |

- 🆓 **完全無料** — どちらも GHAS / Secret Protection / Code Security のライセンス不要
- 🛂 **権限** — Organization owner または security manager のみ実行可能
- 📊 **出力** — 集計レポート (個別 secret の値やコードはサーバーに保存されない)
- 🏷️ **対象プラン** — GitHub Team および GitHub Enterprise Cloud (Server は 3.22 で対応予定)
- ⚙️ **Actions 分** — Code Security Risk Assessment は専用の Actions 実行枠を消費しない

> 💡 「予算稟議のために数字が欲しい」「導入前に効果を見たい」というケースで真っ先に使う。両方を同じ日に走らせれば 1 日で組織全体のセキュリティ姿勢が可視化できる。

> 🧪 棚卸しの次はトライアル。Risk Assessment の結果画面からそのまま GHAS トライアルを開始でき、目的設定・メンバー選定・評価軸の決め方は <a class="retro-link" href="https://docs.github.com/ja/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas" target="_blank" rel="noopener noreferrer">GHAS トライアルの計画 ↗</a> にまとまっている。

📘 Risk Assessment 関連:
- <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment(GitHub Docs)↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment GA(2026/04)↗</a>

📘 GHAS 全般:
- <a class="retro-link" href="https://docs.github.com/ja/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas" target="_blank" rel="noopener noreferrer">GHAS トライアルの計画(GitHub Docs)↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security (GitHub Blog) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security" target="_blank" rel="noopener noreferrer">About billing for GitHub Advanced Security ↗</a>
- <a class="retro-link" href="https://github.com/security/advanced-security" target="_blank" rel="noopener noreferrer">GitHub Advanced Security 製品ページ ↗</a>

## エンタープライズ全体へのロールアウト手順

**Enterprise → Settings → Advanced Security → Code security** で configuration を 1 つ作れば配下の全 org / repo に配れる。**New configuration** は最初から **GitHub recommended**。

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#ffb000">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🚫</span><span class="ctl-name">使わせない org は先に止める</span><span class="ctl-when">配る前にやる</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">やること</span><span class="ctl-v">Enterprise → Policies → <b>Advanced Security</b> → <b>Policies</b> タブ → dropdown を <b>Allow for selected organizations</b> にして許可する org だけ残す</span></p>
<p class="ctl-row"><span class="ctl-k">なぜ先に</span><span class="ctl-v">禁止しても<b>既に有効な repo は無効化されない</b>。止められるのは<b>追加のリポジトリ</b>だけなので、配った後では手遅れ</span></p>
<p class="ctl-row"><span class="ctl-k">効く相手</span><span class="ctl-v"><b>repository administrator だけ</b>。org owner と security manager はポリシーに関係なく有効化できる</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#ff4d4d">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">Push protection が ON になる</span><span class="ctl-when">止まるのは <code>push</code> だけ</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/push-protection" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">止まる</span><span class="ctl-v"><code>git push</code>・GitHub UI 上のコミット・ファイルアップロード・REST API 経由のリクエスト</span></p>
<p class="ctl-row"><span class="ctl-k">止まらない</span><span class="ctl-v"><code>git pull</code>・<code>git clone</code>・<code>git fetch</code>。<b>「secret に引っかかって pull できなくなる」は誤解</b></span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#ff4d4d">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛂</span><span class="ctl-name">bypass は write 権限者に開放</span><span class="ctl-when">デフォルト設定</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/delegated-bypass" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">デフォルト</span><span class="ctl-v">write 権限を持つ<b>全員</b>が理由を選んで bypass 可能。ただし<b>アラート + 監査ログ + owner へのメール</b>が必ず残る</span></p>
<p class="ctl-row"><span class="ctl-k">絞るには</span><span class="ctl-v">configuration の <b>Bypass privileges</b> を <b>Specific actors</b> に(= delegated bypass)。指定外の人は申請 → 承認フロー(申請は 7 日で失効)</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#00f0ff">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔍</span><span class="ctl-name">Code scanning が 3 タイミングで走る</span><span class="ctl-when">Actions 分を消費</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/setup-types" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">いつ走る</span><span class="ctl-v">default / protected branch への push のたび・同ブランチ宛て PR の作成とコミットのたび(fork からの PR は除く)・<b>週 1 回</b>のスケジュール</span></p>
<p class="ctl-row"><span class="ctl-k">コスト</span><span class="ctl-v">全社展開でいちばん効いてくる要因。CodeQL 対応言語を含まない repo は<b>スキャンも Actions 分も 0</b></span></p>
<p class="ctl-row"><span class="ctl-k">注意</span><span class="ctl-v">code scanning 自体は <b>merge をブロックしない</b></span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#00f0ff">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🚧</span><span class="ctl-name">merge を止めたいなら ruleset</span><span class="ctl-when">Enterprise → Policies → Rulesets</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">設定場所</span><span class="ctl-v">Policies → Repository → Rulesets → <b>Require code scanning results</b></span></p>
<p class="ctl-row"><span class="ctl-k">ブロック条件</span><span class="ctl-v">指定 severity のアラート検出・解析が実行中・<b>ツールがそのリポジトリで未設定</b></span></p>
<p class="ctl-row"><span class="ctl-k">落とし穴</span><span class="ctl-v">CodeQL 未設定の repo に当てると<b>アラート 0 件でも全 PR がブロック</b></span></p>
<p class="ctl-row"><span class="ctl-k">Evaluate とは</span><span class="ctl-v"><b>ブロックせず記録だけ取るお試しモード</b>。<b>Rule Insights</b> ページで「Active だったら何が弾かれたか」を確認できる。残りは Active(即適用)と Disabled(無効)</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#9bbc0f">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🆕</span><span class="ctl-name">新規リポジトリに配る</span><span class="ctl-when">Policy で設定</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">やること</span><span class="ctl-v">Policy → <b>Use as default for newly created repositories</b> を設定。Code scanning は <b>Enabled with advanced setup allowed</b> を選ぶと既存の CodeQL workflow を壊さない</span></p>
<p class="ctl-row"><span class="ctl-k">効く範囲</span><span class="ctl-v"><b>新規リポジトリのみ</b>。既存リポジトリには一切効かない</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#9bbc0f">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🗂️</span><span class="ctl-name">既存リポジトリに配る</span><span class="ctl-when">Apply to で別途実行</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">やること</span><span class="ctl-v">Configurations 一覧 → <b>Apply to</b> → <b>All repositories without configurations</b></span></p>
<p class="ctl-row"><span class="ctl-k">enterprise 限定</span><span class="ctl-v">この選択肢は <b>enterprise レベルでのみ</b>表示。既に config が当たっている org を壊さず、未設定の repo だけカバーできる</span></p>
<p class="ctl-row"><span class="ctl-k">対象</span><span class="ctl-v">archived リポジトリにも適用される(secret scanning は archived でも動くため)</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#9bbc0f">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🎯</span><span class="ctl-name">リポジトリを選んで配る</span><span class="ctl-when">org configuration のみ</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">repo 単位</span><span class="ctl-v">enterprise の <b>Apply to</b> は <b>All repositories</b> か <b>All repositories without configurations</b> のみ。<b>repo を選べるのは org configuration だけ</b></span></p>
<p class="ctl-row"><span class="ctl-k">やり方</span><span class="ctl-v">Organization → Settings → Advanced Security → Configurations → <b>Repositories</b> タブで絞り込んで選択 → <b>Apply configuration</b></span></p>
<p class="ctl-row"><span class="ctl-k">どちらが優先</span><span class="ctl-v">enterprise 側の変更が org configuration と衝突すると repo は <code>removed_by_enterprise</code> になり org config が外れる。<b>enterprise が優先</b></span></p>
</div>
</details>
</div>
</div>

## カバレッジの可視化 <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/security-overview" target="_blank" rel="noopener noreferrer">📖 Docs</a>

配り終わったら次の関心事は「実際どこまで守れているか」。**Security and quality** タブが **Enterprise / Organization** の両レベルで答えてくれる。

| ビュー | わかること | レベル |
| --- | --- | :---: |
| 📊 **Overview** | 検知 / 修復 / 予防のトレンド推移 | Ent + Org |
| 📈 **Coverage** | どの repo でどの機能が有効か | Ent + Org |
| 🛡️ **Risk** | アラートが多いのはどの repo か | Ent + Org |
| 🌐 **Public monitoring** | メンバーが **GitHub 上の public repo に漏らした** secret | **Ent のみ** |

- 🏢 **Org レベルの Coverage** が現場の日常ビュー。enterprise 側は自分が owner / security manager になっている org しか集計されない
- 🌐 **Public monitoring** (public preview・Secret Protection 必須) は enterprise メンバーと verified domain で漏洩を紐付ける。**Enterprise → Settings → Advanced Security → Code security** で ON
- 📤 **Export CSV** は Overview / Coverage / Risk で使え、**適用中のフィルタがそのまま反映**される
