---
title: "従量課金"
---

**従量課金**（`UBB`）は、[[GitHub]] の使用量計測型の課金アーキテクチャです。クラウドの計算資源（Actions、Codespaces、Packages）に加え、**2026年6月1日**からは GitHub Copilot、Cloud Agent、Spark、GitHub Advanced Security の AI SKU におけるトークンベースの AI 利用にも適用されます。

## GitHub AI クレジットと換算レート

- **固定の課金単位**：AI 使用量は **GitHub AI クレジット**で計測、報告され、**`1 AI credit = $0.01 USD`** に固定されています（たとえば `$10` の超過利用予算は **`1,000 AI credits`** に相当）。
- **基本の補完は無制限**：インラインの**コード補完**と **Next Edit の提案**は **AI クレジットを消費せず**、有料の [[GHE & Copilot Licenses|GHE と Copilot のライセンス]]すべてで無制限のままです。
- **データレジデンシーの倍率**：[[Copilot with Data Residency|データレジデンシー対応の Copilot]]で厳密なリージョン内モデルルーティングを有効にすると、AI クレジット消費量が **`+10%`** になります。

## トークン計算式と処理区分

対話型 Chat、CLI、コードレビュー、Cloud Agent の各ターンは、モデルごとのトークン単価に従ってクレジットを消費します（従来の [[Premium Request Model|プレミアムリクエスト方式]]を置き換え）。

`Billable tokens = Input tokens + Output tokens + Cached tokens`

| トークン区分 | 対象 | コストと増加要因 |
| --- | --- | --- |
| **入力トークン** | ユーザープロンプトと、新しく添付したファイル、差分、ツール出力 | 大きなファイル、広範なコードベース検索、長いセッションで増加 |
| **出力トークン** | AI モデルが生成した推論とコード / テキスト | 最先端モデルではトークンあたりの計算単価が最も高い |
| **キャッシュトークン** | 以前のターンから再利用するプロンプト / 会話コンテキスト | 複数ターンのエージェントループを高速化する割引単価 |

## 共有される付与クレジットと計測される超過利用

ライセンスに含まれるクレジットは Enterprise の [[Shared AI Credit Pool|共有 AI クレジットプール]]に集約されます。使い切った後のトークン消費は米ドルの超過料金として課金され、[[Cost Centers|コストセンター]]、[[Budgets & Spending Limits|予算と支出上限]]、[[Budget Hierarchy|予算の階層]]で管理されます。
