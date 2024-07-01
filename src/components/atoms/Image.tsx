import React, { FunctionComponent, ImgHTMLAttributes, useState } from 'react';
import NextImage from 'next/image';

export type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'width' | 'height'
>;

const fallbackImageUrl =
  'https://images.unsplash.com/34/rcaNUh3pQ9GD8w7Iy8qE__DSC0940.jpg?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Image: FunctionComponent<ImageProps> = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <NextImage
      src={src || fallbackImageUrl}
      alt={alt || ''}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
        objectFit: 'cover',
      }}
      onError={() => {
        setImgSrc(fallbackImageUrl);
      }}
      {...props}
    />
  );
};

export default Image;
