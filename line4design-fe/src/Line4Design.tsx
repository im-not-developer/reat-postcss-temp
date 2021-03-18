/** @format */

import React from 'react';
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import MenuHeader from './components/commons/MenuHeader';
import RoutePresenter from './routes/RoutePresenter';
interface Props {}

const Line4Design = (props: Props) => {
  return (
    <div className="line4Design_pg">
      <Header />
      <MenuHeader />
      <div className="line4Design_pg__pages">
        <RoutePresenter />
      </div>

      <Footer />
    </div>
  );
};

export default Line4Design;
