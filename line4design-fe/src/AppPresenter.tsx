/** @format */

import React from 'react';
import { SWRConfig } from 'swr';
import { getFindKeys } from '~/config/keys';
import Line4Design from './Line4Design';
import LocaleProvider from './providers/LocaleProvider';
import GlobalStyle from './styles/GlobalStyles';
const key_name = getFindKeys('LANG_KEY');

const AppPresenter: React.FC = () => {
  // const dd = useLocalStorage(key_name !== null ? key_name : '', '');

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
