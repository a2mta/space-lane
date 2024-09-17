'use client';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import Grid from './Grid';
import classNames from 'classnames';

const CollapseWide: FC<{
  title: string;
  subTitle: string;
  shortDesc: string;
}> = ({ shortDesc, subTitle, title }) => {
  const [collapsed, toggleCollapse] = useState(false);
  const handleCollapse = () => {
    toggleCollapse((prev) => !prev);
  };
  return (
    <Grid className='border-b border-grey py-6 tracking-wider transition-max-height duration-500'>
      <div className='col-span-4'>
        <span className='text-body'>{title}</span>
      </div>
      <div className='col-span-4'>
        <span className='text-body'>{subTitle}</span>
      </div>
      <div className='col-span-3'>
        <span className='text-body'>{shortDesc}</span>
      </div>
      <div className='col-span-1 flex justify-end items-start'>
        <Image
          onClick={handleCollapse}
          width={32}
          height={32}
          alt='close'
          src='/icons/cross.svg'
          className='cursor-pointer'
        />
      </div>
      <div
        className={classNames(
          'col-span-12 grid-rows-subgrid overflow-hidden transition-max-height duration-500',
          { 'max-h-0': collapsed, 'max-h-full': !collapsed }
        )}
      >
        <div className='col-span-4'>www</div>
      </div>
    </Grid>
  );
};

export default CollapseWide;
