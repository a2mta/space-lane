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

const Collapse: FC<
  { title: string; borderColor?: string } & PropsWithChildren
> = ({ title, children, borderColor }) => {
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
    <div className='pt-6 md:py-6 tracking-wider'>
      <div className='pb-4 lg:pb-6 flex justify-between'>
        <Grid className='w-full' colsM={6}>
          <span
            className={`block text-body-regular-mob md:text-h6 lg:text-h5 font-medium col-span-5 md:col-span-7 transition-all duration-300 ease-in-out ${
              !isCollapsed ? 'md:col-start-5' : ''
            }`}
          >
            {title}
          </span>
          <div className='col-span-1 md:col-start-12 flex justify-end'>
            <Image
              width={32}
              height={32}
              alt='collapse'
              src='/icons/cross.svg'
              className={`hidden md:block cursor-pointer transition-transform duration-200 ${
                isCollapsed ? '' : 'rotate-45'
              }`}
              onClick={toggleCollapse}
            />
            <Image
              width={16}
              height={16}
              alt='collapse'
              src='/icons/cross-mobile.svg'
              className={`visible md:hidden cursor-pointer transition-transform duration-200 ${
                isCollapsed ? '' : 'rotate-45'
              }`}
              onClick={toggleCollapse}
            />
          </div>
        </Grid>
      </div>
      <div
        className={`border-t overflow-hidden transition-all duration-200 ease-linear ${
          !isCollapsed ? 'border-t-[transparent]' : borderColor || 'border-grey'
        }`}
        style={{ maxHeight }}
        ref={contentRef}
      >
        <div>
          <div className='mt-4'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
