/** @format */

import React from 'react';
import ByeComponent from '~/components/ByeComponent';
import HelloComponent from '~/components/HelloComponent';

const HomePage: React.FC = () => (
  <div className="Home_pg">
    <div>Mainpage Component!</div>
    <div>
      <HelloComponent />
      <ByeComponent />
    </div>
  </div>
);

export default HomePage;
