---
title: "組織移管と移行の制限"
---

**組織移管と移行の制限**は、[[GitHub Enterprise Cloud]]、[[Enterprise Managed Users]]、[[GHE.com Data Residency]]、[[GitHub Enterprise Server]] の間で、一見簡単そうな管理上の近道が使えない理由と、代わりに必要な [[GitHub Migrations]] の経路を説明します。

## 非対応の6つの近道と、対応する代替手段

| 非対応の近道 | アーキテクチャ上の理由 | 対応する代替手段 |
| --- | --- | --- |
| **1. エンタープライズをその場で EMU / 非 EMU に切り替える** | アカウント所有権（`github.com` 全体のユーザー、またはエンタープライズ内の SCIM `<user>_<shortcode>` アカウント）は、[[Enterprise Trial & Initial Setup]] 時に恒久的に固定される | 新しい移行先エンタープライズを作成し、[[EMU Type Conversion]] を [[GitHub Enterprise Importer]] で実行 |
| **2. 「Transfer organization」で EMU / `GHE.com` エンタープライズへ、またはそこから移管する** | その場での組織移管ができるのは、個人アカウント型 `GHEC` エンタープライズ同士で、両方とも `github.com` 上にある場合**のみ**（例: ポートフォリオ型 [[Organization Topology Models]] での M&A） | 新しく作成した移行先組織へ `gh gei migrate-org` を実行 |
| **3. `ghe-migrator` で `GHEC` または `GHE.com` へ移行する** | `ghe-migrator` は `GHES -> GHES` のアプライアンス移行専用 | [[GitHub Enterprise Importer]] または [[Enterprise Live Migrator]] を使用 |
| **4. `ELM`（`gh elm`）でデータレジデンシーなしの `github.com` へ移行する** | [[Enterprise Live Migrator]] の移行先はリージョン別の `*.ghe.com` エンタープライズのみ | `gh gei migrate-repo` を使用 |
| **5. `GHE.com` から `github.com` へセルフサービスで戻す** | リージョン別 `*.ghe.com` テナントから `github.com` へデータを移す公式のセルフサービス CLI 経路はない | **GitHub Expert Services** に依頼 |
| **6. Git `40 GiB` / メタデータ `40 GiB` / ファイル `400 MiB` を超えるリポジトリを、そのまま `GEI` で移行する** | `GEI` のクラウドアーカイブ上限を超える | Git 履歴を直接プッシュ、`ELM`（`GHES 3.17+` から `GHE.com`）を使用、または **GitHub Expert Services** に依頼 |
