import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { addLeadingZero, makePicLink } from '@/utils';
import React, { FC, ReactElement } from 'react';
import { createTranslation } from '../../../../i18n/server';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Grid from '@/components/Grid';
import Image from 'next/image';
import { MapDescRow } from '@/components/MapDescRow';
import ImageWithCaption from '@/components/ImageWithCaption';
import classNames from 'classnames';
import { GreyCard } from '@/components/GreyCard';
import Collapse from '@/components/Collapse';
import { it } from 'node:test';

const picLink = makePicLink('maksimovo');

type HouseCardInfo = {
  index?: string;
  title: string;
  imageMob: ReactElement;
  image: ReactElement;
  desc: { element: string; color: string }[];
};

const generalPlanMob = [
  'Детские площадки',
  'Зона Кпп с магазином, спортивной площадкой, зоной отдыха',
  'Озелененный прогулочный бульвар',
  'Сквер с зонами отдыха, детской игровой площадкой и площадками для занятий спортом',
  'Разработан архитектурный дизайн-код для улиц посёлка',
];

const kppMob = [
  'Спортивная площадка',
  'Здание свободного назначения',
  'Зона погрузки-выгрузки товара',
  'Озеленение',
  'Магазин с кафе 340 м²',
  'Зона отдыха',
  'Парковка',
  'Контрольно-пропускной пункт',
];

const typologyData = [
  {
    title: 'Участок типа S',
    area: '630м²',
    type: 'малой площади',
    image: <Image alt='' width={860} height={665} src={picLink('11')} />,
    desc: 'Почти половина участков посёлка относится к типу S. Несмотря на небольшую площадь (640–900 м²), они довольно вместительны, и, помимо стандартных хозблока/беседки, теплицы и грядок, можно расположить дополнительные объекты, не затеснив участок.',
  },
  {
    title: 'Участок типа M',
    area: '970м²',
    type: 'средней площади',
    image: <Image alt='' width={860} height={743} src={picLink('12')} />,
    desc: 'Участки типа М, благодаря своей площади (900–1500 м²), предлагают оптимальное соотношение стоимости и пространства для комфортного размещения дома, большего по пятну застройки, и дополнительных объектов. Таких участков в посёлке чуть меньше половины (45%).',
  },
  {
    title: 'Участок типа L',
    area: '1550м²',
    type: 'индивидуальный проект',
    image: <Image alt='' width={861} height={781} src={picLink('13')} />,
    desc: 'Площадь участка типа L (1500–2200 м²) позволяет разместить на нём максимальное количество дополнительных опций. Для участка этого типа рекомендован один типовой проект дома, а кроме того, можно заказать индивидуальный проект.',
  },
];

const pointsData = [
  {
    title: 'Контрольно-пропускной пункт',
    subTitle:
      'Зона КПП спроектирована как общественное пространство, в центре которого — амфитеатр с фонтаном. В дизайне малых архитектурных форм используются простые формы, что не визуально не нагружает окружение и создаёт современный характер среды',
    image: <Image alt='' width={560} height={626} src={picLink('06')} />,
    imageMob: <Image alt='' width={480} height={537} src={picLink('06')} />,
    points: [
      'Спортивная площадка',
      'Здание свободного назначения',
      'Зона погрузки-выгрузки товара',
      'Озеленение',
      'Магазин с кафе 340 м²',
      'Зона отдыха',
      'Парковка',
      'Контрольно-пропускной пункт',
    ],
  },
  {
    title: 'Сквер',
    subTitle:
      'Ключевые решения включают в себя геопластику, с помощью которой создаются островки-холмы в зоне отдыха, а также использование мягких покрытий на игровых пространствах, обеспечивающих нужный уровень безопасности, а кроме того уменьшающих нагрузку на ливневую канализацию благодаря водопроницаемости.',
    image: <Image alt='' width={560} height={354} src={picLink('07')} />,
    imageMob: <Image alt='' width={480} height={303} src={picLink('07')} />,
    points: [
      'Дорожка для бега/ходьбы',
      'Зона совместного использования  (shared space)',
      'Спортивная площадка',
      'Зона отдыха',
      'Качели',
      'Детская игровая площадка',
    ],
  },
  {
    title: 'Детский центр с игровыми площадками',
    subTitle:
      'Детский центр, рассчитанный на детей нескольких возрастных групп, проектируется в качестве объекта социальной инфраструктуры для жителей посёлка и прилегающих территорий',
    image: <Image alt='' width={560} height={430} src={picLink('08')} />,
    imageMob: <Image alt='' width={480} height={336} src={picLink('08')} />,
    points: [
      'Игровая площадка',
      'Площадка для сбора',
      'Павильон',
      'Дорожка для бега/ходьбы',
      'Парковка',
      'Огород',
      'Детский центр (пятно застройки 300 м², 2 этажа)',
      'Пожарный проезд',
      'Зона отдыха',
      'Навес для колясок',
      'Площадка ТБО',
      'Площадка посадки-высадки',
    ],
  },
];

const houseData: HouseCardInfo[] = [
  {
    title: 'Светлый вариант',
    image: <Image alt='' width={520} height={337} src={picLink('15')} />,
    imageMob: <Image alt='' width={440} height={256} src={picLink('15')} />,
    desc: [
      { element: 'Кровля', color: 'Мягкая кровля, RAL 7024 мокрый асфальт' },
      { element: 'Подшив свеса кровли', color: 'Планкен, светлое дерево' },
      { element: 'Отделка фасада 1-го этажа', color: 'Терамо Брик 350–80' },
      { element: 'Отделка фасада 2-го этажа', color: 'Терамо Брик 350–80' },
      {
        element: 'Декоративные вставки на фасаде',
        color: 'Штукатурка, RAL 9003',
      },
      { element: 'Оконные рамы', color: 'Ламинация, RAL 7024 мокрый асфальт' },
      { element: 'Цоколь', color: 'Штукатурка, RAL 7024 мокрый асфальт' },
      { element: 'Ламели', color: 'Светлое дерево' },
      { element: 'Ограждение балкона', color: 'Стекло' },
    ],
  },
  {
    title: 'Тёмный вариант',
    image: <Image alt='' width={520} height={303} src={picLink('16')} />,
    imageMob: <Image alt='' width={440} height={256} src={picLink('16')} />,
    desc: [
      { element: 'Кровля', color: 'Мягкая кровля, RAL 7024 мокрый асфальт' },
      { element: 'Подшив свеса кровли', color: 'Планкен, тёмное дерево' },
      { element: 'Отделка фасада 1-го этажа', color: 'Терамо Брик II 364–70' },
      { element: 'Отделка фасада 2-го этажа', color: 'Терамо Брик II 364–70' },
      {
        element: 'Декоративные вставки на фасаде',
        color: 'Штукатурка, RAL 7024 мокрый асфальт',
      },
      { element: 'Оконные рамы', color: 'Ламинация, RAL 7024 мокрый асфальт' },
      { element: 'Цоколь', color: 'Штукатурка, RAL 7024 мокрый асфальт' },
      { element: 'Ламели', color: 'Коричневое дерево дерево' },
      { element: 'Ограждение балкона', color: 'Стекло' },
    ],
  },
  {
    title: 'Контрастный вариант',
    image: <Image alt='' width={520} height={304} src={picLink('17')} />,
    imageMob: <Image alt='' width={440} height={256} src={picLink('17')} />,
    desc: [
      { element: 'Кровля', color: 'Мягкая кровля, RAL 7024 мокрый асфальт' },
      { element: 'Подшив свеса кровли', color: 'Планкен, коричневое дерево' },
      { element: 'Отделка фасада 1-го этажа', color: 'Штукатурка, RAL 9003' },
      {
        element: 'Отделка фасада 2-го этажа',
        color: 'Планкен, коричневое дерево',
      },
      {
        element: 'Декоративные вставки на фасаде',
        color: '—',
      },
      { element: 'Оконные рамы', color: 'Ламинация, RAL 8017 шоколад' },
      { element: 'Цоколь', color: 'Штукатурка, RAL 7024 мокрый асфальт' },
      { element: 'Ламели', color: 'Коричневое дерево' },
      { element: 'Ограждение балкона', color: 'Стекло' },
    ],
  },
];

const HouseCard: FC<HouseCardInfo> = ({ desc, image, index, title }) => (
  <Grid className='bg-beige p-10'>
    <div className='col-span-4'>
      <span className='text-h5 font-medium text-grey'>{index}</span>
      <span className='text-body block my-10'>{title}</span>
      {image}
    </div>
    <div className='col-span-7'>
      <Grid cols={7} className='border-b border-medium-grey'>
        <div className='col-span-3 border-l border-medium-grey pb-8'>
          <span className='ml-4 text-body font-medium'>Элемент здания</span>
        </div>
        <div className='col-span-4 border-l border-medium-grey pb-8'>
          <span className='text-body font-medium ml-4'>Цвет, материал</span>
        </div>
      </Grid>
      {desc.map((item, index) => (
        <Grid
          cols={7}
          key={item.color + index}
          className='py-4 border-b border-medium-grey text-body-regular font-light'
        >
          <div className='ml-4 col-span-3'>
            <span>{item.element}</span>
          </div>
          <div className='ml-4 col-span-4'>
            <span>{item.color}</span>
          </div>
        </Grid>
      ))}
    </div>
  </Grid>
);

const HouseCardMobile: FC<HouseCardInfo> = ({ desc, image, title, index }) => (
  <div className='col-span-2 space-y-14'>
    {image}
    <Collapse borderColor='border-medium-grey' title={title}>
      {desc.map((item, index) => (
        <Grid
          key={item.color + index}
          className={classNames(
            'text-body-regular-mob font-light py-4 border-medium-grey',
            {
              'border-t': index > 0,
            }
          )}
        >
          <div className='col-span-1'>{item.element}</div>
          <div className='col-span-1'>{item.color}</div>
        </Grid>
      ))}
    </Collapse>
  </div>
);

const paramData = [
  {
    title: 'Размер и расположение участка',
    desc: 'Расположение участков в посёлке зависит от их размера. Более крупные (типы М, L) находятся ближе к окраине посёлка и прилегающему лесному массиву. Участки типа S преимущественно располагаются ближе к центру посёлка.',
  },
  {
    title: 'Типы домов',
    desc: 'Разработана типология из 10 домов. Проекты варьируются по этажности (1 и 2 этажа), общей площади дома и площади застройки, а также площади террас и балконов.',
  },
  {
    title: 'Палитра цветов и материалов',
    desc: 'Дизайн-код содержит рекомендуемые цвета и материалы, используемые в фасадах домов, а также три варианта отделки (светлый, тёмный, контрастный). На одной улице рекомендуется использовать не более двух вариантов (рекомендуемые пары: светлый + контрастный / тёмный + контрастный)',
  },
];

const PointDataRow: FC<{
  title: string;
  subTitle: string;
  image: ReactElement;
  points: string[];
}> = ({ image, points, subTitle, title }) => (
  <Grid className='mt-40'>
    <div className='col-span-4'>
      <span className='block mb-6 text-h5 font-medium'>{title}</span>
      <span className='text-body-regular font-light'>{subTitle}</span>
    </div>
    <div className='col-span-4'>{image}</div>
    <div className='col-span-4 space-y-6'>
      {points.map((item, index) => (
        <span key={item + index} className='block'>
          <span className='text-body font-medium'>
            {addLeadingZero(index + 1)}
          </span>
          <span className='ml-4 text-body-regular font-light'>{item}</span>
        </span>
      ))}
    </div>
  </Grid>
);

const TypologyCard: FC<{
  index: string;
  title: string;
  area: string;
  type: string;
  desc: string;
  reverse: boolean;
  image: ReactElement;
}> = ({ desc, image, index, area, type, title, reverse }) => (
  <Grid className='pt-4 border-t border-medium-grey'>
    <div className='col-span-12 mb-16'>
      <span className='text-h5 font-medium text-grey'>{index}</span>
    </div>
    <div className={classNames('col-span-4', { 'order-2': reverse })}>
      <span className='text-h5 font-medium block'>{title}</span>
      <span className='text-body font-medium block mt-1'>
        Площадь участка — {area}
      </span>
      <span className='text-body font-medium pb-6 border-b border-medium-grey block'>
        Тип дома — {type}
      </span>
      <span className='text-body-regular font-light mt-6 block'>{desc}</span>
    </div>
    <div className={classNames('col-span-6', { 'col-start-3': reverse })}>
      {image}
    </div>
  </Grid>
);

const MaksimovoPage = async () => {
  const { t } = await createTranslation('common');
  return (
    <div className='mt-30 md:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Коттеджный посёлок «Максимово парк»'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Фото до реализации существующего положения'
          status={t('status.in_progress')}
          area={'64 га'}
          location={'Городской округ Истра, Московская область'}
          subTitle='Дизайн-проект благоустройства и типология застройки посёлка «Максимово парк»'
          type={'Исследование, мастер-план, дизайн-код, благоустройство'}
          year='2023–2024'
        />
      </section>
      <Image
        className='mt-10 md:hidden block'
        alt=''
        width={480}
        height={340}
        src={picLink('18')}
      />
      <PageMarginWithTitle>
        <section>
          <Grid className='md:mt-50'>
            <div className='col-span-2 md:col-span-8'>
              <Image
                className='md:block hidden'
                alt=''
                width={1160}
                height={923}
                src={picLink('03')}
              />
            </div>
            <div className='md:mt-0 mt-6 col-span-2 md:col-span-4 space-y-6'>
              <MapDescRow subTitle='До Кремля' title='79 км' horizontal />
              <MapDescRow subTitle='До Истры' title='6 км' horizontal />
              <MapDescRow
                subTitle='До железнодорожной станции Истра'
                title='7 км'
                horizontal
              />
              <MapDescRow
                subTitle='До аэропорта Шереметьево'
                title='6 км'
                horizontal
              />
              <MapDescRow
                subTitle='До станции Пятницкое шоссе'
                title='45 км'
                horizontal
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                Видение
              </span>
            </div>
            <div className='col-span-2 md:col-span-8 mt-4 md:mt-0'>
              <span className='text-body-regular-mob md:text-h5 font-light'>
                В основе проекта — идея создания единого зелёного пешеходного
                маршрута, который проходит через зелёные общественные
                пространства посёлка. Использование цветущих плодовых растений
                позволит посёлку обрести индивидуальность и менять облик на
                протяжении всего года в соответствии с циклом плодоношения.
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-16 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob md:text-h4 md:mt-16 font-medium block'>
                Генеральный план и фрагменты благоустройства
              </span>
              <span className='text-body-regular font-light mt-4 md:mt-6 block'>
                Под общественные пространства отведено 7 участков общей площадью
                0,9 га (не включая территорию детского сада).
              </span>
            </div>
            <div className='col-span-2 md:col-span-8 md:grid hidden'>
              <Image alt='' width={1160} height={774} src={picLink('04')} />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        className='block md:hidden mt-10 mb-4'
        alt=''
        width={480}
        height={296}
        src={picLink('19')}
      />
      <PageMarginWithTitle>
        <section className='block md:hidden'>
          <Grid>
            <div className='col-span-2 flex flex-col space-y-2 mb-30'>
              {generalPlanMob.map((item, index) => (
                <span
                  className='text-body-caption-mob font-light'
                  key={item + index}
                >
                  {addLeadingZero(index + 1)} — {item}
                </span>
              ))}
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <PageMarginWithTitle>
        <section>
          <Grid className='md:mt-50 border-t md:border-y border-medium-grey py-6'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob mb-10 md:mb-0 block md:text-h4 font-medium'>
                Поселок-сад
              </span>
            </div>
            <div className='col-span-2 md:col-span-6'>
              <span className='text-h4-mob md:text-h5 font-medium'>
                Идентичность территории
              </span>
              <span className='text-body-regular-mob md:text-body-regular font-light mt-4 block'>
                Плодовые культуры, такие как яблоня, вишня, груша, хорошо себя
                чувствуют в Московском регионе. Они могут стать визитной
                карточкой посёлка. Также растительные мотивы могут быть
                использованы в декоративных элементах благоустройства.
              </span>
              <Image
                alt=''
                width={860}
                height={531}
                src={picLink('05')}
                className='hidden md:block my-6'
              />
              <span className='hidden md:block text-body-regular font-light mt-4'>
                Экономические примечания к Павловскому межеванию (около 1800
                года) описываютМаксимовку в следующих выражениях: «Сельцо на
                суходоле при пруде, в нем саженая рыба — караси. Дачею на правом
                берегу Грецкой, Грязновка тож. Дом господский деревянный, а при
                нем сад с плодовитыми деревьями. Земля сероглинистая и ко урожаю
                хлеба: ржи, овса и гречи довольно способна; покосы средственны
                (то есть среднего качества). Лес дровяной: берёзовый и осиновый,
                в нем бывают звери: зайцы, птицы: тетерева, дрозды и соловьи…»
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Image
        alt=''
        width={480}
        height={296}
        src={picLink('05')}
        className='block md:hidden'
      />
      <PageMarginWithTitle>
        <Grid className='grid md:hidden'>
          <div className='col-span-2'>
            <span className='block text-body-regular-mob font-light mt-4 pb-4 border-b border-medium-grey'>
              Экономические примечания к Павловскому межеванию (около 1800 года)
              описываютМаксимовку в следующих выражениях: «Сельцо на суходоле
              при пруде, в нем саженая рыба — караси. Дачею на правом берегу
              Грецкой, Грязновка тож. Дом господский деревянный, а при нем сад с
              плодовитыми деревьями. Земля сероглинистая и ко урожаю хлеба: ржи,
              овса и гречи довольно способна; покосы средственны (то есть
              среднего качества). Лес дровяной: берёзовый и осиновый, в нем
              бывают звери: зайцы, птицы: тетерева, дрозды и соловьи…»
            </span>
          </div>
        </Grid>
        <section className='mt-20 hidden md:block'>
          {pointsData.map((item) => (
            <PointDataRow {...item} key={item.title} />
          ))}
        </section>
        <section className='md:hidden'>
          <Grid>
            {pointsData.map((item, index) => (
              <div key={item.title + index} className='col-span-2'>
                <Collapse borderColor='border-medium-grey' title={item.title}>
                  <Grid>
                    <div className='col-span-2'>
                      <span className='text-body-regular-mob font-light'>
                        {item.subTitle}
                      </span>
                      <div className='mb-4 mt-10'>{item.imageMob}</div>
                    </div>
                    <div className='col-span-1 flex flex-col space-y-2'>
                      {item.points
                        .slice(0, Math.round(item.points.length / 2))
                        .map((subItem, index) => (
                          <span
                            className='text-body-caption-mob font-light'
                            key={subItem + index}
                          >
                            {addLeadingZero(index + 1)} {subItem}
                          </span>
                        ))}
                    </div>
                    <div className='col-span-1 flex flex-col space-y-2'>
                      {item.points
                        .slice(Math.round(item.points.length / 2))
                        .map((subItem, index) => (
                          <span
                            className='text-body-caption-mob font-light'
                            key={subItem + index}
                          >
                            {addLeadingZero(
                              index + Math.round(item.points.length / 2) + 1
                            )}{' '}
                            {subItem}
                          </span>
                        ))}
                    </div>
                  </Grid>
                </Collapse>
              </div>
            ))}
          </Grid>
        </section>
      </PageMarginWithTitle>
      <PageMarginWithTitle collapseMob>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-2 md:col-span-12'>
              <ImageWithCaption
                width={1760}
                className='block md:hidden'
                height={1100}
                fullWidth
                src={picLink('09')}
                title='Визуализация второстепенной улицы (2-я и 3-я линии)'
              />
              <ImageWithCaption
                className='hidden md:block'
                width={1760}
                height={1100}
                src={picLink('09')}
                title='Визуализация второстепенной улицы (2-я и 3-я линии)'
              />
            </div>
            <div className='hidden md:grid col-span-2 md:col-span-8 md:col-start-5 mt-12'>
              <ImageWithCaption
                width={1160}
                height={698}
                src={picLink('10')}
                title='Вид на улицу возле центрального сквера'
              />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-30 md:mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                Дизайн-код
              </span>
              <span className='text-h4-mob md:text-h5 mt-10 md:mt-1 text-grey block font-medium'>
                Идентичность улиц
              </span>
            </div>
            <div className='col-span-2 md:col-span-4 md:mt-0 mt-4'>
              <span className='text-body-regular-mob md:text-body-regular font-light'>
                Дизайн-код выделяет два типа улиц (главные и второстепенные),
                содержит типологию участков по площади (S, M, L), а также
                типологию жилых домов, отличающихся по площади и планировочным
                решениям (10 типов). Для каждого типа участков и улиц
                рекомендуются определённые типы домов. У каждой улицы, таким
                образом, появляется своё узнаваемое лицо.
              </span>
            </div>
            <div className='col-span-2 md:col-span-4 md:mt-0 mt-4'>
              <span className='text-body-regular-mob md:text-body-regular font-light'>
                Для создания целостного образа посёлка и формирования
                идентичности улиц проект регулирует отдельные параметры
                застройки участков, в частности, максимальный процент
                застроенности участка, высоту ограждений на красных линиях улиц,
                максимальный отступ застройки от красных линий, отметку входов
                над уровнем тротуара. Кроме того, не рекомендуется размещать
                автостоянку на улице.
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <ImageWithCaption
        className='mt-20 md:hidden'
        width={1160}
        fullWidth
        height={698}
        src={picLink('10')}
        title='Вид на улицу возле центрального сквера'
      />
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-30'>
            <div className='col-span-2 md:col-span-12 mb-10'>
              <span className='text-h3-mob md:text-h5 font-medium'>
                Основные параметры
              </span>
            </div>
            {paramData.map((item, index) => (
              <GreyCard
                index={addLeadingZero(index + 1)}
                {...item}
                key={item.title}
              />
            ))}
          </Grid>
        </section>
        <section>
          <Grid className='mt-20 md:mt-50 md:mb-20 mb-10'>
            <div className='col-span-2 md:col-span-12'>
              <span className='text-h3-mob md:text-h4 font-medium'>
                Типология застройки участков
              </span>
            </div>
          </Grid>
          <div className='flex flex-col md:hidden'>
            <Collapse
              title='01 Участок типа S'
              borderColor='border-medium-grey'
            >
              01 Участок типа S
            </Collapse>
            <Collapse
              title='02 Участок типа M'
              borderColor='border-medium-grey'
            >
              01 Участок типа M
            </Collapse>
            <Collapse
              title='03 Участок типа L'
              borderColor='border-medium-grey'
            >
              01 Участок типа L
            </Collapse>
          </div>
          <div className='hidden md:flex flex-col space-y-32'>
            {typologyData.map((item, index) => (
              <TypologyCard
                reverse={index % 2 !== 0}
                key={item.area + index}
                index={addLeadingZero(index + 1)}
                {...item}
              />
            ))}
          </div>
        </section>
        <section className='hidden md:block'>
          <Grid className='mt-50'>
            <div className='col-span-2 md:col-span-4'>
              <span className='text-h4 font-medium'>
                Вариативность в едином стиле
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <span className='text-body-regular font-light'>
                Дизайн-код закладывает варианты цветов и материалов отделки
                практически всех элементов экстерьера дома-от цоколя до подшива
                свеса кровли. Наложение трёх цветовых схем отделки (светлой,
                тёмной и контрастной) на десять типовых проектов домов позволяет
                добиться разнообразия, при сохранении единого выраженного стиля
                посёлка в целом.
              </span>
            </div>
            <div className='col-span-2 md:col-span-8 md:col-start-5 mt-30'>
              <Image alt='' width={1010} height={603} src={picLink('14')} />
            </div>
          </Grid>
        </section>
        <section className='hidden md:block'>
          <Grid className='mt-40'>
            <span className='col-span-2 md:col-span-12 block mb-10 text-h5 font-medium'>
              Варианты отделки
            </span>
          </Grid>
          <div className='flex flex-col space-y-10'>
            {houseData.map((item, index) => (
              <HouseCard
                {...item}
                key={item.title + index}
                index={addLeadingZero(index + 1)}
              />
            ))}
          </div>
        </section>
        <section className='block md:hidden'>
          <Grid className='mt-30 mb-14'>
            <span className='col-span-2 block text-h3-mob font-medium'>
              Варианты отделки
            </span>
          </Grid>
          <div className='flex flex-col space-y-14'>
            {houseData.map((item, index) => (
              <HouseCardMobile {...item} key={item.title + index} />
            ))}
          </div>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default MaksimovoPage;
