import React from "react"

// import Footer from "../Footer/Footer"

import { createGlobalStyle } from "styled-components"
import stylesVariables from "../../sharedStyles"

const GlobalStyle = createGlobalStyle`
:root {
    headingFont: "Inconsolata", monospace;
  --bodyFont: "Montserrat", sans-serif;
  --borderRadius: 5px;
/* --textColor: var(--mainColor); */
}

body {
  font-family: 'Inconsolata ', monospace;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  font-size: 20px;
  /* color: ${stylesVariables.colors.colorTitle} */
}

*::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background: ${stylesVariables.colors.grey};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${stylesVariables.colors.primary30};
    border-radius: 20px;
    border: 3px solid #37338c;
  }

  @media (max-width: 700px) {
    -webkit-flex-direction: column;
    flex-direction: column;
  }

`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>{children}</div>
    </>
  )
}

export default Layout
