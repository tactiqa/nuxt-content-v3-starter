<script setup lang="ts">
import { useRoute } from 'vue-router'

// Define the layout for this page
definePageMeta({
  layout: 'testplan'
})

const route = useRoute()

// Fetch the single test plan based on the current dynamic route path
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('testplan') // Query the 'testplans' collection
   .path(route.path) // Filter the collection by the exact path of the current route
   .first() // Retrieve only the first (and expectedly unique) matching document
)

// Handle cases where the test plan is not found (e.g., 404 error)
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Test Plan Not Found', fatal: true })
}

// Optional: Set SEO meta tags dynamically using data from the post's frontmatter
useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogImage: post.value.image, // Include a featured image for social sharing
})

// Generate table of contents from post headings for the floating menu
const toc = ref([])

// Extract headings after the component is mounted
onMounted(() => {
  // Wait for content to render
  nextTick(() => {
    // Find all headings in the content
    const headings = document.querySelectorAll('.prose h2, .prose h3')
    
    // Create TOC items from headings
    const tocItems = Array.from(headings).map((heading, index) => {
      // Create an id if it doesn't exist
      if (!heading.id) {
        heading.id = `heading-${index}`
      }
      
      return {
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1)), // Get heading level (2 for h2, 3 for h3)
      }
    })
    
    toc.value = tocItems
  })
})

// Scrollspy: track which heading is in view
import { ref, onMounted, onUnmounted } from 'vue'
const activeTocId = ref(null)

const handleScroll = () => {
  if (!toc.value || toc.value.length === 0) return
  let closest = null
  let minDist = Infinity
  toc.value.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      // Adjust threshold as needed (e.g., 80 for sticky header)
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

// Scroll to heading when clicking on TOC item
const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  activeTocId.value = id
}
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 relative">
    <!-- Main content area -->
    <div class="md:w-3/4">
      <article v-if="post" class="bg-white rounded-lg shadow-md p-8">
        <!-- <h1 class="text-4xl font-bold text-center mb-4">{{ post.title }}</h1>
        <p class="text-gray-600 text-center mb-8">
          Published on: {{ new Date(post.date).toLocaleDateString() }} by {{ post.author }}
        </p> -->
        <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full h-auto rounded-lg mb-8 object-cover max-h-96" />

        <ContentRenderer :value="post" class="prose max-w-none leading-tight" />
      </article>
      <div v-else class="text-center text-gray-600 py-12">
        <p>Test plan not found.</p>
      </div>
    </div>
    
    <!-- Floating menu/sidebar -->
    <div class="md:w-1/4" v-if="post">
      <TestplanSidebar :toc="toc" :post="post" />
    </div>
  </div>
</template>
