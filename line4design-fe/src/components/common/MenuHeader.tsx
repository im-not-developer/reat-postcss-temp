import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';

import TransLang from '~/components/common/TransLang';

const MenuHeader: FC = () => {
  const history = useHistory();

  return (
    <div className="menu_header">
      <div className="menu_header__contents">
        <ul className="menu_header__contents__down__menu">
          <li>
            <div>
              <button
                onClick={() => {
                  history.push('/');
                }}>
                <TransLang text={'menu_header.home'} />
              </button>
            </div>
          </li>
          <li>
            <div>
              <button
                onClick={() => {
                  history.push('/about');
                }}>
                <TransLang text={'menu_header.about'} />
              </button>
            </div>
          </li>
          <li>
            <div>
              <button
                onClick={() => {
                  history.push('/shop');
                }}>
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
  );
};
export default MenuHeader;
