import React from "react"

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
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <div>{documentToReactComponents(JSON.parse(content.raw))}</div>
    </div>
  )
}

export default AboutMe
