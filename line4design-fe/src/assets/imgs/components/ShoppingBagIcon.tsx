import React, {FC} from 'react';

interface ShoppingBagIconType {
  stockColor?: string;
  width?: string;
  height?: string;
}
export const ShoppingBagIcon: FC<ShoppingBagIconType> = ({
  stockColor = '#121212',
  width = '15px',
  height = '12px',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11H16ZM5 9H19L20 21H4L5 9Z"
        stroke={stockColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
