import React from "react"

// import Footer from "../Footer/Footer"

import { LayoutWrapper } from "./Layout.style"
import { createGlobalStyle } from "styled-components"
import stylesVars from "../../sharedStyles"

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Inconsolata ', monospace;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: ${stylesVars.colors.colorTitle}
}
h1{
 
  font-size: 3em;
}
  :root{

    --headingFont: "Inconsolata", monospace;
    --bodyFont: "Montserrat", sans-serif;
    --borderRadius: 5px;
    --textColor: var(--primary100);
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  )
}

export default Layout
