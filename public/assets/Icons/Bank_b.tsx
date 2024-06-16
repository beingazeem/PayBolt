
import * as React from 'react';
import { IconProps } from '../../../interface/IconProps';

export const BankB_Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="2500" height="2500" 
      viewBox="0 0 192.756 192.756" 
      id="bank"
      {...props}
      ref={forwardedRef}
      >
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path fill="#68003d" d="M0 0h192.756v192.756H0V0z"/>
        <path fill="#fff" d="M148.49 145.931H46.777l-1.876-8.729c14.368 7.641 25.306-.691 25.551-.553 15.672 9.23 26.937-.174 27.181-.035 15.676 9.258 27.512-.162 27.758-.039 11.1 6.269 20.16 3.339 24.652 1.092l-1.553 8.264zM88.491 42.984l-2.203-6.449h8.487l-6.284 6.449zM52.41 57.646l-5.142-11.192s-1.553 1.453-.981 2.71c.572 1.266.655 4.13.816 6.465.246 2.312-1.143 2.222.165 3.478 0 0 14.122 24.007 14.529 21.788.491-2.874 3.185-8.106 4.247-9.453L52.41 57.646zm58.447-9.749c.736 2.108.572 2.45-.488 4.123-.98 1.657-3.102 3.83-.736 7.412 1.145 1.779 1.062 3.813.246 4.85-3.592 4.57.246 5.885 0 5.551 0 0 4.816-6.041 1.877-16.711l12.652-9.265s-2.938-4.114-3.426-8.106l-10.125 12.146zm15.676-26.016c-4.898 15.404 1.551 19.03 1.551 19.03l24.406-18.017c-5.305 10.809-4.082 19.354-.652 27.198-6.693 6-7.346 15.879-2.367 21.943-4.326 0-16 6.85-17.797 19.967-10.203-1.543-22.857 6.246-12.652 17.045-2.611 3.805.408 8.784 5.307 4.744.652 5.044 6.203 6.039 7.836.849 1.797 2.595 7.348 2.277 8.979-2.809.982-3.004.41-4.382-.57-5.332-1.959-1.835-5.061.133-5.061.133l1.875 3.623-16.814-1.925 7.02-15.193 2.123 3.584c9.061-5.199 17.307-3.191 21.061.049 6.369 5.503 6.449 15.2 1.389 23.086-4 6.246-6.123 9.323-6.123 9.323 3.43-1.298 6.775-3.471 6.857-3.405l-1.551 6.726c-3.756 2.058-13.631 7.266-26.041-.071-.246-.132-12.082 9.271-27.754.039-.246-.129-11.51 9.232-27.184 0-.244-.155-9.305 7.11-26.204.059 0 0-1.55-6.686-1.55-6.653 15.427 9.601 27.427.465 27.592.604 5.551 3.265 10.53 4.211 14.693 4.049l5.225-.775c4.57-1.21 7.264-3.371 7.346-3.29 15.674 9.233 27.51-.172 27.674-.049 4.488 2.497 9.875 3.614 12.979 3.46 3.51-2.849 7.102-8.514 9.879-13.174 3.346-5.723 3.672-13.372-1.553-17.128-5.387-3.869-13.061-.824-17.307 2.45l-.898-1.708-2.121 5.267 5.387.775-.898-1.649s5.963-4.008 9.879-2.962c1.797.505 7.512 2.522 4.816 10.531-3.02 8.881-11.998 7.876-11.998 7.867-5.961 6.997-10.777.965-10.857-.204-11.838.735-8.654-10.751-8.49-10.603-9.797-11.854 1.795-21.943 11.264-21.404l-3.184-5.683 6.203 2.124s4.408-9.413 10.205-12.442l-5.959-4.734 9.305.391s-2.367-7.231 1.799-14.081l-6.369.287 7.428-5.689s-2.857-6.76-1.469-11.184l-25.387 18.447 7.754 1.02-7.346 3.381-.082 2.138 9.469 3.936-10.365.104-3.02 6.743 4.977 7.518-7.428-3.469-12.572 8.891 4.328 13.87-10.939-14.94 12.898-8.816s1.305-.826.572-2.057c.244.349-6.613-4.253-1.635-10.417.982-1.264.082-3.289-.406-3.982-2.287-3.6-.49-5.781.488-7.462 1.062-1.673 1.062-2.318-.082-4.105-2.285-3.494-.57-4.195-.08-5.592 1.143-3.272-2.939-3.576-2.939-3.576-1.715-.294-2.611-1.305-2.205-3.371 1.062-4.718 1.959-6.504 1.959-6.504l-1.717-.027-3.753 5.567-12.084.09-3.02 3.771-12.246.088-.081 1.553 1.388 1.918 11.264-2.597s3.43-1.534 3.675 1.054c0 0 2.203 6.562 2.612 8.105.407 1.543.572 3.95-3.675 3.568L75.919 51s-2.203-.872-2.693.662l-.327 2.219.653.1s1.224-1.355 3.021-1.437c0 0 8.571.782 11.999.678 3.184-.1 3.594 3.852 1.552 4.717-4.082 1.731-18.613 12.627-19.756 17.55l14.938-9.737-10.12 13.118-27.347 16.489s-.164 3.068-1.634 3.453l.327 4.253 1.469-1.044 8.001-2.857 28-9.976 6.365 14.18-7.347-7.323-14.448 4.547c-.246 2.712.245 3.045 2.693 3.51 2.696.491 2.857 1.037 2.612 3.585-.162 2.719.245 3.052 2.777 3.51 2.612.498 2.857 1.044 2.612 3.601-.245 2.71.246 3.036 2.694 3.511 2.693.488 2.938.962 2.693 3.559-.246 2.716.245 3.036 2.693 3.501 2.612.481 3.265 1.757 2.776 4.311l-5.222.83c0-1.756-.081-1.862-2.777-2.344-2.448-.465-2.939-.784-2.693-3.517.246-2.573 0-3.062-2.613-3.543-2.529-.458-3.02-.81-2.774-3.52.245-2.564.081-3.101-2.612-3.575-2.532-.466-2.939-.824-2.694-3.526.162-2.548 0-3.11-2.693-3.584-2.45-.466-2.938-.799-2.693-3.511 0 0 .326-1.166-.981-.759-.572.164-3.265 1.046-5.797 1.879-3.836 1.305-8.571 2.864-8.571 2.864l-8.571 7.722v-13.044s0-.791 1.225 2.048c.816 1.772 2.124 0 2.124-1.469.081-1.486-.735-4.563-3.184-5.6v-5.674c0-.759.897.923 1.305 2.001.491 1.092 2.286 1.428 2.612-.655.246-2.023-.245-3.427-1.305-5.239-.817-1.314-1.47-1.485-5.226-.981l6.776-4.367 4.569 6.572 8.409-4.841S46.124 65.078 44.49 62.763c-1.712-2.319-3.265-1.676-4.734.774V51.956s-.327-.058 1.469 2.571c1.715 2.645 2.122-.514 2.122-1.282.083-.775-.569-3.601-3.837-5.526v-8.425s.083 1.65 1.634 3.992c1.795 2.712 3.265-.652 2.938-3.355-.325-2.351-1.143-5.264-6.448-4.098l7.266-4.44 10.285 21.976 14.042 14.016c.507.503 7.509-6.733 11.917-9.769 0 0 .979-.262-2.857-.508-3.837-.254-4.896 2.18-5.877 2l-3.999-.717 1.224-9.714s-.081.072-1.469.652c-6.694 2.865-8.735-1.585-10.367-4.301l-2.286 1.224.245-7.534 6.611 3.804-2.203 1.143s2.448 5.484 6.366 3.86c4.653-1.909 7.673-3.281 12.165 0h3.672l-1.225-4.832-13.224 3.305-2.774-4.272-1.47-.382 1.06-7.314h13.961l3.265-4.637h10.776l3.836-5.593h11.184l-2.367 8.58c-.49 2.041.326 3.11 2.121 3.397 0 0 3.998.285 2.857 3.549-.244.826-.898 1.356-.98 2.393l17.144-19.838zm21.059 128.154l-4.652 20.84H52.248l-4.491-20.84h99.835z"/>
      </g>
    </svg>
    );
  }
);
export default BankB_Icon;

