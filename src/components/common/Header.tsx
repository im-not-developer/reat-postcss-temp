import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';

import NoneLineButton from '~/components/NoneLineButton';
import TransLang from '~/components/common/TrandsLang';
import {menuList, headerControlList} from '~/utils/headerUtil';

const Header: FC = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__center">
          <ul className="header__container__center__menus">
            {(menuList ?? []).map((m) => (
              <li key={m.id}>
                <NoneLineButton
                  fontFamilyClass="body_text"
                  fontSize={'18px'}
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
                  fontSize={'14px'}
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
