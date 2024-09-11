import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const PageMarginWithTitle: FC<
  PropsWithChildren & { className?: string; title?: string }
> = ({ children, title, className }) => {
  return (
    <div
      className={classNames('flex flex-col w-full lg:px-20 px-5', className)}
    >
      {title && (
        <div className='w-full mt-50 border-b border-medium-grey'>
          <h4 className='text-h4 mb-6'>{title}</h4>
        </div>
      )}
      {children}
    </div>
  );
};

export default PageMarginWithTitle;
