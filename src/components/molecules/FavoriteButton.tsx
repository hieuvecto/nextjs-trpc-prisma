import React, { FunctionComponent, HTMLAttributes } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

export type FavoriteButtonProps = HTMLAttributes<HTMLButtonElement> & {
  isActived?: boolean | null;
};
const FavoriteButton: FunctionComponent<FavoriteButtonProps> = ({
  isActived = false,
  ...props
}) => (
  <Button
    className="w-8 h-8 bg-white bg-opacity-35 backdrop-blur-sm p-1 rounded-full shadow-md"
    {...props}
  >
    {isActived && <Icon className="fas fa-heart text-red-500" />}
    {!isActived && <Icon className="far fa-heart text-white" />}
  </Button>
);

export default FavoriteButton;
