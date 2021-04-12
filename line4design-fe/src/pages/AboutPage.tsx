/** @format */

import React, { FC } from 'react';


const AboutPage: FC = () => {
  return (
    <div className="about_page">
      <div className="about_page__contents">
        <div className="about_page__contents__left">
          {/* <img src={require('~/assets/imgs/about_sample.jpeg').default}></img> */}
        </div>
        <div className="about_page__contents__right">
          마크 제이콥스는 개성 넘치는 디자이너의 위트를 기반으로 클래식함과
          유니크함이 공존하는 브랜드입니다. 매 시즌 럭셔리하면서도 컨템포러리한
          감각이 돋보이는 컬렉션을 꾸준히 선보이고 있으며,특히 트렌드를 선도하는
          브랜드의 아이코닉한 백은 많은 사랑을 받고 있습니다.
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
