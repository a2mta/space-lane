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
      'col-span-2 md:col-span-4 md:p-6 flex justify-between flex-col border-t border-medium-grey pt-1 md:pt-0 md:border-none md:bg-light-grey md:aspect-[5/4] xl:min-h-max xl:aspect-[7/4] mb-10 md:mb-0',
      className
    )}
  >
    <div className='flex flex-col mb-4 xl:mb-0'>
      <span className='text-h4-mob md:text-h5 font-medium md:font-light'>
        {index}
      </span>
      <span className='text-h4-mob mt-1 md:mt-0 block md:text-h5 font-medium'>
        {title}
      </span>
    </div>
    <span className='text-body-regular-mob md:text-body-regular font-light'>
      {desc}
    </span>
  </div>
);
