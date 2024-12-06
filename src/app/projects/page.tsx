import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/utils';
import Link from 'next/link';
import React from 'react';

const ProjectsPage = () => {
  return (
    <PageMarginWithTitle
      withBorder
      title='Проекты'
      subTitle={
        <>
          <Link href='/SpaceLanePortfolio.pdf' target='__blank'>
            <h5 className='hidden md:inline-block text-h6 xl:text-h5 font-medium text-grey cursor-pointer'>
              Скачать порфтолио
            </h5>
            <span className='md:hidden text-body-regular font-medium text-grey'>
              Портфолио
            </span>
          </Link>
        </>
      }
    >
      <Grid className='mt-30 gap-y-10'>
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
      </Grid>
    </PageMarginWithTitle>
  );
};

export default ProjectsPage;
