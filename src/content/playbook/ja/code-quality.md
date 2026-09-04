---
title: コード品質
titleEn: Code Quality
summary: GitHub Code Quality は CodeQL と AI で信頼性・保守性の問題をマージ前に検出し、修正提案、カバレッジと品質スコアの可視化、ルールセットによる品質ゲートまで提供する。
icon: 🩺
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.5
category: secure
related: ['code-scanning', 'github-advanced-security', 'copilot-code-review']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-quality/code-quality
  - group: 📖 公式ドキュメント
    label: CodeQL-powered analysis for Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/reference/code-quality/codeql-detection
  - group: 📖 公式ドキュメント
    label: Preventing code quality issues before merge
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/improve-code-quality/catch-issues-before-merge
  - group: 📖 公式ドキュメント
    label: Enabling GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality
  - group: 📖 公式ドキュメント
    label: Code scanning
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/code-scanning
  - group: 💰 料金
    label: GitHub Code Quality billing
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/product-billing/github-code-quality
  - group: 📰 発表
    label: "GitHub Code Quality is now generally available (2026-07-20)"
    url: https://github.blog/changelog/2026-07-20-github-code-quality-is-now-generally-available/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Code Quality</strong> は、信頼性・保守性の問題が将来の技術的負債になる前に止める仕組み。
  </p>
  <p>
    <strong>CodeQL ルール + AI 解析</strong> で検出し、PR で修正を提案、リポジトリの健全性をスコア化し、品質基準を満たさないマージも防げる。
  </p>
</div>

## Code Quality がカバーする範囲

**2026 年 7 月 20 日** に GA。役割は、コードが古くなっても信頼性・保守性・テストカバレッジを保つこと。GitHub Advanced Security に組み込まれた機能ではなく、その**隣に並ぶ独立製品**。

<div class="vsx-widget">
<input class="vsx-radio" type="radio" name="cq-vs-product" id="cqvs-quality" checked />
<input class="vsx-radio" type="radio" name="cq-vs-product" id="cqvs-scanning" />
<p class="vsx-hint">▸ 項目を選ぶ。2 つ目のタブは参考として Code Scanning</p>
<div class="vsx-bar">
<label class="vsx-tab" for="cqvs-quality"><span class="vsx-icon" aria-hidden="true">🩺</span>Code Quality</label>
<label class="vsx-tab" for="cqvs-scanning"><span class="vsx-icon" aria-hidden="true">🛡️</span>Code Scanning<span class="vsx-tab-ref">REF</span></label>
</div>
<div class="vsx-split">
<div class="vsx-list">
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🎯</span><span class="vsx-name">主目的</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🎯</span><span class="vsx-title">主目的</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">コードを<b>信頼できて直しやすい</b>状態に保つ。リファクタが安全になり、保守コストが下がり、コードベースが整う。</p>
<p class="vsx-why" data-side="cs"><b>セキュリティ脆弱性とコーディングエラー</b>を本番に届く前に検出する。</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🐛</span><span class="vsx-name">代表的な finding</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🐛</span><span class="vsx-title">代表的な finding</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">2 系統ある。<b>Reliability</b>: 重複した if 条件、到達しないコード、長さとの off-by-one 比較、エラーチェック漏れ、未初期化の変数。<b>Maintainability</b>: 無意味な代入、効果のない式、ループ内の DB クエリ。</p>
<p class="vsx-why" data-side="cs"><b>SQL injection</b>、XSS、path traversal、危険な data flow。</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🔬</span><span class="vsx-name">解析エンジン</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🔬</span><span class="vsx-title">解析エンジン</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq"><b>CodeQL の品質ルール</b>と、固定ルールでは拾えないパターンを見る AI 解析。</p>
<p class="vsx-why" data-side="cs"><b>CodeQL のセキュリティクエリ</b>、または SARIF をアップロードするサードパーティツール。</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-name">可視化</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-title">可視化</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">finding は 2 か所に出る。<b>PR 上の bot コメント</b>と、default branch を対象としたリポジトリの <b>Security タブ</b>。それぞれ <b>Error / Warning / Note</b> で格付けされ、その格付けが品質スコアに反映される。</p>
<p class="vsx-why" data-side="cs">アラートは <b>severity と CWE</b> で格付けされ、Security overview に集約される。</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🚧</span><span class="vsx-name">マージ制御</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🚧</span><span class="vsx-title">マージ制御</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">ruleset の<b>品質・カバレッジしきい値</b>。強制する前に evaluate モードで影響を測れる。</p>
<p class="vsx-why" data-side="cs">code scanning check と<b>セキュリティのマージ保護</b>。</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🔢</span><span class="vsx-name">クエリ本数</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🔢</span><span class="vsx-title">クエリ本数</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">standard のクエリ数: C# 69、Go 22、Java/Kotlin 89、JS/TS 98、Python 101、Ruby 3、Rust 1。<b>合計 383 本</b>。C/C++、Swift、Actions は未対応。</p>
<p class="vsx-why" data-side="cs">default のクエリ数: Actions 18、C/C++ 61、C# 59、Go 36、Java/Kotlin 80、JS/TS 89、Python 45、Ruby 44、Rust 36、Swift 29。<b>合計 497 本</b>、うち 413 本がアラートを出す。</p>
</div>
</details>
</div>
<div class="vsx-screen"><p class="vsx-empty">項目を選択 ▸</p></div>
</div>
</div>

> 🔑 両方使う。Code Scanning は悪用可能なリスク、Code Quality は長期的なコードの健全性を守る。

## マージ前に修正

品質負債を直す最適なタイミングは、PR の文脈がまだ新鮮な間。GitHub 社内では、Code Quality finding の **67.3% を PR のマージ前に解消** している。

1. **先に基準を決める** — ruleset の品質ゲートを設定し、基準を下回る変更をマージできないようにする。
2. **PR を開く** — ルールベース解析と AI 解析が走り、説明と修正提案付きの finding がインラインに表示される。
3. **解消する** — Autofix の適用、理由付き dismiss、または Copilot への修正委任を選択。
4. **ゲートが効く** — 必要な finding が解消されるまで PR はブロックされたまま。
5. 🎁 **おまけ** — Security タブから直接アラートを修正、または campaign を作ってバックログを整理された形で消化。

> ⚡ PR 内で解消すれば、後日修正専用の PR を作らずに済み、default branch のバックログも増えない。

## 有効化と展開 <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**有効化は 3 階層のカスケード**

- 🏛️ **Enterprise** — `Policies → Code quality` で Organization の利用を許可
- 🏢 **Organization** — `Settings → Code quality → Repository access` で対象リポジトリを指定
- 📦 **Repository** — `Settings → Code quality → Enable code quality` で scan を有効化

**有効化する前に**

- ⚙️ **GitHub Actions** — 決定論的な CodeQL scan は Actions workflow で動く
- 🏃 **Runner** — GitHub-hosted、または想定 label 付きの self-hosted
- 🧪 **カバレッジ** — 既存テストの Cobertura XML を upload
- 🧭 **品質ゲート** — ruleset は Evaluate mode で始めてからマージブロックへ

> 🏢 **展開状況は Organization 単位でしか確認できない。** dashboard と「Repository access」は Organization スコープで、Enterprise レベルではポリシーの許可リストと消費ライセンスしか見えない。

<a class="dl-script" href="/theomonfort/scripts/gh-code-quality-inventory.sh" download>
  <span class="dl-script-ico">▼</span>
  <span class="dl-script-text">
    <strong>gh-code-quality-inventory.sh</strong>
    <em>Enterprise slug を渡すだけで全 Organization を巡回し、Code Quality が有効なリポジトリを一覧化</em>
  </span>
  <span class="dl-script-cmd">./gh-code-quality-inventory.sh &lt;enterprise&gt;</span>
</a>

## GA の利用条件と料金

**GitHub Enterprise Cloud** と **GitHub Team** で利用可能。

<p class="spec-hint">▸ + でその項目の詳細を展開</p>

<div class="spec-widget">
<table style="table-layout:fixed">
<colgroup><col style="width:22%" /><col style="width:40%" /><col style="width:38%" /></colgroup>
<thead>
<tr><th style="white-space:normal">コスト</th><th>計測方法</th><th>補足</th></tr>
</thead>
<tbody>
<tr>
<td style="white-space:normal">💺 基本ライセンス</td>
<td><b>active committer 1 人あたり月額 $10</b>。有効化された repo に直近 90 日以内に commit が push されると active。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">📦</span><span class="spec-key">製品モデル</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">GitHub Advanced Security に含まれない、<b>補完関係にある独立製品</b>。GA 時点では <b>GitHub Enterprise Server</b> は対象外。</p>
</details>
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">👤</span><span class="spec-key">カウント方法</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">有効化した repo 数に関係なく、<b>Organization 全体で 1 人</b>として計上。GitHub App bot は対象外。</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">🤖 AI 機能</td>
<td>AI 検出と Copilot-powered 機能は <b>GitHub AI credits</b> を消費。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🪪</span><span class="spec-key">Copilot ライセンス</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">AI 検出と Autofix には<b>不要</b>。Copilot への修正委任を使う場合のみ Copilot ライセンスが必要。</p>
</details>
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💳</span><span class="spec-key">上限を設定</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">SKU 単位の予算を設定: <b>Enterprise → Budget → SKU = Code Quality AI credits</b>。</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">⚙️ 決定論的 scan</td>
<td>self-hosted runner を使わない場合、CodeQL workflow が <b>GitHub Actions minutes</b> を消費。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💳</span><span class="spec-key">上限を設定</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>GitHub Actions の予算</b>を設定するか、scan を self-hosted runner に寄せる。</p>
</details>
</div>
</td>
</tr>
</tbody>
</table>
</div>

## 品質を継続的に測定

PR での強制は新しい負債を止める。既存の負債がどこにあるかは dashboard と API でわかる。

- 📊 **Repository / Organization dashboard** — リポジトリ横断で reliability と maintainability score を確認し、負債が集中している場所を特定
- 🧪 **PR のカバレッジ** — 既存の Cobertura XML を表示し、カバレッジの増減を確認
- 🔌 **API** — リポジトリの有効化と finding の取得を自動化し、独自のレポートに活用

> 🎯 Dashboard で品質負債の場所を把握し、ruleset で新たな負債の追加を止める。
