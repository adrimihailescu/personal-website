import React from "react"
import Layout from "../components/Layout/Layout"
import AboutMe from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
import MainPage from "../components/MainPage/MainPage"
// import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <Layout>
      {/* <AboutMe />
    //   <Projects />
    //   <Contact /> */}
      <MainPage />
      {/* <Footer /> */}
    </Layout>
  )
}
