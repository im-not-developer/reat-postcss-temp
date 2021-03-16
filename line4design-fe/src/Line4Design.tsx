/** @format */

import React from 'react';
import Header from './components/commons/Header';
import RoutePresenter from './routes/RoutePresenter';

interface Props {}

const Line4Design = (props: Props) => {
  return (
    <div className="line4Design_pg">
      <Header />
      <RoutePresenter />
    </div>
  );
};

export default Line4Design;
