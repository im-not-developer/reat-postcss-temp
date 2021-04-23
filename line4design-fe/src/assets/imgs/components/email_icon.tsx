import React,{FC} from 'react'

interface EmailIcon {
  color?: string;
  width?: string;
  height?: string;
}
export const EmailIcon:FC <EmailIcon>= ({color='#ffffff', width='15px', height='12px'}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 0H1.5C0.675 0 0.00749999 0.675 0.00749999 1.5L0 10.5C0 11.325 0.675 12 1.5 12H13.5C14.325 12 15 11.325 15 10.5V1.5C15 0.675 14.325 0 13.5 0ZM13.5 3L7.5 6.75L1.5 3V1.5L7.5 5.25L13.5 1.5V3Z" fill={color}/>
    </svg>
  )
}



