import Collapse from '@/components/Collapse';
import Grid from '@/components/Grid';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React from 'react';

const picLink = makePicLink('oleniy-park');

const AdditionalWalksCollapse = () => {
  return (
    <Collapse title='05 Пешие (дополнительная инфраструктура)'>
      <Grid>
        <div className='col-span-2 md:col-span-4 order-1 md:order-2 mb-10 md:mb-0'>
          <div className='flex flex-col'>
            <Grid cols={4}>
              <div className='col-span-2 md:col-span-8 xl:col-span-12'>
                <span className='text-body-regular-mob md:text-body-regular font-medium'>
                  Для туристов, проживающих в парке долгое время, предлагаются
                  дополнительные пешеходные маршруты, выходящиеза границы парка
                </span>
              </div>
            </Grid>
          </div>
        </div>
        <div className='col-span-2 md:col-span-8 order-2 md:order-3'>
          <Image
            className='hidden md:block'
            alt=''
            width={840}
            height={460}
            src={picLink('63')}
          />
          <Image
            className='block md:hidden mb-10'
            alt=''
            width={480}
            height={264}
            src={picLink('63')}
          />
        </div>
      </Grid>
    </Collapse>
  );
};

export default AdditionalWalksCollapse;
