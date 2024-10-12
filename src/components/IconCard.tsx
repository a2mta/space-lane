import classNames from 'classnames';
import { FC, ReactElement } from 'react';
import Grid from './Grid';

export const IconCard: FC<{
  className?: string;
  index: string;
  icon: ReactElement;
  title: string;
  desc: string;
}> = ({ desc, className, index, title, icon }) => (
  <div
    className={classNames(
      'col-span-1 md:col-span-4 p-6 flex flex-col aspect-[5/4] xl:min-h-max xl:aspect-[7/4]',
      className
    )}
  >
    <div className='flex flex-col mb-14 xl:mb-0'>
      <span className='text-body-caption-mob md:text-h6 lg:text-h5 font-light mb-2 block'>{index}</span>
      <div className='flex justify-between'>
        <Grid cols={4} colsM={4}>
          <span className='text-body-caption-mob col-span-3 lg:text-h5 font-medium'>{title}</span>
          <div className='col-span-1'>{icon}</div>
        </Grid>
      </div>
    </div>
    <span className='block text-body-caption-mob md:text-body-regular font-light'>{desc}</span>
  </div>
);
