<template>
  <div>
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold"><NuxtLink to="/" class="hover:text-blue-200">Nuxt (with nuxt-content v3) Blog</NuxtLink></h1>
        <nav>
          <ul class="flex space-x-6">
            <li><NuxtLink to="/" class="hover:text-blue-200">Home</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-blue-200">Blog</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main>
      <NuxtPage />
    </main>
    
    <footer class="bg-gray-800 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>© {{ new Date().getFullYear() }} Nuxt Blog Starter. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
