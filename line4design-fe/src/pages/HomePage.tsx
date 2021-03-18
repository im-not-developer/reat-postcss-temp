/** @format */

import React from 'react';
import ByeComponent from '~/components/ByeComponent';
import HelloComponent from '~/components/HelloComponent';

const HomePage: React.FC = () => (
  <div className="home_pg">
    <div className="home_pg__contents">
      <HelloComponent />
      <ByeComponent />
    </div>
  </div>
);

export default HomePage;
