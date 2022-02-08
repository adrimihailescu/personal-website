import React from "react"
import ProjectsListItem from "./ProjectsListItem/ProjectsListItem"
import { Cards } from "./ProjectsList.style.js"

const ProjectsList = ({ projects = [] }) => {
  return (
    <Cards>
      {projects.map(project => {
        const {
          id,
          title,
          image,
          content: { tools, links },
        } = project

        return (
          <ProjectsListItem
            key={id}
            title={title}
            image={image}
            tools={tools}
            links={links}
          />
        )
      })}
    </Cards>
  )
}

export default ProjectsList
