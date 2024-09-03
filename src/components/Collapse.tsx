import Image from 'next/image';
import React, { FC } from 'react';

const Collapse: FC<{ title: string }> = ({title}) => {
  return (
    <div className='flex justify-between  border-b border-grey py-6'>
      <span className='text-h5'>{title}</span>
      <Image width={32} height={32} alt='close' src='/icons/cross.svg' className='cursor-pointer' />
    </div>
  );
};

export default Collapse;
