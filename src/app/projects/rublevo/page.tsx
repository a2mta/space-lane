import Grid from '@/components/Grid';
import { IconCard } from '@/components/IconCard';
import ImageWithCaption from '@/components/ImageWithCaption';
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
  <Grid cols={3}>
    <div className='col-span-1'>
      <div className='flex items-center justify-center'>{icon}</div>
    </div>
    <div className='col-span-2'>
      <span className='ml-4 flex items-center'>{text}</span>
    </div>
  </Grid>
);

const seasonsData = [
  { title: 'Осень', url: picLink('27') },
  { title: 'Зима', url: picLink('28') },
  { title: 'Весна', url: picLink('29') },
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
    image: <Image src={picLink('12', 'svg')} alt='' width={131} height={102} />,
    description:
      'Создание безопасной среды и разделение потоков пешеходов, автомобилистов и пользователей микромобильного транспорта.',
  },
  {
    title: 'Улицы для каждого',
    image: <Image src={picLink('13', 'svg')} alt='' width={113} height={102} />,
    description:
      'В решениях — внимание к интересам различных категорий пользователей, особенно к маломобильным группам, детям и пожилым людям.',
  },
  {
    title: 'Сомасштабность человеку',
    image: <Image src={picLink('14', 'svg')} alt='' width={167} height={102} />,
    description:
      'Открытые пространства, сомасштабные человеку, являются комфортной городской средой для пользователей.',
  },
  {
    title: 'Улица как экосистема',
    image: <Image src={picLink('15', 'svg')} alt='' width={174} height={104} />,
    description:
      'Зелёная инфраструктура для биоразнообразия и устойчивости экосистемы. В центре внимания — природный каркас, климат и гидрологический цикл.',
  },
  {
    title: 'Мобильность',
    image: <Image src={picLink('16', 'svg')} alt='' width={157} height={102} />,
    description:
      'Удобный доступ к сервисам и различным пунктам назначения на улице увеличивает мобильность пользователей.',
  },
  {
    title: 'Общественное значение',
    image: <Image src={picLink('17', 'svg')} alt='' width={97} height={102} />,
    description:
      'Улицы создают условия для различных сценариев времяпрепровождения и генерируют возможности для бизнеса и девелоперов',
  },
];

const flowerBeeds = [
  { title: 'Клумбы с кленом', url: '19.png' },
  { title: 'Клумбы с тополем', url: '20.png' },
  { title: 'Дождевой сад', url: '21.png' },
];

const flowerBeeds2 = [
  { title: 'Канава с черёмухой', url: '22.png' },
  { title: 'Канава с клёном', url: '23.png' },
  { title: 'Канава с тополем', url: '24.png' },
];

const mapLegend = [
  {
    icon: (
      <Image
        className='pt-2'
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
        className='pt-2'
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
        className='pt-2'
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
        className='pt-2'
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
        className='pt-2'
        src={picLink('09', 'svg')}
        alt=''
        width={110}
        height={12}
      />
    ),
    text: 'У 4.1 — Жилая улица',
  },
  {
    icon: <Image src={picLink('10', 'svg')} alt='' width={48} height={48} />,
    text: 'Проектируемая станция метро',
  },
  {
    icon: <Image src={picLink('11', 'svg')} alt='' width={48} height={48} />,
    text: 'Железнодорожная станция',
  },
];

const FlowerBeedCard: FC<{
  title: string;
  url: string;
}> = ({ title, url }) => (
  <div className='col-span-4  min-h-[500px] flex justify-between flex-col'>
    <div className='border-l border-medium-grey'>
      <span className='ml-4 block text-body-regular mb-10'>{title}</span>
    </div>
    <div className='aspect-video relative mt-10'>
      <Image
        alt={title}
        fill
        src={`/pics/projects/rublevo/${url}`}
        style={{ objectFit: 'contain', objectPosition: 'bottom' }}
      />
    </div>
  </div>
);

const decisionData = [
  {
    title: 'Места отдыха вдоль пешеходных путей',
    url: '31.png',
  },
  {
    title: 'Палисаднки',
    url: '32.png',
  },
  {
    title: 'Биодренажные канавы',
    url: '33.png',
  },
  {
    title: 'Односторонняя велодорожка',
    url: '34.png',
  },
];

const DecisionRow: FC<{ index: string; title: string; url: string }> = ({
  index,
  title,
  url,
}) => (
  <div className='grid col-span-12 grid-cols-subgrid border-t border-medium-grey pb-10'>
    <div className='col-span-4 mt-4'>
      <span className='text-h5'>{index}</span>
    </div>
    <div className='col-span-4 mt-6'>
      <span className='text-body-regular'>{title}</span>
    </div>
    <div className='col-span-4 mt-6'>
      <Image alt='' width={260} height={260} src={url} />
    </div>
  </div>
);

const Card: FC<{ number: string; title: string; description: string }> = ({
  description,
  number,
  title,
}) => (
  <div className='px-4 py-6 flex flex-col bg-light-grey aspect-video justify-between'>
    <div className='flex flex-col'>
      <span className='text-h5 font-light mb-2'>{number}</span>
      <span className='text-h5 font-medium'>{title}</span>
    </div>
    <span className='text-body-regular font-light'>{description}</span>
  </div>
);

const RublevoPage = () => {
  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title='СберСити в Рублево-Архангельском'
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Дождевой сад'
          status='В процессе реализации'
          area='461 га'
          location='Москва'
          subTitle={
            <div className='flex flex-col'>
              <span className='text-h4 tracking-normal'>
                Архитектурное проектирование и авторский надзор
                Рублево-Архангельское
              </span>
              <span className='text-body-regular mt-6'>
                Данные взяты с сайта sbercity.ru
              </span>
            </div>
          }
          type='Благоустройство, авторский надзор'
          year='2023–2024 г'
        />
      </section>
      <PageMarginWithTitle>
        <Grid className='md:mt-50'>
          <div className='col-span-4'>
            <span className='text-h4 font-medium'>Улицы города-парка</span>
          </div>
          <div className='col-span-4'>
            <span className='text-body-regular font-light'>
              Умный город-парк Сберсити в Рублёво-Архангельском — проект
              комплексного развития территории Захарковской поймы Москвы-реки
              между Рублёво-Успенски и Новорижским шоссе. Застройка района
              включает в себя жилые и офисные кварталы, а также объекты
              инфраструктуры. В деловом кластере будет располагаться
              штаб-квартира Сбера и его компаний-партнёров
            </span>
          </div>
          <div className='col-span-4'>
            <span className='text-body-regular font-light'>
              От центральной части района протянутся зелёные лучи, которые
              свяжут урбанизированную территорию с парком на набережной реки.
              Проект благоустройства уличных общественных пространств
              основывается на ясной иерархии улиц, едином дизайн-коде и
              применении экологичных решений озеленения.
            </span>
          </div>
          <div className='col-start-5 col-span-8 mt-10'>
            <Image src={picLink('03')} width={1160} height={851} alt='' />
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-span-4 flex flex-col'>
            <span className='text-body-regular font-light block'>
              Для планирования, подготовки и проектированияблагоустройства
              уличных общественных пространств было выделено 4 типа улиц. В
              основе типологизации лежат такие параметры, как пешеходная и
              транспортная активность, функции окружающий зданий. Это позволило
              сформулировать специфику функционирования окружающих зданий каждой
              улицы, которая нашла отражение в решениях, предусмотренных для
              каждого типа.
            </span>
          </div>
          <div className='col-span-5'>
            <Image src={picLink('04')} width={710} height={734} alt='' />
          </div>
          <div className='col-span-3 space-y-6'>
            {mapLegend.map((item, index) => (
              <MapLegendRow key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-span-12 mb-2'>
            <span className='text-h4 font-medium'>
              Ключевые дизайн-принципы
            </span>
          </div>
        </Grid>
        <Grid className='mb-50 pt-5'>
          {cardsData.map(({ description, title, image }, index) => (
            <div className='col-span-4 mt-10' key={title + index}>
              <IconCard
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
        width={1760}
        height={1100}
        fullWidth
        src={picLink('14')}
        title='Бульвар. Визуализация проектного предложения.'
      />
      <PageMarginWithTitle>
        <Grid className='mt-50'>
          <div className='col-span-4'>
            <span className='text-h4 font-medium'>Бульвар</span>
            <span className='block mt-6 text-body-regular font-light'>
              Бульвар — уникальная улица (тип У1), помимо транзитной зоны,
              включает в себя и общественное пространство, поэтому предполагает
              выраженную рекреационную функцию и более интенсиваное озеленение,
              чем на обычной улице.
            </span>
            <span className='mt-4 block text-body-regular font-light'>
              По бульвару проходит архитектурный элемент «Линия» —с уникальными
              малыми архитектурными формами для тихого отрыха и интерактивными
              компонентами. К парковочным местам организованы «проколы» с
              тротуара, что предотвращает вытаптывание буферного озеленения.
            </span>
          </div>
          <div className='col-span-8 mb-11'>
            <Image src={picLink('18')} width={1160} height={650} alt='' />
          </div>
          <div className='col-span-4'>
            <Image src={picLink('19')} width={560} height={856} alt='' />
          </div>
          <div className='col-span-8'>
            <Image src={picLink('20')} width={1160} height={856} alt='' />
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-span-4'>
            <span className='text-h4 font-medium'>
              Малые архитектурные формы
            </span>
            <span className='block mt-6 text-body-regular font-light'>
              Уникальные мафы интегрированы в архитектурный элемент «Линия»,
              стилистически связывающий пешеходные пространства центральных улиц
              и бульвара. «Линия» — это лента из архитектурного бетона шириной
              60 см, в которую встраиваются скамьи, сидения (со спинками и без)
              и столы для игры в шахматы, образующие места для отдыха.
            </span>
          </div>
          <div className='col-span-8 mb-30'>
            <Image src={picLink('21')} width={1160} height={810} alt='' />
          </div>
          <div className='col-span-4 col-start-5 text-body-regular font-light'>
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
          <div className='col-span-4 text-body-regular font-light'>
            <span>
              Размещение уникальных мафов регламентируется правилами, в
              частности, рекомендации касаются минимального расстояния между
              местами отдыха, процентное соотношение сидений со спинкой и без,
              способы группировки отдельных элементов и т.п.
            </span>
          </div>
        </Grid>
        <Grid className='mt-40'>
          <div className='col-span-4'>
            <span className='text-h4 font-medium'>Палитра элементов</span>
          </div>
          <div className='col-span-8'>
            <span className='text-body-regular font-light border-b border-grey block pb-2 mb-20'>
              Компоненты архитектурного элемента «Линия»(уникальные
              архитектурные формы)
            </span>
            <Image src={picLink('22')} width={1089} height={94} alt='' />
            <Image
              src={picLink('23')}
              className='mt-16'
              width={1111}
              height={150}
              alt=''
            />
            <span className='mt-30 text-body-regular font-light border-b border-grey block pb-2 mb-20'>
              Типовые архитектурные формы
            </span>
            <Image src={picLink('24')} width={953} height={130} alt='' />
            <Image
              src={picLink('25')}
              className='mt-16'
              width={436}
              height={200}
              alt=''
            />
          </div>
        </Grid>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Выбор деревьев</span>
            </div>
            <div className='col-span-4'>
              <span className='text-body-regular font-light'>
                Общая концепция озеленения предполагает присутствие на улицах
                вечнозелёных насаждений, что решается за счёт хвойных пород.
                Дополняют их лиственые породы и кустарники, меняющие окрас
                листвы и стволов со сменой сезонов и привносящие цветовые
                акценты в городскую среду. На улицах с высокой интенсивностью
                движения подбираются деревья, устойчивые к засолению почвы
                противогололёдными реагентами.
              </span>
            </div>
            <div className='col-span-4'>
              <span className='text-body-regular font-light'>
                Для улиц, затенённых застройкой, предпочтительны тенелюбивые
                растения, для открытых пространств — светолюбивые и не требующие
                обильного полива. Для оптимизации процесса подбора породы
                деревьев сведены в палетку, где их характеристики коррелируют с
                характеристиками уличных пространств.
              </span>
            </div>
          </Grid>
          <Grid className='my-30'>
            <div className='col-span-2'>
              <span className='text-body-regular text-right block font-light mt-6'>
                Лето
              </span>
            </div>
            <div className='col-span-8'>
              <Image src={picLink('26')} width={1160} height={926} alt='' />
            </div>
          </Grid>
          <Grid>
            {seasonsData.map(({ title, url }, index) => (
              <SeasonCard key={title + index} title={title} url={url} />
            ))}
          </Grid>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <div className='flex justify-between flex-col h-full'>
                <div>
                  <span className='text-h4 font-medium'>Дождевой сад*</span>
                  <span className='block text-body-regular font-light mt-6'>
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
                <span className='text-body-caption font-medium'>
                  *Рабочее проектирование и реализация объектов проходила
                  совместно с компанией ООО «Стрелка Архитектс», ООО «ПМК —
                  Проект» и ООО «Маркс Инжиниринг»
                </span>
              </div>
            </div>
            <div className='col-span-8'>
              <Image src={picLink('30')} width={1160} height={820} alt='' />
            </div>
          </Grid>
          <Grid className='mt-30'>
            <div className='col-span-4'>
              <Image src={picLink('31')} width={560} height={706} alt='' />
            </div>
            <div className='col-span-8'>
              <Image src={picLink('32')} width={1160} height={782} alt='' />
            </div>
            <div className='col-start-3 col-span-8 mt-30'>
              <Image src={picLink('33')} width={1160} height={812} alt='' />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default RublevoPage;
