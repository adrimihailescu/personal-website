import styled, { css } from "styled-components"
import stylesVariables from "../../../../../sharedStyles"

export const Card = styled.li`
  list-style: none;
  padding: 10px;
  margin: 10px;
  background-color: ${stylesVariables.colors.grey};

  border-radius: 30px;
  a {
    text-decoration: none;
    color: ${stylesVariables.colors.primary30};
    font-style: italic;
    font-size: 1.8rem;
    &:hover {
      color: cyan;
    }
  }

  img {
    border-radius: 49% 51% 52% 48% / 49% 47% 54% 52%;
    width: 100%;
  }
  p {
    color: ${stylesVariables.colors.primary30};
  }
`
