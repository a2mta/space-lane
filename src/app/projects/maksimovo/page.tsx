import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { makePicLink } from '@/utils';
import React from 'react';
import { createTranslation } from '../../../../i18n/server';

const picLink = makePicLink('maksimovo');

const MaksimovoPage = async () => {
  const { t } = await createTranslation('common');
  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Коттеджный посёлок «Максимово парк»'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Фото до реализации существующего положения'
          status={t('status.in_progress')}
          area={'64 га'}
          location={'Городской округ Истра, Московская область'}
          subTitle='Дизайн-проект благоустройства и типология застройки посёлка «Максимово парк»'
          type={'Исследование, благоустройство'}
          year='2023–2024'
        />
      </section>
    </div>
  );
};

export default MaksimovoPage;
