import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { addLeadingZero, makePicLink } from '@/utils';
import React, { FC } from 'react';
import { createTranslation } from '../../../../i18n/server';
import Grid from '@/components/Grid';
import Image from 'next/image';
import { MapDescRow } from '@/components/MapDescRow';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import { ExplicationRow } from '@/components/ExplicationRow';
import ImageWithCaption from '@/components/ImageWithCaption';
import Collapse from '@/components/Collapse';
import OtherProjects from '@/components/OtherProjects';

const picLink = makePicLink('darino');

const mapDescData = [
  { title: '40 км', subTitle: 'distance.to_mkad' },
  { title: '12 км', subTitle: 'distance.to_istra' },
  { title: '14 км', subTitle: 'distance.to_railway_station_istra' },
  { title: '50 км', subTitle: 'distance.to_sheremetyevo_airport' },
  { title: '58 км', subTitle: 'distance.to_pyatnitskoye_shosse_metro_station' },
];

const mapSpaceDescData = [
  { title: '7610 м²', desc: 'area.roadway_surface_area' },
  { title: '5554 м²', desc: 'area.pedestrian_surface_area' },
  { title: '1520 м²', desc: 'area.recreational_zones_loose_surfaces_area' },
  { title: '714 м²', desc: 'area.recreational_zones_loose_surfaces_area' },
  { title: '327 шт', desc: 'count.projected_trees' },
  { title: '73 шт', desc: 'count.lighting_elements' },
];

const surfaces = [
  { text: 'Асфальтированная проезжая часть', icon: 'bg-[#939393]' },
  { text: 'Проезжая часть из бетонной плитки', icon: 'bg-[#C4C4C4]' },
  {
    text: 'Техническая зона тротуара \nиз бетонной плитки',
    icon: 'bg-[#B5B4B0]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#C5C4C2]' },
  {
    text: 'Входные и рекреационные зоны \nиз гранитного отсева',
    icon: 'bg-[#CAAC94]',
  },
  { text: 'Рекреационные зоны \nиз деревянного настила', icon: 'bg-[#CDA172]' },
];

const surfaces2 = [
  { text: 'Асфальтированная проезжая часть', icon: 'bg-[#939393]' },
  { text: 'Проезжая часть из бетонной плитки', icon: 'bg-[#C4C4C4]' },
  {
    text: 'Техническая зона тротуара \nиз бетонной плитки',
    icon: 'bg-[#B5B4B0]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#C5C4C2]' },
  {
    text: 'Входные и рекреационные зоны \nиз гранитного отсева',
    icon: 'bg-[#CAAC94]',
  },
  {
    text: 'Рекреационные зоны из деревянного настила',
    icon: 'bg-[#CDA172]',
  },
  { text: 'Покрытие игровых зон из мульчи', icon: 'bg-[#CDA172]' },
];

const surfaces3 = [
  { text: 'Асфальтированная проезжая часть', icon: 'bg-[#939393]' },
  {
    text: 'Техническая зона тротуара \nиз бетонной плитки',
    icon: 'bg-[#C4C4C4]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#B5B4B0]' },
  {
    text: 'Рекреационные зоны из бетона',
    icon: 'bg-[#C5C4C2]',
  },
  {
    text: 'Входные и рекреационные зоны \nиз гранитного отсева',
    icon: 'bg-[#CAAC94]',
  },
  { text: 'Рекреационные зоны из деревянного настила', icon: 'bg-[#CDA172]' },
];

const aksonometry = [
  'Пешеходный переход',
  'Павильон',
  'Столики',
  'Место встреч',
  'Палисадники',
];

const aksonometry2 = [
  'Площадка «Гнездо» для детей 5–10 лет',
  'Песочница для детей 1–5 лет',
  'Место для отдыха и обедов',
  'Горка-башня для детей 10+ лет',
  'Лазалка для детей 10+ лет',
];

const aksonometry3 = [
  'Зона барбекю',
  'Амфитеатр',
  'Пинг-понг',
  'Лежаки',
  'Фудтрак под навесом',
];

const explicationData = [
  { text: 'Асфальтированная проезжая часть', icon: 'bg-[#939393]' },
  { text: 'Проезжая часть из бетонной плитки', icon: 'bg-[#C5C4C2]' },
  {
    text: 'Техническая зона тротуара \nиз бетонной плитки',
    icon: 'bg-[#B5B4B0]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#C4C4C4]' },
  {
    text: 'Входные и рекреационные зоны \nиз гранитного отсева',
    icon: 'bg-[#CAAC94]',
  },
  { text: 'Рекреационные зоны из деревянного настила', icon: 'bg-[#CDA172]' },
  {
    text: 'Покрытие спортивных зон из резиновой крошки',
    icon: 'bg-twoColorGradient',
  },
];

const zonesDataMob = [
  {
    title: 'darino.zones.welcome_zone',
    desc: 'darino.zones.welcome_zone_desc',
    image: (
      <Image key={1} alt='' src={picLink('07')} width={480} height={300} />
    ),
    surfaceImage: (
      <Image key={2} alt='' src={picLink('08')} width={480} height={340} />
    ),
    //TOO TIRED TO FIX, FUCK THIS
    surfaces: explicationData,
  },
  {
    title: 'darino.zones.recreation_zone',
    desc: 'darino.zones.recreation_zone_desc',
    image: (
      <Image key={1} alt='' src={picLink('10')} width={480} height={300} />
    ),
    axonometry: {
      image: (
        <Image key={2} alt='' src={picLink('31')} width={480} height={340} />
      ),
      data: aksonometry,
    },
    surfaceImage: <Image alt='' src={picLink('28')} width={480} height={286} />,
    surfaces,
  },
  {
    title: 'darino.zones.children_playground',
    desc: 'darino.zones.children_playground_desc',
    image: (
      <Image key={1} alt='' src={picLink('13')} width={480} height={300} />
    ),
    axonometry: {
      image: (
        <Image key={2} alt='' src={picLink('29')} width={480} height={280} />
      ),
      data: aksonometry2,
    },
    surfaceImage: <Image alt='' src={picLink('30')} width={480} height={340} />,
    surfaces: surfaces2,
  },
  {
    title: 'darino.zones.bbq_zone',
    desc: 'darino.zones.bbq_zone_desc',
    image: (
      <Image key={1} alt='' src={picLink('16')} width={480} height={300} />
    ),
    axonometry: {
      image: (
        <Image key={2} alt='' src={picLink('32')} width={480} height={288} />
      ),
      data: aksonometry3,
    },
    surfaceImage: <Image alt='' src={picLink('18')} width={480} height={270} />,
    surfaces: surfaces2,
  },
];

const DarinoMapDescRow: FC<{ title: string; desc: string }> = ({
  desc,
  title,
}) => (
  <Grid
    colsXL={4}
    cols={8}
    colsM={12}
    className='border-b border-medium-grey pb-4 xl:pb-2'
  >
    <div className='md:grid col-span-3 md:col-span-3 xl:col-span-2'>
      <span className='text-h3-mob md:text-h5 xl:text-h3 font-medium'>
        {title}
      </span>
    </div>
    <div className='col-span-9 md:col-span-5 xl:col-span-2'>
      <span className='text-body-regular-mob md:text-body-regular font-light'>
        {desc}
      </span>
    </div>
  </Grid>
);

const DarinoPage = async () => {
  const { t } = await createTranslation('common');
  return (
    <div className='mt-30 lg:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={t('darino.title')}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          status={t('status.in_release_process')}
          area={t('darino.area')}
          location={t('darino.location')}
          subTitle={
            <span className='md:text-h4 text-h4-mob font-medium whitespace-pre-wraptracking-normal'>
              <span className='hidden md:inline-block'>
                {t('darino.subTitle')}
              </span>
              <span className='md:hidden'>{t('darino.subTitle_mobile')}</span>
            </span>
          }
          type={t('darino.type')}
          year='2023'
        />
      </section>
      <Image
        className='mt-20 sm:mt-10 md:hidden'
        src={picLink('25')}
        width={480}
        height={364}
        alt=''
      />
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-8 md:mt-50'>
            <div className='hidden md:block md:col-span-8'>
              <Image src={picLink('03')} width={1160} height={771} alt='' />
            </div>
            <div className='col-span-2 md:col-span-4 space-y-6 md:space-y-0'>
              {mapDescData.map(({ subTitle, title }, index) => (
                <MapDescRow
                  title={title}
                  subTitle={t(subTitle)}
                  horizontal
                  key={title + index}
                />
              ))}
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                {t('darino.line_park')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-4 mt-4 md:mt-0'>
              <span className='text-body-regular font-light'>
                {t('darino.line_park_desc')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-4 hidden md:block'>
              <Image src={picLink('04')} width={560} height={327} alt='' />
            </div>
            <div className='col-span-2 md:col-span-12 mt-30 hidden md:block'>
              <Image src={picLink('05')} width={1760} height={210} alt='' />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <section className='md:hidden'>
        <Image
          className='my-10'
          src={picLink('26')}
          width={480}
          height={81}
          alt=''
        />
        <Image alt='' src={picLink('27')} width={480} height={394} />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-12 mb-16 md:mb-40'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                {t('darino.map_desc')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('06')} width={1123} height={943} />
            </div>
            <div className='mt-16 md:mt-0 col-span-2 md:col-span-4 md:border-l border-grey md:pl-10'>
              <div className='flex flex-col space-y-6 xl:space-y-10'>
                {mapSpaceDescData.map(({ desc, title }, index) => (
                  <DarinoMapDescRow
                    desc={t(desc)}
                    title={title}
                    key={index + title}
                  />
                ))}
              </div>
            </div>
            <div className='mt-30 col-span-2 md:hidden'>
              {zonesDataMob.map((item) => (
                <Collapse
                  key={item.title}
                  title={t(item.title)}
                  borderColor='border-medium-grey'
                >
                  <span className='text-body-regular-mob font-light'>
                    {t(item.desc)}
                  </span>
                  <div className='mt-10'>{item.image}</div>
                  {item.axonometry && (
                    <Grid className='mt-10'>
                      <div className='col-span-2 mb-6'>
                        <span>{t('darino.axonometry')}</span>
                      </div>
                      <div className='col-span-2'>{item.axonometry.image}</div>
                      <div className='col-span-1 text-body-caption-10 font-medium'>
                        <div className='flex'>
                          <div className='flex flex-col space-y-2'>
                            {item.axonometry.data
                              .slice(0, 2)
                              .map((item, key) => (
                                <span key={item + key} className='mr-6'>
                                  {addLeadingZero(key + 1)} {item}
                                </span>
                              ))}
                          </div>
                          <div className='flex flex-col space-y-2'>
                            {item.axonometry.data
                              .slice(0, 2)
                              .map((item, key) => (
                                <span key={item + key} className='mr-6'>
                                  {addLeadingZero(key + 1)} {item}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    </Grid>
                  )}
                  <div className='mt-10'>{item.surfaceImage}</div>
                  <Grid>
                    <div className='col-span-2 block my-6'>
                      <span className='text-body-regular-mob font-medium'>
                        {t('darino.surfaces')}
                      </span>
                    </div>
                    <div className='col-span-1 space-y-4'>
                      {item.surfaces
                        .slice(0, item.surfaces.length > 6 ? 4 : 3)
                        .map((item, index) => (
                          <ExplicationRow {...item} key={item.icon + index} />
                        ))}
                    </div>
                    <div className='col-span-1 space-y-4'>
                      {item.surfaces
                        .slice(item.surfaces.length > 6 ? 4 : 3)
                        .map((item, index) => (
                          <ExplicationRow {...item} key={item.icon + index} />
                        ))}
                    </div>
                  </Grid>
                </Collapse>
              ))}
            </div>
          </Grid>
        </section>
        <section className='md:block hidden'>
          <Grid className='mt-50 pt-6 border-t border-medium-grey'>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('07')} width={1160} height={725} />
            </div>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h4 font-medium block mb-4'>
                {t('darino.zones.welcome_zone')}
              </span>
              <span className='text-body-regular font-light'>
                {t('darino.zones.welcome_zone_desc')}
              </span>
            </div>
          </Grid>
        </section>
        <section className='md:block hidden'>
          <Grid className='mt-30'>
            <div className='col-span-2 md:col-span-4 flex flex-end flex-col justify-end space-y-10'>
              {explicationData.map((item, index) => (
                <ExplicationRow {...item} key={item.icon + index} />
              ))}
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('08')} width={1160} height={820} />
            </div>
          </Grid>
        </section>
        <section className='md:block hidden'>
          <Grid className='mt-50 pt-6 border-t border-medium-grey'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h4 font-medium block mb-4'>
                {t('darino.zones.recreation_zone')}
              </span>
              <span className='text-body-regular font-light'>
                {t('darino.zones.recreation_zone_desc')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('10')} width={1160} height={725} />
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('11')} width={1160} height={690} />
            </div>
            <div className='col-span-2 md:col-span-4 bg-beige p-10'>
              <span className='text-h4 font-medium'>
                {t('darino.axonometry')}
              </span>
              <div className='flex flex-col space-y-4 mt-6'>
                {aksonometry.map((item, index) => (
                  <span
                    className='text-body-regular font-medium'
                    key={item + index}
                  >
                    {addLeadingZero(index + 1)}–{item}
                  </span>
                ))}
              </div>
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-2 md:col-span-4 flex justify-end flex-col'>
              <span className='text-h5-regular font-light'>
                {t('darino.surfaces')}
              </span>
              <div className='flex flex-col space-y-6 mt-8'>
                {surfaces.map((item, index) => (
                  <ExplicationRow {...item} key={item.text + index} />
                ))}
              </div>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('12')} width={1160} height={678} />
            </div>
          </Grid>
        </section>
        <section className='hidden md:block'>
          <Grid className='mt-50 border-t border-medium-grey pt-6'>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('13')} width={1160} height={724} />
            </div>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h4 font-medium block mb-4'>
                {t('darino.zones.children_playground')}
              </span>
              <span className='text-body-regular font-light md:whitespace-pre-wrap xl:whitespace-normal'>
                {t('darino.zones.children_playground_desc')}
              </span>
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-2 md:col-span-4 p-10 bg-beige'>
              <span className='text-h4 font-medium'>
                {t('darino.axonometry')}
              </span>
              <div className='flex flex-col space-y-4 mt-6'>
                {aksonometry2.map((item, index) => (
                  <span key={item} className='text-body-regular font-medium'>
                    {addLeadingZero(index + 1)}–{item}
                  </span>
                ))}
              </div>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('14')} width={1160} height={698} />
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-2 md:col-span-4 flex justify-end flex-col'>
              <span className='text-h5-regular font-light'>
                {t('darino.surfaces')}
              </span>
              <div className='flex flex-col space-y-6 mt-8'>
                {surfaces2.map((item, index) => (
                  <ExplicationRow {...item} key={item.text + index} />
                ))}
              </div>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('15')} width={1160} height={612} />
            </div>
          </Grid>
        </section>
        <section className='hidden md:block'>
          <Grid className='mt-50 pt-6 border-t border-medium-grey'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h4 font-medium'>
                {t('darino.zones.bbq_zone')}
              </span>
              <span className='text-body-regular font-light block mt-4'>
                {t('darino.zones.bbq_zone_desc')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('16')} width={1160} height={725} />
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('17')} width={1160} height={698} />
            </div>
            <div className='col-span-2 md:col-span-4 p-10 bg-beige'>
              <span className='text-h4 font-medium'>
                {t('darino.axonometry')}
              </span>
              <div className='flex flex-col space-y-4 mt-6'>
                {aksonometry3.map((item, index) => (
                  <span key={item} className='text-body-regular font-medium'>
                    {addLeadingZero(index + 1)}–{item}
                  </span>
                ))}
              </div>
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-2 md:col-span-4 flex justify-end flex-col'>
              <span className='text-h5-regular font-light'>
                {t('darino.surfaces')}
              </span>
              <div className='flex flex-col space-y-6 mt-8'>
                {surfaces3.map((item, index) => (
                  <ExplicationRow {...item} key={item.text + index} />
                ))}
              </div>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image alt='' src={picLink('18')} width={1160} height={648} />
            </div>
          </Grid>
        </section>
        <section className='hidden md:block'>
          <Grid className='mt-50 border-t border-medium-grey pt-6'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h4 font-medium'>
                {t('darino.zones.linear_zone')}
              </span>
              <span className='text-body-regular md:font-medium xl:font-light block mt-4'>
                {t('darino.zones.linear_zone_desc')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <ImageWithCaption
                src={picLink('19')}
                title='Вид на променад'
                width={1160}
                height={726}
              />
            </div>
            <div className='col-span-2 md:col-span-12 my-20'>
              <span className='text-h5 font-medium'>
                {t('darino.linear_zone_title')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-12'>
              <Image alt='' src={picLink('20')} width={1760} height={209} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 md:mt-60'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                {t('darino.zones2.alley')}
              </span>
              <span className='block text-body-regular-mob md:text-body-regular font-light mt-4 md:mt-6'>
                {t('darino.zones2.alley_desc')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image
                alt=''
                className='hidden md:block xl:hidden'
                src={picLink('21')}
                width={840}
                height={848}
              />
              <Image
                className='hidden xl:block'
                alt=''
                src={picLink('24')}
                width={1160}
                height={957}
              />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        className='mt-20 md:hidden'
        alt=''
        src={picLink('24')}
        width={480}
        height={423}
      />
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-30 md:mt-60'>
            <div className='col-span-2 md:col-span-8'>
              <Image
                alt=''
                className='hidden md:block'
                src={picLink('22')}
                width={1160}
                height={828}
              />
            </div>
            <div className='col-span-2 md:col-span-4 flex flex-col justify-between'>
              <div className='flex flex-col'>
                <span className='text-h3-mob md:text-h4 font-medium'>
                  {t('darino.zones2.promenade')}
                </span>
                <span className='block text-body-regular-mob md:text-body-regular font-light mt-4 md:mt-6'>
                  {t('darino.zones2.promenade_desc')}
                </span>
                <span className='block text-body-regular-mob md:text-body-regular font-light mt-4'>
                  {t('darino.zones2.promenade_desc2')}
                </span>
              </div>
              <span className='hidden md:block text-body-regular font-light text-grey'>
                {t('darino.zones2.promenade_desc3')}
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        alt=''
        className='md:hidden mt-20'
        src={picLink('22')}
        width={480}
        height={371}
      />

      <PageMarginWithTitle>
        <Grid className='md:hidden'>
          <div className='col-span-2'>
            <span className='text-body-caption-10 block mt-10 font-light text-grey'>
              {t('darino.zones2.promenade_desc3')}
            </span>
          </div>
        </Grid>
        <section>
          <Grid className='mt-30 md:mt-60'>
            <div className='col-span-2 md:col-span-4 flex flex-col justify-between'>
              <div className='flex flex-col'>
                <span className='text-h3-mob md:text-h4 font-medium'>
                  {t('darino.zones2.garden_park')}
                </span>
                <span className='block text-body-regular-mob md:text-body-regular font-light mt-6 md:whitespace-pre-wrap xl:whitespace-normal'>
                  {t('darino.zones2.garden_park_desc')}
                </span>
              </div>
              <span className='hidden md:block text-grey text-body-caption-10 md:text-body-regular font-light'>
                {t('darino.zones2.garden_park_desc2')}
              </span>
            </div>
            <div className='col-span-2 md:col-span-8 md:block hidden'>
              <Image alt='' src={picLink('23')} width={1160} height={850} />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        alt=''
        className='mt-20 mb-10 md:hidden'
        src={picLink('23')}
        width={480}
        height={403}
      />
      <PageMarginWithTitle>
        <Grid>
          <div className='col-span-2'>
            <span className='md:hidden text-grey text-body-caption-10 font-light block'>
              {t('darino.zones2.garden_park_desc2')}
            </span>
          </div>
        </Grid>
      </PageMarginWithTitle>
      <OtherProjects />
    </div>
  );
};

export default DarinoPage;
