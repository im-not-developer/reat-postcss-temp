import {ConfigTypes} from './types';

export const defaultConfig: ConfigTypes = {
  language: {
    longLanguage: 'ENGLISH',
    shortLanguage: 'en',
  },
};

export const Base = {
  config: defaultConfig,
};
declare global {
  interface Window {
    env: ConfigTypes;
  }
}

window.env = window.env || defaultConfig;

Base.config = {...window.env};

export const shortLanguage = (): string =>
  Base.config.language.shortLanguage || '';

export const longLanguage = (): string =>
  Base.config.language.longLanguage || '';
