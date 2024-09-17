import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const PageMarginWithTitle: FC<
  PropsWithChildren & {
    className?: string;
    title?: string;
    withBorder?: boolean;
  }
> = ({ children, title, className, withBorder }) => {
  return (
    <>
      <div
        className={classNames('flex flex-col w-full lg:px-20 px-5', className)}
      >
        {title && (
          <div className='w-full mt-50'>
            <h4 className='text-h4'>{title}</h4>
          </div>
        )}
      </div>
      {withBorder && (
        <div className='border-b h w-full border-medium-grey mt-6' />
      )}
      {children && (
        <div
          className={classNames(
            'flex flex-col w-full lg:px-20 px-5',
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default PageMarginWithTitle;
