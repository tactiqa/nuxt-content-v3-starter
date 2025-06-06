<script setup lang="ts">
// You can add any setup logic here if needed
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Welcome to Nuxt Blog Starter</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        A simple and elegant blog starter template built with Nuxt.js, Tailwind CSS, and Nuxt Content.
      </p>
      <div class="mt-8">
        <NuxtLink 
          to="/blog" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
        >
          Read Our Blog
        </NuxtLink>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">Nuxt 3</h2>
        <p class="text-gray-600">
          Built on the latest version of Nuxt, providing a modern and performant framework for your blog.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">Tailwind CSS</h2>
        <p class="text-gray-600">
          Styled with Tailwind CSS for rapid UI development and easy customization.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">Nuxt Content</h2>
        <p class="text-gray-600">
          Powered by Nuxt Content for easy content management using Markdown files.
        </p>
      </div>
    </div>
  </div>
</template>
