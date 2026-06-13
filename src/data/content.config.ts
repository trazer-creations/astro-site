// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    price: z.number(),
    description: z.string(),
    image: z.string(),
    features: z.array(z.string()),
    category: z.string(), // Matches the category's slug string
  }),
});

export const collections = { categories, products };