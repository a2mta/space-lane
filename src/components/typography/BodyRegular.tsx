import React from 'react';
import classNames from 'classnames';

interface BodyRegularProps {
  children: React.ReactNode;
  className?: string;
}

const BodyRegular: React.FC<BodyRegularProps> = ({ children, className }) => {
  return <span className={classNames('text-body-regular block font-light', className)}>{children}</span>;
};

export default BodyRegular;