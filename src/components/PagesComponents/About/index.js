import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { SectionPanelTitle, SectionPanelSubtitle } from "../../../sharedStyles"
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

const AboutMe = ({ isTextVertical }) => {
  const data = useStaticQuery(AboutQuery)

  const { title, subtitle, content } = data.allContentfulAboutPage.nodes[0]

  return (
    <div>
      <SectionPanelTitle isTextVertical={isTextVertical}>
        {title}
      </SectionPanelTitle>
      <SectionPanelSubtitle>{subtitle}</SectionPanelSubtitle>
      <DivPanelAbout>
        {documentToReactComponents(JSON.parse(content.raw))}
      </DivPanelAbout>
    </div>
  )
}

export default AboutMe
