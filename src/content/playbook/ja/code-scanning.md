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
    label: AI-powered security detections in pull requests
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections
  - group: 📖 公式ドキュメント
    label: "Changelog: AI Scan for pull request APIs (public preview)"
    url: https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview/
  - group: 📖 公式ドキュメント
    label: Resolving code scanning alerts
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts
  - group: 📖 公式ドキュメント
    label: Configuring default setup
    url: https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
  - group: 📖 公式ドキュメント
    label: Autofix for code scanning
    url: https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning
  - group: 📖 公式ドキュメント
    label: Managing access to Agentic Autofix
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning
  - group: 📖 公式ドキュメント
    label: Managing Copilot Autofix (separate controls)
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning
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
    label: "Agentic autofix now uses Copilot Memory (2026-09-25)"
    url: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory/
  - group: 📰 Recent Changelog
    label: "Agentic Autofix general availability (2026-10-15)"
    url: https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability
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

## Code Scanning と CodeQL は別物 <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Code Scanning は GitHub の機能、CodeQL は解析エンジンの 1 つ**。PR では AI findings が補完し、他社ツールの結果も SARIF で取り込める。

<div class="det-widget det-compact">
<p class="det-hint">▸ クリックで詳細</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-name">Code Scanning（機能）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-title">Code Scanning — GitHub 側の受け皿</span></p>
<p class="det-why"><b>静的解析</b>（CodeQL、他社ツール）と <b>AI による検出</b>の結果を GitHub 上に集約して見せる <b>機能</b>。Security タブのアラート一覧、PR の Files changed へのインラインコメント、マージ保護、Security overview、REST / GraphQL API、Issue 連携。<b>エンジンが何であろうと結果はここに集まる</b>。</p>
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
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI findings（PR のみ）</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">AI security detections</span></p>
<p class="det-why">PHP、Bash、HCL、Dockerfile など、未対応の言語やフレームワークを対象に <b>CodeQL を補完</b>。<b>PR のみ</b>で、全体スキャンやバックログのアラートはない。助言扱いでマージをブロックしない。オプトインと <b>CodeQL default setup</b> が必要で、<b>AI クレジット</b>を消費する。有効化は UI だけでなく <b>新しい REST API</b>（Public preview）で org/repo 単位に切り替え可能に。</p>
<p class="det-doc">Public preview: GHAS + Copilot ライセンス。<a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections" target="_blank" rel="noopener noreferrer">📘 Docs ↗</a> · <a class="retro-link" href="https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview/" target="_blank" rel="noopener noreferrer">📘 API changelog ↗</a></p>
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

## 主な機能 <input type="checkbox" id="demo-codeql-setup" class="demo-toggle" /><label class="h2-demo" for="demo-codeql-setup">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-codeql-setup" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">CodeQL Advanced setup</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-codeql-setup" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">リポジトリの設定を開く</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/settings/security_analysis" target="_blank" rel="noopener noreferrer">ghas-test-1 → Advanced Security ↗</a> を開き、<b>Code scanning → CodeQL analysis</b> を見せる。</p>
<p>未設定なら <b>Set up → Advanced</b> が入口。このデモリポジトリには既に workflow があるので、設定を切り替えず既存ファイルを開く。</p>
</li>
<li>
<p class="demo-step-title">ADVANCED SETUP の中身</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/blob/main/.github/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">codeql.yml ↗</a> で、<code class="demo-path">on</code> の push / PR / schedule、言語の <code class="demo-path">matrix</code>、ランナーの <code class="demo-path">runs-on</code> を順に見せる。</p>
<p>C/C++ は <b>build-mode: manual</b> と <code class="demo-path">make -C src/c</code> / <code class="demo-path">make -C src/cpp</code>。他の言語は <b>none</b>。<b>queries: security-and-quality</b> と C/C++ の <b>CERT / MISRA packs</b> も指し示す。</p>
<p>この packs は <a href="https://github.com/github/codeql-coding-standards" target="_blank" rel="noopener noreferrer">github/codeql-coding-standards ↗</a> のもの。追加できるクエリパックの例として紹介する（AUTOSAR C++14 / CERT C, C++ / MISRA C, C++）。</p>
<p class="demo-out">Advanced setup では、ビルド方法や実行条件まで<b>バージョン管理された Actions workflow</b>で制御する。</p>
</li>
<li>
<p class="demo-step-title">設定から実行結果へ</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/actions/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">Actions → CodeQL ↗</a> の既存 run を開き、言語別の <b>Analyze</b> job と初期化、ビルド、解析のログを見せる。</p>
<p>最後に <a href="https://github.com/theomonfort-org/ghas-test-1/security/code-scanning" target="_blank" rel="noopener noreferrer">Security → Code scanning ↗</a> でアラートへ戻る。</p>
<p class="demo-out">画面説明だけなら workflow の変更やコミットは不要。既存のスキャンを止めずに見せる。</p>
</li>
</ol>
</div>
</div>

**まず Default setup**。足りなければ repository property でカスタマイズし、独自ビルドが必要なときだけ Advanced へ。

<div class="ctl-widget">
<p class="ctl-hint">▸ + をクリックして詳細を表示</p>
<div class="ctl-list">
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🟢</span><span class="ctl-name">Default setup</span><span class="ctl-when">1 クリック、組織全体</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/setup-types" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v"><b>workflow ファイル不要。</b>CodeQL 対応言語を自動検出し、新しい言語が増えれば自動で追加</span></p>
<p class="ctl-row"><span class="ctl-k">実行タイミング</span><span class="ctl-v">default / <b>protected branch</b> への push、それらへの PR、<b>週次スケジュール</b></span></p>
<p class="ctl-row"><span class="ctl-k">展開</span><span class="ctl-v"><b>security configuration</b> で組織の全リポジトリに一括適用</span></p>
</div>
</details>
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧩</span><span class="ctl-name">Custom queries</span><span class="ctl-when">Default setup + repo property</span><a class="ctl-doc" href="https://github.blog/changelog/2026-08-04-customize-code-scanning-default-setup-at-scale/" target="_blank" rel="noopener noreferrer">Changelog</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">独自クエリ（例: <b>コーディング規約</b>、社内ルール）を <b>Advanced に切り替えずに</b>追加</span></p>
<p class="ctl-row"><span class="ctl-k">方法</span><span class="ctl-v"><code>github-codeql-config-file</code> で<b>中央の設定ファイル</b>（クエリ、除外パス、threat model）をマージ。<code>github-codeql-extra-queries</code> はクエリの追加のみ</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v"><b>組織全体の既定値</b>を設定し、リポジトリごとの上書きを許可するかは org owner が決める。GA</span></p>
</div>
</details>
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛠️</span><span class="ctl-name">Advanced setup</span><span class="ctl-when">自前の workflow</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v"><code>.github/workflows/codeql.yml</code> を自分で持つ。コンパイル言語の<b>独自ビルド</b>、matrix、トリガーやスケジュールを制御</span></p>
<p class="ctl-row"><span class="ctl-k">Actions 以外</span><span class="ctl-v">他の CI で <b>CodeQL CLI</b> を実行、または他社ツールの結果を <b>SARIF</b> でアップロード</span></p>
</div>
</details>
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🚧</span><span class="ctl-name">Merge protection</span><span class="ctl-when">PR のマージ前</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">PR 上</span><span class="ctl-v">新しいアラートは <code>github-advanced-security[bot]</code> が <b>Files changed</b> に注釈として表示</span></p>
<p class="ctl-row"><span class="ctl-k">マージ条件</span><span class="ctl-v">Ruleset の <b>Require code scanning results</b> で、指定した重大度のアラートがある間、または必須ツールの解析が終わるまでマージをブロック</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v">Repo / Org（Enterprise プラン）。ruleset がなければ code scanning は<b>マージを止めない</b></span></p>
</div>
</details>
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤖</span><span class="ctl-name">AI findings</span><span class="ctl-when">PR のみ、public preview</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">CodeQL が対応しない範囲を AI が検査: <b>PHP / Shell / Terraform / Dockerfile</b></span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v"><b>PR のみ</b>。リポジトリ全体のスキャン、バックログのアラート、マージゲートはなし。オプトインで <b>CodeQL default setup</b> が必要</span></p>
</div>
</details>
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔧</span><span class="ctl-name">Copilot Autofix</span><span class="ctl-when">アラート / PR 上</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">アラート、周辺コード、CodeQL の<b>データフロー経路</b>から修正パッチを提案</span></p>
<p class="ctl-row"><span class="ctl-k">どこで？</span><span class="ctl-v">PR ではインライン、バックログのアラートでは <b>Generate fix</b>。レビューしてから適用</span></p>
</div>
</details>
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🎯</span><span class="ctl-name">Agentic Autofix</span><span class="ctl-when">バックログ 1〜25 件</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v"><b>Assign to Copilot</b>: クラウドエージェントがリポジトリを調べて修正、検証し、<b>draft PR</b> を作成</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v">デフォルトブランチのバックログから 1〜25 件。キャンペーンも対象。<b>2026-10-15 に GA</b></span></p>
</div>
</details>
<details class="ctl-item" name="cs-capabilities">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🗺️</span><span class="ctl-name">Security campaigns</span><span class="ctl-when">組織横断の修正</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">期限付きのアラート集合（最大 1000 件）。campaign manager と期日を設定</span></p>
<p class="ctl-row"><span class="ctl-k">流れ</span><span class="ctl-v">各リポジトリの Security タブに表示され、開発者が Autofix や Copilot で修正</span></p>
</div>
</details>
</div>
</div>

## シフトレフト: PR で直す理由

脆弱性を最も安く直せるのは、それを持ち込んだ PR の中。マージされた時点でセキュリティ負債になり、負債はなかなか返済されない。

<div class="tbl-compact">

| | 🟢 PR の中 | 🔴 マージ後 |
| --- | --- | --- |
| 🧠 文脈 | 作成者の記憶がまだ新しい | 数週間後に別の誰かが読み解き直す |
| 🔁 修正コスト | 同じレビューでコミット 1 つ | 新規チケット、PR、レビュー、デプロイ |
| 🚀 露出 | 本番に届かない | 本番に出て、修正されるまで残る |

</div>

- 📉 **マージ後は放置されがち**: マージ済みコードのセキュリティ負債のうち、これまで対応されてきたのは **10%** だけ（<a class="retro-link" href="https://github.blog/security/application-security/found-means-fixed-reduce-security-debt-at-scale-with-github-security-campaigns/" target="_blank" rel="noopener noreferrer">GitHub&nbsp;のデータ&nbsp;↗</a>）
- ⏱️ **PR の中なら速い**: PR で検出したアラートは、Copilot Autofix で修正までの中央値 **28 分**、手動では **1.5 時間**（<a class="retro-link" href="https://github.blog/news-insights/product-news/secure-code-more-than-three-times-faster-with-copilot-autofix/" target="_blank" rel="noopener noreferrer">GitHub,&nbsp;2024&nbsp;↗</a>）

## Copilot Autofix: 修正提案 <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Copilot Autofix は **対応するアラートに修正パッチを提案**する。レビューとテストをしてから適用するもので、修正の成功が保証されるわけではない。

- 🤖 **入力**: アラートの詳細、周辺コード、CodeQL のデータフロー経路を使って修正を提案。
- 💬 **PR 上**: 対応するアラートにインラインの修正提案が自動表示される。
- 🛠️ **Agentic Autofix がオフのデフォルトブランチのバックログ**: Copilot Autofix が有効で対応するアラートなら **Generate fix → Create PR with fix**。
- 🆓 **料金**: 従来の Autofix は Copilot ライセンス不要で AI クレジットも消費しない。Code Security に含まれ、Public repo は無料。
- 🔌 **有効化**: 管理者が無効にしない限り、CodeQL で既定で利用可能。

## Agentic Autofix（GA） <a class="h2-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-code-scanning-pr" class="demo-toggle" /><label class="h2-demo" for="demo-code-scanning-pr">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-code-scanning-pr" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Agentic Autofix: settings to alerts</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-code-scanning-pr" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">1. ENTERPRISE で許可（該当する場合）</p>
<p>Enterprise owner または security manager が <code class="demo-path">Policies → Advanced Security → Agentic Autofix</code> で <code class="demo-path">All organizations: Allowed</code> を選ぶ。Enterprise に属さない組織では省略。<a href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">設定ドキュメント ↗</a></p>
<p class="demo-out">Allowed は組織での設定を許可するだけで、有効化はしない。展開前に課金方法と Code Security AI Credits の予算を確認する。</p>
</li>
<li>
<p class="demo-step-title">2. 組織の 2 つの設定を見せる</p>
<p>Organization owner または security manager として <a href="https://github.com/organizations/theomonfort-org/settings/security_analysis" target="_blank" rel="noopener noreferrer">theomonfort-org の Advanced Security 設定 ↗</a> を開く。<b>Global settings → Code scanning</b> で <b>Copilot Autofix</b> と <b>Agentic Autofix</b> を確認する。</p>
<p><b>Copilot Autofix</b> は従来の修正提案を制御。エージェントによる修正を使うには <code class="demo-path">Agentic Autofix → On</code>。Preview 利用組織も GA 後に再有効化が必要。</p>
<p class="demo-out">On にするとデモ repo だけでなく、組織内の対象 repo で既定で有効になる。組織全体への展開を意図しない場合、設定の紹介だけに留めて切り替えない。</p>
</li>
<li>
<p class="demo-step-title">3. REPOSITORY の設定を確認</p>
<p>選んだデモ repo で <code class="demo-path">Settings → Advanced Security → Code Security → Agentic Autofix</code> を開く。Repository admin は <b>Off</b> で除外し、上位設定で許可されていれば <b>On</b> に戻せる。従来の提案も使うなら <b>Copilot Autofix</b> はオンのままにする。</p>
<p class="demo-out">有効化後は write 権限のあるユーザーがデフォルトブランチのバックログを Copilot に割り当てられる。Copilot ライセンスは不要。設定をオンにするだけでは修正セッションは始まらない。</p>
</li>
<li>
<p class="demo-step-title">PR の SECURITY BOT</p>
<p><a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57" target="_blank" rel="noopener noreferrer">octodemo/octocat_supply-automatic-octo-funicular#57 ↗</a> を開き、<b>Files changed</b> で <code class="demo-path">github-advanced-security[bot]</code> のコメントを見せる。</p>
<p class="demo-out">Copilot code review とは別の検出結果。意図的に脆弱性を含むデモ PR なので、マージしない。</p>
</li>
<li>
<p class="demo-step-title">CODEQL と AI 検出を見分ける</p>
<p><a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57#discussion_r3976259388" target="_blank" rel="noopener noreferrer">CodeQL の XSS 指摘 ↗</a> は <code class="demo-path">api/src/routes/cart.ts</code>。ルール名と <b>Show more details</b> から Security のアラートへ進める。</p>
<p><code class="demo-path">CartShareController.php</code> の <a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57#discussion_r3976270848" target="_blank" rel="noopener noreferrer">AI の SQL injection 指摘 ↗</a> と <a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57#discussion_r3976270856" target="_blank" rel="noopener noreferrer">command injection 指摘 ↗</a> では、リスクの説明と修正案を見せる。</p>
<p class="demo-out">投稿者は同じ bot でも、AI 検出は <b>PR 上のみ</b>。Security のバックログアラートにはならない。</p>
</li>
<li>
<p class="demo-step-title">検出から AGENTIC AUTOFIX へ</p>
<p>リンク先の PR は <b>octodemo</b> にあり、theomonfort-org の設定は適用されない。<a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/security/code-scanning/33" target="_blank" rel="noopener noreferrer">CodeQL の XSS アラート ↗</a> は参考として開く。修正デモでは、設定済み repo に存在する<b>デフォルトブランチのバックログアラート</b>を選ぶ。PR のみにあるアラートは割り当て不可。</p>
<p>Agentic Autofix が有効なら <b>Assign to Copilot</b> を見せる。オフの場合は、従来の Copilot Autofix が有効で対応するアラートに限り <b>Generate fix</b> が使える。</p>
<p class="demo-out">bot の指摘と修正セッションは別物。<b>Assign to Copilot</b> を実行すると、エージェントが修正を進めて<b>別のドラフト PR</b>を作る。ボタンの紹介だけならセッション開始は不要。</p>
</li>
</ol>
</div>
</div>

**2026-10-15 に GA。** Agentic Autofix が有効なら、デフォルトブランチのバックログで **Generate fix は Assign to Copilot に置き換わる**。

<div class="ctl-widget">
<p class="ctl-hint">▸ + をクリックして詳細を表示</p>
<div class="ctl-list">
<details class="ctl-item" name="cs-agentic">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🎯</span><span class="ctl-name">依頼</span><span class="ctl-when">1〜25 件</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">対象</span><span class="ctl-v"><b>デフォルトブランチのバックログ 1〜25 件</b>。キャンペーンも対象。1 回の割り当て → 1 セッション → 1 PR。<b>PR / 他ブランチのみにあるアラートは対象外</b></span></p>
</div>
</details>
<details class="ctl-item" name="cs-agentic">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔁</span><span class="ctl-name">セッション</span><span class="ctl-when">ドラフト PR</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">流れ</span><span class="ctl-v">探索 → 修正 → CodeQL 再実行と反復 → 検証内容付きの<b>ドラフト PR</b>。セッションログを確認し、セッションや PR コメントで追加修正を依頼</span></p>
</div>
</details>
<details class="ctl-item" name="cs-agentic">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧠</span><span class="ctl-name">Copilot Memory</span><span class="ctl-when">修正パターンを学習</span><a class="ctl-doc" href="https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory/" target="_blank" rel="noopener noreferrer">Changelog</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">参照</span><span class="ctl-v">既存のメモリを参照して修正に活かす（Copilot Memory 有効時）</span></p>
<p class="ctl-row"><span class="ctl-k">保存</span><span class="ctl-v">修正パターンを新しいメモリとして保存。<b>Copilot code review やクラウドエージェント</b>にもリポジトリ固有のセキュアな書き方が伝わる</span></p>
</div>
</details>
<details class="ctl-item" name="cs-agentic">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛂</span><span class="ctl-name">前提</span><span class="ctl-when">Copilot ライセンス不要</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">提供範囲</span><span class="ctl-v">Enterprise Cloud の Code Security / GHAS 向けに GA。データレジデンシーも対象。現行 Docs は個人所有の対象 public repo も記載。Managed user の個人 repo は対象外</span></p>
<p class="ctl-row"><span class="ctl-k">条件</span><span class="ctl-v"><b>Agentic Autofix の有効化</b>、課金方法の設定、repo の write 権限。<b>Copilot ライセンスや事前の修正提案は不要</b>。設定は次のスライド</span></p>
</div>
</details>
<details class="ctl-item" name="cs-agentic">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">💸</span><span class="ctl-name">料金</span><span class="ctl-when">AI クレジット + Actions</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Agentic</span><span class="ctl-v"><b>Code Security AI Credits + Actions 分</b>。Public repo も対象。課金画面の AI usage では <b>Advanced Security</b> として表示</span></p>
<p class="ctl-row"><span class="ctl-k">予算</span><span class="ctl-v">対象の付属クレジットを先に使い、超過分は従量課金。<b>Code Security AI Credits</b> の SKU 予算を設定する</span></p>
</div>
</details>
<details class="ctl-item" name="cs-agentic">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">⚠️</span><span class="ctl-name">検証</span><span class="ctl-when">ベストエフォート</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">制約</span><span class="ctl-v">カスタムクエリ、<code>security-extended</code>、他社ツールの修正は確認できない。未検証や誤検知の疑いは PR に記載。<b>マージ前にレビューとテストが必要</b></span></p>
</div>
</details>
</div>
</div>

## Autofix と Agentic Autofix の使い分け <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**2 つの独立した設定**。クラウドエージェントのスイッチではない（2026-10-19 時点）。

<div class="ctl-widget">
<p class="ctl-hint">▸ 各レベルを開くと具体的な設定を表示</p>
<div class="ctl-list">
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">⚖️</span><span class="ctl-name">比較</span><span class="ctl-when">修正提案 vs エージェント</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">従来型</span><span class="ctl-v">対応アラート 1 件の修正案をレビューして適用。<b>AI クレジット消費なし</b></span></p>
<p class="ctl-row"><span class="ctl-k">Agentic</span><span class="ctl-v"><b>デフォルトブランチのバックログ 1〜25 件</b>を探索、修正、検証してドラフト PR を作成。<b>Code Security AI Credits + Actions</b>。どちらも Copilot ライセンス不要</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🏢</span><span class="ctl-name">Enterprise</span><span class="ctl-when">許可 ≠ 有効化</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">場所</span><span class="ctl-v"><b>Policies → Advanced Security → Agentic Autofix → All organizations: Allowed</b>。Enterprise owner または security manager が設定</span></p>
<p class="ctl-row"><span class="ctl-k">効果</span><span class="ctl-v">組織での設定を許可するだけで、<b>repo はまだ有効にならない</b>。<b>Copilot Autofix</b> は別ポリシー。Enterprise に属さない組織ではこの段階を省略</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🏗️</span><span class="ctl-name">Organization</span><span class="ctl-when">対象 repo を有効化</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">場所</span><span class="ctl-v"><b>Settings → Advanced Security → Global settings → Code scanning → Agentic Autofix → On</b>。Organization owner または security manager が設定</span></p>
<p class="ctl-row"><span class="ctl-k">効果</span><span class="ctl-v">対象 repo で<b>既定で有効</b>になるため、除外する repo を事前に調整。Enterprise で禁止されていれば上書き不可</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">Repository</span><span class="ctl-when">除外 / 再有効化</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">場所</span><span class="ctl-v"><b>Settings → Advanced Security → Code Security → Agentic Autofix → On / Off</b>。Repository admin が設定</span></p>
<p class="ctl-row"><span class="ctl-k">効果</span><span class="ctl-v">上位設定の範囲内で除外 / 再有効化できる。対象となる個人所有 public repo はここで直接設定。Managed user の個人 repo は対象外</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔧</span><span class="ctl-name">表示されるボタン</span><span class="ctl-when">独立した制御</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Agentic on</span><span class="ctl-v">デフォルトブランチのバックログで <b>Assign to Copilot</b>。有効化ではなく、割り当てが従量課金セッションを開始する</span></p>
<p class="ctl-row"><span class="ctl-k">Agentic off</span><span class="ctl-v">Copilot Autofix がオンで対応するアラートに限り <b>Generate fix → Create PR with fix</b>。両方オフなら AI 修正の入口なし</span></p>
<p class="ctl-row"><span class="ctl-k">従来型</span><span class="ctl-v"><b>Copilot Autofix</b> は CodeQL で既定でオン。同じ設定階層で独立して制御し、上位での禁止は下位で解除できない。PR の提案はエージェント修正とは別</span></p>
</div>
</details>
</div>
</div>

> ⚠️ Preview 利用組織も **GA 後に Agentic Autofix の再有効化が必要**。

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
<p class="rem-why"><b>Agentic Autofix が有効</b>なら、<b>デフォルトブランチのバックログ 1〜25 件</b>を選び Copilot に依頼する。<b>Code Security AI Credits + Actions 分</b>を消費する。</p>
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
      <code>Alert → Fix</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 2 · AUTOFIX</span>
    </div>
    <p>デフォルトブランチのバックログで、Agentic Autofix がオンなら <strong>Assign to Copilot</strong>（従量）。オフなら、従来の Autofix が有効で対応するアラートに <strong>Generate fix</strong>（AI クレジット不要）。</p>
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

結果は **Security タブ** と PR の **Files changed** タブに出る。まず 1 リポで試し、**Actions 使用量**を見積もってから展開する。

## Advanced setup と SARIF 連携

Default で足りないとき（monorepo、特殊なビルド、他社ツール併用）は workflow を自分で書く。

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

## 料金: 3 つのメーター <a class="h2-doc" href="https://github.com/security/plans" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<p class="spec-hint">▸ ＋ をクリックすると詳細が開きます</p>

<div class="spec-widget spec-compact">
<table class="compact-table" style="table-layout:fixed">
<colgroup><col style="width:22%" /><col style="width:40%" /><col style="width:38%" /></colgroup>
<thead>
<tr><th style="white-space:normal">コスト</th><th>どう測られるか</th><th>知っておくこと</th></tr>
</thead>
<tbody>
<tr>
<td style="white-space:normal">💺 ライセンス</td>
<td><b>$30 / active committer / 月</b><br>GitHub Code Security</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">📦</span><span class="spec-key">何が含まれる</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">CodeQL（default / advanced）、<b>Copilot Autofix</b>、SARIF アップロード、Security overview、Security campaigns、カスタムクエリ。<b>Autofix は追加費用ゼロ</b>。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">👤</span><span class="spec-key">数え方</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">直近 <b>90 日</b> に有効な repo へコミットが push された作者が active committer。Enterprise 内の対象 repo や Org をまたいでも <b>1 人 1 ライセンス</b>。GitHub App の bot は対象外。Code Security は <b>単体購入できる</b>。</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">⚙️ Actions 分</td>
<td>CodeQL は <b>Actions で実行</b>。Private のスキャンは実行分を消費し、超過分が課金される。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🔁</span><span class="spec-key">いつ回るか</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Default setup は default / protected branch への push、そこへの PR、<b>週次スケジュール</b>で動く。実行分は <b>各実行の時間、repo 数、言語数、頻度</b>で決まる。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💳</span><span class="spec-key">抑え方</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>self-hosted runner なら Actions 課金なし</b>。または Actions の予算を設定する。<b>Code Security ライセンスに Actions 分は含まれない</b> — 別メーターだと理解しておく。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">📊</span><span class="spec-key">実測する</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Actions usage metrics を <b>workflow 名で絞れば</b>、CodeQL だけの消費分が出る。見積もりではなく実測値で議論できる。<br /><code>github.com/orgs/&lt;org&gt;/actions/metrics/usage?filters=codeql.yml</code></p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">🤖 AI クレジット</td>
<td><b>AI findings</b>（検知）と <b>Agentic Autofix</b>（修正）は従量課金。従来の Autofix 提案は無料。</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🔎</span><span class="spec-key">AI findings</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">オプトインで <b>CodeQL 非対応言語</b>（PHP / Shell / Terraform / Dockerfile）を <b>PR 上のみ</b>で AI 検査。修正を依頼しなくても AI クレジットを消費する。Public preview では <b>GHAS + Copilot ライセンス</b>と CodeQL default setup が必要。<a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🆓</span><span class="spec-key">Copilot Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Copilot ライセンス <b>不要</b>、AI クレジットも <b>消費しない</b>。Code Security があれば追加費用ゼロで使える。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💸</span><span class="spec-key">Agentic Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>2026-10-19 時点</b>、<b>Code Security AI Credits + Actions 分</b>を消費。Copilot ライセンス不要。対象の付属クレジットを先に使い、超過分は public repo も従量課金。<b>Code Security AI Credits</b> の SKU 予算を設定し、付属枠の消費後はハード予算で追加の従量利用を止められる。課金画面の AI usage では <b>Advanced Security</b> として表示。</p>
</details>
</div>
</td>
</tr>
</tbody>
</table>
</div>

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
