import React, { FunctionComponent, HTMLAttributes } from 'react';

export type TextProps = HTMLAttributes<HTMLParagraphElement>;
const Text: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <p {...props}>{children}</p>
);

export default Text;
