/** @format */

import PropTypes from 'prop-types';
import React, { createContext, FC, useState } from 'react';

export type LocaleContextState = {
  locale: string;
  changeLocale: (lang: string) => void;
};

const contextDefaultValues: LocaleContextState = {
  locale: 'en',
  changeLocale: () => ({}),
};

export const LocaleContext = createContext<LocaleContextState>(
  contextDefaultValues,
);

const LocaleProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState<string>(contextDefaultValues.locale);

  const changeLocale = (lang: string) => {
    setLocale(lang);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        changeLocale,
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
