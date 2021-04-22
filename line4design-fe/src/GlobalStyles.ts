/** @format */

import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* Regular */
  @font-face {
    font-family: 'Spartan';
    font-weight: 400;
    font-style: normal;
    src: url(${require('./assets/fonts/Spartan-Regular.woff')}) format("woff"),
    url(${require('./assets/fonts/Spartan-Regular.woff2')}) format("woff2");
  }
  /* Medium */
  @font-face {
    font-family: 'Spartan';
    font-weight: 500;
    font-style: normal;
    src: url(${require('./assets/fonts/Spartan-Regular.woff')}) format("woff"),
     url(${require('./assets/fonts/Spartan-Regular.woff2')}) format("woff2");
  }
  /* SemiBold */
  @font-face {
    font-family: 'Spartan';
    font-weight: 600;
    font-style: normal;
    src: url(${require('./assets/fonts/Spartan-SemiBold.woff')}) format("woff")
    url(${require('./assets/fonts/Spartan-SemiBold.woff2')}) format("woff2");
  }
  /* Bold */
  @font-face {
    font-family: 'Spartan';
    font-weight: 700;
    font-style: normal;
    src: url(${require('./assets/fonts/Spartan-Bold.woff')}) format("woff")
    url(${require('./assets/fonts/Spartan-Bold.woff2')}) format("woff2");
  }

  ${reset};
  * {
      box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, sub, sup, tt, var,
  u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video , button, input,
  select, textarea {
    font-family: 'Spartan', 'NotoSans', 'Roboto', 'sans-serif';
    word-break: break-all;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
  input,
  button {
      &:focus,
      &:active{ outline: none }
  }
`;

export default GlobalStyle;
