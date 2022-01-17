import React from "react"
import { Link } from "gatsby"
import { Wrapper, ButtonMain } from "./style"
import Footer from "../Footer/Footer"

const Intro = () => {
  return (
    <Wrapper>
      <h1>Adriana Mihailescu</h1>

      <Link to="/about-page">
        <ButtonMain>Enter</ButtonMain>
      </Link>
      <Footer />
    </Wrapper>
  )
}

export default Intro
