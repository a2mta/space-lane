import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import ProjectPicWithTitle from '@/components/ProjectPicWithTitle';
import Image from 'next/image';
import { title } from 'process';
import React, { FC } from 'react';

const DescriptionRow: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <div className='flex flex-col pb-4 border-b border-b-grey'>
    <span className='text-h4 mb-2'>{title}</span>
    <span className='text-body-regular'>{subTitle}</span>
  </div>
);

const SavelovskiyPage = () => {
  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title='Савёловский кластер'
          coverLink='/pics/projects/savelovskiy/cover.png'
          coverLink2='/pics/projects/savelovskiy/cover-2.png'
          status='Концепция'
          area='5,2 га'
          location='Москва'
          subTitle='Дизайн-проект благоустройства ул. Большая Новодмитровская и территории Дизайн-завода «Флакон»'
          type='Исследование, мастер-план, дизайн-код, благоустройство'
          year='2019'
        />
      </section>
      <PageMarginWithTitle>
        <Grid className='mt-50'>
          <div className='col-span-6'>
            <span className='text-h4'>Большая Новодмитровская улица</span>
          </div>
          <div className='col-span-6'>
            <span className='text-h5'>
              Большая Новодмитровская улица находится в Бутырском районе на
              севере Москвы. К ней примыкают такие знаковые городские
              пространства как арт-квартал «Хлебозавод», дизайн-завод «Флакон»,
              Савёловский вокзал и ряд офисных центров.
            </span>
          </div>
          <div className='col-span-12 mt-30 mb-20'>
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/map.png'
              alt='карта савеловский'
              width={1780}
              height={640}
            />
          </div>
          <div className='col-span-6 space-y-10'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/hlebzavod.png'
              title='Хлебзавод'
            />
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/flakon.png'
              title='Флакон'
            />
          </div>
          <div className='col-span-3 space-y-10'>
            <DescriptionRow
              subTitle='проживает в Бутырском районе'
              title='71 458 человек'
            />
            <DescriptionRow
              subTitle='находятся в границах квартала'
              title='3 станции метро'
            />
            <DescriptionRow
              subTitle='до аэропорта Шереметьево'
              title='35 минут'
            />
          </div>
          <div className='col-span-3'>
            <div className='space-y-10'>
              <DescriptionRow
                subTitle='плотность населения'
                title='14 178 чел/км²'
              />
              <DescriptionRow
                subTitle='пассажиропоток Савёловского вокзала'
                title='50 000 человек в день'
              />
              <DescriptionRow
                subTitle='на метро до центра города'
                title='11 минут'
              />
            </div>
            <div className='mt-30'>
              <span className='text-body-caption'>
                Данные взяты из открытых источников и актуальны на момент
                выполнения проекта
              </span>
            </div>
          </div>
          <div className='col-span-6'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/vokzal.png'
              title='Савёловский вокзал'
            />
          </div>
          <div className='col-span-6'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/novodmitrovskiy.png'
              title='Офисный центр «Новодмитровский»'
            />
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-start-1 col-end-4'>
            <span className='text-h4'>
              Цифровая антропология и ГИС-аналитика
            </span>
          </div>
          <div className='col-start-5 space-y-4 col-end-9 grid-cols-subgrid'>
            <span className='text-h5'>Объекты стрит-ритейла</span>
            <div className='col-span-4'>
              <span>
                Рассматриваемая территория — активный городской участок со
                множеством точек притяжения. Схема показывает функциональную
                насыщенность территории, разделенной ж/д путями, что говорит о
                необходимости комфортной связи между активно посещаемыми
                пространствами
              </span>
            </div>
          </div>
          <div className='col-start-5 col-end-13 mt-10'>
            <Image
              width={1160}
              height={508}
              src='/pics/projects/savelovskiy/riteil-map.png'
              alt=''
            />
          </div>
        </Grid>
        <Grid className='mt-20'>
          <div className='col-span-8'>
            <Image
              width={1160}
              height={508}
              src='/pics/projects/savelovskiy/heat-map.png'
              alt=''
            />
          </div>
          <div className='col-span-4 flex flex-col justify-between'>
            <div className='flex flex-col space-y-4'>
              <span className='text-h5'>
                Интенсивность фотофиксации по данным социальных сетей
              </span>
              <span className='text-body-regular'>
                Схема тепловой активности демонстрирует концентрацию
                пользователей в функционально насыщенных точках. Это говорит о
                востребованности разнообразных видов досуга на территории
              </span>
            </div>
            <div className='grid grid-cols-4 gap-x-10'>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='w-[50px] h-[50px] bg-dark-blue'></div>
                <span className='ml-2 text-body-caption'>Наименьшая активность</span>
              </div>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='w-[50px] h-[50px] bg-medium-red'></div>
                <span className='ml-2 text-body-caption'>Наибольшая активность</span>
              </div>
            </div>
          </div>
        </Grid>
      </PageMarginWithTitle>
    </div>
  );
};

export default SavelovskiyPage;
