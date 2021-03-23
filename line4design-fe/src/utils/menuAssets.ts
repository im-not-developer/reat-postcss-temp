/** @format */

export interface sideMenuListTypes {
  id?: number;
  name?: string;
  onMenu?: boolean;
}
export interface SELECT_MAP_TYPES {
  [sideMenuList: string]: sideMenuListTypes[];
}

const sideMenuList: sideMenuListTypes[] = [
  {
    id: 0,
    name: '전체',
    onMenu: false,
  },
  {
    id: 1,
    name: 'CLOSTING',
    onMenu: false,
  },
  {
    id: 2,
    name: 'ACC',
    onMenu: false,
  },
  {
    id: 3,
    name: 'SKILL',
    onMenu: false,
  },
];

export interface allSubMenuTypes {
  id?: number;
  name?: string;
  onSubMenu?: boolean;
}
const allSubMenu: allSubMenuTypes[] = [
  {
    id: 0,
    name: 'side_menu_bar.all',
    onSubMenu: false,
  },
];

const SELECT_MAP: SELECT_MAP_TYPES = {
  sideMenuList: sideMenuList,
};

export const getSelectMenu = (key: string) => {
  return SELECT_MAP[key] ?? [];
};
