import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const Grid: FC<
  PropsWithChildren & { className?: string; cols?: number; colsM?: number, gapX?: number }
> = ({ className, children, cols, colsM,gapX }) => {
  return (
    <div
      className={classNames(
        'grid',
        `md:grid-cols-${cols || 12}`,
        `grid-cols-${colsM || 2}`,
        `gap-x-${gapX || 10}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;