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
  hex: "#5eead4"
order: 19.6
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
    label: Exploring the Code Quality backlog
    url: https://docs.github.com/en/code-security/how-tos/maintain-quality-code/interpret-results
  - group: 📖 公式ドキュメント
    label: 組織の Code Quality dashboard とアクセス権
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/explore-code-quality
  - group: 📖 公式ドキュメント
    label: finding の却下と Copilot への割り当て
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/fix-backlog-findings
  - group: 📖 公式ドキュメント
    label: Security manager の権限
    url: https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization
  - group: 📖 公式ドキュメント
    label: Enabling GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality
  - group: 📖 公式ドキュメント
    label: Code scanning
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/code-scanning
  - group: 📚 研究
    label: "Code for Machines, Not Just Humans: AI-friendliness and Code Health (FORGE 2026)"
    url: https://arxiv.org/abs/2601.02200
  - group: 📚 研究
    label: "Code Health in LLM-Based Test Generation: Effectiveness and Token Efficiency (SCAM 2026)"
    url: https://arxiv.org/abs/2608.18645
  - group: 💰 料金
    label: GitHub Code Quality billing
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/product-billing/github-code-quality
  - group: 📰 発表
    label: "Remediate Code Quality findings with agentic autofix (2026-09-09)"
    url: https://github.blog/changelog/2026-09-09-remediate-code-quality-findings-with-agentic-autofix/
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

## Code Quality がカバーする範囲 <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-quality/code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

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
<p class="vsx-why" data-side="cq"><b>2026 年 7 月 20 日</b>に GA。GitHub Advanced Security を補完する独立製品。コードの<b>信頼性・保守性とテストカバレッジ</b>を保ち、安全なリファクタ、保守コスト削減、コードベースの整理につなげる。</p>
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
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🧠</span><span class="vsx-name">AI findings</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🧠</span><span class="vsx-title">AI findings</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Standard findings と同じく<b>信頼性と保守性</b>が対象。固定ルールに縛られず、全言語を解析する。ただし<b>マージ後、default branch で最近変更されたファイル</b>が対象で、PR 上では実行しない。結果は <b>AI findings</b> に表示。<a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/maintain-quality-code/fix-findings-in-recent-merges" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
<p class="vsx-why" data-side="cs"><b>AI Scan</b> は<b>PR の変更のみ</b>を対象に脆弱性を検出。対応するのは <b>CodeQL がカバーしていない一部の言語とフレームワーク</b>。例: PHP、Bash、HCL、Dockerfile、JSP、Blazor。リポジトリ全体のスキャンや backlog アラートはない。<a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-name">可視化</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-title">可視化</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Standard findings は 2 か所に出る。<b>PR 上の bot コメント</b>と、default branch を対象としたリポジトリの <b>Security タブ</b>。それぞれ <b>Error / Warning / Note</b> で格付けされ、その格付けが品質スコアに反映される。</p>
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

## 対応言語 <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-quality/code-quality#supported-languages" target="_blank" rel="noopener noreferrer">📖 Docs</a>

CodeQL のルールベース解析は **C#, Go, Java, JS/TS, Python, Ruby の 6 言語のみ**。C/C++ や Swift などで使えるのは AI 解析とカバレッジだけ。

<div class="tbl-compact">

| 機能 | ✅ CodeQL 対応 6 言語 | ⚠️ C/C++ ほか |
| --- | --- | --- |
| 🔍 PR の finding + Autofix、default branch の finding | ✅ | ❌ |
| 🤖 Agentic Autofix と finding の品質ゲート | ✅ | ❌ |
| 🧠 AI 解析（最近変更されたファイル） | ✅ | ✅ |
| 🧪 カバレッジ（Cobertura XML） | ✅ | ✅ |

</div>

> 💡 PR 上に出るのは CodeQL の finding だけ。C/C++ の PR レビューは <a class="retro-link" href="/theomonfort/playbook/copilot-code-review/">Copilot code review ↗</a>（別製品）で補う。

## マージ前に修正

AI がコードを書く時代、PR ごとの ruleset 品質ゲートが品質を守る。GitHub 社内では finding の **67.3%** をマージ前に解消（<a class="retro-link" href="https://github.blog/changelog/2026-07-20-github-code-quality-is-now-generally-available/" target="_blank" rel="noopener noreferrer">GitHub,&nbsp;2026&nbsp;↗</a>）。

<div class="tbl-compact">

| | 🟢 PR ごとにゲート | 🔴 ゲートなし |
| --- | --- | --- |
| 🤖 エージェント | 見落としをゲートが検出 | 見落としがそのままマージ |
| 🔧 修正 | 同じ PR 内で Autofix | 後で修正 PR、後回しになりがち |
| 📉 コードベース | 基準を維持 | 負債が次のエージェントに残る |

</div>

- 🐛 **編集が壊れやすい**: 不健全なコードへの AI の編集は欠陥リスクが **30% 以上高い**（<a class="retro-link" href="https://arxiv.org/abs/2601.02200" target="_blank" rel="noopener noreferrer">FORGE&nbsp;2026&nbsp;↗</a>）
- 🪙 **読むコストが増える**: Code Health が最も低いコードは入力トークンが **約 45% 増**（Java / C++、<a class="retro-link" href="https://arxiv.org/abs/2608.18645" target="_blank" rel="noopener noreferrer">SCAM&nbsp;2026&nbsp;↗</a>）

## Agentic Autofix <a class="h2-doc" href="https://github.blog/changelog/2026-09-09-remediate-code-quality-findings-with-agentic-autofix/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

修正案の提示だけでなく、**既存の品質負債を修正 PR に変える**。

<div class="tbl-compact">

| ステップ | 何が起きるか |
| --- | --- |
| 🎯 選択 | **Security and quality → Code quality → Standard findings** で default branch の CodeQL finding を同じページから **1〜25 件**選択。 |
| 🤖 委任 | **Assign to Copilot** は 1 件でも **Generate fix** に代わる。cloud agent がブランチを修正・検証し PR を作成。 |
| 👀 レビュー | 修正と CI を確認してマージ。人のレビューは引き続き必要。 |

</div>

**利用条件:** Code Quality を有効化した **Team / Enterprise Cloud**（data residency 含む）。既存 enterprise ポリシーを継承し、一括修正専用設定は不要。**コスト:** AI credits と Copilot ライセンス。

## 誰が何をできる? <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/explore-code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Org owner** は全 repo の Admin。その他のメンバーには、以下の repo 権限が必要。

<div class="tbl-compact">

| 操作 | 場所 | 標準のアクセス権 |
| --- | --- | --- |
| finding を見る | Repo → Code quality | **Write+** |
| org のスコア / 推移を見る | Org → Insights → Code quality | **Org owner** は全 repo。その他は **Write+** の repo |
| finding を却下する | Repo → Standard findings | **Write+** |
| Copilot に割り当てる | Repo → Standard findings | 対象 repo の **Write+** |

</div>

org dashboard で repo を開き **Standard findings → Assign to Copilot**。Security manager 単独では Read のみ。**Write+** = Write / Maintain / Admin（有効化済みの標準ロール、2026-11-10）。

## 有効化と展開 <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="tbl-compact">

| 階層 | 有効化のカスケード |
| --- | --- |
| 🏛️ Enterprise | `Policies → Code quality` で Organization を許可 |
| 🏢 Organization | `Settings → Code quality → Repository access` で repo を指定 |
| 📦 Repository | `Settings → Code quality → Enable code quality` で scan を有効化 |

</div>

**前提:** Actions workflow と GitHub-hosted または想定 label 付き self-hosted runner。テストの Cobertura XML を upload し、ruleset は Evaluate 後にマージをブロック。

展開状況は Organization の dashboard / Repository access で確認。Enterprise にはポリシーの許可リストと消費ライセンスのみ表示。

<a class="dl-script" href="/theomonfort/scripts/gh-code-quality-inventory.sh" download>
  <span class="dl-script-ico">▼</span>
  <span class="dl-script-text">
    <strong>gh-code-quality-inventory.sh</strong>
    <em>Enterprise の全 Organization で有効な repo を一覧化</em>
  </span>
  <span class="dl-script-cmd">./gh-code-quality-inventory.sh &lt;enterprise&gt;</span>
</a>

## GA の利用条件と料金

**GitHub Enterprise Cloud** と **GitHub Team** で利用可能。

<div class="spec-widget spec-compact">
<table style="table-layout:fixed">
<colgroup><col style="width:22%" /><col style="width:40%" /><col style="width:38%" /></colgroup>
<thead>
<tr><th style="white-space:normal">コスト</th><th>計測方法</th><th>補足</th></tr>
</thead>
<tbody>
<tr>
<td style="white-space:normal">💺 基本ライセンス</td>
<td><b>active committer 1 人あたり月額 $10</b>。有効な repo に直近 90 日以内に commit を push すると active。</td>
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
<td>AI 検出と Copilot 機能は <b>GitHub AI credits</b> を消費。</td>
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
<td>self-hosted 以外では CodeQL workflow が <b>Actions minutes</b> を消費。</td>
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
