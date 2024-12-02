import React from 'react';
import Grid from '../Grid';
import PageMarginWithTitle from '../PageMarginWithTitle';

const Footer = () => {
  return (
    <footer className='font-manrope '>
      <PageMarginWithTitle className='mt-70 mb-14 hidden md:block'>
        <Grid className='md:grid '>
          <span className='col-span-4'>Rus / Eng</span>
          <span className='col-span-7'>Instagram / Telegram</span>
          <span className='col-span-1 text-right'>© {new Date().getFullYear()}</span>
        </Grid>
      </PageMarginWithTitle>
      <PageMarginWithTitle className='md:hidden my-10'>
        <Grid>
          <div className='col-span-2 text-body-regular-mob font-medium'>
            <div className='flex justify-between'>
              <span>Rus / Eng</span>
              <span>Instagram / Telegram</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </Grid>
      </PageMarginWithTitle>
    </footer>
  );
};

export default Footer;
