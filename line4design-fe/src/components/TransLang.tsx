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

const TransLang: React.FC<PropsType> = props => {
  const { viewTransLang } = useContext(LocaleContext);
  console.log(props);
  return (
    <div className={classNames(`${props.className}`)}>
      {viewTransLang(props.text ?? '')}
    </div>
  );
};

TransLang.defaultProps = defaultProps;

export default TransLang;
