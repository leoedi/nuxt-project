/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module'

  ],
  i18n: {

    locales: ['en', 'fa'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  eslint: {
    lintOnStart: false
  }
})
