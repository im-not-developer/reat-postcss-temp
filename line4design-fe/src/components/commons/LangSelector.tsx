/** @format */

import React, { FC, useContext } from 'react';

import { languages } from '~/locales/i18n';
import { LocaleContext } from '~/providers/LocaleProvider';

interface LangSelectorProps {}

const LangSelectorDefaultProps: LangSelectorProps = {};

const LangSelector: FC<LangSelectorProps> = props => {
  const { handleChangeLanguage, locale } = useContext(LocaleContext);

  return (
    <div className="lang_selector">
      <div className="lang_selector__contents">
        <div>{locale?.toUpperCase()}</div>
        <ul>
          {languages.map((l, idx) => {
            console.log(l);
            return (
              <li
                className="lang_selector__contents__drop_lang"
                key={idx}
                onClick={() => {
                  handleChangeLanguage(l);
                }}>
                {l.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

LangSelector.defaultProps = LangSelectorDefaultProps;

export default LangSelector;