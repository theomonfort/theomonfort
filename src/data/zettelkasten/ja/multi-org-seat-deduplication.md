---
title: "複数組織間のシート重複排除"
---

**複数組織間のシート重複排除**は、同じエンタープライズ内で1人のユーザーが複数の組織や、GitHub Connect でリンクした [[GitHub Enterprise Server]] インスタンスに属していても、[[GHE & Copilot Licenses]] の請求期間ごとに**1回だけ**課金する仕組みです。

## 1つの請求書へのシート集約

- **N 個の組織でも GHE は1シート**: 同じ [[GitHub Enterprise Cloud]] アカウント内では、1組織でも50組織でも、消費する GitHub Enterprise ライセンスは **1** つです。
- **N 個の組織でも Copilot の課金は1回**: 複数組織が同じユーザーに Copilot シートを割り当てても、エンタープライズの請求書では請求期間ごとに **1** シートだけ課金されます。Business の組織と Enterprise の組織にまたがる場合は、上位の Copilot Enterprise プランが課金と [[Shared AI Credit Pool]] へのクレジット拠出を決めます。
- **コストセンターへの帰属**: 複数組織の料金を割合で分割することはありません。[[Cost Centers]] の4段階の優先順位に従って帰属先を決めます。

## 複数組織で Copilot ポリシーが競合する場合の優先順位

[[Enterprise Policies]] で Copilot 設定を「Let organizations decide」にしている複数組織へユーザーが所属する場合、組織間の設定競合は次のルールで一意に解決されます。

| 優先ルール | 対象の Copilot 機能 | 組織をまたぐ実効結果 |
| --- | --- | --- |
| **最も制限の緩い設定が優先** | IDE の Copilot Chat、Agent モード、Copilot コードレビュー、クラウドエージェント、Web 検索、CLI | 所属組織の**いずれか**が有効にしていれば、ユーザーはどこでも利用可能 |
| **最も制限の厳しい設定が優先** | **Copilot Metrics API** への包含と **Suggestions matching public code** | 所属組織の**いずれか**が無効 / ブロックにしていれば、そのユーザーでは全体でブロック |
