/** @format */

import React from 'react';
import Header from './components/commons/Header';
import RoutePresenter from './routes/RoutePresenter';

interface Props {}

const Line4Design = (props: Props) => {
  return (
    <div className="line4Design_pg">
      <Header />
      <RoutePresenter />
      {/*
      <div>
        <p>{t('call')}</p>
        {languages.map(lang => (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(`language_${lang}`)}
          </button>
        ))}
      </div>*/}
    </div>
  );
};

export default Line4Design;
