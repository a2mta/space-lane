import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import React, { FC } from 'react';

const DemandTableRows: FC<{ textForRows: string[] }> = ({ textForRows }) =>
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
            { 'text-body-regular': index > 0 }
          )}
        >
          {item}
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
      <span className='text-body-regular'>{text}</span>
    </div>
  </div>
);

const HorizontalGraphWithTitle: FC<{
  className?: string;
  title: string;
  graphTitle: string;
}> = ({ graphTitle, className, title }) => (
  <div className='flex flex-col'>
    <span className='mb-4 text-body-regular text-grey'>{title}</span>
    <div className='grid grid-cols-8'>
      <HorizontalGraph text={graphTitle} className={className} />
    </div>
  </div>
);

const VerticalGraphWithTitle: FC<{
  className?: string;
  title: string;
  graphTitle: string;
}> = ({ graphTitle, className, title }) => (
  <div className='flex h-full flex-col'>
    <div className='h-full flex items-end'>
      <VerticalGraph text={graphTitle} className={className} />
    </div>
    <span className='mt-1 text-body-caption text-grey'>{title}</span>
  </div>
);

const VerticalGraph: FC<{ className?: string; text: string }> = ({
  className,
  text,
}) => (
  <div
    className={classNames(
      'h-full w-full flex items-end text-white p-1',
      className
    )}
  >
    <span className='text-h4'>{text}</span>
  </div>
);

const HorizontalGraph: FC<{ className?: string; text: string }> = ({
  text,
  className,
}) => (
  <div className={classNames('w-full text-white px-6 py-2', className)}>
    <span className='text-h4'>{text}</span>
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
    <span className='text-grey text-body-caption'>{numberOfRooms}</span>
    <div className='flex flex-col mt-6 space-y-2 text-white mb-24'>
      <div className='flex items-end h-[120px] bg-red p-2'>
        <span className='text-h4'>{textTop}</span>
      </div>
      <div className='flex items-end h-[105px] bg-medium-red p-2'>
        <span className='text-h4'>{textMid}</span>
      </div>
      <div className='flex items-end h-20 bg-medium-grey p-2'>
        <span className='text-h4'>{textMid}</span>
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

const ConsultingPage = () => {
  return (
    <>
      <Head>
        <title>Консалтинг</title>
      </Head>
      <PageMarginWithTitle title='Консалтинг'>
        <section>
          <Grid className='mt-30'>
            <div className='col-span-4 flex flex-col'>
              <h4 className='text-h4'>Анализ рынка</h4>
              <p className='text-grey mt-4 text-body-caption'>
                (Исследование сделано в IV квартале 2023 года на основании
                анализа рынка ИЖС Московской области с использованием
                аналитических материалов ДОМ.рф, ВЦИОМ, Домклик и др.)
              </p>
            </div>
            <div className='col-span-4'>
              <p className='text-body-regular'>
                За последние годы большое количество льготных ипотечныхпрограмм
                и постпандемийные последствия в виде ростачисленности
                сотрудников, работающих удалённо, изменилицелевую аудиторию
                рынка ИЖС, снизив средний возрастсреднестатистического
                покупателя, минимальный требуемый доход и, как следствие,
                предпочтения покупателя относительно желаемого объекта
                недвижимости.
              </p>
            </div>
            <div className='col-span-4'>
              <p className='text-body-regular'>
                За 3 года доля ипотечных сделок на рынке ИЖС выросла в 2,5 раза,
                при этом самую высокую динамику в 2023 году показало
                кредитование строительства частных домов. Значительный рост
                выдачи ипотек обоснован тем, что сегодня строительство частного
                дома с привлечением профессиональных подрядчиков доступно в
                рамках всех льготных ипотечных программ.
              </p>
            </div>
          </Grid>
        </section>
        <section>
          <Grid className='mt-70'>
            <div className='col-span-4'>
              <p className='text-body-regular'>
                Для целей дальнейшего анализа используются данные аналитических
                исследований, как о покупателях ИЖС, так и пользователях ипотеки
                на ИЖС, которая наиболее востребована именно в комфорт-классе.
              </p>
            </div>
            <div className='col-span-8'>
              <Graph />
            </div>
          </Grid>
        </section>
        <div className='mt-70'>
          <section>
            <Grid className='col-span-12'>
              <div className='col-span-2 grid gap-y-10'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5'>
                    Доля в общем
                    <br />
                    объёме спроса
                  </span>
                </div>
              </div>
              <div className='col-span-2 grid gap-y-10'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5'>Группа</span>
                </div>
              </div>
              <div className='col-span-2 grid gap-y-10'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5'>Средний возраст</span>
                </div>
              </div>
              <div className='col-span-2 grid gap-y-10'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5'>Состав семьи</span>
                </div>
              </div>
              <div className='col-span-4 grid gap-y-10'>
                <div className='flex items-end pb-2 border-b border-medium-grey'>
                  <span className='text-red text-h5'>
                    Цель приобретения недвижимости
                  </span>
                </div>
              </div>
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                textForRows={[
                  '50%',
                  'Семьи с детьми',
                  'от 35 до 45 лет',
                  '1–2 ребёнка',
                  `Часто уже имеют недвижимость в столице
                    и приобретают домдля расширения пространства. Хотят увезти
                    детей из «загазованного мегаполиса на природу».`,
                ]}
              />
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                textForRows={[
                  '25%',
                  'Молодые люди',
                  'до 35 лет',
                  'Пары без детей и одинокие',
                  `Состоявшиеся в карьерном плане люди со стабильным доходом. Часто
                    это первое жильё, которое планируют приобретать за счёт ипотечного
                    займа.`,
                ]}
              />
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                textForRows={[
                  '15%',
                  'Люди старшего возраста',
                  'Старше 50 лет',
                  'Взрослые дети на перспективу для детей и внуков',
                  `Приобретают дом для спокойной жизни на природе илина перспективу для детей и внуков. Чаще других приобретаютнедвижимость за счёт собственных средств.`,
                ]}
              />
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <DemandTableRows
                textForRows={[
                  '5%',
                  'Приезжие из регионов',
                  '-',
                  '-',
                  `Это могут быть как молодые люди, так и семьи и даже пенсионеры, переехавшие в Москву и подмосковье. Имеют стабильный доход и постоянную работу в Москве.`,
                ]}
              />
            </Grid>
            <Grid className='col-span-12 mt-10'>
              <div className='col-span-4'>
                <span className='text-body-caption text-grey'>
                  01/ Льготной, семейной, дальневосточной, сельской ипотеки, а
                  также ипотеки для IT — специалистов. Также обсуждается
                  введение льготной ипотеки на ИЖС, которая объединит все
                  форматы частного домостроения.
                </span>
              </div>
              <div className='col-span-4'>
                <span className='text-body-caption text-grey'>
                  02/ Аналитика ГК «Самолёт», август 2022г.
                </span>
              </div>
              <div className='col-span-4'>
                <span className='text-body-caption text-grey'>
                  03/ Составлено на основании ЦИАН Аналитики (2019), данных
                  группы МЕТА (ноябрь 2022).аналитики ГК «Самолёт» (август
                  2022).
                </span>
              </div>
            </Grid>
          </section>
          <section>
            <Grid className='col-span-12 mt-50'>
              <div className='col-span-4 col-start-5'>
                <h4 className='text-h4'>Стоимость и площадь</h4>
                <span className='text-body-caption text-grey mt-2'>
                  Средняя стоимость дома в мск
                </span>
              </div>
            </Grid>
            <Grid className='col-span-12 mt-30'>
              <div className='col-span-4 space-y-6'>
                <h5 className='text-h5'>
                  Предпочтительная площадь дома в зависимости от кол-ва комнат в
                  РФ, м²
                </h5>
                <div>
                  <span className='text-body-caption'>
                    Для аудитории Москвы и московской области принимаются
                    наиболее предпочтительной площадь 80-процентного квантиля
                    из-за более высоких доходов населения.
                  </span>
                </div>
              </div>
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={6}
                  numberOfRooms='2 комнаты'
                  textTop='70'
                  textBot='20'
                  textMid='50'
                />
              </div>
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={24}
                  numberOfRooms='3 комнаты'
                  textTop='100'
                  textMid='80'
                  textBot='60'
                />
              </div>
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={36}
                  numberOfRooms='4 комнаты'
                  textTop='130'
                  textMid='100'
                  textBot='75'
                />
              </div>
              <div className='col-span-1'>
                <PriceGraphCol
                  percent={33}
                  numberOfRooms='5 и более'
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
                    <span className='ml-2 text-body-caption'>
                      процент от тех, у кого есть потребность в индивидуальных
                      домах
                    </span>
                  </div>
                  <div className='flex space-x-10'>
                    <div className='flex items-end'>
                      <div className='h-10 w-10 bg-red mr-2' />
                      <span className='text-body-caption'>80% квантиль</span>
                    </div>
                    <div className='flex items-end'>
                      <div className='h-10 w-10 bg-medium-red mr-2' />
                      <span className='text-body-caption'>Медиана</span>
                    </div>
                    <div className='flex items-end'>
                      <div className='h-10 w-10 bg-medium-grey mr-2' />
                      <span className='text-body-caption'>20% квантиль</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </section>
        </div>
        <section className='mt-60'>
          <Grid className='col-span-12 mt-30'>
            <div className='col-span-8 flex flex-col mb-10'>
              <HorizontalGraphWithTitle
                className='bg-red col-span-8'
                title='01 — Медианная стоимость строящегося жилого дома площадью 150 м²
                (ИКС) в Московской области'
                graphTitle='8,8 млн. руб'
              />
            </div>
            <div className='col-span-4'>
              <span>
                Медианная стоимость строящегося жилого дома в Подмосковье
                составляет около 60 тыс. ₽ за 1 м². Средняя стоимость объекта
                недвижимости, приобретённого по программе ИЖС ипотеки на 16%
                ниже медианной стоимости вне зависимости от типа сделки.
                Незначительная разница подтверждает, что объекты, приобретённые
                с использованием кредитных инструментов, соответствуют медианным
                показателям рынка в целом.
              </span>
            </div>
            <div className='col-span-8 flex flex-col mb-10'>
              <HorizontalGraphWithTitle
                className='bg-light-red col-span-4'
                title='02 — Медианная стоимость участка 8 сот. в Московской области'
                graphTitle='2,2 млн. руб'
              />
            </div>
            <div className='col-span-8 flex flex-col mb-10'>
              <HorizontalGraphWithTitle
                className='bg-medium-red col-span-7'
                title='03 — Средняя стоимость объекта недвижимости, приобретенного по программе ИЖС ипотеки в Московской области'
                graphTitle='7,4 млн. руб'
              />
            </div>
          </Grid>
          <Grid className='text-grey text-body-caption'>
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
        <section className='mt-60'>
          <Grid>
            <div className='col-start-5 col-span-4'>
              <span className='text-h4'>Предпочтения аудитории</span>
            </div>
            <div className='col-start-9 col-span-3'>
              <span>
                Наполнение дома все чаще характеризуется более продуманной
                планировкой, большим количеством спален, наличием домашних
                офисов и дополнительными пространствами для проведения досуга.
              </span>
            </div>
          </Grid>
          <Grid className='mt-40'>
            <div className='col-span-4 flex flex-col'>
              <span className='mb-10'>Желаемый материал дома</span>
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
          <Grid className='mt-20 text-body-caption text-grey'>
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
              <span className='text-h5'>
                Предпочтительное наполнение дома и территории (% от аудитории)
              </span>
              <span className='text-body-caption text-grey'>
                Аналитика ГК «Самолёт», август 2022 г.
              </span>
            </div>
            <div className='col-span-8 h-[522px] grid grid-cols-8 gap-x-10'>
              <div className='col-span-1 flex flex-col justify-between mb-5 border-l border-medium-grey pl-2'>
                <span className='text-h4'>70%</span>
                <span className='text-h4'>40%</span>
                <span className='text-h4'>10%</span>
              </div>
              <VerticalGraphWithTitle
                graphTitle='71%'
                title='Столовая'
                className='bg-medium-red'
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
              <span className='text-h4'>Сценарии жизни семьи</span>
              <div className='text-body-regular mt-6'>
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
              <span className='text-h4'>Ключевые выводы</span>
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
