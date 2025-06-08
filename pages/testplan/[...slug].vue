<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// Fetch the single test plan based on the current dynamic route path
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('testplan') // Query the 'testplans' collection
   .path(route.path) // Filter the collection by the exact path of the current route
   .first() // Retrieve only the first (and expectedly unique) matching document
)

// Handle cases where the test plan is not found (e.g., 404 error)
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Test Plan Not Found', fatal: true })
}

// Optional: Set SEO meta tags dynamically using data from the post's frontmatter
useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogImage: post.value.image, // Include a featured image for social sharing
})
</script>

<template>
  <div class="w-full">
    <article v-if="post" class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold text-center mb-4">{{ post.title }}</h1>
      <p class="text-gray-600 text-center mb-8">
        Published on: {{ new Date(post.date).toLocaleDateString() }} by {{ post.author }}
      </p>
      <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full h-auto rounded-lg mb-8 object-cover max-h-96" />

      <ContentRenderer :value="post" class="prose max-w-none" />
      <!-- Loading state is handled by the parent v-if -->
    </article>
    <div v-else class="text-center text-gray-600">
      <p>Test plan not found.</p>
    </div>
  </div>
</template>
