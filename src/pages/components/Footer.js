import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <span>AdrianaMihailescu</span>.Built
        with <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
