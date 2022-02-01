import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Transition } from "react-transition-group"

import {
  SectionPanelTitle,
  SectionPanelSubtitle,
  SectionContent,
} from "../../../sharedStyles"
import { DivPanelAbout } from "./About.style"

//add styles for the DivPanel

const AboutMe = ({ isTextVertical, animateIn, animateText, data }) => {
  const { title, subtitle, content } = data

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
