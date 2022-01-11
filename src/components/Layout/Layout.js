import React from "react"
import AboutMe from "../About/About"
// import Footer from "../Footer/Footer"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import { LayoutWrapper } from "./style"

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        {" "}
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
