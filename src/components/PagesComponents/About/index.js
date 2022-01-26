import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  SectionPanelTitle,
  SectionPanelSubtitle,
  DivPanel,
} from "../../../sharedStyles"

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

const AboutMe = () => {
  const data = useStaticQuery(AboutQuery)

  const { title, subtitle, content } = data.allContentfulAboutPage.nodes[0]

  return (
    <div>
      <SectionPanelTitle>{title}</SectionPanelTitle>
      <SectionPanelSubtitle>{subtitle}</SectionPanelSubtitle>
      <DivPanel>{documentToReactComponents(JSON.parse(content.raw))}</DivPanel>
    </div>
  )
}

export default AboutMe
