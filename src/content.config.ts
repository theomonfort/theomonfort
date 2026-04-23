import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glossary' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    summary: z.string(),
    icon: z.string().default('▶'),
    color: z.enum(['magenta', 'cyan', 'amber', 'green']).default('cyan'),
    related: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    order: z.number().default(0),
  }),
});

const philosophy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/philosophy' }),
  schema: z.object({
    question: z.string(),
    short: z.string(),
    order: z.number().default(0),
    link: z
      .object({ label: z.string(), url: z.string().url() })
      .optional(),
  }),
});

export const collections = { glossary, philosophy };
