/** @format */

import React from 'react';
import { SWRConfig } from 'swr';
import Line4Design from './Line4Design';
import { LocaleContextProvider } from './providers/LocaleContext';
import GlobalStyle from './styles/GlobalStyles';

const AppPresenter: React.FC = () => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
      }}>
      <LocaleContextProvider>
        <GlobalStyle />
        <Line4Design />
      </LocaleContextProvider>
    </SWRConfig>
  );
};

export default AppPresenter;
