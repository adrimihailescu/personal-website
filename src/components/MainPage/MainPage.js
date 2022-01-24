import React, { useState } from "react"
import About from "../PagesComponents/About"
import Contact from "../PagesComponents/Contact"
import Projects from "../PagesComponents/Projects"
import NotFound from "../../pages/404"
import { MainWrapper, SectionPanel, SectionPanelTitle } from "./MainPage.style"

const sectionPages = ["about", "projects", "contact"]

const MainPage = () => {
  const [activePanel, setActivePanel] = useState(undefined)

  const handleClick = id => {
    if (activePanel === id) {
      setActivePanel(undefined)
    } else {
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
        return (
          <SectionPanel
            key={`key-${sectionPage}`}
            isActive={activePanel === sectionPage}
            onClick={() => handleClick(sectionPage)}
          >
            <RenderedElement />

            {/* <SectionPanelTitle
              isTextVertical={
                activePanel !== undefined && activePanel !== pageItem.id
              }
            >
              {pageItem.title}
            </SectionPanelTitle> */}
          </SectionPanel>
        )
      })}
    </MainWrapper>
  )
}

export default MainPage
