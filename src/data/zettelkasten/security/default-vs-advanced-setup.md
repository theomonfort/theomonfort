---
title: "Default vs Advanced Setup"
group: "scanning"
tags: ["codeql", "rollout", "actions"]
---

[[Code Scanning]] offers two ways to run [[CodeQL]], allowing organizations to start fast via [[Security Configurations]] and drop down to custom pipelines only when needed:

## Default Setup (Recommended Start)

- **One-click, workflowless**: GitHub auto-detects languages, runs scans on push, PR, and schedule, and keeps configuration up to date with zero `.yml` maintenance.
- **Organization customization**: Custom repository properties (`github-codeql-config-file` and `github-codeql-extra-queries`) let admins exclude paths or inject org-wide CodeQL packs and `models-as-data` without switching off Default setup.

## Advanced Setup

- Generates an explicit `.github/workflows/codeql.yml` pipeline in [[GitHub Actions]] ([[Workflows & Triggers]]).
- Required when compiled C/C++ or Java projects need custom build steps, matrix [[Actions Runners]], third-party coding standards (MISRA, CERT, AUTOSAR), or side-by-side [[Third-Party SARIF]] uploads.
