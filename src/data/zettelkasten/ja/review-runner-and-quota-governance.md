---
title: "レビューランナーと利用枠のガバナンス"
---

**レビューランナーと利用枠のガバナンス**は、Organization と Enterprise 全体で [[Copilot Code Review]] の計算処理、ランナーの固定、機密ファイルの除外、支出上限を制御します。

## Actions の計算資源とランナーの一元固定

**2026年6月1日**以降、[[Agentic Review Tool-Calling|エージェント型レビューのツール呼び出し]]は GitHub Actions ランナー内で動作し、Copilot AI クレジット / プレミアムリクエストに加えて **GitHub Actions の分数**を消費します。

| ガバナンス制御 | 設定場所 | 運用上の効果 |
| --- | --- | --- |
| **Organization のランナー種類とロック** | `Org -> Copilot -> Runner type -> Runner type configuration` | 全リポジトリの既定ランナー（`GitHub-hosted standard`、`larger`、`self-hosted`）を設定し、**ロック**でリポジトリ単位の上書きを禁止（Cloud Agent と共通） |
| **カスタムセットアップ環境** | `.github/workflows/copilot-setup-steps.yml` | `runs-on` ラベルをカスタマイズし、エージェント型レビュー用のコンパイラー、リンター、プライベートレジストリを事前設定 |
| **セルフホストのコスト制御** | セルフホスト Actions ランナーグループ | 独自のビルドキャッシュをプライベートネットワーク内に維持しつつ、**GitHub Actions の分数課金はゼロ** |
| **推論レベルと予算の上限** | Copilot の課金および [[Review Effort Levels|レビューの推論レベル]]のポリシー | 最大推論レベル（`Lite` / `Balanced` / `Max`）を制限し、月間 AI クレジット SKU 予算を適用 |

## コンテンツ除外ルール

- パスベースの **Copilot コンテンツ除外**（`Repo -> Settings -> Copilot -> Content exclusion`、加えて Organization と Enterprise のポリシー）は、レビューコンテキストを組み立てる前に、条件に一致するシークレット設定、ベンダーのディレクトリツリー、規制対象ファイルを除外します。バイナリとロックファイルの組み込み除外と併用されます。

## 共通のランナーと課金の制御

- [[copilot-setup-steps.yml]] と [[Actions Runners|Actions ランナー]]のセットアップパターンを共有し、月間のレビュー使用量は [[Usage-Based Billing|従量課金]]と [[Premium Request Model|プレミアムリクエスト方式]]で計測します。
