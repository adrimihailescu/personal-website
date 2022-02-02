import React from "react"
import { Transition } from "react-transition-group"

import ProjectsList from "./ProjectsList/ProjectsList"

import {
  SectionPanelTitle,
  SectionPanelSubtitle,
  SectionContent,
} from "../../../sharedStyles"

const Projects = ({ isTextVertical, animateIn, animateText, data }) => {
  const projects = data

  return (
    <Transition in={animateIn} timeout={500}>
      {state => (
        <SectionContent state={state}>
          <SectionPanelTitle isTextVertical={false}>
            {projects.title}
          </SectionPanelTitle>
          <SectionPanelSubtitle>{projects.subtitle}</SectionPanelSubtitle>
          <ProjectsList projects={projects.projects} />
        </SectionContent>
      )}
    </Transition>
  )
}

export default Projects
