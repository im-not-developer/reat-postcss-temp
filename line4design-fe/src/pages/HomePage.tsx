import React, { FC } from 'react';

import CardsSection from '~/components/ProductCardsSection';

// interface HomePagePropsType {}
// const HomePageDefaultProps: HomePagePropsType = {};

const HomePage: FC = () => (
  <div className="home_pg">
    <div className="home_pg__contents">
      <CardsSection title="NEW" />
      <CardsSection title="BEST" />
      {/* <CardsSection title="SALE" /> */}
    </div>
  </div>
);

// HomePage.defaultProps = HomePageDefaultProps;
export default HomePage;
