import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Load translations using http (default public/locales)
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en', // Default language
    debug: true,
    cache: {
      enabled: false, // Disable caching for debugging purposes
    },
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
