---
title: "Secret scanning: Anthropic keys blocked by default, Salesforce joins as a partner"
date: "2026-10-13"
summary: "Secret scanning now detects two Anthropic API key types and blocks them with push protection by default. Salesforce joins the secret scanning partner program, and Cloudsmith API keys are now detected."
category: security
source: "https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce/"
demoUrl: "https://github.com/enterprises/octodemo/settings/security_analysis/pattern_configurations?query=anthropic&page=0&tab=native"
demo:
  - "Open octodemo's Pattern configurations, search for anthropic, and show the GitHub default for anthropic_service_api_key and anthropic_user_api_key. Do not change the setting."
  - "On the same page, use the Enterprise setting column to explain that the default can be overridden per pattern. Do not push a real Anthropic key."
---

### Key takeaways

- **Anthropic keys blocked by default**: `anthropic_service_api_key` and `anthropic_user_api_key` are newly detected and added to push protection defaults. Repositories with secret scanning enabled, including free public repositories, automatically block commits containing these secrets.
- **Salesforce joins as a partner**: when `salesforce_marketing_cloud_api_oauth2_token` is found in a public repository, GitHub forwards it to Salesforce so the credential can be revoked or rotated.
- **Cloudsmith detection**: `cloudsmith_api_key` is now automatically detected in your repositories.
- **Partner vs. User**: Partner secrets are reported to the issuer when found in public repositories. User secrets generate alerts in public or private repositories.

[Playbook: What gets detected (slide 4)](https://theomonfort.github.io/theomonfort/en/playbook/secret-scanning/?present=1&slide=4)

[Supported secret scanning patterns (official documentation)](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns) / [About secret scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning) / [Secret scanning partner program](https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program)
