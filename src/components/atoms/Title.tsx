import React, { FunctionComponent, Fragment, HTMLAttributes } from 'react';

export type TitleTypeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TitleProps = HTMLAttributes<HTMLElement> & { type?: TitleTypeType };

const Title: FunctionComponent<TitleProps> = ({
  children,
  type = 'h2',
  ...props
}) => {
  return (
    <Fragment>
      {type === 'h1' && <h1 {...props}>{children}</h1>}
      {type === 'h2' && <h2 {...props}>{children}</h2>}
      {type === 'h3' && <h3 {...props}>{children}</h3>}
      {type === 'h4' && <h3 {...props}>{children}</h3>}
      {type === 'h5' && <h3 {...props}>{children}</h3>}
      {type === 'h6' && <h3 {...props}>{children}</h3>}
    </Fragment>
  );
};

export default Title;
