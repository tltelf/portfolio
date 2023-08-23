'use client'

import { projectsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './SectionHeading'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading>My project</SectionHeading>
      {
        projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))
      }
    </section>
  )
}
