import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsList = ({ projects = [] }) => {
  return (
    <section>
      {projects.map(project => {
        const {
          id,
          title,
          image,
          content: { tools },
        } = project
        const pathToImage = getImage(image)

        return (
          <div key={id}>
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
          </div>
        )
      })}
    </section>
  )
}

export default ProjectsList
