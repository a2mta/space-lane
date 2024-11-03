import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const Grid: FC<
  PropsWithChildren & {
    className?: string;
    cols?: number;
    colsM?: number;
    colsXL?: number;
    gapX?: number;
  }
> = ({ className, children, cols, colsM, colsXL, gapX }) => {
  return (
    <div
      className={classNames(
        'grid',
        `xl:grid-cols-${colsXL || 12}`,
        `md:grid-cols-${cols || 12}`,
        `grid-cols-${colsM || 2}`,
        `xl:gap-x-${gapX || 10}`,
        `md:gap-x-${gapX || 10}`,
        'gap-x-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
