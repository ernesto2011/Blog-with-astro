
import { z, defineCollection } from 'astro:content';
import { date } from 'astro:schema';

const blogCollection = defineCollection({
  type: 'content', 
  schema:({image})=> z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: image().refine((img) => img.width < 1200,{
      message: 'Image width should be less than 1200px'
    }),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blogCollection,
};