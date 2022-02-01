import React, { useState } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import GetWebsiteData from "./query"

import About from "../PagesComponents/About"
import Contact from "../PagesComponents/Contact"
import Projects from "../PagesComponents/Projects"
import NotFound from "../../pages/404"

import { MainWrapper, SectionPanel } from "./MainPage.style"

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
        classNames="transition-state"
      >
        {state => (
          <MainWrapper>
            {console.log("-------")}
            {console.log(state)}
            {sectionPages.map(sectionPage => {
              let RenderedElement, elementData
              switch (sectionPage) {
                case "about":
                  RenderedElement = About
                  elementData = data.allContentfulAboutPage.nodes[0]
                  break
                case "contact":
                  RenderedElement = Contact
                  elementData = {
                    page: data.allContentfulContactPage.nodes[0],
                    form: data.allHubspotForm.nodes[0],
                  }
                  break
                case "projects":
                  RenderedElement = Projects
                  elementData = data.allContentfulProjectsPage.edges[0].node
                  break
                default:
                  RenderedElement = NotFound
                  break
              }

              const isActive = activePanel === sectionPage
              // const isTextVertical = activePanel !== undefined && !isActive
              return (
                <SectionPanel
                  key={`key-${sectionPage}`}
                  isActive={isActive}
                  // state={state}
                  className={`${sectionPage}-section`}
                  onClick={() => handleClick(sectionPage)}
                >
                  <RenderedElement
                    data={elementData}
                    className="section-item"
                    isTextVertical={activePanel}
                    animateText={state === "entered" && !isActive}
                    animateIn={state === "entered" && isActive}
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
