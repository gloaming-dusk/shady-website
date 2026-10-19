import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({
    pattern: '*.md',
    // The Shady checkout; see astro.config.mjs.
    base: 'shady/docs'
  })
});

export const collections = { docs };
