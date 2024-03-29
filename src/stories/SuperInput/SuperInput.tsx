import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import '../button.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type UncontrolledInputPropsType = DefaultInputPropsType & {
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: 'small' | 'medium' | 'large';
  // /**
  //  * Button contents
  //  */
  // label: string;
  // /**
  //  * Optional click handler
  //  */
  // onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SuperInput = ({...props}: UncontrolledInputPropsType) => {

  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <input
        {...props}
      // type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={{ backgroundColor }}
      // {...props}
    />
  );
};
