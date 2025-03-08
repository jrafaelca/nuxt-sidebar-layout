import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ['..'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
})
