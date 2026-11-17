---
title: "copilot-setup-steps.yml"
---

**copilot-setup-steps.yml**（`.github/workflows/copilot-setup-steps.yml`）は、[[Copilot Cloud Agent]] がコーディングを始める前に、その GitHub Actions ランナー環境をカスタマイズします。

## ワークフローの構造と機能

```yaml
name: "Copilot Setup Steps"
on: workflow_dispatch
jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest # or larger GitHub runner, self-hosted, or windows-latest
    steps:
      - uses: actions/checkout@v4
        with:
          lfs: true
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
```

- **カスタマイズ**: `npm` / `pip` / `apt` パッケージの事前インストール、ランナーの CPU / RAM の拡張、セルフホストまたは Windows ランナーの指定、Git LFS の有効化、環境変数の注入、[[Cloud Agent MCP Configuration]] と併せたエージェントのファイアウォール調整ができます。
