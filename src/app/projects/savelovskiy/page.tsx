import Collapse from '@/components/Collapse';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import ProjectPicWithTitle from '@/components/ProjectPicWithTitle';
import Image from 'next/image';
import React, { FC } from 'react';

const DescriptionRow: FC<{ title: string; subTitle: string }> = ({
  subTitle,
  title,
}) => (
  <div className='flex flex-col pb-4 border-b border-b-grey tracking-normal'>
    <span className='text-h4 mb-2'>{title}</span>
    <span className='text-body-regular'>{subTitle}</span>
  </div>
);

const BulletList: FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className='flex flex-col border-t border-medium-grey pt-4'>
    <span className='text-h5'>{title}</span>
    <div className='flex flex-col mt-6 space-y-4 text-body-regular'>
      {items.map((item, index) => (
        <span key={item + index}>— {item}</span>
      ))}
    </div>
  </div>
);

const SavelovskiyPage = () => {
  return (
    <div className='mt-50 w-full'>
      <section>
        <ProjectMainPicWithInfo
          title='Савёловский кластер'
          coverLink='/pics/projects/savelovskiy/01.png'
          coverLink2='/pics/projects/savelovskiy/02.png'
          status='Концепция'
          area='5,2 га'
          location='Москва'
          subTitle='Дизайн-проект благоустройства ул. Большая Новодмитровская и территории Дизайн-завода «Флакон»'
          type='Исследование, мастер-план, дизайн-код, благоустройство'
          year='2019'
        />
      </section>
      <PageMarginWithTitle>
        <Grid className='mt-50'>
          <div className='col-span-6'>
            <span className='text-h4 tracking-normal'>Большая Новодмитровская улица</span>
          </div>
          <div className='col-span-6'>
            <span className='text-h5 tracking-normal'>
              Большая Новодмитровская улица находится в Бутырском районе на
              севере Москвы. К ней примыкают такие знаковые городские
              пространства как арт-квартал «Хлебозавод», дизайн-завод «Флакон»,
              Савёловский вокзал и ряд офисных центров.
            </span>
          </div>
          <div className='col-span-12 mt-30 mb-20'>
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/03.png'
              alt='карта савеловский'
              width={1780}
              height={640}
            />
          </div>
          <div className='col-span-6 space-y-10'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/04.png'
              title='Хлебзавод'
            />
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/flakon.png'
              title='Флакон'
            />
          </div>
          <div className='col-span-3 space-y-10'>
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
          <div className='col-span-3'>
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
            <div className='mt-30'>
              <span className='text-body-caption'>
                Данные взяты из открытых источников и актуальны на момент
                выполнения проекта
              </span>
            </div>
          </div>
          <div className='col-span-6 mt-10'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/05.png'
              title='Савёловский вокзал'
            />
          </div>
          <div className='col-span-6 mt-10'>
            <ProjectPicWithTitle
              coverLink='/pics/projects/savelovskiy/06.png'
              title='Офисный центр «Новодмитровский»'
            />
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-start-1 col-end-4'>
            <span className='text-h4 tracking-normal'>
              Цифровая антропология и ГИС-аналитика
            </span>
          </div>
          <div className='col-start-5 space-y-4 col-end-9 grid-cols-subgrid'>
            <span className='text-h5'>Объекты стрит-ритейла</span>
            <div className='col-span-4'>
              <span>
                Рассматриваемая территория — активный городской участок со
                множеством точек притяжения. Схема показывает функциональную
                насыщенность территории, разделенной ж/д путями, что говорит о
                необходимости комфортной связи между активно посещаемыми
                пространствами
              </span>
            </div>
          </div>
          <div className='col-start-5 col-end-13 mt-10'>
            <Image
              width={1160}
              height={508}
              src='/pics/projects/savelovskiy/07.png'
              alt=''
            />
          </div>
        </Grid>
        <Grid className='mt-20'>
          <div className='col-span-8'>
            <Image
              width={1160}
              height={508}
              src='/pics/projects/savelovskiy/08.png'
              alt=''
            />
          </div>
          <div className='col-span-4 flex flex-col justify-between'>
            <div className='flex flex-col space-y-4'>
              <span className='text-h5'>
                Интенсивность фотофиксации по данным социальных сетей
              </span>
              <span className='text-body-regular'>
                Схема тепловой активности демонстрирует концентрацию
                пользователей в функционально насыщенных точках. Это говорит о
                востребованности разнообразных видов досуга на территории
              </span>
            </div>
            <div className='grid grid-cols-4 gap-x-10'>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='w-[50px] h-[50px] bg-dark-blue'></div>
                <span className='ml-2 text-body-caption'>
                  Наименьшая активность
                </span>
              </div>
              <div className='col-span-2 flex items-end justify-start'>
                <div className='w-[50px] h-[50px] bg-medium-red'></div>
                <span className='ml-2 text-body-caption'>
                  Наибольшая активность
                </span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-span-4'>
            <span className='text-h4'>Савёловский кластер</span>
          </div>
          <div className='col-span-7'>
            <span className='text-h5'>
              Помимо популярных у жителей городских площадок, к улице примыкает
              несколько недействующих промышленных объектов, требующих
              ревитализации - бывший Московский троллейбусно-ремонтный завод и
              НПП «Темп» им. Ф. Короткова. Это потенциальные участки
              концентрации деловой и творческой активности в районе
            </span>
          </div>
          <div className='col-span-12 space-y-4 mt-20'>
            <span className='text-body-regular '>
              Рассматриваемая территория
            </span>
            <Image
              width={1760}
              height={674}
              src='/pics/projects/savelovskiy/09.png'
              alt=''
            />
          </div>
          <section className='col-span-12 mt-14 mb-50'>
            <Collapse title='01 Переход через ж/д пути по Новодмитровской улице' />
            <Collapse title='01 Переход через ж/д пути по Новодмитровской улице' />
          </section>
          <div className='col-span-4'>
            <span className='text-h4'>Ядро Савёловского кластера</span>
          </div>
          <div className='col-span-7'>
            <span className='text-h5'>
              На территории Дизайн-завода «Флакон» будут расположены
              практическивсе креативно-технологические мастерские, которые
              позволят и дальшеразвиваться кварталу. Сейчас ведутся работы по
              изменению структурызавода. Общий объём инвестиций на первом этапе
              равен 1 млн долларов
            </span>
          </div>
        </Grid>
        <Grid className='mt-30'>
          <div className='col-span-4 space-y-10'>
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
          <div className='col-span-8 space-y-10'>
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/10.png'
              alt=''
              width={1160}
              height={798}
            />
            <span className='text-h5 block'>
              На Большой Новодмитровской улице нет жилых домов, что позволяет
              без ущерба перекрывать ее и проводить тематические мероприятия.
              Главным событием обновлённой улицы может стать фестиваль
              актуального паблик-арта. Он создаст возможность реализации для
              авторов в городской среде и будет способствовать развитию
              креативной среды квартала
            </span>
          </div>
        </Grid>
        <Grid className='mt-30 border-t border-medium-grey pt-6'>
          <div className='col-span-4'>
            <span className='text-body-regular'>
              Проект предлагает обустройство кафе и магазинов в первых этажах
              некоторых зданий, создание летних террасс вдоль фасадов, а также
              интервенции в духе тактического урбанизма (парклеты, временные
              конструкции). Это привлечет новую аудиторию, повысит
              привлекательность территории для потенциальных арендаторов из
              сервисного сектора и запустит механизм трансформации локальной
              экономики
            </span>
          </div>
          <div className='col-span-8'>
            <Image
              objectFit='cover'
              src='/pics/projects/savelovskiy/11.png'
              alt=''
              width={1160}
              height={352}
            />
          </div>
        </Grid>
        <Grid className='mt-30'>
          <div className='col-span-4 text-body-regular space-y-4 flex flex-col'>
            <span>01 Контейнерное озеленение выполняет роль ограждений</span>
            <span>02 Размещение столиков группой</span>
            <span>03 Парклет</span>
          </div>
          <div className='col-span-6 space-y-10'>
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
          </div>
        </Grid>
      </PageMarginWithTitle>
    </div>
  );
};

export default SavelovskiyPage;
