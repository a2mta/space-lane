import classNames from 'classnames';
import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

const Grid: FC<
  PropsWithChildren & {
    className?: string;
    cols?: number;
    colsM?: number;
    colsXL?: number;
    gapX?: number;
    onClick?: MouseEventHandler<HTMLDivElement>;
  }
> = ({ className, onClick, children, cols, colsM, colsXL, gapX }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'grid',
        `grid-cols-${colsM || 2}`,
        `md:grid-cols-${cols || 12}`,
        `xl:grid-cols-${colsXL || 12}`,
        `xl:gap-x-${gapX || 10}`,
        gapX ? `md:gap-x-${gapX}` : '',
        'gap-x-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
