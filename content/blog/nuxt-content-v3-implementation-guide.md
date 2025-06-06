---
title: "Building a Blog with Nuxt Content v3: A Complete Guide"
description: "A comprehensive guide to implementing a blog with Nuxt Content v3, covering setup, configuration, and best practices."
date: "2025-06-07"
author: "Your Name"
tags: ["Nuxt", "Nuxt Content", "Vue", "Static Site Generation"]
image: "/images/nuxt-content-blog.jpg"
---

# Building a Blog with Nuxt Content v3: A Complete Guide

Nuxt Content v3 provides a powerful way to create content-driven websites with minimal configuration. In this guide, we'll walk through our implementation of a blog using Nuxt Content v3, covering everything from setup to deployment.

## Project Structure

Our blog follows this structure:

```
content/
  blog/                 # Blog posts collection
    post-1.md
    post-2.md
    ...
pages/
  blog/
    index.vue          # Blog listing page
    [...slug].vue      # Dynamic blog post page
```

## Configuration

### 1. Nuxt Configuration (`nuxt.config.ts`)

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

### 2. Content Configuration (`content.config.ts`)

Our content configuration defines the schema for our blog posts and any other content types:

```typescript
// content.config.ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Blog posts collection
    blog: defineCollection({
      type: 'page', // Maps to routes
      source: 'blog/**/*.md', // Source files
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional()
      })
    }),
    // General pages collection
    pages: defineCollection({
      type: 'page',
      source: '*.md',
    })
  }
})
```

## Blog Implementation

### 1. Blog Listing Page (`pages/blog/index.vue`)

```vue
<script setup lang="ts">
// Fetch and sort blog posts by date
const { data: posts } = await useAsyncData('blog-posts', () => 
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center">Our Blog Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-if="posts && posts.length">
        <div v-for="post in posts" :key="post.path" class="bg-white rounded-lg shadow-md p-6">
          <NuxtLink :to="post.path">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
              {{ post.title }}
            </h2>
          </NuxtLink>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <p class="text-sm text-gray-500">
            Published on: {{ new Date(post.date).toLocaleDateString() }}
            <span v-if="post.author">by {{ post.author }}</span>
          </p>
        </div>
      </template>
      <p v-else class="text-center text-gray-600 col-span-full">No blog posts found.</p>
    </div>
  </div>
</template>
```

### 2. Blog Post Page (`pages/blog/[...slug].vue`)

```vue
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// Fetch the blog post based on the current route
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog')
    .path(route.path)
    .first()
)

// Handle 404 if post not found
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog Post Not Found', fatal: true })
}

// Set SEO meta tags
useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogImage: post.value.image,
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <article v-if="post" class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold text-center mb-4">{{ post.title }}</h1>
      <p class="text-gray-600 text-center mb-8">
        Published on: {{ new Date(post.date).toLocaleDateString() }}
        <span v-if="post.author">by {{ post.author }}</span>
      </p>
      <img 
        v-if="post.image" 
        :src="post.image" 
        :alt="post.title" 
        class="w-full h-auto rounded-lg mb-8 object-cover max-h-96" 
      />

      <!-- Render the markdown content -->
      <ContentRenderer :value="post" class="prose max-w-none" />
    </article>
  </div>
</template>
```

## Key Features

1. **Type-Safe Content**
   - Zod schema validation for frontmatter
   - TypeScript support throughout the application

2. **Performance**
   - Static site generation by default
   - Lazy loading of components
   - Image optimization with Nuxt Image

3. **Developer Experience**
   - Hot module replacement in development
   - Built-in Markdown and MDX support
   - Code highlighting with Shiki

## Deployment

This setup works with any static hosting service. For example, to deploy to Netlify:

1. Connect your repository to Netlify
2. Set the build command to `npm run generate`
3. Set the publish directory to `dist`

## Conclusion

Nuxt Content v3 provides a powerful yet simple way to create content-driven websites. With its file-based routing, type-safe content, and excellent developer experience, it's an excellent choice for building blogs and documentation sites.

### Further Reading

- [Nuxt Content Documentation](https://content.nuxtjs.org/)
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)

Happy coding! 🚀
