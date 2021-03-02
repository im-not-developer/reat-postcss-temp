/** @format */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { tranEn } from './en';
import { tranJp } from './jp';
import { tranKo } from './ko';

const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
  jp: { translation: tranJp }
};

// const userLanguage = window.navigator.language || window.navigator.userLanguage;
const keys = 'keys';
const userLanguage = 'keys';

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem(keys) || userLanguage || 'ko',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
