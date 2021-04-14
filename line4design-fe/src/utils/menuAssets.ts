export interface sideMenuListTypes {
  id?: number;
  name?: string;
  subMenu?: string;
  onMenu?: boolean;
}

export interface subMenuTypes {
  id?: number;
  name?: string;
  onSubMenu?: boolean;
}

export interface SELECT_MAP_TYPES {
  [key: string]: sideMenuListTypes[] | subMenuTypes[];
}

const sideMenuList: sideMenuListTypes[] = [
  {
    id: 0,
    name: '전체',
    subMenu: '',
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
    subMenu: 'accSubMenu',
    onMenu: false,
  },
  {
    id: 3,
    name: 'SKILL',
    subMenu: 'accSubMenu',
    onMenu: false,
  },
];

const allSubMenu: subMenuTypes[] = [
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

const accSubMenu: subMenuTypes[] = [
  {
    id: 0,
    name: 'side_menu_bar.all',
    onSubMenu: false,
  },
  {
    id: 1,
    name: 'ZIPER',
    onSubMenu: false,
  },
  {
    id: 2,
    name: 'BUTTON',
    onSubMenu: false,
  },
  {
    id: 3,
    name: 'STRAP',
    onSubMenu: false,
  },
];

const SELECT_MAP: SELECT_MAP_TYPES = {
  sideMenuList: sideMenuList,
  allSubMenu: allSubMenu,
  accSubMenu: accSubMenu,
};

export const getSelectMenu = (key: string) => {
  if (key) {
    return SELECT_MAP[key] ?? [];
  }
};
