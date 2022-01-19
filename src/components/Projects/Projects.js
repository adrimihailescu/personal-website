import React from "react"
import { ProjectsWrapper, ContentProWrapper, Title } from "./style"
import ProjectsList from "../AllProjectsList/ProjectsList"
import { graphql, useStaticQuery } from "gatsby"

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
  console.log(data)
  const projects = data.allContentfulProjectsPage.edges[0].node

  return (
    <ProjectsWrapper>
      <Title>{projects.title}</Title>
      <h3>{projects.subtitle}</h3>
      <ContentProWrapper>
        <ProjectsList projects={projects.projects} />
      </ContentProWrapper>
    </ProjectsWrapper>
  )
}

export default Projects
