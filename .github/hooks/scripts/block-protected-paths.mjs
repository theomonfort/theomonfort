import { stdin, stdout } from 'node:process';

const raw = await readStdin();
const payload = parseJson(raw);
if (!payload) process.exit(0);

const toolName = String(payload.tool_name ?? payload.toolName ?? '');
const input = payload.tool_input ?? payload.toolArgs ?? {};

// Block direct reads/edits under .github/hooks from agent tool calls.
if (isHookPathAccess(toolName, input)) {
  const reason = 'Repository policy: access to .github/hooks is blocked for agent read/edit operations.';
  const additionalContext = 'Protected path policy prevents reading and editing hook files.';
  deny(reason, additionalContext);
}

const cmd = String(input.command ?? input.bash ?? input.script ?? '');
if (!cmd) process.exit(0);

const DANGEROUS = [
  /\brm\s+(-[a-z]*r[a-z]*f|-[a-z]*f[a-z]*r)\b/i,   // rm -rf / rm -fr
  /\brm\s+-rf?\s+\/(?!\S*\b(tmp|var\/tmp)\b)/i,    // rm -rf / outside tmp
  /:\s*\(\s*\)\s*\{\s*:\s*\|\s*:\s*&\s*\}\s*;\s*:/,// fork bomb
  /\bmkfs(\.|\s)/i,                                // mkfs
  /\bdd\s+if=.*\s+of=\/dev\//i,                    // dd of=/dev/...
  /\bshutdown\b|\breboot\b|\bhalt\b|\bpoweroff\b/i,
  /\bgit\s+push\s+.*--force\b|--force-with-lease\b/i,
  /\bgit\s+reset\s+--hard\b/i,
  /\bcurl\s+[^|]*\|\s*(sudo\s+)?(bash|sh)\b/i,     // curl | sh
  /\bwget\s+[^|]*\|\s*(sudo\s+)?(bash|sh)\b/i,
];

const hit = DANGEROUS.find(re => re.test(cmd));
if (!hit) process.exit(0);

const reason = `Repository policy: dangerous command blocked (${hit}).`;
const additionalContext = 'This hook unconditionally blocks high-risk shell commands.';
deny(reason, additionalContext);

function deny(reason, additionalContext) {
stdout.write(JSON.stringify({
  permissionDecision: 'deny',
  permissionDecisionReason: reason,
  additionalContext,
  hookSpecificOutput: {
    hookEventName: 'PreToolUse',
    permissionDecision: 'deny',
    permissionDecisionReason: reason,
    additionalContext,
  },
}));
}

function isHookPathAccess(toolName, input) {
  const name = toolName.toLowerCase();
  const READ_TOOLS = new Set(['read_file', 'list_dir', 'file_search', 'grep_search', 'semantic_search']);
  const WRITE_TOOLS = new Set(['create_file', 'apply_patch', 'delete_file', 'rename_file']);
  if (!READ_TOOLS.has(name) && !WRITE_TOOLS.has(name)) return false;

  const values = collectStrings(input);
  return values.some((v) => containsHooksPath(v));
}

function collectStrings(value) {
  const out = [];
  walk(value, out);
  return out;
}

function walk(value, out) {
  if (value == null) return;
  if (typeof value === 'string') {
    out.push(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) walk(item, out);
    return;
  }
  if (typeof value === 'object') {
    for (const v of Object.values(value)) walk(v, out);
  }
}

function containsHooksPath(s) {
  const normalized = s.replace(/\\/g, '/').toLowerCase();
  return (
    normalized === '.github/hooks' ||
    normalized.startsWith('.github/hooks/') ||
    normalized.includes('/.github/hooks/') ||
    normalized.endsWith('/.github/hooks')
  );
}

async function readStdin() {
  const chunks = [];
  for await (const c of stdin) chunks.push(c);
  return Buffer.concat(chunks).toString('utf8').trim();
}
function parseJson(s) { try { return s ? JSON.parse(s) : null; } catch { return null; } }
