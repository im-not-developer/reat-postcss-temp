import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en} from './en';
import {ko} from './ko';
import {jp} from './jp';

export interface languageFullNameProps {
  [key: string]: string;
}
export const languages = ['en', 'ko', 'jp'] as const;
export const languageFullName: languageFullNameProps[] = [
  {english: 'en'},
  {korean: 'ko'},
  {japanese: 'jp'},
];
export type Languages = typeof languages[number]; // 'en' | 'ko' | 'jp'

const resources = {
  en: {translation: en},
  ko: {translation: ko},
  jp: {translation: jp},
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
