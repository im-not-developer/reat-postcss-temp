import React, {FC} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Footer from '~/components/common/Footer';
import Header from '~/components/common/Header';
import TopBar from '~/components/common/TopBar';
import MenuHeader from '~/components/common/MenuHeader';
import AboutPage from '~/pages/AboutPage';
import HomePage from '~/pages/HomePage';
import ShopPage from '~/pages/ShopPage';
import NotFoundPage from '~/routes/NotFound/NotFoundPage';
import {setColorTheme} from '~/utils/setColorTheme';

setColorTheme('light');
const Line4Design: FC = () => {
  return (
    <div className="line4design-pg ">
      <BrowserRouter>
        <TopBar />
        <div className="line4Design-pg__container">
          <Header />
          <MenuHeader />
          <div>
            <Switch>
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/about" exact={true} component={AboutPage} />
              <Route path="/shop" exact={true} component={ShopPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Line4Design;
