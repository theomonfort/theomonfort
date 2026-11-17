import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import test from 'node:test';
import { localizeVaultNotes } from './localize.js';
import { buildGraphData, buildResolutionIndex, parseNote, renderNoteHtml } from './parser.js';

const dataRoot = new URL('../../data/zettelkasten/', import.meta.url);
const vaultIds = ['administration', 'develop', 'extended', 'introduction', 'plan', 'review', 'security'];
const read = (path) => readFileSync(new URL(path, dataRoot), 'utf8');

test('Japanese notes retain English link targets and vault-specific metadata', () => {
  const source = '---\ntitle: "Public Monitoring"\ngroup: "secret"\ntags: ["enterprise"]\naliases: ["Leak detection"]\n---\n\nEnglish body.\n';
  const localized = localizeVaultNotes('security', { 'public-monitoring': source }, {
    'public-monitoring': '---\ntitle: "公開監視"\n---\n\n共通の説明。\n',
    'security/public-monitoring': '---\ntitle: "公開監視"\n---\n\nセキュリティ分野の説明。\n',
  });
  const note = parseNote('public-monitoring', localized['public-monitoring']);
  assert.equal(note.title, '公開監視');
  assert.equal(note.body, 'セキュリティ分野の説明。\n');
  assert.equal(note.group, 'secret');
  assert.deepEqual(note.tags, ['enterprise']);
  const resolve = buildResolutionIndex(new Map([[note.slug, note]]));
  for (const target of ['Public Monitoring', 'Leak detection', 'public-monitoring', '公開監視']) {
    assert.equal(resolve(target), note.slug);
  }
  assert.throws(() => localizeVaultNotes('security', { missing: source }, {}), /Missing Japanese/);
});

test('Japanese titles do not create empty or lossy resolution collisions', () => {
  const notes = new Map([
    ['security', parseNote('security', '---\ntitle: "セキュリティ"\n---\n本文')],
    ['copilot', parseNote('copilot', '---\ntitle: "Copilot"\n---\n本文')],
    ['copilot-details', parseNote('copilot-details', '---\ntitle: "Copilot の詳細"\n---\n本文')],
  ]);
  const resolve = buildResolutionIndex(notes);
  assert.equal(resolve('セキュリティ'), 'security');
  assert.equal(resolve('copilot'), 'copilot');
  assert.equal(resolve('Copilot の詳細'), 'copilot-details');
  assert.equal(resolve('存在しないノート'), null);
  assert.equal(resolve('Copilot の存在しないノート'), null);
  assert.equal(resolve(''), null);
});

test('Japanese wikilink labels preserve targets, explicit aliases, and escaping', () => {
  const note = parseNote('source', '[[Secret Protection]] / [[Secret Protection|別名]]');
  const html = renderNoteHtml(note, () => 'secret-protection', () => 'シークレット保護 <安全>');
  assert.match(html, /data-wikilink="Secret Protection"/);
  assert.match(html, /シークレット保護 &lt;安全&gt;/);
  assert.match(html, />別名<\/a>/);
  assert.match(renderNoteHtml(note, () => 'secret-protection'), />Secret Protection<\/a>/);
});

for (const vaultId of vaultIds) {
  test(`Japanese corpus preserves ${vaultId} content structure and graph`, () => {
    const sources = {};
    const translations = {};
    for (const filename of readdirSync(new URL(`${vaultId}/`, dataRoot)).filter((name) => name.endsWith('.md'))) {
      const slug = filename.slice(0, -3);
      sources[slug] = read(`${vaultId}/${filename}`);
      const canonicalVault = existsSync(new URL(`extended/${filename}`, dataRoot))
        ? 'extended'
        : vaultIds.find((vault) => existsSync(new URL(`${vault}/${filename}`, dataRoot)));
      const canonicalSource = parseNote(slug, read(`${canonicalVault}/${filename}`));
      const source = parseNote(slug, sources[slug]);
      const overridePath = `ja/${vaultId}/${filename}`;
      const hasOverride = existsSync(new URL(overridePath, dataRoot));
      if (!hasOverride) {
        assert.equal(source.body, canonicalSource.body, `${vaultId}/${slug} requires a Japanese override`);
      }
      const translationPath = hasOverride ? overridePath : `ja/${filename}`;
      assert.ok(existsSync(new URL(translationPath, dataRoot)), `Missing ${translationPath}`);
      translations[hasOverride ? `${vaultId}/${slug}` : slug] = read(translationPath);
    }

    const localized = localizeVaultNotes(vaultId, sources, translations);
    const englishNotes = new Map(Object.entries(sources).map(([slug, raw]) => [slug, parseNote(slug, raw)]));
    const japaneseNotes = new Map(Object.entries(localized).map(([slug, raw]) => [slug, parseNote(slug, raw)]));
    for (const [slug, source] of englishNotes) {
      const translated = japaneseNotes.get(slug);
      const context = `${vaultId}/${slug}`;
      assert.match(translated.body, /[\u3040-\u30ff\u3400-\u9fff]/, `${context} needs Japanese prose`);
      assert.deepEqual(translated.wikilinks.map((link) => link.target).sort(), source.wikilinks.map((link) => link.target).sort(), `${context} wikilink targets`);
      for (const [name, pattern] of [
        ['code', /```[\s\S]*?```|`[^`\n]+`/g],
        ['URLs', /https?:\/\/[^\s<>`")\]]+/g],
      ]) {
        assert.deepEqual(translated.body.match(pattern)?.sort(), source.body.match(pattern)?.sort(), `${context} ${name}`);
      }
      assert.deepEqual(translated.body.match(/^#{1,6}(?= )/gm), source.body.match(/^#{1,6}(?= )/gm), `${context} heading levels`);
    }

    const sourceGraph = buildGraphData(englishNotes);
    const translatedGraph = buildGraphData(japaneseNotes);
    const sortLinks = (links) => [...links].sort((a, b) => a.id.localeCompare(b.id));
    assert.deepEqual(sortLinks(translatedGraph.links), sortLinks(sourceGraph.links), `${vaultId} graph links`);
    assert.deepEqual(
      translatedGraph.nodes.map(({ id, group, exists, degree }) => ({ id, group, exists, degree })),
      sourceGraph.nodes.map(({ id, group, exists, degree }) => ({ id, group, exists, degree })),
      `${vaultId} nodes`,
    );
    for (const source of englishNotes.values()) {
      assert.equal(translatedGraph.resolveTarget(source.title), sourceGraph.resolveTarget(source.title));
      assert.equal(translatedGraph.resolveTarget(source.slug), source.slug);
    }
  });
}
