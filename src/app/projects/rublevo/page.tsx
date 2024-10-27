import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ProjectMainPicWithInfo from '@/components/ProjectMainPicWithInfo';
import { makePicLink } from '@/utils';
import Image from 'next/image';
import React, { FC } from 'react';

const picLink = makePicLink('rublevo');

const cardsData = [
  {
    title: 'Сомасштабность человеку',
    description:
      'Сомасштабные человеку открытые пространства создают комфортную городскую среду для пользователей.',
  },
  {
    title: 'Улицы для каждого',
    description:
      'Проектирование улиц с учётом интересов разного типа пользователей, с особым вниманием к МГН, детям и людям пожилого возраста.',
  },
  {
    title: 'Безопасность',
    description:
      'Создание безопасной среды и разделение потоков пешеходов, автомобилистов и пользователей микромобильного транспорта.',
  },
  {
    title: 'Улица как экосистема',
    description:
      'Интеграция зеленой инфраструктуры в систему района для поддержания биоразнообразия и качества городской экосистемы. Дизайн должен опираться на природный каркас, климат и гидрологический цикл.',
  },
  {
    title: 'Мобильность',
    description:
      'Безопасность, эффективность, комфорт для пешеходов, велосипедистов и транзитных пользователей помогут организовать доступ к сервисам и различным пунктам назначения, тем самым увеличивая мобильность.',
  },
  {
    title: 'Общественное значение',
    description:
      'Хорошо спроектированная улица организует вокруг себя среду, способствующую созданию всех условий для различного времяпрепровождения людей, генерирует больше возможностей для бизнеса и девелоперов',
  },
];

const flowerBeeds = [
  { title: 'Клумбы с яблоней 1', url: '19.png' },
  { title: 'Клумбы с яблоней 2', url: '20.png' },
  { title: 'Дождевой сад', url: '21.png' },
];

const flowerBeeds2 = [
  { title: 'Канава с черёмухой', url: '22.png' },
  { title: 'Канава с клёном', url: '23.png' },
  { title: 'Канава с тополем', url: '24.png' },
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
        objectFit='contain'
        objectPosition='bottom'
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
      <span className='text-h5 mb-2'>{number}</span>
      <span className='text-h5'>{title}</span>
    </div>
    <span className='text-body-regular'>{description}</span>
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
                Данные взяты с сайта sbercity.ru
              </span>
            </div>
          }
          type='Благоустройство, авторский надзор'
          year='2023–2024 г'
        />
      </section>
      <PageMarginWithTitle>
        <Grid className='mt-10'>
          <div className='col-span-4 flex items-end'>
            <Image src={picLink('05')} width={561} height={560} alt='' />
          </div>
          <div className='col-span-8 space-y-10'>
            <Image
              src={picLink('03')}
              width={1169}
              height={709}
              objectFit='cover'
              alt=''
            />
            <Image src={picLink('04')} width={1160} height={851} alt='' />
          </div>
        </Grid>
        <Grid className='mt-50'>
          <div className='col-span-4 flex flex-col'>
            <span className='text-h4 font-medium'>Общая схема улиц</span>
            <span className='text-body-regular font-light block mt-7'>
              Для планирования, подготовки и проектированияблагоустройства
              уличных общественных пространств было выделено 4 типа улиц. В
              основе типологизации лежат такие параметры, как пешеходная и
              транспортная активность, функции окружающий зданий. Это позволило
              сформулировать специфику функционирования каждый улицы, которая
              нашла отражение в решениях, примененных для каждого типа.
            </span>
          </div>
          <div className='col-span-5'>
            <Image
              src='/pics/projects/rublevo/15.png'
              width={710}
              height={568}
              alt=''
            />
          </div>
        </Grid>
        <Grid className='mt-50 pt-6 border-t border-medium-grey'>
          <div className='col-span-12 mb-2'>
            <span className='text-h4'>Ключевые дизайн-принципы</span>
          </div>
        </Grid>
        <Grid className='mb-50 pt-5'>
          {cardsData.map(({ description, title }, index) => (
            <div className='col-span-4 mt-10' key={title + index}>
              <Card
                description={description}
                title={title}
                number={`0${index + 1}`}
              />
            </div>
          ))}
        </Grid>
        <Grid className='mb-50'>
          <div className='col-span-12'>
            <Image
              alt=''
              width={1760}
              height={1100}
              src='/pics/projects/rublevo/16.png'
              objectFit='cover'
            />
          </div>
        </Grid>
        <Grid className='mb-40'>
          <div className='col-span-4 flex flex-col justify-between'>
            <div className='flex flex-col'>
              <span className='text-h4 mb-4'>Дождевые сады. Реализация*</span>
              <span className='text-body-regular'>
                Первоначальная схема устройства дождевых садов и водно-болотных
                угодий на всем протяжении улично-дорожной сети, которая
                позволила бы сократить нагрузку на сети и ЛОСы, а также
                фильтровать дождевые осадки, которые уходили в грунт. В ходе
                работ* некоторые решения были уточнены и реализованы, в
                частности, в канавах у парковки, где воды с машиномест могла
                уходить в землю, питая устойчивые к загрязнениям растения водой
                и имеющие возможность инфильтрации
              </span>
            </div>
            <span className='text-body-caption'>
              Рабочее проектирование и реализация объектов проходила совместно с
              компанией ООО «Стрелка Архитектс», ООО «ПМК — проект» и ООО «Маркс
              Инжиринг»
            </span>
          </div>
          <div className='col-span-4'>
            <Image
              alt=''
              width={560}
              height={590}
              src='/pics/projects/rublevo/17.png'
              objectFit='cover'
            />
          </div>
          <div className='col-span-4'>
            <Image
              alt=''
              width={560}
              height={590}
              src='/pics/projects/rublevo/18.png'
              objectFit='cover'
            />
          </div>
        </Grid>
        <Grid className='pt-6 border-t border-medium-grey'>
          {flowerBeeds.map(({ title, url }, index) => (
            <FlowerBeedCard key={index + url} title={title} url={url} />
          ))}
        </Grid>
        <Grid className='mt-30 pt-6 border-t border-medium-grey'>
          {flowerBeeds2.map(({ title, url }, index) => (
            <FlowerBeedCard key={index + url} title={title} url={url} />
          ))}
        </Grid>
        <Grid className='mt-50'>
          <div className='col-span-4'>
            <Image
              alt=''
              width={560}
              height={645}
              src='/pics/projects/rublevo/25.png'
            />
          </div>
          <div className='col-span-6 flex flex-col space-y-10'>
            <Image
              alt=''
              width={860}
              height={645}
              src='/pics/projects/rublevo/26.png'
            />
            <Image
              alt=''
              width={860}
              height={645}
              src='/pics/projects/rublevo/27.png'
            />
          </div>
          <div className='col-span-8 col-start-5 mt-10'>
            <Image
              alt=''
              width={1160}
              height={760}
              src='/pics/projects/rublevo/28.png'
            />
          </div>
        </Grid>
        <Grid className='mt-50 pt-6 border-t border-medium-grey'>
          <div className='col-span-4'>
            <span className='text-h4'>Реализация участка бульвара</span>
          </div>
          <div className='col-span-8'>
            <Image
              className='mb-20'
              alt=''
              width={1160}
              height={560}
              src='/pics/projects/rublevo/29.png'
            />
            <span className='mt-20 text-body mb-10 block'>
              Типовые малые архитектруные формы
            </span>
            <Image
              alt=''
              width={847}
              height={104}
              src='/pics/projects/rublevo/30.png'
            />
          </div>
        </Grid>
        <Grid className='mt-40'>
          <div className='col-span-12'>
            <span className='mb-20 block text-h5'>Основные решения</span>
          </div>
          {decisionData.map(({ title, url }, index) => (
            <DecisionRow
              key={url + index}
              index={`0${index + 1}`}
              title={title}
              url={'/pics/projects/rublevo/' + url}
            />
          ))}
        </Grid>
      </PageMarginWithTitle>
    </div>
  );
};

export default RublevoPage;
