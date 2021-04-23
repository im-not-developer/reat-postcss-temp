import React, {FC} from 'react';
import {SWRConfig} from 'swr';

import Line4Design from './Line4Design';
import LocaleProvider from './providers/LocaleProvider';


const AppPresenter: FC = () => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
      }}>
      <LocaleProvider>
        <Line4Design />
      </LocaleProvider>
    </SWRConfig>
  );
};

export default AppPresenter;
