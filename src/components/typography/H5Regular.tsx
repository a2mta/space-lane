import React from 'react';
import classNames from 'classnames';

interface H5RegularProps {
  children: React.ReactNode;
  className?: string;
}

const H5Regular: React.FC<H5RegularProps> = ({ children, className }) => {
  return <span className={classNames('text-h5 block font-light', className)}>{children}</span>;
};

export default H5Regular;