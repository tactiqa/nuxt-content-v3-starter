<script setup lang="ts">
// This will be automatically imported by Nuxt 3
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div class="container mx-auto px-4 py-12">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">Welcome to Nuxt Blog Starter</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple and elegant blog starter template built with Nuxt.js, Tailwind CSS, and Nuxt Content.
          </p>
          <div class="mt-8 space-x-4">
            <NuxtLink 
              to="/blog" 
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
            >
              Read Our Blog
            </NuxtLink>
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

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 class="text-2xl font-semibold text-gray-800 mb-3">Nuxt 3</h2>
            <p class="text-gray-600">
              Built on the latest version of Nuxt, providing a modern and performant framework for your blog.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 class="text-2xl font-semibold text-gray-800 mb-3">Tailwind CSS</h2>
            <p class="text-gray-600">
              Styled with Tailwind CSS for rapid UI development and easy customization.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 class="text-2xl font-semibold text-gray-800 mb-3">Nuxt Content</h2>
            <p class="text-gray-600">
              Powered by Nuxt Content for easy content management using Markdown files.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-gray-50">
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
    <section id="contact" class="py-16 bg-white">
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
  </div>
</template>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
