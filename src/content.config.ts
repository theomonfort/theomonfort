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
      .array(z.object({
        label: z.string(),
        url: z.string().url(),
        group: z.string().optional(),
      }))
      .default([]),
    order: z.number().default(0),
    category: z
      .enum(['introduction', 'plan', 'develop', 'review', 'secure', 'operate'])
      .default('introduction'),
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

const equipment = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/equipment' }),
  schema: z.object({
    section: z.enum([
      'skills',
      'workflows',
      'custom-agents',
      'mcp-servers',
      'cli-plugins',
      'vscode-extensions',
    ]),
    order: z.number().default(0),
    name: z.string(),
    icon: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    group: z.string().optional(),
    url: z.string().url().optional(),
    install: z.string().optional(),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links' }),
  schema: z.object({
    slug: z.string(),
    order: z.number().default(0),
    icon: z.string(),
    title: z.string(),
    items: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
        desc: z.string(),
      }),
    ),
  }),
});

export const collections = { glossary, philosophy, equipment, links };
