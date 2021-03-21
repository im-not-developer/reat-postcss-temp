/** @format */

import React from 'react';
import { SWRConfig } from 'swr';
import Line4Design from './Line4Design';
import LocaleProvider from './providers/LocaleProvider';
import GlobalStyle from './styles/GlobalStyles';

const AppPresenter: React.FC = () => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
      }}>
      <LocaleProvider>
        <GlobalStyle />
        <Line4Design />
      </LocaleProvider>
    </SWRConfig>
  );
};

export default AppPresenter;
