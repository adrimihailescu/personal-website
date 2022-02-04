import React, { useContext } from "react"
import { PageState } from "../../context/State"
import { HeaderWrapper, BackButton } from "./Header.style"

const Header = () => {
  const [activePanel, setActivePanel] = useContext(PageState)

  return (
    <HeaderWrapper>
      <h1>Adriana Mihailescu</h1>
      <BackButton onClick={() => setActivePanel(undefined)}>Go back</BackButton>
    </HeaderWrapper>
  )
}

export default Header
