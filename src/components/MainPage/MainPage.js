import React, { useState } from "react"
import About from "../PagesComponents/About"
import Contact from "../PagesComponents/Contact"
import Projects from "../PagesComponents/Projects"
import NotFound from "../../pages/404"
import { MainWrapper, SectionPanel } from "./MainPage.style"

const sectionPages = ["about", "projects", "contact"]

const MainPage = () => {
  const [activePanel, setActivePanel] = useState(undefined)

  const handleClick = id => {
    if (activePanel !== id) {
      setActivePanel(id)
    }
  }

  return (
    <MainWrapper>
      {sectionPages.map(sectionPage => {
        let RenderedElement
        switch (sectionPage) {
          case "about":
            RenderedElement = About
            break
          case "contact":
            RenderedElement = Contact
            break
          case "projects":
            RenderedElement = Projects
            break
          default:
            RenderedElement = NotFound
            break
        }

        const isActive = activePanel === sectionPage
        const isTextVertical = activePanel !== undefined && !isActive
        return (
          <SectionPanel
            key={`key-${sectionPage}`}
            isActive={isActive}
            onClick={() => handleClick(sectionPage)}
          >
            <RenderedElement
              className="section-item"
              isTextVertical={isTextVertical}
            />
          </SectionPanel>
        )
      })}
    </MainWrapper>
  )
}

export default MainPage
