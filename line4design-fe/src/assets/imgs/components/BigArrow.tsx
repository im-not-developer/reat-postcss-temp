import React, {FC, useMemo} from 'react';

interface BigArrowProps {
  side?: string;
  width?: string;
  height?: string;
}

const BigArrow: FC<BigArrowProps> = ({
  side = 'left',
  width = '9px',
  height = '16px',
}) => {
  console.log();
  const widthNumber = useMemo(() => width.split('px')[0], [width]);
  const heightNumber = useMemo(() => height.split('px')[0], [height]);
  if (side.toLowerCase() === 'left') {
    // left arrow
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${widthNumber} ${heightNumber}`}
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
        width={width}
        height={height}
        viewBox={`0 0 ${widthNumber} ${heightNumber}`}
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
