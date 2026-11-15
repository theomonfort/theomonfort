---
title: "Dependabot Alerts & Updates"
group: "secure"
tags: ["sca", "cve", "epss", "updates", "dependabot"]
---

[[Dependabot]] separates supply-chain maintenance into **three independent toggles** built on the [[Dependency Graph]]:

## 1. Dependabot Alerts (Detection)

- Matches your dependency inventory against the **GitHub Advisory Database** (NVD CVEs, GHSA maintainer advisories, ecosystem feeds, and opt-in **`npm` malware alerts**).
- Enriches every alert with an **EPSS** (Exploit Prediction Scoring System) probability score so teams prioritize vulnerabilities exploited in the wild, alongside [[Reachability Analysis]] and [[Auto-Triage & Assign to Agent]].

## 2. Dependabot Security Updates (Reactive Fix)

- Automatically opens a pull request bumping a vulnerable package to the **minimum patched version** as soon as an alert triggers.

## 3. Dependabot Version Updates (Proactive Hygiene)

- Configured via `.github/dependabot.yml` to check ecosystems (including [[GitHub Actions]] [[Marketplace Actions]], updating [[Workflow Lockfiles]] in the same PR, plus Docker) on a schedule (`daily`, `weekly`, `monthly`), supporting **grouped updates** so upgrades arrive as one reviewable PR instead of dozens.
