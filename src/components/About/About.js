import React from "react"
import { AboutWrapper, ContentWrapper, Title } from "./About.style"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
  console.log(data)
  const { title, subtitle, id, content } = data.allContentfulAboutPage.nodes[0]

  return (
    <AboutWrapper>
      <Title>{title}</Title>
      <h3>{subtitle}</h3>
      <ContentWrapper>
        {documentToReactComponents(JSON.parse(content.raw))}
      </ContentWrapper>
    </AboutWrapper>
  )
}

export default AboutMe
