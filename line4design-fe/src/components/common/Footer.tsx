import React, {FC} from 'react';

import {
  ClockIcon,
  LocationMarkerIcon,
  PhoneIcon,
  LineMailIcon,
} from '~/assets/imgs/components';

const FooterBar: FC = () => {
  return (
    <div className="bottom_bar">
      <div className="bottom_bar__container">
        <div> Copyright © 2021 all rights reserved </div>
      </div>
    </div>
  );
};
const Footer: FC = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container__header title_l">Contact</div>
          <div className="footer__container__body">
            <div className="footer__container__body__section">
              <LineMailIcon />
              <div className="footer__container__body__section--text">
                line4design@gmail.com
              </div>
            </div>
            <div className="footer__container__body__section">
              <LocationMarkerIcon />
              <div className="footer__container__body__section--text">
                Seoul, R.Korea
              </div>
            </div>
            <div className="footer__container__body__section">
              <PhoneIcon />
              <div className="footer__container__body__section--text">
                02.0202.0202
              </div>
            </div>
            <div className="footer__container__body__section">
              <ClockIcon />
              <div className="footer__container__body__section--text">
                am 10:00 ~ pm 06:00
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default Footer;
