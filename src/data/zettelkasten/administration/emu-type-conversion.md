---
title: "EMU Type Conversion"
group: "migrations"
tags: ["emu", "conversion", "gei", "mannequins", "runbook", "migrations"]
---

**EMU Type Conversion** is the six-step migration runbook for moving between personal-account [[GitHub Enterprise Cloud]] and [[Enterprise Managed Users]] (including `github.com ->` [[GHE.com Data Residency]], or `EMU -> non-EMU`), required because enterprise identity types cannot change in place (see [[Org Transfer & Migration Limits]]).

## Six-Step End-to-End Conversion Runbook

1. **Inventory & Create Target Enterprise**: Audit what [[GitHub Enterprise Importer]] includes vs excludes (secrets, Apps, Packages, Projects, LFS, rulesets), then spin up the new target enterprise via [[Enterprise Trial & Initial Setup]].
2. **Configure Target Identity & Migration Tokens**:
   - Wire up [[SAML & OIDC SSO]] + [[SCIM Provisioning]] on the target EMU IdP (or verify personal accounts for `EMU -> non-EMU`).
   - Grant source `org owner` / `migrator` and target `enterprise owner` roles (see [[Enterprise Admin Roles]]), create classic PATs (authorized for SSO), and confirm IP allowlists permit `GEI` traffic.
3. **Resolve Org Name Collisions & Rehearse in a Test Org**:
   - Organization slugs are globally unique on `github.com`: choose a new target org slug or rename the source org first to free its name.
   - Run a full CLI dry run into a disposable **test org**, measure duration, inspect warnings, and rehearse steps 5-6 (production will be a **fresh full migration**, never a sync from the test org).
4. **Freeze Writes & Run `gh gei migrate-org`**:
   - Freeze pushes, PR/issue edits, and bots on the source org (`GEI` has no delta sync).
   - Add `Repository migrations -> Exempt` on blocking [[Enterprise & Repo Rulesets]] and review every repo migration log (a `Succeeded` run can still contain missing-data warnings).
5. **Provision Members & Reclaim Mannequins**:
   - Provision staff and [[EMU Guest Collaborators]] via SCIM, repopulate teams with [[IdP Group & Team Sync]], and run `gh gei generate-mannequin-csv` -> map CSV to target org members -> `gh gei reclaim-mannequin`.
   - Have developers generate fresh PATs/SSH keys and update Git remotes (`*.ghe.com` URLs where applicable).
6. **Restore Services, Cut Over & Retire Old Billing**:
   - Recreate Actions secrets/variables/environments/runners, GitHub Apps, **webhooks with secrets**, `.github/CODEOWNERS`, and rulesets (repos land private).
   - Keep the source org frozen until validation completes, reopen the target org, and work with GitHub Sales to retire billing on the old enterprise.
