import classNames from 'classnames';
import { FC, ReactElement } from 'react';

export const ExplicationRow: FC<{
  text: string;
  icon?: string | ReactElement;
}> = ({ text, icon }) => (
  <div className='flex'>
    {typeof icon === 'string' ? (
      <span className={classNames('min-w-28 h-6', icon)} />
    ) : (
      icon
    )}
    <span className='ml-4 flex items-center'>{text}</span>
  </div>
);
