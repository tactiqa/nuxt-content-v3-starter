<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const isSolid = ref(false)
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const onScroll = () => {
    isSolid.value = window.scrollY > 10
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  // Clean up on destroy
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const navItems = [
  { name: 'Home', path: '/#home' },
  { name: 'Blog', path: '/blog' },
  { 
    name: 'Examples', 
    path: '/testplan',
    submenu: [
      { name: 'Test Plans', path: '/testplan/instagaram_enhanced' }
    ]
  },
  { name: 'Contact', path: '/#contact' },
  { name: 'About', path: '/#about' },
];

const isSubmenuOpen = ref(false);
let submenuTimeout;

const openSubmenu = () => {
  clearTimeout(submenuTimeout);
  isSubmenuOpen.value = true;
};

const closeSubmenu = () => {
  submenuTimeout = setTimeout(() => {
    isSubmenuOpen.value = false;
  }, 200); // Small delay to allow moving to submenu
};

const keepSubmenuOpen = () => {
  clearTimeout(submenuTimeout);
};
</script>

<template>
  <header :class="[isSolid ? 'bg-white shadow-md' : 'bg-transparent', 'fixed w-full top-0 left-0 z-50 transition-all duration-300']">
    <div class="w-full flex justify-center">
      <div class="mx-auto px-4 py-3 max-w-[80%] w-[80%]">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-3 text-4xl font-semibold text-gray-800">
            <img src="/images/tactiqa-logo.png" alt="tactiQA Logo" class="h-12 w-12 object-contain" />
            <span>tactiQA</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <div v-for="item in navItems" :key="item.path" class="relative group">
              <NuxtLink 
                v-if="!item.submenu"
                :to="item.path"
                :class="[
                  'text-base font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200',
                  $route.path === item.path ? 'text-blue-600 underline decoration-2 underline-offset-8' : ''
                ]"
              >
                {{ item.name }}
              </NuxtLink>
              <div v-else class="relative">
                <div 
                  @mouseenter="openSubmenu"
                  @mouseleave="closeSubmenu"
                  class="relative"
                >
                  <button 
                    :class="[
                      'text-base font-bold text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center',
                      $route.path.startsWith(item.path) ? 'text-blue-600' : ''
                    ]"
                  >
                    {{ item.name }}
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div 
                    v-if="isSubmenuOpen"
                    @mouseenter="keepSubmenuOpen"
                    @mouseleave="closeSubmenu"
                    class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  >
                    <NuxtLink
                      v-for="subItem in item.submenu"
                      :key="subItem.path"
                      :to="subItem.path"
                      @click.native="isSubmenuOpen = false"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      :class="{ 'bg-gray-100': $route.path === subItem.path }"
                    >
                      {{ subItem.name }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
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
              <div v-if="item.submenu" class="w-full">
                <div class="font-bold text-gray-700 px-4 py-2">{{ item.name }}</div>
                <div class="pl-4">
                  <NuxtLink
                    v-for="subItem in item.submenu"
                    :key="subItem.path"
                    :to="subItem.path"
                    @click="isMenuOpen = false"
                    class="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    :class="{ 'bg-gray-100 text-blue-600': $route.path === subItem.path }"
                  >
                    {{ subItem.name }}
                  </NuxtLink>
                </div>
              </div>
              <NuxtLink 
                v-else
                :to="item.path"
                @click="isMenuOpen = false"
                :class="[
                  'block px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200',
                  $route.path === item.path ? 'bg-gray-100 font-medium text-blue-600 underline decoration-2 underline-offset-8' : ''
                ]"
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
