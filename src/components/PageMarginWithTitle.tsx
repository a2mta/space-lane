import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const PageMarginWithTitle: FC<
  PropsWithChildren & {
    className?: string;
    title?: string;
    withBorder?: boolean;
    collapseMob?: boolean;
  }
> = ({ children, title, className, withBorder, collapseMob }) => {
  return (
    <>
      {title && (
        <div
          className={classNames(
            'flex flex-col w-full md:px-20 px-5',
            className
          )}
        >
          {title && (
            <div className='w-full mt-30 md:mt-50'>
              <h4 className='text-h3-mob md:text-h4 font-medium'>{title}</h4>
            </div>
          )}
        </div>
      )}
      {withBorder && (
        <div className='border-b h w-full border-medium-grey mt-4 md:mt-6' />
      )}
      {children && (
        <div
          className={classNames(
            'flex flex-col w-full md:px-20',
            !collapseMob && 'px-5',
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
