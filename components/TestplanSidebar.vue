<template>
  <div class="bg-white rounded-lg shadow-md p-6 sticky top-24 leading-tight">
    <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Table of Contents</h3>
    <nav v-if="toc && toc.length > 0" class="toc-nav">
      <ul class="space-y-2">
        <li v-for="item in toc" :key="item.id" :class="{'pl-4': item.level === 3}">
          <a href="#" @click.prevent="scrollToHeading(item.id)"
            :class="[
              'text-gray-800 hover:text-gray-900 block py-0 text-sm leading-tight font-medium',
              { 'text-sm': item.level === 3, 'bg-gray-800': activeTocId === item.id, 'text-white': activeTocId === item.id }
            ]">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>
    <p v-else class="text-gray-500 text-sm">No sections found</p>

    <!-- Additional floating menu items -->
    <!-- <div class="mt-6 pt-4 border-t border-gray-200">
      <h4 class="text-sm font-medium text-gray-800 mb-3">Actions</h4>
      <ul class="space-y-2">
        <li>
          <a href="#" class="flex items-center text-gray-800 hover:text-gray-900 text-sm font-medium">
            <span class="mr-2">📄</span> Download PDF
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center text-gray-800 hover:text-gray-900 text-sm font-medium">
            <span class="mr-2">🖨️</span> Print Test Plan
          </a>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, toRefs } from 'vue'
const props = defineProps({
  toc: { type: Array, required: true },
  post: { type: Object, required: true }
})
const { toc } = toRefs(props)
const activeTocId = ref(null)

const handleScroll = () => {
  if (!toc.value || toc.value.length === 0) return
  let closest = null
  let minDist = Infinity
  toc.value.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const dist = Math.abs(rect.top - 80)
      if (rect.top < window.innerHeight && dist < minDist && rect.bottom > 0) {
        minDist = dist
        closest = item.id
      }
    }
  })
  if (closest) activeTocId.value = closest
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  activeTocId.value = id
}
</script>
