/** @format */

import React, { useEffect, useMemo, useState } from 'react';
import { If } from 'react-if';

import TransLang from '~/components/TransLang';
import {
  allSubMenuTypes,
  getSelectMenu,
  sideMenuListTypes,
} from '~/utils/menuAssets';

// *****[ MenuRow START ]*****
const MEMU_LIST = getSelectMenu('sideMenuList') ?? [];

interface MenuRowProps {
  menu: sideMenuListTypes;
  onMenuClick: (value: sideMenuListTypes) => void;
}

const MenuRowdefaultProps: MenuRowProps = {
  menu: {
    id: 0,
    name: '',
    subMenu: '',
    onMenu: false,
  },
  onMenuClick: () => console.warn('onIncrement not defined'),
};

const MenuRow: React.FC<MenuRowProps> = props => {
  const { menu, onMenuClick } = props;
  const subMenu = useMemo(() => {
    return menu?.onMenu ? getSelectMenu(menu.subMenu ?? '') : [];
  }, [menu]);

  return (
    <li className="side_menu_bar__contents__nav__row">
      <button
        className="side_menu_bar__contents__nav__row__btn"
        onClick={() => {
          onMenuClick(menu);
        }}>
        <TransLang text={menu.name} />
      </button>
      <If condition={menu?.onMenu}>
        <ul className="side_menu_bar__contents__nav__row__submenu">
          {(subMenu ?? [])?.map((c: allSubMenuTypes, idx: number) => {
            return (
              <li key={idx}>
                <button>
                  <TransLang text={c.name} />
                </button>
              </li>
            );
          })}
        </ul>
      </If>
    </li>
  );
};

MenuRow.defaultProps = MenuRowdefaultProps;

// *****[ MenuRow END ]*****

// *****[ SideMenuBar START ]*****
interface sideMenuProps {}

type PropsTypes = sideMenuProps & sideMenuListTypes;

const defaultProps: PropsTypes = {};

const SideMenuBar: React.FC<PropsTypes> = props => {
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
        <ul className="side_menu_bar__contents__nav">
          {(menuList ?? []).map((c, idx) => (
            <MenuRow key={idx} menu={c} onMenuClick={handleMenuClick} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

SideMenuBar.defaultProps = defaultProps;

export default SideMenuBar;

// *****[ SideMenuBar END ]*****
