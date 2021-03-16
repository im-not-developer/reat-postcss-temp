/** @format */
import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import AppPresenter from './AppPresenter';
import './index.css';
import reportWebVitals from './reportWebVitals';

addLocaleData([...en, ...customLocaleData]);

ReactDOM.render(
  <React.StrictMode>
    <AppPresenter />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
