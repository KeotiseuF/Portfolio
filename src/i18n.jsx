import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from "./services/Language.ts";
import translationEN from './i18n/en.json';
import translationFR from './i18n/fr.json';
 
const params = new URLSearchParams(document.location.search);

let defaultLanguage =  params.get('lang') === 'EN' ? Language.EN : Language.FR;
 
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,
 
    keySeparator: ".",  // to support nested translations
 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
});

export default i18n;