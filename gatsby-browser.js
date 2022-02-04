import React from "react"
import { StateProvider } from "./src/context/State"

export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
)
