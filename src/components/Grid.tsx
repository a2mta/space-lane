import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const Grid: FC<
  PropsWithChildren & {
    className?: string;
    cols?: number;
    colsM?: number;
    gapX?: number;
  }
> = ({ className, children, cols, colsM, gapX }) => {
  return (
    <div
      className={classNames(
        'grid',
        `grid-cols-${colsM || 2}`,
        `lg:grid-cols-${cols || 12}`,
        `gap-x-${gapX || 10}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
