import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';
import NoneLineButton from '~/components/common/NoneLineButton';
import {Line4DesignLogo} from '~/assets/imgs/logo/Line4DesignLogo';
import TransLang from '~/components/common/TransLang';

interface MenuListTypes {
  id: number;
  menu: string;
  link: string;
}
const menuList: MenuListTypes[] = [
  {
    id: 0,
    menu: 'header.menu.aboutus',
    link: '/about',
  },
  {
    id: 1,
    menu: 'header.menu.shop',
    link: '/shop',
  },
  {
    id: 2,
    menu: 'header.menu.contact',
    link: '/contact',
  },
];

const Header: FC = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__left">
          <Line4DesignLogo />
        </div>
        <div className="header__container__center">
          <ul className="header__container__center__menus">
            {(menuList ?? []).map((m) => (
              <li key={m.id}>
                <NoneLineButton
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
          <ul className="">
            <li className="">
              <NoneLineButton fontSize={'24px'}>
                <TransLang text={'header.login'} />
              </NoneLineButton>
            </li>
            <li className="">
              <button>
                <TransLang text={'header.signin'} />
              </button>
            </li>

            <li className="">
              <NoneLineButton fontSize={'24px'}>
                <TransLang text={'header.basket'} />
              </NoneLineButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
