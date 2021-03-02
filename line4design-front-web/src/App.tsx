/** @format */

import React from 'react';

import Header from '~/components/commons/Header';
import MainPage from '~/pages/MainPage';

// import { useTranslation } from 'react-i18next';
// import { Languages, languages } from 'src/locales/i18n';

// import './App.css';

function App() {
  // const { t, i18n } = useTranslation();

  // const handleChangeLanguage = (lang: Languages) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <>
      <Header />
      <div className="pg_app">
        <MainPage />
      </div>
      {/* <div>
        <p>{t('hello')}</p>
        {languages.map(lang => (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(`language_${lang}`)}
          </button>
        ))}
      </div> */}
    </>
  );
}

export default App;
