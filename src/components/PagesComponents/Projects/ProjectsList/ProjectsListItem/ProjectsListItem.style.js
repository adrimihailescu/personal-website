import styled, { css } from "styled-components"
import stylesVariables from "../../../../../sharedStyles"

export const Card = styled.li`
  list-style: none;
  padding: 10px;
  margin: 10px;
  background-color: ${stylesVariables.colors.grey};
  border-radius: 10px;
  a {
    text-decoration: none;
    color: ${stylesVariables.colors.primary30};
    font-style: italic;
    font-size: 1.8rem;
    &:hover {
      color: ${stylesVariables.colors.primary30};
    }
  }

  img {
    border-radius: 30px;
    width: 100%;
  }
`
