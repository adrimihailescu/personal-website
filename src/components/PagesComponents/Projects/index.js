import React from "react"

import ProjectsList from "./ProjectsList/ProjectsList"

import { SectionPanelTitle, SectionPanelSubtitle } from "../../../sharedStyles"

const Projects = ({ isTextVertical, animateIn, data }) => {
  const projects = data

  return (
    <>
      <SectionPanelTitle isTextVertical={false}>
        {projects.title}
      </SectionPanelTitle>
      <SectionPanelSubtitle>{projects.subtitle}</SectionPanelSubtitle>
      <ProjectsList projects={projects.projects} />
    </>
  )
}

export default Projects
