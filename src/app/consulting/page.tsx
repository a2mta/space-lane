import PageWithTitleWrap from '@/components/PAgeWithTitleWrap';
import classNames from 'classnames';
import React, { FC } from 'react';

const DemandTableRows: FC<{ textForRows: string[] }> = ({ textForRows }) =>
  textForRows.map((item, index) => (
    <div
      //   className={`col-span-${
      //     index === textForRows.length - 1 ? '4' : '2'
      //   } flex items-center`}
      className={classNames('flex items-start', {
        'col-span-4': index === textForRows.length - 1,
        'mt-7': index !== 0,
        'col-span-2': index !== textForRows.length - 1,
        // 'items-center': index !== textForRows.length - 1,
        // 'items-start': index === textForRows.length - 1,
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

const ConsultingPage = () => {
  return (
    <PageWithTitleWrap title='Консалтинг'>
      <div className='grid grid-cols-12 gap-x-10 mt-30'>
        <div className='col-span-4 flex flex-col'>
          <h4 className='text-h4'>Анализ рынка</h4>
          <p className='text-grey mt-4 text-xs'>
            (Исследование сделано в IV квартале 2023 года на основании анализа
            рынка ИЖС Московской области с использованием аналитических
            материалов ДОМ.рф, ВЦИОМ, Домклик и др.)
          </p>
        </div>
        <div className='col-span-4'>
          <p className='text-body-regular'>
            За последние годы большое количество льготных ипотечныхпрограмм
            и постпандемийные последствия в виде ростачисленности сотрудников,
            работающих удалённо, изменилицелевую аудиторию рынка ИЖС, снизив
            средний возрастсреднестатистического покупателя, минимальный
            требуемый доход и, как следствие, предпочтения покупателя
            относительно желаемого объекта недвижимости.
          </p>
        </div>
        <div className='col-span-4'>
          <p className='text-body-regular'>
            За 3 года доля ипотечных сделок на рынке ИЖС выросла в 2,5 раза,
            при этом самую высокую динамику в 2023 году показало кредитование
            строительства частных домов. Значительный рост выдачи ипотек
            обоснован тем, что сегодня строительство частного дома
            с привлечением профессиональных подрядчиков доступно в рамках всех
            льготных ипотечных программ.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-x-10 mt-70'>
        <div className='col-span-4'>
          <p className='text-body-regular'>
            Для целей дальнейшего анализа используются данные аналитических
            исследований, как о покупателях ИЖС, так и пользователях ипотеки
            на ИЖС, которая наиболее востребована именно в комфорт-классе.
          </p>
        </div>
        <div className='col-span-8'>graph</div>
      </div>
      <div className='mt-70'>
        <div className='grid grid-cols-12 gap-x-10 col-span-12'>
          <div className='col-span-2 grid gap-y-10'>
            <div className='flex items-end pb-2 border-b border-medium-grey'>
              <span className='text-red text-h5'>
                Доля в общем
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
        </div>
        <div className='grid grid-cols-12 gap-x-10 col-span-12 mt-10'>
          <DemandTableRows
            textForRows={[
              '50%',
              'Семьи с детьми',
              'от 35 до 45 лет',
              '1–2 ребёнка',
              `Часто уже имеют недвижимость в столице
              и приобретают домдля расширения пространства. Хотят увезти
              детей из «загазованного мегаполиса на природу».`,
            ]}
          />
        </div>
        <div className='grid grid-cols-12 gap-x-10 col-span-12 mt-10'>
          <DemandTableRows
            textForRows={[
              '25%',
              'Молодые люди',
              'до 35 лет',
              'Пары без детей и одинокие',
              `Состоявшиеся в карьерном плане люди со стабильным доходом. Часто
              это первое жильё, которое планируют приобретать за счёт ипотечного
              займа.`,
            ]}
          />
        </div>
        <div className='grid grid-cols-12 gap-x-10 col-span-12 mt-10'>
          <DemandTableRows
            textForRows={[
              '15%',
              'Люди старшего возраста',
              'Старше 50 лет',
              'Взрослые дети на перспективу для детей и внуков',
              `Приобретают дом для спокойной жизни на природе илина перспективу для детей и внуков. Чаще других приобретаютнедвижимость за счёт собственных средств.`,
            ]}
          />
        </div>
        <div className='grid grid-cols-12 gap-x-10 col-span-12 mt-10'>
          <DemandTableRows
            textForRows={[
              '5%',
              'Приезжие из регионов',
              '-',
              '-',
              `Это могут быть как молодые люди, так и семьи и даже пенсионеры, переехавшие в Москву и подмосковье. Имеют стабильный доход и постоянную работу в Москве.`,
            ]}
          />
        </div>
        <div className='grid grid-cols-12 gap-x-10 col-span-12 mt-10'>
          <div className='col-span-4'>
            <span className='text-xs text-grey'>
              01/ Льготной, семейной, дальневосточной, сельской ипотеки,
              а также ипотеки для IT — специалистов. Также обсуждается введение
              льготной ипотеки на ИЖС, которая объединит все форматы частного
              домостроения.
            </span>
          </div>
          <div className='col-span-4'>
            <span className='text-xs text-grey'>
              02/ Аналитика ГК «Самолёт», август 2022г.
            </span>
          </div>
          <div className='col-span-4'>
            <span className='text-xs text-grey'>
              03/ Составлено на основании ЦИАН Аналитики (2019), данных группы
              МЕТА (ноябрь 2022).аналитики ГК «Самолёт» (август 2022).
            </span>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-x-10 col-span-12 mt-50'>
          <div className='col-span-4 col-start-5'>
            <h4 className='text-h4'>Стоимость и площадь</h4>
            <span className='text-xs text-grey mt-2'>
              Средняя стоимость дома в мск
            </span>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-x-10 col-span-12 mt-30'>
          <div className='col-span-4 space-y-6'>
            <h5 className='text-h5'>
              Предпочтительная площадь дома в зависимости от кол-ва комнат в РФ,
              м²
            </h5>
            <div>
              <span className='text-xs'>
                Для аудитории Москвы и московской области принимаются наиболее
                предпочтительной площадь 80-процентного квантиля из-за более
                высоких доходов населения.
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageWithTitleWrap>
  );
};

export default ConsultingPage;
