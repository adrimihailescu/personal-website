import React from "react"
import { ProjectsWrapper, ContentProWrapper, Title } from "./style"
import ProjectsList from "../AllProjectsList/ProjectsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulProjects(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        content {
          tools
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProjects.nodes

  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <h3>Here are some of my projects</h3>
      <ContentProWrapper>
        <ProjectsList projects={projects} />
      </ContentProWrapper>
    </ProjectsWrapper>
  )
}

export default Projects
