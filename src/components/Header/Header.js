import React, { useContext } from "react"
import { PageState } from "../../context/State"
import { HeaderWrapper, BackButton, BackLink } from "./Header.style"

const Header = ({ location }) => {
  const [activePanel, setActivePanel] = useContext(PageState)
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  const button =
    url === "/" ? (
      <BackButton onClick={() => setActivePanel(undefined)}>Go back</BackButton>
    ) : (
      <BackLink to="/">Go back</BackLink>
    )

  return (
    <HeaderWrapper>
      <h1>Adriana Mihailescu</h1>

      {activePanel !== undefined && button}
    </HeaderWrapper>
  )
}

export default Header
