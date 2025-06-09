// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon'],
  vite: {
    server: {
      allowedHosts: true
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/animated-bg.css'],
  content: {
  },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 700],
        subsets: ['latin'],
        display: 'swap',
      }
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'font-sans'
      },
      bodyAttrs: {
        class: 'antialiased text-gray-800'
      }
    }
  }
})