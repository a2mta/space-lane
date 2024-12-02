import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';
import { createTranslation } from '../../../i18n/server';
import { addLeadingZero } from '@/utils';

type PriceGraphColProps = {
  percent: number;
  numberOfRooms: string;
  textTop: string;
  textMid: string;
  textBot: string;
};

const priceGraphColData = [
  {
    percent: 6,
    numberOfRooms: 'consulting.section6.graph1.rooms',
    textTop: '70',
    textMid: '50',
    textBot: '45',
  },
  {
    percent: 24,
    numberOfRooms: 'consulting.section6.graph2.rooms',
    textTop: '100',
    textMid: '80',
    textBot: '60',
  },
  {
    percent: 36,
    numberOfRooms: 'consulting.section6.graph3.rooms',
    textTop: '130',
    textMid: '100',
    textBot: '75',
  },
  {
    percent: 33,
    numberOfRooms: 'consulting.section6.graph4.rooms',
    textTop: '130',
    textMid: '100',
    textBot: '75',
  },
];

const horizontalGraphData = [
  {
    graphTitle: '48%',
    title: 'consulting.section7.materials.brick',
    className: 'bg-red col-span-8',
  },
  {
    graphTitle: '39%',
    title: 'consulting.section7.materials.concrete',
    className: 'bg-medium-red col-span-7',
  },
  {
    graphTitle: '24%',
    title: 'consulting.section7.materials.wood',
    className: 'bg-light-red col-span-6',
  },
  {
    graphTitle: '7%',
    title: 'consulting.section7.materials.frame',
    className: 'bg-grey col-span-3',
  },
  {
    graphTitle: '5%',
    title: 'consulting.section7.materials.other',
    className: 'bg-grey col-span-2',
  },
];

const horizontalGraphData2 = [
  {
    graphTitle: '72%',
    title: 'consulting.section7.stories.one',
    className: 'bg-red col-span-8',
  },
  {
    graphTitle: '21%',
    title: 'consulting.section7.stories.two',
    className: 'bg-medium-red col-span-6',
  },
  {
    graphTitle: '5%',
    title: 'consulting.section7.stories.three',
    className: 'bg-light-red col-span-3',
  },
  {
    graphTitle: '2%',
    title: 'consulting.section7.stories.four',
    className: 'bg-grey col-span-2',
  },
];

const horizontalGraphData3 = [
  {
    graphTitle: '75%',
    title: 'consulting.section7.finishes.turnkey',
    className: 'bg-red col-span-8',
  },
  {
    graphTitle: '25%',
    title: 'consulting.section7.finishes.without',
    className: 'bg-medium-red col-span-6',
  },
];

const verticalGraphData = [
  {
    graphTitle: '71%',
    title: 'consulting.section8.graphs.dining',
    className: 'bg-medium-red h-full',
    width: 'w-full',
  },
  {
    graphTitle: '51%',
    title: 'consulting.section8.graphs.living',
    className: 'bg-medium-red h-[85%]',
    width: 'w-[85%]',
  },
  {
    graphTitle: '47%',
    title: 'consulting.section8.graphs.dressing',
    className: 'bg-medium-red h-[80%]',
    width: 'w-[80%]',
  },
  {
    graphTitle: '47%',
    title: 'consulting.section8.graphs.parking',
    className: 'bg-medium-red h-[80%]',
    width: 'w-[80%]',
  },
  {
    graphTitle: '70%',
    title: 'consulting.section8.graphs.gazebo',
    className: 'bg-medium-red h-[95%]',
    width: 'w-[95%]',
  },
  {
    graphTitle: '67%',
    title: 'consulting.section8.graphs.bbq',
    className: 'bg-medium-red h-[93%]',
    width: 'w-[93%]',
  },
  {
    graphTitle: '66%',
    title: 'consulting.section8.graphs.bath',
    className: 'bg-medium-red h-[91%]',
    width: 'w-[91%]',
  },
];

const analyzeData = [
  {
    percent: '50%',
    title: 'analyzeData.families_with_children.title',
    desc1: 'analyzeData.families_with_children.desc1',
    desc2: 'analyzeData.families_with_children.desc2',
    desc3: 'analyzeData.families_with_children.desc3',
  },
  {
    percent: '25%',
    title: 'analyzeData.young_people.title',
    desc1: 'analyzeData.young_people.desc1',
    desc2: 'analyzeData.young_people.desc2',
    desc3: 'analyzeData.young_people.desc3',
  },
  {
    percent: '15%',
    title: 'analyzeData.elderly_people.title',
    desc1: 'analyzeData.elderly_people.desc1',
    desc2: 'analyzeData.elderly_people.desc2',
    desc3: 'analyzeData.elderly_people.desc3',
  },
  {
    percent: '5%',
    title: 'analyzeData.regional_visitors.title',
    desc1: 'analyzeData.regional_visitors.desc1',
    desc2: 'analyzeData.regional_visitors.desc2',
    desc3: 'analyzeData.regional_visitors.desc3',
  },
];

const auditoryDataMob = [
  {
    title: 'consulting.section7.material',
    data: horizontalGraphData,
  },
  {
    title: 'consulting.section7.floors',
    data: horizontalGraphData2,
  },
  {
    title: 'consulting.section7.finish',
    data: horizontalGraphData3,
  },
];

const AnalyzeDataRowMob: FC<{
  title: string;
  index: string;
  percent: string;
  desc1: string;
  desc2: string;
  desc3: string;
  t: any;
}> = ({ t, desc1, desc2, desc3, percent, title, index }) => (
  <Grid>
    <div className='col-span-2 pb-2 border-b border-medium-grey mb-4'>
      <span className='text-body-caption-10 font-light text-grey'>{index}</span>
    </div>
    <div className='col-span-1'>
      <span className='text-red text-body-regular-mob font-medium block mb-4'>
        {t(title)}
      </span>
      <span className='text-h2-mob font-medium'>{percent}</span>
    </div>
    <div className='col-span-1'>
      <span className='text-body-regular-mob font-light pb-2 border-b border-medium-grey block'>
        {t(desc1)}
      </span>
      <span className='text-body-regular-mob font-light mt-2 block'>
        {t(desc2)}
      </span>
    </div>
    <div className='col-span-2 mt-2'>
      <span className='text-body-regular-mob font-light'>{t(desc3)}</span>
    </div>
  </Grid>
);

const PriceGraphMob: FC<PriceGraphColProps> = ({
  numberOfRooms,
  percent,
  textBot,
  textMid,
  textTop,
}) => (
  <div className='flex pt-4 border-t border-medium-grey'>
    <div className='flex flex-col space-y-2 mr-6'>
      <span className='text-h3-mob font-medium'>{percent}%</span>
      <span className='block text-body-caption-10 font-medium'>
        {numberOfRooms}
      </span>
    </div>
    <div className='flex space-x-2 items-end'>
      <div className='bg-red w-28 h-40 p-4 flex items-end'>
        <span className='text-h3-mob font-medium text-white'>{textTop}</span>
      </div>
      <div className='bg-medium-red w-28 h-32 p-4 flex items-end'>
        <span className='text-h3-mob font-medium text-white'>{textMid}</span>
      </div>
      <div className='bg-medium-grey w-28 h-24 p-4 flex items-end'>
        <span className='text-h3-mob font-medium text-white'>{textBot}</span>
      </div>
    </div>
  </div>
);

const DemandTableRows: FC<{ t: any; textForRows: string[] }> = ({
  textForRows,
  t,
}) =>
  textForRows.map((item, index) => (
    <div
      key={item + index}
      className={classNames('flex items-start', {
        'col-span-4': index === textForRows.length - 1,
        'mt-7': index !== 0,
        'col-span-2': index !== textForRows.length - 1,
      })}
    >
      <div className={classNames({ 'pl-4 border-l': index === 0 })}>
        <span
          className={classNames(
            { 'text-h2': index === 0 },
            { 'text-body-regular font-light': index > 0 }
          )}
        >
          {t(item)}
        </span>
      </div>
    </div>
  ));

const ConclusionRow: FC<{ number: string; text: string }> = ({
  number,
  text,
}) => (
  <div className='grid grid-cols-10 gap-x-10 border-b border-grey pb-1'>
    <div className='col-span-3'>
      <span className='text-h4 text-medium-grey'>{number}</span>
    </div>
    <div className='col-span-7 flex items-center'>
      <span className='text-body-regular font-light'>{text}</span>
    </div>
  </div>
);

const HorizontalGraphWithTitle: FC<{
  className?: string;
  title: string | ReactElement;
  graphTitle: string;
}> = ({ graphTitle, className, title }) => {
  return (
    <div className='flex flex-col'>
      <span className='md:mb-4 mb-2 block'>
        {typeof title === 'string' ? (
          <span className='block text-body-caption-10 md:text-body-regular font-light text-grey md:whitespace-pre-wrap'>
            {title}
          </span>
        ) : (
          title
        )}
      </span>

      <div className='grid grid-cols-8'>
        <HorizontalGraph text={graphTitle} className={className} />
      </div>
    </div>
  );
};

const VerticalGraphWithTitle: FC<{
  className?: string;
  title: string;
  graphTitle: string;
}> = ({ graphTitle, className, title }) => (
  <div className='flex h-full flex-col'>
    <div className='h-full flex items-end'>
      <VerticalGraph text={graphTitle} className={className} />
    </div>
    <span className='mt-1 text-body-caption font-medium text-grey min-h-10'>
      {title}
    </span>
  </div>
);

const VerticalGraph: FC<{ className?: string; text: string }> = ({
  className,
  text,
}) => (
  <div
    className={classNames('w-full flex items-end text-white p-1', className)}
  >
    <span className='text-h4 font-medium'>{text}</span>
  </div>
);

const HorizontalGraph: FC<{ className?: string; text: string }> = ({
  text,
  className,
}) => (
  <div className={classNames('w-full text-white px-2 md:px-6 py-2', className)}>
    <span className='text-h5-mob md:text-h4 font-medium'>{text}</span>
  </div>
);

const PriceGraphCol: FC<PriceGraphColProps> = ({
  numberOfRooms,
  percent,
  textBot,
  textMid,
  textTop,
}) => (
  <div className='flex flex-col px-2 border-l border-l-grey'>
    <span className='text-h4 mb-2'>{percent}%</span>
    <span className='text-grey text-body-caption font-medium'>
      {numberOfRooms}
    </span>
    <div className='flex flex-col mt-6 space-y-2 text-white mb-24'>
      <div className='flex items-end h-[120px] bg-red p-2'>
        <span className='text-h4 font-medium'>{textTop}</span>
      </div>
      <div className='flex items-end h-[105px] bg-medium-red p-2'>
        <span className='text-h4 font-medium'>{textMid}</span>
      </div>
      <div className='flex items-end h-20 bg-medium-grey p-2'>
        <span className='text-h4 font-medium'>{textBot}</span>
      </div>
    </div>
  </div>
);

const GraphCol: FC<{ title: string; percent: number; className: string }> = ({
  className,
  percent,
  title,
}) => (
  <div
    className={
      'w-full px-4 pt-4 pb-7 text-white flex justify-between flex-col ' +
      className
    }
  >
    <span>{title}</span>
    <span className='text-h2'>{percent}%</span>
  </div>
);

const Graph = () => (
  <div className='flex h-[588px] space-x-10 items-end'>
    <GraphCol
      title='Постоянное проживание'
      percent={58}
      className='h-full bg-red'
    />
    <GraphCol
      title='Отдых в выходные и праздники'
      percent={37}
      className='h-[62%] bg-grey'
    />
    <GraphCol
      title='Инвестиционные цели'
      percent={5}
      className='h-[36%] bg-medium-grey'
    />
  </div>
);

const ConsultingPage = async () => {
  const { t } = await createTranslation('common');

  return (
    <>
      <Head>
        <title>{t('page_titles.consulting')}</title>
      </Head>
      <PageMarginWithTitle withBorder title={t('page_titles.consulting')}>
        <section>
          <Grid>
            <div className='col-span-2 md:col-span-12 mb-30 md:mb-50 mt-10 md:mt-16 space-y-4 md:space-y-[30px] text-body-regular-mob md:text-h5 font-light'>
              <span className='block'>
                Space Lane на этапе предпроектных исследований использует
                различные аналитические методики, помогающие собрать необходимые
                данные и погрузиться в контекст. В частности мы выполняем оценку
                градостроительного потенциала и инвестиционной привлекательности
                территории, проводим исследования для выявления сообществ и их
                запросов, осуществляем аудит и анализ данных.
              </span>

              <span className='block'>
                Работая с общественными пространствами, мы разрабатываем метрики
                оценки качества развития городских пространств и методологии
                оценки эффектов развития территорий. Ещё одно важное направление
                деятельности бюро — разработка программ профессиональных
                мероприятий: от семинаров до конференций.
              </span>
              <span className='block'>
                В качестве примера аналитического исследования предлагаем
                ознакомиться с анализом рынка ИЖС
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <span className='w-full h-[1px] mb-4 md:mb-6 bg-medium-grey'></span>
      <PageMarginWithTitle>
        <section>
          <Grid>
            <div className='col-span-2 md:col-span-4 flex flex-col'>
              <h4 className='text-h3-mob md:text-h4 font-medium'>
                Анализ рынка
              </h4>
              <p className='text-grey mt-4 text-body-caption-10 md:text-body-caption font-medium'>
                (Исследование сделано в IV квартале 2023 года на основании
                анализа рынка ИЖС Московской области с использованием
                аналитических материалов ДОМ.рф, ВЦИОМ, Домклик и др.)
              </p>
            </div>
            <div className='col-span-2 md:col-span-4 mt-10 md:mt-0'>
              <p className='text-body-regular-mob md:text-body-regular font-light md:whitespace-pre-wrap xl:whitespace-normal'>
                {`За последние годы большое количество льготных ипотечных программ \nи постпандемийные последствия в виде ростачисленности сотрудников, работающих удалённо, изменилицелевую аудиторию рынка ИЖС, снизив средний возраст среднестатистического покупателя, минимальный требуемый доход и, как следствие, предпочтения покупателя относительно желаемого объекта недвижимости.`}
              </p>
            </div>
            <div className='col-span-2 md:col-span-4 block md:mt-0 mt-6'>
              <p className='text-body-regular-mob md:text-body-regular font-light xl:whitespace-pre-wrap'>
                {
                  'За 3 года доля ипотечных сделок на рынке ИЖС выросла \nв 2,5 раза, при этом самую высокую динамику в 2023 году показало кредитование строительства частных домов. Значительный рост выдачи ипотек обоснован тем, что сегодня строительство частного дома с привлечением профессиональных подрядчиков доступно в рамках всех льготных ипотечных программ.'
                }
              </p>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <div className='bg-beige mt-10 md:hidden'>
        <PageMarginWithTitle>
          <Grid className='my-10'>
            <div className='col-span-2 mb-10'>
              <span className='text-body-regular-mob font-light'>
                Для целей дальнейшего анализа используются данные аналитических
                исследований, как о покупателях ИЖС, так и пользователях ипотеки
                на ИЖС, которая наиболее востребована именно в комфорт-классе.
              </span>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col bg-red h-[265px] text-white p-[10px] justify-between'>
                <span className='text-body-caption font-medium'>
                  Постоянное проживание
                </span>
                <span className='text-h3-mob font-medium'>58%</span>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col space-y-4'>
                <div className='flex flex-col bg-grey h-[140px] text-white p-[10px] justify-between'>
                  <span className='text-body-caption font-medium whitespace-pre-wrap'>
                    {'Отдых в выходные \nи праздники'}
                  </span>
                  <span className='text-h3-mob font-medium'>37%</span>
                </div>
                <div className='flex flex-col bg-medium-grey h-[109px] text-white p-[10px] justify-between'>
                  <span className='text-body-caption font-medium whitespace-pre-wrap'>
                    Инвестиционные цели
                  </span>
                  <span className='text-h3-mob font-medium'>5%</span>
                </div>
              </div>
            </div>
          </Grid>
        </PageMarginWithTitle>
      </div>
      <PageMarginWithTitle className='md:hidden space-y-14 mt-30'>
        {analyzeData.map((item, index) => (
          <AnalyzeDataRowMob
            t={t}
            index={`${addLeadingZero(index + 1)}/04`}
            {...item}
            key={index + item.percent}
          />
        ))}
        <Grid>
          <div className='col-span-2 text-body-caption-10 font-medium space-y-4 text-grey'>
            <span className='block'>{t('consulting.demand1')}</span>
            <span className='block'>{t('consulting.demand2')}</span>
            <span className='block'>{t('consulting.demand3')}</span>
          </div>
        </Grid>
      </PageMarginWithTitle>

      <PageMarginWithTitle className='bg-beige mt-50 hidden md:block'>
        <section>
          <Grid className='my-20'>
            <div className='col-span-2 md:col-span-4'>
              <p className='text-body-regular font-light'>
                Для целей дальнейшего анализа используются данные аналитических
                исследований, как о покупателях ИЖС, так и пользователях ипотеки
                на ИЖС, которая наиболее востребована именно в комфорт-классе.
              </p>
            </div>
            <div className='col-span-2 md:col-span-8'>
              <Graph />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <PageMarginWithTitle className='hidden md:block'>
        <div className='mt-50'>
          <section>
            <Grid className='col-span-2 md:col-span-12'>
              <div className='col-span-2 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light whitespace-pre-wrap'>
                    {t('consulting.section5.column1')}
                  </span>
                </div>
              </div>
              <div className='col-span-2 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>
                    {t('consulting.section5.column2')}
                  </span>
                </div>
              </div>
              <div className='col-span-2 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>
                    {t('consulting.section5.column3')}
                  </span>
                </div>
              </div>
              <div className='col-span-2 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>
                    {t('consulting.section5.column4')}
                  </span>
                </div>
              </div>
              <div className='col-span-4 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>
                    {t('consulting.section5.column5')}
                  </span>
                </div>
              </div>
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                t={t}
                textForRows={Object.values(analyzeData[0])}
              />
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                t={t}
                textForRows={Object.values(analyzeData[1])}
              />
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                t={t}
                textForRows={Object.values(analyzeData[2])}
              />
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                t={t}
                textForRows={Object.values(analyzeData[3])}
              />
            </Grid>
            <Grid className='col-span-12 mt-20'>
              <div className='col-span-4'>
                <span className='text-body-caption font-medium text-grey'>
                  {t('consulting.demand1')}
                </span>
              </div>
              <div className='col-span-4'>
                <span className='text-body-caption font-medium text-grey'>
                  {t('consulting.demand2')}
                </span>
              </div>
              <div className='col-span-4'>
                <span className='text-body-caption font-medium text-grey'>
                  {t('consulting.demand3')}
                </span>
              </div>
            </Grid>
          </section>
          <section>
            <Grid className='col-span-12 mt-50'>
              <div className='col-span-4 col-start-5'>
                <h4 className='text-h4 font-medium'>
                  {t('consulting.section6.title')}
                </h4>
                <span className='text-body-caption font-medium text-grey mt-2'>
                  {t('consulting.section6.subtitle')}
                </span>
              </div>
            </Grid>
            <Grid className='col-span-12 mt-30'>
              <div className='col-span-4 space-y-6'>
                <h5 className='text-h5 font-light'>
                  {t('consulting.section6.paragraph1')}
                </h5>
                <div>
                  <span className='text-body-regular font-light'>
                    {t('consulting.section6.paragraph2')}
                  </span>
                </div>
              </div>
              {priceGraphColData.map(
                ({ numberOfRooms, percent, textBot, textMid, textTop }) => (
                  <div className='col-span-1' key={percent}>
                    <PriceGraphCol
                      percent={percent}
                      numberOfRooms={t(numberOfRooms)}
                      textTop={textTop}
                      textMid={textMid}
                      textBot={textBot}
                    />
                  </div>
                )
              )}
              <div className='col-span-4 flex items-end'>
                <div className='flex flex-col border-l border-l-orange pl-10'>
                  <div className='flex mb-7'>
                    <Image
                      src='/icons/percent.svg'
                      width={22}
                      height={22}
                      alt='percent icon'
                    />
                    <span className='ml-2 text-body-caption font-medium'>
                      {t('consulting.section6.legend1')}
                    </span>
                  </div>
                  <div className='flex space-x-10'>
                    <div className='flex items-end'>
                      <div className='h-10 w-10 bg-red mr-2' />
                      <span className='text-body-caption font-medium'>
                        {t('consulting.section6.legend2')}
                      </span>
                    </div>
                    <div className='flex items-end'>
                      <div className='h-10 w-10 bg-medium-red mr-2' />
                      <span className='text-body-caption font-medium'>
                        {t('consulting.section6.legend3')}
                      </span>
                    </div>
                    <div className='flex items-end'>
                      <div className='h-10 w-10 bg-medium-grey mr-2' />
                      <span className='text-body-caption font-medium'>
                        {t('consulting.section6.legend4')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </section>
        </div>
      </PageMarginWithTitle>
      {/* MOBILE SECTION */}
      <section className='md:hidden w-full mt-30'>
        <PageMarginWithTitle>
          <Grid>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium'>
                {t('consulting.section6.title')}
              </span>
              <span className='text-body-regular-mob font-light block mt-4 mb-10'>
                {t('consulting.section6.subtitle')}
              </span>
              <span className='text-h5-mob font-medium'>
                {t('consulting.section6.paragraph1')}
              </span>
              <span className='text-body-regular-mob font-light block mt-4'>
                {t('consulting.section6.paragraph2')}
              </span>
              <div className='flex mb-7 items-center mt-10'>
                <span className='text-h5-mob font-medium'>%</span>
                <span className='ml-2 text-body-caption-mob font-light'>
                  {t('consulting.section6.legend1')}
                </span>
              </div>
              <div className='flex space-x-4 mt-6'>
                <div className='flex items-end'>
                  <div className='bg-red w-6 h-6 mr-2' />
                  <span className='text-body-caption-10 font-light'>
                    {t('consulting.section6.legend2')}
                  </span>
                </div>
                <div className='flex items-end'>
                  <div className='bg-medium-red w-6 h-6 mr-2' />
                  <span className='text-body-caption-10 font-light'>
                    {t('consulting.section6.legend3')}
                  </span>
                </div>
                <div className='flex items-end'>
                  <div className='bg-medium-grey w-6 h-6 mr-2' />
                  <span className='text-body-caption-10 font-light'>
                    {t('consulting.section6.legend4')}
                  </span>
                </div>
              </div>
              <div className='flex flex-col space-y-10 mt-16'>
                {priceGraphColData.map(
                  ({ numberOfRooms, percent, textBot, textMid, textTop }) => (
                    <PriceGraphMob
                      key={percent}
                      numberOfRooms={t(numberOfRooms)}
                      percent={percent}
                      textBot={textBot}
                      textMid={textMid}
                      textTop={textTop}
                    />
                  )
                )}
              </div>
            </div>
          </Grid>
        </PageMarginWithTitle>
      </section>
      <PageMarginWithTitle className='bg-light-grey mt-40'>
        <section className='md:my-20 my-10'>
          <Grid className='col-span-2 md:col-span-12 '>
            <div className='col-span-2 md:col-span-8 flex flex-col space-y-8 md:space-y-10 md:order-1 order-2'>
              <HorizontalGraphWithTitle
                className='bg-red col-span-8'
                title={t('consulting.section11.graph1.title')}
                graphTitle={t('consulting.section11.graph1.graphTitle')}
              />

              <HorizontalGraphWithTitle
                className='bg-light-red col-span-4'
                title={
                  <span className='md:text-body-regular text-body-caption-10 text-grey font-light md:whitespace-pre-wrap'>
                    {t('consulting.section11.graph2.title')}
                  </span>
                }
                graphTitle={t('consulting.section11.graph2.graphTitle')}
              />
              <HorizontalGraphWithTitle
                className='bg-medium-red col-span-7'
                title={t('consulting.section11.graph3.title')}
                graphTitle={t('consulting.section11.graph3.graphTitle')}
              />
            </div>
            <div className='col-span-2 md:col-span-4 md:order-2 order-1'>
              <span className='block xl:mt-10 text-body-regular-mob mb-10 md:mb-0 md:text-body-regular font-light'>
                {t('consulting.section11.paragraph1')}
              </span>
            </div>
          </Grid>
          <Grid className='text-grey text-body-caption font-medium mt-10 md:mt-20 md:space-y-0 space-y-4'>
            <div className='col-span-2 md:col-span-4'>
              <span>{t('consulting.section11.paragraph2')}</span>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <span>{t('consulting.section11.paragraph3')}</span>
            </div>
            <div className='col-span-2 md:col-span-4'>
              <span>{t('consulting.section11.paragraph4')}</span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      {/* MOBILE */}

      <section className='mt-30 md:hidden'>
        <PageMarginWithTitle>
          <Grid>
            <div className='col-span-2 space-y-4 mb-10'>
              <span className='text-h3-mob font-medium'>
                {t('consulting.section7.title')}
              </span>
              <span className='block text-body-regular-mob font-light'>
                {t('consulting.section7.paragraph1')}
              </span>
            </div>
          </Grid>
          <div className='flex flex-col space-y-10'>
            {auditoryDataMob.map(({ title, data }) => (
              <Grid className='pt-4 border-t border-medium-grey' key={title}>
                <div className='col-span-2 mb-6'>
                  <span className='text-body-regular-mob font-medium'>
                    {t(title)}
                  </span>
                </div>
                <div className='col-span-1 space-y-4'>
                  {data.map(
                    ({ className, graphTitle, title }, index) =>
                      index % 2 === 0 && (
                        <HorizontalGraphWithTitle
                          key={title}
                          graphTitle={graphTitle}
                          title={t(title)}
                          className={className}
                        />
                      )
                  )}
                </div>
                <div className='col-span-1 space-y-4'>
                  {data.map(
                    ({ className, graphTitle, title }, index) =>
                      index % 2 !== 0 && (
                        <HorizontalGraphWithTitle
                          key={title}
                          graphTitle={graphTitle}
                          title={t(title)}
                          className={className}
                        />
                      )
                  )}
                </div>
              </Grid>
            ))}
          </div>
          <div className='flex flex-col mt-10 text-body-caption-10 font-light space-y-4'>
            <span>{t('consulting.section7.data_source1')}</span>
            <span>{t('consulting.section7.data_source2')}</span>
            <span>{t('consulting.section7.data_source3')}</span>
          </div>
        </PageMarginWithTitle>
      </section>
      <section className='md:hidden mt-20'>
        <PageMarginWithTitle>
          <Grid>
            <div className='col-span-2'>
              <span className='text-body-regular-mob font-medium'>
                {t('consulting.section8.title')}
              </span>
              <div className='flex justify-between text-body-regular-mob font-medium mt-10 pb-2 border-b border-medium-grey'>
                <span>10%</span>
                <span>50%</span>
                <span>70%</span>
              </div>
              <div className='flex flex-col space-y-4 mt-6'>
                {verticalGraphData.map(
                  ({ width, className, graphTitle, title }) => (
                    <div className='flex flex-col' key={title}>
                      <span className='text-body-caption-10 font-medium mb-2'>
                        {t(title)}
                      </span>
                      <div className={width}>
                        <HorizontalGraph
                          text={graphTitle}
                          className={className}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <span className='block mt-10 text-body-caption-10 font-medium'>
                {t('consulting.section8.data_source')}
              </span>
            </div>
          </Grid>
          <Grid className='mt-30'>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium'>
                {t('consulting.section9.title')}
              </span>
              <span className='text-body-regular-mob font-light block mt-4'>
                {t('consulting.section9.paragraph1')}
              </span>
            </div>
          </Grid>
        </PageMarginWithTitle>
        <Image
          className='mt-10'
          src='/pics/consultation/scenario-graph-1.png'
          width={480}
          height={234}
          alt=''
        />
        <div className='flex items-center px-14'>
          <Image
            className='mt-16'
            src='/pics/consultation/scenario-graph-2.png'
            width={363}
            height={362}
            alt=''
          />
        </div>
        <PageMarginWithTitle>
          <Grid className='mt-30 md:mb-0 mb-40'>
            <div className='col-span-2'>
              <span className='text-h3-mob font-medium block mb-10'>
                {t('consulting.section10.title')}
              </span>
              <div className='flex space-y-4 flex-col'>
                {(
                  t('consulting.section10.conclusions', {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <div
                    className='flex pb-4 border-b border-medium-grey'
                    key={item}
                  >
                    <span className='text-h5-mob font-medium mr-4 text-medium-grey'>
                      {addLeadingZero(index + 1)}
                    </span>
                    <span className='text-body-regular-mob font-medium'>
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </PageMarginWithTitle>
      </section>

      {/* DESKTOP */}
      <PageMarginWithTitle className='hidden md:block'>
        <section className='mt-50'>
          <Grid>
            <div className='col-start-5 col-span-4'>
              <span className='text-h4 font-medium'>
                {t('consulting.section7.title')}
              </span>
            </div>
            <div className='col-start-9 col-span-3'>
              <span className='text-body-regular font-light'>
                {t('consulting.section7.paragraph1')}
              </span>
            </div>
          </Grid>
          <Grid className='mt-40'>
            <div className='col-span-2 md:col-span-4 flex flex-col'>
              <span className='mb-10'>{t('consulting.section7.material')}</span>
              <div className='flex flex-col space-y-10'>
                {horizontalGraphData.map(({ className, graphTitle, title }) => (
                  <HorizontalGraphWithTitle
                    key={title}
                    graphTitle={graphTitle}
                    title={t(title)}
                    className={className}
                  />
                ))}
              </div>
            </div>
            <div className='col-span-2 md:col-span-4 flex flex-col'>
              <span className='mb-10'>{t('consulting.section7.floors')}</span>
              <div className='flex flex-col space-y-10'>
                {horizontalGraphData2.map(
                  ({ className, graphTitle, title }) => (
                    <HorizontalGraphWithTitle
                      key={title}
                      graphTitle={graphTitle}
                      title={t(title)}
                      className={className}
                    />
                  )
                )}
              </div>
            </div>
            <div className='col-span-2 md:col-span-4 flex flex-col'>
              <span className='mb-10'>{t('consulting.section7.finish')}</span>
              <div className='flex flex-col space-y-10'>
                {horizontalGraphData3.map(
                  ({ className, graphTitle, title }) => (
                    <HorizontalGraphWithTitle
                      key={title}
                      graphTitle={graphTitle}
                      title={t(title)}
                      className={className}
                    />
                  )
                )}
              </div>
            </div>
          </Grid>
          <Grid className='mt-20 text-body-caption font-medium text-grey'>
            <div className='col-span-4'>
              <span>{t('consulting.section7.data_source1')}</span>
            </div>
            <div className='col-span-4'>
              <span>{t('consulting.section7.data_source2')}</span>
            </div>
            <div className='col-span-4'>
              <span>{t('consulting.section7.data_source3')}</span>
            </div>
          </Grid>
        </section>
        <section className='mt-50'>
          <Grid className='xl:pt-6 xl:border-t border-grey'>
            <div className='md:col-span-12 xl:col-span-4 flex flex-col justify-between'>
              <span className='text-h5 font-light xl:mb-0 md:mb-6'>
                {t('consulting.section8.title')}
              </span>
              <span className='block md:mb-10 xl:mb-0 text-body-caption font-medium text-grey'>
                {t('consulting.section8.data_source')}
              </span>
            </div>
            <div className='md:col-span-12 xl:col-span-8 h-[522px] grid grid-cols-8 gap-x-10'>
              <div className='col-span-1 flex flex-col justify-between mb-5 border-l border-medium-grey pl-2'>
                <span className='text-h4 font-medium'>70%</span>
                <span className='text-h4 font-medium'>40%</span>
                <span className='text-h4 font-medium'>10%</span>
              </div>
              {verticalGraphData.map(({ className, graphTitle, title }) => (
                <VerticalGraphWithTitle
                  key={title}
                  graphTitle={graphTitle}
                  title={t(title)}
                  className={className}
                />
              ))}
            </div>
          </Grid>
        </section>
        <section className='mt-50'>
          <Grid>
            <div className='col-span-8 col-start-5'>
              <span className='text-h4 font-medium'>
                {t('consulting.section9.title')}
              </span>
              <div className='text-body-regular font-light mt-6'>
                {t('consulting.section9.paragraph1')}
              </div>
            </div>
          </Grid>
          <Grid className='mt-30'>
            <div className='col-span-8'>
              <Image
                src='/pics/consultation/scenario-graph-1.png'
                width={1160}
                height={569}
                alt=''
              />
            </div>
            <div className='col-span-4'>
              <Image
                src='/pics/consultation/scenario-graph-2.png'
                width={560}
                height={643}
                alt=''
              />
            </div>
          </Grid>
        </section>
        <section className='mt-50'>
          <Grid>
            <div className='col-start-5 col-end-12'>
              <span className='text-h4 font-medium'>
                {t('consulting.section10.title')}
              </span>
            </div>
            <div className='col-start-2 col-end-12 flex flex-col gap-y-10 mt-24'>
              {(
                t('consulting.section10.conclusions', {
                  returnObjects: true,
                }) as string[]
              ).map((item, index) => (
                <ConclusionRow
                  key={item}
                  number={addLeadingZero(index + 1)}
                  text={item}
                />
              ))}
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </>
  );
};

export default ConsultingPage;
