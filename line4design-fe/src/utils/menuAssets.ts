/** @format */

export interface sideMenuListTypes {
  id?: number;
  name?: string;
  subMenu?: string;
  onMenu?: boolean;
}

export interface allSubMenuTypes {
  id?: number;
  name?: string;
  onSubMenu?: boolean;
}

export interface SELECT_MAP_TYPES {
  [k1: string]: sideMenuListTypes[];
  [k2: string]: allSubMenuTypes[];
}

const sideMenuList: sideMenuListTypes[] = [
  {
    id: 0,
    name: '전체',
    subMenu: 'allSubMenu',
    onMenu: false,
  },
  {
    id: 1,
    name: 'CLOSTING',
    subMenu: 'allSubMenu',
    onMenu: false,
  },
  {
    id: 2,
    name: 'ACC',
    subMenu: 'allSubMenu',
    onMenu: false,
  },
  {
    id: 3,
    name: 'SKILL',
    subMenu: 'allSubMenu',
    onMenu: false,
  },
];

const allSubMenu: allSubMenuTypes[] = [
  {
    id: 0,
    name: 'side_menu_bar.all',
    onSubMenu: false,
  },
  {
    id: 1,
    name: 'OUTER',
    onSubMenu: false,
  },
  {
    id: 2,
    name: 'DRESSES',
    onSubMenu: false,
  },
  {
    id: 3,
    name: 'SHIRTS / BLOUSES',
    onSubMenu: false,
  },
  {
    id: 4,
    name: 'SWEATER / SWEATS',
    onSubMenu: false,
  },
  {
    id: 5,
    name: 'T-SHIRTS',
    onSubMenu: false,
  },
  {
    id: 6,
    name: 'PANTS / SKIRTS',
    onSubMenu: false,
  },
];

const SELECT_MAP: SELECT_MAP_TYPES = {
  sideMenuList: sideMenuList,
  allSubMenu: allSubMenu,
};

export const getSelectMenu = (key: string) => {
  return SELECT_MAP[key] ?? [];
};
