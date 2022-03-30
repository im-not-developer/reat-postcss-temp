import React, {FC, useContext} from 'react';
import Header from '~/components/common/Header';
import {LocaleContext} from './contexts/LocaleContext';
import {languages} from '~/locales/i18n';

const App: FC = () => {
  const {handleChangeLanguage} = useContext(LocaleContext);
  return (
    <div className="app_page">
      <div className="app_page__container">
        <Header />

        <div className="app_page__container__languages">
          <div className="languages_text">languages :</div>
          {(languages ?? []).map((lang) => {
            return (
              <div
                key={lang}
                className={'app_page__container__languages__lang'}
                onClick={() => handleChangeLanguage(lang)}>
                {lang}
              </div>
            );
          })}
        </div>
        <div>
          <div className="headline_1">headline_1</div>
          <div className="headline_2">headline_2</div>
          <div className="headline_3">headline_3</div>
          <div className="headline_4">headline_4</div>
          <div className="headline_5">headline_5</div>
          <div className="headline_6">headline_6</div>
          <div className="display">display</div>
          <div className="point">point</div>
          <div className="title">title</div>
          <div className="title_medium">title_medium</div>
          <div className="title_one_line">title_one_line</div>
          <div className="title_bold">title_bold</div>
          <div className="sub_title_bold">sub_title_bold</div>
          <div className="sub_title">sub_title</div>
          <div className="sub_title_medium">sub_title_medium</div>
          <div className="sub_title_one_line">sub_title_one_line</div>
          <div className="body_bold">body_bold</div>
          <div className="body_bold">body</div>
          <div className="body_bold">point_sub_bold</div>
        </div>
      </div>
    </div>
  );
};

export default App;
