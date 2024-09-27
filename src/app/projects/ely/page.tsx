import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { addLeadingZero, makePicLink } from '@/utils';
import React, { FC, ReactElement } from 'react';
import { createTranslation } from '../../../../i18n/server';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Grid from '@/components/Grid';
import Image from 'next/image';
import { MapDescRow } from '../novoseltsevo/page';
import classNames from 'classnames';
import ImageWithCaption from '@/components/ImageWithCaption';
const picLink = makePicLink('ely');

const ExplicationRow: FC<{
  text: string;
  icon?: string;
}> = ({ text, icon }) => (
  <div className='flex'>
    <span className={classNames('w-28 h-6 mr-4', icon)} />
    <span>{text}</span>
  </div>
);

const ZoneDataRow: FC<{ text: string; icon?: string }> = ({ text, icon }) => (
  <Grid className='lg:grid-cols-4'>
    <div className='col-span-2'>{text}</div>
    <div className='col-span-2'>
      <span className={classNames('w-28 block h-6 mr-4', icon)} />
    </div>
  </Grid>
);

const TrendRow: FC<{
  title: string;
  description: string;
  icon: ReactElement;
}> = ({ description, icon, title }) => (
  <Grid className='lg:grid-cols-8'>
    <div className='col-span-4'>
      <span className='text-h5'>{title}</span>
      <span className='text-body-regular block mt-4'>{description}</span>
    </div>
    <div className='col-span-4'>{icon}</div>
  </Grid>
);

const trendData = [
  {
    title: 'Природоподобность и местные растения',
    description:
      'Используются характерные для местности растения с акцентными включениями декоративных сортовых растений. Формируемое озеленение становится частью природной экосистемы, а значит устойчиво и не нуждается в сложном уходе.',
    icon: <Image alt='' width={464} height={368} src={picLink('21')} />,
  },
  {
    title: 'Возможности ландшафта',
    description:
      'Организация дождевых садов и биодренажных канав для сбора дождевой и ливневой воды и перенаправление её в существующие водные объекты согласно рельефу.Сохранение холмистого рельефа. Сложные и крутые склоны укрепляются специальными посадками кустарников и многолетних травянистых растений.',
    icon: <Image alt='' width={560} height={218} src={picLink('22')} />,
  },
  {
    title: 'Приоритет озеленения в среде',
    description:
      'Жизнь в зелёной среде улучшает физическое и психическое здоровье, способствуя физической активности, ускоряя психологическое восстановление и снятие стресса. Максимально возможные площади отдаются под организацию озеленения.',
    icon: <Image alt='' width={560} height={412} src={picLink('23')} />,
  },
];

const solutionData = [
  {
    title: 'Элементы',
    description:
      'Выявление стратегии озеленения и расстановки элементов благоустройства и навигации на территориях общего пользования и улично-дорожной сети.',
    icon: picLink('13'),
  },
  {
    title: 'Локальные центры',
    description:
      'Создание сети взаимосвязанных центров городской жизни и функционального разнообразия для повышения качества инфраструктуры в посёлке.',
    icon: picLink('14'),
  },
  {
    title: 'Пространственные регламенты',
    description:
      'Формулирование регламентов для поддержания целостного образа жилых пространств и архитектурной концепции.',
    icon: picLink('15'),
  },
  {
    title: 'Оптимизация пространств',
    description:
      'Изменение профилей улично-дорожной сети в пользу организации вело-пешеходных тротуаров, озеленённых пространств и зон кратковременного отдыха.',
    icon: picLink('16'),
  },
  {
    title: 'Комплексное благоустройство',
    description:
      'Проектирование улиц не только как функционального городского элемента, но и как комфортных и безопасных озеленённых пространств для пользователей.',
    icon: picLink('17'),
  },
  {
    title: 'Маршруты',
    description:
      'Разработка пешеходных, велосипедных и транспортных маршрутов, способных повысить проницаемость территории и обеспечить пешеходную доступность.',
    icon: picLink('18'),
  },
];

const SolutionCard: FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ description, icon, title }) => (
  <div className='mt-32 col-span-4 border-t border-grey pt-4'>
    <div className='flex justify-between'>
      <span className='text-h5'>{title}</span>
      <Image alt='' src={icon} width={110} height={68} />
    </div>
    <span className='mt-6 block text-body-regular'>{description}</span>
  </div>
);

const zoneData = [
  { text: 'Променад (активный ритейл)', icon: 'bg-[#D56241]' },
  { text: 'Спортивная зона', icon: 'bg-[#CFA689]' },
  { text: 'Зелёная площадь', icon: 'bg-[#5F7043]' },
  { text: 'Малая площадь', icon: 'bg-[#9EA98E]' },
  { text: 'Городская площадь', icon: 'bg-[#B6BC97]' },
  { text: 'Зелёный транзит', icon: 'bg-[#364835]' },
  { text: 'Площадь у КПП', icon: 'bg-[#DCBDA8]' },
  { text: 'Детский центр', icon: 'bg-[#D69277]' },
  { text: 'Парковка', icon: 'bg-[#646464]' },
  { text: 'Хозяйственная зона', icon: 'bg-[#ABABA9]' },
];

const landScaping = [
  'Берёзовая аллея',
  'Приветственная зона у КПП',
  'Зелёная парковка',
  'Малая площадь — зона отдыха, выход кафе',
  'Выход на главную площадь',
  'Зона отдыха в тени деревьев',
  'Игровой газон зеленой площади',
  'Шезлонги у холма',
  'Игровая зона',
  'Амфитеатр',
  'Навес с пунктом охраны',
  'Террасы ресторана',
  'Прогулочный променад',
  'Зелёный буфер с зонами отдыха',
  'Скейт—парк',
  'Баскетбольное кольцо',
  'Гамаки в существующих деревьях',
  'Качели',
  'Кострище',
];

const buildingExplication = [
  'Ресторан на 100 мест',
  'Павильон',
  'Супермаркет',
  'Бар',
  'Многофункциональное здание',
  'Детский центр',
  'Хоз.блок',
];

const explicationData = [
  {
    text: 'Границы территории поселка',
    icon: 'border-dashed border-[#676968] border',
  },
  {
    text: 'Земельные участки',
    icon: 'bg-[#969F6A]',
  },
  {
    text: 'Общественные территории',
    icon: 'bg-[#5F7043]',
  },
  {
    text: 'Территория проектирования',
    icon: 'bg-[#CC7755]',
  },
  {
    text: 'Улично-дорожная сеть поселка',
    icon: 'bg-[#AEAEAC]',
  },
  {
    text: 'Территория ООПТ',
    icon: 'bg-[repeating-linear-gradient(-45deg,#fff 20px 36px,#f4f4f4 0px 40px)]',
  },
  {
    text: 'Существующие здания и сооружения',
    icon: 'border border-[#676968]',
  },
  {
    text: 'Жилые территории',
    icon: 'bg-[#D1D7D7]',
  },
  {
    text: 'Водные объекты',
    icon: 'bg-[#A7C5E7]',
  },
];

const ElyPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title={'Коттеджный посёлок «Ели»'}
          coverLink={picLink('01')}
          coverLink2={picLink('02')}
          coverLink2Title='Визуализация 1-го этапа благоустройства'
          status={t('status.in_progress')}
          area={'74,6 га'}
          location={'Городской округ Истра, Московская область'}
          subTitle={
            'Мастер-план и архитектурные решения общественных зданий коттеджного посёлка «Ели»'
          }
          type={'Исследование, мастер-план, архитектура, благоустройство'}
          year='2023–2024'
        />
      </section>
      <PageMarginWithTitle>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-8 mt-13 border border-medium-grey py-14 px-10'>
              <Grid className='lg:grid-cols-8 grid-cols-2'>
                <div className='col-span-3 space-y-4'>
                  <span className='block text-body-regular text-grey'>
                    <span className='font-semibold text-black'>58 минут</span>{' '}
                    от москвы
                  </span>
                  <span className='block text-body-regular text-grey'>
                    <span className='font-semibold text-black'>52 минуты</span>{' '}
                    от аэропорта Остафьево
                  </span>
                  <span className='block text-body-regular text-grey'>
                    <span className='font-semibold text-black'>22 минуты</span>{' '}
                    от аэропорта Внуково
                  </span>
                </div>
                <div className='col-span-4'>
                  <Image alt='' width={560} height={704} src={picLink('03')} />
                </div>
              </Grid>
            </div>
            <div className='col-span-4 space-y-6'>
              <MapDescRow
                title='74,6 га'
                subTitle='Площадь коттеджного посёлка'
              />
              <MapDescRow title='2,5 тыс.' subTitle='Жителей посёлка' />
              <MapDescRow
                title='0,68 га'
                subTitle='Озеленённые пространства общественного пользования'
              />
              <MapDescRow
                title='0,12 га.'
                subTitle='Средняя площадь земельных участков'
              />
              <MapDescRow title='41 чел/км²' subTitle='Плотность населения' />
              <MapDescRow
                title='2,6 тыс. м²/га'
                subTitle='Плотность застройки'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4 block'>Схема генерального плана</span>
              <span className='text-body-regular mt-4 block'>
                На въезде в коттеджный посёлок со стороны д. Елизарово, примыкая
                к КПП, расположена проектируемая общественная зона. Проект
                разделён на два этапа. В первый этап вошла зона КПП, в которой
                появится офис продаж посёлка и приветственная зона.
              </span>
              <span className='text-h5-regular block mt-10 mb-8'>
                Экспликация
              </span>
              <div className='flex flex-col space-y-6'>
                {explicationData.map(({ icon, text }, index) => (
                  <ExplicationRow text={text} icon={icon} key={text + index} />
                ))}
              </div>
            </div>
            <div className='col-span-5'>
              <Image alt='' width={710} height={724} src={picLink('04')} />
            </div>
            <div className='col-span-3 space-y-10'>
              <div className='flex flex-col'>
                <span className='text-body-regular mb-4'>
                  Входная группа у КПП
                </span>
                <Image alt='' width={410} height={289} src={picLink('05')} />
              </div>
              <div className='flex flex-col'>
                <span className='text-body-regular mb-4'>
                  Зелёный бульвар со спортивной и детской зоной
                </span>
                <Image alt='' width={410} height={289} src={picLink('06')} />
              </div>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-8 flex justify-between flex-col'>
              <div>
                <Image alt='' width={1160} height={770} src={picLink('07')} />
                <span className='text-body-caption mt-2'>
                  Фото реализации 1-го этапа (в процессе)
                </span>
              </div>
              <Grid className='lg:grid-cols-8 mt-3'>
                <div className='col-start-5 col-span-4'>
                  <span className='text-body-regular'>
                    Объёмно-пространственная структура въездной зоны формируется
                    системой общественных площадей вокруг главного въезда в
                    посёлок. Каждая площадь несёт определённую функцию,
                    соответствующую находящимся рядом общественным зданиям.
                  </span>
                </div>
              </Grid>
            </div>
            <div className='col-span-4'>
              <Image alt='' width={560} height={770} src={picLink('08')} />
              <span className='mt-10 text-body-regular block'>
                Кольцевые прогулочные маршруты формируют связное общественное
                пространство, удовлетворяющее потребности всех групп
                пользователей.
              </span>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>
                Схема функционального зонирования общественного ядра посёлка
              </span>
              <Grid className='lg:grid-cols-4 mt-10'>
                <div className='col-span-2'>
                  <span className='text-h4'>3,65 га</span>
                  <span className='text-body-regular block mt-4'>
                    Площадь территории проектирования
                  </span>
                </div>
                <div className='col-span-2'>
                  <span className='text-h4'>2038,1 м²</span>
                  <span className='text-body-regular block mt-4'>
                    Площадь общественных зданий
                  </span>
                </div>
                <div className='col-span-4 h-[1px] bg-grey mt-40'></div>
                <div className='col-span-4 space-y-6 mt-6'>
                  {zoneData.map(({ icon, text }) => (
                    <ZoneDataRow text={text} icon={icon} key={text + icon} />
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
              Решения по благоустройству
            </span>
            <div className='col-span-6'>
              <Image alt='' width={860} height={725} src={picLink('10')} />
            </div>
            <div className='col-span-6'>
              <Grid className='lg:grid-cols-6'>
                <div className='col-span-3 flex flex-col space-y-4'>
                  {landScaping.slice(0, 10).map((item, index) => (
                    <span key={item + index}>{`${addLeadingZero(
                      index + 1
                    )} — ${item}`}</span>
                  ))}
                </div>
                <div className='col-span-3 flex flex-col space-y-4'>
                  {landScaping.slice(10).map((item, index) => (
                    <span key={item + index}>{`${addLeadingZero(
                      index + 11
                    )} — ${item}`}</span>
                  ))}
                </div>
                <div className='col-span-6 mt-16 p-6 border border-medium-grey'>
                  <Grid className='lg:grid-cols-6'>
                    <div className='col-span-6 flex space-x-4 mb-4'>
                      <span className='text-body'>Экспликация зданий</span>
                      <span className='w-[100px] h-[26px] bg-[#DE6141] block'></span>
                    </div>
                    <div className='col-span-2 flex flex-col space-y-2'>
                      {buildingExplication.slice(0, 4).map((item, index) => (
                        <span key={item + index}>{`${addLeadingZero(
                          index + 1
                        )} — ${item}`}</span>
                      ))}
                    </div>
                    <div className='col-span-4 flex flex-col space-y-2'>
                      {buildingExplication.slice(4).map((item, index) => (
                        <span key={item + index}>{`${addLeadingZero(
                          index + 5
                        )} — ${item}`}</span>
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
              <span className='text-h4'>Визуализация</span>
              <span className='mt-6 text-body-regular block'>
                Зоны у КПП образуют приветственные площади посёлка. Прогулочный
                путь посетителя проходит либо через систему общественных
                площадей, либо вдоль променада с объектами ритейла. Шумная
                спортивная зона отделена от прогулочных зелёной парковкой и
                проездом в качестве буфера. Территория Детского центра имеет
                отдельные въезды, расположенные внутри территории посёлка.
              </span>
            </div>
            <div className='col-span-8 space-y-10'>
              <ImageWithCaption
                width={1160}
                height={820}
                src={picLink('11')}
                title='Скейт-парк'
              />
              <ImageWithCaption
                width={1160}
                height={820}
                src={picLink('12')}
                title='«Зелёная площадь» с амфитеатром'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <span className='text-h4'>Комплексное решение</span>
            </div>
            {solutionData.map((item) => (
              <SolutionCard {...item} key={item.title} />
            ))}
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-12'>
              <ImageWithCaption
                height={940}
                width={1760}
                src={picLink('19')}
                title='На слайдере отображены летний и зимний сценарии функционирования общественного центра посёлка'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4 flex justify-between flex-col'>
              <span className='text-h4'>Концепция освещения</span>
              <div className='flex flex-col space-y-4 text-body-regular'>
                <span>
                  Предлагается использовать диммирование — способ управления
                  интенсивностью освещения. Диммирование позволит сэкономить
                  электроэнергию и снизить засветку в тёмное время суток.
                </span>
                <span>
                  Рекомендуется снижать яркость уличного освещения от центра
                  посёлка к периметру, чтобы избежать светового загрязнения
                  лесной территории и не нарушать тем самым биоритмы птиц и
                  животных.
                </span>
              </div>
            </div>
            <div className='col-span-8'>
              <ImageWithCaption
                height={709}
                width={1160}
                src={picLink('20')}
                title='Прогулочная зона бульвара'
              />
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-50'>
            <div className='col-span-4'>
              <span className='text-h4'>
                Основные тенденции и зонирование озеленения
              </span>
            </div>
            <div className='col-span-8 space-y-32'>
                {trendData.map((trend)=> <TrendRow {...trend} key={trend.title} />)}
            </div>
          </Grid>
        </section>
        <section>
            <Grid className='mt-50'>
                
            </Grid>
        </section>
      </PageMarginWithTitle>
    </div>
  );
};

export default ElyPage;
