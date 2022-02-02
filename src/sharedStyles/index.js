import styled, { css } from "styled-components"

const stylesVariables = {
  colors: {
    grey: "#474747",
    greyDark: "#333538",
    colorTitle: "#ADA7FF", //color used for titles
    mainText: "#c1beff",
    mainColor: "#645cff", // color used for text
    primary30: "#938dff",
    primary80: "#37338c",
  },
  spacing: {
    xs: "20px",
    sm: "20px",
    md: "20px",
    lg: "20px",
    xl: "300px",
  },
  easing: {
    inQuint: "cubic-bezier(0.64, 0, 0.78, 0)",
    inOUtQuint: "cubic-bezier(0.83, 0, 0.17, 1)",
    inExpo: "cubic-bezier(0.7, 0, 0.84, 0)",
    inOutBack: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    inBack: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    inSine: "cubic-bezier(0.12, 0, 0.39, 0)",
    outSine: "cubic-bezier(0.61, 1, 0.88, 1)",
    inOutSine: "cubic-bezier(0.37, 0, 0.63, 1)",
    inQuad: "cubic-bezier(0.11, 0, 0.5, 0)",
    outQuint: "cubic-bezier(0.45, 0, 0.55, 1)",
  },
  animationTime: {
    mainPage: 600,
  },
}

export const SectionPanelTitle = styled.h1`
  font-size: 4rem;
  color: ${stylesVariables.colors.colorTitle};
  text-transform: capitalize;
  text-shadow: 2px 2px 2px #37338c, 3px 3px 3px #37338c;
  transition: all 0.25s ease;
  ${({ isTextVertical }) =>
    isTextVertical &&
    css`
      margin: 20px 0 0 0;
      text-orientation: mixed;
      writing-mode: vertical-rl;
      /* font-size: 80px; */
    `};

  ${({ isHidden, state }) =>
    state === "entering" &&
    isHidden &&
    css`
      transform: translateY(5%);
      opacity: 1;
      display: block;
    `};
  ${({ isHidden, state }) =>
    state === "entered" &&
    !isHidden &&
    css`
      transform: translateY(0);
      opacity: 1;
    `};
  ${({ isHidden, state }) =>
    state === "exiting" &&
    isHidden &&
    css`
      transform: translateY(2%);
      opacity: 0;
    `};
  ${({ isHidden, state }) =>
    state === "exited" &&
    isHidden &&
    css`
      transform: translateY(5%);
      opacity: 0;
      display: none;
    `};
`

export const SectionContent = styled.div`
  transition: all 0.5s ease;

  ${({ state }) =>
    state === "entering" &&
    css`
      transform: translateY(5%);
      opacity: 0;
      display: block;
    `};
  ${({ state }) =>
    state === "entered" &&
    css`
      transform: translateY(0);
      opacity: 1;
    `};
  ${({ state }) =>
    state === "exiting" &&
    css`
      transform: translateY(-5%);
      opacity: 0;
    `};
  ${({ state }) =>
    state === "exited" &&
    css`
      display: none;
    `};
`

export const SectionPanelSubtitle = styled.h3`
  color: ${stylesVariables.colors.mainText};
  font-size: 1.8rem;
  text-shadow: 2px 2px 2px #37338c, 3px 3px 3px #37338c;
`

export default stylesVariables
