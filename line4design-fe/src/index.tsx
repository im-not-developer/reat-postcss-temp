import React from 'react';
import ReactDOM from 'react-dom';

import AppPresenter from './AppPresenter';
import './assets/css/index.css';
import './locales/i18n';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppPresenter />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
