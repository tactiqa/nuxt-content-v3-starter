<script setup lang="ts">
// Define the layout for this page
definePageMeta({
  layout: 'testplan'
})

// Fetch test plan using the queryCollection API
const { data: posts } = await useAsyncData('testplans', () => 
  queryCollection('testplan')
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div class="w-full">
    <h1 class="text-4xl font-bold mb-8 text-center">Test Plan</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <template v-if="posts && posts.length">
        <div v-for="post in posts" :key="post.path" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <NuxtLink :to="post.path" class="block h-full">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{{ post.title }}</h2>
            <p class="text-gray-600 mb-4">{{ post.description }}</p>
            <p class="text-sm text-gray-500 mt-auto">Published on: {{ new Date(post.date).toLocaleDateString() }} by {{ post.author }}</p>
          </NuxtLink>
        </div>
      </template>
      <p v-else class="text-center text-gray-600 col-span-full">No test plan found.</p>
    </div>
  </div>
</template>
