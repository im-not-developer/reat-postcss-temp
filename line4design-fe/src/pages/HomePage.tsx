/** @format */

import React from 'react';
import ByeComponent from '~/components/ByeComponent';
import HelloComponent from '~/components/HelloComponent';
import CardsSection from '~/components/ProductCardsSection';
const HomePage: React.FC = () => (
  <div className="home_pg">
    <div className="home_pg__contents">
      <CardsSection title="NEW" />
      <HelloComponent />
      <ByeComponent />
    </div>
  </div>
);

export default HomePage;
