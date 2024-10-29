import React from 'react';
import classNames from 'classnames';

interface TextH4Props {
  children: React.ReactNode;
  className?: string;
}

const TextH4: React.FC<TextH4Props> = ({ children, className }) => {
  return <span className={classNames('text-h3-mob md:text-h4 block font-medium', className)}>{children}</span>;
};

export default TextH4;