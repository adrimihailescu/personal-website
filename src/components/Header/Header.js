import React from "react"
import { HeaderWrapper, BackButton } from "./Header.style"

const Header = (handleClick, sectionPage) => {
  return (
    <HeaderWrapper>
      <h1>Adriana Mihailescu</h1>
      <BackButton
      //   onClick={() => handleClick(sectionPage === undefined)}
      >
        Go back
      </BackButton>
    </HeaderWrapper>
  )
}

export default Header
