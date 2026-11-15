---
title: "SDLC Stage 04 Test & Secure"
group: "sdlc"
tags: ["sdlc", "actions", "ghas", "autofix", "code-scanning", "secret-protection"]
---

**SDLC Stage 04 Test & Secure** embeds automated CI testing, maintainability analysis, and application security directly into the [[AI Developer Platform]] pipeline following [[SDLC Stage 03 Review]].

## Core Testing & Security Controls

- **GitHub Actions** (`Native Platform`): Event-driven CI/CD executing **45.4B jobs/year**, hardened with GA **Actions workflow lockfiles** from the [[Scale Pillar]].
- **Copilot Autofix / Agentic Autofix** (`Copilot`): Automatically generates and validates remediation patches for security alerts (Agentic Autofix GA in the [[Trust Pillar]]).
- **Code Quality** (`Native Platform`): Continuous maintainability, reliability, and complexity findings surfaced directly on pull requests.
- **Code Scanning** (`Native Platform`): CodeQL semantic analysis paired with **AI Scan** (GA for pull requests, Public Preview for full repositories).
- **Secret Protection & Supply Chain** (`Native Platform`): Push protection against leaked credentials, plus **Dependabot Reachability Analysis** and **GitHub Package Firewall** under the [[Trust Pillar]].

Verified builds then transition into continuous production automation in [[SDLC Stage 05 Operate]].
