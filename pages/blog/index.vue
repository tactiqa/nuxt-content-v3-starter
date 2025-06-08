<script setup lang="ts">
import PostCard from '~/components/PostCard.vue'
// Fetch blog posts using the queryCollection API
const { data: posts } = await useAsyncData('blog-posts', () => 
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div class="w-full">
    <h1 class="text-4xl font-bold mb-8 text-center">Our Blog Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <template v-if="posts && posts.length">
        <PostCard v-for="post in posts" :key="post.path" :post="post" />
      </template>
      <p v-else class="text-center text-gray-600 col-span-full">No blog posts found.</p>
    </div>
  </div>
</template>