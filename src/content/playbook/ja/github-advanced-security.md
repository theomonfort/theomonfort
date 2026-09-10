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
order: 19.3
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
    label: GitHub security features (無料 / ライセンスの線引き)
    url: https://docs.github.com/en/code-security/getting-started/github-security-features
  - group: 💰 課金と無料の棚卸し
    label: About billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 💰 課金と無料の棚卸し
    label: Secret Risk Assessment
    url: https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk
  - group: 💰 課金と無料の棚卸し
    label: Code Security Risk Assessment
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 🏢 エンタープライズ展開
    label: Creating a custom security configuration
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration
  - group: 🏢 エンタープライズ展開
    label: Applying a custom security configuration
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration
  - group: 🏢 エンタープライズ展開
    label: Code scanning merge protection
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection
  - group: 📊 可視化 (Security overview)
    label: Security overview
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/security-overview
  - group: 📊 可視化 (Security overview)
    label: Exporting data from security overview (CSV)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data
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

## なぜ今なのか

AI はレビュープロセスが想定していた速度を超えてコードを書き、攻撃側も防御側と同じモデルを手にしている。逆方向に動く 2 つの曲線がそれを示す。

<div class="duo-fig">
<div class="duo-panel is-alert">
<p class="duo-cap">Dependabot アラートが 4 倍超に</p>
<p class="duo-sub">GitHub 全体で新規作成されたアラート数（四半期ごと）。</p>
<div class="qbars">
<div class="qbar"><div class="qbar-fill" style="height:14.6%"><span class="qbar-val">52M</span></div><p class="qbar-lab">Q1 25</p></div>
<div class="qbar"><div class="qbar-fill" style="height:19.7%"><span class="qbar-val">70M</span></div><p class="qbar-lab">Q2 25</p></div>
<div class="qbar"><div class="qbar-fill" style="height:21.6%"><span class="qbar-val">77M</span></div><p class="qbar-lab">Q3 25</p></div>
<div class="qbar"><div class="qbar-fill" style="height:23.1%"><span class="qbar-val">82M</span></div><p class="qbar-lab">Q4 25</p></div>
<div class="qbar is-peak"><div class="qbar-fill" style="height:100.0%"><span class="qbar-val">357M</span></div><p class="qbar-lab">Q1 26</p></div>
<div class="qbar is-peak"><div class="qbar-fill" style="height:87.7%"><span class="qbar-val">313M</span></div><p class="qbar-lab">Q2 26</p></div>
</div>
<p class="duo-foot">2025 年は <strong>7,000〜8,000 万</strong>で安定していたが、そこから跳ね上がった。CVE アラートも 2026 年 2 月以降、全体で <strong>6 倍</strong>。</p>
</div>
<div class="duo-panel">
<p class="duo-cap">脆弱性から悪用までの時間</p>
<p class="duo-sub">CVE の公開から、実環境での悪用が最初に確認されるまでの平均日数。</p>
<div class="tte">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 292" role="img" aria-label="Mean time from CVE disclosure to first confirmed exploitation, 2018 to 2026">
<line x1="52.0" y1="70.6" x2="574.0" y2="70.6" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="76.6" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">1y</text>
<line x1="52.0" y1="146.6" x2="574.0" y2="146.6" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="152.6" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">1mo</text>
<line x1="52.0" y1="190.8" x2="574.0" y2="190.8" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="196.8" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">7d</text>
<line x1="52.0" y1="250.0" x2="574.0" y2="250.0" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="256.0" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">1d</text>
<polyline points="52.0,45.3 117.2,54.5 182.5,62.6 247.8,76.2 313.0,80.7 378.2,102.5 443.5,129.3 508.8,156.7 574.0,250.0" fill="none" stroke="#00f0ff" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" opacity="0.25"/>
<polyline points="52.0,45.3 117.2,54.5 182.5,62.6 247.8,76.2 313.0,80.7 378.2,102.5 443.5,129.3 508.8,156.7 574.0,250.0" fill="none" stroke="#00f0ff" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="52.0" cy="45.3" r="4.6" fill="#e8f4ff"/>
<text x="52.0" y="31.3" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">2.3y</text>
<circle cx="117.2" cy="54.5" r="4.6" fill="#e8f4ff"/>
<text x="117.2" y="40.5" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">1.7y</text>
<circle cx="182.5" cy="62.6" r="4.6" fill="#e8f4ff"/>
<text x="182.5" y="48.6" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">1.3y</text>
<circle cx="247.8" cy="76.2" r="4.6" fill="#e8f4ff"/>
<text x="247.8" y="62.2" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">10mo</text>
<circle cx="313.0" cy="80.7" r="4.6" fill="#e8f4ff"/>
<text x="313.0" y="66.7" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">8.6mo</text>
<circle cx="378.2" cy="102.5" r="4.6" fill="#e8f4ff"/>
<text x="378.2" y="88.5" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">4.2mo</text>
<circle cx="443.5" cy="129.3" r="4.6" fill="#e8f4ff"/>
<text x="443.5" y="115.3" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">53d</text>
<circle cx="508.8" cy="156.7" r="4.6" fill="#e8f4ff"/>
<text x="508.8" y="142.7" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">21.5d</text>
<circle cx="574.0" cy="250.0" r="6.5" fill="#ff2e88"/>
<text x="559.0" y="257.0" text-anchor="end" font-size="20" font-weight="700" fill="#ff7ab2">24h</text>
<text x="52.0" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2018</text>
<text x="117.2" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2019</text>
<text x="182.5" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2020</text>
<text x="247.8" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2021</text>
<text x="313.0" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2022</text>
<text x="378.2" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2023</text>
<text x="443.5" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2024</text>
<text x="508.8" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2025</text>
<text x="574.0" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2026</text>
</svg>
</div>
<p class="duo-foot">悪用が確認された 3,500 件超の CVE に基づく（CISA KEV + VulnCheck KEV）· zerodayclock.com</p>
</div>
</div>

## AppSec への 2 つの影響

かつて「shift left」は IDE を意味していた。いまは IDE・CLI・アプリ・PR が 1 つの連続した面になり、エージェントがその上を自由に行き来する。ここから 2 つの帰結が生まれる。

<div class="imp2">
<div class="imp2-col">
<p class="imp2-k">🌊 従来のセキュリティが追いつかない</p>
<p class="imp2-v">AI が生成する新規コードの量は従来のレビュープロセスが検査できる範囲を超え、しかも一度に多数の新しい面から流れ込む。エージェントが変更を複数リポジトリへ波及させた後では、PR でのゲートはすでに手遅れ。</p>
</div>
<div class="imp2-col">
<p class="imp2-k">⚡ 悪用がかつてなく速い</p>
<p class="imp2-v">攻撃者も同じ最新モデルを使えて、コストは障害にならない。防御側がトリアージするより速くリスクを見つけて武器化し、サプライチェーン攻撃も人間のレビューサイクルより速く動く。</p>
</div>
</div>

## GHAS はどう応えるか

スキャンツールは通常プラットフォームの外側にある。別のコンソール、別のバックログ、そしてコードを書いた数日後に届く検出結果。GHAS はこの 4 ステップすべてを、コードがすでに置かれている場所で実行する。

<div class="rem-widget">
<p class="rem-hint">▸ ステップをクリックで詳細</p>
<div class="rem-flow">
<div class="rem-row">
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🔎</span><span class="rem-name">FIND</span></summary>
<div class="rem-plate">
<p class="rem-title">🔎 FIND — すでに存在するものを洗い出す</p>
<p class="rem-why"><b>git 履歴全体</b>と全ブランチを走査して漏れた認証情報を検出し、コードをクエリ可能なデータベース化して脆弱なデータフローを追跡する。</p>
<p class="rem-why">組織内のすべてのリポジトリが対象。各チームに何かをインストールさせたり設定させたりする必要はない。</p>
</div>
</details>
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🚧</span><span class="rem-name">PREVENT</span></summary>
<div class="rem-plate">
<p class="rem-title">🚧 PREVENT — 入り込む前に止める</p>
<p class="rem-why"><b>Push protection</b> が secret を含む push 自体を拒否する。リモートに到達しないので、ローテーション作業も発生しない。</p>
<p class="rem-why"><b>ルールセット</b>で「code scanning がクリーンになるまで PR をマージさせない」ことができる。レビュアーの記憶ではなくリポジトリのルールがゲートになる。</p>
</div>
</details>
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🔧</span><span class="rem-name">FIX</span></summary>
<div class="rem-plate">
<p class="rem-title">🔧 FIX — プルリクエストの中で直す</p>
<p class="rem-why">アラートは<b>差分へのアノテーション</b>として届く。開発者が別ツールを開きに行く必要のあるチケットではない。</p>
<p class="rem-why"><b>Copilot Autofix</b> が説明付きの修正パッチを提案するので、脆弱性の種類を調べるところから始めるのではなく、変更をレビューするところから始められる。</p>
</div>
</details>
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">📊</span><span class="rem-name">PROVE</span></summary>
<div class="rem-plate">
<p class="rem-title">📊 PROVE — エンタープライズ全体で示す</p>
<p class="rem-why">1 つの<b>セキュリティ構成</b>がすべての組織とリポジトリに適用される。明日作られるリポジトリも含む。</p>
<p class="rem-why"><b>Security overview</b> がカバー済み・未カバーのリポジトリとバックログの推移を可視化する。カバレッジが「たぶん大丈夫」ではなく数値になる。</p>
</div>
</details>
</div>
<div class="rem-screen"><p class="rem-empty">ステップを選択 ▸</p></div>
</div>
</div>

## 何が入っている? <a class="h2-doc" href="https://docs.github.com/en/code-security/getting-started/github-security-features" target="_blank" rel="noopener noreferrer">📖 Docs</a>

機能名をクリックすると説明が開く。チップは無料かライセンス必要かを示す。

<div class="trio-widget">
<input class="trio-radio" type="radio" name="ghas-inside" id="gi-secret" checked />
<input class="trio-radio" type="radio" name="ghas-inside" id="gi-code" />
<input class="trio-radio" type="radio" name="ghas-inside" id="gi-dep" />
<div class="trio-bar">
<label class="trio-tab" for="gi-secret"><span class="trio-name"><span class="trio-icon" aria-hidden="true">🔑</span>Secret scanning</span><span class="trio-prod">SECRET PROTECTION · $19</span></label>
<label class="trio-tab" for="gi-code"><span class="trio-name"><span class="trio-icon" aria-hidden="true">🔍</span>Code scanning</span><span class="trio-prod">CODE SECURITY · $30</span></label>
<label class="trio-tab" for="gi-dep"><span class="trio-name"><span class="trio-icon" aria-hidden="true">📦</span>Dependabot</span><span class="trio-prod">CODE SECURITY · $30</span></label>
</div>
<div class="trio-panels">

<div class="trio-panel">
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Secret scanning</span><span class="trio-chip is-free">PUBLIC は無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v"><b>git 履歴全体</b>と新規 push を <b>200 以上のプロバイダーパターン</b>で走査。<b>Validity check</b> で漏れたトークンの生死を判定。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Push protection</span><span class="trio-chip is-free">PUBLIC は無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">secret を含む push 自体を拒否する。リモートに到達しないのでローテーションも不要。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">AI-detected secrets</span><span class="trio-chip is-paid">ライセンスのみ</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">正規表現で表現できない<b>非構造の</b>認証情報を検出。設定ファイル内のパスワードや文章中の secret など。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Custom patterns</span><span class="trio-chip is-paid">ライセンスのみ</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">自社独自のトークン形式。社内サービス、レガシー認証情報、パートナーが登録しない命名規則。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Delegated bypass</span><span class="trio-chip is-paid">ライセンスのみ</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">push protection のバイパスを、指定レビュアーグループへの承認申請に変える。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Public monitoring</span><span class="trio-chip is-paid">ライセンスのみ</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v"><b>Enterprise 向け、Public preview。</b>自社所有でない repo も含め、GitHub 全体の Public repo に漏れた secret を検出する。<b>Enterprise のメンバーシップまたは検証済みドメイン</b>で自社との関連を判定。Secret Protection または GHAS が必要。<a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Docs ↗</a></p></details>
</div>

<div class="trio-panel">
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Code scanning (CodeQL)</span><span class="trio-chip is-free">PUBLIC は無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">コードを<b>クエリ可能な DB</b> にコンパイルし、危険なシンクへのデータフローを追跡。インジェクション、パストラバーサルなど。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Copilot Autofix</span><span class="trio-chip is-free">PUBLIC は無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">アラートを PR 上の<b>説明付き修正差分</b>に変える。修正率が実際に動くのはここ。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">AI-powered detections</span><span class="trio-chip is-paid">ライセンスのみ</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">CodeQL のクエリが無い言語やフレームワークをカバーする AI エンジン。PR レビュー時に動く。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Third-party SARIF</span><span class="trio-chip is-free">PUBLIC は無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">SARIF を出力するスキャナーなら同じアラート一覧に取り込める。バックログもダッシュボードも 1 つ。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Security campaigns</span><span class="trio-chip is-paid">ライセンスのみ</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">バックログを、担当者と期限が付いた<b>終わらせられるリスト</b>に切り出し、コードを持つチームと直接進める。</p></details>
</div>

<div class="trio-panel">
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Dependency review</span><span class="trio-chip is-free">PUBLIC は無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">その変更がどの依存関係を追加・削除・更新するかを PR 上で表示し、既知の脆弱性ならマージをブロック。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">カスタム auto-triage ルール</span><span class="trio-chip is-free">PUBLIC は無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">Dependabot アラートを自社ルールで一括自動クローズ・再オープン。実リスクだけがバックログに残る。</p></details>
<details class="trio-row" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">Security overview</span><span class="trio-chip is-paid">ライセンスのみ</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">サプライチェーンのリスクとカバレッジを、全リポジトリ横断で組織全体に集約。</p></details>
</div>

</div>
<details class="trio-row trio-foot" name="ghas-feature"><summary class="trio-summary"><span class="trio-k">その他のサプライチェーン機能</span><span class="trio-chip is-free">全プランで無料</span><span class="trio-toggle" aria-hidden="true"></span></summary><p class="trio-v">Dependency graph、Dependabot alerts、security / version updates、マルウェアアラート、プリセット auto-triage ルール、SBOM エクスポートは <b>全プランで無料</b>。</p></details>
</div>

## 料金 <a class="h2-doc" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| 製品 | 価格 | 課金単位 |
| --- | :---: | --- |
| 🔑 **GitHub Secret Protection** | **$19** / 月 | active committer |
| 🔍 **GitHub Code Security** | **$30** / 月 | active committer |
| 📦 両方セット | $49 / 月 | active committer |

- 👥 **active committer** = 過去 90 日間に、機能が ON のリポジトリへ push した人。何リポジトリ・何 org でも 1 人分。GitHub App の bot は対象外
- 🏷️ **GitHub Team** と **GitHub Enterprise** で購入可能。**Enterprise Server** と **GHE.com** では全リポジトリにライセンスが必要
- 🌐 **public repo は「ほとんど」無料だが「全部」ではない** — custom patterns、delegated bypass、AI-detected secrets、campaigns、Security overview はライセンスが必要 (<a class="retro-link" href="https://docs.github.com/en/code-security/getting-started/github-security-features" target="_blank" rel="noopener noreferrer">正確な線引き ↗</a>)


## 購入前の棚卸し — Risk Assessments <a class="h2-doc" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Org → Security → Assessments** から実行できる無料の棚卸しが 2 つある。ライセンスもトライアルも不要で、購入を判断する前に実際の数字を見られる。

<div class="assess">
<div class="assess-card">
<p class="assess-name">🔑 Secret Risk Assessment</p>
<p class="assess-what">組織のリポジトリに眠っている secret の種類と件数を、カテゴリ別に集計する。</p>
<dl class="assess-meta">
<div class="assess-line"><dt>対象</dt><dd>すべての repo — public / private / internal / archived</dd></div>
<div class="assess-line"><dt>頻度</dt><dd>1 回限り</dd></div>
<div class="assess-line"><dt>出力</dt><dd>件数のみ。secret の値は保存されない</dd></div>
</dl>
</div>
<div class="assess-card is-code">
<p class="assess-name">🔍 Code Security Risk Assessment</p>
<p class="assess-what">CodeQL が検出したコードの脆弱性を、深刻度・言語・Copilot Autofix で修正可能な件数に分けて表示する。</p>
<dl class="assess-meta">
<div class="assess-line"><dt>対象</dt><dd>最もアクティブな最大 20 repo</dd></div>
<div class="assess-line"><dt>頻度</dt><dd>90 日に 1 回</dd></div>
<div class="assess-line"><dt>出力</dt><dd>集計レポート。Actions 実行枠は消費しない</dd></div>
</dl>
</div>
</div>

- 🛂 実行できるのは **Organization owner** と **security manager** のみ
- 🏷️ **GitHub Team** と **GitHub Enterprise Cloud** (Server は 3.22 で対応予定)
- 🧪 結果画面からそのまま <a class="retro-link" href="https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas" target="_blank" rel="noopener noreferrer">GHAS トライアル ↗</a> を開始できる。数字が出た後の次の一手はこれ

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
