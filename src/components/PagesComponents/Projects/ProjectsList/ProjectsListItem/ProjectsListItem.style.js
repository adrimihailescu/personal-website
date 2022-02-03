import styled, { css } from "styled-components"
import stylesVariables from "../../../../../sharedStyles"

export const Card = styled.li`
  list-style: none;
  padding: 10px;
  margin: 20px;
  background-color: ${stylesVariables.colors.grey};
  width: 80%;
  border-radius: 40px;
  h5 {
    color: ${stylesVariables.colors.primary30};
    font-size: ${stylesVariables.fontSizes.bodyText.tablet};
    font-style: italic;
  }

  img {
    border-radius: 30px;
    width: 100%;
    height: 100%;
  }
  p {
    color: ${stylesVariables.colors.primary30};
  }
`
