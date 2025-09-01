import React from 'react';
import Grid from '../Grid';
import PageMarginWithTitle from '../PageMarginWithTitle';
import Tooltip from '../Tooltip'; // Import Tooltip
import Link from 'next/link';

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

          <span className='col-span-7'>
            <Link
              className='hover:text-medium-grey'
              href='https://www.instagram.com/space_lane'
              target='__blank'
              rel='noopener'
            >
              Inst*gram (запрещен в России, принадлежит Meta)
            </Link>{' '}
            /{' '}
            <Link
              className='hover:text-medium-grey'
              href='https://t.me/space_lane'
              target='__blank'
              rel='noopener'
            >
              Telegram
            </Link>
          </span>
          <span className='col-span-1 text-right'>
            © {new Date().getFullYear()}
          </span>
        </Grid>
      </PageMarginWithTitle>
      <PageMarginWithTitle className='md:hidden mt-10'>
        <Grid>
          <div className='col-span-2 text-body-regular-mob font-medium'>
            <div className='flex justify-between relative'>
              <Tooltip>
                <span>Rus / Eng</span>
              </Tooltip>
              <span>
                <Link
                  href='https://www.instagram.com/space_lane'
                  target='__blank'
                  rel='noopener'
                >
                  Insta*
                </Link>{' '}
                /{' '}
                <Link
                  href='https://t.me/space_lane'
                  target='__blank'
                  rel='noopener'
                >
                  TG
                </Link>
              </span>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <span className='text-body-caption-10 text-grey block mt-3 mb-6'>*запрещен в России, принадлежит Meta</span>
          </div>
        </Grid>
      </PageMarginWithTitle>
    </footer>
  );
};

export default Footer;
