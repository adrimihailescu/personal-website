import React from "react"
import { FooterWrapper } from "./style"

const Footer = () => {
  return (
    <FooterWrapper>
      <footer>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span>
            <a
              href="https://github.com/adrimihailescu"
              target="_blank"
              rel="noreferrer"
            >
              Adriana Mihailescu
            </a>
          </span>
          .Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
      </footer>
    </FooterWrapper>
  )
}

export default Footer
