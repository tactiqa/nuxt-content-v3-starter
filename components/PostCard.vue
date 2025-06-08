<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <NuxtLink :to="post.path" class="block h-full">
      <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full h-40 object-cover rounded-md mb-3" />
      <h2 class="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{{ post.title }}</h2>
      <p class="text-gray-600 mb-4">{{ post.description }}</p>
      <p class="text-sm text-gray-500 mt-auto">Published on: {{ new Date(post.date).toLocaleDateString() }}<span v-if="post.author"> by {{ post.author }}</span></p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{ post: any }>()
</script>
