---
title: "Enterprise Procurement Channels"
group: "licensing"
tags: ["procurement", "metered", "subscription", "visual-studio", "azure", "licensing"]
---

**Enterprise Procurement Channels** determine whether an enterprise pays for [[GHE & Copilot Licenses]], GitHub Advanced Security (`GHAS`), and cloud compute through prepaid annual subscriptions, Visual Studio bundles, or pay-as-you-go metered billing (direct invoice, Microsoft Azure subscription, AWS/GCP Marketplace, or channel reseller).

## Three Enterprise Billing Model Combinations

| Layer | Method 1 (Classic Hybrid) | Method 2 (Metered Security) | Method 3 (Full Metered Pay-As-You-Go) |
| --- | --- | --- | --- |
| **User License (`GHE`)** | Prepaid subscription | Prepaid subscription | **Metered billing** |
| **Committer License (`GHAS`)** | Prepaid subscription | **Metered billing** | **Metered billing** |
| **Add-Ons (`Copilot`, `Actions`, `Codespaces`, `Packages`)** | **Metered billing** | **Metered billing** | **Metered billing** |

## Visual Studio Subscription Bundling

- **Matched Accounts**: Linking an enterprise user's account to a **Visual Studio Enterprise or Professional with GitHub Enterprise** subscription consumes a bundled VS license instead of a standalone GHE seat.
- **Unaffiliated Caveat**: Unlike standard metered GHE seats, a matched Visual Studio subscriber consumes their bundled VS-GHE license **even while Unaffiliated** (before joining any organization; see [[License Audit & Seat Reclamation]]).

## FinOps Implications of Metered vs Prepaid Channels

- **Azure Subscription Routing**: Under metered billing, each [[Cost Centers]] unit can link to a distinct **Azure subscription ID** for direct department chargeback; prepaid volume licenses are excluded from cost centers.
- **Spending Controls**: Metered GHE licenses support `75% / 90% / 100%` alert budgets in [[Budgets & Spending Limits]], whereas prepaid volume licenses cannot use billing budgets. Because invoiced enterprise accounts ship with unlimited metered spending by default, pair Method 1-3 setups with [[Usage-Based Billing]] caps immediately.
