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
}

export const SectionPanelTitle = styled.h1`
  font-size: 4rem;
  color: ${stylesVariables.colors.colorTitle};
  /* transition: all 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11) 0.5s;
  ${({ isTextVertical }) =>
    isTextVertical &&
    css`
      text-orientation: mixed;
      writing-mode: vertical-rl;
    `}; */
`

export const SectionPanelSubtitle = styled.h3`
  color: ${stylesVariables.colors.mainText};
`

export const DivPanel = styled.div`
  // content in About
  color: ${stylesVariables.colors.mainText};
  padding: 10px;
  font-style: italic;
`

//create styled components for Contact form, all paragraphs, submit button, (label, input,textarea?),
//styled components for Projects section
// create styled components for ProjectsList ul;
//create styled component for ProjectsListItem li and a tag (already a file)
// add more  general stylesVariables like padding, margin etc

export default stylesVariables
