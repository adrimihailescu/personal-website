import styled from "styled-components"
import stylesVariables from "../../../../sharedStyles"

export const Cards = styled.ul`
  justify-content: center;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);

  @media (min-width: ${stylesVariables.media.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
`
