import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeaderLink from './HeaderLink';
import Grid from '../Grid';

const Header = () => {
  return (
    <header className='sticky top-0 z-[49] hidden md:flex items-center font-manrope px-20 justify-between py-7 bg-white'>
      <Grid className='w-full'>
        <div className='md:col-span-7 xl:col-span-8 flex items-center'>
          <Link href='/' className='inline-block'>
            <Image
              priority={true}
              className='h-[1.125rem] w-auto'
              src='/icons/logo.svg'
              width={143}
              height={18}
              alt='space lane logo'
            />
          </Link>
        </div>
        <div className='xl:col-span-4 col-span-5'>
          <nav className='flex justify-between space-x-10'>
            <div className='md:space-x-6 xl:space-x-8'>
              <HeaderLink url='/about' text='О нас' />
              <HeaderLink url='/projects' text='Проекты' />
              <HeaderLink url='/consulting' text='Консалтинг' />
              <HeaderLink url='/media' text='Медиа' />
            </div>
            <HeaderLink url='/contacts' text='Контакты' />
          </nav>
        </div>
      </Grid>
      {/* <div className='flex'>
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
       */}
    </header>
  );
};

export default Header;
