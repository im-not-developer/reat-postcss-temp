/** @format */

import PropTypes from 'prop-types';
import React, {createContext, FC, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Languages} from '~/locales/i18n';

export type LocaleContextState = {
  locale: string;
  handleChangeLanguage(lang: string): void;
  viewTransLang(key: string): string;
};

const contextDefaultValues: LocaleContextState = {
  locale: 'ko',
  handleChangeLanguage: () => ({}),
  viewTransLang: () => '',
};

export const LocaleContext = createContext<LocaleContextState>(
  contextDefaultValues,
);

const LocaleProvider: FC = ({children}) => {
  const {t, i18n} = useTranslation();
  const [locale, setLocale] = useState<string>(contextDefaultValues.locale);

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
    setLocale(lang);
  };

  const viewTransLang = (key: string) => {
    return t(key);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        handleChangeLanguage,
        viewTransLang,
      }}>
      {children}
    </LocaleContext.Provider>
  );
  // const changeLocale = (lang: string) => setLocale((todos) => [...todos, newTodo]);
};

LocaleProvider.propTypes = {
  children: PropTypes?.node,
};

export default LocaleProvider;
