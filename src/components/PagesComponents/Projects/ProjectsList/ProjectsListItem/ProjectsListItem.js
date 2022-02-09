import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card } from "./ProjectsListItem.style"

const ProjectsListItem = ({ title, image, tools, links: { Github, Live } }) => {
  const pathToImage = getImage(image)

  return (
    <Card>
      <h3>{title}</h3>

      <GatsbyImage image={pathToImage} alt={title} />
      <span className="tools"> {tools.join("|")} </span>
      {(Github || Live) && (
        <ul>
          {Github && (
            <li>
              <a href={Github} target="_blank" rel="noreferrer">
                Github repo
              </a>
            </li>
          )}
          {Live && (
            <li>
              <a href={Live} target="_blank" rel="noreferrer">
                View Live
              </a>
            </li>
          )}
        </ul>
      )}
    </Card>
  )
}

export default ProjectsListItem
