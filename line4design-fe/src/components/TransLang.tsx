/** @format */
import classNames from 'classnames';
import React, { useContext } from 'react';

import { LocaleContext } from '~/providers/LocaleProvider';

export interface TransLangPropsTypes {
  text?: string;
  className?: string;
}

// const TransLangDefaultProps: TransLangPropsTypes = {
//   text: '',
//   className: 'translang_container',
// };
type Props = TransLangPropsTypes

const TransLang: React.FC<Props> = ({className='', text=''}) => {
  const { viewTransLang } = useContext(LocaleContext);
  return (
    <div className={classNames(`${className}`)}>
      {viewTransLang(text ?? '')}
    </div>
  );
};

// TransLang.defaultProps = TransLangDefaultProps;

export default TransLang;
