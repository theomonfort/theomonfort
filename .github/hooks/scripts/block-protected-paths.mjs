import { stdin, stdout } from 'node:process';

const raw = await readStdin();
const payload = parseJson(raw);
if (!payload) process.exit(0);

const input = payload.tool_input ?? payload.toolArgs ?? {};
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

async function readStdin() {
  const chunks = [];
  for await (const c of stdin) chunks.push(c);
  return Buffer.concat(chunks).toString('utf8').trim();
}
function parseJson(s) { try { return s ? JSON.parse(s) : null; } catch { return null; } }
