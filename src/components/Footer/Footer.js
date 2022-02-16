import React from "react"
import styled from "styled-components"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Footer = styled.footer`
  a {
    margin-top: 100px;
    font-size: 30px;
    margin-bottom: 50px;
  }
`

const FooterComponent = () => {
  return (
    <Footer style={{ marginTop: "100px" }}>
      <a
        href="https://github.com/adrimihailescu"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/adriana-mihailescu-25010480/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </Footer>
  )
}

export default FooterComponent
