import { localizeVaultNotes } from '../localize.js';

const rawModules = import.meta.glob('../../../data/zettelkasten/ja/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const translations = Object.fromEntries(
  Object.entries(rawModules).map(([path, raw]) => [
    path.split('/zettelkasten/ja/')[1].replace(/\.md$/, ''),
    raw,
  ]),
);

export function localizeVault(vaultId: string, seedNotes: Record<string, string>) {
  return { default: localizeVaultNotes(vaultId, seedNotes, translations) };
}
