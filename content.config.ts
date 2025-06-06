import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Define a 'blog' collection for your blog posts
    blog: defineCollection({
      type: 'page', // 'page' indicates content maps to a route, 'data' for raw data
      source: 'blog/**/*.md', // Glob pattern to include all markdown files in 'content/blog' and its subdirectories
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(), // Using string instead of z.date() for better compatibility
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional()
      })
    }),
    // You could define other collections here, e.g., for general pages or authors
    pages: defineCollection({
      type: 'page',
      source: '*.md', // Markdown files directly in 'content' for general pages
    })
  }
})