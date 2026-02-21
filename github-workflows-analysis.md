# GitHub Actions Workflows Analysis

Analysis of all workflow files in `.github/workflows/` directory.

---

## Workflow 1: `fetch-mona-monitor.yml`

### Overview
This workflow fetches the latest discussion from the `github/Business-Insights` repository and commits it as a markdown file to the `news/mona-monitor/` directory.

### Trigger Schedule
- **Schedule**: Cron job runs every 2 weeks on the 1st and 15th of each month at 09:00 UTC (line 6)
- **Manual Trigger**: Can be triggered manually via `workflow_dispatch` (line 7)

### Repository Name References

#### Direct "theomonfort" References
**NO** - The workflow file itself does not contain any direct references to "theomonfort".

#### GitHub Repository Variables
**NO** - Does not use `${{ github.repository }}` or any other GitHub context variables for repository references.

#### Hardcoded Repository References
**NO** - No hardcoded references to theomonfort repository in the workflow file.

### Job Details (`fetch` job, lines 13-35)

#### Runner
- Runs on: `ubuntu-latest` (line 14)

#### Permissions
- `contents: write` (line 10) - Required to commit and push changes

#### Steps

**Step 1: Checkout** (line 16)
- Action: `actions/checkout@v4`
- Purpose: Checks out the current repository
- Note: Uses default checkout behavior, which checks out the repository where the workflow runs

**Step 2: Fetch latest discussion** (lines 18-23)
- Environment Variable: `GH_TOKEN` set to `${{ secrets.MONA_MONITOR_TOKEN }}` (line 20)
- Script execution: Makes script executable (line 22) and runs `bash scripts/fetch-mona-monitor.sh` (line 23)

**Step 3: Commit and push if changed** (lines 25-35)
- Configures git user as "github-actions[bot]" (lines 27-28)
- Stages files in `news/mona-monitor/` directory (line 29)
- Checks for changes using `git diff --cached --quiet` (line 30)
- Commits with message "Add latest Mona Monitor discussion" if changes exist (line 33)
- Pushes to default remote (line 34)

### Called Scripts Analysis

#### `scripts/fetch-mona-monitor.sh`

**Repository Name References in Script:**

1. **Line 58**: Contains hardcoded URL with "github/Business-Insights":
   ```bash
   - **Source**: [Discussion #${NUMBER}](https://github.com/github/Business-Insights/discussions/${NUMBER})
   ```
   - This is the **source** repository being fetched from, NOT theomonfort

2. **Lines 12-33**: GraphQL query targets `github/Business-Insights` repository:
   ```graphql
   repository(owner: "github", name: "Business-Insights")
   ```

**No references to "theomonfort"** in the script.

#### Script Functionality
- Uses `gh api graphql` to fetch latest discussion (lines 12-33)
- Extracts discussion metadata using `jq` (lines 36-41)
- Creates filename based on creation date (lines 44-46)
- Skips if file already exists (lines 49-52)
- Generates markdown file with discussion content (lines 55-66)
- Appends comments if present (lines 69-86)
- Saves to `$OUTPUT_DIR/news/mona-monitor/` (line 8)

### External Actions and Services

1. **`actions/checkout@v4`** (line 16)
   - Official GitHub action for repository checkout
   - Uses workflow context to determine which repository to check out
   - No explicit repo name passed; uses default (the repo where workflow runs)

2. **GitHub CLI (`gh api`)** (line 12 in script)
   - Authenticates using `GH_TOKEN` environment variable
   - Queries `github/Business-Insights` repository via GraphQL API
   - Token stored in secrets as `MONA_MONITOR_TOKEN`

3. **GitHub GraphQL API**
   - Accessed through `gh api graphql` command
   - Query explicitly targets: `repository(owner: "github", name: "Business-Insights")`

### Secrets Used
- `MONA_MONITOR_TOKEN` (line 20): GitHub token for accessing Business-Insights discussions

---

## Workflow 2: `sync-to-japanlab.yml`

### Overview
This workflow synchronizes specific directories from the theomonfort repository to the `github/JapanLab` repository daily.

### Trigger Schedule
- **Schedule**: Cron job runs daily at 19:00 UTC (line 5)
- **Manual Trigger**: Can be triggered manually via `workflow_dispatch` (line 6)

### Repository Name References

#### Direct "theomonfort" References
**YES** - Contains **2 explicit references** to "theomonfort":

1. **Line 15**: Step name
   ```yaml
   - name: Checkout source (theomonfort)
   ```
   - This is a comment/label only, not functional code

2. **Line 43**: Git commit message
   ```bash
   git commit -m "chore: sync from theomonfort (${SHORT_SHA} @ $(date -u +%Y-%m-%dT%H:%M:%SZ))"
   ```
   - The commit message includes literal text "sync from theomonfort"

#### GitHub Repository Variables
**NO** - Does not use `${{ github.repository }}` variable.

#### Hardcoded Repository References
**YES** - Two repositories are referenced:

1. **Implicit source repository** (lines 15-18): 
   - Uses `actions/checkout@v4` without specifying repository
   - Default behavior checks out the repository where workflow runs (theomonfort)
   - Checked out to `path: source` (line 18)

2. **Explicit target repository** (lines 20-25):
   - `repository: github/JapanLab` (line 23)
   - Uses `JAPANLAB_TOKEN` secret for authentication (line 24)
   - Checked out to `path: target` (line 25)

3. **Push URL** (line 44):
   - Hardcoded push URL: `https://x-access-token:${{ secrets.JAPANLAB_TOKEN }}@github.com/github/JapanLab.git`
   - Explicitly references `github/JapanLab` repository

### Job Details (`sync` job, lines 12-45)

#### Runner
- Runs on: `ubuntu-latest` (line 13)

#### Permissions
- `contents: read` (line 9) - Only read access to source repository

#### Steps

**Step 1: Checkout source (theomonfort)** (lines 15-18)
- Action: `actions/checkout@v4`
- Repository: Implicit (defaults to workflow repository)
- Path: `source` (line 18)
- Purpose: Checks out theomonfort repository content

**Step 2: Checkout target (JapanLab)** (lines 20-25)
- Action: `actions/checkout@v4`
- Repository: `github/JapanLab` (line 23) - Explicit hardcoded reference
- Authentication: Uses `${{ secrets.JAPANLAB_TOKEN }}` (line 24)
- Path: `target` (line 25)
- Purpose: Checks out destination repository

**Step 3: Sync directories** (lines 27-31)
- Uses `rsync -av --delete` command for three directories:
  1. `source/.github/` → `target/.github/` (line 29)
  2. `source/10-news/` → `target/10-news/` (line 30)
  3. `source/scripts/` → `target/scripts/` (line 31)
- The `--delete` flag removes files in target that don't exist in source

**Step 4: Commit and push changes** (lines 33-45)
- Working directory: `target` (line 34)
- Configures git user as "github-actions[bot]" (lines 36-37)
- Stages all changes with `git add -A` (line 38)
- Checks for changes using `git diff --cached --quiet` (line 39)
- If changes exist:
  - Retrieves short SHA from source repo (line 42)
  - Creates commit message: `"chore: sync from theomonfort (${SHORT_SHA} @ timestamp)"` (line 43)
  - Pushes to `github.com/github/JapanLab.git` using token authentication (line 44)

### Called Scripts Analysis
**NONE** - This workflow does not call any external scripts. All logic is inline bash commands.

### External Actions and Services

1. **`actions/checkout@v4`** (lines 16 and 21)
   - Used twice with different configurations
   - First instance: Checks out workflow repository (theomonfort) by default
   - Second instance: Explicitly checks out `github/JapanLab` repository
   - Both checkouts use different paths to enable parallel access

2. **GitHub Repository Service**
   - Source: theomonfort repository (implicit, via workflow context)
   - Target: `github/JapanLab` repository (explicit, line 23)

3. **Git Push via HTTPS**
   - Push URL: `https://x-access-token:${{ secrets.JAPANLAB_TOKEN }}@github.com/github/JapanLab.git` (line 44)
   - Authentication via personal access token
   - Hardcoded repository path in URL

### Secrets Used
- `JAPANLAB_TOKEN` (lines 24, 44): GitHub token for accessing and pushing to JapanLab repository

### Data Flow
1. Workflow runs in theomonfort repository context
2. Checks out theomonfort content to `source/` directory
3. Checks out JapanLab content to `target/` directory
4. Syncs three directories: `.github/`, `10-news/`, and `scripts/`
5. Commits changes to JapanLab repository if any differences exist
6. Commit message includes "theomonfort" text and source commit SHA
7. Pushes changes to JapanLab repository

---

## Summary Table

| Workflow File | Contains "theomonfort" | Uses github.repository | Hardcoded Repos | Calls Scripts | External Actions |
|--------------|------------------------|------------------------|-----------------|---------------|------------------|
| `fetch-mona-monitor.yml` | ❌ No | ❌ No | ✅ Yes (github/Business-Insights in script) | ✅ scripts/fetch-mona-monitor.sh | actions/checkout@v4, gh CLI |
| `sync-to-japanlab.yml` | ✅ Yes (2 places: step name line 15, commit message line 43) | ❌ No | ✅ Yes (github/JapanLab lines 23, 44) | ❌ None | actions/checkout@v4 |

### Repository References Summary

**fetch-mona-monitor.yml:**
- Source repository (implicit): theomonfort (via workflow context)
- External repository accessed: github/Business-Insights (via GraphQL API)
- "theomonfort" text: Not present
- Repository variables: Not used

**sync-to-japanlab.yml:**
- Source repository (implicit): theomonfort (via workflow context)
- Target repository (explicit): github/JapanLab (hardcoded)
- "theomonfort" text: Present in 2 locations (step name, commit message)
- Repository variables: Not used
- Push URL: Hardcoded with github/JapanLab path

### Key Findings

1. **No use of `${{ github.repository }}` context variable** in either workflow
2. **"theomonfort" text appears only in `sync-to-japanlab.yml`** in descriptive contexts (step name and commit message)
3. **Both workflows implicitly depend on running in theomonfort repository** via default checkout behavior
4. **External repositories are hardcoded**:
   - `github/Business-Insights` in fetch-mona-monitor.sh script
   - `github/JapanLab` in sync-to-japanlab.yml workflow
5. **Secrets are used for cross-repository access**:
   - `MONA_MONITOR_TOKEN` for Business-Insights read access
   - `JAPANLAB_TOKEN` for JapanLab read/write access
