/** @format */

import React, { useContext } from 'react';
import { LocaleContext } from '~/providers/LocaleProvider';

const Header = () => {
  const { handleChangeLanguage, viewTransLang } = useContext(LocaleContext);

  return (
    <div className="header_container">
      <div className="header_container__contents">
        {/* test */}
        <div>
          <button
            onClick={() => {
              handleChangeLanguage('ko');
            }}>
            ko
          </button>
          <button
            onClick={() => {
              handleChangeLanguage('en');
            }}>
            en
          </button>

          {viewTransLang('header.category')}
        </div>
        {/* test-end */}
        <div>
          <div>LOGO</div>
          <div>
            <span>CATEGORY</span>
            <span>BRAND</span>
          </div>
        </div>

        <div>
          <input value="input" placeholder="검색" />
          <div>
            <button> search </button>
          </div>
        </div>

        <div>
          <span>
            <button>LOGIN</button>
          </span>
          <span>
            <button>SIGN IN</button>
          </span>
          <span>
            <button>CONTECT</button>
          </span>
          <span>
            <button>BASKET</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
