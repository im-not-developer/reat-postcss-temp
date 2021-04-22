import React, {FC, useContext} from 'react';
import styled from 'styled-components';

import {languages} from '~/locales/i18n';
import {LocaleContext} from '~/providers/LocaleProvider';

const TopBar: FC = () => {
  const {handleChangeLanguage, locale} = useContext(LocaleContext);

  return (
    <div className="topbar_pg">
      <div className="topbar_pg__container">
        <div className="topbar_pg__container__contact">
          <div className="title_s">CONTACT</div>
        </div>
        <div className="topbar_pg__container__title">
          <div className="body_bold">{locale?.toUpperCase()}</div>
        </div>
        {/* <ul>
          {languages.map((l, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  handleChangeLanguage(l);
                }}>
                {l.toUpperCase()}
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default TopBar;
