/** @format */

import React from 'react';
import TransLang from '~/components/TransLang';
interface Props {}

const MenuHeader = (props: Props) => {
  // const {} =
  // const handleRouterMove = () => {
  //   return '';
  // };

  return (
    <div className="menu_header">
      <div className="menu_header__contents">
        <div className="menu_header__contents__up">브랜드 사진</div>
        <div className="menu_header__contents__down">
          <ul className="menu_header__contents__down__menu">
            <li>
              <div>
                <button
                // onClick={() => {
                //   handleRouterMove;
                // }}
                >
                  <TransLang text={'menu_header.home'} />
                </button>
              </div>
            </li>
            <li>
              <div>
                <button>
                  <TransLang text={'menu_header.about'} />
                </button>
              </div>
            </li>
            <li>
              <div>
                <button>
                  <TransLang text={'menu_header.shop'} />
                </button>
              </div>
            </li>
            <li>
              <div>
                <button>
                  <TransLang text={'menu_header.special'} />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
