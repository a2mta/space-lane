import Grid from '@/components/Grid';
import { IconCard } from '@/components/IconCard';
import ImageWithCaption from '@/components/ImageWithCaption';
import OtherProjects from '@/components/OtherProjects';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { addLeadingZero, makePicLink } from '@/utils';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';

const picLink = makePicLink('rublevo');

const MapLegendRow: FC<{ text: string; icon?: string | ReactElement }> = ({
  text,
  icon,
}) => (
  <Grid cols={3} colsXL={3}>
    <div className='col-span-1'>
      <div className='flex items-center justify-center w-[70px] md:w-full'>
        {icon}
      </div>
    </div>
    <div className='col-span-1 md:col-span-2'>
      <span className='xl:text-body-regular md:text-body-caption text-body-caption-10 font-medium   ml-4 flex items-center'>
        {text}
      </span>
    </div>
  </Grid>
);

const MapLegendRowMobile: FC<{
  text: string;
  icon?: string | ReactElement;
}> = ({ icon, text }) => (
  <div className='flex w-full items-start justify-between'>
    <div className='flex items-center justify-center mr-2'>{icon}</div>
    <span className='xl:text-body-regular md:text-body-caption text-body-caption-10 font-medium'>
      {text}
    </span>
  </div>
);

const seasonsData = [
  { title: 'Осень', url: picLink('27') },
  { title: 'Зима', url: picLink('28') },
  { title: 'Весна', url: picLink('29') },
];

const treesData = [
  [
    '01 — Липа европейская «Паллида»',
    '02 — Рябина «Додонг» обыкновенная',
    '04 — Спирея Японская Макрофилла',
    '04 — Сосна обыкновенная',
    '05 — Пузыреплодник калинолистный Ауреа',
  ],
  [
    '06 — Дерен Кроваво-красный',
    '07 — Можжевельник обыкновенный Минт Джулеп',
    '08 — Спирея березолистная Тор Голд',
    '09 — Молиния голубая Морхехе',
  ],
];

const bottomData1 = [
  [
    '01 — Тростник обыкновенный',
    '02 — Осока ложно-сныть',
    '03 — Волжанка двудомная',
  ],
  ['04 — Камни (шунгит)', '05 — Осока острая', '06 — Ирис болотный'],
];

const bottomData2 = [
  [
    '01 — Мобильные стулья',
    '02 — Тропа из камней (шунгит)',
    '03 — Влаголюбивые растения',
  ],
  [
    '04 — Металлический мост',
    '05 — Деревянные сидения',
    '06 — Амфитеатр из архитектурного бетона',
  ],
];

const data = [
  [
    '01 — Группа элементов «Шахматы',
    '02 — Техническая зона тротуара',
    '03 — Лавочка',
    '04 — Линия',
    '05 — Геопластика на разделительной полосе',
  ],
  [
    '06 — Велодорожка',
    '07 — Парковка в мощении',
    '08 — Буферное озеленение',
    '09 — Гранитные пандусные блоки',
  ],
];

const SeasonCard: FC<{ title: string; url: string }> = ({ title, url }) => (
  <div className='col-span-4'>
    <span className='text-body-regular font-light'>{title}</span>
    <Image src={url} width={560} height={408} alt='' className='mt-6' />
  </div>
);

const cardsData = [
  {
    title: 'Безопасность',
    image: (
      <Image
        className='max-w-[60px] md:max-w-24 xl:max-w-32'
        src={picLink('12', 'svg')}
        alt=''
        width={131}
        height={102}
      />
    ),
    description:
      'Создание безопасной среды и разделение потоков пешеходов, автомобилистов и пользователей микромобильного транспорта.',
  },
  {
    title: 'Улицы для каждого',
    image: (
      <Image
        className='max-w-[49px] md:max-w-20 xl:max-w-27'
        src={picLink('13', 'svg')}
        alt=''
        width={113}
        height={102}
      />
    ),
    description:
      'В решениях — внимание к интересам различных категорий пользователей, особенно к маломобильным группам, детям и пожилым людям.',
  },
  {
    title: (
      <span className='whitespace-pre-wrap md:whitespace-normal'>
        {'Сомасштабность \nчеловеку'}
      </span>
    ),
    image: (
      <Image
        className='max-w-[60px] md:max-w-32 xl:max-w-40'
        src={picLink('14', 'svg')}
        alt=''
        width={167}
        height={102}
      />
    ),
    description:
      'Открытые пространства, сомасштабные человеку, являются комфортной городской средой для пользователей.',
  },
  {
    title: 'Улица как экосистема',
    image: (
      <Image
        className='max-w-[65px] md:max-w-32 xl:max-w-44'
        src={picLink('15', 'svg')}
        alt=''
        width={174}
        height={104}
      />
    ),
    description:
      'Зелёная инфраструктура для биоразнообразия и устойчивости экосистемы. В центре внимания — природный каркас, климат и гидрологический цикл.',
  },
  {
    title: 'Мобильность',
    image: (
      <Image
        className='max-w-[65px] md:max-w-28 xl:max-w-40'
        src={picLink('16', 'svg')}
        alt=''
        width={157}
        height={102}
      />
    ),
    description:
      'Удобный доступ к сервисам и различным пунктам назначения на улице увеличивает мобильность пользователей.',
  },
  {
    title: 'Общественное значение',
    image: (
      <Image
        className='max-w-[46px] md:max-w-16 xl:max-w-24'
        src={picLink('17', 'svg')}
        alt=''
        width={97}
        height={102}
      />
    ),
    description:
      'Улицы создают условия для различных сценариев времяпрепровождения и генерируют возможности для бизнеса и девелоперов',
  },
];

const mapLegend = [
  {
    icon: (
      <Image
        className='pt-2 min-w-[70px] md:w-full'
        src={picLink('05', 'svg')}
        alt=''
        width={110}
        height={12}
      />
    ),
    text: 'Границы рассматриваемой территории',
  },
  {
    icon: (
      <Image
        className='pt-2 min-w-[70px] md:w-full'
        src={picLink('06', 'svg')}
        alt=''
        width={110}
        height={12}
      />
    ),
    text: 'У1 — Уникальная улица (бульвар)',
  },
  {
    icon: (
      <Image
        className='pt-2 min-w-[70px] md:w-full'
        src={picLink('07', 'svg')}
        alt=''
        width={110}
        height={12}
      />
    ),
    text: 'У2 — Центральная улица',
  },
  {
    icon: (
      <Image
        className='pt-2 min-w-[70px] md:w-full'
        src={picLink('08', 'svg')}
        alt=''
        width={110}
        height={12}
      />
    ),
    text: 'У3 — Местная улица',
  },
  {
    icon: (
      <Image
        className='pt-2 min-w-[70px] md:w-full'
        src={picLink('09', 'svg')}
        alt=''
        width={110}
        height={12}
      />
    ),
    text: 'У 4.1 — Жилая улица',
  },
  {
    icon: (
      <Image
        className='min-w-[30px] w-[30px] md:w-[48px]'
        src={picLink('10', 'svg')}
        alt=''
        width={48}
        height={48}
      />
    ),
    text: 'Проектируемая станция метро',
  },
  {
    icon: (
      <Image
        className='min-w-[30px] w-[30px] md:w-[48px]'
        src={picLink('11', 'svg')}
        alt=''
        width={48}
        height={48}
      />
    ),
    text: 'Железнодорожная станция',
  },
];
const RublevoPage = () => {
  return (
    <div className='mt-30 md:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={
            <span className='whitespace-pre-wrap md:whitespace-normal'>
              {'СберСити \nв Рублево-Архангельском'}
            </span>
          }
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Дождевой сад'
          status='В процессе реализации'
          area='461 га'
          location='Москва'
          subTitle={
            <div className='flex flex-col'>
              <span className='text-h4-mob md:text-h4 font-medium tracking-normal whitespace-pre-wrap md:whitespace-normal'>
                {
                  'Архитектурное проектирование \nи авторский надзор СберСити \nв Рублево-Архангельское'
                }
              </span>
              <span className='text-body-caption-mob md:text-body-regular font-light mt-4 md:mt-6'>
                Данные взяты с сайта sbercity.ru
              </span>
            </div>
          }
          type='Благоустройство, авторский надзор'
          year='2019-2032 г'
        />
      </section>
      <PageMarginWithTitle>
        <Grid className='md:mt-50 mt-30'>
          <div className='col-span-2 md:col-span-4'>
            <span className='text-h3-mob md:text-h4 font-medium'>
              Улицы города-парка
            </span>
          </div>
          <div className='mt-12 md:mt-0 col-span-2 md:col-span-4'>
            <span className='text-body-regular-mob md:text-body-regular font-light'>
              Умный город-парк Сберсити в Рублёво-Архангельском — проект
              комплексного развития территории Захарковской поймы Москвы-реки
              между Рублёво-Успенски и Новорижским шоссе. Застройка района
              включает в себя жилые и офисные кварталы, а также объекты
              инфраструктуры. В деловом кластере будет располагаться
              штаб-квартира Сбера и его компаний-партнёров
            </span>
          </div>
          <div className='col-span-2 md:col-span-4 mt-4 md:mt-0'>
            <span className='text-body-regular-mob md:text-body-regular font-light md:whitespace-pre-wrap'>
              {
                'От центральной части района протянутся зелёные лучи, которые свяжут урбанизированную территорию с парком \nна набережной реки. Проект благоустройства уличных общественных пространств основывается на ясной иерархии улиц, едином дизайн-коде и применении экологичных решений озеленения.'
              }
            </span>
          </div>
          <div className='hidden md:grid col-span-2 md:col-start-5 md:col-span-8 mt-10'>
            <Image src={picLink('03')} width={1160} height={851} alt='' />
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        src={picLink('03')}
        width={480}
        height={292}
        className='my-6 md:hidden'
        alt=''
      />
      <PageMarginWithTitle>
        <Grid className='md:mt-50'>
          <div className='col-span-2 md:col-span-4 flex flex-col'>
            <span className='text-body-regular-mob md:text-body-regular font-light block md:whitespace-pre-wrap'>
              {
                'Для планирования, подготовки и проектированияблагоустройства уличных общественных пространств было выделено 4 типа улиц. В основе типологизации лежат такие параметры, как пешеходная и транспортная активность, функции окружающий зданий. \nЭто позволило сформулировать специфику функционирования окружающих зданий каждой улицы, которая нашла отражение в решениях, предусмотренных для каждого типа.'
              }
            </span>
          </div>
          <div className='hidden md:block col-span-5'>
            <Image src={picLink('04')} width={710} height={734} alt='' />
          </div>
          <div className='hidden md:block col-span-3 space-y-6'>
            {mapLegend.map((item, index) => (
              <MapLegendRow key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        src={picLink('04')}
        width={480}
        height={498}
        className='mt-10 md:hidden'
        alt=''
      />
      <PageMarginWithTitle>
        <Grid className='mt-6 md:hidden'>
          <div className='col-span-2 sm:col-span-1 space-y-4'>
            {mapLegend.slice(0, 4).map((item, index) => (
              <MapLegendRowMobile
                key={index}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>
          <div className='col-span-2 sm:col-span-1 space-y-4'>
            {mapLegend.slice(-2).map((item, index) => (
              <MapLegendRowMobile
                key={index}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-span-2 md:col-span-12 md:mb-2 mb-6'>
            <span className='text-h3-mob md:text-h4 font-medium'>
              Ключевые дизайн-принципы
            </span>
          </div>
        </Grid>
        <Grid className='mb-20 md:mb-50 md:pt-5'>
          {cardsData.map(({ description, title, image }, index) => (
            <div
              className={'col-span-1 pt-4 md:col-span-4 md:mt-10'}
              key={index}
            >
              <IconCard
                noP
                desc={description}
                icon={image}
                title={title}
                index={addLeadingZero(index + 1)}
              />
            </div>
          ))}
        </Grid>
      </PageMarginWithTitle>
      <ImageWithCaption
        className='md:hidden'
        width={480}
        height={372}
        fullWidth
        src={picLink('34')}
        title='Бульвар. Визуализация проектного предложения.'
      />
      <div className='aspect-video relative'>
        <ImageWithCaption
          className='hidden md:block'
          fill
          // width={1760}
          // height={1100}
          fullWidth
          src={picLink('14')}
          title='Бульвар. Визуализация проектного предложения.'
        />
      </div>
      <PageMarginWithTitle>
        <Grid className='mt-36 md:mt-50'>
          <div className='col-span-2 md:col-span-4'>
            <span className='text-h3-mob md:text-h4 font-medium'>Бульвар</span>
            <span className='block mt-6 md:mt-4 text-body-regular-mob md:text-body-regular font-light'>
              Бульвар — уникальная улица (тип У1), помимо транзитной зоны,
              включает в себя и общественное пространство, поэтому предполагает
              выраженную рекреационную функцию и более интенсиваное озеленение,
              чем на обычной улице.
            </span>
            <span className='mt-4 block text-body-regular-mob md:text-body-regular font-light'>
              По бульвару проходит архитектурный элемент «Линия» —с уникальными
              малыми архитектурными формами для тихого отрыха и интерактивными
              компонентами. К парковочным местам организованы «проколы» с
              тротуара, что предотвращает вытаптывание буферного озеленения.
            </span>
          </div>
          <div className='hidden md:block col-span-2 md:col-span-8 mb-11'>
            <Image src={picLink('18')} width={1160} height={650} alt='' />
          </div>
          <div className='hidden md:block col-span-2 md:col-span-4'>
            <Image src={picLink('19')} width={560} height={856} alt='' />
          </div>
          <div className='hidden md:block col-span-2 md:col-span-8'>
            <Image src={picLink('20')} width={1160} height={856} alt='' />
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        src={picLink('35')}
        width={480}
        height={290}
        className='mt-10 md:hidden'
        alt=''
      />
      <PageMarginWithTitle>
        <Grid className='md:hidden text-body-caption-mob font-medium mt-6'>
          <div className='col-span-1 space-y-2'>
            {data[0].map((item) => (
              <span key={item} className='block'>
                {item}
              </span>
            ))}
          </div>
          <div className='col-span-1 space-y-2'>
            {data[1].map((item) => (
              <span key={item} className='block'>
                {item}
              </span>
            ))}
          </div>
          <div className='col-start-2 col-span-1 mt-10'>
            <Image src={picLink('19')} width={210} height={326} alt='' />
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        className='mt-6 md:hidden'
        src={picLink('20')}
        width={480}
        height={354}
        alt=''
      />
      <PageMarginWithTitle>
        <Grid className='mt-30 md:mt-50'>
          <div className='col-span-2 md:col-span-4'>
            <span className='text-h4-mob md:text-h4 font-medium'>
              Малые архитектурные формы
            </span>
            <span className='block mt-6 text-body-regular-mob md:text-body-regular font-light'>
              Уникальные мафы интегрированы в архитектурный элемент «Линия»,
              стилистически связывающий пешеходные пространства центральных улиц
              и бульвара. «Линия» — это лента из архитектурного бетона шириной
              60 см, в которую встраиваются скамьи, сидения (со спинками и без)
              и столы для игры в шахматы, образующие места для отдыха.
            </span>
          </div>
          <div className='hidden md:grid col-span-2 md:col-span-8 mb-30'>
            <Image src={picLink('21')} width={1160} height={810} alt='' />
          </div>
          <div className='hidden md:grid col-span-2 md:col-span-4 md:col-start-5 text-body-regular font-light'>
            <span>
              В соответствии с дизайн-кодом, металлические элементы типовых
              мафов (светофоров, фонарей, стел и т.п.) выполнены в едином
              цветовом решении. «Линия», как правило прямая, на некоторых
              участках может иметь радиусные компоненты, добавляющие
              пространству пластики, и интерактивные волнообразные компоненты,
              приглашающие к взаимодействию (например, кататься по «Линии» на
              скейтборде).
            </span>
          </div>
          <div className='hidden md:grid col-span-2 md:col-span-4 text-body-regular font-light'>
            <span>
              Размещение уникальных мафов регламентируется правилами, в
              частности, рекомендации касаются минимального расстояния между
              местами отдыха, процентное соотношение сидений со спинкой и без,
              способы группировки отдельных элементов и т.п.
            </span>
          </div>
        </Grid>
      </PageMarginWithTitle>
      <Image
        className='my-20 md:hidden'
        src={picLink('36')}
        width={480}
        height={400}
        alt=''
      />
      <PageMarginWithTitle>
        <Grid className='text-body-regular-mob font-light md:hidden'>
          <div className='col-span-2'>
            <span>
              В соответствии с дизайн-кодом, металлические элементы типовых
              мафов (светофоров, фонарей, стел и т.п.) выполнены в едином
              цветовом решении. «Линия», как правило прямая, на некоторых
              участках может иметь радиусные компоненты, добавляющие
              пространству пластики, и интерактивные волнообразные компоненты,
              приглашающие к взаимодействию (например, кататься по «Линии» на
              скейтборде).
            </span>
            <span className='mt-4 block'>
              Размещение уникальных мафов регламентируется правилами,
              в частности, рекомендации касаются минимального расстояния
              между местами отдыха, процентное соотношение сидений со спинкой
              и без, способы группировки отдельных элементов и т.п.
            </span>
          </div>
        </Grid>
        <Grid className='mt-20 md:mt-40'>
          <div className='mb-10 md:mb-0 col-span-2 md:col-span-4'>
            <span className='text-h4-mob md:text-h5 font-medium'>
              Палитра элементов
            </span>
          </div>
          <div className='col-span-2 md:col-span-8'>
            <span className='text-body-regular-mob font-medium md:text-body-regular md:font-light border-b border-medium-grey md:border-grey block pb-2 mb-10 md:mb-20'>
              Компоненты архитектурного элемента «Линия»(уникальные
              архитектурные формы)
            </span>
            <Image src={picLink('22')} width={1089} height={94} alt='' />
            <Image
              src={picLink('23')}
              className='mt-10 md:mt-16'
              width={1111}
              height={150}
              alt=''
            />
            <span className='mt-20 md:mt-30 text-body-regular-mob font-medium md:text-body-regular md:font-light border-b border-medium-grey md:border-grey block pb-2 mb-10 md:mb-20'>
              Типовые архитектурные формы
            </span>
            <Image src={picLink('24')} width={953} height={130} alt='' />
            <Image
              src={picLink('25')}
              className='mt-10 md:mt-16 w-[210px] md:w-auto'
              width={436}
              height={200}
              alt=''
            />
          </div>
        </Grid>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4 mb-4 md:mb-0'>
              <span className='text-h3-mob md:text-h5 font-medium'>
                Выбор деревьев
              </span>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-body-regular-mob md:text-body-regular font-light'>
                Общая концепция озеленения предполагает присутствие на улицах
                вечнозелёных насаждений, что решается за счёт хвойных пород.
                Дополняют их лиственые породы и кустарники, меняющие окрас
                листвы и стволов со сменой сезонов и привносящие цветовые
                акценты в городскую среду. На улицах с высокой интенсивностью
                движения подбираются деревья, устойчивые к засолению почвы
                противогололёдными реагентами.
              </span>
            </div>
            <div className='col-span-2 mt-4 md:mt-0 md:col-span-4'>
              <span className='text-body-regular-mob md:text-body-regular font-light'>
                Для улиц, затенённых застройкой, предпочтительны тенелюбивые
                растения, для открытых пространств — светолюбивые и не требующие
                обильного полива. Для оптимизации процесса подбора породы
                деревьев сведены в палетку, где их характеристики коррелируют с
                характеристиками уличных пространств.
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        src={picLink('37')}
        width={480}
        height={348}
        className='my-10 md:hidden'
        alt=''
      />
      <PageMarginWithTitle>
        <Grid className='md:hidden text-body-caption-10 font-medium'>
          <div className='col-span-1 space-y-2'>
            {treesData[0].map((item, index) => (
              <span className='block' key={index + item}>
                {item}
              </span>
            ))}
          </div>
          <div className='col-span-1 space-y-2'>
            {treesData[1].map((item, index) => (
              <span className='block' key={index + item}>
                {item}
              </span>
            ))}
          </div>
        </Grid>
        <section>
          <Grid className='my-30 hidden md:grid'>
            <div className='col-span-2 md:col-span-2'>
              <span className='text-body-regular text-right block font-light mt-6'>
                Лето
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Image src={picLink('26')} width={1160} height={926} alt='' />
            </div>
          </Grid>
          <Grid className='hidden md:grid'>
            {seasonsData.map(({ title, url }, index) => (
              <SeasonCard key={title + index} title={title} url={url} />
            ))}
          </Grid>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <div className='flex justify-between flex-col h-full'>
                <div>
                  <span className='text-h3-mob md:text-h4 font-medium'>
                    Дождевой сад*
                  </span>
                  <span className='block text-body-regular font-light mt-4 md:mt-6'>
                    На пересечении бульвара с центральной улицей организован
                    дождевой сад — рукотворный природный фильтр. Он собирает
                    воду с тротуара, удерживает её и постепенно фильтрует в
                    почву, тем самым восстанавливая грунтовые воды. Для сада
                    подобраны влаголюбивые растения, а на случай засушливой
                    погоды предусмотрена система полива, не дающая им погибнуть.
                    Амфитеатр и каменная дорожка, продолженная по дну,
                    приглашают наблюдать за садом после дождя.
                  </span>
                </div>
                <span className='text-body-caption font-medium mt-4 md:mt-0'>
                  *Рабочее проектирование и реализация объектов проходила
                  совместно с компанией ООО «Стрелка Архитектс», ООО «ПМК —
                  Проект» и ООО «Маркс Инжиниринг»
                </span>
              </div>
            </div>
            <div className='hidden md:block col-span-8'>
              <Image src={picLink('30')} width={1160} height={820} alt='' />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <section className='md:hidden'>
        <Image
          className='mt-10 md:hidden'
          src={picLink('30')}
          width={480}
          height={340}
          alt=''
        />
        <Image
          className='mt-10'
          src={picLink('31')}
          width={480}
          height={612}
          alt=''
        />
        <Image src={picLink('38')} width={480} height={292} alt='' />
        <PageMarginWithTitle>
          <Grid className='mt-6 text-body-caption font-medium'>
            <div className='col-span-1 space-y-2'>
              {bottomData1[0].map((item, index) => (
                <span className='block' key={item + index}>
                  {item}
                </span>
              ))}
            </div>
            <div className='col-span-1 space-y-2'>
              {bottomData1[1].map((item, index) => (
                <span className='block' key={item + index}>
                  {item}
                </span>
              ))}
            </div>
          </Grid>
        </PageMarginWithTitle>
        <Image
          className='mt-28 mb-6'
          src={picLink('39')}
          width={480}
          height={304}
          alt=''
        />
        <PageMarginWithTitle>
          <Grid className='text-body-caption font-medium'>
            <div className='col-span-1 space-y-2'>
              {bottomData2[0].map((item, index) => (
                <span className='block' key={item + index}>
                  {item}
                </span>
              ))}
            </div>
            <div className='col-span-1 space-y-2'>
              {bottomData2[1].map((item, index) => (
                <span className='block' key={item + index}>
                  {item}
                </span>
              ))}
            </div>
          </Grid>
        </PageMarginWithTitle>
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-30'>
            <div className='hidden md:grid col-span-4'>
              <Image src={picLink('31')} width={560} height={706} alt='' />
            </div>
            <div className='hidden md:grid col-span-8'>
              <Image src={picLink('32')} width={1160} height={782} alt='' />
            </div>
            <div className='hidden md:grid col-start-3 col-span-8 mt-30'>
              <Image src={picLink('33')} width={1160} height={812} alt='' />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <OtherProjects />
    </div>
  );
};

export default RublevoPage;
