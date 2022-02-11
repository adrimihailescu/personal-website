import styled, { css } from "styled-components"

const stylesVariables = {
  colors: {
    grey: "#474747",
    greyDark: "#333538",
    greyDarkSlate: "#2f4f4f",
    colorTitle: "#ADA7FF", //color used for titles
    mainText: "#c1beff",
    primary0: "#f0efff",
    mainColor: "#645cff", // color used for text
    primary30: "#938dff",
    primary50: "#8400ff",
    primary80: "#37338c",
    special: "#ff005a",
  },
  fontSizes: {
    logoText: {
      laptop: "60px",
      tablet: "40px",
      mobile: "20px",
    },
    bodyText: {
      laptop: "23px",
      tablet: "20px",
      mobile: "16px",
    },
    heading1: {
      laptop: "60px",
      tablet: "45px",
      mobile: "30px",
    },
    heading2: {
      laptop: "30px",
      tablet: "25px",
      mobile: "20px",
    },
    heading3: {
      laptop: "26px",
      tablet: "22px",
      mobile: "18px",
    },
    heading4: {
      laptop: "23px",
      tablet: "20px",
      mobile: "16px",
    },
    aTags: {
      laptop: "20px",
      tablet: "16px",
      mobile: "12px",
    },
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
    outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
    inOutBack: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    inBack: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    inSine: "cubic-bezier(0.12, 0, 0.39, 0)",
    outSine: "cubic-bezier(0.61, 1, 0.88, 1)",
    inOutSine: "cubic-bezier(0.37, 0, 0.63, 1)",
    inQuad: "cubic-bezier(0.11, 0, 0.5, 0)",
    outQuint: "cubic-bezier(0.45, 0, 0.55, 1)",
    outCirc: "cubic-bezier(0, 0.55, 0.45, 1)",
  },
  animationTime: {
    mainPage: 650,
    menuTitles: 600,
  },

  // media breakpoints
  media: {
    bigScreen: "1250px",
    screen: "999px",
    tablet: "700px",
    mobile: "500px",
  },
  headerHight: {
    bigScreen: "110px",
    screen: "90px",
    tablet: "90px",
    mobile: "70px",
  },
}

export const SectionPanelTitle = styled.h1`
  color: ${stylesVariables.colors.colorTitle};
  text-transform: capitalize;
  text-shadow: 2px 2px 2px #37338c, 3px 3px 3px #37338c;

  ${({ isTextVertical }) =>
    isTextVertical &&
    css`
      text-orientation: mixed;
      writing-mode: vertical-rl;
    `};
`

export const SectionContent = styled.div`
  transition: all 0.5s ease;
  padding: 10px;
  font-size: ${stylesVariables.fontSizes.bodyText.mobile};
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

export const SectionPanelSubtitle = styled.h2`
  color: ${stylesVariables.colors.mainText};
  text-shadow: 2px 2px 2px #37338c, 3px 3px 3px #37338c;
`

export default stylesVariables
