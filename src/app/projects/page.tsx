import PageWithTitleWrap from '@/components/PageWithTitleWrap';
import ProjectCard from '@/components/ProjectCard';
import React from 'react';

const projects = [
  {
    title: 'Рублево — Архангельское',
    subTitle: 'Благоустройство, авторский надзор',
    link: 'rublevo',
    image: '/pics/projects/rublevo.png',
  },
  {
    title: 'Коттеджный поселок «Новосельцево»',
    subTitle: 'Исследование, благоустройство',
    link: 'novoseltsevo',
    image: '/pics/projects/novoseltsevo.png',
  },
  {
    title: 'Махтумкули Фраги',
    subTitle: 'Исследование, благоустройство',
    link: 'fragi',
    image: '/pics/projects/fragi.png',
  },
  {
    title: 'Коттеджный посёлок «Ели»',
    subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
    link: 'ely',
    image: '/pics/projects/ely.png',
  },
  {
    title: 'Коттеджный поселок «Максимово парк»',
    subTitle: 'Исследование, мастер-план, дизайн-код, благоустройство',
    link: 'maksimovo',
    image: '/pics/projects/maksimovo.png',
  },
  {
    title: 'ЖК Corso',
    subTitle: 'Благоустройство',
    link: 'corso',
    image: '/pics/projects/corso.png',
  },
  {
    title: 'Дарьино парк',
    subTitle: 'Благоустройство',
    link: 'darino',
    image: '/pics/projects/darino.png',
  },
  {
    title: 'Олений парк',
    subTitle: 'Исследование, мастер-план, архитектура, благоустройство',
    link: 'oleniy-park',
    image: '/pics/projects/oleniy-park.png',
  },
  {
    title: 'Савеловский кластер',
    subTitle: 'Исследование, благоустройство',
    link: 'savelovskiy',
    image: '/pics/projects/savelovskiy.png',
  },
];

const ProjectsPage = () => {
  return (
    <PageWithTitleWrap title='Проекты'>
      <div className='grid grid-cols-12 gap-x-10 mt-30 gap-y-10'>
        {projects.map((item, index) => (
          <div key={index + item.title} className='col-span-4 relative '>
            <ProjectCard
              title={item.title}
              subTitle={item.subTitle}
              link={item.link}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </PageWithTitleWrap>
  );
};

export default ProjectsPage;
