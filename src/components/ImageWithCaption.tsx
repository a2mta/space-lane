import Image from 'next/image';
import React, { FC } from 'react';

const ImageWithCaption: FC<{
  src: string;
  width: number;
  height: number;
  title: string;
}> = ({ height, src, title, width }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <Image alt='' width={width} height={height} src={src} />
      <span className='text-body-caption mt-2 block'>{title}</span>
    </div>
  );
};

export default ImageWithCaption;
