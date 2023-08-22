import { projectsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './SectionHeading'
import Project from './Project'

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-28'>
      <SectionHeading>My project</SectionHeading>
      {
        projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))
      }
    </section>
  )
}
