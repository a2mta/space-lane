import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { makePicLink } from '@/utils';
import React from 'react';
import { createTranslation } from '../../../../i18n/server';
import Grid from '@/components/Grid';
import ImageWithCaption from '@/components/ImageWithCaption';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Image from 'next/image';

const picLink = makePicLink('corso');

const planData = [
    'Контейнеры для сбора мусора',
    'Парковка',
    'Контейнеры для сбора мусора',
    'Новогодняя ель',
    'Амфитеатр',
    'Площадь',
    'Теневой навес',
    'Игровая площадка',
    'Большая радиусная скамья',
    'Прифасадная зона отдыха',
]

const CorsoPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Жилой комплекс Corso'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Вид на пересечение ул. Марата и Цесовской набережной'
          status={t('status.in_release_process')}
          area={'0,87 га'}
          location={'Иркутск'}
          subTitle={
            'Дизайн-проект благоустройства в Правобережном округе г. Иркустка'
          }
          type={'Благоустройство'}
          year='2022'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-body'>
                Разрабатывая концептуальные решения приватного дворового
                пространства, мы хотели поддержать мотивы классической
                итальянской архитектуры, которые характерны для экстерьера
                здания. Так, во дворе симметричного П-образного дома появилась
                небольшая плаза, лёгкая пергола и многуровневый амфитеатр
              </span>
            </div>
            <div className='col-span-8'>
              <ImageWithCaption
                src={picLink('03')}
                width={1160}
                height={724}
                title='Вид на транзитную зону вдоль Цесовской набережной'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <span className='text-h4 font-medium block mb-16'>
                Генеральный план
              </span>
              <span className='text-body-caption font-medium block mb-2'>
                Схема планировочной организации территории
              </span>
            </div>
            <div className='col-span-8'>
              <Image src={picLink('04')} width={1160} height={1000} alt='' />
            </div>
            <div className="col-span-2">
                {/* {planData.map(()=>)} */}
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default CorsoPage;
