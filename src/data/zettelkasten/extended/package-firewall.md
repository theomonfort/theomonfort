---
title: "Package Firewall"
group: "secure"
tags: ["sca", "npm", "supply-chain", "malware", "dependabot"]
---

While [[Dependabot Alerts & Updates]] and [[Dependency Review]] inspect Git commits and pull requests, **Package Firewall** (Public Preview in [[Dependabot]] under [[Code Security]]) protects the **install step itself** (`npm install`) on developer laptops, coding agent sandboxes, and CI runners.

## Three Download Policies

1. **Known vulnerabilities & malware**: Blocks downloads matching CVEs or malicious package advisories at your severity threshold.
2. **Minimum version age (cooldown)**: Holds brand-new package versions (for example `< 7 days` old) until the open-source community vets compromised maintainer releases.
3. **Provenance & lifecycle script regressions**: Flags versions that suddenly drop **SLSA build attestations** or introduce unexpected `preinstall` / `postinstall` scripts.

Works either directly through GitHub's registry proxy or chained in front of JFrog Artifactory, with **Enforce** or **Audit** modes.
