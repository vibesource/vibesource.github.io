import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    area: z.string(),
    status: z.enum(['Exploring', 'In development', 'Public repository']),
    accent: z.enum(['cyan', 'lavender', 'amber', 'lime', 'rose']),
    order: z.number().int().positive(),
    href: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    category: z.string(),
    title: z.string(),
    excerpt: z.string(),
    project: z.string().optional(),
  }),
});

export const collections = { projects, notes };
