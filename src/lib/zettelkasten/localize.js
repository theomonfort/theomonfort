import { parseFrontmatter, parseNote, serializeFrontmatter } from './parser.js';

export function localizeVaultNotes(vaultId, seedNotes, translations) {
  return Object.fromEntries(
    Object.entries(seedNotes).map(([slug, raw]) => {
      const translated = translations[`${vaultId}/${slug}`] ?? translations[slug];
      if (!translated) throw new Error(`Missing Japanese Zettelkasten note: ${vaultId}/${slug}`);

      const original = parseNote(slug, raw);
      const { frontmatter, body } = parseFrontmatter(translated);
      if (typeof frontmatter.title !== 'string' || !frontmatter.title.trim() || !body.trim()) {
        throw new Error(`Invalid Japanese Zettelkasten note: ${vaultId}/${slug}`);
      }

      return [
        slug,
        serializeFrontmatter(
          {
            ...original.frontmatter,
            title: frontmatter.title,
            aliases: [...new Set([original.title, ...original.aliases])],
          },
          body,
        ),
      ];
    }),
  );
}
