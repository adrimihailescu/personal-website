import React from "react"
import Layout from "../components/Layout/Layout"
import AboutMe from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

const AboutPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default AboutPage
