import Collapse from '@/components/Collapse';
import Grid from '@/components/Grid';
import BodyMedium from '@/components/typography/BodyMedium';
import BodyRegular from '@/components/typography/BodyRegular';
import H5Medium from '@/components/typography/H5Medium';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React from 'react';

const picLink = makePicLink('oleniy-park');

const HorseCollapse = () => {
  return (
    <Collapse title='03 Конные маршруты'>
      <Grid>
        <div className='col-span-2 md:col-start-5 md:col-span-8 xl:col-span-6 xl:col-start-5 mb-10 order-1'>
          <span className='text-body-regular-mob md:text-h5 font-medium'>
            Все конные маршруты закольцованы, начинаются и заканчиваются в одной
            точке — у конюшни
          </span>
          <span className='text-body-regular-mob md:text-h5 font-medium block mt-4'>
            Зоны для отдыха, расположенные на конных маршрутах, должны иметь все
            необходимые элементы для отдыха лошадей
          </span>
        </div>
        <div className='col-span-2 md:col-span-4 order-3 md:order-2'>
          <div className='flex flex-col space-y-6'>
            <H5Medium className='hidden md:block'>Конные маршруты</H5Medium>
            <Grid cols={4} >
              <div className='flex flex-col space-y-4 col-span-3'>
                <div className='flex justify-between items-center'>
                  <BodyMedium className='text-grey md:text-black'>
                    Маршрут КО — начинающие
                  </BodyMedium>
                  <div className='md:hidden w-[110px] mt-1 h-4 bg-[#B8D153]' />
                </div>
                <div className='space-y-2 md:space-y-4'>
                  <BodyRegular>2,0 км — 1,5 часа, пеший шаг лошади</BodyRegular>
                </div>
              </div>
              <div className='col-span-1 hidden md:block'>
                <div className='w-full mt-1 h-4 bg-[#B8D153]' />
              </div>
            </Grid>
          </div>
          <div className='flex flex-col md:mt-10'>
            <div className='flex flex-col space-y-6'>
              <Grid cols={4} >
                <div className='flex flex-col space-y-4 col-span-2 md:col-span-3'>
                  <div className='flex justify-between items-center'>
                    <BodyMedium className='text-grey md:text-black'>
                      Маршрут К1
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#80C5BF]' />
                  </div>
                  <BodyRegular>
                    25,6 км — 3,5–4 часа + 1 час остановки
                  </BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <div className='w-full mt-1 h-4 bg-[#80C5BF]' />
                </div>
              </Grid>
              <Grid cols={4} >
                <div className='flex flex-col space-y-4 col-span-2 md:col-span-3'>
                  <div className='flex justify-between items-center'>
                    <BodyMedium className='text-grey md:text-black'>
                      Маршрут К2
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#459289]' />
                  </div>
                  <BodyRegular>
                    8,4 км — 1–1,5 часа + 1 час остановки
                  </BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <div className='w-full mt-1 h-4 bg-[#459289]' />
                </div>
              </Grid>
              <Grid cols={4} >
                <div className='flex flex-col space-y-4 col-span-2 md:col-span-3'>
                  <div className='flex justify-between items-center'>
                    <BodyMedium className='text-grey md:text-black'>
                      Перспективный маршрут К3
                    </BodyMedium>
                    <Image
                      className='md:hidden mt-1'
                      src={picLink('58')}
                      width={110}
                      height={17}
                      alt=''
                    />
                  </div>
                  <BodyRegular>
                    10 км — 1,5–2 часа + 1 час остановки
                  </BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <Image
                    className='w-full mt-1 h-4 object-contain'
                    src={picLink('58')}
                    width={110}
                    height={17}
                    alt=''
                  />
                </div>
              </Grid>
            </div>
          </div>
        </div>
        <div className='col-span-2 md:col-span-8 order-2 md:order-3'>
          <Image
            className='hidden md:block'
            alt=''
            width={860}
            height={608}
            src={picLink('56')}
          />
          <Image
            className='block md:hidden mb-10'
            alt=''
            width={480}
            height={522}
            src={picLink('57')}
          />
        </div>
      </Grid>
    </Collapse>
  );
};

export default HorseCollapse;
