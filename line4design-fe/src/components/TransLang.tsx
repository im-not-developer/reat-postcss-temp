/** @format */
import classNames from 'classnames';
import React, { useContext } from 'react';

import { LocaleContext } from '~/providers/LocaleProvider';

export interface PropsType {
  text?: string;
  className?: string;
}

const defaultProps: PropsType = {
  text: '',
  className: 'translang_container',
};

const TransLang = (props = defaultProps) => {
  const { viewTransLang } = useContext(LocaleContext);

  return (
    <div className={classNames(`${props.className}`)}>
      {viewTransLang(props.text ?? '')}
    </div>
  );
};

export default TransLang;
