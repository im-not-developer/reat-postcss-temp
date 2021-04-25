import React, {FC, ReactNode} from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

interface NoneLineButtonProps {
  className?: string;
  children?: ReactNode;
  fontSize?: string;
  onClick?(): void;
}

const WrapDiv = styled.div`
  display: block;
  margin: 0px 0px 0px 0px;
`;

const Button = styled.button<{fontSize?: string}>`
  border: none;
  background-color: transparent;
  .translang {
    font-size: ${(props) => props.fontSize};
  }
`;

const NoneLineButton: FC<NoneLineButtonProps> = ({
  className = '',
  children,
  fontSize = '18px',
  onClick,
}) => {
  return (
    <WrapDiv
      className={classnames({className})}
      onClick={() => {
        onClick?.();
      }}>
      <Button fontSize={fontSize}>{children}</Button>
    </WrapDiv>
  );
};

export default NoneLineButton;
