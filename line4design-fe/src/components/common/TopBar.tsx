import React, {FC, useContext, useState, useMemo} from 'react';

import {EmailIcon} from '~/assets/imgs/components/email_icon';
import {languageFullName} from '~/locales/i18n';
import {LocaleContext} from '~/providers/LocaleProvider';

const INIT_FULL_LANG = 'ENGLISH';
const INIT_SHORT_LANG = 'en';

const TopBar: FC = () => {
  const [view, setView] = useState(false);
  const {handleChangeLanguage, locale} = useContext(LocaleContext);

  const viewLocal = useMemo(() => {
    const langObj = (languageFullName ?? []).filter(
      (l) => Object.values(l)[0] === locale,
    );
    return Object.keys(langObj[0])[0] ?? INIT_FULL_LANG;
  }, [locale]);

  return (
    <div className="topbar_pg">
      <div className="topbar_pg__container">
        <div className="topbar_pg__container__contact">
          <EmailIcon />
          <span className="body_text">dev.luyoes20@gmail.com</span>
        </div>
        <div className="topbar_pg__container__language">
          <div
            className="body_bold mouse_over"
            onClick={() => {
              setView(!view);
            }}>
            {viewLocal?.toUpperCase() ?? INIT_FULL_LANG}
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
                      handleChangeLanguage(langValue ?? INIT_SHORT_LANG);
                      setView(false);
                    }}>
                    <div className="body_bold">
                      {langKey?.toUpperCase() ?? INIT_FULL_LANG}
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
