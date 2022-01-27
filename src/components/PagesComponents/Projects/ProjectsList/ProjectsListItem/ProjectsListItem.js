import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card } from "./ProjectsListItem.style"

const ProjectsListItem = ({ title, image, tools }) => {
  const pathToImage = getImage(image)

  return (
    <Card>
      <a
        href="https://github.com/adrimihailescu?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>{title}</h5>
      </a>
      <GatsbyImage image={pathToImage} alt={title} />
      <p>Tools: {tools} </p>
    </Card>
  )
}

export default ProjectsListItem
