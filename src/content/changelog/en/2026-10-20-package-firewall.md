---
title: "Package firewall: block risky npm packages before installation"
date: "2026-10-20"
summary: "Block risky npm downloads before they reach developers, coding agents or CI, using enterprise policies."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/"
demoUrl: "https://github.com/enterprises/octodemo/settings/policies/package_firewall"
---

**Package firewall blocks downloads before installation.** It complements Dependabot alerts and PR checks, rather than replacing them.

### What it blocks

- **New versions**: enforce a minimum package age, even without a known advisory.
- **Known malware and vulnerabilities**: check GitHub Advisory Database, with a configurable vulnerability severity threshold.
- **Attestation downgrades**: reject versions that drop previously present SLSA attestations.
- **New install scripts**: block newly introduced scripts such as `postinstall`.

### How to deploy

Set rules under **Enterprise → Policies → Package firewall**, then choose a path:

- **With Artifactory**: route public npm downloads through the firewall centrally. Clients already using that virtual repository keep their settings. **Experimental support.** [Setup steps](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-artifactory).
- **Without a central registry**: point npm's `~/.npmrc` at the firewall on developer machines, agent environments and CI runners. Distribute the configuration through device management, bootstrap scripts or shared CI workflows, rather than setting up each manually. [Setup steps](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-npm).

Both paths require an enterprise-member token, stored securely.

**The policy switch does not reroute traffic.** Only downloads passing through the firewall are checked; direct registry access can bypass it.

Blocked requests include an exception link for enterprise administrators or security managers to review.

### Availability

**As of 2026-10-22:** npm only, GitHub Enterprise Cloud including data residency, public preview. **Free during preview**, with metered billing planned for general availability.

[Policies and exceptions](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall)
