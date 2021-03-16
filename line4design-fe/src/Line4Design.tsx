/** @format */

import React from 'react';
// import { IntlProvider } from 'react-intl';
// import { languageMap } from '~/lang/index';
import Header from './components/commons/Header';
import RoutePresenter from './routes/RoutePresenter';

interface Props {}

const Line4Design = (props: Props) => {
  return (
    // <IntlProvider locale={'en'} messages={languageMap['en']}>
    <div className="line4Design_pg">
      <Header />
      <RoutePresenter />
    </div>
    // </IntlProvider>
  );
};

export default Line4Design;
