import React, { FunctionComponent, HTMLAttributes } from 'react';

export type IconProps = HTMLAttributes<HTMLElement>;
const Icon: FunctionComponent<IconProps> = ({ ...props }) => <i {...props} />;

export default Icon;
