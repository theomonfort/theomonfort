$inputJson = [Console]::In.ReadToEnd()
if ([string]::IsNullOrWhiteSpace($inputJson)) {
  exit 0
}

try {
  $payload = $inputJson | ConvertFrom-Json -ErrorAction Stop
} catch {
  exit 0
}

$toolName = if ($payload.toolName) { [string]$payload.toolName } elseif ($payload.tool_name) { [string]$payload.tool_name } else { "" }

# Only inspect shell-like tools. Other tools can continue unchanged.
if ($toolName -notmatch '^(bash|shell|terminal|command)$') {
  exit 0
}

$toolInput = if ($payload.toolArgs) { $payload.toolArgs } elseif ($payload.tool_input) { $payload.tool_input } else { $null }
if ($toolInput -is [string]) {
  $command = $toolInput
} elseif ($null -ne $toolInput.command) {
  $command = [string]$toolInput.command
} elseif ($null -ne $toolInput.cmd) {
  $command = [string]$toolInput.cmd
} else {
  $command = ""
}

function Deny($reason) {
  @{
    permissionDecision = "deny"
    permissionDecisionReason = $reason
    hookSpecificOutput = @{
      hookEventName = "PreToolUse"
      permissionDecision = "deny"
      permissionDecisionReason = $reason
    }
  } | ConvertTo-Json -Compress
}

# Block obviously destructive commands before the agent can run them.
if ($command -match 'rm -rf /|sudo |mkfs|dd if=|:\(\)\{') {
  Deny "禁止コマンド: $command"
  exit 0
}

# Require human review for production-changing commands.
if ($command -match 'kubectl .*--context[= ]prod|terraform apply.*prod') {
  Deny "production への変更は人間レビュー必須"
  exit 0
}

exit 0
