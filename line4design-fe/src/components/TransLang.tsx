/** @format */
import classNames from 'classnames';
import React, { useContext } from 'react';
import { LocaleContext } from '~/providers/LocaleProvider';

export interface PropsType {
  text?: string;
  className?: string;
}

const TransLang = (props: PropsType) => {
  const { viewTransLang } = useContext(LocaleContext);
  const { text = '', className = 'translang_container' } = props;

  console.log(props);
  // console.log('key : ', text);

  return (
    <div className={classNames(`${className}`)}>
      {viewTransLang(text ?? '')}
    </div>
  );
};

export default TransLang;
