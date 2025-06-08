// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
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
        name: 'Roboto',
        provider: 'google',
        weights: [300, 400, 500, 700],
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