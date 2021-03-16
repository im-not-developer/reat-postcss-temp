/** @format */

import { en } from './en';
import { ko } from './ko';

export type LangType = typeof en;

export const languageMap = {
  default: ko,
  en,
  ko,
};
