import React from 'react';
import Grid from '../Grid';
import PageMarginWithTitle from '../PageMarginWithTitle';
import Tooltip from '../Tooltip'; // Import Tooltip

const Footer = () => {
  return (
    <footer className='font-manrope '>
      <PageMarginWithTitle className='mt-70 mb-14 hidden md:block'>
        <Grid className='md:grid text-body-regular'>
          <span className='col-span-4'>
            <div>
              <span className='relative'>
                <span className='hover:text-medium-grey cursor-pointer'>
                  Rus
                </span>{' '}
                /{' '}
                <Tooltip>
                  <span className='hover:text-medium-grey cursor-pointer'>
                    Eng
                  </span>
                </Tooltip>
              </span>
            </div>
          </span>
          <span className='col-span-7'>Instagram / Telegram</span>
          <span className='col-span-1 text-right'>
            © {new Date().getFullYear()}
          </span>
        </Grid>
      </PageMarginWithTitle>
      <PageMarginWithTitle className='md:hidden my-10'>
        <Grid>
          <div className='col-span-2 text-body-regular-mob font-medium'>
            <div className='flex justify-between'>
              <Tooltip>
                <span>Rus / Eng</span>
              </Tooltip>
              <span>Insta / TG</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </Grid>
      </PageMarginWithTitle>
    </footer>
  );
};

export default Footer;
