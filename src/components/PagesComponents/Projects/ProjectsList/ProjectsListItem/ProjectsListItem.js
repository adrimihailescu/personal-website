import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card } from "./ProjectsListItem.style"

const ProjectsListItem = ({ title, image, tools }) => {
  const pathToImage = getImage(image)

  return (
    <Card>
      <h5>{title}</h5>

      <GatsbyImage image={pathToImage} alt={title} />

      <p>Tools: {tools.join("|")} </p>
    </Card>
  )
}

export default ProjectsListItem
