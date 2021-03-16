/** @format */

import React, { useContext } from 'react';
import { LocaleContext } from '~/providers/LocaleContext';
const Header = () => {
  const [lang, setLang] = useContext(LocaleContext);
  const nextLocale = lang === 'en' ? 'ko' : 'en';
  return (
    <div className="header_container">
      <div className="header_container__contents">
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

      <button onClick={() => setLang(nextLocale)}>
        Change language to {nextLocale}
      </button>
    </div>
  );
};

export default Header;