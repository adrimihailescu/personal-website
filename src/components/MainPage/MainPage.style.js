import styled, { css } from "styled-components"
import stylesVariables from "../../sharedStyles"

export const MainWrapper = styled.main`
  min-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background: ${stylesVariables.colors.grey};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${stylesVariables.colors.primary30};
    border-radius: 20px;
    border: 3px solid #37338c;
  }

  @media (max-width: 700px) {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
`

export const SectionPanel = styled.section`
  position: relative;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: ${stylesVariables.colors.mainColor};
  text-align: center;
  align-items: center;
  transition: all ${stylesVariables.animationTime.mainPage}ms
    ${stylesVariables.easing.inQuad};
  /* transition: all 0.7s ease; */ //original

  font-size: 20px;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      flex: 10;
      cursor: default;
    `}
  /* ${({ state }) =>
    state === "entering" ||
    (state === "entered" &&
      css`
        flex: 10;
      `)} */

  /* ${({ state }) =>
    state === "exiting" ||
    (state === "exited" &&
      css`
        flex: 1;
      `)} */

  // applyes to all child items of panel section
   > div {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    max-width: 1200px;
  }
`
