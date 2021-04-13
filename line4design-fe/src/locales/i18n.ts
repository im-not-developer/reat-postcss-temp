import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en} from './en';
import {ko} from './ko';

export const languages = ['en', 'ko'] as const;

export type Languages = typeof languages[number]; // 'en' | 'ko'

const resources = {
  en: {translation: en},
  ko: {translation: ko},
};

const userLanguage = window?.navigator?.language ?? 'en'; //window?.navigator?.userLanguage) ?? 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || userLanguage || 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
