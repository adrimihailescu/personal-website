import React, { useState } from "react"
import About from "../PagesComponents/About"
import Contact from "../PagesComponents/Contact"
import Projects from "../PagesComponents/Projects"
import NotFound from "../../pages/404"
import { MainWrapper, SectionPanel } from "./MainPage.style"
import { SwitchTransition, CSSTransition } from "react-transition-group"

const sectionPages = ["about", "projects", "contact"]

const MainPage = () => {
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
                    animateText={state === "entered" && !isActive}
                    animateIn={state === "entered" && isActive}
                    className="section-item"
                    isTextVertical={activePanel}
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
