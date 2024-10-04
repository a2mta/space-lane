import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderMobile = () => {
  return (
    <header className='flex md:hidden h-14 font-manrope px-5 justify-between py-5 bg-white border-b border-medium-grey'>
      <Link href='/'>
        <Image
          priority={true}
          src='/icons/logo.svg'
          width={125}
          height={15}
          alt='space lane logo'
        />
      </Link>
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
