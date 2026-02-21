#!/usr/bin/env bash
# Mirror selected folders from cockpit to multiple target repos.
# Performs a full sync: files not present in source are deleted from targets.
#
# Usage:  ./scripts/mirror-to-japanlab.sh [--dry-run]
#
# Requires: gh CLI authenticated with push access to target repos

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TARGET_REPOS=("github/JapanLab" "theomonfort/theomonfort")
TARGET_BRANCH="main"
DRY_RUN=false

# Folders/files to EXCLUDE from mirroring
EXCLUDES=(
  "20-notes"
  "30-meetings"
  "50-admin"
  "README.md"
)

# Parse args
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    *) echo "Unknown arg: $arg"; exit 1 ;;
  esac
done

# Build rsync exclude flags once
RSYNC_EXCLUDES=()
for ex in "${EXCLUDES[@]}"; do
  RSYNC_EXCLUDES+=(--exclude "$ex")
done
RSYNC_EXCLUDES+=(--exclude ".git" --exclude ".DS_Store" --exclude "~\$*")

sync_repo() {
  local target_repo="$1"
  local clone_dir
  clone_dir="$(mktemp -d)"

  echo ""
  echo "=========================================="
  echo "  Syncing → $target_repo"
  echo "=========================================="

  echo "==> Cloning $target_repo into temp dir..."
  gh repo clone "$target_repo" "$clone_dir" -- --depth=1 --branch "$TARGET_BRANCH" 2>/dev/null || \
    git clone "https://github.com/$target_repo.git" "$clone_dir" --depth=1 --branch "$TARGET_BRANCH"

  echo "==> Cleaning target (keeping .git)..."
  find "$clone_dir" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

  echo "==> Copying files from cockpit..."
  rsync -a "${RSYNC_EXCLUDES[@]}" "$REPO_ROOT/" "$clone_dir/"

  echo "==> Checking for changes..."
  git -C "$clone_dir" add -A

  if git -C "$clone_dir" diff --cached --quiet; then
    echo "No changes. $target_repo is already in sync."
    rm -rf "$clone_dir"
    return 0
  fi

  echo ""
  echo "=== Changes ==="
  git -C "$clone_dir" --no-pager diff --cached --stat
  echo ""

  if [ "$DRY_RUN" = true ]; then
    echo "[DRY RUN] Would push the above changes to $target_repo ($TARGET_BRANCH)"
    rm -rf "$clone_dir"
    return 0
  fi

  local timestamp
  timestamp="$(date -u '+%Y-%m-%d %H:%M UTC')"
  git -C "$clone_dir" commit -m "mirror: sync from cockpit ($timestamp)

Automated mirror of selected content from theomonfort/cockpit.
Excluded: ${EXCLUDES[*]}"

  echo "==> Pushing to $target_repo..."
  git -C "$clone_dir" push origin "$TARGET_BRANCH"

  echo "==> Done! $target_repo is now in sync."
  rm -rf "$clone_dir"
}

for repo in "${TARGET_REPOS[@]}"; do
  sync_repo "$repo"
done

echo ""
echo "==> All targets synced."
