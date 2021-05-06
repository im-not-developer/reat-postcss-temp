import React, {FC} from 'react';

import MainBanner from '~/components/MainBanner';

const HomePage: FC = () => (
  <div className="home_pg">
    <div className="home_pg__container">
      <MainBanner />
    </div>
  </div>
);

export default HomePage;
