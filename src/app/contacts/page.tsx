import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Link from 'next/link';
import React from 'react';

const ContactsPage = () => {
  return (
    <PageMarginWithTitle withBorder title='Контакты'>
      <Grid className='pt-6 mb-30 md:mb-0'>
        <div className='hidden md:flex col-start-5 col-span-1'>
          <span className='font-medium md:text-h6 xl:text-h5 text-grey mr-2'>
            Соцсети
          </span>
        </div>
        <div className='hidden md:flex text-h5-mob md:text-h6 xl:text-h5 font-medium col-span-3 space-y-2  flex-col'>
          <span>Inst*gram</span>
          <span>Behance</span>
          <span>Linkedin</span>
        </div>
        <div className='mb-20 md:mb-0 col-span-2 md:col-span-4 mt-30 md:mt-0'>
          <span className='text-h5-mob md:text-h6 xl:text-h5 font-medium text-grey'>
            По вопросам предоставления услуг, организации сотрудничества и
            партнёрств
          </span>
          <div className='text-body-regular-mob md:text-h6 xl:text-h5 font-light flex flex-col space-y-4 md:space-y-2 mt-10 md:mt-6'>
            <span className='block'>info@spacelane.ru</span>
            <span className='block'>spacelanemsk@gmail.com</span>
            <span className='block'>+7 926 066-36-69</span>
          </div>
          <Link
            className='hidden hover:text-white hover:bg-black transition-colors text-body-regular font-medium md:flex mt-10 max-w-56 p-2 bg-transparent hover:bg-transparent text-inherit font-inherit m-0 cursor-pointer border border-grey  items-center justify-center'
            href='/brief'
          >
            Заполнить бриф
          </Link>
          <Grid className='md:hidden mt-4'>
            <div className='col-span-1'>
              <Link
                href='/brief'
                className='flex justify-center items-center text-center p-2 bg-transparent hover:bg-transparent text-inherit font-inherit m-0 cursor-pointer border border-grey'
              >
                Заполнить бриф
              </Link>
            </div>
          </Grid>
        </div>
        <div className='col-span-1 md:hidden'>
          <span className='text-h5-mob font-medium text-grey'>Соцсети</span>
        </div>
        <div className='col-span-1 md:hidden'>
          <div className='flex flex-col space-y-2'>
            <span>Inst*gram</span>
            <span>Behance</span>
            <span>Linkedin</span>
          </div>
        </div>
      </Grid>
    </PageMarginWithTitle>
  );
};

export default ContactsPage;
