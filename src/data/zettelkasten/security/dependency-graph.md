---
title: "Dependency Graph"
group: "dependabot"
tags: ["sca", "sbom", "lockfiles"]
aliases: ["SBOM"]
---

The **Dependency Graph** is the foundation underneath [[Dependabot]] on [[GitHub]]. It parses repository manifests and lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `requirements.txt`, `pom.xml`, `go.mod`, `Cargo.lock`, [[GitHub Actions]] `.github/workflows/*.yml` for [[Marketplace Actions]], and more) to build a complete inventory of **direct and transitive dependencies**.

## Downstream Capabilities

- Feeds [[Dependabot Alerts & Updates]] whenever a new CVE or malware advisory lands in the GitHub Advisory Database.
- Computes diff-level package and license changes for [[Dependency Review]] and [[Open Source License Compliance]].
- **One-click SBOM export**: Generates an **SPDX JSON Software Bill of Materials** from Insights > Dependency graph > Export SBOM (or REST API) for customer audits and supply-chain compliance.
