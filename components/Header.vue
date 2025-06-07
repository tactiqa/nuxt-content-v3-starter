<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navItems = [
  { name: 'Home', path: '/#home' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];
</script>

<template>
  <header class="fixed w-full z-50 transition-all duration-300" :class="{ 'bg-white shadow-md': isMenuOpen || $route.path !== '/' }">
    <div class="w-full">
      <div class="container mx-auto px-4 py-3 max-w-[70%]">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            Nuxt Blog
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              :class="{ 'text-blue-600 font-medium': $route.path === item.path }"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <!-- Mobile menu button -->
          <button 
            @click="toggleMenu" 
            class="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="transform opacity-0 -translate-y-2"
        >
          <nav v-if="isMenuOpen" class="md:hidden mt-4 pb-4">
            <div class="flex flex-col space-y-3">
              <NuxtLink 
                v-for="item in navItems" 
                :key="item.path"
                :to="item.path"
                @click="isMenuOpen = false"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                :class="{ 'bg-gray-100 font-medium': $route.path === item.path }"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </nav>
        </transition>
      </div>
    </div>
  </header>
  <!-- Add padding to the top of the content to account for fixed header -->
  <div class="h-16"></div>
</template>
