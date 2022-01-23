import React, { useState } from "react"

import { MainWrapper, SectionPanel, SectionPanelTitle } from "./MainPage.style"
// import About from "../components/About/About"
// import Contact from "../components/Contact/Contact"
const pageData = {
  home: {
    id: "home",
    title: "home test",
  },
  about: {
    id: "about",
    title: "about test",
  },
  contact: {
    id: "contact",
    title: "contact test",
  },
}

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
      {Object.keys(pageData).map(page => {
        const pageItem = pageData[page]
        // let RenderedElement
        // switch (pageItem.id) {
        //   case "about":
        //     RenderedElement = About
        //     break
        //   default:
        //     RenderedElement = Contact
        //     break
        // }
        return (
          <SectionPanel
            key={pageItem.id}
            isActive={activePanel === pageItem.id}
            onClick={() => handleClick(pageItem.id)}
          >
            {/* <RenderedElement /> */}

            <SectionPanelTitle
              isTextVertical={
                activePanel !== undefined && activePanel !== pageItem.id
              }
            >
              {pageItem.title}
            </SectionPanelTitle>
          </SectionPanel>
        )
      })}
    </MainWrapper>
  )
}

export default MainPage
