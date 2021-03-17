/** @format */

import React, { useContext } from 'react';
import TransLang from '~/components/TransLang';
import { LocaleContext } from '~/providers/LocaleProvider';
const Header = () => {
  const { handleChangeLanguage } = useContext(LocaleContext);

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

          {/* {viewTransLang('header.category')} */}
        </div>
        {/* test-end */}
        <div>
          <div>LOGO</div>
          <div>
            <TransLang text={'header.category'} />
            <TransLang text={'header.brand'} />
          </div>
        </div>

        <div>
          <input value="input" placeholder="검색" />
          <div>
            <button>
              <TransLang text={'header.search'} />
            </button>
          </div>
        </div>

        <div>
          <ul>
            <li>
              <button>
                <TransLang text={'header.login'} />
              </button>
            </li>
            <li>
              <button>
                <TransLang text={'header.signin'} />
              </button>
            </li>
            <li>
              <button>
                <TransLang text={'header.service_center'} />
              </button>
            </li>
            <li>
              <button>
                <TransLang text={'header.basket'} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
