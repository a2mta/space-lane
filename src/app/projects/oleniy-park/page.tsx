import React, { FC } from 'react';
import { createTranslation } from '../../../../i18n/server';
import { addLeadingZero, makePicLink } from '@/utils';
import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import Grid from '@/components/Grid';
import TextH4 from '@/components/typography/TextH4';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import H5Medium from '@/components/typography/H5Medium';
import BodyRegular from '@/components/typography/BodyRegular';
import Image from 'next/image';
import { ExplicationRow } from '@/components/ExplicationRow';
import H5Regular from '@/components/typography/H5Regular';
import BodyMedium from '@/components/typography/BodyMedium';
import Collapse from '@/components/Collapse';
import WalkCollapse from './WalkCollapse';
import CycleCollapse from './CycleCollapse';
import HorseCollapse from './HorseCollapse';
import AutomobileCollapse from './AutomobileCollapse';
import AdditionalWalksCollapse from './AdditionalWalksCollapse';
const picLink = makePicLink('oleniy-park');

type RouteRowType = {
  title: string;
  index: string;
  route: { amount: string; start: string; length: string; duration: string };
  description: string;
};

const collapseData = [
  {
    title: 'Прокат',
    image: <Image alt='' width={440} height={518} src={picLink('40')} />,
    image2: <Image alt='' width={210} height={318} src={picLink('41')} />,
    desc: 'Здание проката оборудования и инвентаря для разного рода прогулок в парке: велоснаряжение, палки для скандинавской ходьбы, палатки и оборудование для кэмпинга, фонарки и пр.',
    exp: ['1 — Стойка ресепшн', '2 — Экспозиционный зал и зона хранения'],
  },
  {
    title: 'Визит-центр',
    image: <Image alt='' width={440} height={518} src={picLink('42')} />,
    image2: <Image alt='' width={210} height={318} src={picLink('43')} />,
    desc: 'Визитная карточка парка. Место прибытия и регистрация посетителей. Ознакомление с правилами пользования и кодексом парка. Выбор дальнейшего маршрута и пути размещения.',
    exp: [
      '1 — Санузлы и ПУИ',
      '2 — Зона отдыха/ожидания',
      '3 — Стойка ресепшн',
      '4 — Зона встречи и регистрация гостей',
      '5 — Зона эксопозиции',
    ],
  },
  {
    title: 'Кафе',
    image: <Image alt='' width={440} height={518} src={picLink('44')} />,
    image2: <Image alt='' width={210} height={318} src={picLink('45')} />,
    desc: 'Небольшое кафе с открытой террасой и видом на парк. Без полноценной готовочной.',
    exp: [
      '1 — Санузлы и ПУИ',
      '2 — Витрины и кассы',
      '3 — Зона посадки внутри',
      '4 — Зона посадки снаружи',
    ],
  },
];

const rentDataMob = [
  ['01 — Баня', '02 — Кирпичный дом', '03 — Игровая зона', '04 — Переправа'],
  ['05 — Костровище', '06 — Игровая зона', '07 — Мост переход'],
];

const glampingDataMob = [
  [
    '01 — Палатки на подиуме',
    '02 — Столовая',
    '03 — Общественная зона',
    '04 — Гостиная',
    '05 — Санитарный блок',
  ],
  [
    '06 — Палатки на подиуме',
    '07 — Зеленый буфер',
    '08 — К парковке',
    '09 — Банный комплекс',
  ],
];

const borderDataMob = [
  {
    text: 'Зона произрастания краснокнижных растений',
    icon: <Image src={picLink('07', 'svg')} width={30} height={30} alt='' />,
  },
  {
    text: 'Зона проживания ценных и краснокнижных птиц',
    icon: <Image src={picLink('08', 'svg')} width={30} height={30} alt='' />,
  },
  {
    text: 'Самые красивые и ландшафтно интересные точки',
    icon: <Image src={picLink('11', 'svg')} width={30} height={30} alt='' />,
  },
  { text: 'Зона прибрежных лугов', icon: 'bg-[#9BA79A]' },
  { text: 'Лесистая часть, зона проживания животных', icon: 'bg-[#9DA87E]' },
];

const borderDataMob2 = [
  {
    text: 'Зона проживания ценных и краснокнижных животных',
    icon: <Image src={picLink('09', 'svg')} width={30} height={30} alt='' />,
  },
  {
    text: 'Зона проживания краснокнижных бабочек',
    icon: <Image src={picLink('10', 'svg')} width={30} height={30} alt='' />,
  },
  {
    text: 'Источник',
    icon: <Image src={picLink('13', 'svg')} width={30} height={30} alt='' />,
  },
  {
    text: 'Территория под возможности расширениязелёных коридоров',
    icon: 'bg-[#BDD2A7]',
  },
];

const masterPlanDataMob = [
  ['01 — Место под кемпинг', '02 — Дома под аренду', '03 — Глэмпинг'],
  [
    '04 — Гостевая парковка',
    '05 — Входная зона КПП / смотровая площадка',
    '06 — Входная зона Визит-центр / парковка',
  ],
];

const entryZoneDataMob = [
  ['01 — Никольская церковь', '02 — Дорога к церкви', '03 — Входная зона'],
  ['04 — Посадка павлония', '05 — Объездная дорога'],
];

const entryZoneDataMob2 = [
  [
    '01 — Посадка павлонии',
    '02 — Визит-центр',
    '03 — Кафе',
    '04 — Композиции из камня',
    '05 — Ценные растения',
  ],
  [
    '06 — Прокат оборудования',
    '07 — Главный въезд в парк',
    '08 — Остановка автобусов',
    '09 — Стоянка автомобилей',
    '10 — Объездная дорога',
  ],
];

const borderData = [
  { text: 'Граница парка', icon: 'border border-[#C16116]' },
  { text: 'Граница поселений', icon: 'border border-[#8C3912]' },
  { text: 'Зона прибрежных лугов', icon: 'bg-[#9BA79A]' },
  { text: 'Лесистая часть, зона проживания животных', icon: 'bg-[#9DA87E]' },
  {
    text: 'Территория под возможности расширениязелёных коридоров',
    icon: 'bg-[#BDD2A7]',
  },
];

const borderData2 = [
  {
    text: 'Зона произрастания краснокнижных растений',
    icon: <Image src={picLink('07', 'svg')} width={48} height={48} alt='' />,
  },
  {
    text: 'Зона проживания ценных и краснокнижных птиц',
    icon: <Image src={picLink('08', 'svg')} width={48} height={48} alt='' />,
  },
  {
    text: 'Зона проживания ценных и краснокнижных животных',
    icon: <Image src={picLink('09', 'svg')} width={48} height={48} alt='' />,
  },
  {
    text: 'Зона проживания краснокнижных бабочек',
    icon: <Image src={picLink('10', 'svg')} width={48} height={48} alt='' />,
  },
];

const borderData3 = [
  {
    text: 'Самые красивые и ландшафтно интересные точки',
    icon: <Image src={picLink('11', 'svg')} width={48} height={48} alt='' />,
  },
  {
    text: 'Беседка',
    icon: <Image src={picLink('12', 'svg')} width={48} height={48} alt='' />,
  },
  {
    text: 'Источник',
    icon: <Image src={picLink('13', 'svg')} width={48} height={48} alt='' />,
  },
];

const homesData = [
  {
    title: 'Санитарный блок',
    image: '28',
    imageMob: '48',
    items: [
      'Подъезд для обслуживания',
      'Открытая терраса под навесом с умывальниками',
      'Подпорная стена из габионов с местным камнем',
    ],
  },
  {
    title: 'Банный комплекс',
    image: '29',
    imageMob: '49',
    items: [
      'Баня с зоной отдыха',
      'Терраса под навесом',
      'С южной стороныподпорная стена',
      'Комната отдыха, помещение для массажа',
      'Внешний санузел',
      'Терраса с банными купелями и шезлонгами',
    ],
  },
  {
    title: 'Общественная зона со столовой',
    image: '30',
    imageMob: '50',
    items: [
      'Многофункциональная палатка',
      'Зона хранения',
      'Проезд',
      'Палатка-гостиная',
      'Тех. площадка',
      'Палатка-столовая',
      'Очаг',
      'Деревянные подиумы',
    ],
  },
  {
    title: 'Палатка',
    image: '31',
    imageMob: '51',
    items: [
      'Приподнятый деревянный подимум',
      'Терраса с креслами/гамаками',
      'Дорожки из щебеночно — гравийной смеси',
    ],
  },
];

const routesData = [
  { title: 'Со специалистом', subTitle: 'глубокое погружение в узкую тему' },
  { title: 'Развлекательные', subTitle: 'ориентированные на разную аудиторию' },
  {
    title: 'Природные/уединённые',
    subTitle: 'изолированные, для перезагрузки, соединения с природой',
  },
];

const RouteCard: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <Grid cols={8}>
    <div className='col-span-3'>
      <BodyMedium className='text-grey'>{title}</BodyMedium>
    </div>
    <div className='col-span-5'>
      <BodyMedium>{subTitle}</BodyMedium>
    </div>
  </Grid>
);

const ServicesDesc = () => (
  <>
    <BodyRegular className='mt-4'>
      Посетители могут прогуляться пешком, наслаждаясь красотой окружающей
      природы, или прокатиться верхом на лошади, чтобы лучше рассмотреть оленей
      вблизи
    </BodyRegular>
    <BodyRegular className='mt-4'>
      Для любителей активного отдыха предусмотрены велосипедные и автомобильные
      маршруты, которые позволяют исследовать парк на колёсах
    </BodyRegular>
  </>
);

const routesRowData: RouteRowType[] = [
  {
    index: '01',
    description:
      'Развитая инфраструктура для отдыха туристов и наблюдения за животными',
    title: 'Пешие маршруты',
    route: {
      start: 'входная зона',
      amount: '6',
      length: '10–20 км',
      duration: '1,5–4 часа',
    },
  },
  {
    index: '02',
    description: 'Предусмотрены парковки и пункты обслуживания для велосипедов',
    title: 'Велосипедные маршруты',
    route: {
      start: 'входная зона',
      amount: '—',
      length: '7–21 км',
      duration: '1–3 часа',
    },
  },
  {
    index: '03',
    description: 'Все предусмотрено для отдыха коня и его привязки',
    title: 'Конные маршруты',
    route: {
      start: 'конюшня',
      amount: '3',
      length: '8–25 км',
      duration: '1–4 часа',
    },
  },
];

const RoutesRow: FC<RouteRowType> = ({ description, index, route, title }) => (
  <Grid className='pt-2 md:pt-6 border-t border-medium-grey'>
    <div className='col-span-4 md:order-1'>
      <H5Medium inline className=' text-grey mr-4'>
        {index}
      </H5Medium>
      <H5Medium inline>{title}</H5Medium>
    </div>
    <div className='col-span-4 space-y-2 md:space-y-4 order-2'>
      <div className='flex'>
        <span className='text-body-regular-mob md:text-h5 font-medium mr-2 text-grey'>
          Начало/окончание:
        </span>
        <span className='text-body-regular-mob md:text-h5 font-medium'>
          {route.start}
        </span>
      </div>
      <div className='flex'>
        <span className='text-body-regular-mob md:text-h5 font-medium mr-2 text-grey'>
          Количество:
        </span>
        <span className='text-body-regular-mob md:text-h5 font-medium'>
          {route.amount}
        </span>
      </div>
      <div className='flex'>
        <span className='text-body-regular-mob md:text-h5 font-medium mr-2 text-grey'>
          Длина:
        </span>
        <span className='text-body-regular-mob md:text-h5 font-medium'>
          {' '}
          {route.length}
        </span>
      </div>
      <div className='flex'>
        <span className='text-body-regular-mob md:text-h5 font-medium mr-2 text-grey'>
          Продолжительность:
        </span>
        <span className='text-body-regular-mob md:text-h5 font-medium'>
          {' '}
          {route.duration}
        </span>
      </div>
    </div>
    <div className='col-span-4 order-1 md:order-3 mt-6 md:mt-0 mb-4 md:mb-0'>
      <H5Medium>{description}</H5Medium>
    </div>
  </Grid>
);

const HomeCard: FC<{
  index: string;
  title: string;
  image: string;
  imageMob: string;
  items: string[];
}> = ({ image, imageMob, index, items, title }) => (
  <div className='col-span-2 md:col-span-6 pt-6 mb-24 border-t border-grey'>
    <Grid cols={6}>
      <div className='col-span-2 md:col-span-6 mb-6'>
        <H5Medium>
          {index} — {title}
        </H5Medium>
      </div>
      <div className='col-span-1 md:col-span-4'>
        <Image
          className='hidden md:block'
          alt=''
          width={560}
          height={424}
          src={picLink(image)}
        />
        <Image
          className='md:hidden'
          alt=''
          width={210}
          height={182}
          src={picLink(imageMob)}
        />
      </div>
      <div className='col-span-1 md:col-span-2 space-y-2 md:space-y-4'>
        {items.map((item, index) => (
          <span
            className='text-body-caption-10 md:text-body-caption xl:text-body-regular block font-medium md:font-light'
            key={item + index}
          >
            {addLeadingZero(index + 1)} — {item}
          </span>
        ))}
      </div>
    </Grid>
  </div>
);

const OleniyParkPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-30 md:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Олений парк'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          status={t('status.in_progress')}
          area={'Более 100 га'}
          location={'Липецкая область Краснинский район, с. Суходол'}
          subTitle={
            'Мастер-план развития территории природного парка в Липецкой области'
          }
          type={'Исследование, мастер-план, архитектура, благоустройство'}
          year='2022'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <TextH4 className='mb-10 md:mb-12'>
                Анализ территории и создание бренда через архитектуру
              </TextH4>
              <H5Medium>Аудитория</H5Medium>
              <BodyRegular className='mt-4'>
                Мы провели исследование того, как используется территории парка.
                Ключевая проблема кроется в недостаточном разнообразии сценариев
                для посещения парка и ориентации только на одну категорию
                посетителей — приезжающих на экскурсию.
              </BodyRegular>
              <BodyRegular className='mt-4'>
                Несмотря на то, что животные и природа — основное событие парка,
                необходимо сосредоточиться на высоком разнообразии и качестве
                инфраструктуры и программы отдыха для туристов. Мастер-планом
                предлагается организовать входную зону, проложить новые маршруты
                и поработать с ландшафтом.
              </BodyRegular>
            </div>
            <div className='hidden md:block col-span-8'>
              <Image alt='' width={1160} height={724} src={picLink('03')} />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        className='md:hidden mt-10'
        alt=''
        width={480}
        height={338}
        src={picLink('35')}
      />

      <PageMarginWithTitle>
        <Grid className='md:hidden mt-6'>
          <div className='space-y-4 col-span-1'>
            {borderDataMob.map((item, index) => (
              <ExplicationRow key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
          <div className='space-y-4 col-span-1'>
            {borderDataMob2.map((item, index) => (
              <ExplicationRow key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </Grid>
        <section>
          <Grid className='hidden md:grid mt-6'>
            <div className='col-span-2 md:col-span-4 space-y-6'>
              {borderData.map((item, index) => (
                <ExplicationRow key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
            <div className='col-span-2 md:col-span-4 space-y-6'>
              {borderData2.map((item, index) => (
                <ExplicationRow key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
            <div className='col-span-2 md:col-span-4 space-y-6'>
              {borderData3.map((item, index) => (
                <ExplicationRow key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Grid className='my-30 md:my-50'>
        <div className='col-span-2 md:col-span-12'>
          <Image
            alt=''
            width={480}
            height={344}
            src={picLink('36')}
            className='md:hidden'
          />
          <Image
            alt=''
            width={1920}
            height={1030}
            src={picLink('14')}
            className='hidden md:block'
          />
        </div>
      </Grid>
      <PageMarginWithTitle>
        <Grid>
          <div className='col-span-2 md:col-span-4'>
            <TextH4>Мастер-план территории</TextH4>
            <H5Regular className='md:text-grey mt-4 hidden md:block'>
              Схема генплана
            </H5Regular>
            <span className='mt-10 text-h5-mob font-medium md:hidden block mb-4'>
              Схема генплана
            </span>
          </div>
          <div className='col-span-2 md:col-span-8'>
            <BodyRegular>
              Чтобы расширить аудиторию посетителей парка, предлагается
              модернизировать существующий гостиничный фонд парка и заложить
              основу для разнообразных и современных форматов проживания на
              территории для различных категорий пользователей
            </BodyRegular>
            <Image
              className='hidden md:block mt-16'
              alt=''
              width={860}
              height={846}
              src={picLink('15')}
            />
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        className='md:hidden mt-10'
        alt=''
        width={480}
        height={414}
        src={picLink('37')}
      />

      <PageMarginWithTitle>
        <Grid className='text-body-caption-10 font-medium mt-6 md:hidden'>
          <div className='col-span-1 space-y-2'>
            {masterPlanDataMob[0].map((item, index) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className='col-span-1 space-y-2'>
            {masterPlanDataMob[1].map((item, index) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
        </Grid>
        <Grid className='mt-30 md:mt-40'>
          <div className='col-span-2 md:col-span-4'>
            <TextH4 className='mb-4 md:mb-0'>Входная зона</TextH4>
          </div>
          <div className='col-span-2 md:col-span-8'>
            <BodyRegular>
              Входная зона парка распологается в самом начале пути, недалеко от
              статуи оленя, рядом с будущими посадками павлонии и с видом на
              Никольскую церковь. Для удобного подъезда и разворота
              туристических автобусов предусматривается устройство объездной
              дороги.
            </BodyRegular>
            <Image
              className='hidden md:block mt-16'
              alt=''
              width={1160}
              height={694}
              src={picLink('16')}
            />
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        className='md:hidden mt-10'
        alt=''
        width={480}
        height={268}
        src={picLink('38')}
      />
      <PageMarginWithTitle>
        <Grid className='text-body-caption-10 font-medium mt-6 md:hidden'>
          <div className='col-span-1 space-y-2'>
            {entryZoneDataMob[0].map((item, index) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className='col-span-1 space-y-2'>
            {entryZoneDataMob[1].map((item, index) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
        </Grid>
        <Grid className='mt-20 md:mt-30'>
          <div className='hidden md:block col-span-7'>
            <Image alt='' width={1010} height={634} src={picLink('17')} />
          </div>
          <div className='col-span-2 md:col-span-5'>
            <BodyRegular className='mt-8'>
              Входная зона также включает в себя три здания: визит-центр, кафе с
              открытой террасой и прокат. При благоустройстве территории
              предлагается использовать ценные местные виды растений и
              композиции из местного камня.
            </BodyRegular>
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        className='mt-10 md:hidden'
        alt=''
        width={480}
        height={268}
        src={picLink('39')}
      />
      <PageMarginWithTitle>
        <Grid className='text-body-caption-10 font-medium mt-6 md:hidden'>
          <div className='col-span-1 space-y-2'>
            {entryZoneDataMob2[0].map((item, index) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className='col-span-1 space-y-2'>
            {entryZoneDataMob2[1].map((item, index) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        className='md:hidden mt-30'
        alt=''
        width={480}
        height={470}
        src={picLink('18')}
      />
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50 hidden md:grid'>
            <div className='col-span-7'>
              <Image alt='' width={1010} height={990} src={picLink('18')} />
            </div>
            <div className='col-span-2 md:col-span-5'>
              <Image alt='' width={710} height={990} src={picLink('19')} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 md:hidden'>
            <div className='col-span-2 md:col-span-12 mb-20'>
              <TextH4>Архитектурные решения</TextH4>
            </div>
            <div className='col-span-2'>
              {collapseData.map((item, index) => (
                <Collapse
                  key={item.title + index}
                  title={item.title}
                  borderColor='border-medium-grey'
                >
                  <Grid>
                    <div className='col-span-2 mb-6'>
                      {item.image}
                      <span className='block mt-6 text-body-regular-mob font-light'>
                        {item.desc}
                      </span>
                    </div>
                    <div className='col-span-1'>{item.image2}</div>
                    <div className='col-span-1 text-body-regular-mob font-light mt-4'>
                      <span className='block mb-4'>Экспликация</span>
                      <div className='flex space-y-2 flex-col'>
                        {item.exp.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </Grid>
                </Collapse>
              ))}
            </div>
          </Grid>
          <Grid className='mt-50 hidden md:grid'>
            <div className='col-span-2 md:col-span-12 mb-16'>
              <TextH4>Архитектурные решения</TextH4>
            </div>
            <div className='col-span-2 md:col-span-12 mb-4'>
              <BodyRegular className='mb-4'>Прокат</BodyRegular>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <Image alt='' width={560} height={658} src={picLink('20')} />
            </div>
            <div className='col-span-2 md:col-span-3'>
              <Image alt='' width={410} height={629} src={picLink('21')} />
            </div>
            <div className='col-span-2 md:col-span-5'>
              <BodyRegular className='mt-10 xl:mt-14'>
                Здание проката оборудования и инвентаря для разного рода
                прогулок в парке: велоснаряжение, палки для скандинавской
                ходьбы, палатки и оборудование для кэмпинга, фонарки и пр.
              </BodyRegular>
              <div className='flex flex-col mt-20 border-t border-medium-grey pt-6'>
                <BodyMedium className='mb-6'>Экспликация</BodyMedium>
                <BodyRegular>1 — Стойка ресепшн</BodyRegular>
                <BodyRegular className='mt-2'>
                  2 — Экспозиционный зал и зона хранения
                </BodyRegular>
              </div>
            </div>
          </Grid>
          <Grid className='mt-30 hidden md:grid'>
            <div className='col-span-2 md:col-span-12 mb-4'>
              <BodyRegular>Визит-центр</BodyRegular>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <Image alt='' width={560} height={658} src={picLink('22')} />
            </div>
            <div className='col-span-2 md:col-span-3'>
              <Image alt='' width={410} height={629} src={picLink('23')} />
            </div>
            <div className='col-span-2 md:col-span-5'>
              <BodyRegular className='mt-10 xl:mt-14'>
                Визитная карточка парка. Место прибытия и регистрация
                посетителей. Ознакомление с правилами пользования и кодексом
                парка. Выбор дальнейшего маршрута и пути размещения.
              </BodyRegular>
              <div className='flex flex-col mt-20 border-t border-medium-grey pt-6'>
                <BodyMedium className='mb-6'>Экспликация</BodyMedium>
                <BodyRegular>1 — Санузлы и ПУИ</BodyRegular>
                <BodyRegular className='mt-2'>
                  2 — Зона отдыха/ожидания
                </BodyRegular>
                <BodyRegular className='mt-2'>3 — Стойка ресепшн</BodyRegular>
                <BodyRegular className='mt-2'>
                  4 — Зона встречи и регистрация гостей
                </BodyRegular>
                <BodyRegular className='mt-2'>5 — Зона эксопозиции</BodyRegular>
              </div>
            </div>
          </Grid>
          <Grid className='mt-30 hidden md:grid'>
            <div className='col-span-2 md:col-span-12 mb-4'>
              <BodyRegular>Визит-центр</BodyRegular>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <Image alt='' width={560} height={658} src={picLink('24')} />
            </div>
            <div className='col-span-2 md:col-span-3'>
              <Image alt='' width={410} height={629} src={picLink('25')} />
            </div>
            <div className='col-span-2 md:col-span-5'>
              <BodyRegular className='mt-10 xl:mt-14'>
                Небольшое кафе с открытой террасой и видом на парк.Без
                полноценной готовочной.
              </BodyRegular>
              <div className='flex flex-col mt-20 border-t border-medium-grey pt-6'>
                <BodyMedium className='mb-6'>Экспликация</BodyMedium>
                <BodyRegular>1 — Санузлы и ПУИ</BodyRegular>
                <BodyRegular className='mt-2'>2 — Витрины и кассы </BodyRegular>
                <BodyRegular className='mt-2'>
                  3 — Зона посадки внутри
                </BodyRegular>
                <BodyRegular className='mt-2'>
                  4 — Зона посадки снаружи
                </BodyRegular>
              </div>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <TextH4 className='mb-10 md:mb-4'>Дома под аренду</TextH4>
              <H5Regular className='md:text-grey mt-4 hidden md:block'>
                Схема генплана
              </H5Regular>
              <span className='mt-10 text-h5-mob font-medium md:hidden block mb-4'>
                Схема генплана
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <BodyRegular className='mb-10 md:mb-16'>
                Устройство домов под аренду на месте заброшенной деревни
                Яблоново станет символом возвращения жизни в эти места.Мы
                предлагаем сохранить естественно сложившуюся планировку, что
                позволит соблюсти водоохранное расстояние и раскрыть виды.
                Частичное восстановление заброшенных садов и создание новых
                позволит организовать естественные границы между участками домов
                и индивидуальные патио. И, что не менее важно — в парке появится
                ещё один живописный уголок.
              </BodyRegular>
              <Image
                alt=''
                className='hidden md:block'
                width={860}
                height={715}
                src={picLink('26')}
              />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        className='md:hidden'
        alt=''
        width={480}
        height={362}
        src={picLink('46')}
      />
      <PageMarginWithTitle>
        <Grid className='text-body-caption-10 font-medium mt-6 md:hidden'>
          <div className='col-span-1 space-y-2'>
            {rentDataMob[0].map((item) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className='col-span-1 space-y-2'>
            {rentDataMob[1].map((item) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
        </Grid>
        <section>
          <Grid className='mt-30 md:mt-40'>
            <div className='col-span-2 md:col-span-4'>
              <TextH4 className='mb-10  md:mb-4'>Глэмпинг</TextH4>
              <H5Regular className='md:text-grey mt-4 hidden md:block'>
                Схема генплана
              </H5Regular>
              <span className='mt-10 text-h5-mob font-medium md:hidden block mb-4'>
                Схема генплана
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <BodyRegular className='mb-16'>
                На холме вдоль кромки существующих насаждений предлагается
                расположить глэмпинг. Отсюда открываются прекрасные виды, защиту
                от ветров будет обеспечивать зелёный массив. Чтобы изолировать
                территорию глэмпинга, мы предлагаем устроить зелёный буфер. Для
                ускорения роста посадок по периметру можно высадить
                быстрорастущую павлонию, в остальной массе буфера использовать
                более медленно растущие деревья. Через пять лет павлонию можно
                будет заменить на долговечную породу.
              </BodyRegular>
              <Image
                className='hidden md:block'
                alt=''
                width={860}
                height={825}
                src={picLink('27')}
              />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        className='md:hidden'
        alt=''
        width={480}
        height={418}
        src={picLink('47')}
      />
      <PageMarginWithTitle>
        <Grid className='text-body-caption-10 font-medium mt-6 md:hidden'>
          <div className='col-span-1 space-y-2'>
            {glampingDataMob[0].map((item) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className='col-span-1 space-y-2'>
            {glampingDataMob[1].map((item) => (
              <span className='block' key={item}>
                {item}
              </span>
            ))}
          </div>
        </Grid>
        <section>
          <Grid className='mt-50'>
            {homesData.map((item, index) => (
              <HomeCard
                key={index}
                index={addLeadingZero(index + 1)}
                {...item}
              />
            ))}
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 md:mt-16'>
            <div className='col-span-2 md:col-span-4 md:mb-0 mb-4'>
              <TextH4>Туристические маршруты</TextH4>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <BodyRegular>
                Мы предложили несколько типов маршрутов разной протяжённости для
                различных категорий пользователей и способов передвижения —
                пеших, конных, велосипедных, автомобильных
              </BodyRegular>
            </div>
          </Grid>
          <Grid className='mt-30 hidden md:grid'>
            <div className='col-span-2 md:col-span-4'>
              <H5Medium>Идеология</H5Medium>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <H5Medium className='mb-12'>
                Разнообразие маршрутов и уникальный пользовательский опыт
              </H5Medium>
              <div className='flex flex-col space-y-10 pb-10'>
                {routesData.map((item, index) => (
                  <RouteCard key={index} {...item} />
                ))}
              </div>
            </div>
            <div className='col-span-2 md:col-span-4 border-l border-black pl-10 space-y-6'>
              <H5Medium>Экскурсионные маршруты</H5Medium>
              <H5Medium>Аудио маршруты</H5Medium>
              <H5Medium>Схемы/тексты</H5Medium>
              <H5Medium>Квесты</H5Medium>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        alt=''
        width={1160}
        height={773}
        src={picLink('32')}
        className='my-10 md:hidden'
      />
      <PageMarginWithTitle>
        <section>
          <Grid className='my-30 hidden md:grid'>
            <div className='md:col-start-5 col-span-2 md:col-span-8'>
              <Image alt='' width={1160} height={773} src={picLink('32')} />
            </div>
          </Grid>
        </section>
        <section className='space-y-10 md:space-y-20'>
          {routesRowData.map((item, index) => (
            <RoutesRow key={index} {...item} />
          ))}
        </section>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 xl:col-span-4 md:col-span-4'>
              <TextH4>Сервисы</TextH4>
              <div className='block xl:block md:hidden'>
                <ServicesDesc />
              </div>
            </div>
            <div className='col-span-8 hidden md:grid xl:hidden'>
              <ServicesDesc />
            </div>
            <div className='col-span-2 xl:col-span-8 md:col-span-12 hidden xl:grid'>
              <Image alt='' width={1160} height={773} src={picLink('33')} />
            </div>
            <div className='mt-16 md:grid xl:hidden hidden col-span-12 relative aspect-video'>
              <Image
                alt=''
                fill
                src={picLink('33')}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        alt=''
        width={480}
        height={320}
        src={picLink('33')}
        className='md:hidden my-10'
      />

      <PageMarginWithTitle>
        <section>
          <Grid className='md:mt-36'>
            <div className='col-span-2 md:col-span-12'>
              <WalkCollapse />
              <CycleCollapse />
              <HorseCollapse />
              <AutomobileCollapse />
              <AdditionalWalksCollapse />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default OleniyParkPage;
