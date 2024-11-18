import classNames from 'classnames';
import { FC, ReactElement } from 'react';
import Grid from './Grid';

type IconCardProps = {
  className?: string;
  index: string;
  icon: ReactElement;
  title: string | ReactElement;
  desc: string;
  noP?: boolean;
};

export const IconCard: FC<IconCardProps> = ({
  desc,
  className,
  index,
  title,
  icon,
  noP,
}) => (
  <div
    className={classNames(
      'col-span-1 border-t border-medium-grey md:col-span-4 flex flex-col aspect-[5/4] xl:min-h-max xl:aspect-[7/4] pt-2 md:pt-4',
      { 'xl:px-0 xl:py-5 md:p-6': !noP },
      className
    )}
  >
    <div className='flex flex-col mb-6'>
      <div className='flex justify-between'>
        <Grid cols={4} colsXL={4} colsM={4} className='w-full'>
          <div className='col-span-4 hidden md:block'>
            <span className='text-body-caption-mob md:text-h6 lg:text-h5 font-light mb-2 block'>
              {index}
            </span>
          </div>
          <div className='col-span-4'>
            <div className='flex justify-between'>
              <div className='flex xl:min-h-[100px] justify-between w-full flex-col'>
                <span className='md:hidden text-body-caption-mob md:text-h6 lg:text-h5 font-light mb-2 block'>
                  {index}
                </span>
                <span className='text-body-caption-mob md:text-h6 xl:text-h5 font-medium'>
                  {title}
                </span>
              </div>
              <div className='max-h-[42px] md:max-h-max'>

              {icon}
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </div>
    <span className='block text-body-caption-mob md:text-body-regular font-light'>
      {desc}
    </span>
  </div>
);

export const IconCardMobile: FC<
  IconCardProps & {
    iconMob: ReactElement;
  }
> = ({ desc, iconMob, index, title }) => {
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
