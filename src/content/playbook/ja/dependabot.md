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

## 利用条件と料金

| 機能 | Public repo | Private repo（個人 / Free） | Private repo（Team / Enterprise） |
| --- | :---: | :---: | :---: |
| Dependency graph | ✅ デフォルト ON | ✅ 無料(opt-in) | ✅ 無料 |
| Dependabot alerts | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot security updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |
| Dependabot version updates | ✅ 無料 | ✅ 無料 | ✅ 無料 |

> 💰 Dependabot 本体は **どのプランでも完全無料**。GitHub Advanced Security ライセンスは不要。  
> ⚙️ Version updates の Dependabot ジョブは GitHub-hosted runner で実行され、public repo は無料、private repo は Actions の通常無料枠を消費(超過時は従量課金)。
