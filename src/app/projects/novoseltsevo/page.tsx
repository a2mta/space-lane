import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import React, { FC, ReactElement } from 'react';
import { createTranslation } from '../../../../i18n/server';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Image from 'next/image';
import { MapDescRow } from '@/components/MapDescRow';
import { makePicLink } from '@/utils';
import ImageWithCaption from '@/components/ImageWithCaption';
import classNames from 'classnames';

const picLink = makePicLink('novoseltsevo');

const zoneData = [
  {
    text: 'Границы территории благоустройства',
    icon: 'border-[#DD725B] border',
  },
  {
    text: 'Входы на участок',
    icon: <Image alt='' width={60} height={10} src={picLink('17', 'svg')} />,
  },
  {
    text: 'Граница частного и общественного пространства',
    icon: <Image alt='' width={60} height={3} src={picLink('18', 'svg')} />,
  },
  {
    text: 'Основной прогулочный путь',
    icon: 'bg-[#152729]',
  },
  {
    text: 'Второстепенный прогулочный путь',
    icon: 'bg-[#D8A83B]',
  },
  {
    text: 'Приподнятое озеленение',
    icon: 'bg-[#46634C]',
  },
  {
    text: 'Спортивная зона',
    icon: 'bg-[#AAD4DE]',
  },
  {
    text: 'Зона детских игровых площадок',
    icon: 'bg-[#DB705A]',
  },
  {
    text: 'Зона скейт-площадки',
    icon: 'bg-[#6F84A4]',
  },
  {
    text: 'Зона пляжа',
    icon: 'bg-[#E4CC92]',
  },
  {
    text: 'Зона отдыха',
    icon: 'bg-[#F2CECA]',
  },
  {
    text: 'Прибрежное озеленение',
    icon: 'bg-[#91A27B]',
  },
];

const conceptionCardsData = [
  {
    image: picLink('09'),
    titleKey: 'concept.islands_contemplation.title',
    subTitlesKeys: [
      'concept.islands_contemplation.subtitle1',
      'concept.islands_contemplation.subtitle2',
      'concept.islands_contemplation.subtitle3',
    ],
  },
  {
    image: picLink('10'),
    titleKey: 'concept.islands_action.title',
    subTitlesKeys: [
      'concept.islands_action.subtitle1',
      'concept.islands_action.subtitle2',
    ],
  },
  {
    image: picLink('11'),
    titleKey: 'concept.islands_touch.title',
    subTitlesKeys: [
      'concept.islands_touch.subtitle1',
      'concept.islands_touch.subtitle2',
    ],
  },
];

const ZoneRow: FC<{ text: string; icon?: string | ReactElement }> = ({
  text,
  icon,
}) => (
  <div className='flex'>
    {typeof icon === 'string' ? (
      <span
        className={classNames('mt-1 min-w-[60px] block h-[10px] mr-2', icon)}
      />
    ) : (
      <div className='min-w-[60px] mr-2 mt-1'>{icon}</div>
    )}
    <span className='text-body-caption-10 font-medium'>{text}</span>
  </div>
);

const ConceptionCard: FC<{
  image: string;
  title: string;
  subTitles: string[];
}> = ({ image, subTitles, title }) => (
  <div className='hidden col-span-4 md:flex flex-col'>
    <Image src={image} alt='' width={560} height={370} />
    <span className='text-h5 mt-10'>{title}</span>
    <div className='flex flex-col space-y-4 mt-6 text-body-regular'>
      {subTitles.map((subTitle, index) => (
        <span key={subTitle + index}>{`— ${subTitle}`}</span>
      ))}
    </div>
  </div>
);

const ConceptionCardMob: FC<{
  image: string;
  title: string;
  subTitles: string[];
}> = ({ image, subTitles, title }) => (
  <Grid>
    <div className='col-span1'>
      <Image src={image} alt='' width={210} height={152} />
    </div>
    <div className='col-span-1'>
      <span className='text-body-regular-mob font-medium'>{title}</span>
      <div className='flex flex-col space-y-2 text-body-caption-10 mt-4'>
        {subTitles.map((subTitle, index) => (
          <span key={subTitle + index}>{`— ${subTitle}`}</span>
        ))}
      </div>
    </div>
  </Grid>
);

const FragmentCard: FC<{
  image: string;
  title: string;
  description: string;
}> = ({ description, image, title }) => (
  <Grid>
    <div className='col-span-2 md:col-span-4 border-t border-medium-grey'>
      <span className='text-h4 mt-6 block'>{title}</span>
      <span className='mt-4 text-body-regular block'>{description}</span>
    </div>
    <div className='col-span-2 md:col-span-8'>
      <Image alt='' width={1160} height={820} src={image} />
    </div>
  </Grid>
);

const NovoseltsevoPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-30 md:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={t('page_titles.novoseltsevo')}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          status={t('status.concept')}
          area={t('area.5_4_ha')}
          location={t('location.novoseltsevo')}
          subTitle={t('subTitle.novoseltsevo')}
          type={t('type.research_landscaping')}
          year='2022'
        />
      </section>
      <Image
        className='mt-20 block md:hidden'
        width={1160}
        height={822}
        alt='moscow map'
        src={picLink('16')}
      />
      <PageMarginWithTitle>
        <section>
          {/* Mobile */}
          <Grid className='grid md:hidden mt-16'>
            <div className='col-span-2 space-y-6'>
              <MapDescRow
                horizontal
                title='45 км'
                subTitle={t('distance.to_kremlin')}
              />
              <MapDescRow
                horizontal
                title='28 км'
                subTitle={t('distance.to_altufyevo_metro_mob')}
              />
              <MapDescRow
                horizontal
                title='32 км'
                subTitle={t('distance.to_sheremetyevo_airport')}
              />
              <MapDescRow
                horizontal
                title='17 км'
                subTitle={t('distance.to_khlebnikovo_station')}
              />
            </div>
          </Grid>
          {/*  */}
          <Grid className='hidden md:grid mt-50'>
            <div className='col-span-2 md:col-span-4 space-y-6'>
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
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                {t('project_ideas.title')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8 space-y-4 md:space-y-0'>
              <span className='text-body-regular-mob md:text-body-regular font-light block md:inline'>
                {t('project_ideas.description')}
              </span>
              <span className='text-body-regular-mob md:text-body-regular font-light block md:inline'>
                {t('project_ideas.description_2')}
              </span>
              <span className='text-body-regular-mob md:text-body-regular font-light block md:inline'>
                {t('project_ideas.description_3')}
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <ImageWithCaption
        className='md:hidden mt-10'
        fullWidth
        width={1160}
        height={768}
        src='/pics/projects/novoseltsevo/04.png'
        title={t('zoning_scheme.caption')}
      />
      <PageMarginWithTitle>
        <section className='md:hidden'>
          <Grid className='mt-6'>
            <div className='col-span-1 space-y-4'>
              {zoneData.slice(0, 5).map((zone, index) => (
                <ZoneRow {...zone} key={zone.text + index} />
              ))}
            </div>
            <div className='col-span-1 space-y-4'>
              {zoneData.slice(5).map((zone, index) => (
                <ZoneRow {...zone} key={zone.text + index} />
              ))}
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 hidden md:grid'>
            <div className='col-span-2 md:col-span-4 flex justify-end flex-col'>
              <Image width={452} height={480} alt='' src={picLink('05')} />
            </div>
            <div className='col-span-2 md:col-span-8'>
              <ImageWithCaption
                width={1160}
                height={768}
                src={picLink('04')}
                title={t('zoning_scheme.caption')}
              />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>

      {/* MOBILE */}
      <section className='md:hidden mt-30'>
        <ImageWithCaption
          width={480}
          height={298}
          fullWidth
          title={t('view.private_zone')}
          src={picLink('06')}
        />
        <PageMarginWithTitle>
          <Grid className='my-10'>
            <div className='col-span-1 col-start-2'>
              <ImageWithCaption
                width={480}
                height={298}
                className='mr-[-20px]'
                title={t('view.sports_zone')}
                src={picLink('07')}
              />
            </div>
          </Grid>
        </PageMarginWithTitle>
        <ImageWithCaption
          width={480}
          height={298}
          fullWidth
          title={t('view.street_private_zone')}
          src={picLink('08')}
        />
      </section>
      {/*  */}
      <PageMarginWithTitle>
        <section>
          <Grid className='hidden md:grid mt-50'>
            <div className='col-span-2 md:col-span-8'>
              <Image width={1160} height={720} alt='' src={picLink('06')} />
              <span className='text-body-caption mt-2'>
                {t('view.private_zone')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <Image width={560} height={720} alt='' src={picLink('07')} />
              <span className='text-body-caption mt-2'>
                {t('view.sports_zone')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8 mt-10'>
              <Image width={1160} height={720} alt='' src={picLink('08')} />
              <span className='text-body-caption mt-2'>
                {t('view.street_private_zone')}
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-2 md:col-span-12 mb-10 md:mb-16'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                {t('concept.greenery')}
              </span>
            </div>
            
            {conceptionCardsData.map((cardData, index) => (
              <ConceptionCard
                key={index}
                image={cardData.image}
                title={t(cardData.titleKey)}
                subTitles={cardData.subTitlesKeys.map((subTitleKey) =>
                  t(subTitleKey)
                )}
              />
            ))}

            <div className='col-span-2 space-y-6 md:hidden'>
              {conceptionCardsData.map((cardData, index) => (
                <ConceptionCardMob
                  key={index}
                  image={cardData.image}
                  title={t(cardData.titleKey)}
                  subTitles={cardData.subTitlesKeys.map((subTitleKey) =>
                    t(subTitleKey)
                  )}
                />
              ))}
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-2 md:col-span-12'>
              <span className='text-h4'>{t('general_plan.title')}</span>
            </div>
            <div className='col-span-2 md:col-span-12 mt-12'>
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
