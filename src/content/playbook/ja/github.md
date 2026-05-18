---
title: ギットハブ
titleEn: GitHub
summary: 1.8 億人以上の開発者が利用する AI ネイティブの開発者プラットフォーム。Pull Request から GitHub Copilot まで、ソフトウェア開発の歴史を作り続ける。
icon: /theomonfort/github-white-icon.svg
color: magenta
order: 1
category: introduction
related: ['copilot-chat', 'cloud-agent']
links:
  - group: 🔗 公式リソース
    label: About GitHub
    url: https://github.com/about
  - group: 🔗 公式リソース
    label: GitHub Copilot
    url: https://github.com/features/copilot
  - group: 🔗 公式リソース
    label: GitHub Enterprise
    url: https://github.com/enterprise
  - group: 🔗 公式リソース
    label: GitHub Well-Architected
    url: https://wellarchitected.github.com
  - group: 📰 ニュース・発信
    label: GitHub Blog
    url: https://github.blog
  - group: 📰 ニュース・発信
    label: GitHub Changelog
    url: https://github.blog/changelog
  - group: 📰 ニュース・発信
    label: GitHub YouTube
    url: https://www.youtube.com/@GitHub
  - group: 🇯🇵 日本コミュニティ
    label: GitHub Japan YouTube
    url: https://www.youtube.com/@GitHubJapan
  - group: 🇯🇵 日本コミュニティ
    label: GitHub Japan X (Twitter)
    url: https://x.com/GitHubJapan
---

## 一言で

<div class="hero-quote hero-quote-mona">
  <p>こんにちは、<strong>Mona</strong> です！<strong>GitHub</strong> の顔として世界中の開発者を見守っています。</p>
  <p>今日お話しする <strong>GitHub</strong> は、<strong>1.8 億人以上</strong>の開発者が集う世界最大の AI ネイティブ開発者プラットフォームです。</p>
</div>

## 数字で見る GitHub

- GitHub 開発者：世界で **1.8 億人以上**（[2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)）
- GitHub Copilot 登録ユーザー：**2,000 万人以上**（[2025](https://www.microsoft.com/en-us/investor/events/fy-2025/earnings-fy-2025-q4.aspx)）
- GitHub Copilot 有料サブスクリプション：**470 万人以上**（[2026](https://www.getpanto.ai/blog/github-copilot-statistics)）
- エンタープライズ顧客：**77,000 社以上**（[2024](https://www.microsoft.com/investor/reports/ar24/)）
- Fortune 100 の **約 90%** が Copilot を採用（[2025](https://www.microsoft.com/en-us/investor/events/fy-2025/earnings-fy-2025-q4.aspx)）
- 有料 AI コーディングツール市場シェア **約 42%**（[2025](https://www.secondtalent.com/resources/github-copilot-statistics/)）

## 進化の歴史

GitHub の歩みを振り返れば、現在地が見えてくる ──

- **2008・Pull Request** で共有とコラボの業界標準を確立
- **2012・GitHub Enterprise** で大企業の管理・セキュリティに対応
- **2019・Actions / GHAS** で CI/CD と DevSecOps をワークフローに統合
- **2021・GitHub Copilot** で世界初の AI コーディングアシスタントを提供
- **2025・Agent HQ** で AI が自律的に開発を支える時代へ ── 本日はここを中心にお話しします

```mermaid
%%{init: {"theme":"base","timeline":{"disableMulticolor":true},"themeVariables":{"cScale0":"#0a0e27","cScale1":"#0a0e27","cScale2":"#0a0e27","cScaleLabel0":"#00f0ff","cScaleLabel1":"#00f0ff","cScaleLabel2":"#00f0ff","primaryTextColor":"#00f0ff","textColor":"#00f0ff","fontSize":"25px"}}}%%
timeline
  title GitHub の進化
  2008 : Pull Request
  2012 : GitHub Enterprise
  2019 : Actions / GHAS
  2021 : GitHub Copilot
  2025 : Agent HQ
```

## AI 開発者プラットフォーム

SDLC の **計画 → 実装 → レビュー → テスト・セキュリティ → 運用** を、すべて GitHub 上の AI が一気通貫で支える。

```mermaid
%%{init: {"theme":"base","themeVariables":{"cScale2":"#0e1430","cScale3":"#0e1430","cScale4":"#0e1430","cScale5":"#0e1430","cScale6":"#0e1430","cScaleLabel2":"#9bbc0f","cScaleLabel3":"#ff2e88","cScaleLabel4":"#ffb000","cScaleLabel5":"#00f0ff","cScaleLabel6":"#9bbc0f"}}}%%
kanban
  PLAN[📋 Plan]
    plan_projects[GitHub Projects]
    plan_issues[Issues/Discussions]
    plan_agent[Plan mode]
    plan_spaces[Skills/Instructions ...]
  CODE[💻 Code]
    code_agent_mode[Copilot Chat]
    code_cloud_agent[Cloud Agent]
    code_loops[CLI]
    code_codespaces[Codespaces]
  REVIEW[✅ Review]
    review_cloud_agent[Pull Requests]
    review_code_review[Code Review]
    review_playwright[Playwright]
    review_pr[Rubber Duck]
  TEST[🔒 Test & Secure]
    test_actions[Actions]
    test_autofix[Autofix]
    test_quality[Code Quality]
    test_workflows[Agentic Workflows]
  OPS[🚀 Operate]
    ops_metrics[Metrics]
    ops_models[Copilot Memory]
    ops_workflows[Agentic Workflows]
    ops_sre[Copilot Metrics]
```

## 業界からの評価

第三者機関からの評価でも、GitHub は **AI コーディング領域のリーダー** として認められている。

- **IDC**：AI コーディングとソフトウェアエンジニアリングテクノロジーで **リーダー** に選出
- **Gartner**：マジック・クアドラント、**AI コーディングアシスタント** で **リーダー** に選出

<div class="quadrant-small">

```mermaid
%%{init: {"theme":"base","themeVariables":{"quadrant1Fill":"#0a1a2e","quadrant2Fill":"#1a0e1f","quadrant3Fill":"#0f0a1f","quadrant4Fill":"#0a1f1a","quadrant1TextFill":"#00f0ff","quadrant2TextFill":"#ff7ab2","quadrant3TextFill":"#c9a5ff","quadrant4TextFill":"#9bbc0f","quadrantTitleFill":"#e8f4ff","quadrantPointFill":"#ffb000","quadrantPointTextFill":"#e8f4ff","quadrantXAxisTextFill":"#e8f4ff","quadrantYAxisTextFill":"#e8f4ff","quadrantInternalBorderStrokeFill":"#2a3050","quadrantExternalBorderStrokeFill":"#00f0ff"}}}%%
quadrantChart
    title Magic Quadrant for AI Code Assistants (Aug 2025)
    x-axis Low Vision --> Completeness of Vision
    y-axis Low Execution --> Ability to Execute
    quadrant-1 Leaders
    quadrant-2 Challengers
    quadrant-3 Niche Players
    quadrant-4 Visionaries
    GitHub: [0.81, 0.82]
    Amazon: [0.72, 0.75]
    Cognition: [0.74, 0.70]
    GitLab: [0.68, 0.57]
    Google Cloud: [0.63, 0.54]
    Harness: [0.62, 0.49]
    Qodo: [0.59, 0.45]
    Tabnine: [0.54, 0.41]
    Augment Code: [0.51, 0.36]
    Anysphere: [0.45, 0.66]
    Alibaba Cloud: [0.39, 0.61]
    Tencent Cloud: [0.26, 0.43]
    IBM: [0.37, 0.40]
    JetBrains: [0.32, 0.24]
```

</div>
