<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-left hover:shadow-2xl transition-shadow border border-gray-100 hover:border-blue-200 w-full">
    <h4 class="text-lg font-bold text-gray-900 mb-2">{{ label }}</h4>
    <p class="text-gray-700 text-base">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; description: string }>()
</script>
