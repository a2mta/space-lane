import PageWithTitleWrap from '@/components/PAgeWithTitleWrap';
import Image from 'next/image';
import React, { FC } from 'react';

const Avatar: FC<{ url: string; name: string; title: string }> = ({
  name,
  title,
  url,
}) => (
  <div className='flex flex-col'>
    <Image
      className='grayscale'
      src={url}
      width={200}
      height={260}
      alt={name + ' photo'}
    />
    <span className='text-lg mt-4'>{name}</span>
    <span className='text-xs mt-2'>{title}</span>
  </div>
);

const AboutPage = () => {
  return (
    <PageWithTitleWrap title='О нас'>
      <div className='grid grid-cols-12 gap-x-10  mt-6'>
        <h2 className='text-6xl col-span-12 mb-10'>
          Space Lane — современное архитектурное бюро, основанное Даниилом
          Хлебниковым в 2019 году.{' '}
        </h2>
        <h2 className='text-6xl col-start-2 col-end-12'>
          Мы занимаемся архитектурным проектированием, стратегическим городским
          консалтингом и просветительской деятельностью.
        </h2>
        <div className='col-start-5 col-end-12 mb-52'>
          <h5>
            В 2023 году мы расширили нашу деятельность, добавив новое
            направление — разработку метавселенных и интерактивных пространств.
          </h5>
          <h5 className='mt-4'>
            Метавселенная представлена в виде виртуального сада, наполненного
            символами и артефактами. Здесь можно пройти тропами воспоминаний,
            пережить моментыиз жизни и почувствовать связь с прошлым.
          </h5>
        </div>
        <div className='grid col-span-12 grid-cols-12 border-t border-medium-grey pt-4'>
          <h5 className='text-2xl col-span-1 text-grey'>Команда</h5>
          <h5 className='text-2xl col-span-11'>
            Наша команда состоит из талантливых и опытных архитекторов,
            предлагая решения от разработки видения развития территории
            и мастер-плана до проектирования объекта любой сложности.
          </h5>
          <div className='col-start-5 col-span-8 mt-16 gap-x-10 flex mb-56'>
            <Avatar
              name='Даниил Хлебников'
              title='Архитектор, основатель компании'
              url='/pics/about/image 44.png'
            />
            <Avatar
              name='Роман Падурарь'
              title='Архитектор'
              url='/pics/about/image 45.png'
            />
            <Avatar
              name='Иван Макогон'
              title='Ведущий архитектор'
              url='/pics/about/image 41.png'
            />
            <Avatar
              name='Иван Ваганов'
              title='Главный архитектор проектов'
              url='/pics/about/image 42.png'
            />
            <Avatar
              name='Анна Успенская'
              title='Ведущий архитектор'
              url='/pics/about/image 43.png'
            />
          </div>
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
      </div>
    </PageWithTitleWrap>
  );
};

export default AboutPage;
