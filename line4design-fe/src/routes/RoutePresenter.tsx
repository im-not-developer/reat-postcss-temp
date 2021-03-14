/** @format */
// import HomePage from '../pages/HomePage';
import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from './NotFound/NotFoundPage';

const RoutePresenter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default RoutePresenter;
