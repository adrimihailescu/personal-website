import React from "react"
import { getImage } from "gatsby-plugin-image"
import { Card, CustomGatsbyImage } from "./ProjectsListItem.style"

const ProjectsListItem = ({ title, image, tools, links: { Github, Live } }) => {
  const pathToImage = getImage(image)

  return (
    <Card>
      <h4>{title}</h4>

      <CustomGatsbyImage image={pathToImage} alt={title} />
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
