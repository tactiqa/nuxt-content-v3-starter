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

// Scroll to heading when clicking on TOC item
const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 relative">
    <!-- Main content area -->
    <div class="md:w-3/4">
      <article v-if="post" class="bg-white rounded-lg shadow-md p-8">
        <h1 class="text-4xl font-bold text-center mb-4">{{ post.title }}</h1>
        <p class="text-gray-600 text-center mb-8">
          Published on: {{ new Date(post.date).toLocaleDateString() }} by {{ post.author }}
        </p>
        <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full h-auto rounded-lg mb-8 object-cover max-h-96" />

        <ContentRenderer :value="post" class="prose max-w-none leading-tight" />
      </article>
      <div v-else class="text-center text-gray-600 py-12">
        <p>Test plan not found.</p>
      </div>
    </div>
    
    <!-- Floating menu/sidebar -->
    <div class="md:w-1/4" v-if="post">
      <div class="bg-white rounded-lg shadow-md p-6 sticky top-24 leading-tight">
        <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Table of Contents</h3>
        <nav v-if="toc.length > 0" class="toc-nav">
          <ul class="space-y-2">
            <li v-for="item in toc" :key="item.id" 
                :class="{'pl-4': item.level === 3}">
              <a href="#" @click.prevent="scrollToHeading(item.id)" 
                 class="text-blue-600 hover:text-blue-800 hover:underline block py-0 text-sm leading-tight"
                 :class="{'font-medium': item.level === 2, 'text-sm': item.level === 3}">
                {{ item.text }}
              </a>
            </li>
          </ul>
        </nav>
        <p v-else class="text-gray-500 text-sm">No sections found</p>
        
        <!-- Additional floating menu items -->
        <div class="mt-6 pt-4 border-t border-gray-200">
          <h4 class="text-sm font-medium text-gray-800 mb-3">Actions</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <span class="mr-2">📄</span> Download PDF
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <span class="mr-2">🖨️</span> Print Test Plan
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <span class="mr-2">🔗</span> Share
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
