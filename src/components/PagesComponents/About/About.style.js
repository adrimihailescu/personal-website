import styled, { css } from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const DivPanelAbout = styled.div`
  // content in About
  color: ${stylesVariables.colors.mainText};
  font-size: ${stylesVariables.fontSizes.bodyText.laptop};
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-style: italic;
  margin: 20px;
  border-bottom: 2px;
  text-shadow: 2px 2px 2px #37338c, 3px 3px 3px #37338c;

  @media (max-width: 700px) {
    font-size: ${stylesVariables.fontSizes.bodyText.tablet};
  }

  @media (max-width: 500px) {
    font-size: ${stylesVariables.fontSizes.bodyText.mobile};
  }
`
