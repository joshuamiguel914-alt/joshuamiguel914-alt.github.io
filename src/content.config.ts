import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    date: z.string(),
    summary: z.string(),
    result: z.string(),
    cover: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { work };
