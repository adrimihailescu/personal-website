import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { SectionPanelTitle, SectionPanelSubtitle } from "../../../sharedStyles"
import { AboutWrapper } from "./About.style"

const AboutMe = ({ isTextVertical, animateIn, data }) => {
  const { title, subtitle, content } = data

  return (
    <>
      <SectionPanelTitle isTextVertical={false}>{title}</SectionPanelTitle>
      <SectionPanelSubtitle>{subtitle}</SectionPanelSubtitle>
      <AboutWrapper>
        {documentToReactComponents(JSON.parse(content.raw))}
      </AboutWrapper>
    </>
  )
}

export default AboutMe
