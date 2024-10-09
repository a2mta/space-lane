import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { addLeadingZero, makePicLink } from '@/utils';
import React, { FC } from 'react';
import { createTranslation } from '../../../../i18n/server';
import Grid from '@/components/Grid';
import ImageWithCaption from '@/components/ImageWithCaption';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Image from 'next/image';
import { IconCard } from '@/components/IconCard';

const picLink = makePicLink('corso');

const zoneData = [
  {
    title: 'Верхняя летняя терасса (площадка + стриженый газон)',
    desc: 'Установка переносной (сезонной) мебели',
  },
  {
    title: 'Прифасадная зона отдыха (палисадники)',
  },
  {
    title: 'Прогулочная зона (травяной сад)',
    desc: 'Двухместные поворотные кресла с навесом',
  },
  {
    title: 'Площадь (нижний уровень)',
    desc: 'Переносные маф под навесом',
  },
  {
    title: 'Прифасадная зона отдыха',
  },
  {
    title: 'Игровая зона',
  },
];

const greyCardsData = [
  {
    title: 'Зонирование при помощи типов мощения',
    desc: 'Цвета мощения подобраны в тон материалам фасада, чтобы поддержать целостность архитектурного образа',
    icon: <Image src={picLink('14', 'svg')} width={56} height={56} alt='' />,
  },
  {
    title: 'Эксплуатируемая кровля подземной парковки',
    desc: 'В проекте уклон ж/б основания используется для устройства амфитеатра и зелёных террас',
    icon: <Image src={picLink('15', 'svg')} width={74} height={69} alt='' />,
  },
  {
    title: 'Контраст благоустройства и архитектуры',
    desc: 'Решения подчёркивают разность масштабов компактной плазы и большого объёма жилого комплекса',
    icon: <Image src={picLink('16', 'svg')} width={69} height={63} alt='' />,
  },
  {
    title: 'Создание зелёных палисадников',
    desc: 'Палисадники вдоль фасадов разделяют потоки и создают гуманную среду у выходов из мест общего пользования',
    icon: <Image src={picLink('17', 'svg')} width={85} height={41} alt='' />,
  },
  {
    title: 'Готовые мафы для ускорения процесса реализации',
    desc: 'Использование минимального количества индивидуальных малых архитектурных форм при сохранении уникальных решений ускоряет процесс согласований и строительно-монтажные работы',
    icon: <Image src={picLink('18', 'svg')} width={85} height={49} alt='' />,
  },
  {
    title: 'Геопластика для живого ландшафта',
    desc: 'Геопластика позволяет высаживать на кровле парковки деревья-крупномеры и кустарники, создавая многоплановые композиции территории',
    icon: <Image src={picLink('19', 'svg')} width={85} height={63} alt='' />,
  },
];

const planData = [
  [
    'Контейнеры для сбора мусора',
    'Парковка',
    'Контейнеры для сбора мусора',
    'Новогодняя ель',
    'Амфитеатр',
    'Площадь',
    'Теневой навес',
    'Игровая площадка',
    'Большая радиусная скамья',
    'Прифасадная зона отдыха',
  ],
  [
    'Летнее кафе',
    'Летнее кафе',
    'Летнее кафе',
    'Отдых у игровой зоны',
    'Поляна большая (газон)',
    'Верхняя терраса для сезонной мебели',
    'Поляна малая (газон)',
    'Средняя терраса для отдыха',
    'Места отдыха в саду',
    'Летнее кафе',
  ],
];

const surfaceData = [
  {
    title: 'Тротуарная плитка «Оригами»',
    subTitle:
      'Причудливые фигуры, которые изящно складываются воедино и дополняют друг друга, напоминают мозаику, которая завораживает, с какой бы стороны вы на неё ни взглянули. В комплект входит 6 видов плит разных форм.',
  },
  {
    title: 'Лоток водоотводный полимербетонный',
    subTitle:
      'Для зон с высокими нагрузками используются монолитные водоотводные блоки из полимербетона с высокой прочностью и стойкостью, выдерживающие нагрузку до 90 тонн. Антивандальная защита, благодаря единой конструкции решётки и лотка.',
  },
  {
    title: 'Лоток водоотводной открытый бетонный',
    subTitle:
      'Преимуществом бетонных лотков при создании водоотвода является простота установки — конструкция не требует больших затрат рабочей силы, а также привлечения сложной и крупногабаритной техники.',
  },
];

const greenRowData = [
  {
    title: 'Лиственные породы (сезонное настроение)',
    desc: 'Лиственные растения в течение сезона меняют окраску листвы, что внесёт яркие акценты',
  },
  {
    title: 'Хвойные породы (основной каркас)',
    desc: 'Хвойные растения составляют каркас местных лесов, поэтому для создания во дворе среды, максимально близкой к природной, мы предлагаем использовать хвойные породы как основу круглогодичного зеленого каркаса',
  },
  {
    title: 'Многолетники (динамичные акценты)',
    desc: 'Многолетние травы подбираются с учётом смены периода цветения, визуального разнообразия по высоте, цвету, структуре. Это позволит избежать однообразия и статичности пространства',
  },
];

const GreenRow: FC<{ title: string; desc: string; index: string }> = ({
  desc,
  index,
  title,
}) => (
  <Grid className='border-t border-medium-grey pt-2'>
    <div className='col-span-4'>
      <span className='text-h4 font-medium'>{index}</span>
    </div>
    <div className='col-span-3'>
      <span className='text-h5 font-medium'>{title}</span>
    </div>
    <div className='col-span-4 col-start-9'>
      <span className='text-body-regular font-light'>{desc}</span>
    </div>
  </Grid>
);

const ZoneRow: FC<{ title: string; desc?: string; index: string }> = ({
  desc,
  index,
  title,
}) => (
  <div className='flex flex-col'>
    <span className='text-h5 font-medium'>
      {index} {title}
    </span>
    {desc && <span className='block mt-2 text-body font-light'>{desc}</span>}
  </div>
);

const PlayZoneRow: FC<{ title: string; desc: string[] }> = ({
  desc,
  title,
}) => (
  <Grid cols={4} className='pt-4 border-t border-medium-grey'>
    <div className='col-span-2'>
      <span>{title}</span>
    </div>
    <div className='col-span-2 space-y-4 flex flex-col'>
      {desc.map((item, index) => (
        <span key={item + index} className='text-body-regular font-light'>
          {item}
        </span>
      ))}
    </div>
  </Grid>
);

const SurfaceRow: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <Grid className='border-t border-medium-grey pt-4'>
    <div className='col-span-4'>
      <span className='text-h5 font-medium'>{title}</span>
    </div>
    <div className='col-span-8'>
      <span className='text-body-regular font-light'>{subTitle}</span>
    </div>
  </Grid>
);

const DescRow: FC<{ item: string; index: number }> = ({ index, item }) => (
  <span className='text-body-caption-mob md:text-body-regular font-light block'>
    {`${addLeadingZero(index + 1)} — ${item}`}
  </span>
);

const CorsoPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-30 lg:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Жилой комплекс Corso'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Вид на пересечение ул. Марата и Цесовской набережной'
          status={t('status.in_release_process')}
          area={'0,87 га'}
          location={'Иркутск'}
          subTitle={
            'Дизайн-проект благоустройства в Правобережном округе г. Иркустка'
          }
          type={'Благоустройство'}
          year='2022'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-30'>
            <div className='md:col-span-4 col-span-2 mb-9 lg:mb-0'>
              <span className='text-body-regular-mob lg:text-body-regular font-light'>
                Разрабатывая концептуальные решения приватного дворового
                пространства, мы хотели поддержать мотивы классической
                итальянской архитектуры, которые характерны для экстерьера
                здания. Так, во дворе симметричного П-образного дома появилась
                небольшая плаза, лёгкая пергола и многуровневый амфитеатр
              </span>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <ImageWithCaption
                src={picLink('03')}
                width={1160}
                height={724}
                title='Вид на транзитную зону вдоль Цесовской набережной'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 border-t border-medium-grey pt-6'>
            <div className='col-span-2 md:col-span-12 mb-6'>
              <span className='text-h4 font-medium'>
                Планировочные принципы
              </span>
            </div>
            {greyCardsData.map((item, index) => (
              <IconCard
                className='mt-10'
                {...item}
                index={addLeadingZero(index + 1)}
                key={item.title + index}
              />
            ))}
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12 mb-16'>
              <span className='text-h4 font-medium'>Зонирование</span>
            </div>
            <div className='col-span-8'>
              <ImageWithCaption
                src={picLink('06')}
                height={704}
                width={1160}
                title='Для наглядности, масштаба и понимания объёмно-планировочной структуры двора растения не показаны'
              />
            </div>
            <div className='col-span-4 space-y-6'>
              {zoneData.map((item, index) => (
                <ZoneRow
                  {...item}
                  index={addLeadingZero(index + 1)}
                  key={item.title + index}
                />
              ))}
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-2 md:col-span-12'>
              <span className='text-h4 font-medium block mb-16'>
                Генеральный план
              </span>
              <span className='hidden md:block text-body-caption font-medium mb-2'>
                Схема планировочной организации территории
              </span>
            </div>
            <div className='col-span-2 md:col-span-8 md:mb-0 mb-6'>
              <Image src={picLink('04')} width={1160} height={1000} alt='' />
            </div>
            <div className='block md:hidden col-span-2'>
              <span className='text-body-caption font-medium mb-4'>
                Схема планировочной организации территории
              </span>
            </div>
            <div className='col-span-1 md:col-span-2 space-y-2 md:space-y-6'>
              {planData[0].map((item, index) => (
                <DescRow index={index} item={item} key={item + index} />
              ))}
            </div>
            <div className='col-span-1 md:col-span-2 space-y-2 md:space-y-6'>
              {planData[1].map((item, index) => (
                <DescRow
                  index={index + planData[0].length}
                  item={item}
                  key={item + index}
                />
              ))}
            </div>
          </Grid>
        </section>
        <section className='md:block hidden'>
          <Grid className='mt-30'>
            <div className='col-span-12'>
              <span className='text-body font-medium'>
                Принципиальный разрез по автостоянке
              </span>
            </div>
            <div className='col-span-12 mt-16'>
              <Image src={picLink('05')} width={1760} height={625} alt='' />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 mb-20'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Озеленение</span>
            </div>
            <div className='col-span-8'>
              <Grid cols={8}>
                <div className='xl:col-span-4 col-span-8'>
                  <span className='text-body-regular font-light'>
                    Итальянские мотивы чувствуются не только в планировочных
                    решениях, но и в озеленении. Мы постарались найти общее у
                    альпийской флоры умеренной Италии и растительности
                    Прибайкалья, где находится Иркутск. В умеренной Италии, в
                    Альпах, основными типами растительности являются хвойные
                    леса (елово-сосновые), а в субальпийском и альпийском поясах
                    — кустарниковые сообщества из можжевельников с
                    рододендронами и голубиками, а также луга и осоковоники.
                  </span>
                </div>
                <div className='xl:col-span-4 mt-4 xl:mt-0 block col-span-8'>
                  <span className='text-body-regular font-light'>
                    Как и в итальянских Альпах, в Прибайкальском регионе большую
                    часть территории занимают хвойные лесные массивы с явно
                    преобладающими разновозрастными сосняками. Чистых лесов из
                    сосны мало, обычно они растут с примесью берёз, лиственниц и
                    осин, с подлеском из таволги, ольхи, шиповника, рододендрона
                    и ягодных кустарников.
                  </span>
                </div>
              </Grid>
            </div>
          </Grid>
        </section>
        <section>
          <div className='flex flex-col space-y-16'>
            {greenRowData.map((item, index) => (
              <GreenRow
                {...item}
                index={addLeadingZero(index + 1)}
                key={item.title + index}
              />
            ))}
          </div>
        </section>
        <section>
          <Grid className='mt-40'>
            <div className='col-span-4'>
              <span className='text-h5 font-medium'>Схема озеленения</span>
              <span className='mt-6 block text-body-regular font-light'>
                Мы добиваемся ощущения выраженной идентичности за счёт
                использования характерных для этой местности растений
                (рододендрон, таволга, сосна, берёза). Преобладающие хвойные и
                декоративно-цветущие насаждения создают визуально
                привлекательную среду в течение всего года. Многолетние
                травянистые растения имитируют альпийские луговые сообщества.
                Озеленение нацелено на создание устойчивой структуры лесного
                сообщества, благодаря посадке растений крупными массивами
              </span>
            </div>
            <div className='col-span-8'>
              <Image src={picLink('07')} width={1160} height={811} alt='' />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <div className='mt-50'>
        <ImageWithCaption
          fullWidth
          src={picLink('08')}
          width={1920}
          height={1205}
          title='Вид на двор из окна жилого комплекса'
        />
      </div>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Покрытия</span>
            </div>
            <div className='col-span-8'>
              <span className='text-h5-regular font-light'>
                Покрытия поддерживают по тонам и материалы фасадов зданий. Вдоль
                фасадов выложен тёмный гранит габбро, на основной пешеходной
                части используется светлая бетонная тротуарная плитка «Оригами»
              </span>
            </div>
          </Grid>
          <div className='flex flex-col mt-20 space-y-14'>
            {surfaceData.map((item, index) => (
              <SurfaceRow {...item} key={item.title + index} />
            ))}
          </div>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Освещение</span>
            </div>
            <div className='col-span-8'>
              <span className='text-h5-regular font-light'>
                Основная часть освещения является функциональной. Мы применили
                три вида светильников: уличные, мультирожковые и торшеры. Кроме
                того, продумали декоративное освещение в виде подсветки
                деревьев, сидений амфитеатра и поручней.
              </span>
            </div>
          </Grid>
          <Grid className='mt-20'>
            <div className='col-span-4'>
              <ImageWithCaption
                src={picLink('09')}
                width={560}
                height={464}
                title='Скамейки «Gravel зима» с декоративной подсветкой'
              />
            </div>
            <div className='col-span-4'>
              <ImageWithCaption
                src={picLink('10')}
                width={560}
                height={464}
                title='Аналог подсветки поручня'
              />
            </div>
            <div className='col-span-4'>
              <ImageWithCaption
                src={picLink('11')}
                width={560}
                height={464}
                title='Аналог подсветки деревьев и сидений амфитеатра'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-48'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>Игровая зона</span>
            </div>
            <div className='col-span-4'>
              <span className='text-body-regular font-light'>
                Основная игровая зона выполнена в натуральном покрытии —
                древесная кора (или щепа) для соблюдения общей концепции
                дворовой территории — создание максимально природной среды. С
                этой же целью типовые игровые элементы составлены из серии
                Flora. Они максимально интегрированы в среду, растворятся в ней,
                но будут нести все сложенные в них развивающие функции.
              </span>
            </div>
            <div className='col-span-4'>
              <span className='text-body-regular font-light'>
                С учётом комментариев были внесены изменения в устройство
                игрового холма: с вершины убран элемент для лазания, в
                конструкцию холма добавлена сквозная труба. Сверху, для
                устойчивости, холм покрыт каучуковым покрытием песочного цвета.
                Такое же каучуковое покрытие применено под большими качелями.
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-30'>
            <div className='col-span-4 space-y-10'>
              <PlayZoneRow
                desc={['Песочница', 'Качалка', 'Качели-гнездо']}
                title='01 Игровая зона для малышей'
              />
              <PlayZoneRow
                desc={[
                  'Холм с подземным лазом',
                  'Балансиры/лазалки',
                  'Светящиеся камни-скамьи',
                  'Турник',
                  'Гамак',
                ]}
                title='02 Игровая зона подростков и взрослых'
              />
            </div>
            <div className='col-span-8'>
              <Image src={picLink('12')} width={1160} height={706} alt='' />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50 border-t border-medium-grey pt-6'>
            <div className='col-span-4'>
              <span className='text-h4 font-medium'>
                Малые архитектурные формы
              </span>
            </div>
            <div className='col-span-4'>
              <span className='text-h5 font-medium'>Временные (лето)</span>
              <span className='text-body-regular font-light block mt-2'>
                Кресла, лежаки и жезлонги для отдыха на верхней площадке
              </span>
              <span className='block mt-10 text-h5 font-medium'>
                Постоянные
              </span>
              <span className='text-body-regular font-light block mt-2'>
                Некоторые обладают мобильностью, такие как поворотные кресла с
                навесом, что позволяет дать больше сценариев для использования
                пространства между холмами
              </span>
            </div>
            <div className='col-span-4'>
              <Image src={picLink('13')} width={560} height={530} alt='' />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default CorsoPage;
