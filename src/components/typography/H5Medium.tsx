import React from 'react';
import classNames from 'classnames';

interface H5MediumProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

const H5Medium: React.FC<H5MediumProps> = ({ inline, children, className }) => {
  return (
    <span
      className={classNames('text-h5-mob md:text-h5 font-medium', className, {
        'block': !inline,
      })}
    >
      {children}
    </span>
  );
};

export default H5Medium;
