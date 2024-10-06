import React from 'react';
import classNames from 'classnames';

interface BodyMediumProps {
  children: React.ReactNode;
  className?: string;
}

const BodyMedium: React.FC<BodyMediumProps> = ({ children, className }) => {
  return <span className={classNames('text-body-regular block font-medium', className)}>{children}</span>;
};

export default BodyMedium;