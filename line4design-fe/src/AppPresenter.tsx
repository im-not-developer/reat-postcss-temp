/** @format */

import React from 'react';

import RoutePresenter from './routes/RoutePresenter';
import GlobalStyle from './styles/GlobalStyles';

const AppPresenter: React.FC = () => (
  <>
    <GlobalStyle />
    <RoutePresenter />
  </>
);

export default AppPresenter;
