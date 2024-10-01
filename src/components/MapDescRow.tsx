import classNames from 'classnames';
import { FC } from 'react';

export const MapDescRow: FC<{
  horizontal?: boolean;
  title: string;
  subTitle: string;
}> = ({ subTitle, horizontal, title }) => (
  <div
    className={classNames('flex pb-4 border-b border-grey', {
      'flex-col': !horizontal,
    })}
  >
    <span className='text-h3'>{title}</span>
    <div className='flex items-end flex-1'>
      <span
        className={classNames('text-body-regular font-light', {
          'mt-2': !horizontal,
          'mb-2 ml-6': horizontal,
        })}
      >
        {subTitle}
      </span>
    </div>
  </div>
);
