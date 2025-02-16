// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';


const savedLang = localStorage.getItem('lang') || 'en'; // Get stored language or default to English

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    lng: savedLang, // Load language from localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


