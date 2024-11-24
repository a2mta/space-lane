import Grid from '@/components/Grid';
import PageMarginWithTitle from '@/components/PageMarginWithTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/utils';
import React from 'react';



const ProjectsPage = () => {
  return (
    <PageMarginWithTitle withBorder title='Проекты'>
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
