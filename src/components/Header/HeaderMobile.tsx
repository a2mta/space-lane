import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderMobile = () => {
  return (
    <header className='sticky top-0 z-50 flex min-h-[40px] md:hidden h-14 font-manrope px-5 justify-between py-5 bg-white'>
        <Image
          priority={true}
          src='/icons/logo.svg'
          className='h-[15px] w-[125px]'
          width={125}
          height={15}
          alt='space lane logo'
        />
      <Image
          priority={true}
          src='/icons/burger.svg'
          width={24}
          height={16}
          alt=''
          className='cursor-pointer'
        />
    </header>
  );
};

export default HeaderMobile;
