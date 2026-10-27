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
  hex: "#00f0ff"
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

Dependabot は **3 つの機能** に分かれている。よく混同されるが、役割が異なる。

| 機能 | 何をする？ | トリガー | 出力 |
| --- | --- | --- | --- |
| 🚨 **Security alerts** | 既存依存の脆弱性を通知(opt-in で [npm の malware alerts ↗](https://gh.io/dependabot-malware) も含む) | GitHub Advisory Database に新規 CVE が登録された時 | Security タブ + メール |
| 🔧 **Security updates** | 脆弱性を直す PR を自動作成 | アラート発生時(自動的に) | PR(脆弱性 → 修正版に上げる) |
| ⏰ **Version updates** | 脆弱性に関係なく新バージョンへ追従する PR | 設定ファイルのスケジュール(daily / weekly) | PR(古い → 最新) |

> 🔑 **Alerts** = 検知だけ、**Updates** = 修正 PR まで作る。Security updates は Alerts に乗っかって動く(Alerts 無しでは動かない)。

## Dependency graph の役割

Dependabot のすべての判断は **Dependency graph** が出発点。

- 🗂️ マニフェストとロックファイルを解析 — `package-lock.json`、`requirements.txt`、`go.mod`、`pom.xml`、`Gemfile.lock` など各エコシステムの依存定義を読む
- 🔄 直接 + 推移的依存 の両方を解決 — `lodash` を直接入れていなくても、依存先が引っ張っていれば追跡対象
- 📚 GitHub Advisory Database と照合 — 検出された依存と公開済み CVE を突き合わせて脆弱性を判定
- 🛂 対応エコシステム — npm, pip, Maven, NuGet, Composer, Bundler, Go modules, Cargo, Gradle, Hex, Pub, Docker, GitHub Actions ほか

> 🌍 Advisory Database は GitHub・コミュニティ・MITRE の CVE フィードから集約された脆弱性データベース。

## 始め方（最短ルート）

**Step 1 — Security alerts / updates を ON**

```
Repo → Settings → Code security
  ✅ Dependency graph
  ✅ Dependabot alerts
  ✅ Dependabot security updates
```

3 つチェックを入れるだけ。**設定ファイル不要** で動き出す。

**Step 2 — Version updates を使うなら `.github/dependabot.yml` を追加**

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "monthly"
```

- 📦 `package-ecosystem` でエコシステム指定
- 📅 `interval`: `daily` / `weekly` / `monthly`
- 🏷️ `groups` でまとめて 1 つの PR にしたり、`ignore` で特定パッケージを除外可

**Step 3 — Org / Enterprise で一括 ON にしたい場合**

`Org → Settings → Code security` から **default settings** で全リポジトリに適用できる。

## 補完機能: Dependency Review <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Dependency Review** は Dependabot の **PR タイム版**。脆弱な依存や違反ライセンスをマージ前に止めるゲートで、**default branch だけでなく任意の base branch** で動く。

| | Dependency Review | Dependabot alerts |
| --- | --- | --- |
| **タイミング** | PR ごと(任意の branch) | 常時(新しい CVE 発生時) |
| **マージを止める？** | ✅ Yes(required check 化すれば) | ❌ 通知のみ |
| **ライセンスチェック** | ✅ allow / deny list | ❌ 非対応 |

- 🚨 **脆弱なパッケージ** が PR で追加 / 更新された時 — `fail-on-severity` で閾値設定
- 📜 **ライセンス遵守** — allow / deny list(例: proprietary repo で `GPL-3.0` を拒否)
- 📦 **依存差分** — lockfile から解決した推移的依存も含めて全部

[`actions/dependency-review-action`](https://github.com/actions/dependency-review-action) を入れて **required status check** にすればゲート化完了。Org owner は repository ruleset で組織横断に強制可。

> ⚠️ **PR タイムのゲートであり常時監視ではない**。マージ後に公開された CVE を拾うのは Dependabot alerts の役目 — **必ず両方を併用** する。

## Open source license compliance <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**2026-10-16 に GA。** Dependabot の補完機能として、脆弱性だけでなく依存関係のライセンスをマージ前に統制する。

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
| **Copilot の提案** | <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-surfaces/copilot-in-ides#references-to-matching-public-code" target="_blank" rel="noopener noreferrer">Public code の参照 ↗</a> | コードの照合。<b>ライセンスポリシーの判定ではない。</b> |
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
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔎</span><span class="ctl-name">ソースコードの対象範囲</span><span class="ctl-when">照合 ≠ 全件監査</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Copilot は提案を <b>GitHub の public code</b> のインデックスと照合する。ポリシーに応じて一致した提案をブロック、または出典と既知のライセンスを表示する。任意のコードを監査する API ではなく、すべての新規コード変更を確認するものでもない。一致がなくてもライセンス上の義務がないとは限らない。</p>
<p>既存のコードベースや手動でコピーした新規コードには専用スキャナーを使う。<b>Black Duck の snippet scan 機能</b>は部分的な OSS コードの一致を検出し、<b>ScanCode</b> はファイル内のライセンス本文、表記、著作権表示を検出する。Code Security とは別ツールであり、検出方法も異なる。同じ保証を与えるものではないため、結果と適用される義務を確認する。</p>
</div>
</details>
</div>
</div>

## AI triage: alert を agent に渡す

各 Dependabot alert に **「Assign to agent」** ボタンがあり、Copilot / Claude / Codex に渡すと、agent が advisory とリポジトリを読んで **alert ごとに on-demand で triage と修正** を行う。

- 🔍 **agent が typically やること** — reachability チェック(「脆弱関数が実際に自分のコードパスから呼ばれているか？」)、自分のコンテキストでの exploitability 判定、そして breaking change / downgrade / refactor まで含む **draft 修正 PR** の作成
- 🏁 同じ alert に **複数 agent を競わせて** PR を比較できる
- 🧹 **Auto-triage rules** — 別軸として、**severity / ecosystem / dependency scope(runtime か dev か)** で低リスク alert を自動 dismiss / snooze。agent が見る alert を本物だけに絞れる
- 👀 agent の修正は **first-pass** として扱う。マージ前の人間レビュー + テストは依然として必須

> 🎯 Alert → *Assign to agent* → reachability + fix → draft PR → 人間レビュー → merge。ボトルネックは「パッチ合成」から「承認」へ移る。

> 💰 Public repo は無料。Private repo は **GitHub Code Security**(旧 Advanced Security バンドル)が必要。

## 利用条件と料金 <a class="h2-doc" href="https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Dependabot 本体は **全プラン無料**。有料は Code Security の premium 機能のみ。

| 機能 | Public repo | Private repo（個人 / Free） | Private repo（Team / Enterprise） |
| --- | :---: | :---: | :---: |
| Dependency graph | ✅ 既定 ON | ✅ 無料(opt-in) | ✅ 無料 |
| Dependabot alerts(malware 含む) | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot security updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot version updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Custom auto-triage rules | ✅ 無料 | ❌ | 💰 Code Security |

**Enterprise の License compliance は無料の Dependabot とは別**。Public repo も含め、Enterprise Cloud + Code Security が必要。

> ⚙️ standard / self-hosted runner なら **Actions 分数を消費しない**。課金は larger runner のみ。  
> 🤖 Assign to agent は **Code Security** + coding agent 付き **Copilot プラン** が必要。
