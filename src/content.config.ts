import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        tags: z.array(z.string()).or(z.string()).optional().nullable(),
        category: z.array(z.string()).or(z.string()).default('uncategorized').nullable(),
        draft: z.boolean().default(false).nullable(),
        sticky: z.number().default(0).nullable(),
        toc: z.boolean().default(true).nullable(),
    }),
});

export const collections = { blog };