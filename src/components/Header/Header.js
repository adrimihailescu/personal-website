import React, { useContext } from "react"
import { Transition } from "react-transition-group"
import { PageState } from "../../context/State"

import StylesVariables from "../../sharedStyles/index"
import { HeaderWrapper, BackButton } from "./Header.style"

const Header = ({ location }) => {
  const [activePanel, setActivePanel] = useContext(PageState)
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  const isActive = url === "/" && activePanel

  return (
    <HeaderWrapper>
      <h1>Adriana Mihailescu</h1>
      <span className="developer">Frontend Developer</span>
      <Transition
        in={isActive}
        timeout={StylesVariables.animationTime.headerButton}
      >
        {buttonState => (
          <BackButton
            onClick={() => setActivePanel(undefined)}
            state={buttonState}
          >
            Go back
          </BackButton>
        )}
      </Transition>
    </HeaderWrapper>
  )
}

export default Header
