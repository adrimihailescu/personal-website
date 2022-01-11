import React from "react"
import AboutMe from "../About/About"
import Footer from "../Footer/Footer"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
