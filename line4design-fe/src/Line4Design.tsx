/** @format */

import React from 'react';
import { IntlProvider } from 'react-intl';
import { languageMap } from '~/config/lang/index';
import Header from './components/commons/Header';
import { LocaleContext } from './providers/localeContext';
import RoutePresenter from './routes/RoutePresenter';
interface Props {}

const Line4Design = (props: Props) => {
  const [lang] = React.useContext(LocaleContext);
  return (
    <IntlProvider messages={languageMap[lang]}>
      <div className="line4Design_pg">
        <Header />
        <RoutePresenter />
      </div>
    </IntlProvider>
  );
};

export default Line4Design;
