import styled, { css } from "styled-components"
import stylesVariables from "../../../../sharedStyles"

export const Cards = styled.ul`
  justify-content: center;
  padding: 10px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`
