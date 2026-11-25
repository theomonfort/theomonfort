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
  hex: "#5eead4"
order: 19.5
category: secure
related: ['code-quality', 'github-advanced-security', 'dependabot', 'secret-scanning']
links:
  - group: 📖 公式ドキュメント
    label: About code scanning
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning
  - group: 📖 公式ドキュメント
    label: About AI Scan
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan
  - group: 📖 公式ドキュメント
    label: AI Scan for pull requests
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections
  - group: 📖 公式ドキュメント
    label: AI Scan for repositories
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan-for-repositories
  - group: 📖 公式ドキュメント
    label: AI applications scanning for pull requests
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-applications-scanning-for-pull-requests
  - group: 📰 Recent Changelog
    label: "AI Scan PR APIs (preview)"
    url: https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview/
  - group: 📰 Recent Changelog
    label: "Repository AI Scan (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview
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
    label: Agentic Autofix access
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning
  - group: 📖 公式ドキュメント
    label: Copilot Autofix controls
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning
  - group: 📖 公式ドキュメント
    label: SARIF support for code scanning
    url: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning
  - group: 🔬 CodeQL を深く知る
    label: About CodeQL (CodeQL docs)
    url: https://codeql.github.com/docs/codeql-overview/about-codeql/
  - group: 🔬 CodeQL を深く知る
    label: Writing CodeQL queries
    url: https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/
  - group: 🔬 CodeQL を深く知る
    label: Data flow / taint tracking
    url: https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/
  - group: 🔬 CodeQL を深く知る
    label: Open-source query packs
    url: https://github.com/github/codeql
  - group: 💰 料金
    label: Security plans ($30 / $19)
    url: https://github.com/security/plans
  - group: 💰 料金
    label: Billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 💰 料金
    label: Copilot credits (individual)
    url: https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing
  - group: 💰 料金
    label: Copilot credits (org pool)
    url: https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing
  - group: 💰 料金
    label: Billing for GitHub Actions
    url: https://docs.github.com/en/billing/concepts/product-billing/github-actions
  - group: 📖 公式ドキュメント
    label: Code security risk assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 📰 Recent Changelog
    label: "Autofix Memory (2026-09-25)"
    url: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory/
  - group: 📰 Recent Changelog
    label: "Agentic Autofix GA (2026-10-15)"
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

**Code Scanning は GitHub の機能、CodeQL は解析エンジンの 1 つ**。AI Scan が PR とデフォルトブランチを補完し、他社ツールの結果も SARIF で取り込める。

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
<p class="det-why"><b>対応言語:</b> C/C++、C#、Go、Java/Kotlin、JavaScript/TypeScript、Python、Ruby、Rust、Swift。<b>GitHub Actions ワークフロー</b>も解析対象。</p>
<p class="det-doc">2026-10-23 時点。<a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/codeql/codeql-code-scanning#about-codeql" target="_blank" rel="noopener noreferrer">📘 対応言語の公式ドキュメント ↗</a></p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI Scan</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">AI Scan</span></p>
<ul class="list-disc text-[0.86em] leading-[1.7] !my-0">
<li><b>PR（GA）:</b> CodeQL 未対応の変更を自動検査。PR 上の助言。</li>
<li><b>リポジトリ（preview）:</b> デフォルトブランチの全言語を手動スキャン。バックログアラートを作成。</li>
<li><b>AI アプリ / エージェント（preview）:</b> PR の間接的プロンプトインジェクションを検出。</li>
</ul>
<p class="det-doc">2026-11-11 時点。<a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan" target="_blank" rel="noopener noreferrer">📘 対象範囲と利用条件 ↗</a></p>
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
<div class="det-screen"><p class="det-empty">項目を選んでください ▸</p></div>
</div>
</div>


## CodeQL の仕組み <a class="h2-doc" href="https://codeql.github.com/docs/codeql-overview/about-codeql/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

処理は 2 段階。**コードを抽出してデータベース化**し、**クエリをコンパイルして評価**する。

<figure class="harness-map cs-architecture">
<svg viewBox="0 0 1100 365" role="img" aria-labelledby="cs-map-title cs-map-desc" xmlns="http://www.w3.org/2000/svg">
<title id="cs-map-title">CodeQL: コード抽出とクエリ評価</title>
<desc id="cs-map-desc">ソースコードまたはビルド監視から Extractor が database を生成。Schema は database の構造を定義し、Query と Libraries と共に compiler に入る。Evaluator はコンパイル、最適化したクエリと database から結果を生成。ビルド成果物は別系統。</desc>
<defs>
<marker id="cs-arrow" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="cs-arrowhead" /></marker>
<marker id="cs-data-arrow" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="cs-data-arrowhead" /></marker>
</defs>
<text x="20" y="27" class="cs-stage">01 / CREATE THE DATABASE</text>
<text x="680" y="27" class="cs-stage">02 / RUN THE QUERY</text>
<path d="M650 40V350" class="cs-divider" />
<g class="cs-connect" marker-end="url(#cs-arrow)">
<path d="M100 110V160" />
<path d="M180 192H235" />
<path d="M395 192H415V267H435" />
<path d="M100 225V300" />
<path d="M755 90V107H880V125" />
<path d="M987 90V107H880V125" />
<path d="M880 177V230" />
<path d="M880 282V310" />
<path d="M180 85H315V160" stroke-dasharray="5 5" />
</g>
<g class="cs-connect cs-data-connect" marker-end="url(#cs-data-arrow)">
<path d="M522 125V235" />
<path d="M610 92H635V151H780" />
<path d="M610 267H700V256H780" />
</g>
<rect x="20" y="60" width="160" height="50" class="cs-node" />
<rect x="20" y="160" width="160" height="65" class="cs-node" />
<rect x="235" y="160" width="160" height="65" class="cs-node" />
<rect x="435" y="60" width="175" height="65" class="cs-node cs-data-node" />
<rect x="435" y="235" width="175" height="70" class="cs-node cs-data-node" />
<rect x="20" y="300" width="170" height="45" class="cs-node cs-artifacts" />
<rect x="680" y="50" width="150" height="40" class="cs-node" />
<rect x="900" y="50" width="175" height="40" class="cs-node" />
<rect x="780" y="125" width="200" height="52" class="cs-node" />
<rect x="780" y="230" width="200" height="52" class="cs-node" />
<rect x="780" y="310" width="200" height="50" class="cs-node" />
<g text-anchor="middle">
<text x="100" y="92">Codebase</text>
<text x="100" y="187">Build system</text><text x="100" y="212" class="cs-small">if build-enabled</text>
<text x="315" y="187">Extractor</text><text x="315" y="212" class="cs-small">code to data</text>
<text x="522" y="87">Schema</text><text x="522" y="112" class="cs-small">describes the data</text>
<text x="522" y="261">Database</text><text x="522" y="287" class="cs-small">exprs / stmts / types</text>
<text x="105" y="329">Build artifacts</text>
<text x="755" y="77">Query</text><text x="987" y="77">Libraries</text>
<text x="880" y="157">QL compiler</text><text x="880" y="262">QL evaluator</text>
<text x="880" y="341">Query results</text>
</g>
<text x="224" y="76" class="cs-small">source</text>
<text x="202" y="245" class="cs-small">monitors the build</text>
<text x="224" y="329" class="cs-small">Artifacts ≠ analysis database</text>
<text x="895" y="201" class="cs-small">Compiled query</text>
<text x="895" y="222" class="cs-small">(optimized)</text>
</svg>
</figure>

言語と <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages" target="_blank" rel="noopener noreferrer">build mode ↗</a> に応じて、ソースを直接抽出するか、ビルドを監視する。

## <span id="codeql-クエリの読み方">CodeQL クエリの読み方</span> <a class="h2-doc" href="https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

QL は宣言型言語。**バグの形を定義すると evaluator が該当箇所を探す**。SQL の `FROM / WHERE / SELECT` に近い。

```ql
import java                                      // ① ライブラリ
from IfStmt ifstmt, Block block                   // ② 要素
where
  block = ifstmt.getThen() and                    // ③ 条件
  block.getNumStmt() = 0                          // 空の then 節
select ifstmt, "This if-statement is redundant." // ④ 報告
```

セキュリティクエリは <a class="retro-link" href="https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/" target="_blank" rel="noopener noreferrer">DataFlow / TaintTracking ↗</a> で **sanitizer に遮られない source → sink** を探索。通常は <a class="retro-link" href="https://github.com/github/codeql" target="_blank" rel="noopener noreferrer">公開パック ↗</a> を使い、独自クエリは自社フレームワークの source / sink を補う。

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
<div class="det-screen"><p class="det-empty">カテゴリを選んでください ▸</p></div>
</div>
</div>

CodeQL 対応言語がなければ **CodeQL スキャンも Actions 分の消費もない**。対応言語一覧はスライド 2。

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

**まず Default setup**。独自ビルドが必要なら Advanced へ。

<div class="det-widget">
<p class="det-hint">▸ 項目をクリックして詳細を表示</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🟢</span><span class="det-name">Default setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Default setup</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/setup-types" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">1 クリック、組織全体</p>
<p class="det-why"><b>何をする？:</b> <b>workflow ファイル不要。</b>CodeQL 対応言語を自動検出し、新しい言語が増えれば自動で追加</p>
<p class="det-why"><b>実行タイミング:</b> default / <b>protected branch</b> への push、それらへの PR、<b>週次スケジュール</b></p>
<p class="det-why"><b>展開:</b> <b>security configuration</b> で組織の全リポジトリに一括適用</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧩</span><span class="det-name">Custom queries</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Custom queries</span><a class="ctl-doc" href="https://github.blog/changelog/2026-08-04-customize-code-scanning-default-setup-at-scale/" target="_blank" rel="noopener noreferrer">Changelog</a></p>
<p class="det-doc">Default setup + repo property</p>
<p class="det-why"><b>何をする？:</b> 独自クエリ（例: <b>コーディング規約</b>、社内ルール）を <b>Advanced に切り替えずに</b>追加</p>
<p class="det-why"><b>方法:</b> <code>github-codeql-config-file</code> で<b>中央の設定ファイル</b>（クエリ、除外パス、threat model）をマージ。<code>github-codeql-extra-queries</code> はクエリの追加のみ</p>
<p class="det-why"><b>対象範囲:</b> <b>組織全体の既定値</b>を設定し、リポジトリごとの上書きを許可するかは org owner が決める。GA</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-name">Advanced setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Advanced setup</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">自前の workflow</p>
<p class="det-why"><b>何をする？:</b> <code>.github/workflows/codeql.yml</code> を自分で持つ。コンパイル言語の<b>独自ビルド</b>、matrix、トリガーやスケジュールを制御</p>
<p class="det-why"><b>Actions 以外:</b> 他の CI で <b>CodeQL CLI</b> を実行、または他社ツールの結果を <b>SARIF</b> でアップロード</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🚧</span><span class="det-name">Merge protection</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Merge protection</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">PR のマージ前</p>
<p class="det-why"><b>PR 上:</b> 新しいアラートは <code>github-advanced-security[bot]</code> が <b>Files changed</b> に注釈として表示</p>
<p class="det-why"><b>マージ条件:</b> Ruleset の <b>Require code scanning results</b> で、指定した重大度のアラートがある間、または必須ツールの解析が終わるまでマージをブロック</p>
<p class="det-why"><b>対象範囲:</b> Repo / Org（Enterprise プラン）。ruleset がなければ code scanning は<b>マージを止めない</b></p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI Scan</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">AI Scan</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">PR / リポジトリ / AI アプリ</p>
<ul class="list-disc text-[0.88em] leading-[1.6] !my-0">
<li><b>PR（GA）:</b> CodeQL 未対応の変更を自動検査。PR 上の助言。</li>
<li><b>リポジトリ（preview）:</b> デフォルトブランチの全言語を手動スキャン。バックログアラートを作成。</li>
<li><b>AI アプリ / エージェント（preview）:</b> PR の間接的プロンプトインジェクションを検出。</li>
</ul>
<p class="det-why"><b>実行:</b> <a href="https://github.com/theomonfort-org/ghas-test-1/security/code-scanning" target="_blank" rel="noopener noreferrer">リポジトリスキャン ↗</a> / <a href="https://github.com/orgs/theomonfort-org/security/alerts/code-scanning" target="_blank" rel="noopener noreferrer">Org 一括スキャン ↗</a>（右上の <b>AI scan</b>）</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔧</span><span class="det-name">Copilot Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Copilot Autofix</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">アラート / PR 上</p>
<p class="det-why"><b>何をする？:</b> アラート、周辺コード、CodeQL の<b>データフロー経路</b>から修正パッチを提案</p>
<p class="det-why"><b>どこで？:</b> PR ではインライン、バックログのアラートでは <b>Generate fix</b>。レビューしてから適用</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎯</span><span class="det-name">Agentic Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Agentic Autofix</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">バックログ 1〜25 件</p>
<p class="det-why"><b>何をする？:</b> <b>Assign to Copilot</b>: クラウドエージェントがリポジトリを調べて修正、検証し、<b>draft PR</b> を作成</p>
<p class="det-why"><b>対象範囲:</b> デフォルトブランチのバックログから 1〜25 件。キャンペーンも対象。<b>2026-10-15 に GA</b></p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🗺️</span><span class="det-name">Security campaigns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Security campaigns</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">組織横断の修正</p>
<p class="det-why"><b>何をする？:</b> 期限付きのアラート集合（最大 1000 件）。campaign manager と期日を設定</p>
<p class="det-why"><b>流れ:</b> 各リポジトリの Security タブに表示され、開発者が Autofix や Copilot で修正</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">項目を選んでください ▸</p></div>
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
<p class="demo-out">この <b>AI Scan for pull requests</b> の検出結果は PR 上に残る。別機能の <b>AI Scan for repositories</b> は Security にバックログアラートを作成する。</p>
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

<div class="det-widget">
<p class="det-hint">▸ 項目をクリックして詳細を表示</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎯</span><span class="det-name">依頼</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">依頼</span></p>
<p class="det-doc">1〜25 件</p>
<p class="det-why"><b>対象:</b> <b>デフォルトブランチのバックログ 1〜25 件</b>。キャンペーンも対象。1 回の割り当て → 1 セッション → 1 PR。<b>PR / 他ブランチのみにあるアラートは対象外</b></p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔁</span><span class="det-name">セッション</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">セッション</span></p>
<p class="det-doc">ドラフト PR</p>
<p class="det-why"><b>流れ:</b> 探索 → 修正 → CodeQL 再実行と反復 → 検証内容付きの<b>ドラフト PR</b>。セッションログを確認し、セッションや PR コメントで追加修正を依頼</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧠</span><span class="det-name">Copilot Memory</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Copilot Memory</span><a class="ctl-doc" href="https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory/" target="_blank" rel="noopener noreferrer">Changelog</a></p>
<p class="det-doc">修正パターンを学習</p>
<p class="det-why"><b>参照:</b> 既存のメモリを参照して修正に活かす（Copilot Memory 有効時）</p>
<p class="det-why"><b>保存:</b> 修正パターンを新しいメモリとして保存。<b>Copilot code review やクラウドエージェント</b>にもリポジトリ固有のセキュアな書き方が伝わる</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛂</span><span class="det-name">前提</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">前提</span></p>
<p class="det-doc">Copilot ライセンス不要</p>
<p class="det-why"><b>提供範囲:</b> Enterprise Cloud の Code Security / GHAS 向けに GA。データレジデンシーも対象。現行 Docs は個人所有の対象 public repo も記載。Managed user の個人 repo は対象外</p>
<p class="det-why"><b>条件:</b> <b>Agentic Autofix の有効化</b>、課金方法の設定、repo の write 権限。<b>Copilot ライセンスや事前の修正提案は不要</b>。設定は次のスライド</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💸</span><span class="det-name">料金</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">料金</span></p>
<p class="det-doc">AI クレジット + Actions</p>
<p class="det-why"><b>Agentic:</b> <b>Code Security AI Credits + Actions 分</b>。Public repo も対象。課金画面の AI usage では <b>Advanced Security</b> として表示</p>
<p class="det-why"><b>予算:</b> 対象の付属クレジットを先に使い、超過分は従量課金。<b>Code Security AI Credits</b> の SKU 予算を設定する</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚠️</span><span class="det-name">検証</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">検証</span></p>
<p class="det-doc">ベストエフォート</p>
<p class="det-why"><b>制約:</b> カスタムクエリ、<code>security-extended</code>、他社ツールの修正は確認できない。未検証や誤検知の疑いは PR に記載。<b>マージ前にレビューとテストが必要</b></p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">項目を選んでください ▸</p></div>
</div>
</div>

## Autofix と Agentic Autofix の使い分け <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**2 つの独立した設定**。クラウドエージェントのスイッチではない（2026-10-19 時点）。

<div class="det-widget">
<p class="det-hint">▸ 項目をクリックして詳細を表示</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚖️</span><span class="det-name">比較</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">比較</span></p>
<p class="det-doc">修正提案 vs エージェント</p>
<p class="det-why"><b>従来型:</b> 対応アラート 1 件の修正案をレビューして適用。<b>AI クレジット消費なし</b></p>
<p class="det-why"><b>Agentic:</b> <b>デフォルトブランチのバックログ 1〜25 件</b>を探索、修正、検証してドラフト PR を作成。<b>Code Security AI Credits + Actions</b>。どちらも Copilot ライセンス不要</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏢</span><span class="det-name">Enterprise</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Enterprise</span></p>
<p class="det-doc">許可 ≠ 有効化</p>
<p class="det-why"><b>場所:</b> <b>Policies → Advanced Security → Agentic Autofix → All organizations: Allowed</b>。Enterprise owner または security manager が設定</p>
<p class="det-why"><b>効果:</b> 組織での設定を許可するだけで、<b>repo はまだ有効にならない</b>。<b>Copilot Autofix</b> は別ポリシー。Enterprise に属さない組織ではこの段階を省略</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏗️</span><span class="det-name">Organization</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Organization</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">対象 repo を有効化</p>
<p class="det-why"><b>場所:</b> <b>Settings → Advanced Security → Global settings → Code scanning → Agentic Autofix → On</b>。Organization owner または security manager が設定</p>
<p class="det-why"><b>効果:</b> 対象 repo で<b>既定で有効</b>になるため、除外する repo を事前に調整。Enterprise で禁止されていれば上書き不可</p>
<p class="det-why">⚠️ Preview 利用組織も <b>GA 後に Agentic Autofix の再有効化が必要</b>。</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📦</span><span class="det-name">Repository</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Repository</span></p>
<p class="det-doc">除外 / 再有効化</p>
<p class="det-why"><b>場所:</b> <b>Settings → Advanced Security → Code Security → Agentic Autofix → On / Off</b>。Repository admin が設定</p>
<p class="det-why"><b>効果:</b> 上位設定の範囲内で除外 / 再有効化できる。対象となる個人所有 public repo はここで直接設定。Managed user の個人 repo は対象外</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔧</span><span class="det-name">表示されるボタン</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">表示されるボタン</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">独立した制御</p>
<p class="det-why"><b>Agentic on:</b> デフォルトブランチのバックログで <b>Assign to Copilot</b>。有効化ではなく、割り当てが従量課金セッションを開始する</p>
<p class="det-why"><b>Agentic off:</b> Copilot Autofix がオンで対応するアラートに限り <b>Generate fix → Create PR with fix</b>。両方オフなら AI 修正の入口なし</p>
<p class="det-why"><b>従来型:</b> <b>Copilot Autofix</b> は CodeQL で既定でオン。同じ設定階層で独立して制御し、上位での禁止は下位で解除できない。PR の提案はエージェント修正とは別</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">項目を選んでください ▸</p></div>
</div>
</div>

## <span id="security-campaigns--組織横断で計画的に修正">Security Campaigns: 組織横断の修正</span> <a class="h2-doc" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">📖 Docs</a>

バックログを **期限付きのキャンペーン**にして、担当と締め切りを決める。

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
<div class="rem-screen"><p class="rem-empty">ステップを選んでください ▸</p></div>
</div>
</div>

## 私のおすすめ導入チェックリスト <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-code-checklist" class="demo-toggle" /><label class="h2-demo" for="demo-code-checklist">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-code-checklist" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Code Scanning checklist</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-code-checklist" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">1. 有効化とカバレッジ</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/settings/security_analysis" target="_blank" rel="noopener noreferrer">ghas-test-1 → Advanced Security ↗</a> / <a href="https://github.com/theomonfort-org/ghas-test-1/actions/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">CodeQL runs ↗</a>: 既存の Advanced setup と言語ごとのジョブを確認。設定済みの repo を Default setup に切り替えない。</p>
</li>
<li>
<p class="demo-step-title">2. 追加のクエリパック</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/blob/main/.github/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">ghas-test-1 → codeql.yml ↗</a> / <a href="https://github.com/github/codeql-coding-standards" target="_blank" rel="noopener noreferrer">MISRA / CERT / AUTOSAR packs ↗</a>: workflow で追加クエリやパックを設定する箇所を見せる。</p>
</li>
<li>
<p class="demo-step-title">3. MERGE PROTECTION</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/settings/rules/new?target=branch&amp;enforcement=disabled" target="_blank" rel="noopener noreferrer">ghas-test-1 → New branch ruleset ↗</a>: <b>Require code scanning results → CodeQL</b>。例は <b>Security alerts: High or higher</b>、<b>Alerts: Errors</b>、対象は <code class="demo-path">main</code>。画面紹介では Disabled のままにする。</p>
</li>
<li>
<p class="demo-step-title">4. AI SCAN</p>
<p><a href="https://github.com/enterprises/octodemo" target="_blank" rel="noopener noreferrer">octodemo ↗</a> → <b>Policies → Advanced Security → AI Scan</b>、次に <a href="https://github.com/organizations/theomonfort-org/settings/security_analysis" target="_blank" rel="noopener noreferrer">theomonfort-org → Global settings ↗</a>。別々の設定である <b>AI Scan for pull requests</b>、<b>AI Scan for repositories</b>、<b>Scan for AI applications</b> を見せる。</p>
<p>リポジトリスキャンは <a href="https://github.com/theomonfort-org/ghas-test-1/security/code-scanning" target="_blank" rel="noopener noreferrer">Security and quality → Code scanning ↗</a> → 右上の <b>AI Scan → Standard scan</b>。検出結果はこの一覧に表示され、ツールを <b>AI Scan</b> で絞り込める。</p>
<p class="demo-out">Enterprise の許可と Code Security AI Credits 予算を確認。Org の設定は対象 repo 全体に影響する。画面紹介では設定を切り替えず、有料スキャンも開始しない。</p>
</li>
<li>
<p class="demo-step-title">5. AI による修正支援</p>
<p><a href="https://github.com/organizations/theomonfort-org/settings/security_analysis" target="_blank" rel="noopener noreferrer">theomonfort-org → Autofix settings ↗</a>: <b>Copilot Autofix</b> と <b>Agentic Autofix</b> の別々の設定を見せる。Agentic Autofix の有効化前に Enterprise の許可を確認。</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/settings/security_analysis" target="_blank" rel="noopener noreferrer">ghas-test-1 → Repository override ↗</a> / <a href="https://github.com/theomonfort-org/ghas-test-1/security/code-scanning" target="_blank" rel="noopener noreferrer">Code scanning alerts ↗</a></p>
</li>
<li>
<p class="demo-step-title">6. SECURITY CAMPAIGNS</p>
<p><a href="https://github.com/orgs/theomonfort-org/security/campaigns" target="_blank" rel="noopener noreferrer">theomonfort-org → Campaigns ↗</a>: <b>Create campaign → From code scanning filters</b>。対象を <b>ghas-test-1</b> に絞り、担当と期限を設定して draft で保存。</p>
</li>
</ol>
</div>
</div>

検知の確認 → PR の保護 → バックログ解消。URL 内の `ORG`、`OWNER`、`REPO` は置き換える。

<div class="det-widget">
<p class="det-hint">▸ 項目をクリックして詳細を表示</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-1" /><span class="det-icon" aria-hidden="true">1</span><span class="det-name" id="cs-start-1">CodeQL の対象確認</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">CodeQL を有効化し、カバレッジを確認</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">ACTIVATE</p>
<p class="det-why"><b>開始:</b> <a class="retro-link" href="https://github.com/OWNER/REPO/settings/security_analysis" target="_blank" rel="noopener noreferrer">CodeQL settings ↗</a>: <b>Default setup</b> から開始。初回スキャン、対象言語、Actions 使用量を確認してから security configuration で展開。</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-2" /><span class="det-icon" aria-hidden="true">2</span><span class="det-name" id="cs-start-2">追加クエリ</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">必要に応じて追加のクエリパックを導入</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#specifying-codeql-query-packs" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">OPTIONAL</p>
<p class="det-why"><b>調整:</b> <a class="retro-link" href="https://github.com/OWNER/REPO/settings/security_analysis" target="_blank" rel="noopener noreferrer">CodeQL configuration ↗</a>: C/C++ 向けの <a class="retro-link" href="https://github.com/github/codeql-coding-standards" target="_blank" rel="noopener noreferrer">MISRA / CERT / AUTOSAR packs ↗</a> や社内クエリを追加。ビルドに合わせて設定する。</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-3" /><span class="det-icon" aria-hidden="true">3</span><span class="det-name" id="cs-start-3">マージ保護</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">重大な検出結果がある merge をブロック</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/set-merge-protection" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">RULESETS</p>
<p class="det-why"><b>例:</b> <a class="retro-link" href="https://github.com/OWNER/REPO/settings/rules" target="_blank" rel="noopener noreferrer">Rulesets ↗</a>: <b>Require code scanning results</b>（CodeQL）。<b>Security alerts: High or higher</b>、<b>Alerts: Errors</b>。<code>main</code> を対象にし、bypass 権限も制限。</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-4" /><span class="det-icon" aria-hidden="true">4</span><span class="det-name" id="cs-start-4">AI Scan</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">AI Scan の対象範囲を選ぶ</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan#managing-ai-scan" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">AI SCAN</p>
<p class="det-why"><b>有効化:</b> <a class="retro-link" href="https://github.com/organizations/ORG/settings/security_analysis" target="_blank" rel="noopener noreferrer">Org settings ↗</a>: Enterprise の許可、各機能の利用条件、<b>AI credits</b> 予算を確認。<b>PR スキャン</b>、<b>リポジトリスキャン</b>、<b>Scan for AI applications</b> は個別に有効化し、repo ごとにオプトアウトできる。</p>
<p class="det-why"><b>実行:</b> PR 検出器は自動実行され、結果は助言扱い。リポジトリスキャンは <b>Code scanning → AI Scan</b> から手動実行し、CodeQL 対応言語も含むデフォルトブランチの全言語を対象にする。一定の予算内でコードを選んで調べるため、全ファイルを網羅するものではない。AI Scan に <b>CodeQL default setup は不要</b>。</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-5" /><span class="det-icon" aria-hidden="true">5</span><span class="det-name" id="cs-start-5">Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">AI による修正支援を準備</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">AUTOFIX</p>
<p class="det-why"><b>準備:</b> <a class="retro-link" href="https://github.com/organizations/ORG/settings/security_analysis" target="_blank" rel="noopener noreferrer">Org settings ↗</a>: 従来の Autofix は無効化されていなければ CodeQL と共に有効。Draft PR 作成には任意で <b>Agentic Autofix</b> を有効化し、AI credits + Actions の予算を確保。</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-6" /><span class="det-icon" aria-hidden="true">6</span><span class="det-name" id="cs-start-6">Campaigns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Security campaign を作成</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/creating-managing-security-campaigns" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">CAMPAIGNS</p>
<p class="det-why"><b>対応:</b> <a class="retro-link" href="https://github.com/orgs/ORG/security/campaigns" target="_blank" rel="noopener noreferrer">Campaigns ↗</a>: code scanning アラートを選び、リスク順に優先度をつけ、担当と期限を決める。小さなバックログから始める。</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">項目を選んでください ▸</p></div>
</div>
</div>

## <span id="advanced-setup-と-sarif-連携">Advanced setup と SARIF 連携</span> <a class="h2-doc" href="https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Monorepo、独自ビルド、他社ツール併用なら workflow を自分で書く。

<div class="grid md:grid-cols-2 gap-4 example-columns">
<div>

### 1. トリガーとジョブ

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
```

</div>
<div>

### 2. 解析ステップ（続き）

```yaml
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}
          queries: security-extended
      - uses: github/codeql-action/analyze@v3

      # 他社ツールで results.sarif を生成してから:
      - uses: github/codeql-action/upload-sarif@v3
        with: { sarif_file: results.sarif }
```

</div>
</div>

**SARIF:** 他社 SAST も同じ UI。**Self-hosted:** Actions 分の課金なし。

## 料金: 3 つのメーター <a class="h2-doc" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="det-widget">
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-meter">
<summary class="det-btn"><span class="det-name">💺 ライセンス</span></summary>
<div class="det-pane spec-widget spec-compact">
<p class="det-why"><b>$30 / active committer / 月</b><br>GitHub Code Security</p>
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
</div>
</details>
<details class="det-pick" name="cs-meter">
<summary class="det-btn"><span class="det-name">⚙️ Actions 分</span></summary>
<div class="det-pane spec-widget spec-compact">
<p class="det-why">CodeQL は <b>Actions で実行</b>。Private のスキャンは実行分を消費し、超過分が課金される。</p>
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
</div>
</details>
<details class="det-pick" name="cs-meter">
<summary class="det-btn"><span class="det-name">🤖 AI クレジット</span></summary>
<div class="det-pane spec-widget spec-compact">
<p class="det-why"><b>AI Scan + Agentic Autofix:</b> 従量課金。従来の Autofix 提案は無料。</p>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🔎</span><span class="spec-key">AI Scan</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>2026-11-11 時点:</b> PR 自動 / repo 手動スキャンは、修正依頼がなくても <b>Code Security AI Credits</b> を消費。どちらも Copilot ライセンス不要。<b>組織所有 repo は実行者の個人枠ではなく Org / Enterprise が負担</b>。<a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan-for-repositories#billing" target="_blank" rel="noopener noreferrer">スキャン課金 ↗</a>。別機能の AI アプリ検出器には独自の<a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-applications-scanning-for-pull-requests#billing" target="_blank" rel="noopener noreferrer">ライセンス / クレジット条件 ↗</a>がある。</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🆓</span><span class="spec-key">Copilot Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>Generate fix → Create PR with fix</b> を含む従来の修正提案は、<b>AI クレジット消費なし</b>。Copilot ライセンス不要。Code Security に含まれ、public repo では無料。<a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning#choosing-an-autofix-type" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💸</span><span class="spec-key">Agentic Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>2026-10-26 時点:</b> <b>Security → Assign to Copilot</b> / campaign の割り当ては <b>Code Security AI Credits + Actions 分</b>を消費。<b>組織所有 repo は自分の割り当ても個人枠ではなく Org / Enterprise が負担</b>。Copilot ライセンス不要。<b>Code Security AI Credits</b> の SKU 予算を設定できる。<a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed" target="_blank" rel="noopener noreferrer">課金 ↗</a></p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">👤</span><span class="spec-key">Copilot Chat / agent</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>Copilot Chat / 通常のクラウドエージェント</b>での脆弱性修正は Agentic Autofix ではなく Copilot の利用。<b>自分の Copilot プランの AI クレジット</b>を消費する。個人プランは個人枠、Business / Enterprise は <b>Org / Enterprise の共有枠</b>。<a class="retro-link" href="https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing" target="_blank" rel="noopener noreferrer">個人 ↗</a> / <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing" target="_blank" rel="noopener noreferrer">組織 ↗</a></p>
</details>
</div>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">項目を選んでください ▸</p></div>
</div>
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

## <span id="code-security-risk-assessment無料の棚卸しスキャン">Code Security Risk Assessment(無料の棚卸しスキャン)</span> <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<a class="retro-link" href="https://github.blog/security/application-security/how-exposed-is-your-code-find-out-in-minutes-for-free/" target="_blank" rel="noopener noreferrer"><strong>CodeQL で無料の棚卸し ↗</strong></a>。GHAS / Code Security ライセンス不要（2026 年 4 月 GA）。

- 🔎 **対象** — 最近のコミットが活発な repo を最大 20 件（毎回選び直し可）
- 📊 **出力** — **重大度・言語・ルール種別** 別のレポート、**Copilot Autofix で修正可能な件数** も表示
- 🕒 **頻度** — **90 日に 1 回** 再実行可。実行できるのは Org owner / security manager のみ
- 🚀 **動かし方** — `Org → Security → Assessments → Run code security risk assessment`
- 🆓 **コスト**: ライセンス不要、Actions 分も消費しない

<a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Risk Assessment ↗</a> と組み合わせ、実数を見て Code Security 導入を判断する。
