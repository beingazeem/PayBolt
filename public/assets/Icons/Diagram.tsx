


import * as React from 'react';
import { IconProps } from '../../../interface/IconProps';

export const DiagramIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="96" 
        height="96" 
        fill="none" 
        viewBox="0 0 96 96" 
        id="ethereum-diagram"
        {...props}
        ref={forwardedRef}
        >
  <path fill="url(#paint0_linear_531_29031)" fill-rule="evenodd" d="M4.84624 32.5369L16.4823 39.5775C16.8005 39.7701 17.1994 39.7701 17.5176 39.5775L29.1537 32.5369C29.6225 32.2532 29.7757 31.645 29.4972 31.173L17.8611 11.4595C17.4742 10.8039 16.5257 10.8039 16.1388 11.4595L4.50274 31.173C4.22418 31.645 4.37736 32.2532 4.84624 32.5369ZM6.018 35.8488C8.71393 37.4581 13.4963 40.3253 16.4793 42.1865C16.8002 42.3868 17.2043 42.389 17.5279 42.1932L27.9445 35.8905C28.4084 35.6098 28.9247 36.1649 28.6113 36.6073L17.816 51.8484C17.4174 52.411 16.5825 52.411 16.1839 51.8484L5.35992 36.5669C5.04787 36.1263 5.55443 35.5721 6.018 35.8488ZM73.4999 18.5005C73.4999 15.1868 76.1862 12.5005 79.4999 12.5005C82.8137 12.5005 85.4999 15.1868 85.4999 18.5005V83.5005C85.4999 86.8142 82.8137 89.5005 79.4999 89.5005C76.1862 89.5005 73.4999 86.8142 73.4999 83.5005V18.5005ZM79.4999 17.5005C78.9477 17.5005 78.4999 17.9482 78.4999 18.5005V83.5005C78.4999 84.0528 78.9477 84.5005 79.4999 84.5005C80.0522 84.5005 80.4999 84.0528 80.4999 83.5005V18.5005C80.4999 17.9482 80.0522 17.5005 79.4999 17.5005ZM58.5 32.5005C55.1862 32.5005 52.5 35.1868 52.5 38.5005V83.5005C52.5 86.8142 55.1862 89.5005 58.5 89.5005C61.8137 89.5005 64.5 86.8142 64.5 83.5005V38.5005C64.5 35.1868 61.8137 32.5005 58.5 32.5005ZM57.5 38.5005C57.5 37.9482 57.9477 37.5005 58.5 37.5005C59.0522 37.5005 59.5 37.9482 59.5 38.5005V83.5005C59.5 84.0528 59.0522 84.5005 58.5 84.5005C57.9477 84.5005 57.5 84.0528 57.5 83.5005V38.5005ZM31.5 55.5005C31.5 52.1868 34.1862 49.5005 37.5 49.5005C40.8137 49.5005 43.5 52.1868 43.5 55.5005V83.5005C43.5 86.8142 40.8137 89.5005 37.5 89.5005C34.1862 89.5005 31.5 86.8142 31.5 83.5005V55.5005ZM37.5 54.5005C36.9477 54.5005 36.5 54.9482 36.5 55.5005V83.5005C36.5 84.0528 36.9477 84.5005 37.5 84.5005C38.0522 84.5005 38.5 84.0528 38.5 83.5005V55.5005C38.5 54.9482 38.0522 54.5005 37.5 54.5005ZM10.4999 69.5005C10.4999 66.1868 13.1862 63.5005 16.4999 63.5005C19.8137 63.5005 22.5 66.1868 22.5 69.5005V83.5005C22.5 86.8142 19.8137 89.5005 16.4999 89.5005C13.1862 89.5005 10.4999 86.8142 10.4999 83.5005V69.5005ZM16.4999 68.5005C15.9477 68.5005 15.4999 68.9482 15.4999 69.5005V83.5005C15.4999 84.0528 15.9477 84.5005 16.4999 84.5005C17.0522 84.5005 17.4999 84.0528 17.4999 83.5005V69.5005C17.4999 68.9482 17.0522 68.5005 16.4999 68.5005Z" clip-rule="evenodd"/>
  <defs>
    <linearGradient id="paint0_linear_531_29031" x1="44.932" x2="44.932" y1="10.968" y2="89.501" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8000FF"/>
      <stop offset="1" stop-color="#33009F"/>
    </linearGradient>
  </defs>
</svg>

    );
  }
);

export default DiagramIcon;



