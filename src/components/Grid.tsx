import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const Grid: FC<
  PropsWithChildren & { className?: string; cols?: number; colsM?: number }
> = ({ className, children, cols, colsM }) => {
  return (
    <div
      className={classNames(
        'grid gap-x-10',
        `lg:grid-cols-${cols || 12}`,
        `grid-cols-${colsM || 2}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
// grid gap-x-10 lg:grid-cols-12 grid-cols-2 col-span-12 mt-10