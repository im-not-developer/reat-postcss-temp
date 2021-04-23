import React, {FC} from 'react';

import TransLang from '~/components/common/TransLang';

const Header: FC = () => {
  return (
    <div className="header">
      <ul className="list-disc space-y-2">
        <li className="flex items-start">
          <button>
            <TransLang text={'header.category'} />
          </button>
        </li>
        <li className="flex items-start">
          <button>
            <TransLang text={'header.brand'} />
          </button>
        </li>
      </ul>

      <div>
        <div>
          <input className="input" value="input" placeholder="검색" />
          <div>
            <button>
              <TransLang text={'header.search'} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <ul className="list-disc space-y-2">
          <li className="flex items-start">
            <button>
              <TransLang text={'header.login'} />
            </button>
          </li>
          <li className="flex items-start">
            <button>
              <TransLang text={'header.signin'} />
            </button>
          </li>
          <li className="flex items-start">
            <button>
              <TransLang text={'header.service_center'} />
            </button>
          </li>
          <li className="flex items-start">
            <button>
              <TransLang text={'header.basket'} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
