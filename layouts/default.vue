<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <div class="container mx-auto px-4 py-8 w-full max-w-[70%]">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
// This will be automatically imported by Nuxt 3
</script>
