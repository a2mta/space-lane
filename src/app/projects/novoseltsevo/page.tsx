import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import React, { FC } from 'react';
import { createTranslation } from '../../../../i18n/server';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Image from 'next/image';

const MapDescRow: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <div className='flex pb-4 border-b border-grey flex-col'>
    <span className='text-h3'>{title}</span>
    <span className='text-body-regular mt-2 w-[60%]'>{subTitle}</span>
  </div>
);

const ConceptionCard: FC<{
  image: string;
  title: string;
  subTitles: string[];
}> = ({ image, subTitles, title }) => (
  <div className='col-span-4 flex flex-col'>
    <Image src={image} alt='' width={560} height={370} />
    <span className='text-h5 mt-10'>{title}</span>
    <div className='flex flex-col space-y-4 mt-6 text-body-regular'>
      {subTitles.map((subTitle, index) => (
        <span key={subTitle + index}>{`— ${subTitle}`}</span>
      ))}
    </div>
  </div>
);

const FragmentCard: FC<{
  image: string;
  title: string;
  description: string;
}> = ({ description, image, title }) => (
  <Grid>
    <div className='col-span-4 border-t border-medium-grey'>
      <span className='text-h4 mt-6 block'>{title}</span>
      <span className='mt-4 text-body-regular block'>{description}</span>
    </div>
    <div className='col-span-8'>
      <Image alt='' width={1160} height={820} src={image} />
    </div>
  </Grid>
);

const NovoseltsevoPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={t('page_titles.novoseltsevo')}
          coverLink='/pics/projects/novoseltsevo/01.png'
          coverLink2='/pics/projects/novoseltsevo/02.png'
          status={t('status.concept')}
          area={t('area.5_4_ha')}
          location={t('location.novoseltsevo')}
          subTitle={t('subTitle.novoseltsevo')}
          type={t('type.research_landscaping')}
          year='2022'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4 space-y-6'>
              <MapDescRow title='45 км' subTitle={t('distance.to_kremlin')} />
              <MapDescRow
                title='28 км'
                subTitle={t('distance.to_altufyevo_metro')}
              />
              <MapDescRow
                title='32 км'
                subTitle={t('distance.to_sheremetyevo_airport')}
              />
              <MapDescRow
                title='17 км'
                subTitle={t('distance.to_khlebnikovo_station')}
              />
            </div>
            <div className='col-span-8'>
              <Image
                width={1160}
                height={822}
                alt='moscow map'
                src='/pics/projects/novoseltsevo/03.png'
              />
            </div>
          </Grid>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>{t('project_ideas.title')}</span>
            </div>
            <div className='col-span-8'>
              <span className='text-body-regular'>
                {t('project_ideas.description')}
              </span>
            </div>
          </Grid>
          <Grid className='mt-30'>
            <div className='col-span-4 flex justify-end flex-col'>
              <Image
                width={452}
                height={480}
                alt=''
                src='/pics/projects/novoseltsevo/05.png'
              />
            </div>
            <div className='col-span-8'>
              <Image
                width={1160}
                height={768}
                alt=''
                src='/pics/projects/novoseltsevo/04.png'
              />
              <span className='text-body-caption mt-2'>
                {t('zoning_scheme.caption')}
              </span>
            </div>
          </Grid>
          <Grid className='mt-50'>
            <div className='col-span-8'>
              <Image
                width={1160}
                height={720}
                alt=''
                src='/pics/projects/novoseltsevo/06.png'
              />
              <span className='text-body-caption mt-2'>
                {t('view.private_zone')}
              </span>
            </div>
            <div className='col-span-4'>
              <Image
                width={560}
                height={720}
                alt=''
                src='/pics/projects/novoseltsevo/07.png'
              />
              <span className='text-body-caption mt-2'>
                {t('view.sports_zone')}
              </span>
            </div>
            <div className='col-span-8 mt-10'>
              <Image
                width={1160}
                height={720}
                alt=''
                src='/pics/projects/novoseltsevo/08.png'
              />
              <span className='text-body-caption mt-2'>
                {t('view.street_private_zone')}
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <span className='text-h4'>{t('concept.greenery')}</span>
            </div>
            <ConceptionCard
              image='/pics/projects/novoseltsevo/09.png'
              title={t('concept.islands_contemplation.title')}
              subTitles={[
                t('concept.islands_contemplation.subtitle1'),
                t('concept.islands_contemplation.subtitle2'),
                t('concept.islands_contemplation.subtitle3'),
              ]}
            />
            <ConceptionCard
              image='/pics/projects/novoseltsevo/10.png'
              title={t('concept.islands_action.title')}
              subTitles={[
                t('concept.islands_action.subtitle1'),
                t('concept.islands_action.subtitle2'),
              ]}
            />
            <ConceptionCard
              image='/pics/projects/novoseltsevo/11.png'
              title={t('concept.islands_touch.title')}
              subTitles={[
                t('concept.islands_touch.subtitle1'),
                t('concept.islands_touch.subtitle2'),
              ]}
            />
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <span className='text-h4'>{t('general_plan.title')}</span>
            </div>
            <div className='col-span-12 mt-12'>
              <Image
                alt=''
                src='/pics/projects/novoseltsevo/12.png'
                width={1760}
                height={940}
              />
              <span className='text-h5 mt-10 block'>
                {t('general_plan.description')}
              </span>
            </div>
          </Grid>
        </section>
        <section className='mt-20 space-y-10'>
          <FragmentCard
            image='/pics/projects/novoseltsevo/13.png'
            title={t('fragment.01.title')}
            description={t('fragment.01.description')}
          />
          <FragmentCard
            image='/pics/projects/novoseltsevo/14.png'
            title={t('fragment.02.title')}
            description={t('fragment.02.description')}
          />
          <FragmentCard
            image='/pics/projects/novoseltsevo/15.png'
            title={t('fragment.03.title')}
            description={t('fragment.03.description')}
          />
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default NovoseltsevoPage;
