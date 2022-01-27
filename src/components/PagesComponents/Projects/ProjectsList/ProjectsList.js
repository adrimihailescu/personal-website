import React from "react"
import ProjectsListItem from "./ProjectsListItem/ProjectsListItem"
import { Cards } from "../../../../sharedStyles"

const ProjectsList = ({ projects = [] }) => {
  return (
    <Cards>
      {projects.map(project => {
        const {
          id,
          title,
          image,
          content: { tools },
        } = project

        return (
          <ProjectsListItem
            key={id}
            title={title}
            image={image}
            tools={tools}
          />
        )
      })}
    </Cards>
  )
}

export default ProjectsList
