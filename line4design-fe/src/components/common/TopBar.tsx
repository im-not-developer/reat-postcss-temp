import React, {FC, useContext, useState, useMemo} from 'react';

import {shortLanguage, longLanguage} from '~/api/config';
import {EmailIcon} from '~/assets/imgs/components/EmailIcon';
import {GlobeIcon} from '~/assets/imgs/components/GlobeIcon';
import {languageFullName} from '~/locales/i18n';
import {LocaleContext} from '~/providers/LocaleProvider';

const TopBar: FC = () => {
  const [view, setView] = useState(false);
  const {handleChangeLanguage, locale} = useContext(LocaleContext);

  const viewLocal = useMemo(() => {
    const langObj = (languageFullName ?? []).filter(
      (l) => Object.values(l)[0] === locale,
    );
    return Object.keys(langObj[0])[0] ?? longLanguage();
  }, [locale]);

  return (
    <div className="topbar_pg">
      <div className="topbar_pg__container">
        <div className="topbar_pg__container__contact">
          <EmailIcon />
          <span className="body_text">dev.luyoes20@gmail.com</span>
        </div>
        <div className="topbar_pg__container__language">
          <div className="topbar_pg__container__language__viewlang mouse_over">
            <GlobeIcon width={'27px'} height={'27px'} stockColor="#ffffff" />
            <div
              className="body_bold"
              onClick={() => {
                setView(!view);
              }}>
              {viewLocal?.toUpperCase() ?? longLanguage()}
            </div>
          </div>

          {view && (
            <ul className="topbar_pg__container__language__select">
              {(languageFullName ?? []).map((l, idx) => {
                const langKey = Object.keys(l)[0];
                const langValue = Object.values(l)[0];
                return (
                  <li
                    className="topbar_pg__container__language__select--row"
                    key={idx}
                    onClick={() => {
                      handleChangeLanguage(langValue ?? shortLanguage());
                      setView(false);
                    }}>
                    <div className="body_bold mouse_over">
                      {langKey?.toUpperCase() ?? longLanguage()}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
