import Collapse from '@/components/Collapse';
import Grid from '@/components/Grid';
import BodyMedium from '@/components/typography/BodyMedium';
import BodyRegular from '@/components/typography/BodyRegular';
import H5Medium from '@/components/typography/H5Medium';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React from 'react';

const picLink = makePicLink('oleniy-park');

const WalkCollapse = () => {
  return (
    <Collapse borderColor='border-medium-grey' title='01 Пешеходные маршруты'>
      <Grid>
        <div className='col-span-2 md:col-start-5 md:col-span-8 xl:col-span-6 xl:col-start-5 mb-10 order-1'>
          <span className='text-body-regular-mob md:text-h5 font-medium'>
            Пешие маршруты проложены в границах парка с учётом раскрытия
            пейзажных видов и возможности наблюдения за флорой и фауной
          </span>
        </div>
        <div className='col-span-2 md:col-span-4 order-3 md:order-2'>
          <div className='flex flex-col space-y-6'>
            <H5Medium>Короткие маршруты</H5Medium>
            <Grid cols={4} colsXL={4}>
              <div className='flex flex-col space-y-4 col-span-3'>
                <div className='flex justify-between items-center'>
                  <BodyMedium className='text-grey md:text-black'>
                    Маршрут ПМ1, ПМ2
                  </BodyMedium>
                  <div className='md:hidden w-[110px] mt-1 h-4 bg-[#B2D235]' />
                </div>
                <div className='space-y-2 md:space-y-4'>
                  <BodyRegular>4,0 км — 2 часа + 20 мин, отдых</BodyRegular>
                  <BodyRegular>
                    4,2 км — 2 часа 10 мин + 20 мин, отдых
                  </BodyRegular>
                </div>
              </div>
              <div className='col-span-1 hidden md:block'>
                <div className='w-full mt-1 h-4 bg-[#B2D235]' />
              </div>
            </Grid>
          </div>
          <div className='flex flex-col mt-10'>
            <H5Medium className='mb-6'>Длинные маршруты</H5Medium>
            <div className='flex flex-col space-y-6'>
              <Grid cols={4} colsXL={4}>
                <div className='flex flex-col space-y-4 col-span-2 md:col-span-3'>
                  <div className='flex justify-between items-center'>
                    <BodyMedium className='text-grey md:text-black'>
                      Обзорный маршрут ПО1
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#E1E887]' />
                  </div>
                  <BodyRegular>
                    9,5 км — 4 часа 45 мин + 1 час остановки и отдых
                  </BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <div className='w-full mt-1 h-4 bg-[#E1E887]' />
                </div>
              </Grid>
              <Grid cols={4} colsXL={4}>
                <div className='flex flex-col space-y-4 col-span-2 md:col-span-3'>
                  <div className='flex justify-between items-center'>
                    <BodyMedium className='text-grey md:text-black'>
                      Обзорный маршрут ПО2
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#94B479]' />
                  </div>
                  <BodyRegular>
                    14,8 км и 4,3 км возврат всего 9 часов 33 мин. + 1 час
                    остановки
                  </BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <div className='w-full mt-1 h-4 bg-[#94B479]' />
                </div>
              </Grid>
              <Grid cols={4} colsXL={4}>
                <div className='flex flex-col space-y-4 col-span-2 md:col-span-3'>
                  <div className='flex justify-between items-center'>
                    <BodyMedium className='text-grey md:text-black'>
                      Обзорный маршрут ПО3
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#244132]' />
                  </div>
                  <BodyRegular>
                    12,9 км и 4,3 км возврат всего 17,2–8 часов 35 мин, + 1 час
                    остановки
                  </BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <div className='w-full mt-1 h-4 bg-[#244132]' />
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
            height={692}
            src={picLink('34')}
          />
          <Image
            className='block md:hidden mb-10'
            alt=''
            width={480}
            height={374}
            src={picLink('52')}
          />
        </div>
      </Grid>
    </Collapse>
  );
};

export default WalkCollapse;
