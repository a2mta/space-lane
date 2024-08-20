import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='flex px-20 justify-between py-7 bg-white'>
      <div className='flex'>
        <Image
          src='icons/logo.svg'
          width={143}
          height={18}
          alt='space lane logo'
        />
      </div>
      <div className='flex space-x-24'>
        <div className='flex space-x-8'>
          <span className='cursor-pointer'>О нас</span>
          <span className='cursor-pointer'>Проекты</span>
          <span className='cursor-pointer'>Консалтинг</span>
          <span className='cursor-pointer'>Медиа</span>
        </div>
        <span className='cursor-pointer'>Контакты</span>
      </div>
    </header>
  );
};

export default Header;
