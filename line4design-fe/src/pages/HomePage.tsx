/** @format */

import React from 'react';
import CardsSection from '~/components/ProductCardsSection';
const HomePage: React.FC = () => (
  <div className="home_pg">
    <div className="home_pg__contents">
      <CardsSection title="NEW" />
      <CardsSection title="BEST" />
      {/* <CardsSection title="SALE" /> */}
    </div>
  </div>
);

export default HomePage;
