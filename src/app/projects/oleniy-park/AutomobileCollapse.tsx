import Collapse from '@/components/Collapse';
import Grid from '@/components/Grid';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React from 'react';

const picLink = makePicLink('oleniy-park');

const AutomobileCollapse = () => {
  return (
    <Collapse title='04 Автомобильные маршруты (дополнительная инфраструктура)'>
      <Grid>
        <div className='col-span-2 md:col-start-5 md:col-span-8 xl:col-span-6 xl:col-start-5 mb-10 order-1'>
          <span className='text-body-regular-mob md:text-h5 font-medium'>
            Для туристов, проживающих в парке долгое время предлагаем
            дополнительные маршруты, выходящие за границы парка
          </span>
        </div>
        <div className='col-span-2 md:col-span-4 order-3 md:order-2'>
          <div className='flex flex-col'>
              <Grid cols={4}>
                <div className='col-span-2 xl:col-span-12 md:col-span-4 flex justify-center md:justify-end mb-10'>
                  <div className='flex flex-col'>
                    <span className='text-body-caption-10 md:text-body-regular font-medium mb-2'>
                      Технический транспорт
                    </span>
                    <Image
                      src={picLink('61')}
                      width={400}
                      height={234}
                      alt=''
                    />
                  </div>
                </div>
                <div className='col-span-2 xl:col-span-12 md:col-span-4 flex justify-center md:justify-end mb-10'>
                  <div className='flex flex-col'>
                    <span className='text-body-caption-10 md:text-body-regular font-medium mb-2'>
                      Автомобили для экскурсий
                    </span>
                    <Image
                      src={picLink('62')}
                      width={400}
                      height={290}
                      alt=''
                    />
                  </div>
                </div>
              </Grid>
          </div>
        </div>
        <div className='col-span-2 md:col-span-8 order-2 md:order-3'>
          <Image
            className='hidden md:block'
            alt=''
            width={860}
            height={644}
            src={picLink('59')}
          />
          <Image
            className='block md:hidden mb-10'
            alt=''
            width={480}
            height={360}
            src={picLink('60')}
          />
        </div>
      </Grid>
    </Collapse>
  );
};

export default AutomobileCollapse;
