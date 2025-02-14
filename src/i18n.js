// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n
  .use(initReactI18next) // Connect i18next with react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if translation is not available
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
