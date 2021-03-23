/** @format */

import React, { useEffect, useState } from 'react';
import { If } from 'react-if';

import TransLang from '~/components/TransLang';
import { getSelectMenu, sideMenuListTypes } from '~/utils/menuAssets';

interface MenuProps {
  menu: sideMenuListTypes;
  onMenuClick: (value: sideMenuListTypes) => void;
}

const MEMU_LIST = getSelectMenu('sideMenuList');

const MenuRow: React.FC<MenuProps> = ({
  menu = {
    id: 0,
    name: '',
    onMenu: false,
  },
  onMenuClick,
}) => {
  return (
    <li>
      <button
        onClick={() => {
          onMenuClick(menu);
        }}>
        <TransLang text={menu.name} />
      </button>
      <If condition={menu?.onMenu}>
        <ul>ddd</ul>
      </If>
    </li>
  );
};

interface sideMenuProps {}

type Props = sideMenuProps & sideMenuListTypes;

const SideMenuBar: React.FC<Props> = () => {
  const [menuList, setMenuList] = useState<sideMenuListTypes[] | null>(null);

  const handleMenuClick = (value: sideMenuListTypes) => {
    setMenuList(
      (menuList ?? []).map(_c => ({
        ..._c,
        onMenu: _c.name === value.name,
      })),
    );
  };

  useEffect(() => {
    setMenuList(MEMU_LIST);
  }, []);

  return (
    <nav className="side_menu_bar">
      <div className="side_menu_bar__contents">
        <ul>
          {(menuList ?? []).map((c, idx) => (
            <MenuRow key={idx} menu={c} onMenuClick={handleMenuClick} />
          ))}
          {/* <li>
            <button>전체</button>
          </li>
          <li>
            <button>CLOSTING</button>
          </li>
          <li>
            <button>ACC</button>
          </li>
          <li>
            <button>SKILL</button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default SideMenuBar;
