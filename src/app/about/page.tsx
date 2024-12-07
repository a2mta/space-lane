'use client';
import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import classNames from 'classnames';
import Image from 'next/image';
import React, { FC,  } from 'react';

const Avatar: FC<{
  className?: string;
  url: string;
  name: string;
  title: string;
}> = ({ name, title, url, className }) => (
  <div
    className={classNames('col-span-1 md:col-span-2 flex flex-col', className)}
  >
    <Image
      className='grayscale'
      src={url}
      width={198}
      height={259}
      alt={name + ' photo'}
    />
    <div className='flex flex-col'>
      <span className='text-body-regular-mob md:text-body-caption xl:text-body font-medium mt-4'>
        {name}
      </span>
      <span className='text-body-caption-10 md:text-body-caption xl:text-body-caption font-medium mt-2'>
        {title}
      </span>
    </div>
  </div>
);

const AboutPage = () => {
  


  return (
    <PageMarginWithTitle withBorder title='О нас'>
      <section>
        <Grid className='mt-6'>
          <h2 className='text-h5-mob xl:text-h2 md:text-h3 col-span-2 md:col-span-10 md:mb-10 font-medium md:whitespace-pre-wrap'>
           {`Space Lane — современное архитектурное бюро, основанное Даниилом Хлебниковым \nв 2019 году.`}
          </h2>
          <h2 className='text-h5-mob xl:text-h2 md:text-h3 mt-4 md:mt-0 col-span-2 md:col-span-11 font-medium md:whitespace-pre-wrap'>
            {`Мы занимаемся архитектурным проектированием, стратегическим городским консалтингом \nи просветительской деятельностью.`}
          </h2>
          <div className='col-span-2 md:col-start-5 md:col-end-12 mb-30 md:mb-52 mt-10 text-body-regular-mob md:text-h5-regular'>
            <h5>
              В 2023 году мы расширили нашу деятельность, добавив новое
              направление — разработку метавселенных и интерактивных
              пространств.
            </h5>
            <h5 className='mt-4'>
              Метавселенную Ephemeral Stream мы задумали как виртуальный сад,
              наполненный символами и артефактами. Здесь можно пройти тропами
              воспоминаний, заново пережить моментыиз жизни и почувствовать
              связь с прошлым.{' '}
              <span className='mt-4 md:mt-6 xl:mt-0 block  xl:inline font-medium text-orange'>
                <a
                  href='https://spacelane.metaversearchbiennale.com'
                  target='__blank'
                  rel='noopener'
                >
                  spacelane.metaversearchbiennale.com
                </a>
              </span>
            </h5>
          </div>
        </Grid>
      </section>
      <section className='mb-30 md:mb-0'>
        <Grid className='md:border-t border-medium-grey md:pt-4'>
          <h5 className='text-h5-mob font-medium md:text-h5-regular md:font-light col-span-2 xl:col-span-1 text-grey pb-2 md:pb-0 border-b border-medium-grey md:border-none'>
            Команда
          </h5>
          <h5 className='text-h5-mob font-medium md:text-h5-regular md:font-light col-span-2 md:col-span-10 xl:col-span-11 mt-10 block md:mt-0'>
            Наша команда состоит из талантливых и опытных архитекторов,
            предлагая решения от разработки видения развития территории и
            мастер-плана до проектирования объекта любой сложности.
          </h5>
          <div className='md:col-start-5 col-span-2 md:col-span-8 mt-16 mb-30 md:mb-56'>
            <Grid cols={10} colsXL={10}>
              <Avatar
                name='Даниил Хлебников'
                title='Архитектор, основатель компании'
                url='/pics/about/01.png'
              />
              <Avatar
                name='Роман Падурарь'
                title='Архитектор'
                url='/pics/about/02.png'
              />
              <Avatar
                className='mt-10 md:mt-0'
                name='Иван Макогон'
                title='Ведущий архитектор'
                url='/pics/about/03.png'
              />
              <Avatar
                className='mt-10 md:mt-0'
                name='Иван Ваганов'
                title='Главный архитектор проектов'
                url='/pics/about/04.png'
              />
              <Avatar
                className='mt-10 md:mt-0'
                name='Анна Успенская'
                title='Ведущий архитектор'
                url='/pics/about/05.png'
              />
            </Grid>
          </div>
        </Grid>
        <Grid className='col-span-12 grid-cols-12 md:border-t border-medium-grey md:pt-4'>
          <h5 className='text-h5-mob font-medium md:text-h5 md:font-light col-span-2 xl:col-span-1 text-grey pb-2 md:pb-0 border-b border-medium-grey md:border-none'>
            Клиенты
          </h5>
          <h5 className='text-h5-mob md:text-h5 font-medium md:font-light col-span-2 md:col-span-10 xl:col-span-11 mt-10 md:mt-0 block'>
            Мы активно взаимодействуем с различными партнерами, используя наши
            знания, навыки и опыт для обеспечения разнообразных потребностей
            наших клиентов.
          </h5>
          <div className='text-body-regular-mob md:text-h6 xl:text-h5 font-light md:col-start-2 mt-20 col-span-2 md:col-span-11 flex flex-col md:flex-row space-y-4 md:space-y-0'>
            <h5>
              <span className=' text-orange mr-4 md:hidden'>/</span>
              ПАО «Рублево-Архангельское»
            </h5>
            <h5 className='hidden md:block text-orange mr-16 ml-11'>/</h5>
            <h5>
              <span className=' text-orange mr-4 md:hidden'>/</span>
              ПАО Сбербанк
            </h5>
            <h5 className='hidden md:block text-orange mx-10'>/</h5>
            <h5>
              <span className=' text-orange mr-4 md:hidden'>/</span>
              Группа Мета
            </h5>
            <h5 className='hidden md:block text-orange mx-10'>/</h5>
            <h5>
              <span className=' text-orange mr-4 md:hidden'>/</span>
              Флакон Про
            </h5>
            <h5 className='hidden md:block text-orange mx-10'>/</h5>
            <h5>
              <span className=' text-orange mr-4 md:hidden'>/</span>
              ТД Возрождение
            </h5>
          </div>
        </Grid>
      </section>
    </PageMarginWithTitle>
  );
};

export default AboutPage;
