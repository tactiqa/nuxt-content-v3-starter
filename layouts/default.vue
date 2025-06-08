<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- Gradient Background -->
    <div class="fixed inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-blue-100"></div>
    <Header />
    <main class="flex-grow">
      <div class="mx-auto px-4 py-8 max-w-[80%] w-full">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
// This will be automatically imported by Nuxt 3
</script>
