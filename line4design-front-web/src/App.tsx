/** @format */

import React from 'react';

import MainPages from './pages/MainPages';

const path = require('path');
// import Header from '~/components/commons/Header';

// import { useTranslation } from 'react-i18next';
// import { Languages, languages } from 'src/locales/i18n';

// import './App.css';

function App() {
  // const { t, i18n } = useTranslation();

  // const handleChangeLanguage = (lang: Languages) => {
  //   i18n.changeLanguage(lang);
  // };
  console.log(path.resolve(__dirname, 'src'));
  return (
    <>
      <div>ddd</div>
      <MainPages />
    </>
  );
}

{
  /* <Header />
      <div className="pg_app">

      </div> */
}
{
  /* <div>
        <p>{t('hello')}</p>
        {languages.map(lang => (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(`language_${lang}`)}
          </button>
        ))}
      </div> */
}
export default App;
