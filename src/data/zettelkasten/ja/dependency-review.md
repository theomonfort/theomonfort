---
title: "依存関係レビュー"
---

[[Dependabot Alerts & Updates|Dependabot のアラートと更新]]がマージ後の**デフォルトブランチ**を監視するのに対し、**依存関係レビュー**は危険なパッケージの取り込みを未然に防ぐ [[Dependabot]] の**プルリクエストゲート**です。

## プルリクエストの保護方法

- マニフェストやロックファイルを変更する各 PR で、ベースコミットとヘッドコミットの [[Dependency Graph|依存関係グラフ]]を比較します。
- 既知の CVE、マルウェアアドバイザリ、許可されていないオープンソースライセンス、保守されていない兆候がある新規パッケージを、PR の Files Changed ビューで直接指摘します。
- **適用**: `actions/dependency-review-action` のチェックを [[Rulesets & Merge Protection|ルールセットとマージ保護]]と組み合わせます（パブリックリポジトリでは無料、プライベートリポジトリでは [[Code Security]] の一部）。または [[Open Source License Compliance|オープンソースライセンスのコンプライアンス]]で、ライセンスルールをエンタープライズ全体に適用します。
