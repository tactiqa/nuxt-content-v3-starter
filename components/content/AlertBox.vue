<template>
    <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
      <p class="font-bold">{{ title }}</p>
      <slot />
    </div>
  </template>
  <script setup>
  defineProps({
    title: String
  })
  </script>