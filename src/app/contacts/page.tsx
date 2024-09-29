import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import React from 'react';

const ContactsPage = () => {
  return (
    <PageMarginWithTitle withBorder title='Контакты'>
      <Grid className='pt-6'>
        <div className='col-start-5 col-span-1'>
          <span className='font-medium text-h5 text-grey'>Соц.сети</span>
        </div>
        <div className='col-span-3 space-y-2 flex flex-col'>
          <span className='text-h5'>Inst*gram</span>
          <span className='text-h5'>Behance</span>
          <span className='text-h5'>Linkedin</span>
        </div>
        <div className='col-span-4'>
          <span className='text-h5 font-medium text-grey'>
            По вопросам предоставления услуг, организации сотрудничества и
            партнёрств
          </span>
          <div className='flex flex-col space-y-1 mt-6'>
            <span className='text-h5 block'>Info@spacelane.ru</span>
            <span className='text-h5 block'>spacelanemsk@gmail.ru</span>
            <span className='text-h5 block'>+7 926 066-36-69</span>
          </div>
        </div>
      </Grid>
    </PageMarginWithTitle>
  );
};

export default ContactsPage;
