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
    text: 'Техническая зона тротуара из бетонной плитки',
    icon: 'bg-[#B5B4B0]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#C5C4C2]' },
  {
    text: 'Входные и рекреационные зоны из гранитного отсева',
    icon: 'bg-[#CAAC94]',
  },
  { text: 'Рекреационные зоны из деревянного настила', icon: 'bg-[#CDA172]' },
];

const surfaces2 = [
  { text: 'Асфальтированная проезжая часть', icon: 'bg-[#939393]' },
  { text: 'Проезжая часть из бетонной плитки', icon: 'bg-[#C4C4C4]' },
  {
    text: 'Техническая зона тротуара из бетонной плитки',
    icon: 'bg-[#B5B4B0]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#C5C4C2]' },
  {
    text: 'Входные и рекреационные зоны из гранитного отсева',
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
    text: 'Техническая зона тротуара из бетонной плитки',
    icon: 'bg-[#C4C4C4]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#B5B4B0]' },
  {
    text: 'Рекреационные зоны из бетона',
    icon: 'bg-[#C5C4C2]',
  },
  {
    text: 'Входные и рекреационные зоны из гранитного отсева',
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
  'Зона барабекю',
  'Амфитеатр',
  'Пинг-понг',
  'Лежаки',
  'Фудтрак под навесом',
];

const explicationData = [
  { text: 'Асфальтированная проезжая часть', icon: 'bg-[#939393]' },
  { text: 'Проезжая часть из бетонной плитки', icon: 'bg-[#C5C4C2]' },
  {
    text: 'Техническая зона тротуара из бетонной плитки',
    icon: 'bg-[#B5B4B0]',
  },
  { text: 'Пешеходная часть из бетонной плитки', icon: 'bg-[#C4C4C4]' },
  {
    text: 'Входные и рекреационные зоны из гранитного отсева',
    icon: 'bg-[#CAAC94]',
  },
  { text: 'Рекреационные зоны из деревянного настила', icon: 'bg-[#CDA172]' },
  {
    text: 'Покрытие спортивных зон из резиновой крошки',
    icon: 'bg-twoColorGradient',
  },
];

const DarinoMapDescRow: FC<{ title: string; desc: string }> = ({
  desc,
  title,
}) => (
  <Grid cols={4} className='border-b border-grey pb-2'>
    <div className='col-span-2'>
      <span className='text-h3 font-medium'>{title}</span>
    </div>
    <div className='col-span-2'>
      <span className='text-body-regular font-light'>{desc}</span>
    </div>
  </Grid>
);

const DarinoPage = async () => {
  const { t } = await createTranslation('common');
  return (
    <div className='mt-30 lg:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Дарьино парк'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          status={t('status.in_release_process')}
          area={'37 га'}
          location={'Истринский городской округ Московская область'}
          subTitle={
            'Дизайн-проект благоустройства центральной улицы и общественных пространств'
          }
          type={'Благоустройство'}
          year='2023'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-8'>
              <Image src={picLink('03')} width={1160} height={771} alt='' />
            </div>
            <div className='col-span-4'>
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
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Линейный парк</span>
            </div>
            <div className='col-span-4'>
              <span className='text-body-regular font-light'>
                Центральная ось коттеджного посёлка, прорезающая концентрические
                круги улочек, становится линейным парком с плодовыми деревьями и
                цветниками из декоративно-цветущих многолетников. Так у места
                появится свой неповторимый характер и связь с традицией русской
                загородной жизни. А череда знаковых пространcтв и зонирование
                помогут разнообразить сценарии использования территории жителями
                посёлка
              </span>
            </div>
            <div className='col-span-4'>
              <Image src={picLink('04')} width={560} height={327} alt='' />
            </div>
            <div className='col-span-12 mt-30'>
              <Image src={picLink('05')} width={1760} height={210} alt='' />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12 mb-40'>
              <span className='text-h4 font-medium'>
                Размещение общественных пространств
              </span>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('06')} width={1123} height={943} />
            </div>
            <div className='col-span-4 border-l border-grey pl-10'>
              <div className='flex flex-col space-y-10'>
                {mapSpaceDescData.map(({ desc, title }, index) => (
                  <DarinoMapDescRow
                    desc={t(desc)}
                    title={title}
                    key={index + title}
                  />
                ))}
              </div>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-8'>
              <Image alt='' src={picLink('07')} width={1160} height={725} />
            </div>
            <div className='col-span-4'>
              <span className='text-h4 font-medium block mb-4'>
                Въездная зона
              </span>
              <span className='text-body-regular font-light'>
                Парк начинается уже у зоны перед КПП — приветственной площадью.
                Здесь расположены объекты торговли, места ожидания и спортивные
                пространства. Спортивная зона предназначена для пользователей
                всех возрастов, она оборудована элементами для воркаута и
                площадкой для игр с мячом.
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30'>
            <div className='col-span-4 flex flex-end flex-col justify-end space-y-10'>
              {explicationData.map((item, index) => (
                <ExplicationRow {...item} key={item.icon + index} />
              ))}
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('08')} width={1160} height={820} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 pt-6 border-t border-medium-grey'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium block mb-4'>
                Событийная площадь
              </span>
              <span className='text-body-regular font-light'>
                Это камерное общественное пространство позволяет проводить
                мероприятия, собрания и праздники. Здесь оборудованы места для
                сидения и навес, в тени которого можно укрыться от солнца.
              </span>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('10')} width={1160} height={725} />
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-8'>
              <Image alt='' src={picLink('11')} width={1160} height={690} />
            </div>
            <div className='col-span-4 bg-beige p-10'>
              <span className='text-h4'>Аксонометрия</span>
              <div className='flex flex-col space-y-4 mt-6'>
                {aksonometry.map((item, index) => (
                  <span className='text-body-medium' key={item + index}>
                    {addLeadingZero(index + 1)} {item}
                  </span>
                ))}
              </div>
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-4 flex justify-end flex-col'>
              <span className='text-h5-regular font-light'>Покрытия</span>
              <div className='flex flex-col space-y-6 mt-8'>
                {surfaces.map((item, index) => (
                  <ExplicationRow {...item} key={item.text + index} />
                ))}
              </div>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('12')} width={1160} height={678} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 border-t border-medium-grey pt-6'>
            <div className='col-span-8'>
              <Image alt='' src={picLink('13')} width={1160} height={724} />
            </div>
            <div className='col-span-4'>
              <span className='text-h4 font-medium block mb-4'>
                Игровая зона
              </span>
              <span className='text-body-regular font-light'>
                Детская площадка задумана как обучающее пространство для
                подвижных и любопытных. В дизайне акцент сделан на натуральные
                материалы и природное игровое оборудование — пеньки, бревна,
                песок. Чтобы разнообразить пользовательский опыт, мы добавили на
                площадку музыкальное и акустическое оборудование.
              </span>
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-4 p-10 bg-beige'>
              <span className='text-h4 font-medium'>Аксонометрия</span>
              <div className='flex flex-col space-y-4 mt-6'>
                {aksonometry2.map((item, index) => (
                  <span key={item} className='text-body-medium'>
                    {addLeadingZero(index + 1)} {item}
                  </span>
                ))}
              </div>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('14')} width={1160} height={698} />
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-4 flex justify-end flex-col'>
              <span className='text-h5-regular font-light'>Покрытия</span>
              <div className='flex flex-col space-y-6 mt-8'>
                {surfaces2.map((item, index) => (
                  <ExplicationRow {...item} key={item.text + index} />
                ))}
              </div>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('15')} width={1160} height={612} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 pt-6 border-t border-medium-grey'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Зона барбекю</span>
              <span className='text-body-regular font-light block mt-4'>
                На специально оборудованной площадке для барбекю жители могут
                устраивать пикники или соседские застолья. Здесь также
                располагаются столы для пинг-понга и лежаки для принятия
                солнечных ванн.
              </span>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('16')} width={1160} height={725} />
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-8'>
              <Image alt='' src={picLink('17')} width={1160} height={698} />
            </div>
            <div className='col-span-4 p-10 bg-beige'>
              <span className='text-h4 font-medium'>Аксонометрия</span>
              <div className='flex flex-col space-y-4 mt-6'>
                {aksonometry3.map((item, index) => (
                  <span key={item} className='text-body-medium'>
                    {addLeadingZero(index + 1)} {item}
                  </span>
                ))}
              </div>
            </div>
          </Grid>
          <Grid className='mt-10'>
            <div className='col-span-4 flex justify-end flex-col'>
              <span className='text-h5-regular font-light'>Покрытия</span>
              <div className='flex flex-col space-y-6 mt-8'>
                {surfaces3.map((item, index) => (
                  <ExplicationRow {...item} key={item.text + index} />
                ))}
              </div>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('18')} width={1160} height={648} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 border-t border-medium-grey pt-6'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Линейный участок</span>
              <span className='text-body-medium block mt-4'>
                Центральная улица посёлка поделена на три линейных участка. Они
                отличаются друг от друга по стилю озеленения и благоустройства
                по мере продвижения от КПП до дальних участков.
              </span>
            </div>
            <div className='col-span-8'>
              <ImageWithCaption
                src={picLink('19')}
                title='Вид на променад'
                width={1160}
                height={726}
              />
            </div>
            <div className='col-span-12 my-20'>
              <span className='text-h5 font-medium'>
                Решения по линейной части
              </span>
            </div>
            <div className='col-span-12'>
              <Image alt='' src={picLink('20')} width={1760} height={209} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-60'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Аллея</span>
              <span className='block text-body-regular font-light mt-6'>
                Участок от КПП до кольцевой разворотной площадки является
                парадной зоной и представляет собой аллею высоких деревьев
                регулярной посадки. Здесь размещаются небольшие места отдыха —
                скамьи и стулья
              </span>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('21')} width={1160} height={957} />
            </div>
          </Grid>
          <Grid className='mt-60'>
            <div className='col-span-8'>
              <Image alt='' src={picLink('22')} width={1160} height={828} />
            </div>
            <div className='col-span-4 flex flex-col justify-between'>
              <div className='flex flex-col'>
                <span className='text-h4 font-medium'>Променад</span>
                <span className='block text-body-regular font-light mt-6'>
                  Отрезок улицы от кольцевой разворотной площадки до участка №
                  128 ограничен глухим ограждением. Максимально задействуя
                  площадь пешеходной части, мы предлагаем оборудовать несколько
                  покет-парков — компактных площадок для отдыха и досуга жителей
                  прилегающих домов.
                </span>
                <span className='block text-body-regular font-light mt-4'>
                  Покет-парки могут быть оборудованы не только стандартным
                  навесом и ограждением, но и дополнительными элементами — при
                  участии жителей и по их желанию. В покет-парке могут быть
                  установлены скамейка, стулья, столик для шахмат, детское
                  обрудование, разбит цветник или устроен сад камней.
                </span>
              </div>
              <span className='text-body-regular font-light text-grey'>
                *Участок совместного проектирования: жители могут установить
                малые архитектурные формы под свои нужды
              </span>
            </div>
          </Grid>
          <Grid className='mt-60'>
            <div className='col-span-4 flex flex-col justify-between'>
              <div className='flex flex-col'>
                <span className='text-h4 font-medium'>Сады парка</span>
                <span className='block text-body-regular font-light mt-6'>
                  Поскольку на завершающем участке улицы находятся въезды
                  на жилые участки и нет общественных пространств,
                  его благоустройство носит выраженный приватный характер. Здесь
                  разбиваются палисадники, а озеленение приближено
                  к неформальному садовому.
                </span>
              </div>
              <span className='text-grey text-body-regular font-light'>
                *Палисадники примыкают к входным группам и являются их частью.
                Жители могут оформить их как продолжение своих участков. Проект
                благоустройства предлагает базовый ассортимент растений
                для палисадников, однако он может быть дополнен по усмотрению
                жителей.
              </span>
            </div>
            <div className='col-span-8'>
              <Image alt='' src={picLink('22')} width={1160} height={850} />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default DarinoPage;
