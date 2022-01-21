import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ProWrapper } from "./style"

const ProjectsList = ({ projects = [] }) => {
  return (
    <div>
      {projects.map(project => {
        const {
          id,
          title,
          image,
          content: { tools, description },
        } = project
        const pathToImage = getImage(image)

        return (
          <ProWrapper key={id}>
            <a
              href="https://github.com/adrimihailescu?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>{title}</h5>
            </a>
            <GatsbyImage image={pathToImage} alt={title} />

            <p>Tools: {tools} </p>
            <p> Description: {description}</p>
          </ProWrapper>
        )
      })}
    </div>
  )
}

export default ProjectsList
