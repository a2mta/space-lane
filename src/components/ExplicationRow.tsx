import classNames from 'classnames';
import { FC, ReactElement } from 'react';

export const ExplicationRow: FC<{
  text: string;
  icon?: string | ReactElement;
}> = ({ text, icon }) => (
  <div className='flex'>
    {typeof icon === 'string' ? (
      <span className={classNames('mt-1 md:mt-0 min-w-14 md:min-w-28 h-[10px] md:h-6', icon)} />
    ) : (
      icon
    )}
    <span className='md:whitespace-pre-wrap xl:whitespace-normal ml-2 md:ml-4 flex items-center text-body-caption-mob font-light md:text-body-regular'>
      {text}
    </span>
  </div>
);
