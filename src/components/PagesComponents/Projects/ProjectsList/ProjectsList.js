import React from "react"
import ProjectsListItem from "./ProjectsListItem/ProjectsListItem"

const ProjectsList = ({ projects = [] }) => {
  return (
    <ul>
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
    </ul>
  )
}

export default ProjectsList
