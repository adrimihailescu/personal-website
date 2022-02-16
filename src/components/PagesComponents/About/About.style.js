import styled from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const AboutWrapper = styled.div`
  // content in About
  color: ${stylesVariables.colors.mainText};
  margin: 0 auto;
  max-width: 400px;
  display: block;
  padding: 30px 10px;
  border-top: 10px solid ${stylesVariables.colors.primary30};
  border-bottom: 10px solid ${stylesVariables.colors.primary30};
  border-radius: 40px;

  @media (min-width: ${stylesVariables.media.tablet}) {
    max-width: 500px;
    border-left: 0;
    border-right: 0;
    border-top: 10px solid ${stylesVariables.colors.primary30};
    border-bottom: 10px solid ${stylesVariables.colors.primary30};
  }

  @media (min-width: ${stylesVariables.media.screen}) {
    max-width: 600px;
    border-left: 0;
    border-right: 0;
    border-top: 10px solid ${stylesVariables.colors.primary30};
    border-bottom: 10px solid ${stylesVariables.colors.primary30};
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    max-width: 800px;
    border-left: 0;
    border-right: 0;
    border-top: 10px solid ${stylesVariables.colors.primary30};
    border-bottom: 10px solid ${stylesVariables.colors.primary30};
  }
`
