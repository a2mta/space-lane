import Collapse from '@/components/Collapse';
import Grid from '@/components/Grid';
import ImageWithCaption from '@/components/ImageWithCaption';
import OtherProjects from '@/components/OtherProjects';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import ProjectPicWithTitle from '@/components/ProjectPicWithTitle';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';

const picLink = makePicLink('savelovskiy');

const DescriptionRow: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <div className='flex flex-col pb-6 md:pb-4 border-b border-b-grey tracking-normal'>
    <span className='text-h5 xl:text-h4 font-medium mb-2'>{title}</span>
    <span className='text-body-regular font-light'>{subTitle}</span>
  </div>
);

const BulletList: FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className='flex flex-col border-t border-medium-grey pt-2 md:pt-4'>
    <span className='text-h4-mob md:text-h6 lg:text-h5 font-medium'>
      {title}
    </span>
    <div className='flex flex-col mt-4 md:mt-6 space-y-2 lg:space-y-4 text-body-regular-mob md:text-body-regular'>
      {items.map((item, index) => (
        <span key={item + index}>— {item}</span>
      ))}
    </div>
  </div>
);

const clustersCollapseData = [
  {
    collapseTitle: '01 Переход через ж/д пути по Новодмитровской улице',
    title:
      'В данный момент доступ к рассматриваемой территории с западной части ограничен железно-дорожными путями. Для создания новой комфортной вело-пешеходной связи предлагается 2 варианта организации перехода.',
    desc: [
      '01 Создание нового общественного пространства площади',
      '02 Установка Арт-объекта',
      '03 Организация новой пешеходной связи через ж/д пути',
    ],
    picsMid: [
      <Image key={1} src={picLink('15')} alt='' width={560} height={318} />,
      <Image key={2} src={picLink('16')} alt='' width={560} height={134} />,
    ],
    picsRight: [
      <div key={1} className='flex space-y-2 flex-col'>
        <Image src={picLink('17')} alt='' width={560} height={190} />
        <span>Арт-объект «Кракен»</span>
      </div>,
      <div key={2} className='flex space-y-2 flex-col'>
        <Image src={picLink('18')} alt='' width={560} height={190} />
        <span>Велосипедно — Пешеходный мост в городе Дармштадт Германия</span>
      </div>,
    ],
  },
  {
    collapseTitle: '02 Новодмитровская ул. между Хлебзаводом и Флаконом',
    title:
      'Рассматриваемый фрагмент находится между арт-кварталом «Хлебозавод», Дизайн-заводом «Флакон». На части ул. Новодмитровской предлагается организация улицы совмещённого использования пешеходов и автомобилей, что позволит организовать комфортную пешеходную связь между двумя кластерами. Предлагается устройство абсолютно новой входной группы на Флакон.',
    desc: [
      '01 Организация новой входной группы на «Флакон»',
      '02 Организация знакового мощения',
      '03 Установка Арт-объекта',
      '04 Организация улицы совмещённого использования для автомобилей и пешеходов',
    ],
    picsMid: [
      <Image key={1} src={picLink('20')} alt='' width={560} height={536} />,
    ],
    picsRight: [
      <div key={1} className='flex space-y-2 flex-col'>
        <Image src={picLink('21')} alt='' width={560} height={190} />
        <span>Daning Road, Jin’An District, Shanghai, China</span>
      </div>,
      <div key={2} className='flex space-y-2 flex-col'>
        <Image src={picLink('22')} alt='' width={560} height={190} />
        <span>Sion, Zwit serland</span>
      </div>,
    ],
  },
  {
    collapseTitle: '03 Входная группа Флакона на Большой Новодмитровской',
    title:
      'Перед входом на территорию Дизайн-завода «Флакон» предлагается организовать новую площадь. Её пространство станет многофункциональным за счёт мобильных модульных элементов. Площадь может использоваться для проведения мероприятий, как пространство для встреч или место отдыха.',
    desc: [
      '01 Организация улицы совмещённого использования для автомобилей и пешеходов',
      '02 Организация многофункциональной площадки для мероприятий, изменяемой в зависимости от программы',
    ],
    picsMid: [
      <Image key={1} src={picLink('23')} alt='' width={560} height={536} />,
    ],
    picsRight: [
      <div key={1} className='flex space-y-2 flex-col'>
        <Image src={picLink('24')} alt='' width={560} height={190} />
        <span>Shanghai, China</span>
      </div>,
      <div key={2} className='flex space-y-2 flex-col'>
        <Image src={picLink('25')} alt='' width={560} height={190} />
        <span>Green Cloud, China</span>
      </div>,
    ],
  },
  {
    collapseTitle:
      '04 Новодмитровская ул. у храма Рождества Пресвятой Богородицы в Бутырской Слободе',
    title:
      'Реорганизация территории вокруг храма Рождества Пресвятой Богородицы позволит создать новую туристическую достопримечательность. С помощью парклетов можно создавать временные зоны отдыха вместо парковок в узких местах улицы.',
    desc: [
      '01 Организация парклетов',
      '02 Организация общественной площадки',
      '03 Организация знакового мощения',
    ],
    picsMid: [
      <Image key={1} src={picLink('26')} alt='' width={560} height={536} />,
    ],
    picsRight: [
      <div key={1} className='flex space-y-2 flex-col'>
        <Image src={picLink('27')} alt='' width={560} height={190} />
        <span>Парклет</span>
      </div>,
      <div key={2} className='flex space-y-2 flex-col'>
        <Image src={picLink('28')} alt='' width={560} height={190} />
        <span>St. Urbanus Kirchplatz, Gelsenkirchen, Germany</span>
      </div>,
    ],
  },
  {
    collapseTitle: '05 Бутырская ул. у Савёловского вокзала',
    title:
      'Новый пешеходный путь свяжет Савёловский вокзали креативный кластер «Флакон». Бывший проезд вдоль промышленных зданий станет пространством совмещённого использования. На месте хаотичных парковок предлагается организовать озеленённые места для отдыха.',
    desc: [
      '01 Организация улицы совмещённого использования для автомобилей и пешеходов',
      '02 Реорганизация озеленения',
      '03 Организация новых общественных площадок',
    ],
    picsMid: [
      <Image key={1} src={picLink('29')} alt='' width={560} height={536} />,
    ],
    picsRight: [
      <div key={1} className='flex space-y-2 flex-col'>
        <Image src={picLink('30')} alt='' width={560} height={190} />
        <span>Boblingen, Germany</span>
      </div>,
      <div key={2} className='flex space-y-2 flex-col'>
        <Image src={picLink('31')} alt='' width={560} height={190} />
        <span>Pitt Street Mall, Sydney</span>
      </div>,
    ],
  },
];

const ClusterCollapse01: FC<{
  title: string;
  desc: string[];
  picsMid: ReactElement[];
  picsRight: ReactElement[];
  collapseTitle: string;
}> = ({ desc, picsMid, collapseTitle, picsRight, title }) => (
  <Collapse title={collapseTitle}>
    <Grid>
      <div className='col-span-2 md:col-span-4 text-body-regular-mob md:text-body-regular font-light flex justify-between flex-col'>
        <div className='flex flex-col'>
          <span className='mb-10 md:mb-6 block'>{title}</span>
          <div className='hidden md:block space-y-4'>
            {desc.map((item, index) => (
              <span key={item + index} className='block'>
                {item}
              </span>
            ))}
          </div>
        </div>
        <Image
          className='hidden md:block'
          src={picLink('19')}
          alt=''
          width={393}
          height={96}
        />
      </div>
      <div className='col-span-2 md:col-span-4 space-y-6'>
        {picsMid.map((pic) => pic)}
      </div>
      <div className='mt-6 col-span-2 md:hidden'>
        <div className='space-y-4'>
          {desc.map((item, index) => (
            <span key={item + index} className='block'>
              {item}
            </span>
          ))}
        </div>
        <Image
          className='mt-6 mb-10'
          src={picLink('32')}
          alt=''
          width={261}
          height={70}
        />
      </div>
      <div className='col-span-2 md:col-span-4 text-body-caption font-medium space-y-6 md:space-y-4'>
        {picsRight.map((pic) => pic)}
      </div>
    </Grid>
  </Collapse>
);

const SavelovskiyPage = () => {
  return (
    <div className='mt-30 md:mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title='Савёловский кластер'
          coverLink='/pics/projects/savelovskiy/01.png'
          coverLink2='/pics/projects/savelovskiy/02.png'
          status='Концепция'
          area='5,2 га'
          location='Москва'
          subTitle={
            <span className='md:text-h4 text-h4-mob font-medium whitespace-pre-wrap tracking-normal'>
              <span className='hidden md:inline'>
                {`Дизайн-проект благоустройства ул. Большая Новодмитровская \nи территории Дизайн-завода «Флакон»`}
              </span>
              <span className='md:hidden'>
                {`Дизайн-проект благоустройства \nул. Большая Новодмитровская \nи территории Дизайн-завода «Флакон»`}
              </span>
            </span>
          }
          type='Исследование, благоустройство'
          year='2019'
        />
      </section>
      <PageMarginWithTitle>
        <Grid className='mt-30 md:mt-50'>
          <div className='col-span-2 md:col-span-6 mb-10 font-medium order-1'>
            <span className='text-h3-mob md:text-h4 tracking-normal'>
              Большая Новодмитровская улица
            </span>
          </div>
          <div className='col-span-2 md:col-span-6 order-2'>
            <span className='text-body-regular font-light md:font-light md:text-h5 tracking-normal md:whitespace-pre-wrap whitespace-normal'>
              {
                'Большая Новодмитровская улица находится в Бутырском районе \nна севере Москвы. К ней примыкают такие знаковые городские пространства как арт-квартал «Хлебозавод», дизайн-завод «Флакон», Савёловский вокзал и ряд офисных центров.'
              }
            </span>
          </div>
          <div className='col-span-2 md:col-span-12 mt-4 md:mt-30 mb-10 md:mb-20 order-3'>
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/03.png'
              alt='карта савеловский'
              width={1780}
              height={640}
            />
          </div>
          <div className='col-span-2 md:col-span-6 space-y-10 order-5 md:order-4 mt-16 md:mt-0'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/04.png'
              title='Хлебозавод'
            />
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/flakon.png'
              title='Флакон'
            />
          </div>
          <div className='col-span-2 md:col-span-3 space-y-6 lg:space-y-10 order-4 md:order-5'>
            <DescriptionRow
              subTitle='проживает в Бутырском районе'
              title='71 458 человек'
            />
            <DescriptionRow
              subTitle='находятся в границах квартала'
              title='3 станции метро'
            />
            <DescriptionRow
              subTitle='до аэропорта Шереметьево'
              title='35 минут'
            />
          </div>
          <div className='col-span-2 md:col-span-3 order-4 md:order-6 mt-6 md:mt-0'>
            <div className='space-y-10'>
              <DescriptionRow
                subTitle='плотность населения'
                title='14 178 чел/км²'
              />
              <DescriptionRow
                subTitle='пассажиропоток Савёловского вокзала'
                title='50 000 человек в день'
              />
              <DescriptionRow
                subTitle='на метро до центра города'
                title='11 минут'
              />
            </div>
            <div className='lg:mt-10 mt-6'>
              <span className='text-body-caption'>
                Данные взяты из открытых источников и актуальны на момент
                выполнения проекта
              </span>
            </div>
          </div>
          <div className='col-span-2 md:col-span-6 mt-10 order-7'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/05.png'
              title='Савёловский вокзал'
            />
          </div>
          <div className='col-span-2 md:col-span-6 mt-10 order-8'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/06.png'
              title='Офисный центр «Новодмитровский»'
            />
          </div>
        </Grid>
        <Grid className='mt-30 md:mt-50'>
          <div className='col-span-2 md:col-span-4 mb-10 md:mb-0'>
            <span className='text-h5 font-medium lg:text-h4 tracking-normal whitespace-pre-wrap'>
              {`Цифровая антропология \nи ГИС-аналитика`}
            </span>
          </div>
          <div className='col-span-2 md:col-span-8'>
            <span className='text-h6 lg:text-h5 font-medium mb-4 block'>
              Объекты стрит-ритейла
            </span>
            <Grid cols={8} colsXL={8}>
              <div className='col-span-2 md:col-span-6 xl:col-span-4'>
                <span className='text-body-regular-mob md:text-body-regular font-light'>
                  Рассматриваемая территория — активный городской участок со
                  множеством точек притяжения. Схема показывает функциональную
                  насыщенность территории, разделенной ж/д путями, что говорит о
                  необходимости комфортной связи между активно посещаемыми
                  пространствами
                </span>
              </div>
            </Grid>
          </div>
          <div className='md:col-start-5 col-span-2 md:col-span-8 mt-10'>
            <Image
              width={1160}
              height={508}
              src='/pics/projects/savelovskiy/07.png'
              alt=''
            />
          </div>
        </Grid>
        <Grid className='mt-10 md:mt-20'>
          <div className='col-span-2 md:col-span-8 md:order-1 order-2 md:mt-0 mt-6'>
            <Image
              className='hidden md:block'
              width={1160}
              height={508}
              src={picLink('08')}
              alt=''
            />
            <div className='md:hidden -mx-5'>
              <Image width={1160} height={508} src={picLink('14')} alt='' />
            </div>
            <div className='grid grid-cols-4 gap-x-10 lg:hidden mt-6'>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='size-10 lg:size-12 bg-dark-blue aspect-square'></div>
                <span className='ml-2 text-body-caption-mob lg:text-body-caption'>
                  Наименьшая активность
                </span>
              </div>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='size-10 lg:size-12 bg-medium-red aspect-square'></div>
                <span className='ml-2 text-body-caption-mob lg:text-body-caption'>
                  Наибольшая активность
                </span>
              </div>
            </div>
          </div>
          <div className='col-span-2 md:col-span-4 flex flex-col justify-between md:order-2'>
            <div className='flex flex-col space-y-4'>
              <span className='text-h4-mob lg:text-h5 font-medium'>
                Интенсивность фотофиксации по данным социальных сетей
              </span>
              <span className='text-body-regular-mob lg:text-body-regular font-light md:whitespace-pre-wrap whitespace-normal'>
                {
                  'Схема тепловой активности демонстрирует концентрацию пользователей в функционально насыщенных точках. \nЭто говорит о востребованности разнообразных видов досуга на территории'
                }
              </span>
            </div>
            <div className='hidden grid-cols-4 gap-x-10 lg:grid'>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='size-10 lg:size-12 bg-dark-blue'></div>
                <span className='ml-2 text-body-caption-mob lg:text-body-caption'>
                  Наименьшая активность
                </span>
              </div>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='size-10 lg:size-12 bg-medium-red'></div>
                <span className='ml-2 text-body-caption-mob lg:text-body-caption'>
                  Наибольшая активность
                </span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className='mt-30 md:mt-50'>
          <div className='col-span-2 md:col-span-4 mb-4 md:mb-0'>
            <span className='text-h5 font-medium lg:text-h4'>
              Савёловский кластер
            </span>
          </div>
          <div className='col-span-2 md:col-span-7'>
            <span className='text-body-regular-mob md:text-body-regular lg:text-h5 font-light md:whitespace-pre-wrap whitespace-normal'>
              {
                'Помимо популярных у жителей городских площадок, к улице примыкает несколько недействующих промышленных объектов, требующих ревитализации - бывший Московский троллейбусно-ремонтный завод и НПП «Темп» им. Ф. Короткова. \nЭто потенциальные участки концентрации деловой и творческой активности в районе'
              }
            </span>
          </div>
          <div className='col-span-2 md:col-span-12 space-y-4 mt-10 md:mt-20 -mx-5 md:-mx-0'>
            <ImageWithCaption
              width={1760}
              height={674}
              extraDescriptionMargin
              src='/pics/projects/savelovskiy/09.png'
              title='Схема предлагаемых изменений на рассматриваемой территории'
            />
          </div>
          <section className='col-span-2 md:col-span-12 mt-14 md:mb-50'>
            {clustersCollapseData.map((data) => (
              <ClusterCollapse01 key={data.collapseTitle} {...data} />
            ))}
          </section>
          <div className='mt-32 md:mt-0 col-span-2 md:col-span-4'>
            <span className='mb-4 md:mb-0 block text-h5 lg:text-h4 font-medium'>
              Ядро Савёловского кластера
            </span>
          </div>
          <div className='col-span-2 md:col-span-7'>
            <span className='text-body-regular-mob md:text-body-regular font-light lg:text-h5'>
              На территории Дизайн-завода «Флакон» будут расположены
              практическивсе креативно-технологические мастерские, которые
              позволят и дальшеразвиваться кварталу. Сейчас ведутся работы по
              изменению структурызавода.
            </span>
          </div>
        </Grid>
        <Grid className='mt-10 md:mt-30'>
          <div className='col-span-2 md:col-span-4 space-y-6 lg:space-y-10'>
            <BulletList
              title='Общественные пространства'
              items={[
                'Для прогулок и отдыха',
                'Для спорта и здорового образа жизни',
                'Уникальный паблик-арт и мафы',
              ]}
            />
            <BulletList
              title='Креативно-технологический кластер'
              items={[
                'Архитектурные и дизайн студии',
                'Научно-исследовательские центры',
                'Фитнес- и танцевальные студии',
              ]}
            />
            <BulletList
              title='Сервисы и услуги'
              items={[
                'Предприятия общепита',
                'Магазины одежды',
                'Магазины с товарами для художников',
                'Шоу-румы мастерских',
              ]}
            />
          </div>
          <div className='mt-16 md:mt-0 md:border-0 md:border-t border-medium-grey col-span-2 md:col-span-8'>
            <Grid className=''>
              <div className='md:mt-0 mt-4 col-span-2 md:col-span-12 md:order-1 order-2'>
                <Image
                  objectFit='cover'
                  src='/pics/projects/savelovskiy/10.png'
                  alt=''
                  width={1160}
                  height={798}
                />
              </div>
              <div className='col-span-2 md:col-span-12 md:order-2 order-1 mt-2 md:mt-6 lg:mt-10 border-t border-medium-grey md:border-0 pt-2 md:pt-0'>
                <span className='text-body-regular-mob md:text-body-regular lg:text-h5 block'>
                  На Большой Новодмитровской улице нет жилых домов, что
                  позволяет без ущерба перекрывать ее и проводить тематические
                  мероприятия. Главным событием обновлённой улицы может стать
                  фестиваль актуального паблик-арта. Он создаст возможность
                  реализации для авторов в городской среде и будет
                  способствовать развитию креативной среды квартала
                </span>
              </div>
            </Grid>
          </div>
        </Grid>
        <Grid className='mt-16 md:mt-30 md:border-t border-medium-grey pt-2 md:pt-6'>
          <div className='col-span-2 md:col-span-4 border-t border-medium-grey md:border-0 pt-2 md:pt-0'>
            <span className='text-body-regular-mob md:text-body-regular whitespace-normal md:whitespace-pre-wrap'>
              {
                'Проект предлагает обустройство кафе и магазинов в первых этажах некоторых зданий, создание летних террасс вдоль фасадов, а также интервенции в духе тактического урбанизма (парклеты, временные конструкции). \nЭто привлечет новую аудиторию, повысит привлекательность территории для потенциальных арендаторов из сервисного сектора и запустит механизм трансформации локальной экономики'
              }
            </span>
          </div>
          <div className='col-span-2 md:col-span-8 md:mt-0 mt-4 -mx-5 md:-mx-0'>
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/11.png'
              alt=''
              width={1160}
              height={352}
            />
          </div>
        </Grid>
        <Grid className='mt-16 md:mt-30'>
          <div className='col-span-4 text-body-regular space-y-4 hidden flex-col md:flex'>
            <span>01 Контейнерное озеленение выполняет роль ограждений</span>
            <span>02 Размещение столиков группой</span>
            <span>03 Парклет</span>
          </div>
          <div className='col-span-2 md:col-span-6 space-y-10'>
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/12.png'
              alt=''
              width={860}
              height={508}
            />
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/13.png'
              alt=''
              width={860}
              height={508}
            />
            <div className='md:hidden flex flex-col mt-4 text-body-caption-mob font-light space-y-2'>
              <span>01 Контейнерное озеленение выполняет роль ограждений</span>
              <span>02 Размещение столиков группой</span>
              <span>03 Парклет</span>
            </div>
          </div>
        </Grid>
      </PageMarginWithTitle>
      <OtherProjects />
    </div>
  );
};

export default SavelovskiyPage;
