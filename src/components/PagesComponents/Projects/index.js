import React from "react"

import ProjectsList from "./ProjectsList/ProjectsList"
import { graphql, useStaticQuery } from "gatsby"
import { SectionPanelTitle, SectionPanelSubtitle } from "../../../sharedStyles"

const query = graphql`
  {
    allContentfulProjectsPage {
      edges {
        node {
          subtitle
          title
          projects {
            id
            image {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: DOMINANT_COLOR
                jpegProgressive: true
              )
            }
            title
            content {
              description
              tools
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)

  const projects = data.allContentfulProjectsPage.edges[0].node

  return (
    <div>
      <SectionPanelTitle>{projects.title}</SectionPanelTitle>
      <SectionPanelSubtitle>{projects.subtitle}</SectionPanelSubtitle>
      <ProjectsList projects={projects.projects} />
    </div>
  )
}

export default Projects
