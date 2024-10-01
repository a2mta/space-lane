import Image from 'next/image';
import React, { FC } from 'react';
import PageMarginWithTitle from './PageMarginWithTitle';
import Grid from './Grid';

const ImageWithCaption: FC<{
  src: string;
  width: number;
  height: number;
  fullWidth?: boolean;
  title: string;
}> = ({ height, src, title, width, fullWidth }) => {
  const titleBlock = (
    <span className='text-body-caption mt-2 block'>{title}</span>
  );
  return (
    <div className='flex flex-col space-y-2'>
      <Image alt='' width={width} height={height} src={src} />
      {fullWidth ? (
        <PageMarginWithTitle>
          <Grid>
            <div className='col-span-12'>{titleBlock}</div>
          </Grid>
        </PageMarginWithTitle>
      ) : (
        titleBlock
      )}
    </div>
  );
};

export default ImageWithCaption;
