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
                  fontSize={'25px'}
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

      {/* <div>
        <ul className="list-disc space-y-2">
          <li className="flex items-start">
            <button>
              <TransLang text={'header.login'} />
            </button>
          </li>
          <li className="flex items-start">
            <button>
              <TransLang text={'header.signin'} />
            </button>
          </li>
          <li className="flex items-start">
            <button>
              <TransLang text={'header.service_center'} />
            </button>
          </li>
          <li className="flex items-start">
            <button>
              <TransLang text={'header.basket'} />
            </button>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
