import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

const BriefPage = () => {
  return (
    <>
      <Script async src='https://forms.yandex.ru/_static/embed.js' />

      <PageMarginWithTitle
        className='flex items-center'
        title='Расскажите о вашем проекте'
      >
        <Grid className='w-full mb-30 md:mb-0'>
          <div className='col-span-2 md:col-span-8 md:col-start-3'>
            <iframe
              src='https://forms.yandex.ru/u/6754541284227c4ab564e005/?iframe=1'
              name='ya-form-6754541284227c4ab564e005'
              width='100%'
            ></iframe>
          </div>
        </Grid>
      </PageMarginWithTitle>
    </>
  );
};

export default BriefPage;
