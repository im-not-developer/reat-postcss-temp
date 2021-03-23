/** @format */

export interface productListTypes {
  id?: number;
  category?: string;
  name?: string;
  price?: number;
  discount_price?: number;
  discount_percent?: number;
  discount_on?: boolean;
  img_link?: string;
}

export const product_list_items: productListTypes[] = [
  {
    id: 0,
    category: 'jacket',
    name: 'the tennis jacket',
    price: 406000,
    discount_price: 580000,
    discount_percent: 30,
    discount_on: true,
    img_link: '~/assets/imgs/sample.jpg',
  },
  {
    id: 1,
    category: 't-shirt',
    name: 'logo t-shiht',
    price: 72000,
    discount_price: 180000,
    discount_percent: 60,
    discount_on: true,
    img_link: '~/assets/imgs/sample.jpg',
  },
  {
    id: 2,
    category: 'jacket',
    name: 'the tennis jacket',
    price: 406000,
    discount_price: 580000,
    discount_percent: 30,
    discount_on: true,
    img_link: '~/assets/imgs/sample.jpg',
  },
  {
    id: 3,
    category: 'phone case',
    name: 'iphone 11 case',
    price: 63000,
    discount_price: 90000,
    discount_percent: 60,
    discount_on: true,
    img_link: '~/assets/imgs/sample.jpg',
  },
  {
    id: 4,
    category: 'acc',
    name: 'LIPS PATCH RED (M0017152-600)',
    price: 29000,
    discount_price: 0,
    discount_percent: 0,
    discount_on: false,
    img_link: '~/assets/imgs/sample.jpg',
  },
  {
    id: 5,
    category: 'dress',
    name: 'heart twill',
    price: 1160000,
    discount_price: 0,
    discount_percent: 0,
    discount_on: false,
    img_link: '~/assets/imgs/sample.jpg',
  },
  {
    id: 6,
    category: 'dress',
    name: 'the tent dress',
    price: 76000,
    discount_price: 0,
    discount_percent: 0,
    discount_on: false,
    img_link: '~/assets/imgs/sample.jpg',
  },
];
