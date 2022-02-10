import React from "react"
import {
  NotFoundWrapper,
  NotFoundComponent,
  NotFoundContent,
  NotFoundButton,
} from "./PageNotFound.style"

const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundComponent>
        <NotFoundContent>
          <h1>404</h1>
          <h2>Page not found</h2>
        </NotFoundContent>
        <NotFoundButton href="/">Homepage</NotFoundButton>
      </NotFoundComponent>
    </NotFoundWrapper>
  )
}

export default PageNotFound
