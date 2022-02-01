import React from "react"
import { Transition } from "react-transition-group"
import ProjectsList from "./ProjectsList/ProjectsList"
import { graphql, useStaticQuery } from "gatsby"
import {
  SectionPanelTitle,
  SectionPanelSubtitle,
  SectionContent,
} from "../../../sharedStyles"

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

const Projects = ({ isTextVertical, animateIn, animateText }) => {
  const data = useStaticQuery(query)

  const projects = data.allContentfulProjectsPage.edges[0].node

  return (
    <>
      {/* // <div style={{ opacity: animateIn ? "1" : "0" }}> */}
      <Transition in={animateText} timeout={300}>
        {state => (
          <SectionPanelTitle isTextVertical={isTextVertical} state={state}>
            {projects.title}
          </SectionPanelTitle>
        )}
      </Transition>
      <Transition in={animateIn} timeout={500}>
        {state => (
          <SectionContent state={state}>
            <SectionPanelTitle isTextVertical={false}>
              {projects.title}
            </SectionPanelTitle>
            <SectionPanelSubtitle>{projects.subtitle}</SectionPanelSubtitle>
            <ProjectsList projects={projects.projects} />
          </SectionContent>
        )}
      </Transition>
    </>
    //  {/* </div> */}
  )
}

export default Projects
