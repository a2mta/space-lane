import classNames from 'classnames';
import { FC, ReactElement } from 'react';
import Grid from './Grid';

type IconCardProps = {
  className?: string;
  index: string;
  icon: ReactElement;
  iconMob: ReactElement;
  title: string;
  desc: string;
};

export const IconCard: FC<IconCardProps> = ({
  desc,
  className,
  index,
  title,
  icon,
}) => (
  <div
    className={classNames(
      'col-span-1 md:col-span-4 p-6 flex flex-col aspect-[5/4] xl:min-h-max xl:aspect-[7/4]',
      className
    )}
  >
    <div className='flex flex-col mb-14 xl:mb-0'>
      <span className='text-body-caption-mob md:text-h6 lg:text-h5 font-light mb-2 block'>
        {index}
      </span>
      <div className='flex justify-between'>
        <Grid cols={4} colsM={4}>
          <span className='text-body-caption-mob col-span-3 lg:text-h5 font-medium'>
            {title}
          </span>
          <div className='col-span-1'>{icon}</div>
        </Grid>
      </div>
    </div>
    <span className='block text-body-caption-mob md:text-body-regular font-light'>
      {desc}
    </span>
  </div>
);

export const IconCardMobile: FC<IconCardProps> = ({
  desc,
  iconMob,
  index,
  title,
}) => {
  return (
    <div className='mb-10 flex flex-col pt-2 border-t border-medium-grey  justify-between'>
      <div className='flex flex-col'>
        <span className='text-body-caption-mob font-light block'>{index}</span>
        <div className='flex justify-between'>
          <span className='text-body-caption-10 font-medium mr-2'>{title}</span>
          {iconMob}
        </div>
      </div>
      <span className='mt-2 text-body-caption-mob font-light'>{desc}</span>
    </div>
  );
};
