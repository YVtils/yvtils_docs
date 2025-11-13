import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import English translations
import enCommon from "../locales/en/common.json";
import enNavigation from "../locales/en/navigation.json";
import enPages from "../locales/en/pages.json";
import enErrors from "../locales/en/errors.json";

// Import German translations
import deCommon from "../locales/de/common.json";
import deNavigation from "../locales/de/navigation.json";
import dePages from "../locales/de/pages.json";
import deErrors from "../locales/de/errors.json";

// Define resources
const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    pages: enPages,
    errors: enErrors,
  },
  de: {
    common: deCommon,
    navigation: deNavigation,
    pages: dePages,
    errors: deErrors,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "navigation", "pages", "errors"],

    // Language detection options
    detection: {
      // Order of language detection methods
      order: ["localStorage", "navigator"],
      // Cache user language preference
      caches: ["localStorage"],
      // LocalStorage key
      lookupLocalStorage: "i18nextLng",
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Debug mode (set to false in production)
    debug: false,
  });

export default i18n;
