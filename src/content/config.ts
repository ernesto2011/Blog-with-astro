
import { z, defineCollection } from 'astro:content';
import { date } from 'astro:schema';

const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blogCollection,
};