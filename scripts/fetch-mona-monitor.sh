#!/usr/bin/env bash
# Fetches the latest discussion from github/Business-Insights/discussions
# and saves it as a markdown file in notes/mona-monitor/

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUTPUT_DIR="$REPO_ROOT/10-news/12-mona-monitor"
mkdir -p "$OUTPUT_DIR"

# Fetch the latest discussion using GraphQL
RESPONSE=$(gh api graphql -f query='
{
  repository(owner: "github", name: "Business-Insights") {
    discussions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        number
        title
        body
        createdAt
        author { login }
        labels(first: 10) { nodes { name } }
        comments(first: 50) {
          nodes {
            body
            author { login }
            createdAt
          }
        }
      }
    }
  }
}')

# Extract fields
TITLE=$(echo "$RESPONSE" | jq -r '.data.repository.discussions.nodes[0].title')
NUMBER=$(echo "$RESPONSE" | jq -r '.data.repository.discussions.nodes[0].number')
BODY=$(echo "$RESPONSE" | jq -r '.data.repository.discussions.nodes[0].body')
CREATED=$(echo "$RESPONSE" | jq -r '.data.repository.discussions.nodes[0].createdAt')
AUTHOR=$(echo "$RESPONSE" | jq -r '.data.repository.discussions.nodes[0].author.login')
LABELS=$(echo "$RESPONSE" | jq -r '[.data.repository.discussions.nodes[0].labels.nodes[].name] | join(", ")')

# Date for filename (YYYY-MM)
FILE_DATE=$(echo "$CREATED" | cut -c1-7)
FULL_DATE=$(echo "$CREATED" | cut -c1-10)
FILENAME="$OUTPUT_DIR/${FILE_DATE}-mona-monitor-${NUMBER}.md"

# Skip if already fetched
if [ -f "$FILENAME" ]; then
  echo "Already fetched: $FILENAME"
  exit 0
fi

# Build markdown file
cat > "$FILENAME" <<EOF
# ${TITLE}

- **Source**: [Discussion #${NUMBER}](https://github.com/github/Business-Insights/discussions/${NUMBER})
- **Author**: @${AUTHOR}
- **Date**: ${FULL_DATE}
- **Labels**: ${LABELS}

---

${BODY}
EOF

# Append comments if any
COMMENT_COUNT=$(echo "$RESPONSE" | jq '.data.repository.discussions.nodes[0].comments.nodes | length')
if [ "$COMMENT_COUNT" -gt 0 ]; then
  echo "" >> "$FILENAME"
  echo "---" >> "$FILENAME"
  echo "" >> "$FILENAME"
  echo "## Comments" >> "$FILENAME"
  echo "" >> "$FILENAME"

  for i in $(seq 0 $((COMMENT_COUNT - 1))); do
    C_AUTHOR=$(echo "$RESPONSE" | jq -r ".data.repository.discussions.nodes[0].comments.nodes[$i].author.login")
    C_DATE=$(echo "$RESPONSE" | jq -r ".data.repository.discussions.nodes[0].comments.nodes[$i].createdAt" | cut -c1-10)
    C_BODY=$(echo "$RESPONSE" | jq -r ".data.repository.discussions.nodes[0].comments.nodes[$i].body")
    echo "### @${C_AUTHOR} — ${C_DATE}" >> "$FILENAME"
    echo "" >> "$FILENAME"
    echo "${C_BODY}" >> "$FILENAME"
    echo "" >> "$FILENAME"
  done
fi

echo "Saved: $FILENAME"
