/** @format */

import React, { FC } from 'react';

import SideMenuBar from '~/components/SideMenuBar';

interface ShopPagePropsType {}

const ShopPageDefaultProps: ShopPagePropsType = {};
const ShopPage: FC<ShopPagePropsType> = props => {
  return (
    <div className="shop_page">
      <div className="shop_page__content">
        <SideMenuBar />
      </div>
    </div>
  );
};

ShopPage.defaultProps = ShopPageDefaultProps;

export default ShopPage;
