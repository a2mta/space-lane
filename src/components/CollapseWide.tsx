'use client';
import Image from 'next/image';
import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import Grid from './Grid';
import classNames from 'classnames';

const CollapseWide: FC<
  {
    index: string;
    title: string;
    image: string;
    shortDesc: string;
  } & PropsWithChildren
> = ({ shortDesc, title, image, children, index }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(
        isCollapsed ? '0px' : `${contentRef.current.scrollHeight + 80}px`
      );
    }
  }, [isCollapsed]);

  const closeButton = (
    <div className='xl:size-8 size-6'>
      <Image
        width={32}
        height={32}
        alt='collapse'
        src='/icons/cross.svg'
        className={`cursor-pointer transition-transform duration-200 ${
          isCollapsed ? '' : 'rotate-45'
        }`}
        onClick={toggleCollapse}
      />
    </div>
  );

  return (
    <div className='py-6 tracking-wider border-b md:border-b-0 md:border-t border-medium-grey'>
      <Grid className='transition-max-height duration-500'>
        <div className='hidden md:block col-span-4 row-span-2 relative'>
          <div className='transition-all duration-300 overflow-hidden relative top-0 w-full h-full'>
            <div
              className='absolute w-full h-full'
              style={{ minHeight: maxHeight }}
            >
              <span
                className={classNames(
                  'text-body inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-full align-bottom',
                  { 'opacity-0': !isCollapsed }
                )}
              >
                {index}
              </span>
              <Image
                src={image}
                style={{ objectFit: 'cover' }}
                fill
                alt=''
                className={classNames('transition-all', {
                  'opacity-100': !isCollapsed,
                  'opacity-0': isCollapsed,
                })}
              />
            </div>
          </div>
        </div>
        <div className='col-span-2 md:col-span-4'>
          <div className='flex justify-between'>
            <span className='text-body-regular-mob md:text-body-regular block font-medium'>
              {title}
            </span>
            <span className='md:hidden'>{closeButton}</span>
          </div>
        </div>
        <div className='col-span-2 md:col-span-3'>
          <span className='text-body-regular-mob md:text-body-regular font-light mt-4 md:mt-0 block md:font-medium'>
            {shortDesc}
          </span>
        </div>
        <div className='hidden md:flex col-span-1 justify-end items-start'>
          {closeButton}
        </div>
        <div
          className={`col-span-2 md:col-span-8 md:col-start-5  w-full overflow-hidden transition-all duration-200 ease-linear`}
          style={{ maxHeight }}
          ref={contentRef}
        >
          <div>
            <Image
              src={image}
              style={{ objectFit: 'cover' }}
              width={440}
              height={294}
              alt=''
              className={classNames('transition-all mt-10 md:hidden', {
                'opacity-100': !isCollapsed,
                'opacity-0': isCollapsed,
              })}
            />
            <div className='mt-4 w-full'>{children}</div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default CollapseWide;
