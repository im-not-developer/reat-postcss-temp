export interface MenuListTypes {
  id: number;
  menu: string;
  link: string;
}

export const menuList: MenuListTypes[] = [
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

export interface HeaderControlListTypes {
  id: number;
  menu: string;
  link: string;
}

export const headerControlList: HeaderControlListTypes[] = [
  {
    id: 0,
    menu: 'header.control.login',
    link: '/login',
  },
  {
    id: 1,
    menu: 'header.control.signin',
    link: '/signin',
  },
  {
    id: 2,
    menu: 'header.control.basket',
    link: '/basket',
  },
];
