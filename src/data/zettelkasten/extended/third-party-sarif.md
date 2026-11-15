---
title: "Third-Party SARIF"
group: "secure"
tags: ["sast", "sarif", "integrations", "scanning"]
aliases: ["SARIF"]
---

**SARIF** (Static Analysis Results Interchange Format) is an open JSON standard that lets [[Code Scanning]] act as a single developer-facing hub on [[GitHub]].

## Unified Security Experience

- Upload `.sarif` output from external SAST, IaC, container, or DAST scanners (Semgrep, Snyk, Checkmarx, Trivy, ZAP) via `github/codeql-action/upload-sarif` in [[GitHub Actions]] ([[Marketplace Actions]] and [[Actions Cache & Artifacts]]) or REST API.
- External findings appear right next to [[CodeQL]] and [[AI Scan]] alerts in pull request diff annotations, [[Rulesets & Merge Protection]] gates, [[Security Campaigns]], and [[Security Overview]].
