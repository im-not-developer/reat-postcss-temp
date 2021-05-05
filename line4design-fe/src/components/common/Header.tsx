import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';

import NoneLineButton from '~/components/common/NoneLineButton';
import {Line4DesignLogo} from '~/assets/imgs/logo/Line4DesignLogo';
import TransLang from '~/components/common/TransLang';
import {menuList, headerControlList} from '~/utils/headerUtil';

const Header: FC = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__left">
          <Line4DesignLogo height="80px" />
        </div>
        <div className="header__container__center">
          <ul className="header__container__center__menus">
            {(menuList ?? []).map((m) => (
              <li key={m.id}>
                <NoneLineButton
                  fontFamilyClass="body_text"
                  fontSize={'24px'}
                  onClick={() => {
                    history.push(m.link);
                  }}>
                  <TransLang text={m?.menu} />
                </NoneLineButton>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__container__right">
          <ul className="header__container__right__control">
            {(headerControlList ?? []).map((m) => (
              <li key={m.id}>
                <NoneLineButton
                  fontFamilyClass="small-text"
                  onClick={() => {
                    history.push(m.link);
                  }}>
                  <TransLang text={m?.menu} />
                </NoneLineButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
