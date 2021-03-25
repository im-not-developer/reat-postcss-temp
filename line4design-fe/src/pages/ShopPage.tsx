/** @format */

import React, { FC } from 'react';

import CardsSection from '~/components/ProductCardsSection';
import SideMenuBar from '~/components/SideMenuBar';

interface ShopPagePropsType {}

const ShopPageDefaultProps: ShopPagePropsType = {};
const ShopPage: FC<ShopPagePropsType> = props => {
  return (
    <div className="shop_page">
      <div className="shop_page__contents">
        <SideMenuBar />
        <div className="shop_page__contents__mall">
          <CardsSection title="NEW" />
          <CardsSection title="BEST" />
          <CardsSection title="강혜림" />
          <CardsSection title="BEST" />
          <CardsSection title="NEW" />
          <CardsSection title="BEST" />
          <CardsSection title="NEW" />
          <CardsSection title="BEST" />
        </div>
      </div>
    </div>
  );
};

ShopPage.defaultProps = ShopPageDefaultProps;

export default ShopPage;
