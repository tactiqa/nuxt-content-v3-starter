<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import ServiceCard from '~/components/ServiceCard.vue'
import ServiceItemCard from '~/components/ServiceItemCard.vue'
import { ref, onMounted } from 'vue'

interface ServiceItem {
  description: string
  icon: string
}

interface ServiceSection {
  icon: string
  items: Record<string, ServiceItem>
}

interface Service {
  icon: string
  title?: string
  sections: Record<string, ServiceSection>
}

const services = ref<Service[]>([])
const servicesError = ref('')

onMounted(async () => {
  try {
    const res = await fetch('/landing_page_data/profesional_services.json')
    if (!res.ok) throw new Error('Fetch failed: ' + res.status)
    const data = await res.json()
    
    // Transform the data to include titles and maintain the structure
    services.value = Object.entries(data).map(([title, serviceData]) => ({
      ...serviceData,
      title,
      sections: serviceData.sections || {}
    }))
  } catch (error) {
    servicesError.value = 'Failed to load services. Please try again later.'
    console.error('Error loading services:', error)
  }
})
</script>

<template>
  <div class="mb-0 pb-0">

    <!-- Hero Section -->
    <section id="home" class="pt-2 pb-4 bg-transparent">
      <div class="max-w-2xl mx-auto px-4 py-10">
        <div class="text-center pt-16 pb-20">
          <h1 class="text-5xl md:text-5xl font-bold text-white mb-6 drop-shadow-md leading-tight">
            <span class="whitespace-nowrap">Elevate Your Software Quality</span><br>
            <span class="whitespace-nowrap">to New Heights</span>
            <!-- <span class="block text-4xl md:text-5xl font-semibold text-blue-100 mt-2">QA & Testing Services</span> -->
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming software delivery through expert QA, Automation, SDLC, and Agile Process optimization.
          </p>
          <div class="mt-8 space-x-4">
            <a 
              href="#services-cards-qa" 
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              class="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Decorative White Fading Wave -->
    <div aria-hidden="true" style="margin-top:-2px;">
      <div class="container mx-auto px-4">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-24" preserveAspectRatio="none">
          <defs>
            <linearGradient id="white-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fff" stop-opacity="1" />
              <stop offset="100%" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" fill="url(#white-fade)" />
        </svg>
      </div>
    </div>
    <!-- Items as Cards (QA & Software Testing Services) -->
    <section id="services-cards-qa" class="py-12 bg-gradient-to-br from-blue-50 to-blue-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-600 mb-2">
            {{ services[0]?.title }}
          </h2>
        </div>
        <div class="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <template v-for="(section, sectionKey) in services[0]?.sections" :key="sectionKey">
            <ServiceItemCard
              v-for="(item, itemKey) in section.items"
              :key="`${sectionKey}-${itemKey}`"
              :label="itemKey"
              :description="item.description"
              :icon="item.icon"
            />
          </template>
        </div>
      </div>
    </section>

    <!-- Items as Cards (Test Automation Services) -->
    <section id="services-cards-automation" class="py-6 bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-600 mb-2">
            {{ services[1]?.title }}
          </h2>
        </div>
        <div class="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <template v-for="(section, sectionKey) in services[1]?.sections" :key="sectionKey">
            <ServiceItemCard
              v-for="(item, itemKey) in section.items"
              :key="`${sectionKey}-${itemKey}`"
              :label="itemKey"
              :description="item.description"
              :icon="item.icon"
            />
          </template>
        </div>
      </div>
    </section>

    <!-- Items as Cards (SDLC Services) -->
    <section id="services-cards-sdlc" class="py-6 bg-gradient-to-br from-blue-100 to-blue-200">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-6">
          <h2 class="text-4xl font-extrabold text-gray-600 mb-2">
            {{ services[2]?.title }}
          </h2>
        </div>
        <div class="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <template v-for="(section, sectionKey) in services[2]?.sections" :key="sectionKey">
            <ServiceItemCard
              v-for="(item, itemKey) in section.items"
              :key="`${sectionKey}-${itemKey}`"
              :label="itemKey"
              :description="item.description"
              :icon="item.icon"
            />
          </template>
        </div>
      </div>
    </section>
    <!-- About Section -->
    <section id="testplan" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <p class="text-gray-600 mb-6">
              Welcome to our blog! We're passionate about sharing knowledge, insights, and stories about web development, 
              modern technologies, and best practices in the industry.
            </p>
            <p class="text-gray-600 mb-6">
              Our team consists of experienced developers and content creators who are dedicated to providing high-quality, 
              informative, and engaging content for developers of all skill levels.
            </p>
            <p class="text-gray-600">
              Whether you're just starting your coding journey or you're a seasoned professional, we aim to provide 
              valuable resources to help you grow and succeed in your career.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12 bg-white pb-0 mb-0">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
          <div class="bg-white p-8 rounded-lg shadow-md">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                >
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                >
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div class="mt-8 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">Or reach us directly</h3>
              <div class="space-y-2">
                <p class="text-gray-600 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@example.com
                </p>
                <p class="text-gray-600 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </p>
                <p class="text-gray-600 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Main Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>



<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
