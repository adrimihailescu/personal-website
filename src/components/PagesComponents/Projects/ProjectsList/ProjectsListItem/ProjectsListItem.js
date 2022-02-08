import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card } from "./ProjectsListItem.style"

const ProjectsListItem = ({ title, image, tools, links: { Github, Live } }) => {
  const pathToImage = getImage(image)

  return (
    <Card>
      <h3>{title}</h3>

      <GatsbyImage image={pathToImage} alt={title} />

      <p>Tools: {tools.join("|")} </p>
      <ul>
        <li>
          <a href={Github} target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href={Live} target="_blank" rel="noreferrer">
            Live
          </a>
        </li>
      </ul>
    </Card>
  )
}

export default ProjectsListItem
