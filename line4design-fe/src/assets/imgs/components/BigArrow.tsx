import React, {FC} from 'react';

interface BigArrowProps {
  side?: string;
}

const BigArrow: FC<BigArrowProps> = ({side = 'left'}) => {
  if (side === 'left') {
    // left arrow
    return (
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 15L1 8L8 1"
          stroke="#121212"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    // right arrow
    return (
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L8 8L1 15"
          stroke="#121212"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};

export default BigArrow;
