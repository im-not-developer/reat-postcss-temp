/** @format */

import React from 'react';

import SideMenuBar from '~/components/SideMenuBar';

interface Props {}

const ShopPage = (props: Props) => {
  return (
    <div className="shop_page">
      <div className="shop_page__content">
        <SideMenuBar />
      </div>
    </div>
  );
};

export default ShopPage;
