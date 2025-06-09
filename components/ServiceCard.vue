<template>
  <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow border border-gray-100 hover:border-blue-200 w-full">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ service.title }}</h3>
    <div v-for="(section, sIdx) in service.sections" :key="sIdx" class="mb-4 w-full">
  <h4 class="text-base font-semibold text-blue-700 mb-2 text-left">{{ section.heading }}</h4>
  <ul v-if="section.items && section.items.length" class="list-disc pl-5 text-left text-gray-800 text-sm space-y-1">
    <li v-for="(item, i) in section.items" :key="i">
      <span class="font-medium">{{ item.label }}:</span> {{ item.description }}
    </li>
  </ul>
</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ service: any }>()
</script>