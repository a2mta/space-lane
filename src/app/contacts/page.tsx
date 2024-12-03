import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Link from 'next/link';
import React from 'react';

const ContactsPage = () => {
  return (
    <PageMarginWithTitle withBorder title='Контакты'>
      <Grid className='pt-6'>
        <div className='hidden md:flex col-start-5 col-span-1'>
          <span className='font-medium md:text-h6 xl:text-h5 text-grey mr-2'>
            Соц.сети
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
            <span className='block'>Info@spacelane.ru</span>
            <span className='block'>spacelanemsk@gmail.ru</span>
            <span className='block'>+7 926 066-36-69</span>
          </div>
          <div className='hidden md:flex mt-10 max-w-56 p-2 bg-transparent hover:bg-transparent text-inherit font-inherit m-0 cursor-pointer border border-grey  items-center justify-center'>
            <span className='text-body-regular font-medium'>
              <Link href='/brief'>Заполнить бриф</Link>
            </span>
          </div>
          <Grid className='mt-4 md:hidden'>
            <div className='col-span-1'>
              <div className='text-center p-2 bg-transparent hover:bg-transparent text-inherit font-inherit m-0 cursor-pointer border border-grey'>
                <Link href='/brief'>Заполнить бриф</Link>
              </div>
            </div>
          </Grid>
        </div>
        <div className='col-span-1 md:hidden'>
          <span className='text-h5-mob font-medium text-grey'>Соц.сети</span>
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
