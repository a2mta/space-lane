import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

const Grid: FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classNames('grid lg:grid-cols-12 gap-x-10 grid-cols-2', className)}
    >
      {children}
    </div>
  );
};

export default Grid;
