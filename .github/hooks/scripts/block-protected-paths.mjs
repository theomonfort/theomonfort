import { stdin, stdout } from 'node:process';

// hooks.json already limits execution to mutating tools. This script only
// checks whether the pending tool input mentions a protected repository path.
const rawPayload = await readStdin();
const payload = parseJson(rawPayload);
if (!payload) process.exit(0);

const toolName = String(payload.tool_name ?? payload.toolName ?? 'requested');
const toolInput = payload.tool_input ?? payload.toolArgs ?? {};

// File edits, patches, and shell commands all include their target path
// somewhere in the JSON payload, so a normalized string scan is sufficient.
const normalizedInput = JSON.stringify(toolInput).replaceAll('\\\\', '/');
const protectedPath = findProtectedPath(normalizedInput);
if (!protectedPath) {
  process.exit(0);
}

deny(`Repository policy: agents must not modify ${protectedPath}. The ${toolName} tool referenced ${protectedPath}.`);

async function readStdin() {
  const chunks = [];
  for await (const chunk of stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8').trim();
}

function parseJson(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    // Invalid hook payload: fail open rather than blocking unrelated work.
    return null;
  }
}

function findProtectedPath(value) {
  // Match protected targets as path segments so e.g. "src/.githubish" is safe.
  const protectedPaths = [
    { label: '.github/', pattern: /(^|[\/\s"'`=:([{])(?:\.\/)?\.github(?:\/|$)/i },
    { label: '.env', pattern: /(^|[\/\s"'`=:([{])(?:\.\/)?\.env(?:$|[\/\s"'`),}\]])/i },
    { label: 'pnpm-lock.yaml', pattern: /(^|[\/\s"'`=:([{])pnpm-lock\.yaml(?:$|[\/\s"'`),}\]])/i },
  ];

  return protectedPaths.find(({ pattern }) => pattern.test(value))?.label;
}

function deny(reason) {
  const additionalContext = 'This hook blocks agent writes to protected repository configuration, environment, and lock files. Choose a different path or ask the user to make the protected-file change manually.';

  stdout.write(JSON.stringify({
    // Copilot CLI / cloud agent output shape.
    permissionDecision: 'deny',
    permissionDecisionReason: reason,
    additionalContext,

    // VS Code-compatible output shape.
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: reason,
      additionalContext,
    },
  }));
}
