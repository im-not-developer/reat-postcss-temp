/** @format */
import classNames from 'classnames';
import React, { useContext } from 'react';

import { LocaleContext } from '~/providers/LocaleProvider';

export interface TransLangPropsTypes {
  text?: string;
  className?: string;
}

const TransLangDefaultProps: TransLangPropsTypes = {
  text: '',
  className: 'translang_container',
};

const TransLang: React.FC<TransLangPropsTypes> = props => {
  const { viewTransLang } = useContext(LocaleContext);
  return (
    <div className={classNames(`${props.className}`)}>
      {viewTransLang(props.text ?? '')}
    </div>
  );
};

TransLang.defaultProps = TransLangDefaultProps;

export default TransLang;
