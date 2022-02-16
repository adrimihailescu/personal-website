import React from "react"
import styled from "styled-components"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import stylesVariables from "../../sharedStyles"

const Footer = styled.footer`
  margin: 30px auto;

  @media (min-width: ${stylesVariables.media.tablet}) {
    margin: 60px auto;
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    margin: 150px auto;
  }

  a {
    font-size: 40px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const FooterComponent = () => {
  return (
    <Footer>
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
