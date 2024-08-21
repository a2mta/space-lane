import PageWithTitleWrap from '@/components/PAgeWithTitleWrap';
import ProjectCard from '@/components/ProjectCard';
import React from 'react';

const projects = [
  {
    title: 'Рублево — Архангельское',
    subTitle: 'Благоустройство, авторский надзор',
  },
  {
    title: 'Коттеджный поселок «Новосельцево»',
    subTitle: 'Исследование, благоустройство',
  },
  {
    title: 'Махтумкули Фраги',
    subTitle: 'Исследование, благоустройство',
  },
];

const ProjectsPage = () => {
  return (
    <PageWithTitleWrap title='Проекты'>
      <div className='grid grid-cols-12 gap-x-10 mt-32'>
        {projects.map((item, index) => (
          <div key={index+item.title} className='col-span-4 relative '>
            <ProjectCard title={item.title} subTitle={item.subTitle} url='' />
          </div>
        ))}
      </div>
    </PageWithTitleWrap>
  );
};

export default ProjectsPage;
