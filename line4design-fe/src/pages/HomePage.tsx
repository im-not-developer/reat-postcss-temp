/** @format */

import React from 'react';

import HelloComponent from '../components/HelloComponent';

const HomePage: React.FC = () => (
  <div className="Home_pg">
    <div>Mainpage Component!</div>
    <div>
      <HelloComponent />
    </div>
  </div>
);

export default HomePage;
