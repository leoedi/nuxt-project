/* eslint-disable no-undef */
import en from './i18n/en.js'
import fa from './i18n/fa.js'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    fa
  }
}))
