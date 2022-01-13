import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsList = ({ projects = [] }) => {
  return (
    <div>
      {projects.map(project => {
        const { id, title, image, tools, description } = project
        const pathToImage = getImage(image)
        return (
          <a
            href="https://github.com/adrimihailescu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            key={id}
          >
            <GatsbyImage image={pathToImage} alt={title} />
            <h5>{title}</h5>
            <p>
              Tools: {tools} | Description: {description}
            </p>
          </a>
        )
      })}
    </div>
  )
}

export default ProjectsList
