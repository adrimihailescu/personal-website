import styled, { css } from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const DivPanelAbout = styled.div`
  // content in About
  color: ${stylesVariables.colors.mainText};
  margin: 0 auto;
  max-width: 400px;
  display: block;
  padding: 10px;
  border-bottom: 2px;
  text-shadow: 2px 2px 2px #37338c, 3px 3px 3px #37338c;
  border-top: 10px solid ${stylesVariables.colors.grey};
  border-bottom: 10px solid ${stylesVariables.colors.grey};
  border-radius: 40px;

  @media (min-width: ${stylesVariables.media.tablet}) {
    max-width: 500px;
    border-left: 0;
    border-right: 0;
    border-top: 10px solid ${stylesVariables.colors.grey};
    border-bottom: 10px solid ${stylesVariables.colors.grey};
  }

  @media (min-width: ${stylesVariables.media.screen}) {
    max-width: 600px;
    border-left: 0;
    border-right: 0;
    border-top: 10px solid ${stylesVariables.colors.grey};
    border-bottom: 10px solid ${stylesVariables.colors.grey};
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    max-width: 800px;
    border-left: 0;
    border-right: 0;
    border-top: 10px solid ${stylesVariables.colors.grey};
    border-bottom: 10px solid ${stylesVariables.colors.grey};
  }
`
