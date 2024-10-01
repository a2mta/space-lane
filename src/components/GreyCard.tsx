import classNames from 'classnames';
import { FC } from 'react';

export const GreyCard: FC<{
  className?: string;
  index: string;
  title: string;
  desc: string;
}> = ({ desc, className, index, title }) => (
  <div
    className={classNames(
      'col-span-4 p-6 flex justify-between flex-col bg-light-grey aspect-[5/4] xl:min-h-max xl:aspect-[7/4] ',
      className
    )}
  >
    <div className='flex flex-col mb-4 xl:mb-0'>
      <span className='text-h5'>{index}</span>
      <span className='text-h5 font-medium'>{title}</span>
    </div>
    <span className='text-body-regular font-light'>{desc}</span>
  </div>
);
