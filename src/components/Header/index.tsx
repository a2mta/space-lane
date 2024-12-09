import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <header className='sticky top-0 z-[49] hidden md:flex items-center font-manrope px-20 justify-between py-7 bg-white'>
      <div className='flex'>
        <Link href='/'>
          <Image
            priority={true}
            src='/icons/logo.svg'
            width={143}
            height={18}
            alt='space lane logo'
          />
        </Link>
      </div>
      <nav className='flex space-x-24'>
        <div className='flex space-x-8'>
          <HeaderLink url='/about' text='О нас' />
          <HeaderLink url='/projects' text='Проекты' />
          <HeaderLink url='/consulting' text='Консалтинг' />
          <HeaderLink url='/media' text='Медиа' />
        </div>
        <HeaderLink url='/contacts' text='Контакты' />
      </nav>
    </header>
  );
};

export default Header;
