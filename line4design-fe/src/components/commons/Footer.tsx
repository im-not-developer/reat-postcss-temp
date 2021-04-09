/** @format */

import React from 'react';

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div>
        <div>
          left
          <div>LINE4DESIGN</div>
          <div>
            <div>라인포 디자인 / 서수이 / 서울시 용산구 신흥로</div>
            <div>개인정보관리 책임자 : 서수이</div>
            <div>대표메일주소: xxxxxx@xxxxx.com</div>
      <div>
              통신판매신고: 서울 용산 - xxxxxx / 사업자등록번호{' '}
              <span>
                <a href="#">사업자정보확인 x</a>
              </span>
            </div>
          </div>
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Footer;
