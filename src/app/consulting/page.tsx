import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';
import { createTranslation } from '../../../i18n/server';
import { addLeadingZero } from '@/utils';

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
      {typeof title === 'string' ? (
        <span className='mb-4 text-body-regular text-grey'>{title}</span>
      ) : (
        title
      )}

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
  <div className={classNames('w-full text-white px-6 py-2', className)}>
    <span className='text-h4 font-medium'>{text}</span>
  </div>
);

const PriceGraphCol: FC<{
  percent: number;
  numberOfRooms: string;
  textTop: string;
  textMid: string;
  textBot: string;
}> = ({ numberOfRooms, percent, textBot, textMid, textTop }) => (
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
              <p className='text-body-regular-mob md:text-body-regular font-light'>
                За последние годы большое количество льготных ипотечных программ
                и постпандемийные последствия в виде ростачисленности
                сотрудников, работающих удалённо, изменилицелевую аудиторию
                рынка ИЖС, снизив средний возрастсреднестатистического
                покупателя, минимальный требуемый доход и, как следствие,
                предпочтения покупателя относительно желаемого объекта
                недвижимости.
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
                  <span className='text-red text-h5 font-light'>
                    Доля в общем
                    <br />
                    объёме спроса
                  </span>
                </div>
              </div>
              <div className='col-span-2 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>Группа</span>
                </div>
              </div>
              <div className='col-span-2 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>
                    Средний возраст
                  </span>
                </div>
              </div>
              <div className='col-span-2 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>
                    Состав семьи
                  </span>
                </div>
              </div>
              <div className='col-span-4 grid'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5 font-light'>
                    Цель приобретения недвижимости
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
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={6}
                  numberOfRooms={t('consulting.section6.graph1.rooms')}
                  textTop='70'
                  textMid='50'
                  textBot='45'
                />
              </div>
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={24}
                  numberOfRooms={t('consulting.section6.graph2.rooms')}
                  textTop='100'
                  textMid='80'
                  textBot='60'
                />
              </div>
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={36}
                  numberOfRooms={t('consulting.section6.graph3.rooms')}
                  textTop='130'
                  textMid='100'
                  textBot='75'
                />
              </div>
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={33}
                  numberOfRooms={t('consulting.section6.graph4.rooms')}
                  textTop='130'
                  textMid='100'
                  textBot='75'
                />
              </div>
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
      <PageMarginWithTitle className='bg-beige mt-40'>
        <section className='my-20'>
          <Grid className='col-span-12 '>
            <div className='col-span-8 flex flex-col space-y-10'>
              <HorizontalGraphWithTitle
                className='bg-red col-span-8'
                title='01 — Медианная стоимость строящегося жилого дома площадью 150 м²
                (ИКС) в Московской области'
                graphTitle='8,8 млн. руб'
              />

              <HorizontalGraphWithTitle
                className='bg-light-red col-span-4'
                title={
                  <span className='mb-4 text-body-regular text-grey font-light'>
                    02 — Медианная стоимость участка 8 сот. <br /> в Московской
                    области
                  </span>
                }
                graphTitle='2,2 млн. руб'
              />
              <HorizontalGraphWithTitle
                className='bg-medium-red col-span-7'
                title='03 — Средняя стоимость объекта недвижимости, приобретенного по программе ИЖС ипотеки в Московской области'
                graphTitle='7,4 млн. руб'
              />
            </div>
            <div className='col-span-4'>
              <span className='block mt-10 text-body-regular font-light'>
                Медианная стоимость строящегося жилого дома в Подмосковье
                составляет около 60 тыс. ₽ за 1 м². Средняя стоимость объекта
                недвижимости, приобретённого по программе ИЖС ипотеки на 16%
                ниже медианной стоимости вне зависимости от типа сделки.
                Незначительная разница подтверждает, что объекты, приобретённые
                с использованием кредитных инструментов, соответствуют медианным
                показателям рынка в целом.
              </span>
            </div>
          </Grid>
          <Grid className='text-grey text-body-caption font-medium mt-20'>
            <div className='col-span-4'>
              <span>01/ По данным Домклик в мае — сентябре 2023 г.</span>
            </div>
            <div className='col-span-4'>
              <span>
                02/ Расчет на основании данных Сбербанка о количестве и объеме
                выданных ипотек в Московской области в августе 2023г.
              </span>
            </div>
            <div className='col-span-4'>
              <span>
                03/ Те к кого, есть потребность в индивидуальном доме в 5-летней
                перспективе. ВЦИОМ 2021, расчеты ДОМ.РФ
              </span>
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
      <PageMarginWithTitle>
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
            <div className='col-span-4 flex flex-col'>
              <span className='mb-10'>{t('consulting.section7.material')}</span>
              <div className='flex flex-col space-y-10'>
                <HorizontalGraphWithTitle
                  graphTitle='48%'
                  title='Кирпич'
                  className='bg-red col-span-8'
                />
                <HorizontalGraphWithTitle
                  graphTitle='39%'
                  title='Пено — и газобетон'
                  className='bg-medium-red col-span-7'
                />
                <HorizontalGraphWithTitle
                  graphTitle='24%'
                  title='Дерево (брус)'
                  className='bg-light-red col-span-6'
                />
                <HorizontalGraphWithTitle
                  graphTitle='7%'
                  title='Каркас (дерево)'
                  className='bg-grey col-span-3'
                />
                <HorizontalGraphWithTitle
                  graphTitle='5%'
                  title='Не имеет значение'
                  className='bg-grey col-span-2'
                />
              </div>
            </div>
            <div className='col-span-4 flex flex-col'>
              <span className='mb-10'>Этажность</span>
              <div className='flex flex-col space-y-10'>
                <HorizontalGraphWithTitle
                  graphTitle='72%'
                  title='Одноэтажные дома'
                  className='bg-red col-span-8'
                />
                <HorizontalGraphWithTitle
                  graphTitle='21%'
                  title='Двухэтажные дома'
                  className='bg-medium-red col-span-6'
                />
                <HorizontalGraphWithTitle
                  graphTitle='5%'
                  title='Одно — или двух этажные дома'
                  className='bg-light-red col-span-3'
                />
                <HorizontalGraphWithTitle
                  graphTitle='2%'
                  title='Двух — или трехэтажные дома'
                  className='bg-grey col-span-2'
                />
              </div>
            </div>
            <div className='col-span-4 flex flex-col'>
              <span className='mb-10'>Желаемый уровень отделки дома</span>
              <div className='flex flex-col space-y-10'>
                <HorizontalGraphWithTitle
                  graphTitle='75%'
                  title='Под ключ'
                  className='bg-red col-span-8'
                />
                <HorizontalGraphWithTitle
                  graphTitle='25%'
                  title='Без отделки'
                  className='bg-medium-red col-span-6'
                />
              </div>
            </div>
          </Grid>
          <Grid className='mt-20 text-body-caption font-medium text-grey'>
            <div className='col-span-4'>
              <span>
                Согласно данным Дом.РФ на основании данных ВЦИОМ, 2023 г.
              </span>
            </div>
            <div className='col-span-4'>
              <span>Согласно данным по кредитам на ИЖС, Домклик, 2023 г.</span>
            </div>
            <div className='col-span-4'>
              <span>Ведомости Недвижимость, апрель 2022 г.</span>
            </div>
          </Grid>
        </section>
        <section className='mt-50'>
          <Grid className='pt-6 border-t border-grey'>
            <div className='col-span-4 flex flex-col justify-between'>
              <span className='text-h5 font-light'>
                Предпочтительное наполнение дома и территории (% от аудитории)
              </span>
              <span className='text-body-caption font-medium text-grey'>
                Аналитика ГК «Самолёт», август 2022 г.
              </span>
            </div>
            <div className='col-span-8 h-[522px] grid grid-cols-8 gap-x-10'>
              <div className='col-span-1 flex flex-col justify-between mb-5 border-l border-medium-grey pl-2'>
                <span className='text-h4 font-medium'>70%</span>
                <span className='text-h4 font-medium'>40%</span>
                <span className='text-h4 font-medium'>10%</span>
              </div>
              <VerticalGraphWithTitle
                graphTitle='71%'
                title='Столовая'
                className='bg-medium-red h-full'
              />
              <VerticalGraphWithTitle
                graphTitle='51%'
                title='Кладовая'
                className='bg-medium-red h-[85%]'
              />
              <VerticalGraphWithTitle
                graphTitle='47%'
                title='Гардеробная'
                className='bg-medium-red h-[80%]'
              />
              <VerticalGraphWithTitle
                graphTitle='47%'
                title='Гараж'
                className='bg-medium-red h-[80%]'
              />
              <VerticalGraphWithTitle
                graphTitle='70%'
                title='Беседка'
                className='bg-medium-red h-[95%]'
              />
              <VerticalGraphWithTitle
                graphTitle='67%'
                title='Зона для барбекю'
                className='bg-medium-red h-[93%]'
              />
              <VerticalGraphWithTitle
                graphTitle='66%'
                title='Баня'
                className='bg-medium-red h-[91%]'
              />
            </div>
          </Grid>
        </section>
        <section className='mt-50'>
          <Grid>
            <div className='col-span-8 col-start-5'>
              <span className='text-h4 font-medium'>Сценарии жизни семьи</span>
              <div className='text-body-regular font-light mt-6'>
                Исследование показывает что больше 40% нашего дома используется
                намного реже, чем вся остальная его часть. Центром активностей
                семейного взаимодействия является кухня и комната отдыха с
                телевизором и компьютером.
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
              <span className='text-h4 font-medium'>Ключевые выводы</span>
            </div>
            <div className='col-start-2 col-end-12 flex flex-col gap-y-10 mt-24'>
              <ConclusionRow
                number='01'
                text='58% аудитории приобретают дома для постоянного проживания'
              />
              <ConclusionRow
                number='02'
                text='Снижение возраста среднестатистического покупателя'
              />
              <ConclusionRow
                number='03'
                text='75% аудитории — люди до 45 лет, в большинстве пары с детьми'
              />
              <ConclusionRow
                number='04'
                text='Льготные программы расширяют использование ипотеки ИЖС'
              />
              <ConclusionRow
                number='05'
                text='Сокращение площади жилых домов: 74% аудитории предпочитают дома от 80 до 180 м²'
              />
              <ConclusionRow
                number='06'
                text='Покупатели предпочитают каменные одноэтажные дома с отделкой «под ключ»'
              />
              <ConclusionRow
                number='07'
                text='Увеличение ключевой ставки приведёт к росту ипотечных ставок и отрицательно скажется на спросе'
              />
            </div>
          </Grid>
        </section>
      </PageMarginWithTitle>
    </>
  );
};

export default ConsultingPage;
