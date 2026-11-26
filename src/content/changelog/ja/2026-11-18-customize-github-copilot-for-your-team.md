---
title: "チーム向けに GitHub Copilot をカスタマイズ"
date: "2026-11-18"
summary: "Organization チームが、直接のメンバー向けに Copilot Agent Plugins の既定設定を共有できるようになりました。"
category: copilot
status: "GA"
source: "https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team/"
demoLinks:
  - label: "octodemo → theo-team → Customize Copilot"
    url: "https://github.com/orgs/octodemo/teams/theo-team/copilot"
demo:
  - "theo-team の Customize Copilot ページを開き、利用可能なマーケットプレイスとチームのプラグインを見せる。"
  - "チームのメンテナーまたは Organization オーナーがマーケットプレイスを追加し、個々のプラグインをチーム向けに選択できることを説明する。"
  - "選択したプラグインは、Enterprise と Organization のポリシーに従い、チームの直接のメンバーの既定設定になることを説明する。"
---

### チームで共有する設定

チームのメンテナーと Organization オーナーは、**Agent Plugins** を Organization チームの既定設定として選択できます。プラグインはスキルや MCP サーバーの設定などをまとめるため、メンバーが個別に設定する必要がありません。

Copilot 組み込み、Enterprise、またはチームが追加したマーケットプレイスからプラグインを探せます。マーケットプレイスを追加するとプラグインを参照できるようになり、個々のプラグインを選択してチーム向けに有効化します。

### 対象とポリシー

- チームの既定設定は、VS Code、GitHub Copilot app、Copilot CLI を使う**直接のメンバー**に適用されます。子チームのメンバーには継承されません。
- 対象は **Organization チーム**であり、Enterprise チームではありません。Copilot Business と Copilot Enterprise で利用できます。
- ポリシーが許可する場合、メンバーはチームのプラグインをオフにできます。利用可能なマーケットプレイスや必須・ブロック対象のプラグインには、Enterprise と Organization のポリシーが優先されます。

### ドキュメント

- [GitHub Copilot のプラグイン](https://docs.github.com/copilot/concepts/customizations/plugins)
