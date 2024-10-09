import React from 'react';
import Grid from '../Grid';
import PageMarginWithTitle from '../PageMarginWithTitle';

const Footer = () => {
  return (
    <footer className='font-manrope mt-70 mb-14'>
      <PageMarginWithTitle>
        <Grid className='md:grid hidden'>
          <span className='col-span-2'>Rus / Eng</span>
          <span className='col-start-6 col-span-2'>Instagram / Telegram</span>
          <span className='col-start-13 col-span-1 text-right'>(c) 2024</span>
        </Grid>
        <div className='md:hidden flex justify-between'>
          <span>Rus / Eng</span>
          <span>Instagram / Telegram</span>
          <span>(c) 2024</span>
        </div>
      </PageMarginWithTitle>
    </footer>
  );
};

export default Footer;
