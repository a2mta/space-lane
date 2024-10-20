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

const CollapseWide: FC<
  {
    title: string;
    subTitle: string;
    shortDesc: string;
  } & PropsWithChildren
> = ({ shortDesc, subTitle, children, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(
        isCollapsed ? '0px' : `${contentRef.current.scrollHeight}px`
      );
    }
  }, [isCollapsed]);

  return (
    <div className='py-6 tracking-wider'>
      <Grid className='pb-4 transition-max-height duration-500'>
        <div className='col-span-4 row-span-2'>
          <span className='text-body inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-full align-bottom'>{title}</span>
        </div>
        <div className='col-span-4'>
          <span className='text-body'>{subTitle}</span>
        </div>
        <div className='col-span-3'>
          <span className='text-body'>{shortDesc}</span>
        </div>
        <div className='col-span-1 flex justify-end items-start'>
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
      <div
        className={`col-span-2 md:col-span-8 md:col-start-5 border-t w-full overflow-hidden transition-all duration-200 ease-linear ${
            !isCollapsed ? 'border-t-[transparent]' : 'border-grey'
        }`}
        style={{ maxHeight }}
        ref={contentRef}
        >
        <div>
          <div className='mt-4 w-full'>{children}</div>
        </div>
      </div>
          </Grid>
    </div>
  );
};

export default CollapseWide;
