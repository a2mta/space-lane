'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PageMarginWithTitle from '../PageMarginWithTitle';
import Grid from '../Grid';
import { useTranslation } from '../../../i18n/client';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');
  const [hidden, toggleHidden] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen((wasOpen) => {
      if (wasOpen) {
        document.documentElement.style.overflow = 'auto';
      } else {
        document.documentElement.style.overflow = 'hidden';
      }
      return !wasOpen;
    });
  };

  const handleClick = (link: string) => {
    setIsOpen(false);
    document.documentElement.style.overflow = 'auto';
    router.push('/' + link);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        toggleHidden(false);
      } else {
        toggleHidden(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header
      className={classNames(
        'z-[1005] sticky flex items-center min-h-[53px] md:hidden h-14 font-manrope px-5 justify-between py-5 bg-white transition-top duration-300',
        {
        'top-0': hidden,
        '-top-16': !hidden,
        }
      )}
    >
      <Link href='/'>
        <Image
        priority={true}
        src='/icons/logo.svg'
        className='h-[15px] w-[125px]'
        width={125}
        height={15}
        alt='space lane logo'
        />
      </Link>
      <div className='flex'>
        <div className='relative h-[18px] w-[23px]'>
        <div
          className={classNames(
            'cursor-pointer transition-all duration-300 ease-in-out',
            {
            'opacity-0': isOpen,
            'opacity-100': !isOpen,
            }
          )}
          onClick={handleToggle}
        >
          <div
            className={classNames(
            'w-full h-[2px] bg-black mb-[6px] transition-transform duration-300 ease-in-out',
            {
              'transform translate-y-[8px]': isOpen,
            }
            )}
          ></div>
          <div className='w-full h-[2px] bg-black mb-[6px]'></div>
          <div
            className={classNames('w-full h-[2px] bg-black transition-transform duration-300 ease-in-out', {
            'transform translate-y-[-8px]': isOpen,
            })}
          ></div>
        </div>
        <Image
          onClick={handleToggle}
          priority={true}
          src='/icons/mobile_ menu_cross.svg'
          width={23}
          height={18}
          alt=''
          className={classNames(
            'absolute top-0 left-0 transition-opacity duration-300 ease-in-out',
            {
            'opacity-100': isOpen,
            'opacity-0': !isOpen,
            }
          )}
        />
        </div>
      </div>
    </header>
    <div
      className={classNames(
        'fixed inset-0 bg-white z-[1000] transition-opacity duration-300 ease-in-out',
        {
        'opacity-100': isOpen,
        'opacity-0 pointer-events-none': !isOpen,
        }
      )}
    >
      {isOpen && (
        <div className='pb-10 pt-11 flex flex-col w-full h-full'>
        <div className='flex justify-between flex-col h-full'>
          <PageMarginWithTitle className='mt-30'>
            <Grid>
            <div className='col-span-2'>
              <div className='flex flex-col space-y-4 text-h3-mob font-medium'>
                {Object.keys(t('menu', { returnObjects: true })).map(
                (key) => (
                  <span
                    key={key}
                    className='block'
                    onClick={() => handleClick(key)}
                  >
                    {t('menu.' + key)}
                  </span>
                )
                )}
              </div>
              <span className='text-body-regular-mob font-light block mt-6'>
                spacelanemsk@gmail.ru
              </span>
              <span className='text-body-regular-mob font-light block mt-4'>
                +7 926 066-36-69
              </span>
            </div>
            </Grid>
          </PageMarginWithTitle>
          <PageMarginWithTitle>
            <Grid>
            <div className='col-span-2 text-body-medium font-medium'>
              <div className='flex justify-between'>
                <span>Rus / Eng</span>
                <span>Insta / TG</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
            </Grid>
          </PageMarginWithTitle>
        </div>
        </div>
      )}
    </div>
      {isOpen && (
        <div className='z-[1000] pb-10 pt-11 flex flex-col fixed w-full h-full bg-white'>
          <div className='flex justify-between flex-col h-full'>
            <PageMarginWithTitle className='mt-30'>
              <Grid>
                <div className='col-span-2'>
                  <div className='flex flex-col space-y-4 text-h3-mob font-medium'>
                    {Object.keys(t('menu', { returnObjects: true })).map(
                      (key) => (
                        <span
                          key={key}
                          className='block'
                          onClick={() => handleClick(key)}
                        >
                          {t('menu.' + key)}
                        </span>
                      )
                    )}
                  </div>
                  <span className='text-body-regular-mob font-light block mt-6'>
                    spacelanemsk@gmail.ru
                  </span>
                  <span className='text-body-regular-mob font-light block mt-4'>
                    +7 926 066-36-69
                  </span>
                </div>
              </Grid>
            </PageMarginWithTitle>
            <PageMarginWithTitle>
              <Grid>
                <div className='col-span-2 text-body-regular-mob font-medium'>
                  <div className='flex justify-between'>
                    <span>Rus / Eng</span>
                    <span>Insta / TG</span>
                    <span>© {new Date().getFullYear()}</span>
                  </div>
                </div>
              </Grid>
            </PageMarginWithTitle>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
