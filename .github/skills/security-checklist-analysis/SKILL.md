---
name: security-checklist-analysis
description: Analyze a security checklist Excel file by reading the 別紙2 sheet, extracting 攻撃対策 (attack countermeasure) entries, and checking whether GitHub Enterprise supports each item using the customer-security-trust FAQ.
compatibility: Designed for GitHub Copilot CLI
metadata:
  author: user
  version: "2.0"
---

# Security Checklist Analysis

You are tasked with analyzing a Japanese security checklist (セキュリティチェックリスト) from an Excel file. Your goal is to extract attack countermeasure (攻撃対策) entries and determine whether GitHub Enterprise (Cloud or Server) supports each requirement.

## Reference Sources

### Primary: GitHub Customer Security Trust FAQ
Use the GitHub customer-security-trust FAQ as your primary reference:
- Repository: `github/customer-security-trust`
- File: `FAQ/FAQ.md`
- Fetch this file using the `github-mcp-server-get_file_contents` tool at the start of each analysis.

### Secondary: Additional Security Documentation
Use the following Google Drive folder as a supplementary reference for security verification:
- URL: `https://drive.google.com/drive/folders/0BzGOJmkt0vlTUmY0YkhCT0tRVzA?resourcekey=0-QzRsGMpsiyJqnL8TgL2ggg`
- Fetch relevant documents from this folder using `web_fetch` to cross-reference security capabilities.
- Use this source to fill gaps not covered by the primary FAQ, or to provide additional evidence for checklist items.

## Process Steps

### Step 1: Open and Parse the Excel File

1. **Invoke the `xlsx` skill** to open the user-provided Excel file.
2. Navigate to the sheet named **別紙2** (Appendix 2).
   - If 別紙2 is not found, list available sheet names and ask the user which sheet to use.
3. Scan the sheet for columns or sections related to **攻撃対策** (attack countermeasures).
   - Also look for related headers: 対策, セキュリティ対策, 攻撃, 脅威, 要件, etc.
4. Extract all attack countermeasure entries, preserving:
   - The item number/ID (if present)
   - The countermeasure description
   - Any category or grouping information
   - Any additional context columns (priority, notes, etc.)

### Step 2: Fetch the GitHub Security FAQ

1. Use the GitHub MCP tool to fetch the FAQ:
   ```
   github-mcp-server-get_file_contents:
     owner: github
     repo: customer-security-trust
     path: FAQ/FAQ.md
   ```
2. Parse the FAQ content to build a searchable knowledge base of GitHub Enterprise security capabilities.
3. Pay attention to sections covering:
   - Authentication & access control (認証・アクセス制御)
   - Encryption (暗号化)
   - Audit logging (監査ログ)
   - Network security (ネットワークセキュリティ)
   - Data protection (データ保護)
   - Vulnerability management (脆弱性管理)
   - Incident response (インシデント対応)
   - Compliance & certifications (コンプライアンス・認証)

### Step 3: Match Each Entry Against GitHub Capabilities

For each 攻撃対策 entry:

1. **Translate/understand** the Japanese requirement into its security concept.
2. **Search the FAQ** for relevant answers about GitHub Enterprise support.
3. **Classify** each entry as one of:
   - ✅ **Supported** — GitHub Enterprise directly supports this requirement. Include the relevant FAQ excerpt.
   - ⚠️ **Partially Supported** — GitHub Enterprise covers some aspects but not all. Explain what is and isn't covered.
   - ❌ **Not Supported** — No evidence in the FAQ that GitHub Enterprise supports this. Note if it might be achievable via third-party integrations.
   - ❓ **Unclear / Needs Confirmation** — The FAQ doesn't clearly address this item. Suggest follow-up questions for the GitHub account team.

### Step 4: Write Results Back to the Excel File

After analyzing each item, **write your findings into the Excel file's 補足 (column M) only** using `openpyxl`. **Do NOT modify the answer selection in column O** — leave existing answers untouched.

Write your detailed findings into **column M** (補足) for each checklist item row. Use this structured format:

```
【判定】✅ Supported / ⚠️ Partially Supported / ❌ Not Supported / ❓ Unclear
【詳細】[Concise explanation of how GitHub Enterprise supports (or doesn't support) this item, in Japanese or English]
```

**Example 補足 entries:**

- `【判定】✅ Supported\n【詳細】GitHub implements protocol filtering using load balancer infrastructure, DDoS protection, and DNS blackholing.`
- `【判定】⚠️ Partially Supported\n【詳細】GitHub does not hold ISO/IEC 27017 directly, but achieved CSA STAR Level 2 and ISO 27018 which include equivalent cloud security controls.`

**Rules for writing to 補足:**
- If the cell already has existing content, **prepend** your analysis above it, separated by a blank line, so existing notes are preserved.
- Use `\n` for line breaks within the cell.
- Save the updated workbook after writing all entries.

### Step 5: Present Results as Markdown Report

In addition to updating the Excel file, also produce a structured markdown report and save it to the session files directory:

```markdown
## Security Checklist Analysis Report

### Summary
- Total items analyzed: X
- ✅ Supported: X
- ⚠️ Partially Supported: X
- ❌ Not Supported: X
- ❓ Unclear: X

### Detailed Results

| # | 攻撃対策 Item | Status | GitHub Enterprise Support Details | FAQ Reference |
|---|---------------|--------|-----------------------------------|---------------|
| 1 | [Item description] | ✅ | [How GHE supports this] | [FAQ section] |
| 2 | [Item description] | ⚠️ | [What's covered / what's not] | [FAQ section] |
| ... | ... | ... | ... | ... |

### Items Requiring Follow-Up
[List any items marked ❓ with suggested questions for the GitHub team]

### Recommendations
[Any additional notes or recommendations based on the analysis]
```

## Important Notes

- **Always fetch the latest FAQ** — Do not rely on cached or prior knowledge of the FAQ content. Fetch it fresh each time.
- **Be conservative in classification** — If there's any doubt, mark as ⚠️ or ❓ rather than ✅.
- **IDS/IPS: Double-check carefully** — The FAQ at `FAQ/FAQ.md#do-you-have-an-ids-ips-or-both` explicitly states **"No"** to having IDS/IPS. GitHub uses alternative controls (protocol filtering, DDoS protection, DNS blackholing, anomaly detection) but does NOT have traditional IDS or IPS. These items should be classified as ⚠️ Partially Supported at best, NOT ✅ Supported. Clearly explain in the 補足 that GitHub uses equivalent anomaly detection technologies rather than traditional IDS/IPS.
- **Preserve original Japanese text** — Keep the original 攻撃対策 descriptions alongside any translations.
- **Distinguish between GHEC and GHES** — If support differs between GitHub Enterprise Cloud and Server, note the distinction.
- **Ask for clarification** — If the Excel structure is ambiguous or the sheet name varies, ask the user before proceeding.
- **Large files** — If the FAQ is too large to process at once, use grep or targeted searches for specific security topics relevant to each checklist item.
