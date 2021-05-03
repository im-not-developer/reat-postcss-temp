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
          <div className="footer__container__header">Contact</div>
          <div className="footer__container__body">
            <div>
              <LineMailIcon /> <div>line4design@gmail.com</div>
            </div>
            <div>
              <LocationMarkerIcon /> <div>Seoul, R.Korea</div>
            </div>
            <div>
              <PhoneIcon />
              <div>02.0202.0202</div>
            </div>
            <div>
              <ClockIcon /> <div>am 10:00 ~ pm 06:00</div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default Footer;
