import React from "react"
import AboutMe from "../About/About"
// import Footer from "../Footer/Footer"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import { LayoutWrapper } from "./style"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Inconsolata ', Montserrat;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  font-size: 20px;
}
h1{
 
  font-size: 3em;
}
  :root{
    --grey-1: #474747;
    --grey-1000: #333538;
    --primary-99: #ADA7FF;
    --primary-100: #c1beff;
    --primary-500: #645cff;
    --primary-300: #938dff;
    --primary-800: #37338c;
    --headingFont: "Inconsolata", monospace;
    --bodyFont: "Montserrat", sans-serif;
    --borderRadius: 5px;
    --textColor: var(--primary-100);
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        {children}
        <AboutMe />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </LayoutWrapper>
    </>
  )
}

export default Layout
