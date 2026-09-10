---
title: Code Scanning
titleEn: Code Scanning
summary: CodeQL による静的解析（SAST）でコードの脆弱性を検出する GitHub の機能。対応するアラートには Copilot Autofix が修正を提案でき、Copilot に修正を依頼することも可能。
icon: /theomonfort/icons/code-scanning.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.5
category: secure
related: ['code-quality', 'github-advanced-security', 'dependabot', 'secret-scanning']
links:
  - group: 📖 公式ドキュメント
    label: About code scanning
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning
  - group: 📖 公式ドキュメント
    label: About CodeQL
    url: https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql
  - group: 📖 公式ドキュメント
    label: Configuring default setup
    url: https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
  - group: 📖 公式ドキュメント
    label: Autofix for code scanning
    url: https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning
  - group: 📖 公式ドキュメント
    label: SARIF support for code scanning
    url: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning
  - group: 🔬 CodeQL を深く知る
    label: About CodeQL (CodeQL docs)
    url: https://codeql.github.com/docs/codeql-overview/about-codeql/
  - group: 🔬 CodeQL を深く知る
    label: About CodeQL queries（クエリの書き方）
    url: https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/
  - group: 🔬 CodeQL を深く知る
    label: About data flow analysis（taint tracking）
    url: https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/
  - group: 🔬 CodeQL を深く知る
    label: github/codeql（公式クエリの OSS リポジトリ）
    url: https://github.com/github/codeql
  - group: 💰 料金
    label: GitHub security plans（$30 / $19 の一次情報）
    url: https://github.com/security/plans
  - group: 💰 料金
    label: Billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 💰 料金
    label: Billing for GitHub Actions
    url: https://docs.github.com/en/billing/concepts/product-billing/github-actions
  - group: 📖 公式ドキュメント
    label: Code security risk assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 📰 Recent Changelog
    label: "Agentic autofix for code scanning alerts (2026-07-10)"
    url: https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview
  - group: 📰 Recent Changelog
    label: "Link code scanning alerts to GitHub Issues (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-link-code-scanning-alerts-to-github-issues
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Code Scanning</strong> は、コードを <strong>実行せずに</strong> 静的解析（<strong>SAST</strong>）して脆弱性を見つける機能。
  </p>
  <p>
    <strong>CodeQL</strong> はコードを <strong>クエリ可能なデータベース</strong> に変換する。対応するアラートには <strong>Copilot Autofix</strong> が修正を提案でき、<strong>Copilot</strong> に修正を依頼することも可能。
  </p>
</div>

## SAST とは何か

アプリケーションセキュリティのテスト手法は主に 4 つ。Code Scanning が担当するのは **SAST（Static Application Security Testing）** で、**コードを動かさずに** ソースそのものを読んで脆弱性を探す。

<div class="det-widget">
<p class="det-hint">▸ クリックで詳細</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-name">SAST（静的解析）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-title">SAST — 静的解析</span></p>
<p class="det-why">ソースコードを <b>実行せずに</b> 解析する。デプロイどころかビルドすら不要なので <b>コミット / PR の時点で回せる</b>（shift-left）= 修正コストが最小。到達しないコードパスも含めて全体を見られる反面、<b>実行時にしか分からない設定ミスや認証フローの穴は見えない</b>。古典的な弱点は誤検知の多さで、CodeQL がデータフロー解析で潰しにいっているのはまさにそこ。</p>
<p class="det-doc">GitHub の担当機能: <b>Code Scanning / CodeQL</b></p>
</div>
</details>
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🌐</span><span class="det-name">DAST（動的解析）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🌐</span><span class="det-title">DAST — 動的解析</span></p>
<p class="det-why">動いているアプリに <b>外から攻撃リクエストを撃ち込む</b>。「実際に刺さるか」を確認できるのが強みだが、テストできるのは <b>デプロイ後 かつ クローラが到達できた画面だけ</b>。どの行が原因かも直接は分からない。</p>
<p class="det-doc">GitHub 純正機能はなし。結果を <b>SARIF</b> で Code Scanning に取り込む</p>
</div>
</details>
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📦</span><span class="det-name">SCA（依存関係解析）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📦</span><span class="det-title">SCA — 依存関係解析</span></p>
<p class="det-why">自分が書いていない <b>ライブラリ側の既知の脆弱性（CVE）</b> を洗う。現代のアプリはコードの大半が依存パッケージなので、件数ベースでは一番のヒット源になりやすい。</p>
<p class="det-doc">GitHub の担当機能: <b>Dependabot / Dependency review</b></p>
</div>
</details>
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-name">Secret Scanning</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-title">Secret Scanning — 資格情報の検出</span></p>
<p class="det-why">脆弱性ではなく <b>コードに書いてしまった鍵やトークン</b> を探す。攻撃者からすれば一番安上がりな侵入口なので、SAST より優先度が高いことも多い。</p>
<p class="det-doc">GitHub の担当機能: <b>Secret Protection</b></p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:16.5em"><p class="det-empty">手法を選んでください ▸</p></div>
</div>
</div>

> 🔑 覚え方 — **SAST は「自分が書いたコード」のバグ、SCA は「他人が書いたコード」のバグ**。守備範囲が違うので、どちらか一方では埋まらない。

## Code Scanning と CodeQL は別物

ここを混同すると「他社の SAST も併用したい」という話が通じなくなる。**Code Scanning は受け皿（機能）**、**CodeQL は解析エンジン**で、両者は分離している。

<div class="det-widget det-compact">
<p class="det-hint">▸ クリックで詳細</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-name">Code Scanning（機能）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-title">Code Scanning — GitHub 側の受け皿</span></p>
<p class="det-why">静的解析の結果を GitHub 上に集約して見せる <b>機能</b>。Security タブのアラート一覧、PR の Files changed へのインラインコメント、マージ保護、Security overview、REST / GraphQL API、Issue 連携。<b>エンジンが何であろうと結果はここに集まる</b>。</p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-name">CodeQL（エンジン）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-title">CodeQL — 解析エンジン</span></p>
<p class="det-why">GitHub が <b>2019 年に Semmle から獲得</b> したセマンティック解析エンジン。GitHub の既定エンジンではあるが、<b>GitHub の外でも動く</b> — CodeQL CLI を使えば他社 CI でもローカルでも実行できる。</p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📄</span><span class="det-name">SARIF（接続規格）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📄</span><span class="det-title">SARIF — 二つをつなぐ標準フォーマット</span></p>
<p class="det-why">静的解析結果の標準フォーマット（OASIS 標準）。Semgrep / Snyk / Checkmarx / ESLint security などの出力を <code>github/codeql-action/upload-sarif</code> で流し込めば、<b>CodeQL の結果と同じ画面に同居</b> する。</p>
<p class="det-doc"><a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning" target="_blank" rel="noopener noreferrer">📘 SARIF support ↗</a></p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:14em"><p class="det-empty">項目を選んでください ▸</p></div>
</div>
</div>

> 🔑 **CodeQL なしで Code Scanning は使えるし、Code Scanning なしで CodeQL も使える**。「Code Scanning = CodeQL」ではない。

## CodeQL の仕組み <a class="h2-doc" href="https://codeql.github.com/docs/codeql-overview/about-codeql/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

処理は 2 段階。**コードを抽出してデータベース化**し、**クエリをコンパイルして評価**する。

<figure class="harness-map split-figure">
<img src="/theomonfort/diagrams/codeql-architecture.svg" width="1100" height="475" style="max-height:min(440px, 46vh);object-fit:contain" alt="CodeQL の構成: ソースコードとビルドの監視から Extractor がデータベースを作成。Schema、Query、Libraries が QL compiler に入り、Evaluator がコンパイル済みクエリとデータベースから結果を生成する。ビルド成果物は別系統。" />
</figure>

**Schema** はデータ構造を記述し、**database** はデータを保存する。言語と <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages" target="_blank" rel="noopener noreferrer">build mode ↗</a> に応じて、ソースコードを直接抽出するか、ビルドを監視する。

## CodeQL クエリの読み方

QL は宣言型のロジックプログラミング言語。**「バグとはどういう形か」を書くと、evaluator が全インスタンスを見つけてくる**。構造は SQL の `FROM / WHERE / SELECT` とほぼ同じ。

```ql
import java                                       // ① 標準ライブラリを読み込む

from IfStmt ifstmt, Block block                   // ② 調べたい要素を変数として宣言
where
  block = ifstmt.getThen() and                    // ③ 条件で絞り込む
  block.getNumStmt() = 0                          //    → then 節が空のブロック
select ifstmt, "This if-statement is redundant."  // ④ 何をどう報告するか
```

言語の本質はこの形だけ。**`where` が「バグとはどういう形か」の定義そのもの**で、探索は evaluator がやる。

> 🔬 セキュリティクエリはこの上に `DataFlow` / `TaintTracking` を重ね、**source / sink / sanitizer** を定義して経路を探索する。公式クエリは <a class="retro-link" href="https://github.com/github/codeql" target="_blank" rel="noopener noreferrer">github/codeql ↗</a> で OSS 公開されている。通常は公開パックで十分で、独自クエリは「自社フレームワーク固有の source / sink を教える」ときに書く。

📘 詳細: <a class="retro-link" href="https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/" target="_blank" rel="noopener noreferrer">About CodeQL queries ↗</a> / <a class="retro-link" href="https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/" target="_blank" rel="noopener noreferrer">About data flow analysis ↗</a>

## CodeQL が見つける脆弱性

<div class="det-widget">
<p class="det-hint">▸ クリックで詳細</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💉</span><span class="det-name">インジェクション系</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💉</span><span class="det-title">インジェクション系</span></p>
<p class="det-why"><b>SQL injection / command injection / path traversal / XSS / SSRF</b>。ユーザー入力がエスケープされないまま解釈系（SQL、シェル、ファイルパス、HTML、HTTP クライアント）へ届くパターン。<b>CodeQL の主戦場</b>で、データフロー解析がそのまま効く領域。</p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔓</span><span class="det-name">認証・認可・暗号</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔓</span><span class="det-title">認証・認可・暗号</span></p>
<p class="det-why">認可漏れ（broken access control）、<b>弱い暗号アルゴリズム（MD5 / SHA-1）</b>、安全でない乱数生成、ハードコードされた資格情報、証明書検証の無効化など。</p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💣</span><span class="det-name">メモリ安全性 (C/C++)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💣</span><span class="det-title">メモリ安全性（C/C++）</span></p>
<p class="det-why"><b>buffer overflow / use after free / null dereference / 整数オーバーフロー</b>。型とポインタの流れをデータベース上で追えるからこそ検出できる領域で、正規表現ベースのツールでは手が届かない。</p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧩</span><span class="det-name">データフロー追跡</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🧩</span><span class="det-title">データフロー追跡（taint tracking）</span></p>
<p class="det-why">source → sink の <b>経路そのもの</b>をアラートに添えて表示する。途中で sanitizer を通っていれば除外されるので誤検知が出にくい。<code>models-as-data</code> を使えば <b>自社フレームワーク固有の source / sink / sanitizer</b> をクエリを書かずに追加できる。</p>
<p class="det-doc"><a class="retro-link" href="https://github.blog/changelog/2026-04-21-codeql-now-supports-sanitizers-and-validators-in-models-as-data" target="_blank" rel="noopener noreferrer">📘 sanitizers in models-as-data ↗</a></p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚙️</span><span class="det-name">CI/CD（Actions）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">⚙️</span><span class="det-title">CI/CD（GitHub Actions）</span></p>
<p class="det-why">workflow 自体も解析対象。<code>pull_request_target</code> と信頼できない checkout の組合せ、<b>script injection</b>、過剰な <code>permissions</code>、未ピン留めの third-party action など、<b>サプライチェーン側の穴</b>を拾う。</p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:15em"><p class="det-empty">カテゴリを選んでください ▸</p></div>
</div>
</div>

> 🌐 **対応言語** — C/C++、C#、Go、Java/Kotlin、JavaScript/TypeScript、Python、Ruby、Rust、Swift、GitHub Actions。CodeQL 対応言語が 1 つもない repo は **スキャンが走らない = Actions 分も消費しない**。

## Default setup と Advanced setup の違い

CodeQL の有効化方法は 2 つ。**まず Default で十分**。

<div class="det-widget det-compact">
<p class="det-hint">▸ クリックで比較</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🟢</span><span class="det-name">Default setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🟢</span><span class="det-title">Default setup — 1 クリック</span></p>
<p class="det-why"><b>設定ファイル不要。</b>GitHub が言語を自動検出し、<code>default</code> クエリセットを選び、push / PR / 週次スケジュールのトリガーまで自動で組む。多くの言語で <b>ビルド不要</b>。組織の設定画面から全リポジトリに一括展開できるため、<b>大規模ロールアウトで現実的に選べる唯一の選択肢</b>。</p>
<p class="det-doc">向いている対象: <b>ほぼ全てのリポジトリ、そして一括展開</b></p>
</div>
</details>
<details class="det-pick" name="cs-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-name">Advanced setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-title">Advanced setup — 自前の workflow</span></p>
<p class="det-why"><code>.github/workflows/codeql.yml</code> を自分で持つ。言語、トリガー、独自ビルドコマンド、クエリスイート(<code>default</code> / <code>security-extended</code> / <code>security-and-quality</code> / カスタムパック)を全て制御できる。代償として <b>リポジトリごとに workflow ファイルの保守</b> が発生する。</p>
<p class="det-doc">向いている対象: <b>monorepo、特殊ビルド、カスタムクエリ</b></p>
</div>
</details>
<details class="det-pick" name="cs-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💰</span><span class="det-name">課金の違い</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💰</span><span class="det-title">課金に差はない</span></p>
<p class="det-why">どちらも <b>GitHub Actions の workflow</b> として動き、private リポジトリでは同じレートで Actions 分を消費する。「Default にすれば安い」も「Advanced にすれば安い」も成り立たない。実際に金額を動かすのは <b>スキャン頻度・リポジトリ規模・ランナー種別</b>。</p>
<p class="det-doc">詳細は「料金」スライドの 3 つのメーターを参照</p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:14em"><p class="det-empty">選択してください ▸</p></div>
</div>
</div>

> 🔑 monorepo・特殊なビルド・カスタムクエリが要らない限り、**まず Default setup から**。履歴を失わずにあとから Advanced に切り替えられる。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">Configuring default setup ↗</a>

## Copilot Autofix で AI が直す ★

Code Scanning 最大のキラー機能。CodeQL のアラートに対して **AI が修正コードを生成** し、PR にそのままコミットできる。

- 🤖 **どう動く** — アラートを Copilot に渡し、該当コード + 周辺コンテキスト + CodeQL の説明とデータフロー経路を元に diff を生成
- 💬 **どこに表示** — アラート画面 **および** PR にインライン表示。コミット先は **既存ブランチ** または **新規ブランチ** から選択
- ⚡ **MTTR 短縮** — GitHub の社内データで修正時間が 3〜4 倍速に
- 🆓 **追加コストゼロ** — **Copilot ライセンス不要**、**AI クレジットも消費しない**。Code Security があれば追加費用なしで使える（public repo は無条件で無料）
- 🔌 **有効化** — CodeQL で Code Scanning を有効にすれば自動的に付いてくる。default / advanced のどちらでも同じ

> 💡 「脆弱性を見つける」だけでなく「**直すところまで AI に任せる**」が新しい標準。レビューの負担が大幅に下がる。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Autofix for code scanning ↗</a>

## Agentic Autofix — 修正をエージェントに任せる（Public Preview）

**何ができる** — Code Scanning のアラートを **Copilot クラウドエージェント** にアサインすると、Copilot が脆弱性を解析 → 修正計画を立案 → **ドラフト PR を自動作成** してくれる。

- 🎯 **2 つのアサイン方法** — **一括**:Security Campaign で複数アラートを選択 → 「Assign Copilot」で 1 つの PR にまとめて修正 / **個別**:アラート詳細ページの assignee picker から Copilot を選択
- 📦 **出力** — リポジトリ全体を踏まえた **複数ファイルの変更**（Autofix のインライン単一ファイル修正とは異なる）
- 🔁 **反復可能** — PR 上で `@copilot` にコメントすれば修正をやり直せる。サンドボックスで CodeQL / CI も回る
- 🛂 **利用条件** — GitHub Code Security または GHAS **＋** Copilot 有料プラン（クラウドエージェント有効）。事前に Autofix の修正提案が生成済みであること
- 💸 **課金** — クラウドエージェントのセッションとして **AI クレジット + Actions 分** の両方を消費する（Autofix と違って無料ではない）

📘 詳細: <a class="retro-link" href="https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview" target="_blank" rel="noopener noreferrer">Agentic autofix for code scanning alerts（changelog）↗</a>

## Autofix と Agentic Autofix の使い分け

<div class="ctl-widget">
<p class="ctl-hint">▸ ＋ をクリックすると両者の違いが開きます</p>
<div class="ctl-list">
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📤</span><span class="ctl-name">出力の形</span><span class="ctl-when">パッチ vs PR</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v">インライン修正パッチ。<b>既存ブランチ</b> または <b>新規ブランチ</b> に直接コミットできる</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">Copilot が作成する <b>ドラフト Pull Request</b>。レビューして取り込む</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📐</span><span class="ctl-name">修正範囲</span><span class="ctl-when">1 ファイル vs 複数</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v"><b>単一ファイル</b>・最小限の局所修正。エスケープ関数を挟む、API を安全なものに差し替える、など</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v"><b>複数ファイル</b>。リポジトリ全体を踏まえたリファクタや共通処理の追加まで踏み込める</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📚</span><span class="ctl-name">対応単位</span><span class="ctl-when">個別 vs 一括</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v">アラートごとに「Generate fix」を <b>1 件ずつ</b>。PR 上での一括適用（batch apply）は可能</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">Security Campaign で <b>複数アラートを選択して 1 PR</b> にまとめて依頼できる</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔁</span><span class="ctl-name">検証と反復</span><span class="ctl-when">一発 vs 対話</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v">提案時点では検証なし・再生成不可。気に入らなければ破棄してマージ後の再スキャンで確認</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">サンドボックスで解析し、PR 上で CodeQL / CI が自動実行される。<code>@copilot</code> にコメントして <b>反復修正</b> できる</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">⏱️</span><span class="ctl-name">所要時間</span><span class="ctl-when">秒 vs 分</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v"><b>数秒</b>。同期処理なので画面を見ながら判断できる</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v"><b>数分</b>。バックグラウンドの非同期処理で、セッションは最大 59 分</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">💰</span><span class="ctl-name">ライセンスとコスト</span><span class="ctl-when">無料 vs 従量</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v"><b>無料</b>。Copilot ライセンス不要、AI クレジットも消費しない。Code Security / GHAS があれば追加費用ゼロ</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">Copilot 有料プラン（クラウドエージェント有効）が必要。<b>AI クレジット + Actions 分</b> を消費する</span></p>
</div>
</details>
</div>
</div>

> 🔑 **使い分けの目安** — まず **Autofix** で素早く局所修正（無料）。複数ファイルや大きめのリファクタが必要なものだけ **Agentic Autofix** にエスカレーションする。

## Security Campaigns — 組織横断で計画的に修正

アラートは **見つけた後の運用**が本番。件数が多い組織ほど、生のアラート一覧を上から潰すのではなく **期限付きのキャンペーン**として回す。

<div class="rem-widget">
<p class="rem-hint">▸ ステップをクリックすると詳細が出ます</p>
<div class="rem-flow">
<div class="rem-row">
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🎯</span><span class="rem-name">対象を絞る</span></summary>
<div class="rem-plate">
<p class="rem-title">🎯 対象を絞る — 全社一斉にしない</p>
<p class="rem-why"><code>Org → Security and quality → Campaigns → New campaign</code> から <b>From template</b> / <b>From code scanning filters</b> を選ぶ。</p>
<p class="rem-why">severity / CWE / クエリ / 言語 / repo / team / 経過日数で絞り込む。repo custom property（例 <code>props.BusinessPriority:Urgent</code>）で「守るべき repo」だけに寄せるのが定石。上限は <b>1000 アラート</b>。</p>
</div>
</details>
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">⚡</span><span class="rem-name">優先度</span></summary>
<div class="rem-plate">
<p class="rem-title">⚡ 優先度 — 「終わるリスト」にする</p>
<p class="rem-why">まず <b>critical / high</b> と、実際に到達可能なデータフローを持つものから。<code>security-extended</code> のバックログを丸ごと積むと誰もやらない。</p>
<p class="rem-why">絞り込みプレビューで件数を見ながら調整する。<b>1 スプリントで終わる分量</b>まで削るのが、キャンペーンを機能させる唯一のコツ。</p>
</div>
</details>
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">👥</span><span class="rem-name">オーナー</span></summary>
<div class="rem-plate">
<p class="rem-title">👥 オーナー — 名前と期限をつける</p>
<p class="rem-why">キャンペーンには必ず <b>due date</b> と <b>campaign manager</b> を設定する。manager に指名できるのは <b>org owner / security manager</b> だけ。</p>
<p class="rem-why">アラートは CODEOWNERS / 指定チームにルーティングされ、公開するとアラートが見える全員に通知が飛び、各 repo の Security タブにも表示される。</p>
</div>
</details>
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🤖</span><span class="rem-name">一括修正</span></summary>
<div class="rem-plate">
<p class="rem-title">🤖 一括修正 — Copilot にまとめて渡す</p>
<p class="rem-why">Autofix 対応アラートを一括選択 → <b>Assign Copilot</b> で repo ごとに 1 つの PR を自動生成できる（Agentic Autofix、AI クレジットを消費）。</p>
<p class="rem-why">残りは Autofix の提案を <b>batch apply</b> で PR にまとめて適用。ダッシュボードで open / fixed / overdue が burn down していく。</p>
</div>
</details>
</div>
<div class="rem-screen" style="min-height:11.4em"><p class="rem-empty">ステップを選んでください ▸</p></div>
</div>
</div>

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">About security campaigns（GitHub Docs）↗</a>

## 始め方（最短ルート）

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Repo → Settings → Code security</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 1 · DEFAULT SETUP</span>
    </div>
    <p><strong>Set up CodeQL → Default</strong> だけ。言語は自動検出され、push と PR で自動実行される。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>… → Copilot Autofix</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 2 · AUTOFIX</span>
    </div>
    <p>アラート画面に <strong>Generate fix</strong> が出る。<strong>追加費用なし</strong>。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Org → Settings → Code security</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 3 · 一括展開</span>
    </div>
    <p><strong>Security configuration</strong> を作って新規・既存リポに一括適用。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Repo → Settings → Rules</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 4 · マージ保護</span>
    </div>
    <p>Code Scanning は単体では <strong>マージを止めない</strong>。ruleset で明示的に required にする。</p>
  </div>
</div>

結果は **Security タブ** と PR の **Files changed** タブに出る。まず 1 リポで Default setup を試し、アラートの出方を見てから Org 展開するのが安全。

> ⚠️ 展開前に **Actions 分の見積り**を。repo 数 × 対応言語数 × (push + PR + 週次) が実行回数になる。

## Advanced setup と SARIF 連携

Default で足りないとき（monorepo、特殊なビルド、カスタムクエリ、他社ツール併用）は workflow を自分で書く。

```yaml
# .github/workflows/codeql.yml
name: CodeQL
on:
  push: { branches: [main] }
  pull_request: { branches: [main] }
  schedule: [{ cron: '30 5 * * 1' }]
jobs:
  analyze:
    runs-on: ubuntu-latest
    permissions: { security-events: write, contents: read }
    strategy:
      matrix: { language: [javascript, python] }
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with: { languages: '${{ matrix.language }}', queries: security-extended }
      - uses: github/codeql-action/analyze@v3

      # サードパーティ SAST（Semgrep / Snyk / ESLint security）も同じ画面に同居する:
      - uses: github/codeql-action/upload-sarif@v3
        with: { sarif_file: results.sarif }
```

> 💡 `runs-on` を **self-hosted runner** にすれば Actions 分の課金は発生しない。大規模展開でコストが問題になる場合の第一手。

## 料金 — 3 つのメーターで課金される

<p class="spec-hint">▸ ＋ をクリックすると詳細が開きます</p>

<div class="spec-widget">
<table style="table-layout:fixed">
<colgroup><col style="width:22%" /><col style="width:40%" /><col style="width:38%" /></colgroup>
<thead>
<tr><th style="white-space:normal">コスト</th><th>どう測られるか</th><th>知っておくこと</th></tr>
</thead>
<tbody>
<tr>
<td style="white-space:normal">💺 ライセンス</td>
<td><b>GitHub Code Security $30 / active committer / 月</b>。active = 直近 <b>90 日</b> に、有効な repo へ push された commit の作者。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">📦</span><span class="spec-key">何が含まれる</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">CodeQL（default / advanced）、<b>Copilot Autofix</b>、SARIF アップロード、Security overview、Security campaigns、カスタムクエリ。<b>Autofix は追加費用ゼロ</b>。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">👤</span><span class="spec-key">数え方</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">何リポ・何 Org に関わっても <b>1 人 1 ライセンス</b>。bot は対象外、退職後も <b>90 日</b> は消費し続ける。2025 年の分割以降は <b>GHAS フル契約なしで単体購入できる</b>。</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">⚙️ Actions 分</td>
<td>CodeQL は <b>Actions の workflow として動く</b>。private repo ではスキャンのたび <b>Actions 分を消費し課金される</b>。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🔁</span><span class="spec-key">いつ回るか</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">default / protected branch への push、その branch への PR、<b>週次スケジュール</b>。<b>repo 数 × 言語数 × 頻度</b> がそのまま分数になる。CodeQL 対応言語がない repo は 0 分。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💳</span><span class="spec-key">抑え方</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>self-hosted runner なら Actions 課金なし</b>。または Actions の予算を設定する。<b>Code Security ライセンスに Actions 分は含まれない</b> — 別メーターだと理解しておく。</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">🤖 AI クレジット</td>
<td>Copilot に <b>修正まで任せた場合だけ</b> 発生する。<b>Autofix（提案）は無料</b>、<b>Agentic Autofix（エージェント）は従量</b>。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🆓</span><span class="spec-key">Copilot Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Copilot ライセンス <b>不要</b>、AI クレジットも <b>消費しない</b>。Code Security があれば追加費用ゼロで使える。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💸</span><span class="spec-key">Agentic Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">クラウドエージェントのセッションとして課金され、<b>AI クレジット + Actions 分</b> の両方を消費する。単価は <b>モデルと処理トークン量で変動</b>（1 AI クレジット = $0.01）。ユーザー単位の予算は必ず停止するが、Org 予算はプール消費後にしか効かない。</p>
</details>
</div>
</td>
</tr>
</tbody>
</table>
</div>

> 🆓 **public repo は 3 つとも実質ゼロ** — CodeQL も Copilot Autofix も無料で、標準 GitHub-hosted runner の Actions 分も無料（larger runner は除く）。

## repo 種別ごとの利用条件 <a class="h2-doc" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<table class="availability-table">
<thead>
<tr><th scope="col">機能</th><th scope="col">Public repo</th><th scope="col">Private repo<br>Code Security なし</th><th scope="col">Private repo<br>Code Security あり</th></tr>
</thead>
<tbody>
<tr><td>Code Scanning 本体</td><td>✅ 無料</td><td>❌</td><td>✅ 含まれる</td></tr>
<tr><td>Security campaigns</td><td>❌</td><td>❌</td><td>✅ 含まれる</td></tr>
<tr><td>Actions 分</td><td>無料※</td><td>対象外</td><td>別途使用量に応じる※</td></tr>
</tbody>
</table>

> 📦 **本体**: CodeQL、カスタムクエリ、SARIF アップロード、対応する Autofix 提案、PR 注釈、Security overview。
>
> 💰 **Actions※**: Public の標準 hosted runner は無料。Private は付属の無料枠を消費し、超過分が課金される。Larger runner は常に課金。
>
> ⚠️ **Public → private**: Code Scanning を継続するには Code Security が必要。

## Code Security Risk Assessment(無料の棚卸しスキャン)

1 クリックで Org 内の **最もアクティブな最大 20 リポジトリ** を CodeQL スキャンし、どこに脆弱性が眠っているかを可視化する。**GHAS / Code Security ライセンス不要、完全無料**（2026 年 4 月 GA）。

- 🔎 **対象** — 最近のコミットが活発な repo を最大 20 件（毎回選び直し可）
- 📊 **出力** — **重大度・言語・ルール種別** 別のレポート、**Copilot Autofix で修正可能な件数** も表示
- 🕒 **頻度** — **90 日に 1 回** 再実行可。実行できるのは Org owner / security manager のみ
- 🚀 **動かし方** — `Org → Security → Assessments → Run code security risk assessment`
- 🆓 **コスト** — ライセンス不要、Actions 分も消費しない — 購入前の判断材料に最適

> 📊 Secret Risk Assessment（<a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Scanning ↗</a>）とセットで、組織のセキュリティ姿勢を 1 日で可視化できる。実数を見てから **Code Security 導入** を判断するのが定石。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment ↗</a> / <a class="retro-link" href="https://github.blog/security/application-security/how-exposed-is-your-code-find-out-in-minutes-for-free/" target="_blank" rel="noopener noreferrer">How exposed is your code? ↗</a>
