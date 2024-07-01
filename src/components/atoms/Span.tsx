import React, { FunctionComponent, HTMLAttributes } from 'react';

export type SpanProps = HTMLAttributes<HTMLSpanElement>;
const Span: FunctionComponent<SpanProps> = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);

export default Span;
