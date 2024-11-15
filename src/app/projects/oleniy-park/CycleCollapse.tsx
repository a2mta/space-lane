import Collapse from '@/components/Collapse';
import Grid from '@/components/Grid';
import BodyMedium from '@/components/typography/BodyMedium';
import BodyRegular from '@/components/typography/BodyRegular';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React from 'react';

const picLink = makePicLink('oleniy-park');

const CycleCollapse = () => {
  return (
    <Collapse title='02 Велосипедные маршруты'>
      <Grid>
        <div className='col-span-2 md:col-start-5 md:col-span-8 xl:col-span-6 xl:col-start-5 mb-10 order-1'>
          <span className='text-body-regular-mob md:text-h5 font-medium'>
            Основной отправной точкой велосипедных маршрутов является зона
            велопроката, расположенная во входной зоне парка. Предполагается 2
            пункта велопроката, а также вело инфраструктура в местах отдыха на
            маршрутах
          </span>
        </div>
        <div className='col-span-2 md:col-span-4 order-3 md:order-2'>
          <div className='flex flex-col'>
            <Grid cols={4} >
              <div className='flex flex-col space-y-4 col-span-3'>
                <div className='flex justify-between items-center'>
                  <BodyMedium className='text-grey md:text-black'>
                    Маршрут ПМ1, ПМ2
                  </BodyMedium>
                  <div className='md:hidden w-[110px] mt-1 h-4 bg-[#B8D153]' />
                </div>
                <div className='space-y-2 md:space-y-4'>
                  <BodyRegular>4,0 км — 30 мин. + 20 мин. отдых</BodyRegular>
                  <BodyRegular>4,2 км — 35 мин. + 20 мин. отдых</BodyRegular>
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
                      Маршрут В1
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#80C5BF]' />
                  </div>
                  <BodyRegular>
                    15,3–2 часа + 1 час остановки и отдых
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
                      Маршрут В2
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#459289]' />
                  </div>
                  <BodyRegular>
                    21,3 км — 3 часа + 1 час остановки и отдых остановки
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
                      Маршрут В3
                    </BodyMedium>
                    <div className='md:hidden w-[110px] mt-1 h-4 bg-[#357989]' />
                  </div>
                  <BodyRegular>7,4 км — 1 час + 0,5 час остановки</BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <div className='w-full mt-1 h-4 bg-[#357989]' />
                </div>
              </Grid>
              <Grid cols={4} >
                <div className='flex flex-col space-y-4 col-span-2 md:col-span-3'>
                  <div className='flex justify-between items-center'>
                    <BodyMedium className='text-grey md:text-black'>
                      Перспективный веломаршрут
                    </BodyMedium>
                    <Image
                      className='md:hidden  mt-1'
                      src={picLink('53')}
                      width={110}
                      height={17}
                      alt=''
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <BodyRegular>
                    13 км — 1,5 часа + 1 час остановки и отдых
                  </BodyRegular>
                </div>
                <div className='col-span-1 hidden md:block'>
                  <div className='h-[17px] relative'>
                    <Image
                      src={picLink('53')}
                      alt=''
                      className='object-contain'
                      fill
                    />
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </div>
        <div className='col-span-2 md:col-span-8 order-2 md:order-3'>
          <Image
            className='hidden md:block'
            alt=''
            width={840}
            height={596}
            src={picLink('55')}
          />
          <Image
            className='block md:hidden mb-10'
            alt=''
            width={480}
            height={374}
            src={picLink('54')}
          />
        </div>
      </Grid>
    </Collapse>
  );
};

export default CycleCollapse;
