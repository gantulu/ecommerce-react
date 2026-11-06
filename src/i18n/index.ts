import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import idID from './locales/id-ID.json'

export const LANGUAGES = [{ code: 'id-ID', label: 'Bahasa Indonesia' }] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']

i18n.use(initReactI18next).init({
  resources: {
    'id-ID': { translation: idID },
  },
  lng: 'id-ID',
  fallbackLng: 'id-ID',
  supportedLngs: ['id-ID'],
  interpolation: { escapeValue: false },
})

export default i18n
