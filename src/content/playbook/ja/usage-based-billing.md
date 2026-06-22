---
title: 従量課金制（UBB）
titleEn: Usage-based Billing
summary: 2026 年 6 月 1 日、GitHub Copilot は従量課金制（UBB）へ移行。コストは実際に処理されたトークン量（入力・出力・キャッシュ）と結びつき、使用量は GitHub AI クレジット（1 クレジット = $0.01 USD）で表示・予算管理される。基本原則をドキュメントに沿って整理。
icon: /theomonfort/icons/ubb-coin.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 30.5
category: administration
related: ['license-management', 'copilot-metrics', 'token-optimization']
links:
  - group: 📰 発表
    label: "Updates to GitHub Copilot billing and plans (2026-06-01)"
    url: https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/
  - group: 📰 発表
    label: GitHub Copilot is moving to usage-based billing
    url: https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
  - group: 📖 公式ドキュメント
    label: Usage-based billing for organizations and enterprises
    url: https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises
  - group: 📖 公式ドキュメント
    label: Budgets for usage-based billing
    url: https://docs.github.com/en/copilot/concepts/billing/budgets-for-usage-based-billing
  - group: 📖 公式ドキュメント
    label: Budgets and alerts
    url: https://docs.github.com/en/billing/concepts/budgets-and-alerts
  - group: 🎁 プロモーション期間
    label: 既存顧客向けの増量（2026/6/1〜9/1）
    url: https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises#promotional-amounts-for-existing-customers
  - group: 💰 課金の仕組み
    label: Models and pricing for GitHub Copilot（モデルレート）
    url: https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing
  - group: 💰 課金の仕組み
    label: GitHub Copilot billing
    url: https://docs.github.com/en/billing/concepts/product-billing/github-copilot-billing
---


## 一言で

<div class="hero-quote hero-quote-admin">
  <p>
    <strong>2026 年 6 月 1 日</strong>、GitHub Copilot は <strong>従量課金制（UBB）</strong> へ移行しました。
  </p>
  <p>
    コストは <strong>実際に処理されたトークン量</strong> と結びつき、使用量は <strong>GitHub AI クレジット</strong>（1 クレジット = $0.01 USD）で表示されます。
  </p>
</div>

> 📰 詳細は <a class="retro-link" href="https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/" target="_blank" rel="noopener noreferrer">Updates to GitHub Copilot billing and plans ↗</a>（Changelog）。
> 💡 コード補完と Next Edit 候補は **AI クレジットを消費せず**、全有料プランで無制限のまま。

## 従量課金制の仕組み

GitHub Copilot がより高度な AI ワークフローをサポートするにつれ、従量課金制はコストを **実行された AI の使用量** と結びつけます。

- **AI の使用量** は、各インタラクション中に処理された **トークン数** で測定されます
- トークンには **プロンプト・レスポンス・キャッシュされたコンテキスト** が含まれます
- **付帯する使用量**: Copilot ライセンス間で **共有（プール）** されます
- **超過使用量**: 予算とコントロールで管理可能です
  - 追加使用量の予算は **米ドルで設定** し、使用量は **GitHub AI クレジット** で表示されます
  - GitHub AI クレジットは **固定レート（1 AI クレジット = $0.01 USD）** で予算から消費されます。例えば $10 の予算は **1,000 AI クレジット** 分に相当します

## トークンの説明

トークンは **AI 処理の単位** です（入力・出力・コンテキスト）。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.2em;margin:1.6em 0;">
<div style="padding:1.3em 1.2em;border:1px solid rgba(155,188,15,0.4);background:rgba(5,6,15,0.5);"><div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.78em;letter-spacing:0.15em;color:#9bbc0f;text-transform:uppercase;margin-bottom:0.6em;">👤 入力トークン</div><div style="color:rgba(232,244,255,0.7);font-style:italic;font-size:0.95em;margin-bottom:0.6em;">送信するもの：</div><ul style="margin:0;padding-left:1.1em;color:#e8f4ff;font-size:0.95em;line-height:1.55;"><li>プロンプトと新しいコンテキスト</li><li>大きなファイルやコードベースに応じて増加</li></ul></div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(0,240,255,0.4);background:rgba(5,6,15,0.5);"><div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.78em;letter-spacing:0.15em;color:#00f0ff;text-transform:uppercase;margin-bottom:0.6em;">🤖 出力トークン</div><div style="color:rgba(232,244,255,0.7);font-style:italic;font-size:0.95em;margin-bottom:0.6em;">受け取るもの：</div><ul style="margin:0;padding-left:1.1em;color:#e8f4ff;font-size:0.95em;line-height:1.55;"><li>AI が生成する応答</li><li>通常、最もコンピューティングコストが高い</li></ul></div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(255,176,0,0.4);background:rgba(5,6,15,0.5);"><div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.78em;letter-spacing:0.15em;color:#ffb000;text-transform:uppercase;margin-bottom:0.6em;">🔄 キャッシュトークン</div><div style="color:rgba(232,244,255,0.7);font-style:italic;font-size:0.95em;margin-bottom:0.6em;">再利用されるもの：</div><ul style="margin:0;padding-left:1.1em;color:#e8f4ff;font-size:0.95em;line-height:1.55;"><li>過去のインタラクションからのコンテキスト</li><li>速度と効率を向上</li></ul></div>
</div>

> 🎯 **ポイント**: すべてのインタラクションは、**入力・出力・コンテキスト** に基づいてトークンを消費します。

## 従量課金制の課金（UBB）

<div style="border:1px solid rgba(155,188,15,0.55);background:rgba(5,6,15,0.45);padding:1.1em 1.3em;margin:0 0 1.4em;text-align:center;">
<div style="font-size:1.35em;font-weight:bold;color:#9bbc0f;line-height:1.4;">課金対象トークン ＝ 入力 ＋ 出力 ＋ キャッシュトークン</div>
</div>

**課金の仕組み:**

- Copilot の利用量は、各インタラクションで処理された **トークンの合計** で測定されます
- トークンは **AI クレジットを消費** します（<a class="retro-link" href="https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing" target="_blank" rel="noopener noreferrer">モデルレート ↗</a> に基づく）
- **AI クレジットが課金の基準** となります

> 🎯 **ポイント**: より大きなプロンプト・より長い応答・より多くのコンテキストは、処理されるトークンとクレジット消費の増加につながります。

## 料金モデルの概要

**プランと含まれる価値**

| 項目 | Copilot Business | Copilot Enterprise |
| --- | --- | --- |
| 月額（変更なし） | **$19** / ユーザー | **$39** / ユーザー |
| 含まれるトークン価値 | **$19** 分（1,900 AI クレジット） | **$39** 分（3,900 AI クレジット） |

> 📦 Copilot プランに含まれる AI クレジットは **エンタープライズ全体で共有** され、トークンの処理に応じて消費されます。
> 🎁 既存顧客は <strong>プロモーション期間（2026/6/1〜9/1）</strong> に <strong>CB 3,000 / CE 7,000</strong> へ増量。<a class="retro-link" href="https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises#promotional-amounts-for-existing-customers" target="_blank" rel="noopener noreferrer">詳細 ↗</a>

**仕組み:**

- クレジットは **エンタープライズ／請求エンティティレベル** で共有されます
- **処理されたトークン** に基づいて消費されます
- **個々のユーザーには紐付きません**

> 🎯 **ポイント**: 顧客は **実際の利用量** に応じて支払う — ユーザー単位ではなく、**エンタープライズ全体で共有されるクレジット**。

## AI クレジット共有プール

<div style="display:grid;grid-template-columns:240px 1fr;gap:2.2em;align-items:start;margin:1.2em 0;">
<div>
<div style="display:flex;flex-direction:column;height:320px;border:1px solid rgba(255,46,136,0.45);">
<div style="height:30%;background:#ff2e88;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;">超過支出</div>
<div style="height:70%;background:rgba(255,46,136,0.28);display:flex;align-items:center;justify-content:center;text-align:center;color:#e8f4ff;font-weight:bold;padding:0 0.5em;line-height:1.4;">ライセンス付帯<br/>AI クレジット</div>
</div>
<div style="text-align:center;font-size:0.78em;color:rgba(232,244,255,0.7);margin-top:0.55em;">総 AI クレジット</div>
</div>
<div style="display:flex;flex-direction:column;gap:1.35em;color:#e8f4ff;font-size:1.02em;line-height:1.75;">
<p style="margin:0;">GitHub Copilot ライセンスに付帯する AI クレジットは <strong style="color:#ffb000;">単一エンタープライズの共有プール</strong> に合算されます。</p>
<p style="margin:0;">ライセンスを持つ <strong style="color:#ffb000;">すべてのユーザー</strong> は、まずこのプールから消費します。</p>
<p style="margin:0;">プールのクレジットがすべて使い切られた後に発生する AI クレジットの使用分は、<strong style="color:#ffb000;">追加費用</strong> となります。</p>
</div>
</div>

## 共有プールの利用分布

**エンタープライズ内での利用分布**

<div style="margin:1.4em 0;">
<div style="border:1px solid rgba(255, 46, 136,0.35);background:rgba(5,6,15,0.4);padding:1.1em 1.2em;display:grid;grid-template-columns:repeat(3,1fr);gap:1em;font-size:1em;color:#e8f4ff;text-align:center;">
<span>👤 ライトユーザー</span>
<span style="color:#ff2e88;">👥 ヘビーユーザー</span>
<span style="color:#ff2e88;">👥👥 ミディアムユーザー</span>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);margin:0.15em 0;color:#ff2e88;line-height:1;text-align:center;align-items:center;">
<span style="font-size:1.1em;">⬇</span>
<span style="font-size:2.8em;">⬇</span>
<span style="font-size:1.8em;">⬇</span>
</div>
<div style="border:1px solid rgba(255, 46, 136,0.6);background:rgba(255, 46, 136,0.08);padding:1.1em;text-align:center;font-size:1.3em;font-weight:bold;color:#e8f4ff;">共有プール</div>
</div>

> ✅ 全ユーザーが **同じプール** から利用 — ただし **利用率は異なる**（ライト／ミディアム／ヘビー）。

## PRU モデル vs AI クレジットモデル

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2em;margin:1.6em 0;">
<div style="padding:1.3em 1.2em;border:1px solid rgba(0,240,255,0.4);background:rgba(5,6,15,0.5);">
<div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.85em;letter-spacing:0.12em;color:#00f0ff;text-transform:uppercase;margin-bottom:0.8em;">PRU モデル（旧）</div>
<div style="color:#e8f4ff;line-height:1.6;font-size:0.95em;"><strong>✅ メリット</strong><br/>あるユーザーが他ユーザーの使用量を使い切ることがない<br/><br/><strong>⚠️ デメリット</strong><br/>他ユーザーに残量があっても、超過使用が発生する可能性</div>
</div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(155,188,15,0.45);background:rgba(5,6,15,0.5);">
<div style="font-family:'DotGothic16','Courier New',monospace;font-size:0.85em;letter-spacing:0.12em;color:#9bbc0f;text-transform:uppercase;margin-bottom:0.8em;">AI クレジットモデル（共有プール）</div>
<div style="color:#e8f4ff;line-height:1.6;font-size:0.95em;"><strong>✅ メリット</strong><br/>無駄が少ない<br/><br/><strong>⚠️ デメリット</strong><br/>ユーザーごとに消費量が偏る可能性</div>
</div>
</div>

> 💡 共有プールは **全体最適** — ヘビーユーザーが多く引いても、ライトユーザーの余剰が吸収する。

## ユーザーレベル Budget（new）

請求期間中にユーザーが消費できる **AI クレジットの合計数**（プール使用分と追加支出の両方を含む）を管理します。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2em;margin:1.6em 0;">
<div style="padding:1.3em 1.2em;border:1px solid rgba(155,188,15,0.45);background:rgba(5,6,15,0.5);">
<div style="font-size:1.5em;margin-bottom:0.35em;">👥</div>
<div style="font-weight:bold;color:#e8f4ff;font-size:1.05em;margin-bottom:0.7em;">ユニバーサル ユーザー レベルの予算</div>
<div style="color:#9bbc0f;font-size:0.95em;margin-bottom:0.5em;line-height:1.5;">エンタープライズ内のすべての Copilot ライセンスユーザーに適用される既定の予算</div>
<div style="color:rgba(232,244,255,0.7);font-size:0.92em;line-height:1.55;">新規ユーザーが基本的な支出権限を持つことで、意図しない過剰支出を防ぎます</div>
</div>
<div style="padding:1.3em 1.2em;border:1px solid rgba(0,240,255,0.4);background:rgba(5,6,15,0.5);">
<div style="font-size:1.5em;margin-bottom:0.35em;">👤</div>
<div style="font-weight:bold;color:#e8f4ff;font-size:1.05em;margin-bottom:0.7em;">個別ユーザー レベルの予算</div>
<div style="color:#9bbc0f;font-size:0.95em;margin-bottom:0.5em;line-height:1.5;">パワーユーザー上書き設定</div>
<div style="color:rgba(232,244,255,0.7);font-size:0.92em;line-height:1.55;">ユニバーサル既定を上書きする、ユーザーごとの個別 AI クレジット予算です。</div>
</div>
</div>

> 🎯 **ポイント**: $0 のユーザーレベル Budget はそのユーザーを即座にブロック。プールに残量があってもユーザー単位で上限を設定できる。

## Budget のオプション

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.9em;margin:1.2em 0 0;font-size:0.82em;">

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">【新】ユーザーレベル Budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="display:grid;grid-template-columns:1fr 1fr;text-align:center;color:#e8f4ff;font-weight:bold;font-size:0.92em;height:2.8em;align-items:start;margin-bottom:1.1em;"><span>ユニバーサル</span><span>個別*</span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;height:200px;">
<div style="display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">超過支出</div>
<div style="flex:1;background:rgba(255, 46, 136,0.3);color:#e8f4ff;display:flex;align-items:center;justify-content:center;">共有プール</div>
</div>
<div style="display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">超過支出</div>
<div style="flex:1;background:rgba(255, 46, 136,0.3);color:#e8f4ff;display:flex;align-items:center;justify-content:center;">共有プール</div>
</div>
</div>
<div style="color:rgba(232,244,255,0.6);font-size:0.82em;margin-top:0.5em;">*ユニバーサル既定を上書きします</div>
</div>
</div>

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">組織レベル Budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="color:#e8f4ff;font-size:0.92em;height:2.8em;margin-bottom:1.1em;">組織の超過支出を制限</div>
<div style="height:200px;display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">超過支出のみ</div>
<div style="flex:1;"></div>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">コストセンターレベル Budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="color:#e8f4ff;font-size:0.92em;height:2.8em;margin-bottom:1.1em;">コストセンターの総超過支出を制限</div>
<div style="height:200px;display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">超過支出のみ</div>
<div style="flex:1;"></div>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;border:1px solid rgba(255, 46, 136,0.4);background:rgba(5,6,15,0.85);">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:3.6em;padding:0.5em 0.6em;line-height:1.25;background:rgba(255, 46, 136,0.14);color:#ff2e88;font-weight:bold;border-bottom:1px solid rgba(255, 46, 136,0.3);">エンタープライズレベル Budget</div>
<div style="padding:0.7em 0.6em;display:flex;flex-direction:column;flex:1;">
<div style="color:#e8f4ff;font-size:0.92em;height:2.8em;margin-bottom:1.1em;">エンタープライズの総超過支出を制限</div>
<div style="height:200px;display:flex;flex-direction:column;">
<div style="flex:1.4;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">超過支出のみ</div>
<div style="flex:1;"></div>
</div>
</div>
</div>

</div>

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.9em;font-size:0.82em;margin-top:0;">
<div></div>
<div></div>
<div style="grid-column:3 / span 2;position:relative;height:4em;">
<div style="position:absolute;left:25%;top:0;transform:translateX(-50%);color:#ff2e88;font-size:1.05em;line-height:1;">▲</div>
<div style="position:absolute;left:25%;top:1.05em;bottom:1.9em;border-left:2px dashed #ff2e88;"></div>
<div style="position:absolute;left:75%;top:0;bottom:1.9em;border-left:2px dashed #ff2e88;"></div>
<div style="position:absolute;left:25%;right:25%;bottom:1.9em;border-top:2px dashed #ff2e88;"></div>
<div style="position:absolute;left:0;right:0;bottom:0;text-align:center;color:#ff2e88;font-weight:bold;font-size:0.95em;">コストセンターの使用量を除外できる</div>
</div>
</div>

## Budget 階層

<div style="background:rgba(255,46,136,0.1);border:1px solid rgba(255,46,136,0.4);color:#e8f4ff;padding:0.5em 0.8em;font-size:0.85em;margin:0.4em 0 1em;"><strong style="color:#ff2e88;">重要ルール:</strong> いずれかの Budget が <strong>$0</strong> になると使用が停止されます</div>

<div style="background:rgba(10,14,39,0.55);border:1px solid rgba(255, 46, 136,0.25);padding:0.9em 1.2em;margin-bottom:0.9em;">
<div style="color:#ff2e88;font-weight:bold;">フェーズ1. 共有 AI クレジットプール</div>
<div style="color:rgba(232,244,255,0.75);font-size:0.82em;margin:0.25em 0 1em;">全ユーザーが共有プールから消費し、ユーザーの <strong style="color:#ff2e88;">ULB</strong> のみがチェックされます</div>
<div style="display:flex;align-items:center;gap:0;font-size:0.9em;">
<div style="flex:none;width:12em;background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.7em 0.5em;">ユーザーレベル予算</div>
<div style="flex:1;height:0;border-top:2px solid #ff2e88;position:relative;"><span style="position:absolute;right:-0.35em;top:50%;transform:translateY(-50%);width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:11px solid #ff2e88;"></span></div>
<div style="position:relative;width:2.8em;height:2.8em;flex:none;"><div style="position:absolute;inset:0.35em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="flex:1;height:0;border-top:2px solid #ff2e88;position:relative;"><span style="position:absolute;left:50%;top:-1.7em;transform:translateX(-50%);color:rgba(232,244,255,0.8);font-size:0.85em;white-space:nowrap;">がゼロ</span><span style="position:absolute;right:-2px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:11px solid #ff2e88;"></span></div>
<div style="width:2.8em;height:2.8em;border-radius:50%;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;flex:none;">X</div>
</div>
</div>

<div style="position:relative;background:rgba(10,14,39,0.55);border:1px solid rgba(255, 46, 136,0.25);padding:0.9em 1.2em;">
<div style="color:#ff2e88;font-weight:bold;">フェーズ2. 共有 AI クレジットプールの枯渇</div>
<div style="color:rgba(232,244,255,0.75);font-size:0.82em;margin:0.25em 0 1em;">超過支出分については、以下の予算をチェック</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1em;font-size:0.82em;justify-items:center;align-items:start;">
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">ユーザーレベル予算</div>
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">組織レベル予算</div>
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">コストセンターレベル予算</div>
<div style="background:rgba(232,244,255,0.12);border:1px solid rgba(232,244,255,0.25);color:#e8f4ff;text-align:center;padding:0.55em 0.2em;width:100%;font-size:0.88em;">エンタープライズレベル予算</div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="height:1.5em;border-left:2px solid #ff2e88;position:relative;"><span style="position:absolute;bottom:-0.55em;left:-0.52em;color:#ff2e88;">▼</span></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="position:relative;width:2.6em;height:2.6em;"><div style="position:absolute;inset:0.32em;background:#ff2e88;transform:rotate(45deg);"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#05060f;font-weight:bold;">?</div></div>
<div style="color:rgba(232,244,255,0.8);">がゼロ</div>
<div style="color:rgba(232,244,255,0.8);">がゼロ</div>
<div style="color:rgba(232,244,255,0.8);">がゼロ</div>
<div style="color:rgba(232,244,255,0.8);">がゼロ</div>
</div>
<div style="position:relative;height:6em;margin-top:0.3em;">
<div style="position:absolute;left:12.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:37.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:62.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:87.5%;top:0;height:2.2em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:12.5%;right:12.5%;top:2.2em;border-top:2px solid #ff2e88;"></div>
<div style="position:absolute;left:50%;top:2.2em;height:1em;border-left:2px solid #ff2e88;"></div>
<div style="position:absolute;left:50%;top:3.2em;transform:translateX(-0.55em);color:#ff2e88;">▼</div>
<div style="position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:2.6em;height:2.6em;border-radius:50%;background:#ff2e88;color:#05060f;font-weight:bold;display:flex;align-items:center;justify-content:center;">X</div>
</div>
</div>

<div style="background:rgba(232,244,255,0.08);border:1px solid rgba(232,244,255,0.2);padding:0.6em 0.9em;font-size:0.78em;color:rgba(232,244,255,0.85);line-height:1.55;margin-top:0.9em;"><strong style="color:#ff2e88;">オプションポリシー:</strong> コストセンターをエンタープライズ予算から除外することで、エンタープライズ予算が $0 になってもコストセンターのユーザーは引き続き使用できます。</div>

## アラートの仕組み

予算（Budget）に **アラート** を有効化すると、支出がしきい値に達したときに **メールで通知** されます。

<div style="display:flex;align-items:center;justify-content:center;gap:0.6em;margin:1.6em 0;flex-wrap:wrap;">
<div style="min-width:6em;text-align:center;border:2px solid rgba(255,46,136,0.6);border-radius:6px;padding:0.8em 1em;background:rgba(255,46,136,0.08);">
<div style="font-size:1.7em;font-weight:bold;color:#ff2e88;line-height:1;">75%</div>
<div style="font-size:0.78em;color:#e8f4ff;margin-top:0.45em;">📧 通知</div>
</div>
<span style="color:#ff2e88;font-size:1.3em;">▶</span>
<div style="min-width:6em;text-align:center;border:2px solid rgba(255,46,136,0.6);border-radius:6px;padding:0.8em 1em;background:rgba(255,46,136,0.08);">
<div style="font-size:1.7em;font-weight:bold;color:#ff2e88;line-height:1;">90%</div>
<div style="font-size:0.78em;color:#e8f4ff;margin-top:0.45em;">📧 通知</div>
</div>
<span style="color:#ff2e88;font-size:1.3em;">▶</span>
<div style="min-width:6em;text-align:center;border:2px solid #ff2e88;border-radius:6px;padding:0.8em 1em;background:#ff2e88;">
<div style="font-size:1.7em;font-weight:bold;color:#fff;line-height:1;">100%</div>
<div style="font-size:0.78em;color:#fff;margin-top:0.45em;">📧 上限到達</div>
</div>
</div>

| 製品タイプ | 予算を超えたとき |
| --- | --- |
| 🎫 **ライセンス製品**（Copilot ライセンス等） | **アラートのみ** — 使用は止まらない |
| ⚡ **従量制**（AI クレジット・Actions 等） | しきい値で **使用を停止** できる |

> 📧 既定の宛先は **アカウント所有者** と **支払い管理者**（追加の宛先も指定可）。
> 📝 作成後の最初の請求サイクルは **作成日以降** の利用のみが対象 — 初回は予算を超えることがあります。
