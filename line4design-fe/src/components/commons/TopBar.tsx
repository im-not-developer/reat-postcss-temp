import React, {FC, useContext} from 'react';
import tw from 'tailwind-styled-components';

import {languages} from '~/locales/i18n';
import {LocaleContext} from '~/providers/LocaleProvider';

const TopBarDiv = tw.div`
  flex
  flex-col
  items-end
  w-full
  h-24px;
  bg-gray-800

`;

const Container = tw.div`
  w-1280px
  px-20px
`;

const TopBar: FC = () => {
  const {handleChangeLanguage, locale} = useContext(LocaleContext);

  return (
    <TopBarDiv>
      <Container>
        <div>{locale?.toUpperCase()}</div>
        <ul>
          {languages.map((l, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  handleChangeLanguage(l);
                }}>
                {l.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </Container>
    </TopBarDiv>
  );
};

export default TopBar;
