import Image from 'next/image';
import React, { FC } from 'react';
import PageMarginWithTitle from './PageMarginWithTitle';
import Grid from './Grid';
import classNames from 'classnames';

const ImageWithCaption: FC<{
  src: string;
  width: number;
  height: number;
  className?: string;
  fullWidth?: boolean;
  title: string;
}> = ({ height, src, title, width, fullWidth, className }) => {
  const titleBlock = (
    <span className='text-body-caption-mob md:text-body-caption font-light mt-2 block'>
      {title}
    </span>
  );
  return (
    <div className={classNames('flex flex-col', className)}>
      <Image alt='' width={width} height={height} src={src} />
      {fullWidth ? (
        <PageMarginWithTitle>
          <Grid>
            <div className='col-span-2 md:col-span-12'>{titleBlock}</div>
          </Grid>
        </PageMarginWithTitle>
      ) : (
        titleBlock
      )}
    </div>
  );
};

export default ImageWithCaption;
