/** @format */

import React from 'react';
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import RoutePresenter from './routes/RoutePresenter';
interface Props {}

const Line4Design = (props: Props) => {
  return (
    <div className="line4Design_pg">
      <Header />
      <RoutePresenter />
      <Footer />
    </div>
  );
};

export default Line4Design;
