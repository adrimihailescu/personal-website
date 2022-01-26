import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsListItem = ({ title, image, tools }) => {
  const pathToImage = getImage(image)

  return (
    <li>
      <a
        href="https://github.com/adrimihailescu?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>{title}</h5>
      </a>
      <GatsbyImage image={pathToImage} alt={title} />
      <p>Tools: {tools} </p>
      {/* <p> Description: {description}</p> */}
    </li>
  )
}

export default ProjectsListItem
