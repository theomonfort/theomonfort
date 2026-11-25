---
title: "Copilot benchmarks：エージェントのハーネスを比較"
date: "2026-11-17"
summary: "GitHub Copilot benchmarks サイトで、同じモデルを使うエージェントのハーネスを比較し、Terminal-Bench-Science 0.1 の結果を確認できます。"
category: copilot
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-11-17-github-copilot-benchmarks-site-adds-harness-comparisons/"
demoUrl: "https://benchmarks.github.com/?utm_source=benchmark-changelog-benchmark-site-2&utm_medium=changelog&utm_campaign=ignite-nov-2026"
demo:
  - "ベンチマークサイトを開き、Harnesses を選んで Copilot CLI、Claude Code、Codex CLI を比較する。"
  - "ベンチマーク選択メニューから Terminal-Bench-Science 0.1 の結果を確認する。"
---

### ハーネスを比較

新しい **Harnesses** ビューでは、同じモデルと同じ推論の強さを使って、GitHub Copilot CLI、Claude Code、Codex CLI を比較できます。散布図には解決率とタスクあたりの平均コストが表示され、楕円は公開された実行結果間のばらつきを示します。

対応する結果の組み合わせについて、Copilot CLI の解決率の差をパーセントポイント、コスト削減率をパーセントで表示し、近似的な 95% ブートストラップ区間も示します。同じモデルを使う結果の組み合わせのうち、推論の強さが medium のものだけが対象です。Copilot Fusion のような Copilot 専用の構成や、対応する結果がないものは除外されます。

### 科学分野の研究ワークフローを確認

**Terminal-Bench-Science 0.1** は、さまざまな科学分野の研究ワークフローでエージェントを評価します。これにより、ソフトウェア開発以外のベンチマークも確認できます。タスクは各分野の専門家が作成し、レビューしています。

どちらの追加機能もパブリックプレビューです。[GitHub Copilot benchmarks サイト](https://benchmarks.github.com/?utm_source=benchmark-changelog-benchmark-site-2&utm_medium=changelog&utm_campaign=ignite-nov-2026)で結果を確認できます。
