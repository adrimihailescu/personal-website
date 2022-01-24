import React from "react"

const Footer = () => {
  return (
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
        .Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
