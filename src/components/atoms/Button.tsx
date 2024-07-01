import React, { FunctionComponent, HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;
const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
