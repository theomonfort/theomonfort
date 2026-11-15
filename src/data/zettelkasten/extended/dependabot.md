---
title: "Dependabot"
group: "secure"
tags: ["sca", "supply-chain", "dependencies", "product"]
---

**Dependabot** is GitHub's built-in supply-chain security bot (**SCA**). While [[Code Scanning]] inspects the code you wrote, Dependabot checks the third-party libraries and [[GitHub Actions]] ([[Marketplace Actions]] and [[Workflow Lockfiles]]) someone else wrote.

Core Dependabot features are free on both public and private repositories; enterprise governance and agentic features pair with [[Code Security]].

## Core Layers & Supply-Chain Capabilities

- [[Dependency Graph]]: Parses manifests and lockfiles to map direct and transitive packages and export SBOMs.
- [[Dependabot Alerts & Updates]]: Three distinct layers: Security alerts (Advisory Database + EPSS), automatic Security updates PRs, and scheduled Version updates.
- [[Dependency Review]]: Pull-request check blocking newly introduced vulnerable packages or disallowed licenses before merge via [[Rulesets & Merge Protection]].
- [[Open Source License Compliance]]: Central enterprise license policy enforced on PRs with managed exception workflows.
- [[Reachability Analysis]]: Combines [[CodeQL]] call-path analysis with advisory data to prioritize vulnerabilities your code actually calls.
- [[Package Firewall]]: Blocks risky `npm` downloads (malware, fresh unvetted releases, lost SLSA attestations) before developers, agents, or CI install them.
- [[Auto-Triage & Assign to Agent]]: Filter low-impact noise with auto-triage rules and delegate complex upgrades to coding agents.
