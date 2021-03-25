/** @format */

import React, { useEffect, useMemo, useState } from 'react';
import { If } from 'react-if';

import TransLang from '~/components/TransLang';
import {
  getSelectMenu,
  sideMenuListTypes,
  subMenuTypes,
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
          {(subMenu ?? [])?.map((c: subMenuTypes, idx: number) => {
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
        onMenu: _c.name === value.name ? !value.onMenu : false,
      })),
    );
  };

  useEffect(() => {
    setMenuList(MEMU_LIST);
  }, []);

  return (
    <div className="side_menu_bar">
      <div className="side_menu_bar__contents">
        <nav className="side_menu_bar__contents__nav">
          <ul>
            {(menuList ?? []).map((c, idx) => (
              <MenuRow key={idx} menu={c} onMenuClick={handleMenuClick} />
            ))}
          </ul>
        </nav>
        <div className="side_menu_bar__contents__filters">
          {/* 필터 */}
          <div>
            <div>
              <TransLang text={'side_menu_bar.price'} />
            </div>
            <ul>
              <li>10만원 미만</li>
              <li>10만원 ~ 20만원 미만</li>
              <li>20만원 ~ 30만원 미만</li>
              <li>40만원 ~ 50만원 미만</li>
              <li>50만원 이상</li>
            </ul>
          </div>

          {/* 상태 */}
          <div style={{ margin: '50px 0px 0px 0px' }}>
            <div>
              <TransLang text={'side_menu_bar.price'} />
            </div>
            <ul>
              <li>10만원 미만</li>
              <li>10만원 ~ 20만원 미만</li>
              <li>20만원 ~ 30만원 미만</li>
              <li>40만원 ~ 50만원 미만</li>
              <li>50만원 이상</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

SideMenuBar.defaultProps = defaultProps;

export default SideMenuBar;

// *****[ SideMenuBar END ]*****
