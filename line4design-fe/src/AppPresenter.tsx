/** @format */

import React from 'react';
import { SWRConfig } from 'swr';
import Line4Design from './Line4Design';
import GlobalStyle from './styles/GlobalStyles';

const AppPresenter: React.FC = () => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
      }}>
      <GlobalStyle />
      <Line4Design />
    </SWRConfig>
  );
};

export default AppPresenter;
