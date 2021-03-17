/** @format */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/commons/Header';
import { Languages, languages } from './locales/i18n';
import RoutePresenter from './routes/RoutePresenter';

interface Props {}

const Line4Design = (props: Props) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    // <IntlProvider locale={'en'} messages={languageMap['en']}>
    <div className="line4Design_pg">
      <Header />
      <RoutePresenter />

      <div>
        <p>{t('call')}</p>
        {languages.map(lang => (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(`language_${lang}`)}
          </button>
        ))}
      </div>
    </div>
    // </IntlProvider>
  );
};

export default Line4Design;
