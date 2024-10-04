import classNames from 'classnames';
import { FC } from 'react';

export const ExplicationRow: FC<{
  text: string;
  icon?: string;
}> = ({ text, icon }) => (
  <div className='flex'>
    <span className={classNames('min-w-28 h-6 mr-4', icon)} />
    <span>{text}</span>
  </div>
);
