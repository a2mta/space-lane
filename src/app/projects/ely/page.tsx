import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { addLeadingZero, makePicLink } from '@/utils';
import React, { FC, ReactElement } from 'react';
import { createTranslation } from '../../../../i18n/server';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Grid from '@/components/Grid';
import Image from 'next/image';
import classNames from 'classnames';
import ImageWithCaption from '@/components/ImageWithCaption';
import { MapDescRow } from '@/components/MapDescRow';
import { ExplicationRow } from '@/components/ExplicationRow';
import ImageSlider from '@/components/Slider';
import MobileSlider from '@/components/MobileSlider';
import Collapse from '@/components/Collapse';
const picLink = makePicLink('ely');

const zonePlanData = [
  {
    title: 'ely.visitor_zone',
    items: [
      {
        n: '1.1',
        title: 'ely.freezer',
        area: '304.8',
      },
      {
        n: '1.2',
        title: 'ely.hall',
        area: '32.4',
      },
      {
        n: '1.3',
        title: 'ely.bathroom',
        area: '11.3',
      },
      {
        n: '1.4',
        title: 'ely.bathroom',
        area: '11.7',
      },
      {
        n: '1.5',
        title: 'ely.cloakroom',
        area: '7.0',
      },
      {
        n: '1.6',
        title: 'ely.dining_room',
        area: '128.3',
      },
      {
        n: '1.7',
        title: 'ely.dining_room',
        area: '128.3',
      },
    ],
  },
  {
    title: 'ely.staff_zone',
    items: [
      {
        n: '1.11',
        title: 'ely.entrance_hall',
        area: '3.2',
      },
      {
        n: '1.12',
        title: 'ely.dressing_room',
        area: '8.4',
      },
      {
        n: '1.13',
        title: 'ely.bathroom',
        area: '2.0',
      },
      {
        n: '1.14',
        title: 'ely.staff_room',
        area: '9.6',
      },
    ],
  },
  {
    title: 'ely.technology_zone',
    items: [
      {
        n: '1.15',
        title: 'ely.corridor',
        area: '25.2',
      },
      {
        n: '1.16',
        title: 'ely.loading_area',
        area: '7.3',
      },
      {
        n: '1.17',
        title: 'ely.storage_room',
        area: '10.7',
      },
      {
        n: '1.18',
        title: 'ely.vegetable_storage',
        area: '14.1',
      },
      {
        n: '1.19',
        title: 'ely.pui',
        area: '4.5',
      },
      {
        n: '1.20',
        title: 'ely.freezer',
        area: '8.9',
      },
      {
        n: '1.21',
        title: 'ely.vegetable_workshop',
        area: '9.1',
      },
      {
        n: '1.22',
        title: 'ely.cold_workshop',
        area: '15.4',
      },
      {
        n: '1.23',
        title: 'ely.meat_fish_workshop',
        area: '14.5',
      },
      {
        n: '1.24',
        title: 'ely.hot_workshop',
        area: '31.5',
      },
      {
        n: '1.25',
        title: 'ely.distribution',
        area: '7.5',
      },
      {
        n: '1.26',
        title: 'ely.washing_room',
        area: '6.6',
      },
    ],
  },
];

const decorationData = [
  {
    title: 'ely.decoration_group',
    description: [
      'ely.coniferous_trees',
      'ely.decorative_groups',
      'ely.all_season_decor',
      'ely.decorative_elements',
    ],
    image: '24',
  },
  {
    title: 'ely.sensory_garden',
    description: [
      'ely.mixed_plants',
      'ely.texture_smell',
      'ely.additional_accents',
      'ely.decorative_elements',
    ],
    image: '25',
  },
  {
    title: 'ely.green_boulevard',
    description: [
      'ely.local_plants',
      'ely.natural_plantings',
      'ely.neutral_color_scheme',
      'ely.additional_accents',
    ],
    image: '26',
  },
];

const DecorationRow: FC<{
  title: string;
  description: string[];
  image: string;
}> = ({ description, image, title }) => (
  <Grid className='border-t border-medium-grey pt-6'>
    <div className='col-span-4'>
      <span className='text-h5'>{title}</span>
    </div>
    <div className='col-span-4 space-y-6'>
      {description.map((item, index) => (
        <span
          className='text-body-regular block'
          key={index + item}
        >{`— ${item}`}</span>
      ))}
    </div>
    <div className='col-span-4'>
      <Image alt='' width={560} height={360} src={picLink(image)} />
    </div>
  </Grid>
);

const ZoneDataRow: FC<{ text: string; icon?: string }> = ({ text, icon }) => (
  <Grid cols={4} colsXL={4}>
    <div className='col-span-2'>{text}</div>
    <div className='col-span-2'>
      <span className={classNames('w-28 block h-6 mr-4', icon)} />
    </div>
  </Grid>
);

const MaterialRow: FC<{ text: string; icon?: string | ReactElement }> = ({
  text,
  icon,
}) => (
  <Grid cols={4} colsXL={4}>
    <div className='col-span-1'>
      {typeof icon === 'string' ? (
        <span className={classNames('w-full block h-[26px] mr-4', icon)} />
      ) : (
        icon
      )}
    </div>
    <div className='col-span-3'>{text}</div>
  </Grid>
);

const TrendRow: FC<{
  title: string;
  description: string;
  icon: ReactElement;
}> = ({ description, icon, title }) => (
  <Grid
    cols={8}
    colsXL={8}
    className='border-t border-medium-grey pt-2 md:pt-0 md:border-none'
  >
    <div className='col-span-2 md:col-span-4'>
      <span className='text-h5-mob md:text-h5 font-medium'>{title}</span>
      <span className='text-body-regular-mob md:text-body-regular font-light block mt-4'>
        {description}
      </span>
    </div>
    <div className='col-start-2 md:col-start-5 col-span-1 md:col-span-4 mt-6 md:mt-0'>
      {icon}
    </div>
  </Grid>
);

const materialData = [
  {
    text: 'ely.materialData.walls_roofs_metal',
    icon: 'bg-[#62615F]',
  },
  {
    text: 'ely.materialData.walls_roofs_light',
    icon: <Image alt='' width={110} height={26} src={picLink('34')} />,
  },
  {
    text: 'ely.materialData.walls_basement',
    icon: 'bg-[#CCCCCD]',
  },
  {
    text: 'ely.materialData.window_profiles',
    icon: 'bg-[#888888]',
  },
];

const trendData = [
  {
    title: 'ely.trendData.nature_similarity',
    description: 'ely.trendData.nature_similarity_desc',
    icon: <Image alt='' width={464} height={368} src={picLink('21')} />,
  },
  {
    title: 'ely.trendData.landscape_opportunities',
    description: 'ely.trendData.landscape_opportunities_desc',
    icon: <Image alt='' width={560} height={218} src={picLink('22')} />,
  },
  {
    title: 'ely.trendData.green_priority',
    description: 'ely.trendData.green_priority_desc',
    icon: <Image alt='' width={560} height={412} src={picLink('23')} />,
  },
];

const solutionData = [
  {
    title: 'ely.solutionData.elements',
    description: 'ely.solutionData.elements_desc',
    icon: picLink('13'),
  },
  {
    title: 'ely.solutionData.local_centers',
    description: 'ely.solutionData.local_centers_desc',
    icon: picLink('14'),
  },
  {
    title: 'ely.solutionData.spatial_regulations',
    description: 'ely.solutionData.spatial_regulations_desc',
    icon: picLink('15'),
  },
  {
    title: 'ely.solutionData.space_optimization',
    description: 'ely.solutionData.space_optimization_desc',
    icon: picLink('16'),
  },
  {
    title: 'ely.solutionData.comprehensive_improvement',
    description: 'ely.solutionData.comprehensive_improvement_desc',
    icon: picLink('17'),
  },
  {
    title: 'ely.solutionData.routes',
    description: 'ely.solutionData.routes_desc',
    icon: picLink('18'),
  },
];

const SolutionCard: FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ description, icon, title }) => (
  <div className='mt-6 md:mt-32 md:col-span-4 border-t border-medium-grey md:border-grey pt-4'>
    <div className='flex justify-between'>
      <span className='text-body-caption-10 font-medium md:font-light md:text-h5'>
        {title}
      </span>
      <Image
        alt=''
        className='h-[34px] md:h-auto max-w-fit md:max-w-fit object-contain object-right'
        src={icon}
        width={110}
        height={68}
      />
    </div>
    <span className='mt-2 md:mt-6 block text-body-caption-mob font-light md:font-medium md:text-body-regular'>
      {description}
    </span>
  </div>
);

const zoneData = [
  { text: 'ely.zoneData.promenade', icon: 'bg-[#D56241]' },
  { text: 'ely.zoneData.sports_zone', icon: 'bg-[#CFA689]' },
  { text: 'ely.zoneData.green_square', icon: 'bg-[#5F7043]' },
  { text: 'ely.zoneData.small_square', icon: 'bg-[#9EA98E]' },
  { text: 'ely.zoneData.city_square', icon: 'bg-[#B6BC97]' },
  { text: 'ely.zoneData.green_transit', icon: 'bg-[#364835]' },
  { text: 'ely.zoneData.checkpoint_square', icon: 'bg-[#DCBDA8]' },
  { text: 'ely.zoneData.child_center', icon: 'bg-[#D69277]' },
  { text: 'ely.zoneData.parking', icon: 'bg-[#646464]' },
  { text: 'ely.zoneData.utility_zone', icon: 'bg-[#ABABA9]' },
];

const landScaping = [
  'ely.landScaping.birch_avenue',
  'ely.landScaping.welcome_area',
  'ely.landScaping.green_parking',
  'ely.landScaping.small_square',
  'ely.landScaping.main_square_exit',
  'ely.landScaping.shaded_rest_area',
  'ely.landScaping.play_lawn',
  'ely.landScaping.sun_loungers',
  'ely.landScaping.play_area',
  'ely.landScaping.amphitheater',
  'ely.landScaping.shelter_with_guard',
  'ely.landScaping.restaurant_terraces',
  'ely.landScaping.promenade',
  'ely.landScaping.green_buffer',
  'ely.landScaping.skate_park',
  'ely.landScaping.basketball_hoop',
  'ely.landScaping.hammocks',
  'ely.landScaping.swings',
  'ely.landScaping.fire_pit',
];

const buildingExplication = [
  'ely.buildingExplication.restaurant',
  'ely.buildingExplication.pavilion',
  'ely.buildingExplication.supermarket',
  'ely.buildingExplication.bar',
  'ely.buildingExplication.multi_functional_building',
  'ely.buildingExplication.child_center',
  'ely.buildingExplication.utility_block',
];

const explicationData = [
  {
    text: 'ely.explicationData.boundaries',
    icon: 'border-dashed border-[#676968] border',
  },
  { text: 'ely.explicationData.land_plots', icon: 'bg-[#969F6A]' },
  { text: 'ely.explicationData.public_areas', icon: 'bg-[#5F7043]' },
  { text: 'ely.explicationData.design_area', icon: 'bg-[#CC7755]' },
  { text: 'ely.explicationData.road_network', icon: 'bg-[#AEAEAC]' },
  { text: 'ely.explicationData.oopt_area', icon: 'bg-lineGradient' },
  {
    text: 'ely.explicationData.existing_buildings',
    icon: 'border border-[#676968]',
  },
  { text: 'ely.explicationData.residential_areas', icon: 'bg-[#D1D7D7]' },
  { text: 'ely.explicationData.water_bodies', icon: 'bg-[#A7C5E7]' },
];

const mapDescRowData = [
  { title: 'ely.mapDescRow.area', subTitle: 'ely.mapDescRow.area_sub' },
  {
    title: 'ely.mapDescRow.residents',
    subTitle: 'ely.mapDescRow.residents_sub',
  },
  {
    title: 'ely.mapDescRow.green_spaces',
    subTitle: 'ely.mapDescRow.green_spaces_sub',
  },
  {
    title: 'ely.mapDescRow.avg_land_area',
    subTitle: 'ely.mapDescRow.avg_land_area_sub',
  },
  {
    title: 'ely.mapDescRow.population_density',
    subTitle: 'ely.mapDescRow.population_density_sub',
  },
  {
    title: 'ely.mapDescRow.building_density',
    subTitle: 'ely.mapDescRow.building_density_sub',
  },
];

const pageInfo = {
  title: 'ely.pageInfo.title',
  coverLink2Title: 'ely.pageInfo.coverLink2Title',
  status: 'ely.pageInfo.status',
  area: 'ely.pageInfo.area',
  location: 'ely.pageInfo.location',
  subTitle: 'ely.pageInfo.subTitle',
  type: 'ely.pageInfo.type',
  year: 'ely.pageInfo.year',
};

const ElyPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={t(pageInfo.title)}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title={t(pageInfo.coverLink2Title)}
          status={t(pageInfo.status)}
          area={t(pageInfo.area)}
          location={t(pageInfo.location)}
          subTitle={t(pageInfo.subTitle)}
          type={t(pageInfo.type)}
          year={t(pageInfo.year)}
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-20 md:mt-50'>
            <div className='hidden md:block col-span-8 mt-13 border border-medium-grey py-14 px-10'>
              <Grid cols={8} colsXL={8}>
                <div className='col-span-3 space-y-4'>
                  <span className='block text-body-regular text-grey'>
                    <span className='font-semibold text-black'>
                      {t('ely.58_minutes_from_moscow.58')}
                    </span>{' '}
                    {t('ely.58_minutes_from_moscow.from_moscow')}
                  </span>
                  <span className='block text-body-regular text-grey'>
                    <span className='font-semibold text-black'>
                      {t('ely.52_minutes_from_ostafyevo_airport.52')}
                    </span>{' '}
                    {t(
                      'ely.52_minutes_from_ostafyevo_airport.from_ostafyevo_airport'
                    )}
                  </span>
                  <span className='block text-body-regular text-grey'>
                    <span className='font-semibold text-black'>
                      {t('ely.22_minutes_from_vnukovo_airport.22')}
                    </span>{' '}
                    {t(
                      'ely.22_minutes_from_vnukovo_airport.from_vnukovo_airport'
                    )}
                  </span>
                </div>
                <div className='col-span-4'>
                  <Image alt='' width={560} height={704} src={picLink('03')} />
                </div>
              </Grid>
            </div>
            <div className='col-span-2 md:hidden'>
              <Image alt='' width={440} height={634} src={picLink('38')} />
            </div>
            <div className='col-span-4 space-y-6 mt-10 md:mt-0 md:hidden'>
              {mapDescRowData.map(({ title, subTitle }, index) => (
                <MapDescRow
                  title={t(title)}
                  horizontal
                  subTitle={t(subTitle)}
                  key={index}
                />
              ))}
            </div>
            <div className='col-span-4 space-y-6 mt-10 md:mt-0 hidden md:block'>
              {mapDescRowData.map(({ title, subTitle }, index) => (
                <MapDescRow
                  title={t(title)}
                  subTitle={t(subTitle)}
                  key={index}
                />
              ))}
            </div>
          </Grid>
        </section>

        <section className='md:hidden mt-30'>
          <Grid>
            <div className='col-span-2'>
              <span className='text-h3-mob md:text-h4 font-medium block'>
                {t('ely.general_plan_scheme')}
              </span>
              <span className='text-body-regular-mob md:text-body-regular font-light mt-4 block'>
                {t('ely.entry_description')}
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      {/* MOBILE */}
      <section className='md:hidden'>
        <Image
          alt=''
          width={710}
          height={724}
          src={picLink('41')}
          className='mt-10 mb-6'
        />
        <PageMarginWithTitle>
          <section>
            <Grid>
              <div className='col-span-2'>
                <span className='text-h5-mob font-medium block mb-6'>
                  {t('ely.explication')}
                </span>
              </div>
              <div className='col-span-1 space-y-4'>
                {explicationData.slice(0, 5).map(({ icon, text }, index) => (
                  <ExplicationRow
                    text={t(text)}
                    icon={icon}
                    key={text + index}
                  />
                ))}
              </div>
              <div className='col-span-1 space-y-4'>
                {explicationData.slice(5).map(({ icon, text }, index) => (
                  <ExplicationRow
                    text={t(text)}
                    icon={icon}
                    key={text + index}
                  />
                ))}
              </div>
              <div className='col-span-2 mt-10'>
                <span className='text-body-caption-10 font-medium mb-2 block'>
                  {t('ely.checkpoint_group')}
                </span>
                <Image alt='' width={440} height={308} src={picLink('05')} />
              </div>
              <div className='col-span-2 mt-6'>
                <span className='text-body-caption-10 font-medium mb-2 block'>
                  {t('ely.green_boulevard')}
                </span>
                <Image alt='' width={440} height={308} src={picLink('06')} />
              </div>
            </Grid>
            <Grid className='mt-30'>
              <div className='col-span-2'>
                <span className='text-body-regular-mob font-light'>
                  {t('ely.entry_zone_structure')}
                </span>
              </div>
            </Grid>
          </section>
        </PageMarginWithTitle>
        <ImageWithCaption
          className='md:hidden mt-6'
          src={picLink('42')}
          width={408}
          height={318}
          fullWidth
          title={t('ely.photo_implementation_stage_1')}
        />
        <PageMarginWithTitle>
          <Grid>
            <div className='col-span-2 my-6'>
              <span className='text-body-regular-mob font-light'>
                {t('ely.walking_routes')}
              </span>
            </div>
          </Grid>
        </PageMarginWithTitle>
        <Image
          alt=''
          className='md:hidden'
          src={picLink('43')}
          width={480}
          height={558}
        />
        <PageMarginWithTitle className='mt-30'>
          <Grid>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium'>
                {t('ely.improvement_solutions')}
              </span>
            </div>
          </Grid>
        </PageMarginWithTitle>
        <Image
          src={picLink('44')}
          width={480}
          height={406}
          alt=''
          className='mt-10 mb-6'
        />
        <PageMarginWithTitle>
          <Grid className='text-body-caption-10 font-medium'>
            <div className='col-span-1 space-y-2'>
              {landScaping.slice(0, 10).map((item, index) => (
                <span className='block' key={item + index}>{`${addLeadingZero(
                  index + 1
                )} — ${t(item)}`}</span>
              ))}
            </div>
            <div className='col-span-1 space-y-2'>
              {landScaping.slice(10).map((item, index) => (
                <span className='block' key={item + index}>{`${addLeadingZero(
                  index + 11
                )} — ${t(item)}`}</span>
              ))}
            </div>
          </Grid>
          <Grid className='mt-6 border-t border-medium-grey pt-4'>
            <div className='col-span-2 mb-4 flex items-center'>
              <span className='text-body-regular font-medium'>
                {t('ely.building_explication')}
              </span>
              <span className='w-14 h-4 bg-orange block ml-4' />
            </div>
            <div className='col-span-1 text-body-caption-10 font-medium space-y-2'>
              {buildingExplication.slice(0, 4).map((item, index) => (
                <span className='block' key={item + index}>{`${addLeadingZero(
                  index + 1
                )} — ${t(item)}`}</span>
              ))}
            </div>
            <div className='col-span-1 text-body-caption-10 font-medium space-y-2'>
              {buildingExplication.slice(4).map((item, index) => (
                <span className='block' key={item + index}>{`${addLeadingZero(
                  index + 5
                )} — ${t(item)}`}</span>
              ))}
            </div>
          </Grid>
          <Grid className='mt-30'>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium'>
                {t('ely.visualization')}
              </span>
            </div>
            <div className='col-span-2'>
              <span className='text-body-regular-mob font-light block mt-4'>
                {t('ely.checkpoint_areas')}
              </span>
            </div>
          </Grid>
        </PageMarginWithTitle>
        <ImageWithCaption
          width={1160}
          className='mt-10 mb-12'
          height={820}
          fullWidth
          src={picLink('11')}
          title={t('ely.skate_park')}
        />
        <ImageWithCaption
          width={1160}
          height={820}
          fullWidth
          src={picLink('12')}
          title={t('ely.green_square_amphitheater')}
        />
        <PageMarginWithTitle className='mt-30'>
          <Grid>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium'>
                {t('ely.comprehensive_solution')}
              </span>
            </div>
            <div className='col-span-1'>
              {solutionData.slice(0, 3).map(({ title, description, icon }) => (
                <SolutionCard
                  description={t(description)}
                  icon={icon}
                  title={t(title)}
                  key={title}
                />
              ))}
            </div>
            <div className='col-span-1'>
              {solutionData.slice(3).map(({ title, description, icon }) => (
                <SolutionCard
                  description={t(description)}
                  icon={icon}
                  title={t(title)}
                  key={title}
                />
              ))}
            </div>
          </Grid>
        </PageMarginWithTitle>
        <MobileSlider
          className='mt-30'
          height={256}
          width={480}
          image1={{
            src: picLink('45'),
            title: t('ely.summer'),
          }}
          image2={{
            src: picLink('46'),
            title: t('ely.winter'),
          }}
        />
        <PageMarginWithTitle className='mt-30'>
          <Grid>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium'>
                {t('ely.lighting_concept')}
              </span>
              <div className='flex flex-col space-y-4 text-body-regular-mob font-light mt-4'>
                <span>{t('ely.dimming_proposal')}</span>
                <span>{t('ely.brightness_recommendation')}</span>
              </div>
            </div>
          </Grid>
        </PageMarginWithTitle>
        <ImageWithCaption
          className='mt-10'
          width={1160}
          height={820}
          fullWidth
          src={picLink('20')}
          title={t('ely.boulevard_walking_area')}
        />
        <PageMarginWithTitle className='mt-30'>
          <Grid>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium'>
                {t('ely.main_trends_zoning')}
              </span>
            </div>
            <div className='col-span-2 mt-10 space-y-10'>
              {trendData.map(({ description, icon, title }) => (
                <TrendRow
                  description={t(description)}
                  icon={icon}
                  title={t(title)}
                  key={title}
                />
              ))}
            </div>
            <div className='col-span-2 mt-10 space-y-6'>
              {decorationData.map(({ description, image, title }) => (
                <Collapse key={title} title={t(title)}>
                  <div className='flex flex-col text-body-regular-mob font-light space-y-4'>
                    {description.map((item, index) => (
                      <span key={item + index}>- {t(item)} </span>
                    ))}
                  </div>
                  <div className='relative aspect-video mt-6'>
                    <Image alt='' fill src={picLink(image)} />
                  </div>
                </Collapse>
              ))}
            </div>
            <div className='col-span-2 mt-30'>
              <span className='text-h3-mob font-medium'>
                {t('ely.architectural_concept')}
              </span>
              <Image
                className='my-10'
                alt=''
                width={480}
                height={340}
                src={picLink('27')}
              />
              <div className='flex flex-col space-y-4 text-body-regular-mob font-light'>
                <span>{t('ely.architectural_concept_description')}</span>
                <span>{t('ely.public_center_objects')}</span>
              </div>
            </div>
          </Grid>
        </PageMarginWithTitle>
        <ImageWithCaption
          className='mt-10'
          title={t('ely.evening_restaurant')}
          width={490}
          height={340}
          fullWidth
          src={picLink('27')}
        />
      </section>
      <PageMarginWithTitle className='hidden md:block'>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob md:text-h4 font-medium block'>
                {t('ely.general_plan_scheme')}
              </span>
              <span className='text-body-regular-mob md:text-body-regular font-light mt-4 block'>
                {t('ely.entry_description')}
              </span>
              <span className='hidden md:block text-h5-regular mt-10 mb-8'>
                {t('ely.explication')}
              </span>
              <div className='flex-col space-y-6 hidden md:flex'>
                {explicationData.map(({ icon, text }, index) => (
                  <ExplicationRow
                    text={t(text)}
                    icon={icon}
                    key={text + index}
                  />
                ))}
              </div>
            </div>
            <div className='col-span-2 md:col-span-5'>
              <Image alt='' width={710} height={724} src={picLink('04')} />
            </div>
            <div className='col-span-2 md:col-span-3 space-y-10'>
              <div className='flex flex-col'>
                <span className='text-body-caption font-medium md:text-body-regular md:font-light mb-2 md:mb-4'>
                  {t('ely.checkpoint_group')}
                </span>
                <Image alt='' width={410} height={289} src={picLink('05')} />
              </div>
              <div className='flex flex-col'>
                <span className='text-body-caption font-medium md:text-body-regular md:font-light mb-2 md:mb-4'>
                  {t('ely.green_boulevard')}
                </span>
                <Image alt='' width={410} height={284} src={picLink('06')} />
              </div>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-8 flex justify-between flex-col'>
              <div className='hidden md:block relative'>
                <Image alt='' width={1160} height={720} src={picLink('07')} />
                <span className='text-body-caption font-light mt-2 absolute bottom-[-2]'>
                  {t('ely.photo_implementation_stage_1')}
                </span>
              </div>
              <Grid cols={8} colsXL={8} className='md:mt-0 mt-3'>
                <div className='col-span-2 md:col-start-5 md:col-span-4'>
                  <span className='text-body-regular font-light mt-10 block'>
                    {t('ely.entry_zone_structure')}
                  </span>
                </div>
              </Grid>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <Image alt='' width={560} height={770} src={picLink('08')} />
              <span className='mt-10 text-body-regular font-light block'>
                {t('ely.walking_routes')}
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h4'>
                {t('ely.functional_zoning_scheme')}
              </span>
              <Grid cols={4} colsXL={4} className='mt-10'>
                <div className='col-span-2'>
                  <span className='text-h4'>3,65 га</span>
                  <span className='text-body-regular block mt-4'>
                    {t('ely.design_area')}
                  </span>
                </div>
                <div className='col-span-2'>
                  <span className='text-h4'>2038,1 м²</span>
                  <span className='text-body-regular block mt-4'>
                    {t('ely.public_buildings_area')}
                  </span>
                </div>
                <div className='col-span-4 h-[1px] bg-grey mt-40'></div>
                <div className='col-span-4 space-y-6 mt-6'>
                  {zoneData.map(({ icon, text }) => (
                    <ZoneDataRow text={t(text)} icon={icon} key={text + icon} />
                  ))}
                </div>
              </Grid>
            </div>
            <div className='col-span-8'>
              <Image alt='' width={1160} height={954} src={picLink('09')} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <span className='col-span-12 mb-16 text-h4'>
              {t('ely.improvement_solutions')}
            </span>
            <div className='col-span-6'>
              <Image alt='' width={860} height={725} src={picLink('10')} />
            </div>
            <div className='col-span-6'>
              <Grid cols={6} colsXL={6}>
                <div className='col-span-3 flex flex-col space-y-4'>
                  {landScaping.slice(0, 10).map((item, index) => (
                    <span key={item + index}>{`${addLeadingZero(
                      index + 1
                    )} — ${t(item)}`}</span>
                  ))}
                </div>
                <div className='col-span-3 flex flex-col space-y-4'>
                  {landScaping.slice(10).map((item, index) => (
                    <span key={item + index}>{`${addLeadingZero(
                      index + 11
                    )} — ${t(item)}`}</span>
                  ))}
                </div>
                <div className='col-span-6 mt-16 p-6 border border-medium-grey'>
                  <Grid cols={6} colsXL={6}>
                    <div className='col-span-6 flex space-x-4 mb-4'>
                      <span className='text-body'>
                        {t('ely.building_explication')}
                      </span>
                      <span className='w-[100px] h-[26px] bg-[#DE6141] block'></span>
                    </div>
                    <div className='col-span-2 flex flex-col space-y-2'>
                      {buildingExplication.slice(0, 4).map((item, index) => (
                        <span key={item + index}>{`${addLeadingZero(
                          index + 1
                        )} — ${t(item)}`}</span>
                      ))}
                    </div>
                    <div className='col-span-4 flex flex-col space-y-2'>
                      {buildingExplication.slice(4).map((item, index) => (
                        <span key={item + index}>{`${addLeadingZero(
                          index + 5
                        )} — ${t(item)}`}</span>
                      ))}
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>{t('ely.visualization')}</span>
              <span className='mt-6 text-body-regular block'>
                {t('ely.checkpoint_areas')}
              </span>
            </div>
            <div className='col-span-8 space-y-10'>
              <ImageWithCaption
                width={1160}
                height={820}
                src={picLink('11')}
                title={t('ely.skate_park')}
              />
              <ImageWithCaption
                width={1160}
                height={820}
                src={picLink('12')}
                title={t('ely.green_square_amphitheater')}
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <span className='text-h4'>{t('ely.comprehensive_solution')}</span>
            </div>
            {solutionData.map(({ title, description, icon }) => (
              <SolutionCard
                description={t(description)}
                icon={icon}
                title={t(title)}
                key={title}
              />
            ))}
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <ImageSlider image1={picLink('39')} image2={picLink('40')} />
              <span className='text-body-regular font-light block mt-2'>
                {t('ely.slider_description')}
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4 flex justify-between flex-col'>
              <span className='text-h4'>{t('ely.lighting_concept')}</span>
              <div className='flex flex-col space-y-4 text-body-regular font-light'>
                <span>{t('ely.dimming_proposal')}</span>
                <span>{t('ely.brightness_recommendation')}</span>
              </div>
            </div>
            <div className='col-span-8'>
              <ImageWithCaption
                height={709}
                width={1160}
                src={picLink('20')}
                title={t('ely.boulevard_walking_area')}
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>{t('ely.main_trends_zoning')}</span>
            </div>
            <div className='col-span-8 space-y-32'>
              {trendData.map(({ description, icon, title }) => (
                <TrendRow
                  description={t(description)}
                  icon={icon}
                  title={t(title)}
                  key={title}
                />
              ))}
            </div>
          </Grid>
        </section>
        <section className='mt-50 space-y-10'>
          {decorationData.map((item) => (
            <DecorationRow
              description={item.description.map((d) => t(d))}
              image={item.image}
              title={t(item.title)}
              key={item.title}
            />
          ))}
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>{t('ely.architectural_concept')}</span>
              <span className='text-body-regular block mt-6'>
                {t('ely.architectural_concept_description')}
              </span>
              <span className='text-body-regular block mt-4'>
                {t('ely.public_center_objects')}
              </span>
            </div>
            <div className='col-span-8'>
              <Image alt='' width={1169} height={820} src={picLink('27')} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30'>
            <div className='col-span-6'>
              <Image alt='' width={860} height={768} src={picLink('28')} />
            </div>
            <div className='col-span-6'>
              <Image alt='' width={860} height={768} src={picLink('29')} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid cols={12} colsXL={12} className='mt-50'>
            <div className='col-span-4'>
              <Image alt='' width={560} height={386} src={picLink('30')} />
            </div>
            <div className='col-span-4'>
              <Image alt='' width={560} height={386} src={picLink('31')} />
            </div>
            <div className='col-start-1 col-span-4 mt-32'>
              <Image alt='' width={560} height={386} src={picLink('32')} />
            </div>
            <div className='col-span-4 mt-32'>
              <Image alt='' width={560} height={386} src={picLink('33')} />
            </div>
            <div className='col-span-4 mt-32 flex justify-end flex-col'>
              <span className='text-body-regular font-medium mb-8'>
                {t('ely.facade_materials')}
              </span>
              <div className='flex flex-col space-y-6'>
                {materialData.map(({ icon, text }, index) => (
                  <MaterialRow key={index + text} text={t(text)} icon={icon} />
                ))}
              </div>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <ImageWithCaption
                width={1760}
                height={1244}
                src={picLink('35')}
                title={t('ely.evening_view')}
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-6'>
              <Image width={860} height={616} alt='' src={picLink('36')} />
              <Image
                className='mt-50'
                width={860}
                height={616}
                alt=''
                src={picLink('37')}
              />
            </div>
            <div className='col-span-6'>
              <Grid
                cols={6}
                colsXL={6}
                className='pb-2 text-body-regular font-medium text-grey'
              >
                <div className='col-span-1 col-start-3'>№</div>
                <div className='col-span-2'>{t('ely.zone_name')}</div>
                <div className='col-span-1'>{t('ely.zone_area')}</div>
              </Grid>
              <div className='flex flex-col space-y-4'>
                {zonePlanData.map(({ title, items }, index) => (
                  <Grid
                    key={title + index}
                    cols={6}
                    colsXL={6}
                    className='border-t border-black pt-4'
                  >
                    <div className='col-span-2'>
                      <span className='text-h5'>{t(title)}</span>
                    </div>
                    <div className='col-span-4'>
                      {items.map(({ area, n, title }) => (
                        <Grid
                          key={n}
                          cols={4}
                          colsXL={4}
                          className=' text-black text-body-regular border-b border-medium-grey pb-2'
                        >
                          <div className='col-span-1'>
                            <span>{n}</span>
                          </div>
                          <div className='col-span-2'>
                            <span>{t(title)}</span>
                          </div>
                          <div className='col-span-1'>
                            <span>{area}</span>
                          </div>
                        </Grid>
                      ))}
                      <Grid
                        cols={4}
                        colsXL={4}
                        className='text-black text-body-regular font-medium pb-2'
                      >
                        <div className='col-span-1'>
                          <span>{t('ely.total')}</span>
                        </div>
                        <div className='col-span-1 col-start-4'>
                          {items
                            .reduce((prev, cur) => prev + Number(cur.area), 0)
                            .toFixed(1)}
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                ))}
                <Grid
                  cols={6}
                  colsXL={6}
                  className='border-t border-black pt-4 text-h5 font-medium'
                >
                  <div className='col-span-2'>
                    <span>{t('ely.overall_total')}</span>
                  </div>
                  <div className='col-span-1 col-start-6'>
                    {zonePlanData
                      .reduce(
                        (prev, cur) =>
                          prev +
                          cur.items.reduce(
                            (prev, cur) => prev + Number(cur.area),
                            0
                          ),
                        0
                      )
                      .toFixed(1)}
                  </div>
                </Grid>
              </div>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default ElyPage;
