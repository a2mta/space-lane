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
const picLink = makePicLink('oleniy-park');

type RouteRowType = {
  title: string;
  index: string;
  route: { amount: string; start: string; length: string; duration: string };
  description: string;
};

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
    items: [
      'Подъезд для обслуживания',
      'Открытая терраса под навесом с умывальниками',
      'Подпорная стена из габионов с местным камнем',
    ],
  },
  {
    title: 'Банный комплекс',
    image: '29',
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
    index: '01',
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
  <Grid className='pt-6 border-t border-medium-grey'>
    <div className='col-span-4'>
      <H5Medium inline className=' text-grey mr-4'>
        {index}
      </H5Medium>
      <H5Medium inline>{description}</H5Medium>
    </div>
    <div className='col-span-4 space-y-4'>
      <div className='flex'>
        <H5Medium className='mr-2 text-grey'>Начало/окончание:</H5Medium>
        <H5Medium>{route.start}</H5Medium>
      </div>
      <div className='flex'>
        <H5Medium className='mr-2 text-grey'>Количество:</H5Medium>
        <H5Medium>{route.amount}</H5Medium>
      </div>
      <div className='flex'>
        <H5Medium className='mr-2 text-grey'>Длина:</H5Medium>
        <H5Medium> {route.length}</H5Medium>
      </div>
      <div className='flex'>
        <H5Medium className='mr-2 text-grey'>Продолжительность:</H5Medium>
        <H5Medium> {route.duration}</H5Medium>
      </div>
    </div>
    <div className='col-span-4'>
      <H5Medium>{description}</H5Medium>
    </div>
  </Grid>
);

const HomeCard: FC<{
  index: string;
  title: string;
  image: string;
  items: string[];
}> = ({ image, index, items, title }) => (
  <div className='col-span-6 pt-6 mb-24 border-t border-grey'>
    <Grid cols={6}>
      <div className='col-span-6 mb-6'>
        <H5Medium>
          {index} — {title}
        </H5Medium>
      </div>
      <div className='col-span-4'>
        <Image alt='' width={560} height={424} src={picLink(image)} />
      </div>
      <div className='col-span-2 space-y-4'>
        {items.map((item, index) => (
          <BodyRegular key={item + index}>
            {addLeadingZero(index + 1)} — {item}
          </BodyRegular>
        ))}
      </div>
    </Grid>
  </div>
);

const OleniyParkPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-50 w-full'>
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
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <TextH4 className='mb-12'>
                Анализ территории и создание бренда через архитектуру
              </TextH4>
              <H5Medium>Аудитория</H5Medium>
              <BodyRegular className='mt-4'>
                Мы провели исследование того, как используется территории парка.
                Ключевая проблема кроется в недостаточном разнообразии сценариев
                для посещения парка и ориентации только на одну категорию
                посетителей — приезжающих на экскурсию. Несмотря на то, что
                животные и природа — основное событие парка, необходимо
                сосредоточиться на высоком разнообразии и качестве
                инфраструктуры и программы отдыха для туристов. Мастер-планом
                предлагается организовать входную зону, проложить новые маршруты
                и поработать с ландшафтом.
              </BodyRegular>
            </div>
            <div className='col-span-8'>
              <Image alt='' width={1160} height={724} src={picLink('03')} />
            </div>
          </Grid>
          <Grid className='mt-6'>
            <div className='col-span-4 space-y-6'>
              {borderData.map((item, index) => (
                <ExplicationRow key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
            <div className='col-span-4 space-y-6'>
              {borderData2.map((item, index) => (
                <ExplicationRow key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
            <div className='col-span-4 space-y-6'>
              {borderData3.map((item, index) => (
                <ExplicationRow key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <Grid className='my-50'>
        <div className='col-span-12'>
          <Image alt='' width={1920} height={1030} src={picLink('14')} />
        </div>
      </Grid>
      <PageMarginWithTitle>
        <Grid>
          <div className='col-span-4'>
            <TextH4>Мастер-план территории</TextH4>
            <H5Regular className='text-grey mt-4'>Схема генплана</H5Regular>
          </div>
          <div className='col-span-8'>
            <BodyRegular>
              Чтобы расширить аудиторию посетителей парка, предлагается
              модернизировать существующий гостиничный фонд парка и заложить
              основу для разнообразных и современных форматов проживания на
              территории для различных категорий пользователей
            </BodyRegular>
            <Image
              className='mt-16'
              alt=''
              width={860}
              height={846}
              src={picLink('15')}
            />
          </div>
        </Grid>
        <Grid className='mt-40'>
          <div className='col-span-4'>
            <TextH4>Входная зона</TextH4>
          </div>
          <div className='col-span-8'>
            <BodyRegular>
              Входная зона парка распологается в самом начале пути, недалеко от
              статуи оленя, рядом с будущими посадками павлонии и с видом на
              Никольскую церковь. Для удобного подъезда и разворота
              туристических автобусов предусматривается устройство объездной
              дороги.
            </BodyRegular>
            <Image
              className='mt-16'
              alt=''
              width={1160}
              height={694}
              src={picLink('16')}
            />
          </div>
        </Grid>
        <Grid className='mt-30'>
          <div className='col-span-7'>
            <Image alt='' width={1010} height={634} src={picLink('17')} />
          </div>
          <div className='col-span-5'>
            <BodyRegular className='mt-8'>
              Входная зона также включает в себя три здания: визит-центр, кафе с
              открытой террасой и прокат. При благоустройстве территории
              предлагается использовать ценные местные виды растений и
              композиции из местного камня.
            </BodyRegular>
          </div>
        </Grid>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-7'>
              <Image alt='' width={1010} height={990} src={picLink('18')} />
            </div>
            <div className='col-span-5'>
              <Image alt='' width={710} height={990} src={picLink('19')} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12 mb-16'>
              <TextH4>Архитектурные решения</TextH4>
            </div>
            <div className='col-span-12 mb-4'>
              <BodyRegular className='mb-4'>Прокат</BodyRegular>
            </div>
            <div className='col-span-4'>
              <Image alt='' width={560} height={658} src={picLink('20')} />
            </div>
            <div className='col-span-3'>
              <Image alt='' width={410} height={629} src={picLink('21')} />
            </div>
            <div className='col-span-5'>
              <BodyRegular className='mt-14'>
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
          <Grid className='mt-30'>
            <div className='col-span-12 mb-4'>
              <BodyRegular>Визит-центр</BodyRegular>
            </div>
            <div className='col-span-4'>
              <Image alt='' width={560} height={658} src={picLink('22')} />
            </div>
            <div className='col-span-3'>
              <Image alt='' width={410} height={629} src={picLink('23')} />
            </div>
            <div className='col-span-5'>
              <BodyRegular className='mt-14'>
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
          <Grid className='mt-30'>
            <div className='col-span-12 mb-4'>
              <BodyRegular>Визит-центр</BodyRegular>
            </div>
            <div className='col-span-4'>
              <Image alt='' width={560} height={658} src={picLink('24')} />
            </div>
            <div className='col-span-3'>
              <Image alt='' width={410} height={629} src={picLink('25')} />
            </div>
            <div className='col-span-5'>
              <BodyRegular className='mt-14'>
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
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <TextH4 className='mb-4'>Дома под аренду</TextH4>
              <BodyRegular className='text-grey'>Схема генплана</BodyRegular>
            </div>
            <div className='col-span-8'>
              <BodyRegular className='mb-16'>
                Устройство домов под аренду на месте заброшенной деревни
                Яблоново станет символом возвращения жизни в эти места.Мы
                предлагаем сохранить естественно сложившуюся планировку, что
                позволит соблюсти водоохранное расстояние и раскрыть виды.
                Частичное восстановление заброшенных садов и создание новых
                позволит организовать естественные границы между участками домов
                и индивидуальные патио. И, что не менее важно — в парке появится
                ещё один живописный уголок.
              </BodyRegular>
              <Image alt='' width={860} height={715} src={picLink('26')} />
            </div>
          </Grid>
          <Grid className='mt-40'>
            <div className='col-span-4'>
              <TextH4 className='mb-4'>Глэмпинг</TextH4>
              <BodyRegular className='text-grey'>Схема генплана</BodyRegular>
            </div>
            <div className='col-span-8'>
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
              <Image alt='' width={860} height={825} src={picLink('27')} />
            </div>
          </Grid>
        </section>
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
          <Grid className='mt-16'>
            <div className='col-span-4'>
              <TextH4>Туристические маршруты</TextH4>
            </div>
            <div className='col-span-8'>
              <BodyRegular>
                Мы предложили несколько типов маршрутов разной протяжённости для
                различных категорий пользователей и способов передвижения —
                пеших, конных, велосипедных, автомобильных
              </BodyRegular>
            </div>
          </Grid>
          <Grid className='mt-30'>
            <div className='col-span-4'>
              <H5Medium>Идеология</H5Medium>
            </div>
            <div className='col-span-4'>
              <H5Medium className='mb-12'>
                Разнообразие маршрутов и уникальный пользовательский опыт
              </H5Medium>
              <div className='flex flex-col space-y-10 pb-10'>
                {routesData.map((item, index) => (
                  <RouteCard key={index} {...item} />
                ))}
              </div>
            </div>
            <div className='col-span-4 border-l border-black pl-10 space-y-6'>
              <H5Medium>Экскурсионные маршруты</H5Medium>
              <H5Medium>Аудио маршруты</H5Medium>
              <H5Medium>Схемы/тексты</H5Medium>
              <H5Medium>Квесты</H5Medium>
            </div>
          </Grid>
          <Grid className='my-30'>
            <div className='col-start-5 col-span-8'>
              <Image alt='' width={1160} height={773} src={picLink('32')} />
            </div>
          </Grid>
        </section>
        <section className='space-y-20'>
          {routesRowData.map((item, index) => (
            <RoutesRow key={index} {...item} />
          ))}
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <TextH4>Сервисы</TextH4>
              <BodyRegular className='mt-4'>
                Посетители могут прогуляться пешком, наслаждаясь красотой
                окружающей природы, или прокатиться верхом на лошади, чтобы
                лучше рассмотреть оленей вблизи
              </BodyRegular>
              <BodyRegular className='mt-4'>
                Для любителей активного отдыха предусмотрены велосипедные и
                автомобильные маршруты, которые позволяют исследовать парк на
                колёсах
              </BodyRegular>
            </div>
            <div className='col-span-8'>
              <Image alt='' width={1160} height={773} src={picLink('33')} />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-36'>
            <div className='col-span-12'>
              <Collapse title='01 Пешеходные маршруты'>
                <Grid>
                  <div className='col-start-5 col-span-8 mb-10'>
                    <H5Medium>
                      Пешие маршруты проложены в границах парка с учётом
                      раскрытия пейзажных видов и возможности наблюдения за
                      флорой и фауной
                    </H5Medium>
                  </div>
                  <div className='col-span-4'>
                    <div className='flex flex-col'>
                      <H5Medium>Короткие маршруты</H5Medium>
                      <Grid cols={4} className='mt-6'>
                        <div className='flex flex-col space-y-4 col-span-3'>
                          <div className='flex  justify-between items-center'>
                            <BodyMedium>Маршрут ПМ1, ПМ2</BodyMedium>
                          </div>
                          <BodyRegular>
                            4,0 км — 2 часа + 20 мин, отдых
                          </BodyRegular>
                          <BodyRegular>
                            4,2 км — 2 часа 10 мин + 20 мин, отдых
                          </BodyRegular>
                        </div>
                        <div className='col-span-1'>
                          <div className='w-full mt-1 h-4 bg-[#B2D235]' />
                        </div>
                      </Grid>
                    </div>
                    <div className='flex flex-col mt-10'>
                      <H5Medium>Длинные маршруты</H5Medium>
                      <div className='flex flex-col space-y-6'>
                        <Grid cols={4} className='mt-6'>
                          <div className='flex flex-col space-y-4 col-span-3'>
                            <div className='flex justify-between items-center'>
                              <BodyMedium>Обзорный маршрут ПО1</BodyMedium>
                            </div>
                            <BodyRegular>
                              9,5 км — 4 часа 45 мин + 1 час остановки и отдых
                            </BodyRegular>
                          </div>
                          <div className='col-span-1'>
                            <div className='w-full mt-1 h-4 bg-[#E1E887]' />
                          </div>
                        </Grid>
                        <Grid cols={4} className='mt-6'>
                          <div className='flex flex-col space-y-4 col-span-3'>
                            <div className='flex justify-between items-center'>
                              <BodyMedium>Обзорный маршрут ПО2</BodyMedium>
                            </div>
                            <BodyRegular>
                              14,8 км и 4,3 км возврат всего 9 часов 33 мин. + 1
                              час остановки
                            </BodyRegular>
                          </div>
                          <div className='col-span-1'>
                            <div className='w-full mt-1 h-4 bg-[#94B479]' />
                          </div>
                        </Grid>
                        <Grid cols={4} className='mt-6'>
                          <div className='flex flex-col space-y-4 col-span-3'>
                            <div className='flex justify-between items-center'>
                              <BodyMedium>Обзорный маршрут ПО3</BodyMedium>
                            </div>
                            <BodyRegular>
                              12,9 км и 4,3 км возврат всего 17,2–8 часов 35
                              мин, + 1 час остановки
                            </BodyRegular>
                          </div>
                          <div className='col-span-1'>
                            <div className='w-full mt-1 h-4 bg-[#244132]' />
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-8'>
                    <Image
                      alt=''
                      width={860}
                      height={692}
                      src={picLink('34')}
                    />
                  </div>
                </Grid>
              </Collapse>
              <Collapse title='02 Велосипедные маршруты' />
              <Collapse title='03 Конные маршруты' />
              <Collapse title='04 Автомобильные маршруты (дополнительная инфраструктура)' />
              <Collapse title='05 Пешие (дополнительная инфраструктура)' />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default OleniyParkPage;
