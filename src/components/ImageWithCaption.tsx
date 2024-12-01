import Image from 'next/image';
import React, { FC } from 'react';
import PageMarginWithTitle from './PageMarginWithTitle';
import Grid from './Grid';
import classNames from 'classnames';

const ImageWithCaption: FC<{
  src: string;
  width?: number;
  height?: number;
  className?: string;
  fullWidth?: boolean;
  autoHeight?: boolean;
  fill?: boolean;
  extraDescriptionMargin?: boolean;
  title: string;
}> = ({
  height,
  fill,
  src,
  autoHeight,
  title,
  extraDescriptionMargin,
  width,
  fullWidth,
  className,
}) => {
  const titleBlock = (
    <span className='text-body-caption-mob md:text-body-caption font-light mt-2 block'>
      {title}
    </span>
  );
  return (
    <div
      className={classNames(
        'flex flex-col md:h-auto',
        { 'h-full': !autoHeight },
        { relative: fill },
        className
      )}
    >
      <Image
        className='w-full'
        alt=''
        fill={fill}
        width={width}
        height={height}
        src={src}
      />
      {fullWidth ? (
        <PageMarginWithTitle
          className={classNames({ 'bottom-[-30px] absolute': fill })}
        >
          <Grid>
            <div className='col-span-2 md:col-span-8'>{titleBlock}</div>
          </Grid>
        </PageMarginWithTitle>
      ) : (
        <Grid>
          <div
            className={classNames('col-span-2 md:col-span-8', {
              'mx-5': extraDescriptionMargin,
            })}
          >
            {titleBlock}
          </div>
        </Grid>
      )}
    </div>
  );
};

export default ImageWithCaption;
