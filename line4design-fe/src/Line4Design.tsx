/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '~/components/commons/Footer';
import Header from '~/components/commons/Header';
import MenuHeader from '~/components/commons/MenuHeader';
import AboutPage from '~/pages/AboutPage';
import HomePage from '~/pages/HomePage';
import ShopPage from '~/pages/ShopPage';
import NotFoundPage from '~/routes/NotFound/NotFoundPage';

interface Props {}

const Line4Design: React.FC = (props: Props) => {
  return (
    <div className="line4Design_pg">
      <BrowserRouter>
        <Header />
        <MenuHeader />
        <div className="line4Design_pg__pages">
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/about" exact={true} component={AboutPage} />
            <Route path="/shop" exact={true} component={ShopPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Line4Design;
