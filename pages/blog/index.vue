<script setup lang="ts">
// Fetch blog posts using the queryCollection API
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
            <h2 class="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{{ post.title }}</h2>
          </NuxtLink>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <p class="text-sm text-gray-500">Published on: {{ new Date(post.date).toLocaleDateString() }} by {{ post.author }}</p>
        </div>
      </template>
      <p v-else class="text-center text-gray-600 col-span-full">No blog posts found.</p>
    </div>
  </div>
</template>