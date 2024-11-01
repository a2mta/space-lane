import classNames from 'classnames';
import { FC } from 'react';

export const MapDescRow: FC<{
  horizontal?: boolean;
  title: string;
  subTitle: string;
}> = ({ subTitle, horizontal, title }) => (
  <div
    className={classNames('flex pb-2 md:pb-4 border-b border-medium-grey', {
      'flex-col': !horizontal,
    })}
  >
    <span className='font-medium text-h3-mob md:text-h4 xl:text-h3 md:min-w-[130px]'>{title}</span>
    <div className='flex items-end flex-1'>
      <span
        className={classNames('text-body-regular-mob md:text-body-regular font-light', {
          'mt-2': !horizontal,
          'mb-[3px] md:mb-2 ml-2 md:ml-6': horizontal,
        })}
      >
        {subTitle}
      </span>
    </div>
  </div>
);
