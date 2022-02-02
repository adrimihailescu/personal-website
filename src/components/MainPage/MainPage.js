import React, { useState } from "react"
import {
  SwitchTransition,
  CSSTransition,
  Transition,
} from "react-transition-group"
import GetWebsiteData from "./query"

import About from "../PagesComponents/About"
import Contact from "../PagesComponents/Contact"
import Projects from "../PagesComponents/Projects"
import NotFound from "../../pages/404"

import { MainWrapper, SectionPanel } from "./MainPage.style"
import StylesVariables, {
  SectionPanelTitle,
  SectionMenuStyle,
} from "../../sharedStyles"

const sectionPages = ["about", "projects", "contact"]

const MainPage = () => {
  const data = GetWebsiteData()
  const [activePanel, setActivePanel] = useState(undefined)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = id => {
    if (activePanel !== id) {
      setActivePanel(id)
      setIsAnimating(true)
    }
  }

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isAnimating}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, setIsAnimating(false))
        }
        timeout={StylesVariables.animationTime.mainPage}
        classNames="transition-state"
      >
        {mainWrapperState => (
          <MainWrapper>
            {sectionPages.map(sectionPage => {
              let RenderedElement, elementData, sectionTitle
              switch (sectionPage) {
                case "about":
                  RenderedElement = About
                  elementData = data.allContentfulAboutPage.nodes[0]
                  sectionTitle = elementData.title
                  break
                case "contact":
                  RenderedElement = Contact
                  elementData = {
                    page: data.allContentfulContactPage.nodes[0],
                    form: data.allHubspotForm.nodes[0],
                  }
                  sectionTitle = elementData.page.title
                  break
                case "projects":
                  RenderedElement = Projects
                  elementData = data.allContentfulProjectsPage.edges[0].node
                  sectionTitle = elementData.title
                  break
                default:
                  RenderedElement = NotFound
                  break
              }

              const isActive = activePanel === sectionPage
              return (
                <SectionPanel
                  key={`key-${sectionPage}`}
                  isActive={isActive}
                  // state={state}
                  className={`${sectionPage}-section`}
                  onClick={() => handleClick(sectionPage)}
                >
                  <Transition
                    in={isActive}
                    timeout={StylesVariables.animationTime.menuTitles}
                  >
                    {titleState => (
                      <SectionMenuStyle isHidden={isActive} state={titleState}>
                        <SectionPanelTitle isTextVertical={true}>
                          {sectionTitle}
                        </SectionPanelTitle>
                      </SectionMenuStyle>
                    )}
                  </Transition>
                  <RenderedElement
                    data={elementData}
                    isTextVertical={activePanel}
                    animateIn={mainWrapperState === "entered" && isActive}
                  />
                </SectionPanel>
              )
            })}
          </MainWrapper>
        )}
      </CSSTransition>
    </SwitchTransition>
  )
}

export default MainPage
