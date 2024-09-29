import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import Image from 'next/image';
import React, { FC } from 'react';

const Avatar: FC<{ url: string; name: string; title: string }> = ({
  name,
  title,
  url,
}) => (
  <div className='col-span-2 flex flex-col'>
    <Image
      className='grayscale'
      src={url}
      width={198}
      height={259}
      alt={name + ' photo'}
    />
    <div className='flex flex-col'>
      <span className='text-body font-medium mt-4'>{name}</span>
      <span className='text-body-caption font-medium mt-2'>{title}</span>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <PageMarginWithTitle withBorder title='О нас'>
      <section>
        <Grid className='mt-6'>
          <h2 className='text-h2 col-span-10 mb-10 font-medium'>
            Space Lane — современное архитектурное бюро, основанное Даниилом
            Хлебниковым в 2019 году.
          </h2>
          <h2 className='text-h2  mt-10 col-start-2 col-span-11 font-medium'>
            Мы занимаемся архитектурным проектированием, стратегическим
            городским консалтингом и просветительской деятельностью.
          </h2>
          <div className='col-start-5 col-end-12 mb-52 mt-10 text-h5-regular'>
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
              <span className='font-medium text-orange'>
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
      <section>
        <Grid className='border-t border-medium-grey pt-4 mt-50'>
          <h5 className='text-h5-regular col-span-1 text-grey'>Команда</h5>
          <h5 className='text-h5-regular col-span-11'>
            Наша команда состоит из талантливых и опытных архитекторов,
            предлагая решения от разработки видения развития территории и
            мастер-плана до проектирования объекта любой сложности.
          </h5>
          <div className='col-start-5 col-span-8 mt-16 mb-56'>
            <Grid cols={10} className='gap-x-10'>
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
                name='Иван Макогон'
                title='Ведущий архитектор'
                url='/pics/about/03.png'
              />
              <Avatar
                name='Иван Ваганов'
                title='Главный архитектор проектов'
                url='/pics/about/04.png'
              />
              <Avatar
                name='Анна Успенская'
                title='Ведущий архитектор'
                url='/pics/about/05.png'
              />
            </Grid>
          </div>

          <div className='grid col-span-12 grid-cols-12 border-t border-medium-grey pt-4'>
            <h5 className='text-2xl col-span-1 text-grey'>Клиенты</h5>
            <h5 className='text-2xl col-span-11'>
              Мы активно взаимодействуем с различными партнерами, используя наши
              знания, навыки и опыт для обеспечения разнообразных потребностей
              наших клиентов.
            </h5>
            <div className='col-start-2 mt-20 col-span-11 flex text-2xl font-light'>
              <h5>ПАО «Рублево-Архангельское»</h5>
              <h5 className='text-orange mr-16 ml-11'>/</h5>
              <h5>ПАО Сбербанк</h5>
              <h5 className='text-orange mx-10'>/</h5>
              <h5>Группа Мета</h5>
              <h5 className='text-orange mx-10'>/</h5>
              <h5>Флакон Про</h5>
              <h5 className='text-orange mx-10'>/</h5>
              <h5>ТД Возрождение</h5>
            </div>
          </div>
        </Grid>
      </section>
    </PageMarginWithTitle>
  );
};

export default AboutPage;
