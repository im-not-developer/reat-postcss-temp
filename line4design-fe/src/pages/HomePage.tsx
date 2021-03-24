/** @format */

import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';

import CardsSection from '~/components/ProductCardsSection';

interface HomePagePropsType {}
const HomePageDefaultProps: HomePagePropsType = {};

const HomePage: FC<HomePagePropsType> = () => (
  <div className="home_pg">
    <div className="home_pg__contents">
      <CardsSection title="NEW" />
      <CardsSection title="BEST" />
      {/* <CardsSection title="SALE" /> */}
    </div>
  </div>
);

HomePage.defaultProps = HomePageDefaultProps;
export default withRouter(HomePage);
