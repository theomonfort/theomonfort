const rawModules = import.meta.glob('../../../data/zettelkasten/review/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const seedNotes: Record<string, string> = {};
for (const [filePath, raw] of Object.entries(rawModules)) {
  const filename = filePath.split('/').pop() || '';
  const slug = filename.replace(/\.md$/i, '');
  if (slug) seedNotes[slug] = raw;
}

export default seedNotes;
