---
title: Dependabot
titleEn: Dependabot
summary: 依存関係の脆弱性を自動検出して PR で直す GitHub の bot。Dependency graph をベースに Security alerts / Security updates / Version updates の 3 段で動く。public / private 共に無料。
icon: 🤖
color: amber
order: 19.3
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
    label: Configuring the dependency review action
    url: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action
  - group: 📖 公式ドキュメント
    label: actions/dependency-review-action (GitHub)
    url: https://github.com/actions/dependency-review-action
  - group: 📖 公式ドキュメント
    label: About Dependabot auto-triage rules
    url: https://docs.github.com/en/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules
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
| 🚨 **Security alerts** | 既存依存の脆弱性を通知 | GitHub Advisory Database に新規 CVE が登録された時 | Security タブ + メール |
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

## 補完機能: Dependency Review

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

## Reachability analysis を持たない — それは意図的な選択

GitHub は **深い reachability analysis(脆弱関数が実際に呼ばれているかの解析)を提供していない**。Snyk などは持っているが、reachability は **誤判定(false positive / false negative)が多く**、「呼ばれていない」という誤った判定が本当のリスクを隠してしまう。GitHub は逆に賭ける: **すべての一致を alert として上げ、triage を安く済ませる**。

- 🤖 **Assign to agent**（各 Dependabot alert 上のボタン）— alert を Copilot / Claude / Codex に渡すと、agent が advisory とリポジトリを読み **draft の修正 PR を作る**(breaking change, downgrade, refactor 対応)。同じ alert に複数 agent を競わせることも可能。
- 🧹 **Auto-triage rules** — **severity / ecosystem / dependency scope(runtime か dev か)** で低リスクの alert を自動 dismiss / snooze。本番リスクを隠さずにノイズを削る。
- 👀 AI の修正は **first-pass** として扱う。マージ前のレビューとテストは依然として人間の仕事。

> 🎯 メンタルモデルは「scanner を信用しない」ではなく **「recall(検出率)は高いまま、AI で重要な alert を閉じる」**。Alert → *Assign to agent* → draft PR → 人間レビュー → merge。

> 💰 Public repo は無料。Private repo は **GitHub Code Security**(旧 Advanced Security バンドル)が必要。

## 利用条件と料金

| 機能 | Public repo | Private repo（個人 / Free） | Private repo（Team / Enterprise） |
| --- | :---: | :---: | :---: |
| Dependency graph | ✅ デフォルト ON | ✅ 無料(opt-in) | ✅ 無料 |
| Dependabot alerts | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot security updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot version updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |

> 💰 Dependabot 本体は **どのプランでも完全無料**。GitHub Advanced Security ライセンスは不要。  
> ⚙️ Version updates の Dependabot ジョブは GitHub-hosted runner で実行され、public repo は無料、private repo は Actions の通常無料枠を消費(超過時は従量課金)。
