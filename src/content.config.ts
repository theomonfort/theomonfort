import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const playbook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/playbook' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    summary: z.string(),
    icon: z.string().default('▶'),
    color: z.enum(['magenta', 'cyan', 'amber', 'green']).default('cyan'),
    accent: z.object({
      text: z.string(),
      border: z.string(),
      glow: z.string(),
      shadow: z.string(),
      hex: z.string(),
    }).optional(),
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
      .enum(['introduction', 'plan', 'develop', 'review', 'secure', 'operate', 'administration'])
      .default('introduction'),
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
    descriptionEn: z.string().optional(),
    badge: z.string().optional(),
    group: z.string().optional(),
    url: z.string().url().optional(),
    install: z.string().optional(),
  }),
});

const handson = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/handson' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    order: z.number(),
    stepSlug: z.string(),
    duration: z.number().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { playbook, equipment, handson };
