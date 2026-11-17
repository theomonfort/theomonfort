---
title: Dependabot
titleEn: Dependabot
summary: 依存関係の脆弱性を自動検出して PR で直す GitHub の bot。Dependency graph をベースに Security alerts / Security updates / Version updates の 3 段で動く。public / private 共に無料。
icon: /theomonfort/icons/dependabot.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#5eead4"
order: 19.7
category: secure
related: ['github-advanced-security', 'github-actions']
links:
  - group: 📖 公式ドキュメント
    label: About Dependabot
    url: https://docs.github.com/en/code-security/dependabot
  - group: 📖 公式ドキュメント
    label: About the dependency graph
    url: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph
  - group: 📖 公式ドキュメント
    label: Supported package ecosystems
    url: https://docs.github.com/en/code-security/dependabot/ecosystems-supported-by-dependabot/supported-ecosystems-and-repositories
  - group: 📖 公式ドキュメント
    label: dependabot.yml configuration reference
    url: https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference
  - group: 📖 公式ドキュメント
    label: Configuring Dependabot security updates
    url: https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates
  - group: 📖 公式ドキュメント
    label: About dependency review
    url: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review
  - group: 📖 公式ドキュメント
    label: Open source license compliance
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance
  - group: 📖 公式ドキュメント
    label: Configuring the dependency review action
    url: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action
  - group: 📖 公式ドキュメント
    label: actions/dependency-review-action (GitHub)
    url: https://github.com/actions/dependency-review-action
  - group: 📖 公式ドキュメント
    label: About Dependabot auto-triage rules
    url: https://docs.github.com/en/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules
  - group: 📖 公式ドキュメント
    label: Malware alerts for Dependabot
    url: https://gh.io/dependabot-malware
  - group: 📰 Recent Changelog
    label: "Open source license compliance GA (2026-10-16)"
    url: https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available/
  - group: 📰 Recent Changelog
    label: "Expanded OIDC support for Dependabot and code scanning (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-expanded-oidc-support-for-dependabot-and-code-scanning
  - group: 📰 Recent Changelog
    label: "Cross-org Dependabot access for internal repositories (2026-05-11)"
    url: https://github.blog/changelog/2026-05-11-cross-org-dependabot-access-for-internal-repositories
  - group: 📰 Recent Changelog
    label: "Dependabot alerts are now assignable to AI agents for remediation (2026-04-07)"
    url: https://github.blog/changelog/2026-04-07-dependabot-alerts-are-now-assignable-to-ai-agents-for-remediation
  - group: 📰 Recent Changelog
    label: "Dependabot now detects malware in npm dependencies (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-dependabot-now-detects-malware-in-npm-dependencies
  - group: 📰 Recent Changelog
    label: "Dependabot alert assignees are now generally available (2026-03-03)"
    url: https://github.blog/changelog/2026-03-03-dependabot-alert-assignees-are-now-generally-available
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Dependabot</strong> は、リポジトリの依存関係を監視する GitHub 公式 bot。
  </p>
  <p>
    脆弱性が見つかれば <strong>アラート</strong> を出し、可能なら <strong>修正 PR を自動作成</strong>。古くなった依存も定期的に新バージョンへ更新してくれる。
  </p>
</div>

## Alerts と Updates の違い

Dependabot は **3 つの機能** に分かれている。

| 機能 | 何をする？ | トリガー | 出力 |
| --- | --- | --- | --- |
| 🚨 **Security alerts** | 既存依存の脆弱性を通知。opt-in で [npm malware alerts ↗](https://gh.io/dependabot-malware) も対象 | GitHub Advisory Database に新規 CVE | Security タブ + メール |
| 🔧 **Security updates** | 修正版への PR を自動作成 | アラート発生 | 修正 PR |
| ⏰ **Version updates** | 脆弱性に関係なく更新 | 設定スケジュール（daily / weekly） | PR（古い → 最新） |

> 🔑 **Alerts** = 検知だけ、**Updates** = 修正 PR まで作る。Security updates は Alerts に乗っかって動く(Alerts 無しでは動かない)。

## Dependency graph の役割

Dependabot のすべての判断は **Dependency graph** が出発点。

- 🗂️ `package-lock.json`、`requirements.txt`、`go.mod`、`pom.xml`、`Gemfile.lock` などを解析。
- 🔄 直接 + 推移的依存を解決。他の依存が持ち込む `lodash` も追跡。
- 📚 GitHub Advisory Database の公開 CVE と依存関係を照合。
- 🛂 npm、pip、Maven、NuGet、Composer、Bundler、Go、Cargo、Gradle、Hex、Pub、Docker、GitHub Actions などに対応。

> 🌍 Advisory Database は GitHub・コミュニティ・MITRE の CVE フィードから集約された脆弱性データベース。

## 始め方（最短ルート）

<div class="dependency-start">
<div>

**Step 1 — Security alerts / updates**

`Repo → Settings → Code security` で dependency graph、Dependabot alerts、security updates を有効化。**設定ファイル不要**。

**Step 3 — 一括展開**

`Org → Settings → Code security` の **default settings** で全 repo に適用。

Version updates の間隔は `daily` / `weekly` / `monthly`。`groups` で PR をまとめ、`ignore` でパッケージを除外できる。

</div>
<div>

**Step 2 — Version updates**

`.github/dependabot.yml` を追加：

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule: { interval: "weekly" }
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule: { interval: "monthly" }
```

</div>
</div>

## 補完機能: Dependency Review <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Dependency Review** はマージ前のゲート。**任意の base branch** の PR で動く。

| | Dependency Review | Dependabot alerts |
| --- | --- | --- |
| **タイミング** | PR ごと(任意の branch) | 常時(新しい CVE 発生時) |
| **マージを止める？** | ✅ Yes(required check 化すれば) | ❌ 通知のみ |
| **ライセンスチェック** | ✅ allow / deny list | ❌ 非対応 |

- 🚨 脆弱なパッケージ：`fail-on-severity` で閾値を設定。
- 📜 ライセンスの allow / deny list（例：proprietary repo で `GPL-3.0` を拒否）。
- 📦 lockfile の推移的依存を含む依存差分。

[`actions/dependency-review-action`](https://github.com/actions/dependency-review-action) を **required check** にする。Org owner は ruleset で強制可能。**マージ後**の CVE は alerts と併用して検出。

## Open source license compliance <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**2026-10-16 に GA。** Dependabot と併用し、依存ライセンスをマージ前に統制。

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📜</span><span class="ctl-name">ポリシーの一元管理</span><span class="ctl-when">Action との違い</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Dependency Review Action の allow / deny list とは異なり、許可するライセンスを <b>Enterprise 共通ポリシー</b>で定義する。Enterprise、Organization、Repository のブランチルールセットで適用できる。</p>
<p><b>Repo → Settings → License policy</b> では、継承した項目は読み取り専用。その repo だけに適用する例外を承認でき、ローカルの項目は Enterprise ポリシーを変えずに削除できる。</p>
</div>
</details>
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">💰</span><span class="ctl-name">利用条件</span><span class="ctl-when">Enterprise + Code Security</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Public repo も含め <b>Enterprise Cloud + Code Security</b> が必要。統合版の <b>GHAS</b> ライセンスにも Code Security が含まれる。Secret Protection だけでは利用不可。データ所在地にも対応。</p>
<p><b>Dependency graph の有効化が必要</b>。Dependabot alerts や自動更新は前提条件ではない。依存関係のライセンス表示と SBOM エクスポートには GHAS は不要。</p>
<p>一方、Dependency Review Action は <b>Public repo なら無料</b>で、Private repo は Code Security が必要。</p>
</div>
</details>
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">段階的な適用</span><span class="ctl-when">Evaluate / Active</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>ブランチルールセットで <b>Require license compliance results before merging</b> を有効にする。<b>Active</b> は依存関係の変更がポリシーに違反すると、PR の作成ではなくマージをブロックする。</p>
<p><b>Evaluate</b> はチェックと指摘のみで直接ブロックしない。ただし、会話の解決を必須にするブランチ保護があると、指摘がマージを妨げる場合がある。</p>
</div>
</details>
<details class="ctl-item" name="license-compliance">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">✅</span><span class="ctl-name">違反の解消</span><span class="ctl-when">例外の承認</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>依存関係の削除 / 置き換え、ポリシーの変更、または <b>PR のライセンス違反から理由を添えて例外を申請</b>する。指摘が出ただけでは申請は作成されない。</p>
<p><b>Enterprise Open-Source License Manager</b> が Enterprise のセキュリティ画面とメールで申請を受け、承認 / 却下する。パッケージ、ライセンス、パッケージパターンを対象に、repo または Enterprise 単位で例外を承認できる。他のマージ条件は引き続き必要。</p>
<p><a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-license-policies" target="_blank" rel="noopener noreferrer">ポリシーと例外の設定 ↗</a></p>
</div>
</details>
</div>
</div>

**対象**：PR で追加 / 変更された依存関係。検出済みの推移的依存も含む。コピーされたコードやバイナリのスキャナーではない。既存の依存関係は別途監査する。

<p><b>Demo:</b> <a class="retro-link" href="https://github.com/enterprises/octodemo/settings/advanced_security/license_policy/default" target="_blank" rel="noopener noreferrer">octodemo → 共通ライセンスポリシー ↗</a> / <a class="retro-link" href="https://github.com/enterprises/octodemo/security/bypass-requests/license-compliance?request_status=open" target="_blank" rel="noopener noreferrer">未処理の例外申請 ↗</a></p>

## ライセンス確認：既存と新規 <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| 対象 | 確認方法 | 結果 / 制約 |
| --- | --- | --- |
| **新規 / 更新された依存関係** | License compliance のルールセット | **Active** で非準拠のマージをブロック。 |
| **既存の依存関係** | <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom" target="_blank" rel="noopener noreferrer">SBOM ↗</a> → <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/rest/dependency-graph/license-compliance#check-license-compliance-for-packages" target="_blank" rel="noopener noreferrer">Package-check API ↗</a> | 明示的に監査。自動再スキャンではない。 |
| **コピー済み / 既存コード** | <a class="retro-link" href="https://www.blackduck.com/software-composition-analysis-tools/black-duck-sca.html" target="_blank" rel="noopener noreferrer">Black Duck：断片照合 ↗</a><br/><a class="retro-link" href="https://scancode-toolkit.readthedocs.io/en/stable/explanation/scancode-license-detection.html" target="_blank" rel="noopener noreferrer">ScanCode：表記検出 ↗</a> | ファイルをスキャン。<b>新旧を問わない</b>。 |

<p><b>Demo:</b> <a class="retro-link" href="https://github.com/theomonfort-org/ghas-test-1/network/dependencies" target="_blank" rel="noopener noreferrer">ghas-test-1 → Export SBOM ↗</a></p>

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="license-check-methods">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">既存の依存関係を監査</span><span class="ctl-when">SBOM → API</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p><b>Repo → Insights → Dependency graph → Export SBOM</b> を開く。SPDX JSON の <code>packages[].licenseConcluded</code> に、判明している依存関係のライセンスが入る。<code>dataLicense</code> はパッケージではなく SBOM 文書自体のライセンス。</p>
<p><code>packages[].externalRefs</code> の <code>referenceType: "purl"</code> から Package URL（PURL）を取り出し、<code>purls</code> として <code>POST /repos/{owner}/{repo}/license-compliance/package-checks</code> に送る。repo に適用されるポリシーと例外に照らして確認する。上限は <b>1 回 40 PURL</b>（2026-10-27 時点）。ルールセットを有効にしても、既存の依存関係にこの監査が自動実行されるわけではない。</p>
<p><code>NOASSERTION</code> やライセンス情報の欠落は<b>不明</b>を意味し、承認済み / ライセンス不要という意味ではない。この API は依存関係が対象で、コード断片は検査しない。agent がパッケージを追加する前の確認にも使える。</p>
</div>
</details>
<details class="ctl-item" name="license-check-methods">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔎</span><span class="ctl-name">ソースコードの対象範囲</span><span class="ctl-when">専用スキャナー</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>既存のコードベースや手動でコピーした新規コードには専用スキャナーを使う。<b>Black Duck の snippet scan 機能</b>は部分的な OSS コードの一致を検出し、<b>ScanCode</b> はファイル内のライセンス本文、表記、著作権表示を検出する。Code Security とは別ツールであり、検出方法も異なる。同じ保証を与えるものではないため、結果と適用される義務を確認する。</p>
</div>
</details>
</div>
</div>

## AI triage: alert を agent に渡す

**Assign to agent** で alert を Copilot / Claude / Codex に渡し、advisory と repo を使って on-demand で triage / 修正する。

- 🔍 Reachability と文脈に応じた exploitability を確認し、breaking change / downgrade / refactor を含む **draft 修正 PR** を作成。
- 🏁 複数 agent を競わせて PR を比較できる。
- 🧹 別機能の **auto-triage rules** で severity / ecosystem / runtime・dev scope により低リスク alert を dismiss / snooze。
- 👀 マージ前の人間レビューとテストは必須。

Public は無料。Private は **Code Security**（旧 Advanced Security）が必要。

## <span class="dependency-feature-title">Reachability analysis</span> <span class="dependency-feature-links"><a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/about-reachability-analysis-for-dependabot-alerts" target="_blank" rel="noopener noreferrer">📖 Docs</a><a class="dependency-announcement" href="https://github.blog/changelog/2026-10-28-prioritize-dependabot-alerts-with-reachability-analysis" target="_blank" rel="noopener noreferrer">公式発表 ↗</a></span>

<div class="dependency-feature">
<p class="dependency-meta"><span class="dependency-preview">Public preview</span><span>Enterprise Cloud（データ所在地対応）</span><span>プレビュー中は無料</span></p>
<p class="dependency-lead">脆弱関数への経路で、<b>Dependabot alert の優先度</b>を判断。</p>
<div class="dependency-flow"><span>自分のコード<br>+ 依存関係</span><b aria-hidden="true">→</b><b>CodeQL<br>+ advisory データ</b><b aria-hidden="true">→</b><span>判定 + 呼び出し経路</span></div>
<div class="dependency-panels">
<div class="dependency-panel">
<h3>判定を優先順位に使う</h3>
<dl class="dependency-facts">
<div><dt>Reachable</dt><dd>経路あり：優先。</dd></div>
<div><dt>Potentially reachable</dt><dd>可能性あり：優先。</dd></div>
<div><dt>Unreachable</dt><dd>未検出：優先度↓</dd></div>
<div><dt>Reachability unavailable</dt><dd>判定なし。</dd></div>
</dl>
<p class="dependency-note">到達可能性と悪用可能性は別。アラートの自動 close / dismiss はしない。</p>
</div>
<div class="dependency-panel">
<h3>有効化して判断材料を増やす</h3>
<ul class="dependency-setup">
<li><b>対象：</b><span>JavaScript / TypeScript。npm、pnpm、Yarn の lockfile が必要。</span></li>
<li><b>設定：</b><span>alerts を ON にしてから reachability を有効化。既定は OFF。</span></li>
<li><b>実行：</b><span>GitHub-hosted のみ。初回 + 毎日。push ごとの実行ではない。</span></li>
</ul>
<p class="dependency-note">GHAS ライセンス不要。Actions 課金なし。</p>
</div>
</div>
</div>

## <span class="dependency-feature-title">Package firewall</span> <span class="dependency-feature-links"><a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall" target="_blank" rel="noopener noreferrer">📖 Docs</a><a class="dependency-announcement" href="https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview" target="_blank" rel="noopener noreferrer">公式発表 ↗</a><a class="dependency-announcement" href="https://github.com/enterprises/octodemo/settings/policies/package_firewall" target="_blank" rel="noopener noreferrer">Demo ↗</a></span>

<div class="dependency-feature">
<p class="dependency-meta"><span class="dependency-preview">Public preview</span><span>Enterprise Cloud（データ所在地対応）</span><span>プレビュー中は無料</span></p>
<p class="dependency-lead">開発端末、agent、CI が<b>危険な npm をインストールする前にブロック</b>。</p>
<div class="dependency-flow"><span>開発端末 / agent / CI</span><b aria-hidden="true">→</b><b>Package firewall<br>取得を許可 / 拒否</b><b aria-hidden="true">→</b><span>npm registry</span></div>
<div class="dependency-panels">
<div class="dependency-panel">
<h3>Enterprise 共通ポリシー</h3>
<dl class="dependency-facts dependency-policy">
<div><dt>Advisory</dt><dd>Malware + 脆弱性の閾値。</dd></div>
<div><dt>Cooldown</dt><dd>公開からの最低待機期間。</dd></div>
<div><dt>Supply chain</dt><dd>SLSA attestation の消失 + 新たな install script。</dd></div>
</dl>
<p class="dependency-note">repo 内の既存依存を監視する Dependabot を補完する。</p>
</div>
<div class="dependency-panel">
<h3>接続してからポリシーを適用</h3>
<ul class="dependency-setup">
<li><b>ポリシー：</b><span>Enterprise 管理者 / security manager が設定。</span></li>
<li><b>接続：</b><span>npm のみ。各端末に firewall の registry URL + Enterprise メンバーの token を設定。</span></li>
<li><b>例外：</b><span>ブロック時のログのリンクから承認を申請。</span></li>
</ul>
<p class="dependency-note">firewall を通る通信だけが対象。ポリシー設定だけでは経路は変わらない。</p>
</div>
</div>
</div>

## <span class="dependency-feature-title">Package firewall：接続構成</span> <span class="dependency-feature-links"><a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-artifactory" target="_blank" rel="noopener noreferrer">📖 Docs</a></span>

<div class="dependency-feature dependency-architecture">
<p class="dependency-lead">アーティファクト管理ツールは<b>必須ではない</b>。</p>
<div class="dependency-route-block">
<div class="dependency-route-heading"><h3>01 / 直接接続</h3></div>
<div class="dependency-route-flow" role="img" aria-label="開発者、agent、CI から GitHub package firewall を経由して npm registry に直接接続する。">
<span class="dependency-route-node"><span>開発者<br>/ agent / CI</span></span>
<span class="dependency-route-arrow dependency-route-arrow-long" aria-hidden="true"></span>
<span class="dependency-route-node is-firewall"><strong>GitHub<br>package firewall</strong></span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node"><span>npm<br>registry</span></span>
</div>
</div>
<div class="dependency-route-block">
<div class="dependency-route-heading"><h3>02 / Artifactory 経由（任意）</h3><span class="dependency-route-status">実験的な連携</span></div>
<div class="dependency-route-flow" role="img" aria-label="開発者、agent、CI から、任意の Artifactory、GitHub package firewall、npm registry の順に接続する。">
<span class="dependency-route-node"><span>開発者<br>/ agent / CI</span></span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node">Artifactory</span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node is-firewall"><strong>GitHub<br>package firewall</strong></span>
<span class="dependency-route-arrow" aria-hidden="true"></span>
<span class="dependency-route-node"><span>npm<br>registry</span></span>
</div>
</div>
<p class="dependency-note">どちらの経路も、公開 npm パッケージの取得が firewall を通るように設定する。</p>
</div>

## 利用条件と料金 <a class="h2-doc" href="https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Dependabot 本体は **全プラン無料**。有料は Code Security の premium 機能のみ。

| 機能 | Public | Private：個人 / Free | Private：Team / Enterprise |
| --- | :---: | :---: | :---: |
| Dependency graph | ✅ 既定 ON | ✅ 無料(opt-in) | ✅ 無料 |
| Dependabot alerts(malware 含む) | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot security updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot version updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Custom auto-triage rules | ✅ 無料 | ❌ | 💰 Code Security |

License compliance は Public も **Enterprise Cloud + Code Security** が必要。Assign to agent は **Code Security + Copilot**（coding agent 対応）が必要。

Standard / self-hosted runner は **Actions 分数を消費しない**。Larger runner は課金。
