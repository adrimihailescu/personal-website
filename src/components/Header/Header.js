import React, { useContext } from "react"
import { PageState } from "../../context/State"
import { HeaderWrapper, BackButton } from "./Header.style"

const Header = ({ location }) => {
  const [activePanel, setActivePanel] = useContext(PageState)
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <HeaderWrapper>
      <h1>Adriana Mihailescu</h1>
      <span className="developer">Frontend Developer</span>
      {url === "/" && activePanel && (
        <BackButton onClick={() => setActivePanel(undefined)}>
          Go back
        </BackButton>
      )}
    </HeaderWrapper>
  )
}

export default Header
