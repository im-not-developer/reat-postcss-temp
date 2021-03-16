/** @format */

import React, { createContext, Dispatch, useState } from 'react';
type SetValue = Dispatch<any>;

export interface LangStateType {
  lang?: string;
}
export const LocaleContext = createContext<[LangStateType, SetValue]>([
  {},
  () => {},
]);

export interface Props {
  children: React.ReactNode;
}

const LocaleContextProvider = (props: Props) => {
  const [lang, setLang] = useState<LangStateType>('en');

  return (
    <LocaleContext.Provider value={[lang, setLang]}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;
