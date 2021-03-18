/** @format */

import React, { useContext } from 'react';
import TransLang from '~/components/TransLang';
import { LocaleContext } from '~/providers/LocaleProvider';
const Header = () => {
  const { handleChangeLanguage } = useContext(LocaleContext);

  return (
    <div className="header">
      <div className="header__contents">
        <div className="header__contents__left">
          <div className="header__contents__left__logo">LOGO</div>
          <ul className="header__contents__left__menu">
            <li className="header__contents__left__menu__btn">
              <button>
                <TransLang text={'header.category'} />
              </button>
            </li>
            <li className="header__contents__left__menu__btn">
              <button>
                <TransLang text={'header.brand'} />
              </button>
            </li>
          </ul>
        </div>

        <div className="header__contents__center">
          <div className="header__contents__center__search">
            <input
              className="header__contents__center__search__input"
              value="input"
              placeholder="검색"
            />
            <div className="header__contents__center__search__btn">
              <button>
                <TransLang text={'header.search'} />
              </button>
            </div>
          </div>
        </div>

        <div className="header__contents__right">
          <ul className="header__contents__right__menu">
            <li className="header__contents__right__menu__btn">
              <button>
                <TransLang text={'header.login'} />
              </button>
            </li>
            <li className="header__contents__right__menu__btn">
              <button>
                <TransLang text={'header.signin'} />
              </button>
            </li>
            <li className="header__contents__right__menu__btn">
              <button>
                <TransLang text={'header.service_center'} />
              </button>
            </li>
            <li className="header__contents__right__menu__btn">
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

{
  /* test */
}
{
  /* <div>
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
        </div> */
}
{
  /* test-end */
}
