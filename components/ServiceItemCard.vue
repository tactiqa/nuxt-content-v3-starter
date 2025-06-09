<template>
  <div class="bg-white rounded-lg shadow-md p-5 flex flex-col items-start text-left hover:shadow-lg transition-all duration-200 border border-gray-50 hover:border-blue-100 w-full hover:-translate-y-0.5">
    <div class="flex items-center mb-3">
      <div v-if="icon" class="mr-3 p-2 bg-blue-50 rounded-lg text-blue-600">
        <Icon :name="icon" class="w-6 h-6" />
      </div>
      <h4 class="text-lg font-bold text-gray-900">{{ label }}</h4>
    </div>
    <p class="text-gray-700 text-base">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  label: string; 
  description: string;
  icon?: string;
}>()
</script>
