import React from "react"
import { Transition } from "react-transition-group"

import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  SectionPanelTitle,
  SectionPanelSubtitle,
  SectionContent,
} from "../../../sharedStyles"
import { DivPanelAbout } from "./About.style"

const AboutQuery = graphql`
  {
    allContentfulAboutPage {
      nodes {
        title
        subtitle
        id
        content {
          raw
        }
      }
    }
  }
`

//add styles for the DivPanel

const AboutMe = ({ isTextVertical, animateIn, animateText }) => {
  const data = useStaticQuery(AboutQuery)

  const { title, subtitle, content } = data.allContentfulAboutPage.nodes[0]

  return (
    <>
      <Transition in={animateText} timeout={300}>
        {state => (
          <SectionPanelTitle isTextVertical={isTextVertical} state={state}>
            {title}
          </SectionPanelTitle>
        )}
      </Transition>
      <Transition in={animateIn} timeout={500}>
        {state => (
          <SectionContent state={state}>
            <SectionPanelTitle isTextVertical={false}>
              {title}
            </SectionPanelTitle>
            <SectionPanelSubtitle>{subtitle}</SectionPanelSubtitle>
            <DivPanelAbout>
              {documentToReactComponents(JSON.parse(content.raw))}
            </DivPanelAbout>
          </SectionContent>
        )}
      </Transition>
    </>
  )
}

export default AboutMe
